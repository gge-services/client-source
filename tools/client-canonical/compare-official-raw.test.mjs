import {test} from 'node:test'
import assert from 'node:assert/strict'
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises'
import {join} from 'node:path'
import {tmpdir} from 'node:os'
import {compareRawClient} from './compare-official-raw.mjs'

test('maps actual Webpack export names rather than unstable factory indices',async()=>{
  const root=await mkdtemp(join(tmpdir(),'gge-factory-audit-'))
  try{
    for(const bundle of ['Game.bundle','ggs.dll']){
      await mkdir(join(root,'repo/bundles',bundle),{recursive:true})
      await mkdir(join(root,'capture/raw'),{recursive:true})
      const manifest={modules:[
        {webpackId:'0',path:'modules/exports/First.js',lineage:['export:First']},
        {webpackId:'1',path:'modules/exports/Second.js',lineage:['export:Second']}
      ]}
      await writeFile(join(root,'repo/bundles',bundle,'manifest.json'),JSON.stringify(manifest))
      await writeFile(join(root,'capture/raw',bundle+'.js'),'!function(modules){return modules.length}([function(module,exports,load){exports.Second=11},function(module,exports,load){exports.First=22},function(module,exports,load){module.exports=load(1)}]);')
    }
    const report=await compareRawClient(join(root,'repo'),join(root,'capture'))
    assert.equal(report.fullSemanticParityProven,false)
    for(const bundle of report.bundles){
      assert.equal(bundle.originalModuleCount,2)
      assert.equal(bundle.liveModuleCount,3)
      assert.equal(bundle.uniqueExportAnchors,2)
      assert.equal(bundle.relocatedAnchors,2)
      assert.equal(bundle.unanchored,1)
      assert.deepEqual(bundle.verifiedMappings.map(x=>[x.anchor,x.oldId,x.newId]),
        [['First','0','1'],['Second','1','0']])
    }
  }finally{
    await rm(root,{recursive:true,force:true})
  }
})

test('rejects two distinct old factories claiming one live export owner',async()=>{
  const root=await mkdtemp(join(tmpdir(),'gge-factory-collision-'))
  try{
    for(const bundle of ['Game.bundle','ggs.dll']){
      await mkdir(join(root,'repo/bundles',bundle),{recursive:true})
      await mkdir(join(root,'capture/raw'),{recursive:true})
      await writeFile(join(root,'repo/bundles',bundle,'manifest.json'),JSON.stringify({modules:[
        {webpackId:'0',path:'First.js',lineage:['export:First']},
        {webpackId:'1',path:'Second.js',lineage:['export:Second']}
      ]}))
      await writeFile(join(root,'capture/raw',bundle+'.js'),
        '!function(modules){return modules}([function(module,exports,load){exports.First=1;exports.Second=2}]);')
    }
    await assert.rejects(compareRawClient(join(root,'repo'),join(root,'capture')),/Conflicting live-to-old export mapping/)
  }finally{
    await rm(root,{recursive:true,force:true})
  }
})
