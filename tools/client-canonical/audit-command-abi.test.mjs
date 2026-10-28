import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import {getCommandAbi,auditCommandAbi} from './audit-command-abi.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const capture='/tmp/gge-official-20261025-live'
const sha=s=>createHash('sha256').update(s).digest('hex')

test('method signature extraction survives real Webpack minifier variable changes',()=>{
  const original='var C=function(Base){function Example(){return Base.apply(this,arguments)||this}Example.prototype.executeCommand=function(statusCode,responseFields){return responseFields};Object.defineProperty(Example.prototype,"cmdId",{get:function(){return 1},set:function(value){this._v=value}});return Example}(Parent)'
  const next='function(e,t,n){var a=function(e){function Example(){return e.apply(this,arguments)||this}return Example.prototype.executeCommand=function(e,t){return t},Object.defineProperty(Example.prototype,"cmdId",{get:function(){return 1},set:function(e){this._v=e}}),Example}(n(1));t.Example=a}'
  assert.deepEqual(getCommandAbi(original,'Example'),getCommandAbi(next,'Example',true))
})

test('method parameter count and accessor removal are real ABI differences',()=>{
  const a='class Sample {}\nSample.prototype.exec=function(a,b){};Object.defineProperty(Sample.prototype,"id",{get:function(){}})'
  const b='function(e,t,n){function Sample(){}Sample.prototype.exec=function(a,b,c){}}'
  assert.notDeepEqual(getCommandAbi(a,'Sample'),getCommandAbi(b,'Sample',true))
})

test('saved Command ABI evidence matches byte-verified canonical class sources',async()=>{
  const report=JSON.parse(await readFile(join(root,'graphs/2026-10-25-command-abi.summary.json'),'utf8'))
  const records=(await readFile(join(root,'graphs/2026-10-25-command-abi.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
  assert.equal(records.length,701)
  assert.equal(report.matchedOwners,701)
  assert.equal(report.unmapped.length,0)
  assert.equal(report.unchangedMethodSignatures,701)
  assert.equal(report.changedMethodSignatures,0)
  assert.ok(report.totalMethodSignatures>2000)
  for(const row of records){
    const code=await readFile(join(root,'bundles/Game.bundle/modules/exports',row.className+'.js'),'utf8')
    assert.equal(sha(code),row.baselineSourceSha256)
    const signature=getCommandAbi(code,row.className)
    const methods=Object.fromEntries(Object.entries(signature).filter(([key])=>!key.startsWith('constructor:')))
    assert.deepEqual(methods,row.previousMethodSignatures)
  }
})

test('real official revision preserves all observed Command method signatures',async t=>{
  try{await readFile(join(capture,'raw/Game.bundle.js'),'utf8')}catch{t.skip('Live official capture is not available');return}
  const report=await auditCommandAbi(root,capture)
  assert.equal(report.matchedOwners,701)
  assert.equal(report.changedMethodSignatures,0)
  assert.equal(report.unmapped.length,0)
  assert.equal(report.unchangedConstructorArity,701)
})
