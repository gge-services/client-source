import {createHash} from 'node:crypto'
import {readFile,writeFile} from 'node:fs/promises'
import {join,resolve} from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import {buildSemanticGraph} from './build-semantic-graph.mjs'
import {deriveGraphIdentities} from './resolve-graph-identities.mjs'

const traverse=traverseModule.default??traverseModule
const sha=data=>createHash('sha256').update(data).digest('hex')

export function neighborhoodKey(incoming,outgoing){
  const inc=[...new Set(incoming)].sort()
  const out=[...new Set(outgoing)].sort()
  if(!inc.length||!out.length)return null
  return JSON.stringify([inc,out])
}

export function factoryDependencies(source){
  const ast=parser.parse(source,{sourceType:'unambiguous'})
  const top=ast.program.body[0]
  let call=top.type==='VariableDeclaration'?top.declarations[0]?.init:top.expression
  if(call?.type==='UnaryExpression')call=call.argument
  if(call?.type!=='CallExpression'||call.arguments[0]?.type!=='ArrayExpression')throw Error('Expected official Webpack factory array')
  const factories=call.arguments[0].elements
  const byNode=new Map()
  factories.forEach((factory,id)=>{if(factory)byNode.set(factory,id)})
  const outgoing=factories.map(()=>new Set())
  const incoming=factories.map(()=>new Set())
  traverse(ast,{
    CallExpression(path){
      const parent=path.findParent(node=>node.isFunctionExpression()&&byNode.has(node.node))
      if(!parent)return
      const factory=parent.node,id=byNode.get(factory),loader=factory.params[2]
      const n=path.node
      if(loader?.type!=='Identifier'||n.callee.type!=='Identifier'||n.callee.name!==loader.name||
        n.arguments.length!==1||n.arguments[0].type!=='NumericLiteral')return
      if(path.scope.getBinding(loader.name)?.identifier!==loader)return
      const target=n.arguments[0].value
      if(!Number.isInteger(target)||target<0||target>=factories.length||!factories[target])throw Error('Invalid referenced official module '+id+':'+target)
      outgoing[id].add(target)
      incoming[target].add(id)
    }
  })
  return {factories,source,outgoing:outgoing.map(x=>[...x].sort((a,b)=>a-b)),
    incoming:incoming.map(x=>[...x].sort((a,b)=>a-b))}
}

async function verifiedCapture(dir){
  const capture=JSON.parse(await readFile(join(dir,'capture.json'),'utf8'))
  const content=await readFile(join(dir,'raw/ggs.dll.js'),'utf8')
  const expected=capture.bundles.find(x=>x.bundle==='ggs.dll')
  if(!expected||sha(content)!==expected.sha256)throw Error('Official DLL capture checksum mismatch')
  return factoryDependencies(content)
}

