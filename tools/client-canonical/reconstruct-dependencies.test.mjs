import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import vm from 'node:vm'
import ts from 'typescript'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const dir=join(root,'bundles/Game.bundle')
const sha=input=>createHash('sha256').update(input).digest('hex')

test('every new TS dependency view preserves exact canonical source hashes',async()=>{
  const result=JSON.parse(await readFile(join(dir,'reconstructed/dependencies/coverage.json'),'utf8'))
  assert.equal(result.generated,102)
  assert.equal(result.remainingTypeOnly,474)
  assert.equal(result.sourceBackedClassViews.length,102)
  assert.equal(result.sourceBackedClassViews.filter(x=>x.dependencies.length===0).length,26)
  assert.equal(result.sourceBackedClassViews.filter(x=>x.dependencies.length>0).length,76)
  const names=new Set()
  for(const view of result.sourceBackedClassViews){
    assert.ok(!names.has(view.className))
    names.add(view.className)
    const code=await readFile(join(dir,'reconstructed/dependencies',view.filename),'utf8')
    const original=await readFile(join(dir,view.canonicalSource),'utf8')
    assert.equal(sha(code),view.generatedHash)
    assert.equal(sha(original),view.canonicalSourceSha256)
    assert.match(code,new RegExp('export class '+view.className+'\\b'))
    assert.equal((code.match(/\bfrom\s+['"]/g)??[]).length,view.dependencies.length)
    const emitted=ts.transpileModule(code,{compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS},reportDiagnostics:true})
    assert.equal(emitted.diagnostics?.length??0,0)
  }
  assert.ok(!names.has('CastleCheatData'))
  assert.ok(result.skipped.some(x=>x.name==='CastleCheatData'&&x.reason.includes('cheatLoginName')))
})

test('self-contained class behavior matches original JavaScript for representative constants',async()=>{
  for(const symbol of ['AllianceRaidConst','CastleStringHelper','ClientConstCurrency']){
    const raw=await readFile(join(dir,'modules/exports',symbol+'.js'),'utf8')
    const typescript=await readFile(join(dir,'reconstructed/dependencies',symbol+'.ts'),'utf8')
    const compiled=ts.transpileModule(typescript,{compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS}}).outputText
    const run=source=>{
      const exports={}
      vm.runInNewContext(source,{exports,Object,Array,JSON}, {timeout:1000})
      assert.ok(exports[symbol])
      return exports[symbol]
    }
    const original=run(raw),recovered=run(compiled)
    if(symbol==='CastleStringHelper'){
      for(const input of [null,'hello',0,42]) {
        assert.equal(original.parseToStringOrEmpty(input),recovered.parseToStringOrEmpty(input))
        assert.equal(original.isNullOrEmpty(input),recovered.isNullOrEmpty(input))
      }
    }else if(symbol==='AllianceRaidConst'){
      assert.equal(recovered.BUFF_SERIES_RAID_BOSS_ATTACK_COMMON,original.BUFF_SERIES_RAID_BOSS_ATTACK_COMMON)
      assert.deepEqual(Array.from(recovered.BUFF_SERIES_RAID_BOSS_ATTACK_ALL),Array.from(original.BUFF_SERIES_RAID_BOSS_ATTACK_ALL))
    }else{
      for(const id of [1,30,999])assert.equal(original.isInIdRange([1,50],id),recovered.isInIdRange([1,50],id))
      assert.equal(recovered.ID_KHAN_TABLET,original.ID_KHAN_TABLET)
    }
  }
})

test('compiler audit does not mistake global-dependent views for standalone runtime',async()=>{
  const coverage=JSON.parse(await readFile(join(dir,'reconstructed/dependencies/coverage.json'),'utf8'))
  const globals=coverage.sourceBackedClassViews.filter(x=>x.globalRuntimeDependencies.length)
  assert.ok(globals.length>=13)
  assert.ok(globals.every(x=>x.runtimeReady===false))
  const report=JSON.parse(await readFile(join(dir,'reconstructed/compile-status.json'),'utf8'))
  assert.equal(report.sourceBackedRuntimeViews,102)
  assert.equal(report.sourceBackedTypeOnlyDependencies,778)
  assert.equal(report.directTypeOnlyDependencies,474)
  assert.equal(report.typeOnlyTransitiveImports,304)
  assert.equal(report.runtimeReady,false)
})
