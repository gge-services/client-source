import {test} from 'node:test'
import assert from 'node:assert/strict'
import {dirname,join} from 'node:path'
import {fileURLToPath} from 'node:url'
import {readFile} from 'node:fs/promises'
import {createDllResolver} from './resolve-imports.mjs'
import {auditDllEdges} from './audit-dll-edges.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')

test('resolve DLL webpack index forwarding through provenance-verified public exports',async()=>{
  const r=await createDllResolver(root)
  assert.equal(r.stats.dllModules,1008)
  assert.ok(r.stats.dllWrappers>=19)
  for(const [suffix,member,id] of [
    ['9e901e8e2483a22f','BasicStandardOkDialogProperties','29'],
    ['92d05af59ee2ff30','Localize','18'],
    ['26a421b704832cff','ERROR','617'],
    ['f855840627e6e145','int','60'],
    ['608de47b6498f9b0','TweenMax','989']
  ]){
    const result=r.resolve('gge-module:exact_'+suffix,member)
    assert.ok(result,member)
    assert.equal(result.moduleId,id)
    assert.equal(result.imported,member)
    assert.equal(result.bundle,'ggs.dll')
    assert.ok(['verified-dll-id-and-member','explicit-owner-module-export'].includes(result.confidence))
    const actual=await readFile(join(root,'bundles/ggs.dll',result.path),'utf8')
    assert.ok(actual.length>0)
  }
})

test('reject unknown DLL exports and wrong owner id instead of guessing',async()=>{
  const r=await createDllResolver(root)
  assert.equal(r.resolve('gge-module:exact_9e901e8e2483a22f','NOT_A_REAL_SYMBOL'),null)
  assert.equal(r.resolve('gge-module:exact_92d05af59ee2ff30','ERROR'),null)
  assert.equal(r.resolve('gge-module:exact_nonexistent','Localize'),null)
  assert.equal(r.resolve('gge-module:export_CastleModel','CastleModel')?.confidence,'unique-public-export')
})

test('audit all Game bundle DLL-export relationships separately from namespace use',async()=>{
  const report=await auditDllEdges(root)
  assert.equal(report.verifiedMemberEdges,20213)
  assert.equal(report.unresolvedMemberUses,0)
  assert.equal(report.verifiedNamespaceEdges,1)
  assert.equal(report.modulesWithExternalImports,5455)
  const member=report.modules.flatMap(m=>m.edges).find(edge=>edge.member==='Localize')
  assert.equal(member?.targetNode,'ggs.dll:export:Localize')
})
