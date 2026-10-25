import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import * as t from '@babel/types'

const traverse = traverseModule.default ?? traverseModule

export async function createDllResolver(root) {
  const [game,dll] = await Promise.all([
    readFile(join(root,'bundles/Game.bundle/manifest.json'),'utf8').then(JSON.parse),
    readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8').then(JSON.parse)
  ])
  const byId = new Map()
  for(const entry of dll.modules) {
    const id = String(entry.webpackId)
    if(byId.has(id))throw Error('Ambiguous DLL module id '+id)
    byId.set(id,entry)
  }
  const symbolMap = new Map()
  for(const entry of dll.symbolViews ?? []) {
    const key=String(entry.webpackId)+':'+entry.name
    if(symbolMap.has(key))symbolMap.set(key,null)
    else symbolMap.set(key,entry)
  }
  const inlineExports = new Map()
  for(const entry of dll.modules) {
    const source=await readFile(join(root,'bundles/ggs.dll',entry.path),'utf8')
    const ast=parser.parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
    const exported=new Set()
    traverse(ast,{
      AssignmentExpression(path) {
        const n=path.node.left
        if(t.isMemberExpression(n)&&!n.computed&&t.isIdentifier(n.object,{name:'exports'})&&t.isIdentifier(n.property))exported.add(n.property.name)
      },
      ExportNamedDeclaration(path) {
        const dec=path.node.declaration
        if(t.isVariableDeclaration(dec)){
          for(const item of dec.declarations)if(t.isIdentifier(item.id))exported.add(item.id.name)
        }
        if(t.isFunctionDeclaration(dec)||t.isClassDeclaration(dec))if(dec.id)exported.add(dec.id.name)
        for(const spec of path.node.specifiers)if(t.isExportSpecifier(spec)&&t.isIdentifier(spec.exported))exported.add(spec.exported.name)
      }
    })
    inlineExports.set(String(entry.webpackId),exported)
  }
  const exportedNames=new Set()
  for(const view of dll.symbolViews ?? [])exportedNames.add(view.name)
  for(const exports of inlineExports.values())for(const member of exports)exportedNames.add(member)
  const byCase=new Map()
  for(const name of exportedNames){
    const key=name.toLowerCase()
    if(!byCase.has(key))byCase.set(key,[])
    byCase.get(key).push(name)
  }
  const unsafeNames=new Map()
  for(const group of byCase.values()){
    group.sort()
    for(const name of group.slice(1))unsafeNames.set(name,name+'__case_'+createHash('sha256').update(name).digest('hex').slice(0,6))
  }
  const wrappers = new Map()
  for(const [specifier,location] of Object.entries(game.specifiers)) {
    if(!specifier.startsWith('gge-module:exact_'))continue
    const code=await readFile(join(root,'bundles/Game.bundle/modules',location),'utf8')
    const ast=parser.parse(code,{sourceType:'unambiguous'})
    const candidates=[]
    traverse(ast,{
      AssignmentExpression(path) {
        const n=path.node
        if(!t.isMemberExpression(n.left)||n.left.computed||!t.isIdentifier(n.left.object,{name:'module'})||
          !t.isIdentifier(n.left.property,{name:'exports'}))return
        const call=n.right
        if(!t.isCallExpression(call)||call.arguments.length!==1||!t.isNumericLiteral(call.arguments[0]))return
        if(!t.isCallExpression(call.callee)||!t.isIdentifier(call.callee.callee,{name:'require'})||
          call.callee.arguments.length!==1||!t.isStringLiteral(call.callee.arguments[0]))return
        candidates.push({factory:call.callee.arguments[0].value,id:String(call.arguments[0].value)})
      }
    })
    if(candidates.length!==1)continue
    const entry=byId.get(candidates[0].id)
    if(!entry)throw Error('Unknown DLL module '+candidates[0].id+' referenced by '+specifier)
    wrappers.set(specifier,{...candidates[0],entry})
  }

  const resolve=(specifier,member)=>{
    const named=/^gge-module:export_(.+)$/.exec(specifier)
    if(named && named[1]===member && game.specifiers[specifier]) {
      return {specifier,imported:member,bundle:'Game.bundle',path:game.specifiers[specifier],moduleId:null,confidence:'unique-public-export'}
    }
    const wrapper=wrappers.get(specifier)
    if(!wrapper)return null
    const view=symbolMap.get(wrapper.id+':'+member)
    if(view&&view.ownerPath!==wrapper.entry.path)return null
    if(!view&&!inlineExports.get(wrapper.id)?.has(member))return null
    return {specifier,imported:member,bundle:'ggs.dll',path:view?.path??wrapper.entry.path,moduleId:wrapper.id,
      moduleIdentity:'ggs.dll:export:'+member,
      confidence:view?'verified-dll-id-and-member':'explicit-owner-module-export'}
  }
  return {resolve,wrappers,importFileName:name=>unsafeNames.get(name)??name,stats:{dllModules:byId.size,symbolViews:symbolMap.size,inlineExports:[...inlineExports.values()].reduce((n,s)=>n+s.size,0),dllWrappers:wrappers.size,publicExports:Object.keys(game.specifiers).filter(s=>s.startsWith('gge-module:export_')).length}}
}
