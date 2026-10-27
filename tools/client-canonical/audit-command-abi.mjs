import {createHash} from 'node:crypto'
import {readFile,writeFile} from 'node:fs/promises'
import {join,resolve} from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse=traverseModule.default??traverseModule
const digest=s=>createHash('sha256').update(s).digest('hex')
const name=node=>node?.type==='Identifier'?node.name:node?.type==='StringLiteral'?node.value:null

export function getCommandAbi(source,className,isFactory=false){
  const wrapped=isFactory?'('+source+')':source
  const ast=parser.parse(wrapped,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const signatures=new Map()
  const record=(kind,method,arity)=>{
    if(!method)return
    const key=kind+':'+method
    if(signatures.has(key)&&signatures.get(key)!==arity)throw Error('Conflicting signature '+className+' '+key)
    signatures.set(key,arity)
  }
  const isPrototype=expr=>expr?.type==='MemberExpression'&&!expr.computed&&
    expr.object.type==='Identifier'&&expr.object.name===className&&name(expr.property)==='prototype'
  traverse(ast,{
    FunctionDeclaration(path){
      if(path.node.id?.name===className)record('constructor','constructor',path.node.params.length)
    },
    AssignmentExpression(path){
      const left=path.node.left,right=path.node.right
      if(left.type!=='MemberExpression'||left.computed||right.type!=='FunctionExpression')return
      if(isPrototype(left.object))record('method',name(left.property),right.params.length)
      else if(left.object.type==='Identifier'&&left.object.name===className)
        record('static',name(left.property),right.params.length)
    },
    CallExpression(path){
      const n=path.node
      if(n.callee.type!=='MemberExpression'||n.callee.object.type!=='Identifier'||n.callee.object.name!=='Object'||
        name(n.callee.property)!=='defineProperty'||n.arguments.length!==3||
        !isPrototype(n.arguments[0])||n.arguments[2].type!=='ObjectExpression')return
      const property=name(n.arguments[1])
      for(const item of n.arguments[2].properties){
        if(item.type!=='ObjectProperty'||item.value.type!=='FunctionExpression')continue
        const kind=name(item.key)
        if(kind==='get'||kind==='set')record(kind,property,item.value.params.length)
      }
    }
  })
  return Object.fromEntries([...signatures].sort((a,b)=>a[0].localeCompare(b[0])))
}

export async function auditCommandAbi(root,capture){
  const coverage=JSON.parse(await readFile(join(root,'bundles/Game.bundle/reconstructed/coverage.json'),'utf8'))
  const manifest=JSON.parse(await readFile(join(root,'bundles/Game.bundle/manifest.json'),'utf8'))
  const ledger=(await readFile(join(root,'graphs/2026-10-25-verified-raw-exports.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
  const expected=JSON.parse(await readFile(join(root,'graphs/2026-10-25-cross-version-summary.json'),'utf8'))
    .bundles.find(x=>x.bundle==='Game.bundle')
  const raw=await readFile(join(capture,'raw/Game.bundle.js'),'utf8')
  if(digest(raw)!==expected.liveRawSha256)throw Error('Official Game.bundle hash does not match verified comparison')
  const ast=parser.parse(raw,{sourceType:'unambiguous'})
  let rootCall=ast.program.body[0]
  rootCall=rootCall.type==='VariableDeclaration'?rootCall.declarations[0].init:rootCall.expression
  if(rootCall.type==='UnaryExpression')rootCall=rootCall.argument
  if(rootCall.type!=='CallExpression'||rootCall.arguments[0]?.type!=='ArrayExpression')throw Error('Unsupported official Webpack factory array')
  const factories=rootCall.arguments[0].elements
  const byName=new Map()
  for(const x of ledger.filter(x=>x.bundle==='Game.bundle')){
    if(byName.has(x.symbol))throw Error('Ambiguous verified export '+x.symbol)
    byName.set(x.symbol,x)
  }
  const byPath=new Map(manifest.modules.map(x=>[x.path,x]))
  const checked=[],unmapped=[]
  for(const entry of coverage.succeeded){
    const className=entry.name
    const original=byPath.get('modules/exports/'+className+'.js')
    const mapping=byName.get(className)
    if(!original||!mapping||String(mapping.previousModuleId)!==String(original.webpackId)){
      unmapped.push({className,reason:'no-verified-cross-revision-owner'})
      continue
    }
    const factory=factories[Number(mapping.currentModuleId)]
    if(!factory){unmapped.push({className,reason:'missing-official-factory'});continue}
    const oldCode=await readFile(join(root,'bundles/Game.bundle',original.path),'utf8')
    const newCode=raw.slice(factory.start,factory.end)
    const oldAbi=getCommandAbi(oldCode,className)
    const newAbi=getCommandAbi(newCode,className,true)
    const oldMethod=Object.fromEntries(Object.entries(oldAbi).filter(([key])=>!key.startsWith('constructor:')))
    const newMethod=Object.fromEntries(Object.entries(newAbi).filter(([key])=>!key.startsWith('constructor:')))
    checked.push({className,semanticId:'Game.bundle:export:'+className,
      previousWebpackId:String(mapping.previousModuleId),currentWebpackId:String(mapping.currentModuleId),
      baselineSourceSha256:digest(oldCode),currentFactorySha256:digest(newCode),
      methodSignatureMatches:JSON.stringify(oldMethod)===JSON.stringify(newMethod),
      previousMethodSignatures:oldMethod,currentMethodSignatures:newMethod,
      previousConstructorArity:oldAbi['constructor:constructor']??null,
      currentConstructorArity:newAbi['constructor:constructor']??null})
  }
  return {schemaVersion:1,baseline:'2026-10-16',current:'2026-10-25',
    recoveredCommands:coverage.reconstructed,matchedOwners:checked.length,unmapped,
    unchangedMethodSignatures:checked.filter(x=>x.methodSignatureMatches).length,
    changedMethodSignatures:checked.filter(x=>!x.methodSignatureMatches).length,
    unchangedConstructorArity:checked.filter(x=>x.previousConstructorArity===x.currentConstructorArity).length,
    totalMethodSignatures:checked.reduce((n,x)=>n+Object.keys(x.previousMethodSignatures).length,0),
    changed:checked.filter(x=>!x.methodSignatureMatches),records:checked}
}

if(process.argv[1]?.endsWith('/audit-command-abi.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const capture=resolve(process.argv[3]??'/tmp/gge-official-20261025-live')
  const output=resolve(process.argv[4]??join(root,'graphs/2026-10-25-command-abi.jsonl'))
  const result=await auditCommandAbi(root,capture)
  const rows=result.records.map(row=>JSON.stringify(row)).join('\n')+'\n'
  await writeFile(output,rows)
  const summary={...result,records:undefined}
  await writeFile(output.replace(/\.jsonl$/,'.summary.json'),JSON.stringify(summary,null,2)+'\n')
  console.log(JSON.stringify({recovered:result.recoveredCommands,matched:result.matchedOwners,
    unmapped:result.unmapped.length,unchanged:result.unchangedMethodSignatures,
    changed:result.changedMethodSignatures,methods:result.totalMethodSignatures,
    constructorsMatched:result.unchangedConstructorArity,examples:result.changed.slice(0,5)}))
}
