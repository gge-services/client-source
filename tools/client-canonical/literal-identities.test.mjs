import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import {extractLiteralExports,auditLiteralIdentities} from './literal-identities.mjs'
import {buildSemanticGraph} from './build-semantic-graph.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const snapshot='/tmp/gge-official-20261025-live'
const hash=value=>createHash('sha256').update(value).digest('hex')

test('literal export identities survive Webpack minification and statement combining',()=>{
  const original='exports.FPS_MEASUREMENT_LOGGER = "FPSMeasurement";'
  const minified='function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FPS_MEASUREMENT_LOGGER="FPSMeasurement"}'
  assert.deepEqual(extractLiteralExports(original),extractLiteralExports(minified,true))
  assert.deepEqual(extractLiteralExports('exports.anyThing = "a";'),[])
  assert.deepEqual(extractLiteralExports('function f(){ exports.FPS_MEASUREMENT_LOGGER = "FPSMeasurement" }'),[])
  assert.deepEqual(extractLiteralExports('foreign.FPS_MEASUREMENT_LOGGER = "FPSMeasurement";'),[])
})

test('three pinned constant identities have unique canonical source evidence',async()=>{
  const graph=await buildSemanticGraph(root)
  const nodes=graph.nodes.filter(x=>x.confidence==='verified-literal-export')
  const content=await readFile(join(root,'graphs/2026-10-25-literal-identities.jsonl'),'utf8')
  const records=content.trim().split('\n').map(JSON.parse)
  assert.equal(nodes.length,3)
  assert.equal(records.length,3)
  assert.equal(new Set(records.map(x=>x.currentWebpackId)).size,3)
  for(const row of records){
    const code=await readFile(join(root,'bundles/ggs.dll',row.sourcePath),'utf8')
    assert.equal(hash(code),row.sourceSha256)
    assert.ok(extractLiteralExports(code).some(x=>x.name===row.exportName&&x.value===row.literalValue))
    assert.ok(nodes.some(x=>x.id===row.semanticId&&x.path===row.sourcePath))
  }
})

test('live client revision corroborates all uniquely pinned literal exports',async t=>{
  try{await readFile(join(snapshot,'raw/ggs.dll.js'),'utf8')}catch{t.skip('Official capture is absent');return}
  const graph=await buildSemanticGraph(root)
  const records=await auditLiteralIdentities(root,snapshot,graph.nodes)
  assert.equal(records.length,3)
  assert.deepEqual(records.map(x=>x.exportName),[
    'CREATEJS_UTILITIES_LOGGER','FPS_MEASUREMENT_LOGGER','GLOBAL_LOGGER'
  ])
})
