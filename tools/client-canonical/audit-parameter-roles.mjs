import {readFile,writeFile,mkdir} from 'node:fs/promises'
import {join,dirname,resolve} from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse=traverseModule.default??traverseModule

export async function auditParameterRoles(root) {
  const base=join(root,'bundles/Game.bundle')
  const coverage=JSON.parse(await readFile(join(base,'reconstructed/coverage.json'),'utf8'))
  const names=new Map()
  const roles=new Map()
  const examples=[]
  let total=0
  let positional=0
  let improved=0
  for(const item of coverage.succeeded) {
    const code=await readFile(join(base,item.outputPath),'utf8')
    const ast=parser.parse(code,{sourceType:'module',plugins:['typescript']})
    traverse(ast,{ClassMethod(path) {
      const owner=item.name,method=path.node.key?.name
      for(const [index,node] of path.node.params.entries()) {
        const argument=node.type==='AssignmentPattern'?node.left:node.type==='RestElement'?node.argument:node
        if(argument.type!=='Identifier')continue
        total++
        names.set(argument.name,(names.get(argument.name)??0)+1)
        if(/^argument\d+$/.test(argument.name)||/^__s\d+param\d+/.test(argument.name)||argument.name==='args')positional++
        if(!method||!owner)throw Error('Cannot identify method for parameter '+argument.name)
      }
    }})
    const evidence=JSON.parse(await readFile(join(base,'reconstructed/exports',item.name+'.ts.evidence.json'),'utf8'))
    for(const rule of evidence.verifiedParameterRenames??[]) {
      if(rule.confidence!=='high'||!rule.evidence||!rule.method)throw Error('Unverified parameter alias for '+item.name)
      improved++
      roles.set(rule.meaning,(roles.get(rule.meaning)??0)+1)
      if(examples.length<18)examples.push({class:item.name,method:rule.method,index:rule.index,name:rule.name,reason:rule.evidence})
    }
  }
  return {schemaVersion:1,snapshot:'2026-10-16',scope:'reconstructed-command-class-methods',
    reconstructedCommands:coverage.reconstructed,totalParameters:total,positionalOnly:positional,
    semanticOrNonGeneric:total-positional,
    additionalProvenRoles:improved,additionalRoles:Object.fromEntries([...roles].sort()),
    examples,byName:Object.fromEntries([...names].sort((a,b)=>b[1]-a[1]))}
}

if(process.argv[1]?.endsWith('/audit-parameter-roles.mjs')) {
  const root=resolve(process.argv[2]??'../..')
  const output=resolve(process.argv[3]??join(root,'graphs/2026-10-16-parameter-roles.json'))
  const report=await auditParameterRoles(root)
  const formatted=JSON.stringify(report,null,2)+'\n'
  if(process.argv.includes('--check')){
    const expected=await readFile(output,'utf8')
    if(expected!==formatted)throw Error('Semantic parameter audit has changed: '+output)
  }else{
    await mkdir(dirname(output),{recursive:true})
    await writeFile(output,formatted)
  }
  console.log(JSON.stringify({classes:report.reconstructedCommands,total:report.totalParameters,positional:report.positionalOnly,additional:report.additionalProvenRoles,roles:report.additionalRoles}))
}
