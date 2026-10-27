import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import {extractEventDefinitionId} from './event-identities.mjs'
const bundles = ['Game.bundle', 'ggs.dll', 'CacheBreaker.bundle', 'CastleLoader.bundle', 'vendor.bundle']
const digest = text => createHash('sha256').update(text).digest('hex')
export function stableNodeId(bundle, item, source=null) {
  const stable = (item.lineage ?? []).filter(value => /^(export|class|package):/.test(value)).sort()
  if (stable.length) return bundle + ':' + stable.join('|')
  if (bundle==='ggs.dll'&&source){
    const eventId=extractEventDefinitionId(source)
    if(eventId!==null)return bundle+':event:'+eventId
  }
  if (item.specifier.startsWith('gge-module:vendor-runtime')) return bundle + ':vendor-runtime'
  return null
}
export function resolveNode(graph, bundle, specifier) {
  const matching = graph.nodes.filter(n => n.bundle === bundle && n.specifier === specifier)
  return matching.length === 1 && matching[0].id ? matching[0].id : null
}
export async function buildSemanticGraph(root) {
  const nodes = [], edges = []
  for (const bundle of bundles) {
    const directory = join(root, 'bundles', bundle)
    const manifest = JSON.parse(await readFile(join(directory, 'manifest.json'), 'utf8'))
    const entries=[]
    for(const module of manifest.modules){
      const source=await readFile(join(directory,module.path),'utf8')
      entries.push({module,source,id:stableNodeId(bundle,module,source)})
    }
    const index=new Map(entries.map(x=>[x.module.specifier,x]))
    for(const {module,source,id} of entries){
      nodes.push({bundle,id,specifier:module.specifier,path:module.path,
        confidence:id? id.startsWith(bundle+':event:')?'verified-event-id':'verified-symbol':'unresolved-semantic',
        sourceSha256:module.canonicalSha256})
      for(const match of source.matchAll(/\brequire\(["'](gge-module:[^"'\n]+)["']\)/g)){
        const to=index.get(match[1])
        if(!to)throw Error('Unresolved graph dependency '+bundle+' '+module.path+' '+match[1])
        edges.push({from:id,fromSpecifier:module.specifier,to:to.id,toSpecifier:match[1],bundle})
      }
    }
  }
  const known = nodes.filter(n => n.id)
  const occurrences = new Map()
  for (const node of known) occurrences.set(node.id, (occurrences.get(node.id) ?? 0) + 1)
  const collisions = known.filter(n => occurrences.get(n.id) > 1).map(n => n.id)
  if (collisions.length) throw Error('Ambiguous graph identity ' + [...new Set(collisions)].slice(0, 10).join(', '))
  return {schemaVersion: 1, sourceSnapshot: '2026-10-16', moduleCount: nodes.length, stableNodeCount: known.length, unresolvedNodeCount: nodes.length - known.length, nodes, edges}
}
if (process.argv[1]?.endsWith('/build-semantic-graph.mjs')) {
  const root = resolve(process.argv[2] ?? '../..')
  const target = resolve(process.argv[3] ?? join(root, 'graphs/2026-10-16.json'))
  buildSemanticGraph(root).then(async graph => {
    await mkdir(dirname(target), {recursive: true})
    const index = graph.nodes.map(node => ({
      id: node.id,
      specifier: node.specifier,
      path: node.path,
      dependencies: [...new Set(graph.edges.filter(edge => edge.fromSpecifier === node.specifier && edge.bundle === node.bundle && edge.to).map(edge => edge.to))].sort(),
      unresolvedDependencyCount: graph.edges.filter(edge => edge.fromSpecifier === node.specifier && edge.bundle === node.bundle && !edge.to).length
    })).sort((a, b) => (a.id ?? a.specifier).localeCompare(b.id ?? b.specifier))
    const body = index.map(item => JSON.stringify(item)).join('\n') + '\n'
    await writeFile(target, body)
    console.log(JSON.stringify({moduleCount: graph.moduleCount, stable: graph.stableNodeCount, unresolved: graph.unresolvedNodeCount, edges: graph.edges.length, bytes: body.length, sha256: digest(body)}))
  }).catch(error => {console.error(error); process.exitCode = 1})
}
