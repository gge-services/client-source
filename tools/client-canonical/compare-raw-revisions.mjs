import {createHash} from 'node:crypto'
import {readFile,writeFile} from 'node:fs/promises'
import {join,resolve} from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import generatorModule from '@babel/generator'
import * as t from '@babel/types'

const traverse=traverseModule.default??traverseModule
const generate=generatorModule.default??generatorModule
const sha=s=>createHash('sha256').update(s).digest('hex')

export function extractRawFactories(source){
  const ast=parser.parse(source,{sourceType:'unambiguous'})
  let root=ast.program.body[0]
  root=root.type==='VariableDeclaration'?root.declarations[0]?.init:root.expression
  if(root?.type==='UnaryExpression')root=root.argument
  if(root?.type!=='CallExpression'||root.arguments[0]?.type!=='ArrayExpression')
    throw Error('Unrecognized Webpack module factory array')
  return root.arguments[0].elements.map(node=>node?source.slice(node.start,node.end):null)
}

const propertyName=node=>node?.type==='Identifier'?node.name:node?.type==='StringLiteral'?node.value:null

const assetAssignment=node=>node?.type==='AssignmentExpression'&&node.operator==='='&&
  node.left.type==='MemberExpression'&&node.left.object?.type==='MemberExpression'&&
  node.left.object.object?.type==='ThisExpression'&&propertyName(node.left.object.property)==='assets'&&
  node.right.type==='StringLiteral'

const emptyBody=()=>t.objectExpression([])

function flattenMetadata(node,prefix='',target={}){
  if(node.type!=='ObjectExpression')return target
  for(const prop of node.properties){
    if(prop.type!=='ObjectProperty'||prop.computed)throw Error('Unsupported package metadata property')
    const key=propertyName(prop.key),path=prefix?prefix+'.'+key:key
    if(!key)throw Error('Unstable package metadata field')
    if(prop.value.type==='ObjectExpression')flattenMetadata(prop.value,path,target)
    else target[path]=generate(prop.value,{compact:true,comments:false}).code
  }
  return target
}

function transformAst(source,{stripAssets=false,stripPackage=false}={}){
  const ast=parser.parse('('+source+')',{sourceType:'unambiguous'})
  const literalAssets=new Map()
  let removedAssets=0
  let pkg=null
  if(stripPackage){
    const functionExpression=ast.program.body[0]?.expression
    const binding=functionExpression?.params[0]?.name
    traverse(ast,{AssignmentExpression(path){
      const n=path.node,left=n.left
      if(left.type!=='MemberExpression'||left.computed||propertyName(left.property)!=='exports'||
        left.object.type!=='Identifier'||left.object.name!==binding||
        n.right.type!=='ObjectExpression')return
      if(pkg)throw Error('Multiple exported package objects')
      pkg=flattenMetadata(n.right)
      path.node.right=emptyBody()
    }})
  }
  if(stripAssets){
    const collect=node=>{
      if(!assetAssignment(node))return false
      const key=propertyName(node.left.property)
      if(!key)throw Error('Asset path without a stable member key')
      const occurrences=literalAssets.get(key)??[]
      occurrences.push({at:node.start,value:node.right.value})
      literalAssets.set(key,occurrences)
      removedAssets++
      return true
    }
    traverse(ast,{
      SequenceExpression:{exit(path){
        const kept=path.node.expressions.filter(x=>!collect(x))
        if(kept.length===path.node.expressions.length)return
        if(kept.length===0)path.replaceWith(t.numericLiteral(0))
        else if(kept.length===1)path.replaceWith(kept[0])
        else path.node.expressions=kept
      }},
      ExpressionStatement:{exit(path){
        if(collect(path.node.expression))path.replaceWith(t.expressionStatement(t.numericLiteral(0)))
      }}
    })
  }
  let dynamicScope=false
  traverse(ast,{
    WithStatement(){dynamicScope=true},
    CallExpression(path){
      if(path.node.callee.type==='Identifier'&&path.node.callee.name==='eval')dynamicScope=true
    }
  })
  if(dynamicScope)return {safe:false,normalized:null,assets:literalAssets,removedAssets,packageMetadata:pkg}
  const bindings=new Map(),renames=[]
  traverse(ast,{Scopable(path){
    const entries=Object.values(path.scope.bindings).sort((a,b)=>(a.identifier.start??0)-(b.identifier.start??0))
    for(const binding of entries)if(!bindings.has(binding.identifier))bindings.set(binding.identifier,'__binding_'+bindings.size)
  }})
  traverse(ast,{Identifier(path){
    if(!path.isReferencedIdentifier()&&!path.isBindingIdentifier())return
    const binding=path.scope.getBinding(path.node.name)
    if(!binding)return
    const rename=bindings.get(binding.identifier)
    if(rename&&path.node.name!==rename)renames.push([path,rename])
  }})
  for(const [path,name]of renames){
    if(path.parent?.type==='ObjectProperty'&&path.parent.shorthand&&path.key==='value'){
      path.parent.shorthand=false
      path.node={...path.node,name}
    }else path.node.name=name
  }
  return {safe:true,normalized:generate(ast,{compact:true,comments:false}).code,
    assets:new Map([...literalAssets].map(([key,values])=>[key,JSON.stringify(values.sort((a,b)=>a.at-b.at).map(x=>x.value))])),
    removedAssets,packageMetadata:pkg}
}

