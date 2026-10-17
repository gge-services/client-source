import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
const sha=s=>createHash('sha256').update(s).digest('hex');
const generator=resolve(import.meta.dirname,'refine-modules.mjs');
const fixtures={
  'Game.bundle': 'var local=function(){function FacebookModule(){};return FacebookModule;}();exports.FacebookLoginStatus="connected";exports.CastleFacebookModule=new local();',
  'ggs.dll': 'var a=function(){function AlchemistConst(){};return AlchemistConst;}();exports.AlchemistConst=a;var b=function(){function AllianceConst(){};return AllianceConst;}();exports.AllianceConst=b;var e;(function(v){v[v.INVALID_PARAMETER_VALUE=2]="INVALID_PARAMETER_VALUE";})(e ||= {});exports.ERROR=e;exports.error="minor";',
  'CacheBreaker.bundle': 'var cls=function(){function InternalClass(){};return InternalClass;}();exports.InternalClass=cls;',
  'CastleLoader.bundle': 'exports.load=function(){};',
  'vendor.bundle': '(function(){function Shared() {return 1;}})();(function(){function Shared() {return 2;}})();module.exports="vendor";',
};
test('class-per-export AST split preserves every original Webpack module and enum initializer',async()=>{
  const root=await mkdtemp(join(tmpdir(),'client-symbol-refine-'));
  try {
    for(const [bundle,source] of Object.entries(fixtures)){
      const folder=join(root,'bundles',bundle,'modules','exports');
      await mkdir(folder,{recursive:true});
      const name=bundle==='ggs.dll'?'AlchemistConst':bundle==='Game.bundle'?'CastleFacebookModule':'main';
      await writeFile(join(folder,name+'.js'),source);
      const spec='gge-module:export_'+name;
      await writeFile(join(root,'bundles',bundle,'manifest.json'),JSON.stringify({schemaVersion:1,bundle,publishedModuleCount:1,modules:[{webpackId:'17',path:'modules/exports/'+name+'.js',specifier:spec,canonicalSha256:sha(source)}],specifiers:{[spec]:'exports/'+name+'.js'}}));
    }
    await mkdir(join(root,'snapshots'),{recursive:true});
    const run=spawnSync(process.execPath,[generator,root,'2026-11-01'],{encoding:'utf8',timeout:30000});
    assert.equal(run.status,0,run.stderr);
    const dll=JSON.parse(await readFile(join(root,'bundles','ggs.dll','manifest.json')));
    assert.equal(dll.modules[0].path,'modules/webpack/exports/AlchemistConst.js');
    assert.equal(dll.specifiers['gge-module:export_AlchemistConst'],'webpack/exports/AlchemistConst.js');
    assert.deepEqual(new Set(dll.symbolViews.filter(v=>!v.helper).map(v=>v.name)),new Set(['AlchemistConst','AllianceConst','ERROR','error']));
    assert.equal(await readFile(join(root,'bundles','ggs.dll',dll.modules[0].path),'utf8'),fixtures['ggs.dll']);
    const alchemist=await readFile(join(root,'bundles','ggs.dll','modules/exports/AlchemistConst.js'),'utf8');
    assert.match(alchemist,/function AlchemistConst/);
    assert.doesNotMatch(alchemist,/function AllianceConst/);
    const status=await readFile(join(root,'bundles','ggs.dll','modules/exports/ERROR.js'),'utf8');
    assert.match(status,/INVALID_PARAMETER_VALUE/);
    const lower=dll.symbolViews.find(v=>v.name==='error');
    assert.ok(lower.path.includes('__webpack_'));
    assert.notEqual(lower.path.toLowerCase(),'modules/exports/error.js');
    const facebook=await readFile(join(root,'bundles','Game.bundle','modules/exports/CastleFacebookModule.js'),'utf8');
    assert.match(facebook,/function FacebookModule/);
    const cache=JSON.parse(await readFile(join(root,'bundles','CacheBreaker.bundle','manifest.json')));
    assert.equal(cache.symbolViews.length,1);
    const classView=await readFile(join(root,'bundles','CacheBreaker.bundle',cache.symbolViews[0].path),'utf8');
    assert.match(classView,/function InternalClass/);
    const vendor=JSON.parse(await readFile(join(root,'bundles','vendor.bundle','manifest.json')));
    assert.equal(vendor.symbolViews.filter(v=>v.name==='Shared').length,2);
    assert.notEqual(vendor.symbolViews[0].path,vendor.symbolViews[1].path);
    const snapshot=JSON.parse(await readFile(join(root,'snapshots','symbol-separation-2026-11-01.json')));
    assert.equal(snapshot.sourceSnapshotDate,'2026-11-01');
  } finally { await rm(root,{recursive:true,force:true}); }
});
