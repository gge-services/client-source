import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'
import typescript from 'typescript'
import { buildSemanticGraph, stableNodeId, resolveNode } from './build-semantic-graph.mjs'
import {createDllResolver} from './resolve-imports.mjs'
import { reconstructEs5Class } from './reverse-ts-es5.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const game=join(root,'bundles/Game.bundle')
const manifest=JSON.parse(await readFile(join(game,'manifest.json'),'utf8'))
const dllManifest=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
const options={specifiers:manifest.specifiers,errorExportAvailable:dllManifest.symbolViews.filter(v=>v.name==='ERROR').length===1}

function runtimeCase(source,compiled,number) {
  const events=[]
  function CastleCommand() {}
  Object.defineProperty(CastleCommand.prototype,'cmdId',{configurable:true,get(){return this.setterResult},set(value){this.setterResult=value;events.push(['set',value])}})
  CastleCommand.prototype.showErrorDialog=function(status,response){events.push(['error',status,response.length])}
  const gameErrors={ERROR:{ALL_OK:0}}
  const clientConst={ClientConstSF:{S2C_ALLIANCE_SEARCH_ALLIANCE_LIST:'AAL',S2C_GET_XP:'GXP',S2C_ABG_GET_ALLIANCE_EVENT_STATISTICS:'GAE'}}
  const model={CastleModel:{
    otherPlayerData:{parseOwnerInfoArray(value){events.push(['owner',value.id])}},
    allianceData:{parse_AAL(value){events.push(['alliance',value.OI.id])}},
    userData:{parse_GXP(value){events.push(['xp',value.xp])}}
  }}
  const importMap={
    'gge-module:exact_6fd0a7f85c69b366':{__extends(C,D){Object.setPrototypeOf(C,D);C.prototype=Object.create(D.prototype);C.prototype.constructor=C}},
    'gge-module:exact_81dacdf05bd32292':{classImplementsInterfaces(){}},
    'gge-module:exact_26a421b704832cff':gameErrors,
    'gge-module:export_CastleCommand':{CastleCommand},
    'gge-module:export_ClientConstSF':clientConst,
    'gge-module:export_CastleModel':model,
    './CastleCommand':{CastleCommand},
    './ClientConstSF':clientConst,
    './CastleModel':model,
    '../../../ggs.dll/reconstructed/exports/ERROR':gameErrors
  }
  const exports={}
  vm.runInNewContext(compiled?typescript.transpileModule(source,{compilerOptions:{module:typescript.ModuleKind.CommonJS,target:typescript.ScriptTarget.ES2015}}).outputText:source,{
    exports,require(specifier){if(!Object.hasOwn(importMap,specifier))throw Error('Unknown import '+specifier);return importMap[specifier]},Object,JSON
  })
  const Constructor=Object.values(exports)[0]
  const instance=new Constructor()
  instance.cmdId=123
  const getter=instance.cmdId
  if(number==='AALCommand')instance.executeCommand(0,['',JSON.stringify({OI:{id:7}})])
  else if(number==='GXPCommand')instance.executeCommand(0,['',JSON.stringify({xp:5})])
  instance.executeCommand(17,[''])
  return {events,getter}
}

test('reverses real ES5 classes with getters, setters, named methods, inherited setter dispatch and stable imports',async()=>{
  for(const name of ['AALCommand','GXPCommand','GAECommand']){
    const source=await readFile(join(game,'modules/exports/'+name+'.js'),'utf8')
    const result=reconstructEs5Class(source,options)
    assert.ok(result,name)
    assert.equal(result.className,name)
    assert.match(result.code,new RegExp('export class '+name+' extends CastleCommand'))
    assert.match(result.code,/get cmdId\(\)/)
    assert.match(result.code,/set cmdId\(value\)/)
    assert.match(result.code,/super\.cmdId = value/)
    assert.match(result.code,/executeCommand\(statusCode, responseFields\)/)
    assert.doesNotMatch(result.code,/\.prototype\.|getOwnPropertyDescriptor|Object\.defineProperty|gge-module:|__extends/)
    assert.equal(result.metadata.fullRuntimeEquivalent,false)
    assert.equal(result.metadata.removedRuntimeInterfaceCalls,1)
    if (name!=='GAECommand') assert.deepEqual(runtimeCase(source,false,name),runtimeCase(result.code,true,name))
  }
})