export function normalizeMinifierBindings(factory){return transformAst(factory)}

const differences=(from,to)=>{
  const rows=[]
  for(const [name,value]of from){
    if(!to.has(name))rows.push({name,kind:'removed',previous:value})
    else if(value!==to.get(name))rows.push({name,kind:'modified',previous:value,current:to.get(name)})
  }
  for(const [name,value]of to)if(!from.has(name))rows.push({name,kind:'added',current:value})
  return rows.sort((a,b)=>a.name.localeCompare(b.name))
}

export function compareChangedFactory(previous,current){
  const left=transformAst(previous),right=transformAst(current)
  if(left.safe&&right.safe&&left.normalized===right.normalized)
    return {kind:'binding-renames-only',evidence:'alpha-normalized-ast-identical'}
  const oldAssets=transformAst(previous,{stripAssets:true}),newAssets=transformAst(current,{stripAssets:true})
  if(oldAssets.safe&&newAssets.safe&&oldAssets.removedAssets&&newAssets.removedAssets&&
    oldAssets.normalized===newAssets.normalized){
    return {kind:'asset-catalog-only',evidence:'nonasset-alpha-normalized-ast-identical',
      previousAssets:oldAssets.assets.size,currentAssets:newAssets.assets.size,
      previousAssetAssignments:oldAssets.removedAssets,currentAssetAssignments:newAssets.removedAssets,
      assetChanges:differences(oldAssets.assets,newAssets.assets)}
  }
  const oldPackage=transformAst(previous,{stripPackage:true}),newPackage=transformAst(current,{stripPackage:true})
  if(oldPackage.safe&&newPackage.safe&&oldPackage.packageMetadata&&newPackage.packageMetadata&&
    oldPackage.normalized===newPackage.normalized){
    const a=new Map(Object.entries(oldPackage.packageMetadata)),b=new Map(Object.entries(newPackage.packageMetadata))
    return {kind:'package-metadata-only',evidence:'nonmetadata-alpha-normalized-ast-identical',
      packageChanges:differences(a,b)}
  }
  return {kind:'unresolved-code-change',evidence:'normalized-bodies-differ'}
}

export async function compareRawRevisions(firstDir,secondDir){
  const results=[]
  for(const bundle of ['Game.bundle','ggs.dll']){
    const read=async dir=>{
      const capture=JSON.parse(await readFile(join(dir,'capture.json'),'utf8'))
      const data=await readFile(join(dir,'raw',bundle+'.js'),'utf8')
      const manifest=capture.bundles.find(x=>x.bundle===bundle)
      if(!manifest||sha(data)!==manifest.sha256)throw Error('Unverified official raw capture '+bundle)
      return {capture,manifest,factories:extractRawFactories(data)}
    }
    const previous=await read(firstDir),current=await read(secondDir)
    if(previous.factories.length!==current.factories.length)throw Error('Module indices are not aligned: '+bundle)
    const shared=previous.factories.filter((x,i)=>x&&x===current.factories[i]).length
    const present=previous.factories.filter(Boolean).length
    if(present===0||shared/present<0.95)throw Error('Insufficient same-index module evidence: '+bundle)
    const changed=[]
    for(let id=0;id<previous.factories.length;id++){
      const original=previous.factories[id],newer=current.factories[id]
      if(original===newer)continue
      if(!original||!newer)throw Error('Added or removed module without independent mapping: '+bundle+':'+id)
      const classification=compareChangedFactory(original,newer)
      changed.push({moduleIndex:id,previousFactorySha256:sha(original),currentFactorySha256:sha(newer),...classification})
    }
    const counts={}
    for(const row of changed)counts[row.kind]=(counts[row.kind]??0)+1
    results.push({bundle,previousAsset:previous.manifest.versionedAsset,currentAsset:current.manifest.versionedAsset,
      previousRawSha256:previous.manifest.sha256,currentRawSha256:current.manifest.sha256,
      moduleArrayLength:previous.factories.length,presentModules:present,exactlyUnchangedModules:shared,
      rawChangedModules:changed.length,classifications:counts,changes:changed})
  }
  return {schemaVersion:1,method:'direct-official-raw-AST-with-scoped-identifier-normalization',
    identityScope:'same-index-module-owners-with-over-95-percent-byte-identical-anchor-evidence',
    semanticBehavioralParityProven:false,results}
}

if(process.argv[1]?.endsWith('/compare-raw-revisions.mjs')){
  const first=resolve(process.argv[2]??'/tmp/gge-official-20261025-live')
  const second=resolve(process.argv[3]??'/tmp/gge-official-20261027-rawdiff')
  const destination=resolve(process.argv[4]??'graphs/2026-10-25-to-2026-10-27-rawdiff.json')
  const report=await compareRawRevisions(first,second)
  await writeFile(destination,JSON.stringify(report,null,2)+'\n')
  console.log(JSON.stringify(report.results.map(x=>({bundle:x.bundle,present:x.presentModules,
    unchanged:x.exactlyUnchangedModules,changed:x.rawChangedModules,classes:x.classifications,
    changes:x.changes.filter(y=>y.kind!=='binding-renames-only')}))))
}
