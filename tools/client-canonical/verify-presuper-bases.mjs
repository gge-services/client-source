import {createHash} from 'node:crypto'
import {readFile} from 'node:fs/promises'
import {join} from 'node:path'
import parser from '@babel/parser'
import * as t from '@babel/types'

const sha=text=>createHash('sha256').update(text).digest('hex')

export const preSuperParents={
  AIsoCommand:'CastleComponent',
  CastleOpenForumCommand:'SimpleCommand',
  OpenDialogWithAdditionalExternalAssetsCommand:'SimpleCommand',
  OpenFactionEventMainDialogCommand:'OpenFactionInvasionEventMainDialogCommand',
  ShowHowToDoQuestconditionCommand:'SimpleCommand',
  SwitchToWorldmapCommand:'SimpleCommand',
  TutorialAbstractMilitaryCommand:'TutorialBasicActionCommand',
  TutorialAttackRobberBaronCommand:'TutorialBasicActionCommand',
  TutorialBasicActionCommand:'SimpleCommand',
  TutorialExpandCastleActionCommand:'TutorialStartFromQuestBookActionCommand',
  TutorialOpenQuestbookCommand:'TutorialBasicActionCommand',
  TutorialStartFromQuestBookActionCommand:'TutorialBasicActionCommand',
  TutorialUpgradeBuildingActionCommand:'TutorialStartFromQuestBookActionCommand',
  CastleComponent:'CollectableRendererList',
  OpenFactionInvasionEventMainDialogCommand:'OpenDialogWithAdditionalExternalAssetsCommand'
}

const roots={
  SimpleCommand:['_executed','_singleExecution','_commandReceiver'],
  CollectableRendererList:['_collectableRenderList']
}

function constructorData(source,name){
  const ast=parser.parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const wrapper=ast.program.body.filter(t.isVariableDeclaration).flatMap(x=>x.declarations)
    .find(x=>t.isCallExpression(x.init)&&t.isFunctionExpression(x.init.callee)&&
      x.init.callee.body.body.some(y=>t.isFunctionDeclaration(y)&&t.isIdentifier(y.id,{name})))
  if(!wrapper)throw Error('Missing verified constructor '+name)
  const fn=wrapper.init.callee.body.body.find(y=>t.isFunctionDeclaration(y)&&t.isIdentifier(y.id,{name}))
  const base=wrapper.init.arguments[0]
  const baseName=t.isMemberExpression(base)&&!base.computed&&t.isIdentifier(base.property)?base.property.name:null
  const body=fn.body.body
  const first=body[0]
  const local=t.isVariableDeclaration(first)&&first.declarations.length===1&&
    t.isIdentifier(first.declarations[0].id)&&t.isThisExpression(first.declarations[0].init)?
    first.declarations[0].id.name:null
  const init=[]
  if(local){
    for(const stmt of body.slice(1)){
      if(t.isExpressionStatement(stmt)&&t.isIdentifier(stmt.expression,{name:'CONSTRUCTOR_HACK'}))break
      const expr=t.isExpressionStatement(stmt)?stmt.expression:null
      if(!t.isAssignmentExpression(expr,{operator:'='})||!t.isMemberExpression(expr.left)||
        expr.left.computed||!t.isIdentifier(expr.left.object,{name:local})||
        !t.isIdentifier(expr.left.property))throw Error('Unsupported parent initialization '+name)
      init.push(expr.left.property.name)
    }
  }else if(!roots[name]){
    const last=body[0]
    if(body.length!==1||!t.isReturnStatement(last)||
      !t.isLogicalExpression(last.argument,{operator:'||'}))
      throw Error('Parent constructor performs unverified work: '+name)
  }else{
    if(!body.length||body.some(stmt=>!t.isExpressionStatement(stmt)||
      !t.isAssignmentExpression(stmt.expression,{operator:'='})||
      !t.isMemberExpression(stmt.expression.left)||stmt.expression.left.computed||
      !t.isThisExpression(stmt.expression.left.object)||!t.isIdentifier(stmt.expression.left.property)))
      throw Error('Root constructor has non-field side effects: '+name)
    for(const stmt of body)init.push(stmt.expression.left.property.name)
  }
  const accessors=new Set()
  for(const stmt of wrapper.init.callee.body.body){
    const e=t.isExpressionStatement(stmt)?stmt.expression:null
    if(!t.isCallExpression(e)||!t.isMemberExpression(e.callee)||!t.isIdentifier(e.callee.object,{name:'Object'})||
      !t.isIdentifier(e.callee.property,{name:'defineProperty'}))continue
    if(t.isMemberExpression(e.arguments[0])&&t.isIdentifier(e.arguments[0].object,{name})&&
      t.isStringLiteral(e.arguments[1]))accessors.add(e.arguments[1].value)
  }
  return {baseName,fields:[...new Set(init)].sort(),accessors:[...accessors].sort()}
}

export function assertNoPreSuperFieldCollision(fields,ancestorFields){
  for(const name of fields)
    if(ancestorFields.has(name))throw Error('Pre-super property shadows an ancestor initializer: '+name)
}

export async function verifyPreSuperFamilies(root){
  const game=JSON.parse(await readFile(join(root,'bundles/Game.bundle/manifest.json'),'utf8'))
  const dll=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const cached=new Map()
  const get=async name=>{
    if(cached.has(name))return cached.get(name)
    const bundle=name==='SimpleCommand'?'ggs.dll':'Game.bundle'
    const path=name==='SimpleCommand'?'modules/classes/SimpleCommand.js':'modules/exports/'+name+'.js'
    const manifest=bundle==='ggs.dll'?dll:game
    const original=[...manifest.modules,...(manifest.symbolViews??[])].find(x=>x.path===path)
    if(!original)throw Error('Missing canonical ancestor: '+name)
    const source=await readFile(join(root,'bundles',bundle,path),'utf8')
    if(sha(source)!==original.canonicalSha256)throw Error('Parent source hash mismatch: '+name)
    const data={...constructorData(source,name),bundle,path,hash:original.canonicalSha256}
    cached.set(name,data)
    return data
  }
  for(const [name,fields]of Object.entries(roots)){
    const data=await get(name)
    if(data.baseName||fields.some(field=>!data.fields.includes(field))||
      data.fields.some(field=>!fields.includes(field)))
      throw Error('Unsupported base constructor behavior: '+name)
  }
  const allowed=new Set(Object.keys(preSuperParents).filter(x=>x.endsWith('Command')&&x!=='OpenFactionInvasionEventMainDialogCommand'))
  const proofs=[]
  for(const name of allowed){
    const chain=[],seen=new Set(),own=(await get(name)).fields
    let next=name
    while(preSuperParents[next]){
      if(seen.has(next))throw Error('Cyclic parent chain: '+name)
      seen.add(next)
      const item=await get(next)
      if(item.baseName!==preSuperParents[next])throw Error('Unexpected inherited base for '+next)
      chain.push(item)
      next=preSuperParents[next]
    }
    if(!roots[next])throw Error('Unverified root for '+name+': '+next)
    const base=await get(next)
    chain.push(base)
    const inherited=new Set(chain.slice(1).flatMap(x=>[...x.fields,...x.accessors]))
    assertNoPreSuperFieldCollision(own,inherited)
    proofs.push({className:name,root:next,ancestors:chain.slice(1).map(x=>({source:x.path,sha256:x.hash})),
      preSuperFields:own,fieldCollisionProvenAbsent:true})
  }
  return {safePreSuperConstructors:allowed,proofs}
}