test('reconstructs identical readable source after generated identifiers and wrapper ids change',async()=>{
  const source=await readFile(join(game,'modules/exports/AALCommand.js'),'utf8')
  const baseline=reconstructEs5Class(source,options)
  const varied=source.replaceAll('__dep_exact_26a421b704832cff','randomErrors')
    .replaceAll('gge-module:exact_26a421b704832cff','gge-module:exact_changedWebpackHash')
    .replaceAll('__s9param0','mangledOne').replaceAll('__s9param1','mangledTwo')
    .replaceAll('__s9local0','newScopeLocal').replaceAll('__s7param0','setterParameter')
  const altered=reconstructEs5Class(varied,options)
  assert.equal(altered.code,baseline.code)
  assert.notEqual(altered.metadata.sourceHash,baseline.metadata.sourceHash)
})

test('rejects a misleading superclass property descriptor',async()=>{
  const source=await readFile(join(game,'modules/exports/AALCommand.js'),'utf8')
  assert.throws(()=>reconstructEs5Class(source.replace('CastleCommand.CastleCommand.prototype, "cmdId"','CastleModel.CastleModel.prototype, "cmdId"'),options),/Unsupported inherited accessor/)
})

test('constructs a durable graph with distinct stable public identities',async()=>{
  const graph=await buildSemanticGraph(root)
  assert.equal(graph.moduleCount,6850)
  assert.equal(graph.nodes.length,6850)
  const aal=manifest.modules.find(m=>m.specifier==='gge-module:export_AALCommand')
  const id=stableNodeId('Game.bundle',aal)
  assert.ok(id.includes('export:AALCommand'))
  assert.equal(resolveNode(graph,'Game.bundle',aal.specifier),id)
  assert.ok(graph.edges.some(e=>e.from===id&&e.to?.includes('export:CastleCommand')))
  assert.ok(graph.edges.some(e=>e.from===id&&e.to?.includes('export:ClientConstSF')))
  assert.equal(resolveNode(graph,'Game.bundle','gge-module:does_not_exist'),null)
})

