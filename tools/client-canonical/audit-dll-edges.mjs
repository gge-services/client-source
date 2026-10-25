import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {join,dirname,resolve} from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import * as t from '@babel/types'
import {createDllResolver} from './resolve-imports.mjs'
import {stableNodeId} from './build-semantic-graph.mjs'

const traverse=traverseModule.default??traverseModule

export async function auditDllEdges(root) {
  const resolver=await createDllResolver(root)
  const manifest=JSON.parse(await readFile(join(root,'bundles/Game.bundle/manifest.json'),'utf8'))
  const result=[]
  for(const item of manifest.modules) {
    const source=await readFile(join(root,'bundles/Game.bundle',item.path),'utf8')
    if(!source.includes('gge-module:exact_'))continue
    const ast=parser.parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
    const imports=new Map()
    const resolved=new Map()
    const unknown=new Map()
    traverse(ast,{
      VariableDeclarator(path) {
        if(!t.isIdentifier(path.node.id)||!t.isCallExpression(path.node.init)||
          !t.isIdentifier(path.node.init.callee,{name:'require'})||
          !t.isStringLiteral(path.node.init.arguments[0]))return
        const spec=path.node.init.arguments[0].value
        if(!resolver.wrappers.has(spec))return
        const binding=path.scope.getBinding(path.node.id.name)
        if(binding)imports.set(binding.path, {specifier:spec,name:path.node.id.name,binding})
      }
    })
    for(const {specifier,name,binding} of imports.values()){
      for(const reference of binding.referencePaths) {
        const parent=reference.parentPath
        if(parent?.isMemberExpression()&&parent.node.object===reference.node&&!parent.node.computed&&t.isIdentifier(parent.node.property)){
          const target=resolver.resolve(specifier,parent.node.property.name)
          const key=specifier+':'+parent.node.property.name
          if(target)resolved.set(key,{source:stableNodeId('Game.bundle',item),sourcePath:item.path,sourceSpecifier:item.specifier,
            wrapper:specifier,member:target.imported,targetNode:'ggs.dll:export:'+target.imported,
            dllModuleId:target.moduleId,dllSource:target.path,confidence:target.confidence})
          else unknown.set(key,{sourcePath:item.path,wrapper:specifier,property:parent.node.property.name,reason:'no-verified-dll-export'})
        }else{
          const key=specifier+':namespace-reference'
          const bridge=resolver.wrappers.get(specifier)
          if(!bridge){
            unknown.set(key,{sourcePath:item.path,wrapper:specifier,reason:'unresolved-namespace-reference',identifier:name})
            continue
          }
          resolved.set(key,{
            source:stableNodeId('Game.bundle',item),sourcePath:item.path,sourceSpecifier:item.specifier,
            wrapper:specifier,member:null,targetNode:stableNodeId('ggs.dll',bridge.entry),
            dllModuleId:bridge.id,dllSource:bridge.entry.path,confidence:'verified-dll-namespace-forward',
            stableSemanticTarget:Boolean(stableNodeId('ggs.dll',bridge.entry))
          })
        }
      }
    }
    if(resolved.size||unknown.size)result.push({source:item.specifier,stableNode:stableNodeId('Game.bundle',item),edges:[...resolved.values()].sort((a,b)=>(a.targetNode??'').localeCompare(b.targetNode??'')),unknown:[...unknown.values()]})
  }
  const all=result.flatMap(x=>x.edges)
  const unresolved=result.flatMap(x=>x.unknown)
  return {schemaVersion:1,snapshot:'2026-10-16',modulesWithExternalImports:result.length,
    verifiedMemberEdges:all.filter(x=>x.member!==null).length,verifiedNamespaceEdges:all.filter(x=>x.member===null).length,unresolvedMemberUses:unresolved.length,modules:result}
}
if(process.argv[1]?.endsWith('/audit-dll-edges.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const output=resolve(process.argv[3]??join(root,'graphs/2026-10-16-dll-edges.jsonl'))
  auditDllEdges(root).then(async audit=>{
    await mkdir(dirname(output),{recursive:true})
    const stable=audit.modules.map(m=>{
      const targets=new Map()
      for(const edge of m.edges) {
        const entry={target:edge.targetNode,member:edge.member,kind:edge.member===null?'namespace':'export',confidence:edge.confidence}
        if(!entry.target)entry.unresolvedTargetSource=edge.dllSource
        targets.set(JSON.stringify(entry),entry)
      }
      return {
        node:m.stableNode,
        ...(!m.stableNode?{unresolvedSourceSpecifier:m.source}:{}),
        imports:[...targets.values()].sort((a,b)=>((a.target??'')+':'+(a.member??'')).localeCompare((b.target??'')+':'+(b.member??''))),
        unresolved:m.unknown
      }
    })
    stable.sort((a,b)=>(a.node??a.unresolvedSourceSpecifier).localeCompare(b.node??b.unresolvedSourceSpecifier))
    await writeFile(output,stable.map(x=>JSON.stringify(x)).join('\n')+'\n')
    console.log(JSON.stringify({modules:audit.modulesWithExternalImports,verified:audit.verifiedMemberEdges,namespaces:audit.verifiedNamespaceEdges,unresolved:audit.unresolvedMemberUses,examples:audit.modules.filter(x=>x.unknown.length).slice(0,3).map(x=>x.unknown.slice(0,2))}))
  }).catch(e=>{console.error(e);process.exitCode=1})
}
