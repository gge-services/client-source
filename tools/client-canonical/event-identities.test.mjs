import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {extractEventDefinitionId,eventDefinitionShape,auditCrossRevisionEventIds} from './event-identities.mjs'
import {buildSemanticGraph} from './build-semantic-graph.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const capture='/tmp/gge-official-20261025-live'

test('event identity uses a source-defined wire discriminator',()=>{
  const original='Object.defineProperty(exports,"__esModule",{value:true});exports.___baseEventTypeDefinition=types.Record({eventId:types.Literal(1029),points:types.Number})'
  const renamed='Object.defineProperty(t,"__esModule",{value:!0});t.___baseEventTypeDefinition=i.Record({eventId:i.Literal(1029),points:i.Number})'
  assert.equal(extractEventDefinitionId(original),1029)
  assert.equal(extractEventDefinitionId('(function(e,t,n){t.___baseEventTypeDefinition=i.Record({eventId:i.Literal(1029),points:i.Number})})'),1029)
  assert.equal(extractEventDefinitionId(renamed),null)
  assert.equal(extractEventDefinitionId('exports.Other={eventId:types.Literal(1029)}'),null)
  assert.equal(extractEventDefinitionId('foreign.___baseEventTypeDefinition=types.Record({eventId:types.Literal(1029)})'),null)
  assert.equal(extractEventDefinitionId('exports.___baseEventTypeDefinition=types.Record({eventId:types.Literal(1029),other:{eventId:types.Literal(1001)}})'),null)
})

test('field-level event schema signatures are insensitive to minifier bindings but detect added fields',()=>{
  const a='exports.___baseEventTypeDefinition=validator.Record({eventId:validator.Literal(1029),delta:validator.Number.withConstraint(function(x){return x>=0})})'
  const b='(function(e,t,n){t.___baseEventTypeDefinition=v.Record({eventId:v.Literal(1029),delta:v.Number.withConstraint(function(a){return a>=0})})})'
  const changed='exports.___baseEventTypeDefinition=validator.Record({eventId:validator.Literal(1029),delta:validator.Number,extra:validator.String})'
  assert.deepEqual(eventDefinitionShape(a),eventDefinitionShape(b))
  assert.notDeepEqual(eventDefinitionShape(a),eventDefinitionShape(changed))
})

test('saved cross-revision evidence can be traced back to the unchanged canonical source',async()=>{
  const content=await readFile(join(root,'graphs/2026-10-25-event-identities.jsonl'),'utf8')
  const rows=content.trim().split('\n').map(JSON.parse)
  assert.equal(rows.length,46)
  assert.equal(new Set(rows.map(x=>x.semanticId)).size,46)
  assert.ok(rows.every(x=>x.definitionFieldsMatch))
  for(const row of rows){
    const original=await readFile(join(root,'bundles/ggs.dll',row.oldSourcePath),'utf8')
    assert.equal(extractEventDefinitionId(original),row.eventId)
    assert.deepEqual(eventDefinitionShape(original),row.sourceDefinitionFields)
  }
})

test('real canonical event identities are noncolliding and rooted in source',async()=>{
  const graph=await buildSemanticGraph(root)
  const verified=graph.nodes.filter(x=>x.confidence==='verified-event-id')
  assert.equal(verified.length,46)
  assert.equal(new Set(verified.map(x=>x.id)).size,46)
  const sample=verified.find(x=>x.id==='ggs.dll:event:1029')
  assert.ok(sample)
  const source=await readFile(join(root,'bundles/ggs.dll',sample.path),'utf8')
  assert.equal(extractEventDefinitionId(source),1029)
})

test('two real official revisions preserve all verified event identities',async(t)=>{
  let raw
  try{raw=await readFile(join(capture,'raw/ggs.dll.js'),'utf8')}catch{t.skip('Raw live revision is not available in isolated test environments');return}
  assert.ok(raw.length>200000)
  const report=await auditCrossRevisionEventIds(root,capture)
  assert.equal(report.baselineEventIds,46)
  assert.equal(report.liveEventIds,46)
  assert.equal(report.proven,46)
  assert.equal(report.unchangedBaseFieldShapes,46)
  assert.equal(report.changedBaseFieldShapes,0)
  assert.equal(new Set(report.records.map(x=>x.eventId)).size,46)
  assert.equal(new Set(report.records.map(x=>x.oldSourcePath)).size,46)
  assert.ok(report.records.every(x=>x.oldSourceSha256.length===64&&x.currentFactorySha256.length===64))
})
