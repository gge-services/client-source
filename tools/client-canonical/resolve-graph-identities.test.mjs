import {test} from 'node:test'
import assert from 'node:assert/strict'
import {buildSemanticGraph} from './build-semantic-graph.mjs'
import {dirname,join} from 'node:path'
import {fileURLToPath} from 'node:url'
import {deriveGraphIdentities} from './resolve-graph-identities.mjs'

test('derives collision-free two-sided identities from anchored dependency graph',async()=>{
  const graph=await buildSemanticGraph(join(dirname(fileURLToPath(import.meta.url)),'../..'))
  const audit=deriveGraphIdentities(graph)
  assert.equal(audit.verifiedNamed,6626)
  assert.ok(audit.derivedCandidates>0)
  assert.equal(audit.derivedCandidates+audit.unresolved,224)
  assert.equal(new Set(audit.candidates.map(x=>x.id)).size,audit.derivedCandidates)
  assert.ok(audit.candidates.every(x=>x.predecessorCount>0&&x.successorCount>0))
})

test('generated webpack specifier and filename churn does not rename two-sided graph candidates',async()=>{
  const graph=await buildSemanticGraph(join(dirname(fileURLToPath(import.meta.url)),'../..'))
  const original=deriveGraphIdentities(graph)
  const replacements=new Map()
  const shift=x=>{
    if(!x)return x
    if(!replacements.has(x))replacements.set(x,'gge-module:rotated_'+replacements.size.toString(36))
    return replacements.get(x)
  }
  const clone={
    ...graph,
    nodes:graph.nodes.map(n=>n.id?n:{...n,specifier:shift(n.specifier),path:'modules/anonymous/'+shift(n.specifier)+'.js'}),
    edges:graph.edges.map(e=>({
      ...e,
      fromSpecifier:e.from?e.fromSpecifier:shift(e.fromSpecifier),
      toSpecifier:e.to?e.toSpecifier:shift(e.toSpecifier)
    }))
  }
  const changed=deriveGraphIdentities(clone)
  assert.deepEqual(changed.candidates.map(x=>x.id),original.candidates.map(x=>x.id))
  assert.equal(changed.unresolved,original.unresolved)
})

test('ambiguous context does not receive an asserted durable identity',()=>{
  const graph={
    sourceSnapshot:'test',stableNodeCount:2,unresolvedNodeCount:2,
    nodes:[
      {bundle:'bundle',id:'A',specifier:'a'},
      {bundle:'bundle',id:'B',specifier:'b'},
      {bundle:'bundle',id:null,specifier:'x'},
      {bundle:'bundle',id:null,specifier:'y'}
    ],
    edges:[
      {bundle:'bundle',from:'A',fromSpecifier:'a',to:null,toSpecifier:'x'},
      {bundle:'bundle',from:'A',fromSpecifier:'a',to:null,toSpecifier:'y'},
      {bundle:'bundle',from:null,fromSpecifier:'x',to:'B',toSpecifier:'b'},
      {bundle:'bundle',from:null,fromSpecifier:'y',to:'B',toSpecifier:'b'}
    ]
  }
  const r=deriveGraphIdentities(graph)
  assert.equal(r.derivedCandidates,0)
  assert.equal(r.ambiguousCandidates,2)
  assert.equal(r.unresolved,2)
})
