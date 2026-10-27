import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { createHash } from 'node:crypto'
import { reconstructEs5Class } from './reverse-ts-es5.mjs'
import ts from 'typescript'
import { createDllResolver } from './resolve-imports.mjs'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import * as t from '@babel/types'
const traverse=traverseModule.default??traverseModule

export async function reconstructCommands(root, emit=true) {
  const directory=join(root,'bundles/Game.bundle')
  const manifest=JSON.parse(await readFile(join(directory,'manifest.json'),'utf8'))
  const dll=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const dllResolver = await createDllResolver(root)
  const readonlyBaseAccessors=new Set()
  const passThroughConstructors=new Set()
  for(const item of manifest.modules.filter(m=>m.path.endsWith('Command.js'))) {
    const source=await readFile(join(directory,item.path),'utf8')
    const ast=parser.parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
    for(const statement of ast.program.body.filter(t.isVariableDeclaration)){
      for(const dec of statement.declarations){
        if(!t.isCallExpression(dec.init)||!t.isFunctionExpression(dec.init.callee))continue
        const base=dec.init.arguments[0]
        if(!t.isMemberExpression(base)||!t.isIdentifier(base.property))continue
        const ctor=dec.init.callee.body.body.find(t.isFunctionDeclaration)
        if(!ctor||ctor.body.body.length<3)continue
        const first=ctor.body.body[0],last=ctor.body.body.at(-1)
        if(!t.isVariableDeclaration(first)||first.declarations.length!==1||!t.isIdentifier(first.declarations[0].id)||
          !t.isReturnStatement(last)||!t.isIdentifier(last.argument,{name:first.declarations[0].id.name}))continue
        const init=first.declarations[0].init
        if(!t.isLogicalExpression(init,{operator:'||'})||!t.isLogicalExpression(init.left,{operator:'&&'})||
          !t.isCallExpression(init.left.right)||!t.isMemberExpression(init.left.right.callee)||
          !t.isIdentifier(init.left.right.callee.property,{name:'apply'}))continue
        passThroughConstructors.add(base.property.name)
      }
    }
    traverse(ast,{CallExpression(path) {
      const n=path.node
      if(!t.isMemberExpression(n.callee)||!t.isIdentifier(n.callee.object,{name:'Object'})||
        !t.isIdentifier(n.callee.property,{name:'defineProperty'})||n.arguments.length!==3)return
      const target=n.arguments[0],key=n.arguments[1],descriptor=n.arguments[2]
      if(!t.isMemberExpression(target)||!t.isIdentifier(target.property,{name:'prototype'})||
        !t.isIdentifier(target.object)||!t.isStringLiteral(key)||!t.isObjectExpression(descriptor))return
      const props=descriptor.properties.filter(t.isObjectProperty)
      const get=props.some(p=>t.isIdentifier(p.key,{name:'get'}))
      const set=props.some(p=>t.isIdentifier(p.key,{name:'set'}))
      if(get&&!set)readonlyBaseAccessors.add(target.object.name+':'+key.value)
    }})
  }
  const trustedAncestors=new Map()
  const sourceOfDispatch=await readFile(join(directory,'modules/exports/CastleDispatchingCommand.js'),'utf8')
  const dispatchAst=parser.parse(sourceOfDispatch,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const dispatchWrappers=dispatchAst.program.body.filter(t.isVariableDeclaration).flatMap(x=>x.declarations)
    .filter(x=>t.isCallExpression(x.init)&&t.isFunctionExpression(x.init.callee)&&
      x.init.callee.body.body.some(y=>t.isFunctionDeclaration(y)&&t.isIdentifier(y.id,{name:'CastleDispatchingCommand'})))
  if(dispatchWrappers.length===1){
    const wrapper=dispatchWrappers[0].init
    const base=wrapper.arguments[0]
    const parentIsVerified=t.isMemberExpression(base)&&!base.computed&&
      t.isIdentifier(base.property,{name:'CastleCommand'})&&
      t.isCallExpression(base.object)&&t.isIdentifier(base.object.callee,{name:'require'})&&
      t.isStringLiteral(base.object.arguments[0],{value:'gge-module:export_CastleCommand'})&&
      manifest.specifiers['gge-module:export_CastleCommand']
    const own=wrapper.callee.body.body
    const overrides=own.some(stmt=>t.isExpressionStatement(stmt)&&(
      t.isCallExpression(stmt.expression)&&t.isMemberExpression(stmt.expression.callee)&&
        t.isIdentifier(stmt.expression.callee.object,{name:'Object'})&&
        t.isIdentifier(stmt.expression.callee.property,{name:'defineProperty'})&&
        t.isMemberExpression(stmt.expression.arguments[0])&&
        t.isIdentifier(stmt.expression.arguments[0].object,{name:'CastleDispatchingCommand'})&&
        t.isStringLiteral(stmt.expression.arguments[1],{value:'cmdId'})||
      t.isAssignmentExpression(stmt.expression)&&t.isMemberExpression(stmt.expression.left)&&
        t.isMemberExpression(stmt.expression.left.object)&&
        t.isIdentifier(stmt.expression.left.object.object,{name:'CastleDispatchingCommand'})&&
        t.isIdentifier(stmt.expression.left.object.property,{name:'prototype'})&&
        t.isIdentifier(stmt.expression.left.property,{name:'cmdId'})
    ))
    if(parentIsVerified&&!overrides)trustedAncestors.set('CastleDispatchingCommand:cmdId',new Set(['CastleCommand']))
  }
  const options={specifiers:manifest.specifiers,errorExportAvailable:dll.symbolViews?.filter(v=>v.name==='ERROR').length===1,resolveMember:dllResolver.resolve,dllImportFileName:dllResolver.importFileName,readonlyBaseAccessors,passThroughConstructors,trustedAncestors,preserveRuntimeInterfaces:true}
  const output=join(directory,'reconstructed/exports')
  if(emit)await mkdir(output,{recursive:true})
  const previous=JSON.parse(await readFile(join(directory,'reconstructed/coverage.json'),'utf8').catch(()=>'{"succeeded":[]}'))
  const succeeded=[],skipped=[]
  const candidates=manifest.modules.filter(m=>m.path.startsWith('modules/exports/') && m.path.endsWith('Command.js'))
    .sort((a,b)=>a.path.localeCompare(b.path))
  for(const item of candidates) {
    try {
      const source=await readFile(join(directory,item.path),'utf8')
      const result=reconstructEs5Class(source,options)
      if(!result){skipped.push({path:item.path,reason:'unsupported-class-shape'});continue}
      const transpiled=ts.transpileModule(result.code,{compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS},reportDiagnostics:true})
      if(transpiled.diagnostics?.length)throw Error('TypeScript syntax diagnostics: '+transpiled.diagnostics.map(d=>d.code+':'+ts.flattenDiagnosticMessageText(d.messageText,' ')).join('; ').slice(0,500))
      const name=result.className
      if(name+'.js'!==item.path.split('/').at(-1))throw Error('Exported class filename differs from AST constructor')
      const target=join(output,name+'.ts')
      if(emit){
        await writeFile(target,result.code)
        await writeFile(target+'.evidence.json',JSON.stringify(result.metadata,null,2)+'\n')
      }
      succeeded.push({name,originalPath:item.path,outputPath:'reconstructed/exports/'+name+'.ts',sourceHash:result.metadata.sourceHash})
    }catch(error){skipped.push({path:item.path,reason:error.message})}
  }
  if(emit) {
    const current=new Set(succeeded.map(x=>x.name))
    for(const old of previous.succeeded ?? []) {
      if(current.has(old.name))continue
      const target=join(output,old.name+'.ts')
      const [oldCode,evidence]=await Promise.all([
        readFile(target,'utf8'),
        readFile(target+'.evidence.json','utf8').then(JSON.parse)
      ])
      const actual=createHash('sha256').update(oldCode).digest('hex')
      if(actual!==evidence.generatedHash||evidence.sourceHash!==old.sourceHash)throw Error('Refusing to remove changed generated view: '+target)
      await unlink(target)
      await unlink(target+'.evidence.json')
    }
  }
  const report={schemaVersion:1,snapshot:'2026-10-16',examined:candidates.length,reconstructed:succeeded.length,rejected:skipped.length,succeeded,skipped}
  if(emit)await writeFile(join(directory,'reconstructed/coverage.json'),JSON.stringify(report,null,2)+'\n')
  return report
}
if(process.argv[1]?.endsWith('/reconstruct-commands.mjs')){
  reconstructCommands(resolve(process.argv[2]??'../..'),!process.argv.includes('--audit-only')).then(r=>{
    console.log(JSON.stringify({examined:r.examined,reconstructed:r.reconstructed,rejected:r.rejected,reasons:Object.entries(r.skipped.reduce((m,x)=>(m[x.reason.split(':')[0]]=(m[x.reason.split(':')[0]]??0)+1,m),{})).sort((a,b)=>b[1]-a[1]).slice(0,10)}))
  }).catch(e=>{console.error(e);process.exitCode=1})
}
