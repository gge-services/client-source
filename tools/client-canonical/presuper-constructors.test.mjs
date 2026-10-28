import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import vm from 'node:vm'
import ts from 'typescript'
import {verifyPreSuperFamilies,assertNoPreSuperFieldCollision,preSuperParents} from './verify-presuper-bases.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const game=join(root,'bundles/Game.bundle')

function serialize(value,depth=0){
  if(value===null||typeof value!=='object')return typeof value==='function'?'function':value
  if(depth>3)return 'object'
  if(Array.isArray(value))return Array.from(value,x=>serialize(x,depth+1))
  return Object.fromEntries(Object.keys(value).sort().map(key=>[key,serialize(value[key],depth+1)]))
}

async function buildRuntime(compiled){
  const loaded=new Map()
  const Stub=function MockImportedDependency(){}
  const FakePoint=function Point(){}
  const extendsFn=(Child,Base)=>{
    Object.setPrototypeOf(Child,Base)
    Child.prototype=Object.create(Base.prototype)
    Child.prototype.constructor=Child
  }
  const available=new Proxy({}, {get(target,key){
    if(key==='__extends')return extendsFn
    if(key==='classImplementsInterfaces')return ()=>{}
    if(key==='int')return Number
    if(key==='getDefinitionByName')return ()=>Stub
    return Stub
  }})
  const scope={Object,Array,JSON,Date,Math,Reflect,CONSTRUCTOR_HACK:0,
    window:{},Library:{},createjs:{Point:FakePoint,Event:Stub,Rectangle:Stub},console}
  async function load(name){
    if(loaded.has(name))return loaded.get(name)
    const parent=preSuperParents[name]
    if(parent&&parent!=='SimpleCommand'&&parent!=='CollectableRendererList')
      await load(parent)
    const path=join(game,'modules/exports',name+'.js')
    const canonical=await readFile(path,'utf8').catch(()=>null)
    if(!canonical)return Stub
    const generated=compiled?await readFile(join(game,'reconstructed/exports',name+'.ts'),'utf8').catch(()=>null):null
    const source=generated?ts.transpileModule(generated,{
      compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS}
    }).outputText:canonical
    const exports={}
    loaded.set(name,exports)
    const requireModule=specifier=>{
      const owned=/^gge-module:export_(.+)$/.exec(specifier)
      const fromLocal=/^\.\/(.+)$/.exec(specifier)
      const match=owned?.[1]??fromLocal?.[1]
      if(match){
        const resolved=loaded.get(match)
        if(resolved)return resolved
        if(match==='SimpleCommand')return {SimpleCommand:SimpleCommand}
        if(match==='CollectableRendererList')return {CollectableRendererList:CollectableRendererList}
        return new Proxy({}, {get(_,key){
          if(key===match)return Stub
          return available[key]
        }})
      }
      if(specifier.startsWith('gge-module:exact_'))return new Proxy({}, {get(_,key){
        if(key==='SimpleCommand')return SimpleCommand
        return available[key]
      }})
      if(specifier.includes('SimpleCommand'))return {SimpleCommand}
      if(specifier.includes('CollectableRendererList'))return {CollectableRendererList}
      return available
    }
    vm.runInNewContext(source,{...scope,exports,require:requireModule},{timeout:2000})
    return exports
  }
  const simpleSource=await readFile(join(root,'bundles/ggs.dll/modules/classes/SimpleCommand.js'),'utf8')
  const simpleExports={}
  vm.runInNewContext(simpleSource,{...scope,exports:simpleExports,require(){return available}},{timeout:2000})
  const SimpleCommand=simpleExports.SimpleCommand
  const collectableSource=await readFile(join(game,'modules/exports/CollectableRendererList.js'),'utf8')
  const collectableExports={}
  vm.runInNewContext(collectableSource,{...scope,exports:collectableExports,require(){return available}},{timeout:2000})
  const CollectableRendererList=collectableExports.CollectableRendererList
  return {load,SimpleCommand,CollectableRendererList}
}

test('canonical parent source ancestry proves collision-free pre-super fields for all 13 Commands',async()=>{
  const result=await verifyPreSuperFamilies(root)
  assert.equal(result.proofs.length,13)
  assert.ok(result.proofs.every(x=>x.fieldCollisionProvenAbsent))
  assert.deepEqual(new Set(result.proofs.map(x=>x.root)),new Set(['SimpleCommand','CollectableRendererList']))
  assert.throws(()=>assertNoPreSuperFieldCollision(['_isExecuted'],new Set(['_isExecuted'])),/shadows/)
  assert.doesNotThrow(()=>assertNoPreSuperFieldCollision(['_isExecuted'],new Set(['_collectableRenderList'])))
})

test('original JS constructors and compiled TypeScript yield identical inherited field state',async()=>{
  const {proofs}=await verifyPreSuperFamilies(root)
  const original=await buildRuntime(false)
  const recovered=await buildRuntime(true)
  for(const proof of proofs){
    const evidence=JSON.parse(await readFile(join(game,'reconstructed/exports',proof.className+'.ts.evidence.json'),'utf8'))
    assert.equal(evidence.constructor,'presuper-fields-normalized')
    assert.equal(evidence.verifiedPreSuperAncestry.root,proof.root)
    assert.equal(evidence.fullRuntimeEquivalent,false)
    const previous=await original.load(proof.className)
    const next=await recovered.load(proof.className)
    const Old=previous[proof.className],Current=next[proof.className]
    assert.equal(typeof Old,'function',proof.className)
    assert.equal(typeof Current,'function',proof.className)
    const a=new Old(),b=new Current()
    assert.deepEqual(serialize(a),serialize(b),proof.className)
    for(const field of proof.preSuperFields)
      assert.deepEqual(serialize(a[field]),serialize(b[field]),proof.className+'.'+field)
    if(proof.className==='AIsoCommand'){
      assert.equal(a.isExecuted,b.isExecuted)
      a.isExecuted=true
      b.isExecuted=true
      assert.equal(a._isExecuted,b._isExecuted)
    }
  }
})