export async function auditVerifiedNeighborhoods(root,previousDir,currentDir){
  const graph=await buildSemanticGraph(root,{ignoreVerifiedNeighborhoods:true})
  const manifest=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const candidates=deriveGraphIdentities(graph).candidates.filter(x=>x.bundle==='ggs.dll')
  const oldById=new Map(manifest.modules.map(x=>[String(x.webpackId),x]))
  const oldBySpec=new Map(graph.nodes.filter(x=>x.bundle==='ggs.dll').map(x=>[x.specifier,x]))
  const sources=[
    (await readFile(join(root,'graphs/2026-10-25-verified-raw-exports.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
      .filter(x=>x.bundle==='ggs.dll').map(x=>[x.previousModuleId,x.currentModuleId]),
    (await readFile(join(root,'graphs/2026-10-25-event-identities.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
      .map(x=>[x.previousWebpackId,x.currentWebpackId]),
    (await readFile(join(root,'graphs/2026-10-25-literal-identities.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
      .map(x=>[x.previousWebpackId,x.currentWebpackId])
  ].flat()
  const oldAnchors=new Map(),liveAnchors=new Map()
  for(const [oldId,newId]of sources){
    const owner=oldById.get(String(oldId))
    const label=oldBySpec.get(owner?.specifier)?.id
    if(!label)continue
    const old=oldAnchors.get(String(oldId)),current=liveAnchors.get(Number(newId))
    if(old&&old!==label||current&&current!==label)throw Error('Conflicting semantic export anchor')
    oldAnchors.set(String(oldId),label)
    liveAnchors.set(Number(newId),label)
  }
  const previous=await verifiedCapture(previousDir)
  const current=await verifiedCapture(currentDir)
  if(previous.factories.length!==current.factories.length)throw Error('Changed DLL factory array shape')
  const baselineSignatures=new Map()
  for(const candidate of candidates){
    const incoming=graph.edges.filter(x=>x.bundle==='ggs.dll'&&x.toSpecifier===candidate.specifier&&x.from).map(x=>x.from)
    const outgoing=graph.edges.filter(x=>x.bundle==='ggs.dll'&&x.fromSpecifier===candidate.specifier&&x.to).map(x=>x.to)
    const key=neighborhoodKey(incoming,outgoing)
    if(!key)continue
    if(!baselineSignatures.has(key))baselineSignatures.set(key,[])
    baselineSignatures.get(key).push(candidate)
  }
  const currentSignatures=new Map()
  for(let i=0;i<previous.factories.length;i++){
    if(!previous.factories[i])continue
    const incoming=previous.incoming[i].map(id=>liveAnchors.get(id)).filter(Boolean)
    const outgoing=previous.outgoing[i].map(id=>liveAnchors.get(id)).filter(Boolean)
    const key=neighborhoodKey(incoming,outgoing)
    if(!key)continue
    if(!currentSignatures.has(key))currentSignatures.set(key,[])
    currentSignatures.get(key).push(i)
  }
  const matches=[]
  for(const [key,old]of baselineSignatures){
    const live=currentSignatures.get(key)
    if(old.length!==1||live?.length!==1)continue
    const candidate=old[0],index=live[0]
    if(liveAnchors.has(index))continue
    const before=previous.factories[index],after=current.factories[index]
    if(!after)continue
    const previousText=previous.source.slice(before.start,before.end)
    const currentText=current.source.slice(after.start,after.end)
    if(sha(previousText)!==sha(currentText))continue
    const module=manifest.modules.find(x=>x.path===candidate.sourcePath)
    if(!module||oldBySpec.get(module.specifier)?.id!==null)throw Error('Unexpected named baseline for graph candidate')
    const canonical=await readFile(join(root,'bundles/ggs.dll',candidate.sourcePath),'utf8')
    if(sha(canonical)!==module.canonicalSha256)throw Error('Canonical graph source hash mismatch')
    const proof=JSON.parse(key)
    matches.push({bundle:'ggs.dll',semanticId:candidate.id,sourcePath:candidate.sourcePath,
      previousWebpackId:String(module.webpackId),liveWebpackId:String(index),canonicalSha256:module.canonicalSha256,
      previousLiveFactorySha256:sha(previousText),currentLiveFactorySha256:sha(currentText),
      incomingAnchors:proof[0],outgoingAnchors:proof[1],verifiedIdenticalLiveFactories:true})
  }
  matches.sort((a,b)=>a.semanticId.localeCompare(b.semanticId))
  return {schemaVersion:1,baseline:'2026-10-16',previous:'2026-10-25',current:'2026-10-27',
    uniqueSourceAnchors:oldAnchors.size,matched:matches.length,identities:matches}
}

if(process.argv[1]?.endsWith('/audit-neighborhoods.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const before=resolve(process.argv[3]??'/tmp/gge-official-20261025-live')
  const after=resolve(process.argv[4]??'/tmp/gge-official-20261027-rawdiff')
  const output=resolve(process.argv[5]??join(root,'graphs/2026-10-25-to-2026-10-27-neighborhoods.jsonl'))
  auditVerifiedNeighborhoods(root,before,after).then(async result=>{
    await writeFile(output,result.identities.map(x=>JSON.stringify(x)).join('\n')+'\n')
    console.log(JSON.stringify({mappedAnchors:result.uniqueSourceAnchors,verifiedNeighborhoods:result.matched,
      paths:result.identities.map(x=>x.sourcePath)}))
  }).catch(error=>{console.error(error);process.exitCode=1})
}
