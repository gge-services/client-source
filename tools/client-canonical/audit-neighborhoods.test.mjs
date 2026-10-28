import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {buildSemanticGraph} from './build-semantic-graph.mjs'
import {applyVerifiedNeighborhoods} from './verified-neighborhoods.mjs'
import {auditVerifiedNeighborhoods,factoryDependencies} from './audit-neighborhoods.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const previous='/tmp/gge-official-20261025-live'
const current='/tmp/gge-official-20261027-rawdiff'

test('loader dependency extraction respects lexical bindings',()=>{
  const code='!function(a){return a}([function(e,t,n){n(1);function ignored(n){n(2)}},function(e,t,n){},function(e,t,n){}]);'
  const graph=factoryDependencies(code)
  assert.deepEqual(graph.outgoing[0],[1])
  assert.deepEqual(graph.incoming[1],[0])
  assert.deepEqual(graph.incoming[2],[])
})

test('five pinned internal modules have verified source and unique neighbor identities',async()=>{
  const rows=(await readFile(join(root,'graphs/2026-10-25-to-2026-10-27-neighborhoods.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
  assert.equal(rows.length,5)
  assert.equal(new Set(rows.map(x=>x.semanticId)).size,5)
  assert.equal(new Set(rows.map(x=>x.liveWebpackId)).size,5)
  assert.ok(rows.every(x=>x.previousLiveFactorySha256===x.currentLiveFactorySha256))
  const graph=await buildSemanticGraph(root)
  for(const x of rows){
    const node=graph.nodes.find(n=>n.bundle==='ggs.dll'&&n.path===x.sourcePath)
    assert.ok(node)
    assert.equal(node.id,x.semanticId)
    assert.equal(node.confidence,'verified-three-revision-neighborhood')
    assert.equal(node.sourceSha256,x.canonicalSha256)
    assert.ok(x.incomingAnchors.length>0)
    assert.ok(x.outgoingAnchors.length>0)
  }
  assert.equal(graph.stableNodeCount,6631)
  assert.equal(graph.unresolvedNodeCount,219)
})

test('incorrect or colliding neighborhood proof fails closed',()=>{
  const nodes=[
    {bundle:'ggs.dll',id:'A',specifier:'a',path:'a.js',sourceSha256:'a'},
    {bundle:'ggs.dll',id:'B',specifier:'b',path:'b.js',sourceSha256:'b'},
    {bundle:'ggs.dll',id:null,specifier:'x',path:'x.js',sourceSha256:'canonical'}
  ]
  const edges=[
    {bundle:'ggs.dll',from:'A',to:null,fromSpecifier:'a',toSpecifier:'x'},
    {bundle:'ggs.dll',from:null,to:'B',fromSpecifier:'x',toSpecifier:'b'}
  ]
  const entries=[{bundle:'ggs.dll',module:{path:'x.js',webpackId:'7'}}]
  const proof={bundle:'ggs.dll',semanticId:'ggs.dll:graph-context:example',
    sourcePath:'x.js',previousWebpackId:'7',canonicalSha256:'canonical',
    previousLiveFactorySha256:'live',currentLiveFactorySha256:'live',
    incomingAnchors:['A'],outgoingAnchors:['B'],verifiedIdenticalLiveFactories:true}
  assert.throws(()=>applyVerifiedNeighborhoods(structuredClone(nodes),structuredClone(edges),entries,[{...proof,incomingAnchors:['WRONG']}]),/Graph neighborhood no longer/)
  assert.throws(()=>applyVerifiedNeighborhoods(structuredClone(nodes),structuredClone(edges),entries,[{...proof,currentLiveFactorySha256:'changed'}]),/Unverified/)
  const result=applyVerifiedNeighborhoods(structuredClone(nodes),structuredClone(edges),entries,[proof])
  assert.equal(result,1)
})

test('official October 25 and 27 DLL captures preserve five pinned graph identities',async t=>{
  try{
    await readFile(join(previous,'raw/ggs.dll.js'))
    await readFile(join(current,'raw/ggs.dll.js'))
  }catch{t.skip('Real official client captures not available on this runner');return}
  const proof=await auditVerifiedNeighborhoods(root,previous,current)
  const pinned=(await readFile(join(root,'graphs/2026-10-25-to-2026-10-27-neighborhoods.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
  assert.equal(proof.matched,5)
  assert.deepEqual(proof.identities,pinned)
})
