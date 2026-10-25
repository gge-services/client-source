import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { reconstructEs5Class } from './reverse-ts-es5.mjs'
import ts from 'typescript'

export async function reconstructCommands(root, emit=true) {
  const directory=join(root,'bundles/Game.bundle')
  const manifest=JSON.parse(await readFile(join(directory,'manifest.json'),'utf8'))
  const dll=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const options={specifiers:manifest.specifiers,errorExportAvailable:dll.symbolViews?.filter(v=>v.name==='ERROR').length===1}
  const output=join(directory,'reconstructed/exports')
  if(emit)await mkdir(output,{recursive:true})
  const succeeded=[],skipped=[]
  const candidates=manifest.modules.filter(m=>m.path.startsWith('modules/exports/') && m.path.endsWith('Command.js'))
    .sort((a,b)=>a.path.localeCompare(b.path))
  for(const item of candidates) {
    try {
      const source=await readFile(join(directory,item.path),'utf8')
      const result=reconstructEs5Class(source,options)
      if(!result){skipped.push({path:item.path,reason:'unsupported-class-shape'});continue}
      const transpiled=ts.transpileModule(result.code,{compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS},reportDiagnostics:true})
      if(transpiled.diagnostics?.length)throw Error('TypeScript syntax diagnostics: '+transpiled.diagnostics.length)
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
  const report={schemaVersion:1,snapshot:'2026-10-16',examined:candidates.length,reconstructed:succeeded.length,rejected:skipped.length,succeeded,skipped}
  if(emit)await writeFile(join(directory,'reconstructed/coverage.json'),JSON.stringify(report,null,2)+'\n')
  return report
}
if(process.argv[1]?.endsWith('/reconstruct-commands.mjs')){
  reconstructCommands(resolve(process.argv[2]??'../..'),!process.argv.includes('--audit-only')).then(r=>{
    console.log(JSON.stringify({examined:r.examined,reconstructed:r.reconstructed,rejected:r.rejected,reasons:Object.entries(r.skipped.reduce((m,x)=>(m[x.reason.split(':')[0]]=(m[x.reason.split(':')[0]]??0)+1,m),{})).sort((a,b)=>b[1]-a[1]).slice(0,10)}))
  }).catch(e=>{console.error(e);process.exitCode=1})
}
