import {createHash} from 'node:crypto'
import {readFile,writeFile} from 'node:fs/promises'
import {join,resolve} from 'node:path'
import parser from '@babel/parser'

const hash=s=>createHash('sha256').update(s).digest('hex')

export function extractLiteralExports(source,factory=false){
  const ast=parser.parse(factory?'('+source+')':source,{sourceType:'unambiguous'})
  const root=factory?ast.program.body[0]?.expression:null
  if(factory&&root?.type!=='FunctionExpression')throw Error('Expected direct Webpack factory function')
  const exportName=factory?root.params[1]?.name:'exports'
  if(!exportName)return []
  const body=factory?root.body.body:ast.program.body
  const results=[]
  const visit=expression=>{
    if(expression?.type==='SequenceExpression'){for(const node of expression.expressions)visit(node);return}
    if(expression?.type!=='AssignmentExpression'||expression.operator!=='=')return
    const left=expression.left
    if(left.type!=='MemberExpression'||left.computed||left.object.type!=='Identifier'||
      left.object.name!==exportName||left.property.type!=='Identifier')return
    if(expression.right.type!=='StringLiteral'||expression.right.value.length<5)return
    results.push({name:left.property.name,value:expression.right.value})
  }
  for(const statement of body)if(statement.type==='ExpressionStatement')visit(statement.expression)
  return results.sort((a,b)=>a.name.localeCompare(b.name))
}

export async function auditLiteralIdentities(root,capture,graphNodes) {
  const manifest=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const raw=await readFile(join(capture,'raw/ggs.dll.js'),'utf8')
  const ast=parser.parse(raw,{sourceType:'unambiguous'})
  let outer=ast.program.body[0]
  outer=outer.type==='VariableDeclaration'?outer.declarations[0].init:outer.expression
  if(outer.type==='UnaryExpression')outer=outer.argument
  if(outer?.type!=='CallExpression'||outer.arguments[0]?.type!=='ArrayExpression')throw Error('Invalid official DLL wrapper')
  const previous=[],current=[]
  for(const module of manifest.modules){
    const source=await readFile(join(root,'bundles/ggs.dll',module.path),'utf8')
    const exports=extractLiteralExports(source)
    for(const literal of exports)previous.push({...literal,module,sha:hash(source)})
  }
  for(const [id,factory]of outer.arguments[0].elements.entries()){
    if(!factory)continue
    const source=raw.slice(factory.start,factory.end)
    for(const literal of extractLiteralExports(source,true))current.push({...literal,webpackId:String(id),sha:hash(source)})
  }
  const grouped=values=>{
    const map=new Map()
    for(const value of values){
      const key=value.name+'\0'+value.value
      map.set(key,[...(map.get(key)??[]),value])
    }
    return map
  }
  const first=grouped(previous),second=grouped(current)
  const unknown=new Set(graphNodes.filter(x=>!x.id||x.id.startsWith('ggs.dll:literal-export:')).map(x=>x.path))
  const matches=[]
  for(const [key,from]of first){
    const to=second.get(key)
    if(from.length!==1||to?.length!==1||!unknown.has(from[0].module.path))continue
    const old=from[0],newer=to[0]
    matches.push({bundle:'ggs.dll',semanticId:'ggs.dll:literal-export:'+old.name+':'+hash(old.value).slice(0,16),
      exportName:old.name,literalValue:old.value,sourcePath:old.module.path,
      previousWebpackId:String(old.module.webpackId),currentWebpackId:newer.webpackId,
      sourceSha256:old.sha,currentFactorySha256:newer.sha})
  }
  const paths=new Set(),ids=new Set(),live=new Set()
  for(const record of matches){
    if(paths.has(record.sourcePath)||ids.has(record.semanticId)||live.has(record.currentWebpackId))throw Error('Ambiguous constant-backed identity')
    paths.add(record.sourcePath)
    ids.add(record.semanticId)
    live.add(record.currentWebpackId)
  }
  matches.sort((a,b)=>a.semanticId.localeCompare(b.semanticId))
  return matches
}

if(process.argv[1]?.endsWith('/literal-identities.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const capture=resolve(process.argv[3]??'/tmp/gge-official-20261025-live')
  const output=resolve(process.argv[4]??join(root,'graphs/2026-10-25-literal-identities.jsonl'))
  const savedGraph=(await readFile(join(root,'graphs/2026-10-16.jsonl'),'utf8')).trim().split('\n').map(JSON.parse)
  const result=await auditLiteralIdentities(root,capture,savedGraph)
  await writeFile(output,result.map(x=>JSON.stringify(x)).join('\n')+'\n')
  console.log(JSON.stringify({verifiedLiteralModuleIdentities:result.length,exportNames:result.map(x=>x.exportName)}))
}