test('reconstructs a getter-only superclass dispatch without changing its observable failure',async()=>{
  const source=await readFile(join(game,'modules/exports/CICCommand.js'),'utf8')
  const reconstructed=reconstructEs5Class(source,{
    ...options,
    readonlyBaseAccessors:new Set(['CastleDispatchingCommand:eventType'])
  })
  assert.ok(reconstructed)
  assert.match(reconstructed.code,/Reflect\.set\(Object\.getPrototypeOf\(CICCommand\.prototype\)/)
  assert.doesNotMatch(reconstructed.code,/getOwnPropertyDescriptor|Object\.defineProperty/)
  const evaluate=(code,compiled)=>{
    function CastleDispatchingCommand(){}
    Object.defineProperty(CastleDispatchingCommand.prototype,'cmdId',{configurable:true,get(){return this.commandId},set(value){this.commandId=value}})
    Object.defineProperty(CastleDispatchingCommand.prototype,'eventType',{configurable:true,get(){return 'readOnlyEvent'}})
    const modules={
      'gge-module:exact_6fd0a7f85c69b366':{__extends(C,D){Object.setPrototypeOf(C,D);C.prototype=Object.create(D.prototype);C.prototype.constructor=C}},
      'gge-module:exact_81dacdf05bd32292':{classImplementsInterfaces(){}},
      'gge-module:export_ClientConstSF':{ClientConstSF:{S2C_CRAFT_CONSTRUCTION_ITEM:42}},
      'gge-module:export_CastleServerMessageArrivedEvent':{CastleServerMessageArrivedEvent:{CIC_ARRIVED:'CIC'}},
      'gge-module:export_CastleDispatchingCommand':{CastleDispatchingCommand},
      './ClientConstSF':{ClientConstSF:{S2C_CRAFT_CONSTRUCTION_ITEM:42}},
      './CastleServerMessageArrivedEvent':{CastleServerMessageArrivedEvent:{CIC_ARRIVED:'CIC'}},
      './CastleDispatchingCommand':{CastleDispatchingCommand}
    }
    const exports={}
    const js=compiled?typescript.transpileModule(code,{compilerOptions:{module:typescript.ModuleKind.CommonJS,target:typescript.ScriptTarget.ES2015}}).outputText:code
    vm.runInNewContext(js,{exports,require(name){if(!(name in modules))throw Error('Missing dependency '+name);return modules[name]},Object,Reflect,JSON})
    const instance=new exports.CICCommand()
    instance.cmdId=11
    const commandId=instance.cmdId
    const eventType=instance.eventType
    let error=null
    try { instance.eventType='changed' } catch(e){error=e.name}
    return {commandId,eventType,error}
  }
  assert.deepEqual(evaluate(source,false),evaluate(reconstructed.code,true))
  assert.deepEqual(evaluate(source,false),{commandId:42,eventType:'CIC',error:'TypeError'})
})

test('restores a standalone command without fabricating a superclass',async()=>{
  const source=await readFile(join(game,'modules/exports/ABotCommand.js'),'utf8')
  const output=reconstructEs5Class(source,options)
  assert.ok(output)
  assert.match(output.code,/export class ABotCommand \{/)
  assert.match(output.code,/execute\(argument0 = null\)/)
  assert.doesNotMatch(output.code,/extends|\.prototype\.|__extends/)
  assert.match(output.metadata.sourceHash,/^[0-9a-f]{64}$/)
})

test('restores statically assigned methods without converting them to instance methods',async()=>{
  const source=await readFile(join(game,'modules/exports/BEQCommand.js'),'utf8')
  const output=reconstructEs5Class(source,options)
  assert.ok(output)
  assert.match(output.code,/static parseEquipmentInventory\(/)
  assert.match(output.code,/executeCommand\(/)
  assert.doesNotMatch(output.code,/BEQCommand\.parseEquipmentInventory\s*=/)
})

test('preserves source module initializer identities for verified createjs aliases',async()=>{
  const source=await readFile(join(game,'modules/exports/GHWCommand.js'),'utf8')
  const output=reconstructEs5Class(source,options)
  assert.ok(output)
  assert.match(output.code,/const __s0local0 = createjs\.Point;/)
  assert.match(output.code,/new __s0local0\(/)
  assert.ok(output.code.indexOf('const __s0local0')<output.code.indexOf('export class GHWCommand'))
})

test('lowers logical property assignments with one property getter evaluation',async()=>{
  const resolver=await createDllResolver(root)
  for(const name of ['LLICommand','SwitchToRelocateWorldmapCommand']){
    const source=await readFile(join(game,'modules/exports/'+name+'.js'),'utf8')
    assert.match(source,/&&=|\|\|=/)
    const output=reconstructEs5Class(source,{...options,resolveMember:resolver.resolve,dllImportFileName:resolver.importFileName})
    assert.ok(output)
    assert.doesNotMatch(output.code,/&&=|\|\|=|\?\?=/)
    assert.match(output.code,/previousValue/)
    assert.match(output.code,/sourceObject/)
  }
})

test('preserves a real command static initializer and interface-registration order',async()=>{
  const resolver=await createDllResolver(root)
  const source=await readFile(join(game,'modules/exports/HSSCommand.js'),'utf8')
  const recovered=reconstructEs5Class(source,{
    ...options,resolveMember:resolver.resolve,dllImportFileName:resolver.importFileName,
    preserveRuntimeInterfaces:true
  })
  assert.ok(recovered)
  assert.equal(recovered.metadata.staticInitializationPreserved,true)
  assert.equal(recovered.metadata.runtimeInterfaceCallsPreserved,1)
  assert.match(recovered.code,/HSSCommand\.__initialize_static_members\(\)/)
  const run=(code,compiled)=>{
    const events=[]
    function CastleCommand(){}
    Object.defineProperty(CastleCommand.prototype,'cmdId',{configurable:true,get(){return this.value},set(value){this.value=value}})
    const names={
      CastleCommand,
      CastleBasicController:{getInstance(){return {dispatchEvent(event){events.push(['dispatch',event])}}}},
      CastleModel:{currencyData:{parseGCU(){}}},
      ClientConstSF:{S2C_SKIP_HOSPITAL_SLOT:'HSS'},
      ERROR:{ALL_OK:0},
      classImplementsInterfaces(ctor,name){events.push(['interface',ctor.name,name])}
    }
    const lookup={
      'gge-module:exact_6fd0a7f85c69b366':{__extends(C,D){Object.setPrototypeOf(C,D);C.prototype=Object.create(D.prototype);C.prototype.constructor=C}},
      'gge-module:exact_81dacdf05bd32292':{classImplementsInterfaces:names.classImplementsInterfaces},
      'gge-module:exact_26a421b704832cff':{ERROR:names.ERROR}
    }
    for(const [key,value]of Object.entries(names)){
      lookup['gge-module:export_'+key]={[key]:value}
      lookup['./'+key]={[key]:value}
      lookup['../../../ggs.dll/reconstructed/exports/'+key]={[key]:value}
    }
    const exports={}
    const executable=compiled?typescript.transpileModule(code,{
      compilerOptions:{module:typescript.ModuleKind.CommonJS,target:typescript.ScriptTarget.ES2015}
    }).outputText:code
    vm.runInNewContext(executable,{
      exports,require(id){if(!(id in lookup))throw Error('Missing verified runtime '+id);return lookup[id]},
      createjs:{Event:class Event{}},Object,Reflect,JSON
    })
    return {staticValue:exports.HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED,events}
  }
  assert.deepEqual(run(source,false),run(recovered.code,true))
  assert.deepEqual(run(source,false),{
    staticValue:'EVENT_SKIP_HOSPITAL_SLOT_FAILED',
    events:[['interface','HSSCommand','IExecCommand']]
  })
})

test('verifies an inherited cmdId setter through an intermediate class without an override',async()=>{
  const resolver=await createDllResolver(root)
  const source=await readFile(join(game,'modules/exports/UBCCommand.js'),'utf8')
  const optionsWithAncestry={...options,resolveMember:resolver.resolve,dllImportFileName:resolver.importFileName,
    trustedAncestors:new Map([['CastleDispatchingCommand:cmdId',new Set(['CastleCommand'])]]),
    preserveRuntimeInterfaces:true}
  const result=reconstructEs5Class(source,optionsWithAncestry)
  assert.ok(result)
  assert.match(result.code,/export class UBCCommand extends CastleDispatchingCommand/)
  assert.match(result.code,/super\.cmdId = value/)
  assert.doesNotMatch(result.code,/getOwnPropertyDescriptor|Object\.defineProperty/)
  const run=(program,recompiled)=>{
    const events=[]
    function CastleCommand(){}
    Object.defineProperty(CastleCommand.prototype,'cmdId',{configurable:true,
      get(){return this._commandId},set(v){this._commandId=v;events.push(['set',v])}})
    function CastleDispatchingCommand(){}
    Object.setPrototypeOf(CastleDispatchingCommand,CastleCommand)
    CastleDispatchingCommand.prototype=Object.create(CastleCommand.prototype)
    CastleDispatchingCommand.prototype.constructor=CastleDispatchingCommand
    CastleDispatchingCommand.prototype.showErrorDialog=function(status){events.push(['error',status])}
    CastleDispatchingCommand.prototype.dispatchArrivedEvent=function(status){events.push(['arrived',status])}
    const values={
      CastleCommand,CastleDispatchingCommand,
      CastleModel:{areaData:{activeArea:null}},
      ClientConstSF:{S2C_USE_BOOSTER_CONSUMABLE_ON_CONSTRUCTION_ITEM_EVENT:81},
      CastleServerMessageArrivedEvent:{UBC_ARRIVED:'UBC'},
      ERROR:{ALL_OK:0},
      classImplementsInterfaces(cls,iface){events.push(['interface',cls.name,iface])}
    }
    const modules={
      'gge-module:exact_6fd0a7f85c69b366':{__extends(C,D){Object.setPrototypeOf(C,D);C.prototype=Object.create(D.prototype);C.prototype.constructor=C}},
      'gge-module:exact_81dacdf05bd32292':{classImplementsInterfaces:values.classImplementsInterfaces},
      'gge-module:exact_26a421b704832cff':{ERROR:values.ERROR}
    }
    for(const [name,value]of Object.entries(values)){
      modules['gge-module:export_'+name]={[name]:value}
      modules['./'+name]={[name]:value}
      modules['../../../ggs.dll/reconstructed/exports/'+name]={[name]:value}
    }
    const exports={}
    const executable=recompiled?typescript.transpileModule(program,{
      compilerOptions:{target:typescript.ScriptTarget.ES2015,module:typescript.ModuleKind.CommonJS}
    }).outputText:program
    vm.runInNewContext(executable,{exports,require(spec){if(!modules[spec])throw Error('Unknown import '+spec);return modules[spec]},JSON,Object})
    const command=new exports.UBCCommand()
    command.cmdId=42
    const stored=command._commandId
    const code=command.cmdId
    const event=command.eventType
    command.executeCommand(0,['',JSON.stringify({CI:2})])
    command.executeCommand(21,['','{}'])
    return {stored,code,event,events}
  }
  assert.deepEqual(run(source,false),run(result.code,true))
  assert.equal(result.metadata.fullRuntimeEquivalent,false)
})
