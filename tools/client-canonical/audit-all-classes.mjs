import {readFile,writeFile} from 'node:fs/promises'
import {join,resolve} from 'node:path'
import {reconstructEs5Class} from './reverse-ts-es5.mjs'
import {createDllResolver} from './resolve-imports.mjs'
import ts from 'typescript'

export async function auditAllClasses(root) {
  const manifest=JSON.parse(await readFile(join(root,'bundles/Game.bundle/manifest.json'),'utf8'))
  const resolver=await createDllResolver(root)
  const options={
    specifiers:manifest.specifiers,
    resolveMember:resolver.resolve,
    dllImportFileName:resolver.importFileName,
    errorExportAvailable:true
  }
  const candidates=manifest.modules.filter(x=>x.path.startsWith('modules/exports/')&&x.path.endsWith('.js'))
  const recovered=[],unresolved=[]
  for(const item of candidates){
    const source=await readFile(join(root,'bundles/Game.bundle',item.path),'utf8')
    try{
      const result=reconstructEs5Class(source,options)
      if(!result){unresolved.push({path:item.path,reason:'unsupported-source-structure'});continue}
      const transpiled=ts.transpileModule(result.code,{compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS},reportDiagnostics:true})
      if(transpiled.diagnostics?.length){
        unresolved.push({path:item.path,reason:'typescript-compiler-syntax'})
        continue
      }
      recovered.push({path:item.path,name:result.className,codeBytes:result.code.length,
        dependencies:result.metadata.dependencies.length,sourceHash:result.metadata.sourceHash})
    }catch(error){
      unresolved.push({path:item.path,reason:error.message.slice(0,180)})
    }
  }
  return {schemaVersion:1,snapshot:'2026-10-16',examined:candidates.length,
    recovered:recovered.length,unresolved:unresolved.length,
    recoveredSources:recovered,rejected:unresolved}
}
if(process.argv[1]?.endsWith('/audit-all-classes.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const output=resolve(process.argv[3]??'/tmp/gge-client-all-classes-audit.json')
  const report=await auditAllClasses(root)
  await writeFile(output,JSON.stringify(report,null,2)+'\n')
  const reasons={}
  for(const row of report.rejected){
    const key=row.reason.split(':')[0]
    reasons[key]=(reasons[key]??0)+1
  }
  console.log(JSON.stringify({examined:report.examined,recovered:report.recovered,rejected:report.unresolved,reasons:Object.entries(reasons).sort((a,b)=>b[1]-a[1]).slice(0,12)}))
}
