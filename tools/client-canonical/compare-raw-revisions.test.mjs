import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {compareChangedFactory,compareRawRevisions,extractRawFactories,normalizeMinifierBindings} from './compare-raw-revisions.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const previous='/tmp/gge-official-20261025-live'
const current='/tmp/gge-official-20261027-rawdiff'

test('extracts module factories and rejects unsupported wrappers',()=>{
  const factories=extractRawFactories('!function(modules){return modules.length}([function(e,t,n){t.Example=1},function(e,t,n){t.Other=2}]);')
  assert.equal(factories.length,2)
  assert.ok(factories[0].includes('Example'))
  assert.throws(()=>extractRawFactories('function nothing() {}'),/Unrecognized/)
})

test('binding renames are normalized without affecting object properties',()=>{
  const first='function(e,t,n){var o=4;var k={o:o};return o+k.o}'
  const second='function(x,y,z){var a=4;var b={o:a};return a+b.o}'
  const compared=compareChangedFactory(first,second)
  assert.equal(compared.kind,'binding-renames-only')
  assert.equal(normalizeMinifierBindings(first).normalized,normalizeMinifierBindings(second).normalized)
  assert.equal(compareChangedFactory(first,'function(x,y,z){var a=5;var b={o:a};return a+b.o}').kind,'unresolved-code-change')
})

test('unknown semantic changes fail closed rather than being hidden as minification',()=>{
  const first='function(e,t,n){return e.input?e.input:5}'
  const second='function(a,b,c){return a.input?a.input:6}'
  assert.equal(compareChangedFactory(first,second).kind,'unresolved-code-change')
  assert.equal(compareChangedFactory('function(e,t,n){return eval("x")}', 'function(a,b,c){return eval("x")}').kind,'unresolved-code-change')
})

test('isolates added, modified and removed asset assignments',()=>{
  const previous='function(e,t,n){function Asset(){this.assets.Foo="old";this.assets.Bar="bar"}t.Asset=Asset}'
  const current='function(a,b,c){function Asset(){this.assets.Foo="new";this.assets.Baz="baz"}b.Asset=Asset}'
  const result=compareChangedFactory(previous,current)
  assert.equal(result.kind,'asset-catalog-only')
  assert.deepEqual(result.assetChanges.map(x=>[x.name,x.kind]),[['Bar','removed'],['Baz','added'],['Foo','modified']])
  assert.equal(result.previousAssetAssignments,2)
  assert.equal(result.currentAssetAssignments,2)
})

test('preserves duplicate asset assignments as ordered values',()=>{
  const old='function(e,t,n){function Asset(){this.assets.Foo="a";this.assets.Foo="b"}t.Asset=Asset}'
  const now='function(e,t,n){function Asset(){this.assets.Foo="a";this.assets.Foo="c"}t.Asset=Asset}'
  const result=compareChangedFactory(old,now)
  assert.equal(result.kind,'asset-catalog-only')
  assert.equal(result.assetChanges.length,1)
  assert.equal(result.assetChanges[0].kind,'modified')
})

test('distinguishes package metadata changes from executable behavior',()=>{
  const original='function(e){e.exports={name:"TranspilationEmpire",version:"1.0",resolutions:{encoding:"0.1.12"}}}'
  const updated='function(e){e.exports={name:"TranspilationEmpire",version:"1.1",resolutions:{encoding:"0.1.13"}}}'
  const result=compareChangedFactory(original,updated)
  assert.equal(result.kind,'package-metadata-only')
  assert.deepEqual(result.packageChanges.map(x=>x.name),['resolutions.encoding','version'])
  const behavior='function(e){e.exports={name:"TranspilationEmpire",version:"1.1",resolutions:{encoding:"0.1.13"}};e.runtime=1}'
  assert.equal(compareChangedFactory(original,behavior).kind,'unresolved-code-change')
})

test('committed real-release report has precise, verifiable classifications',async()=>{
  const report=JSON.parse(await readFile(join(root,'graphs/2026-10-25-to-2026-10-27-rawdiff.json'),'utf8'))
  assert.equal(report.semanticBehavioralParityProven,false)
  assert.deepEqual(report.results.map(x=>[x.bundle,x.rawChangedModules]),[['Game.bundle',2],['ggs.dll',19]])
  assert.deepEqual(report.results[0].classifications,{'package-metadata-only':2})
  assert.deepEqual(report.results[1].classifications,{'binding-renames-only':18,'asset-catalog-only':1})
  assert.ok(report.results.flatMap(x=>x.changes).every(x=>x.previousFactorySha256.length===64&&x.currentFactorySha256.length===64))
  const asset=report.results[1].changes.find(x=>x.kind==='asset-catalog-only')
  assert.equal(asset.previousAssets,8159)
  assert.equal(asset.currentAssets,8230)
  assert.equal(asset.assetChanges.filter(x=>x.kind==='added').length,71)
  assert.equal(asset.assetChanges.filter(x=>x.kind==='modified').length,8)
  assert.equal(asset.assetChanges.filter(x=>x.kind==='removed').length,0)
  assert.ok(report.results[0].changes.some(x=>x.packageChanges.some(change=>change.name==='version'&&change.current==='"1.171.9"')))
})

test('official capture produces exactly the committed report when available',async t=>{
  try{
    await readFile(join(previous,'raw/ggs.dll.js'))
    await readFile(join(current,'raw/ggs.dll.js'))
  }catch{t.skip('Official capture files unavailable on this runner');return}
  const actual=await compareRawRevisions(previous,current)
  const expected=JSON.parse(await readFile(join(root,'graphs/2026-10-25-to-2026-10-27-rawdiff.json'),'utf8'))
  assert.deepEqual(actual,expected)
})
