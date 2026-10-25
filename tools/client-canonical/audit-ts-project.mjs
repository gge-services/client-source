import { readFile,writeFile,mkdir,copyFile } from 'node:fs/promises'
import { join,resolve,dirname } from 'node:path'
import { createHash } from 'node:crypto'
import ts from 'typescript'

const checksum = data => createHash('sha256').update(data).digest('hex')

export async function auditTsProject(root,target) {
  const source=join(root,'bundles/Game.bundle/reconstructed/exports')
  const coverage=JSON.parse(await readFile(join(root,'bundles/Game.bundle/reconstructed/coverage.json'),'utf8'))
  const game=JSON.parse(await readFile(join(root,'bundles/Game.bundle/manifest.json'),'utf8'))
  const dll=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const recovered=new Set(coverage.succeeded.map(x=>x.name))
  const gameSource=new Map(game.modules.map(x=>[x.path,x]))
  const dllSource=new Map([...dll.modules,...(dll.symbolViews??[])].map(x=>[x.path,x]))
  const filenames=[],missing=new Map(),unknown=[]
  const compiled=new Map()
  for(const item of coverage.succeeded) {
    const filename=join(source,item.name+'.ts')
    const text=await readFile(filename,'utf8')
    const record=JSON.parse(await readFile(filename+'.evidence.json','utf8'))
    if(record.generatedHash!==checksum(text)) throw Error('Generated TypeScript hash mismatch '+item.name)
    const imports=new Map(record.dependencies.map(x=>[x.imported+':'+x.bundle,x]))
    const sf=ts.createSourceFile(filename,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS)
    for(const statement of sf.statements) {
      if(!ts.isImportDeclaration(statement)||!statement.importClause?.namedBindings||!ts.isNamedImports(statement.importClause.namedBindings))continue
      for(const imported of statement.importClause.namedBindings.elements) {
        const name=imported.propertyName?.text??imported.name.text
        const isDLL=statement.moduleSpecifier.text.startsWith('../../../ggs.dll/')
        const meta=imports.get(name+':'+(isDLL?'ggs.dll':'Game.bundle'))
        if(!meta){unknown.push({file:item.name,import:name,reason:'missing-code-provenance'});continue}
        const actual=join(root,'bundles',meta.bundle==='ggs.dll'?'ggs.dll':'Game.bundle',meta.bundle==='ggs.dll'?(meta.source??meta.path):'modules/'+(meta.source??meta.path))
        const sourceText=await readFile(actual,'utf8').catch(()=>null)
        if(!sourceText){unknown.push({file:item.name,import:name,reason:'missing-canonical-source',actual});continue}
        const expected=(meta.bundle==='Game.bundle'?gameSource:dllSource).get(meta.bundle==='ggs.dll'?(meta.source??meta.path):'modules/'+(meta.source??meta.path))
        if(!expected||checksum(sourceText)!==expected.canonicalSha256)throw Error('Canonical provenance mismatch for '+item.name+' -> '+name)
        if(meta.bundle==='Game.bundle'&&recovered.has(name))continue
        const destination=isDLL?join(target,'bundles/ggs.dll/reconstructed/exports',statement.moduleSpecifier.text.split('/').at(-1)):join(target,'bundles/Game.bundle/reconstructed/exports',name)
        missing.set(destination,{name,source:meta.source??meta.path,bundle:meta.bundle,confidence:meta.confidence??'unique-public-export',canonicalSha256:expected.canonicalSha256})
      }
    }
    const output=join(target,'bundles/Game.bundle/reconstructed/exports',item.name+'.ts')
    await mkdir(dirname(output),{recursive:true})
    await copyFile(filename,output)
    filenames.push(output)
  }
  for(const [destination,entry] of missing) {
    await mkdir(dirname(destination),{recursive:true})
    await writeFile(destination+'.d.ts','export declare const '+entry.name+': any;\n')
  }
  const globals=join(target,'compatibility-globals.d.ts')
  await writeFile(globals,'interface Date { time: number }\ninterface Window { grecaptcha: any; ggs: any }\ninterface ArrayConstructor { NUMERIC: number; DESCENDING: number }\n')
  const emit=process.argv.includes('--emit')
  const program=ts.createProgram([...filenames,globals],{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2015,noEmit:!emit,skipLibCheck:true,strict:false,noEmitOnError:true,...(emit?{outDir:join(target,'compiled')}:{})})
  const errors=ts.getPreEmitDiagnostics(program)
  const diagnostics=errors.map(d=>({
    code:d.code,
    file:d.file?.fileName.slice(target.length+1)??null,
    line:d.file&&d.start!==undefined?d.file.getLineAndCharacterOfPosition(d.start).line+1:null,
    message:ts.flattenDiagnosticMessageText(d.messageText,' ')
  }))
  const emitted=emit&&errors.length===0?program.emit():null
  if(emitted?.emitSkipped)throw Error('TypeScript 2.9 emission was unexpectedly skipped')
  const byCode={}
  for(const d of diagnostics)byCode[d.code]=(byCode[d.code]??0)+1
  const report={
    schemaVersion:1,snapshot:'2026-10-16',mode:'type-only-canonical-compatibility',reconstructedClasses:coverage.reconstructed,unreconstructedCommands:coverage.rejected,
    sourceBackedTypeOnlyDependencies:missing.size,originalSourceMissing:unknown.length,
    compiler:'typescript '+ts.version,compilerDiagnostics:diagnostics.length,byCode,
    canTypecheck:diagnostics.length===0,emittedJavaScript:emitted!==null&&!emitted.emitSkipped,canonicalModules:6850,unreconstructedCanonicalModules:6850-coverage.reconstructed,fullyReconstructed:coverage.reconstructed===6850&&missing.size===0&&coverage.rejected===0,runtimeReady:false,
    externallyBacked:[...missing.values()].sort((a,b)=>a.name.localeCompare(b.name)),
    missing:unknown,diagnostics
  }
  await writeFile(join(target,'compile-audit.json'),JSON.stringify(report,null,2)+'\n')
  return report
}

if(process.argv[1]?.endsWith('/audit-ts-project.mjs')){
  auditTsProject(resolve(process.argv[2]??'../..'),resolve(process.argv[3]??'/tmp/gge-client-ts-project-audit')).then(r=>{
    console.log(JSON.stringify({classes:r.reconstructedClasses,externalTypes:r.sourceBackedTypeOnlyDependencies,missingCanonical:r.originalSourceMissing,compilerDiagnostics:r.compilerDiagnostics,byCode:r.byCode,compiler:r.compiler,full:r.fullyReconstructed}))
    if(r.compilerDiagnostics||r.originalSourceMissing)process.exitCode=2
    if(process.argv.includes('--strict')&&(!r.canTypecheck||!r.fullyReconstructed))process.exitCode=2
  }).catch(e=>{console.error(e);process.exitCode=1})
}
