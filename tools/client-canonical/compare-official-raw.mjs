import {readFile,writeFile} from 'node:fs/promises'
import {resolve,join} from 'node:path'
import {createHash} from 'node:crypto'
import parser from '@babel/parser'

const signature=names=>[...new Set(names)].sort().join('\u0000')
const hash=x=>createHash('sha256').update(x).digest('hex')
const propName=node=>node?.type==='Identifier'?node.name:node?.type==='StringLiteral'?node.value:null
const isObject=(node,name)=>node?.type==='Identifier'&&node.name===name

function rawExports(factory){
  const owner=factory.params[1]?.name
  const names=new Set()
  function walk(node){
    if(!node||typeof node!=='object')return
    if(node.type==='AssignmentExpression'&&node.left?.type==='MemberExpression'&&isObject(node.left.object,owner)){
      const name=propName(node.left.property)
      if(name&&!['__esModule','default'].includes(name))names.add(name)
    }
    if(node.type==='CallExpression'&&node.arguments?.length>=2){
      if(node.callee?.type==='MemberExpression'&&propName(node.callee.property)==='d'&&
        isObject(node.arguments[0],owner)){
        const name=propName(node.arguments[1])
        if(name&&!['__esModule','default'].includes(name))names.add(name)
      }
    }
    if(node.type==='CallExpression'&&node.callee?.type==='MemberExpression'&&
      isObject(node.callee.object,'Object')&&propName(node.callee.property)==='defineProperty'&&
      isObject(node.arguments?.[0],owner)){
      const name=propName(node.arguments[1])
      if(name&&!['__esModule','default'].includes(name))names.add(name)
    }
    for(const [key,value]of Object.entries(node)){
      if(['loc','comments','tokens','leadingComments','trailingComments','extra'].includes(key))continue
      if(Array.isArray(value)){for(const child of value)if(child&&typeof child==='object')walk(child)}
      else if(value&&typeof value==='object')walk(value)
    }
  }
  walk(factory.body)
  return [...names].sort()
}
function rootFactories(ast){
  let expr=ast.program.body[0]
  expr=expr.type==='VariableDeclaration'?expr.declarations[0]?.init:expr.expression
  if(expr?.type==='UnaryExpression')expr=expr.argument
  if(expr?.type!=='CallExpression'||expr.callee.type!=='FunctionExpression')throw Error('Unsupported original Webpack outer wrapper')
  const first=expr.arguments[0]
  if(first?.type!=='ArrayExpression')throw Error('Expected original Webpack module array')
  return first.elements
}
export async function compareRawClient(root,captureDir){
  const bundles=[]
  for(const bundle of ['Game.bundle','ggs.dll']){
    const manifest=JSON.parse(await readFile(join(root,'bundles',bundle,'manifest.json'),'utf8'))
    const source=await readFile(join(captureDir,'raw',bundle+'.js'),'utf8')
    const factories=rootFactories(parser.parse(source,{sourceType:'unambiguous'}))
    const extracted=[]
    for(let id=0;id<factories.length;id++){
      const factory=factories[id]
      if(!factory)continue
      if(factory.type!=='FunctionExpression')throw Error('Unexpected Webpack factory '+bundle+':'+id)
      const exported=rawExports(factory)
      extracted.push({webpackId:String(id),exports:exported,bytes:factory.end-factory.start,
        factorySha256:hash(source.slice(factory.start,factory.end))})
    }
    const oldById=new Map(manifest.modules.map(m=>[String(m.webpackId),m]))
    const oldByName=new Map()
    for(const m of manifest.modules){
      for(const name of m.lineage.filter(x=>x.startsWith('export:')).map(x=>x.slice(7))){
        if(!oldByName.has(name))oldByName.set(name,[])
        oldByName.get(name).push(m)
      }
    }
    const newByName=new Map()
    for(const m of extracted)for(const name of m.exports){
      if(!newByName.has(name))newByName.set(name,[])
      newByName.get(name).push(m)
    }
    const proven=[]
    const drift=[]
    const seen=new Set()
    const oldToLive=new Map()
    const liveToOld=new Map()
    for(const [name,older]of oldByName){
      const newer=newByName.get(name)??[]
      if(older.length!==1||newer.length!==1)continue
      const old=older[0],now=newer[0]
      const key=old.webpackId+'|'+now.webpackId
      if(oldToLive.has(String(old.webpackId))&&oldToLive.get(String(old.webpackId))!==now.webpackId)throw Error('Conflicting old-to-live export mapping: '+bundle+' '+name)
      if(liveToOld.has(now.webpackId)&&liveToOld.get(now.webpackId)!==String(old.webpackId))throw Error('Conflicting live-to-old export mapping: '+bundle+' '+name)
      oldToLive.set(String(old.webpackId),now.webpackId)
      liveToOld.set(now.webpackId,String(old.webpackId))
      if(!seen.has(key)){
        seen.add(key)
        proven.push({anchor:name,oldId:String(old.webpackId),newId:now.webpackId,oldNodePath:old.path})
      }
      if(String(old.webpackId)!==now.webpackId)drift.push({anchor:name,oldId:String(old.webpackId),newId:now.webpackId})
    }
    const matched=proven.filter(e=>e.oldId===e.newId).length
    const moved=proven.filter(e=>e.oldId!==e.newId).length
    const unanchored=extracted.filter(x=>x.exports.length===0).length
    bundles.push({bundle,originalModuleCount:manifest.modules.length,liveModuleCount:extracted.length,
      liveRawSha256:hash(source),uniqueExportAnchors:proven.length,sameModuleIndex:matched,
      relocatedAnchors:moved,unanchored,driftExamples:drift.slice(0,30),
      newUniqueExports:newByName.size,oldUniqueExports:oldByName.size,
      verifiedMappings:proven})
  }
  return {schemaVersion:1,capture:'2026-10-25',method:'parsed-official-webpack-factory-export-evidence',
    crossVersionIdentityProof:'unique-named-export-only',fullSemanticParityProven:false,bundles}
}
if(process.argv[1]?.endsWith('/compare-official-raw.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const capture=resolve(process.argv[3]??'/tmp/gge-official-20261025-live')
  const out=resolve(process.argv[4]??'/tmp/gge-official-raw-compare.json')
  const result=await compareRawClient(root,capture)
  await writeFile(out,JSON.stringify(result,null,2)+'\n')
  console.log(JSON.stringify(result.bundles.map(({bundle,originalModuleCount,liveModuleCount,uniqueExportAnchors,sameModuleIndex,relocatedAnchors,unanchored,driftExamples})=>({bundle,originalModuleCount,liveModuleCount,uniqueExportAnchors,sameModuleIndex,relocatedAnchors,unanchored,driftExamples:driftExamples.slice(0,5)}))))
}
