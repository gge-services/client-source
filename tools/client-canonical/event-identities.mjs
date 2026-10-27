import {readFile,writeFile} from 'node:fs/promises'
import {join,resolve} from 'node:path'
import {createHash} from 'node:crypto'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse=traverseModule.default??traverseModule
const checksum=s=>createHash('sha256').update(s).digest('hex')

export function extractEventDefinitionId(source) {
  if(!source.includes('___baseEventTypeDefinition')||!source.includes('eventId'))return null
  const wrapped=source.trimStart().startsWith('function(')||source.trimStart().startsWith('function ')?
    '('+source+')':source
  const ast=parser.parse(wrapped,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const initial=ast.program.body[0]
  const factory=initial?.type==='ExpressionStatement'&&initial.expression?.type==='FunctionExpression'?
    initial.expression:null
  const exportBinding=factory?.params[1]?.name??'exports'
  const ids=new Set()
  let exported=false
  traverse(ast,{
    AssignmentExpression(path) {
      const left=path.node.left
      if(left.type==='MemberExpression'&&left.property.type==='Identifier'&&
        left.property.name==='___baseEventTypeDefinition'&&
        left.object.type==='Identifier'&&left.object.name===exportBinding)exported=true
    },
    ObjectProperty(path) {
      const n=path.node
      if(!['Identifier','StringLiteral'].includes(n.key.type)||n.key.name!=='eventId'&&n.key.value!=='eventId')return
      const v=n.value
      if(v.type!=='CallExpression'||v.callee.type!=='MemberExpression'||
        v.callee.property.type!=='Identifier'||v.callee.property.name!=='Literal'||v.arguments.length!==1||
        v.arguments[0].type!=='NumericLiteral')return
      ids.add(v.arguments[0].value)
    }
  })
  return exported&&ids.size===1?[...ids][0]:null
}

function eventDefinitionShape(source) {
  const wrapped=source.trimStart().startsWith('function(')||source.trimStart().startsWith('function ')?
    '('+source+')':source
  const ast=parser.parse(wrapped,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const initial=ast.program.body[0]
  const factory=initial?.type==='ExpressionStatement'&&initial.expression?.type==='FunctionExpression'?
    initial.expression:null
  const exportBinding=factory?.params[1]?.name??'exports'
  let definition=null
  traverse(ast,{AssignmentExpression(path){
    const left=path.node.left
    if(left.type==='MemberExpression'&&left.object.type==='Identifier'&&left.object.name===exportBinding&&
      left.property.type==='Identifier'&&left.property.name==='___baseEventTypeDefinition'){
      if(definition)throw Error('Duplicated exported base event definition')
      definition=path.node.right
    }
  }})
  if(!definition)return null
  const findRecord=expression=>{
    if(expression?.type!=='CallExpression'||expression.callee.type!=='MemberExpression')return null
    if(expression.callee.property.type==='Identifier'&&expression.callee.property.name==='Record'&&
      expression.arguments[0]?.type==='ObjectExpression')return expression.arguments[0]
    return findRecord(expression.callee.object)
  }
  const record=findRecord(definition)
  if(!record)return null
  const nameOf=node=>node?.type==='Identifier'?node.name:node?.type==='StringLiteral'?node.value:null
  const operation=node=>{
    if(node?.type==='CallExpression')return operation(node.callee)
    if(node?.type==='MemberExpression'){
      const suffix=nameOf(node.property)
      if(!suffix)return null
      if(node.object?.type==='Identifier')return suffix
      const parent=operation(node.object)
      return parent?parent+'.'+suffix:suffix
    }
    if(node?.type==='Identifier')return node.name
    return null
  }
  const fields=[]
  for(const property of record.properties){
    if(property.type!=='ObjectProperty'||property.computed)return null
    const name=nameOf(property.key),type=operation(property.value)
    if(!name||!type||fields.some(x=>x.name===name))return null
    fields.push({name,type})
  }
  return fields.sort((a,b)=>a.name.localeCompare(b.name))
}

export {eventDefinitionShape}

export async function auditCrossRevisionEventIds(root, capture) {
  const manifest=JSON.parse(await readFile(join(root,'bundles/ggs.dll/manifest.json'),'utf8'))
  const old=[]
  for(const module of manifest.modules){
    const source=await readFile(join(root,'bundles/ggs.dll',module.path),'utf8')
    const eventId=extractEventDefinitionId(source)
    if(eventId!==null)old.push({eventId,oldId:String(module.webpackId),sourcePath:module.path,
      originalSha256:checksum(source),definitionFields:eventDefinitionShape(source)})
  }
  const raw=await readFile(join(capture,'raw/ggs.dll.js'),'utf8')
  const program=parser.parse(raw,{sourceType:'unambiguous'})
  let outer=program.program.body[0]
  outer=outer.type==='VariableDeclaration'?outer.declarations[0].init:outer.expression
  if(outer.type==='UnaryExpression')outer=outer.argument
  if(outer.type!=='CallExpression'||outer.arguments[0]?.type!=='ArrayExpression')throw Error('Unsupported original DLL factory shape')
  const current=[]
  for(const [index,factory] of outer.arguments[0].elements.entries()){
    if(!factory)continue
    const content=raw.slice(factory.start,factory.end)
    const eventId=extractEventDefinitionId(content)
    if(eventId!==null)current.push({eventId,newId:String(index),liveFactorySha256:checksum(content),
      definitionFields:eventDefinitionShape(content)})
  }
  const unique=(values,label)=>{
    const byId=new Map()
    for(const item of values){
      if(byId.has(item.eventId))throw Error('Duplicate '+label+' eventId '+item.eventId)
      byId.set(item.eventId,item)
    }
    return byId
  }
  const older=unique(old,'baseline'),newer=unique(current,'live')
  const proven=[]
  for(const [eventId,entry] of older){
    const candidate=newer.get(eventId)
    if(!candidate)continue
    proven.push({bundle:'ggs.dll',semanticId:'ggs.dll:event:'+eventId,eventId,
      previousWebpackId:entry.oldId,currentWebpackId:candidate.newId,
      oldSourcePath:entry.sourcePath,oldSourceSha256:entry.originalSha256,
      currentFactorySha256:candidate.liveFactorySha256,
      sourceDefinitionFields:entry.definitionFields,liveDefinitionFields:candidate.definitionFields,
      definitionFieldsMatch:JSON.stringify(entry.definitionFields)===JSON.stringify(candidate.definitionFields)})
  }
  proven.sort((a,b)=>a.eventId-b.eventId)
  return {schemaVersion:1,sourceSnapshot:'2026-10-16',liveSnapshot:'2026-10-25',
    baselineEventIds:older.size,liveEventIds:newer.size,proven:proven.length,
    unchangedBaseFieldShapes:proven.filter(x=>x.definitionFieldsMatch).length,
    changedBaseFieldShapes:proven.filter(x=>!x.definitionFieldsMatch).length,
    fullSemanticParityProven:false,records:proven}
}

if(process.argv[1]?.endsWith('/event-identities.mjs')){
  const root=resolve(process.argv[2]??'../..')
  const capture=resolve(process.argv[3]??'/tmp/gge-official-20261025-live')
  const output=resolve(process.argv[4]??join(root,'graphs/2026-10-25-event-identities.jsonl'))
  const report=await auditCrossRevisionEventIds(root,capture)
  await writeFile(output,report.records.map(x=>JSON.stringify(x)).join('\n')+'\n')
  console.log(JSON.stringify({baseline:report.baselineEventIds,live:report.liveEventIds,proven:report.proven,
    unchangedFields:report.unchangedBaseFieldShapes,changedFields:report.changedBaseFieldShapes}))
}
