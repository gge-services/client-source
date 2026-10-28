import {createHash} from 'node:crypto'
import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {join,resolve,dirname} from 'node:path'
import ts from 'typescript'
import {reconstructEs5Class} from './reverse-ts-es5.mjs'
import {createDllResolver} from './resolve-imports.mjs'

const hash=text=>createHash('sha256').update(text).digest('hex')

export async function reconstructDependencies(root){
  const snapshot='2026-10-16'
  const base=join(root,'bundles/Game.bundle')
  const manifest=JSON.parse(await readFile(join(base,'manifest.json'),'utf8'))
  const audit=JSON.parse(await readFile(join(base,'reconstructed/compile-status.json'),'utf8'))
  const priorCoverage=JSON.parse(await readFile(join(base,'reconstructed/dependencies/coverage.json'),'utf8')
    .catch(()=>'{"sourceBackedClassViews":[]}'))
  const pending=[...audit.externallyBacked]
  for(const view of priorCoverage.sourceBackedClassViews){
    const entry={name:view.className,source:view.canonicalSource.slice('modules/'.length),
      bundle:'Game.bundle',canonicalSha256:view.canonicalSourceSha256}
    if(!pending.some(x=>x.name===entry.name&&x.bundle===entry.bundle))pending.push(entry)
  }
  const dllResolver=await createDllResolver(root)
  const options={specifiers:manifest.specifiers,resolveMember:dllResolver.resolve,
    dllImportFileName:dllResolver.importFileName}
  const sourceRecords=new Map([...manifest.modules,...(manifest.symbolViews??[])].map(x=>[x.path,x]))
  const consumerCode=[]
  const commandCoverage=JSON.parse(await readFile(join(base,'reconstructed/coverage.json'),'utf8'))
  for(const command of commandCoverage.succeeded){
    consumerCode.push(await readFile(join(base,'reconstructed/exports',command.name+'.ts'),'utf8'))
  }
  const candidates=[]
  const skipped=[]
  for(const entry of pending){
    if(entry.bundle!=='Game.bundle'||!entry.source.startsWith('exports/')||!entry.source.endsWith('.js')){
      skipped.push({name:entry.name,reason:'requires-complex-source-linkage'})
      continue
    }
    const sourcePath='modules/'+entry.source
    const owner=sourceRecords.get(sourcePath)
    if(!owner||owner.canonicalSha256!==entry.canonicalSha256){
      throw Error('Unverified dependency source owner '+entry.name)
    }
    const source=await readFile(join(base,sourcePath),'utf8')
    if(hash(source)!==entry.canonicalSha256)throw Error('Canonical source changed for '+entry.name)
    let result
    try{result=reconstructEs5Class(source,options)}catch(error){
      skipped.push({name:entry.name,reason:'AST verification failed: '+error.message.slice(0,140)})
      continue
    }
    if(!result||result.className!==entry.name){
      skipped.push({name:entry.name,reason:'not a verified reconstructed class'})
      continue
    }
    if(result.metadata.dependencies.length){
      skipped.push({name:entry.name,reason:'additional runtime module imports'})
      continue
    }
    if(result.metadata.sourceHash!==entry.canonicalSha256)throw Error('AST provenance mismatch '+entry.name)
    const staticMembers=new Set()
    const classAst=ts.createSourceFile(entry.name+'.ts',result.code,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS)
    for(const statement of classAst.statements){
      if(!ts.isClassDeclaration(statement)||statement.name?.text!==entry.name)continue
      for(const member of statement.members){
        if(member.modifiers?.some(x=>x.kind===ts.SyntaxKind.StaticKeyword)&&member.name?.text)
          staticMembers.add(member.name.text)
      }
    }
    const requested=new Set()
    const regex=new RegExp('\\b'+entry.name+'\\.([A-Za-z_$][A-Za-z0-9_$]*)','g')
    for(const consumer of consumerCode){
      for(const match of consumer.matchAll(regex))requested.add(match[1])
    }
    const unknown=[...requested].filter(name=>!staticMembers.has(name)&&!['name','length','prototype'].includes(name))
    if(unknown.length){
      skipped.push({name:entry.name,reason:'Unverified static members used by commands: '+unknown.join(',')})
      continue
    }
    const transpiled=ts.transpileModule(result.code,{
      compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS},reportDiagnostics:true})
    if(transpiled.diagnostics?.length){
      skipped.push({name:entry.name,reason:'TypeScript syntax diagnostics'})
      continue
    }
    candidates.push({name:entry.name,source:sourcePath,sourceHash:entry.canonicalSha256,
      code:result.code,generatedHash:hash(result.code),
      globalRuntimeDependencies:['createjs','CONSTRUCTOR_HACK'].filter(name=>result.code.includes(name))})
  }
  const output=join(base,'reconstructed/dependencies')
  await mkdir(output,{recursive:true})
  const records=[]
  for(const candidate of candidates.sort((a,b)=>a.name.localeCompare(b.name))){
    const filepath=join(output,candidate.name+'.ts')
    await writeFile(filepath,candidate.code)
    const evidence={schemaVersion:1,snapshot,className:candidate.name,
      canonicalSource:candidate.source,canonicalSourceSha256:candidate.sourceHash,
      generatedHash:candidate.generatedHash,
      dependencies:[],globalRuntimeDependencies:candidate.globalRuntimeDependencies,
      runtimeReady:Boolean(!candidate.globalRuntimeDependencies.length)}
    await writeFile(filepath+'.evidence.json',JSON.stringify(evidence,null,2)+'\n')
    records.push({...evidence,filename:candidate.name+'.ts'})
  }
  const coverage={schemaVersion:1,snapshot,generated:records.length,
    remainingTypeOnly:pending.length-records.length,
    sourceBackedClassViews:records,skipped}
  await writeFile(join(output,'coverage.json'),JSON.stringify(coverage,null,2)+'\n')
  return coverage
}

if(process.argv[1]?.endsWith('/reconstruct-dependencies.mjs')){
  reconstructDependencies(resolve(process.argv[2]??'../..')).then(result=>{
    console.log(JSON.stringify({recovered:result.generated,remainingTypeOnly:result.remainingTypeOnly,
      globalRuntime:result.sourceBackedClassViews.filter(x=>!x.runtimeReady).length,
      rejected:result.skipped.length}))
  }).catch(error=>{console.error(error);process.exitCode=1})
}
