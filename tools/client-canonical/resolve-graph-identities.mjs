import {createHash} from 'node:crypto'
import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {dirname,resolve,join} from 'node:path'
import {buildSemanticGraph} from './build-semantic-graph.mjs'

const digest = x=>createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0,24)
const key=(bundle,specifier)=>bundle+'\u0000'+specifier

export function deriveGraphIdentities(graph) {
  const forward=new Map(),reverse=new Map()
  for(const e of graph.edges){
    const source=key(e.bundle,e.fromSpecifier),target=key(e.bundle,e.toSpecifier)
    const to=forward.get(source)??new Set(),from=reverse.get(target)??new Set()
    if(e.to)to.add(e.to)
    if(e.from)from.add(e.from)
    forward.set(source,to)
    reverse.set(target,from)
  }
  const candidates=[]
  for(const node of graph.nodes) {
    if(node.id)continue
    const identity=key(node.bundle,node.specifier)
    const predecessors=[...(reverse.get(identity)??[])].sort()
    const successors=[...(forward.get(identity)??[])].sort()
    if(!predecessors.length||!successors.length)continue
    const proof={bundle:node.bundle,predecessors,successors}
    candidates.push({id:node.bundle+':graph-context:'+digest(proof),bundle:node.bundle,specifier:node.specifier,
      confidence:'unique-bidirectional-anchor-candidate',
      predecessorCount:predecessors.length,successorCount:successors.length,
      anchorsDigest:digest(proof),sourcePath:node.path})
  }
  const counts=new Map()
  for(const candidate of candidates)counts.set(candidate.id,(counts.get(candidate.id)??0)+1)
  const matches=candidates.filter(c=>counts.get(c.id)===1)
  const collisions=candidates.filter(c=>counts.get(c.id)!==1)
  return {schemaVersion:1,snapshot:graph.sourceSnapshot,verifiedNamed:graph.stableNodeCount,
    derivedCandidates:matches.length,ambiguousCandidates:collisions.length,
    unresolved:graph.unresolvedNodeCount-matches.length,
    candidates:matches.sort((a,b)=>a.id.localeCompare(b.id)),
    collisions:collisions.sort((a,b)=>a.id.localeCompare(b.id))}
}

if(process.argv[1]?.endsWith('/resolve-graph-identities.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const target=resolve(process.argv[3]??join(root,'graphs/2026-10-16-derived-identities.jsonl'))
  const graph=await buildSemanticGraph(root)
  const report=deriveGraphIdentities(graph)
  await mkdir(dirname(target),{recursive:true})
  await writeFile(target,report.candidates.map(x=>JSON.stringify(x)).join('\n')+'\n')
  console.log(JSON.stringify({verifiedNamed:report.verifiedNamed,derivedCandidates:report.derivedCandidates,
    ambiguousCandidates:report.ambiguousCandidates,unresolved:report.unresolved}))
}
