import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import ts from 'typescript'
import {declareSourceFields} from './declare-source-fields.mjs'
import {reconstructEs5Class} from './reverse-ts-es5.mjs'
import {createDllResolver} from './resolve-imports.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const base=join(root,'bundles/Game.bundle')
const manifest=JSON.parse(await readFile(join(base,'manifest.json'),'utf8'))
const dll=await createDllResolver(root)
const options={specifiers:manifest.specifiers,resolveMember:dll.resolve,dllImportFileName:dll.importFileName}
const compile=code=>ts.transpileModule(code,{compilerOptions:{target:ts.ScriptTarget.ES2015,
  module:ts.ModuleKind.CommonJS},reportDiagnostics:true})

test('source-backed field declarations do not alter emitted JavaScript',async()=>{
  for(const name of ['AdvisorAttackOverviewVO','ClientCheatsHelper','GlobalServerPreviousRunInfoVO','Iso']){
    const source=await readFile(join(base,'modules/exports',name+'.js'),'utf8')
    const recovered=reconstructEs5Class(source,options)
    assert.ok(recovered)
    const typed=declareSourceFields(source,recovered.code,name)
    assert.ok(typed.declarations.length>0)
    assert.equal(compile(typed.code).outputText,compile(recovered.code).outputText)
    assert.equal(compile(typed.code).diagnostics?.length??0,0)
    assert.deepEqual(declareSourceFields(source,typed.code,name).declarations,[])
  }
})

test('fields are declared only when canonical class source writes them',()=>{
  const before='class Test { read(){return this.keep} }'
  const source='function Test(){this.allowed=1}Test.secret=3;'
  const result=declareSourceFields(source,before,'Test')
  assert.ok(result.declarations.includes('allowed: any;'))
  assert.ok(result.declarations.includes('static secret: any;'))
  assert.ok(!result.declarations.some(x=>x.includes('keep')))
})
