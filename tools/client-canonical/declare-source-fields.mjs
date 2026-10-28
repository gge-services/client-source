import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import ts from 'typescript'

const traverse=traverseModule.default??traverseModule

export function declareSourceFields(canonical,typescript,className){
  const ast=parser.parse(canonical,{sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const assigned=new Map()
  traverse(ast,{AssignmentExpression(path){
    const target=path.node.left
    if(target.type!=='MemberExpression'||target.computed||target.property.type!=='Identifier')return
    const staticOwner=target.object.type==='Identifier'&&target.object.name===className
    const instanceOwner=target.object.type==='ThisExpression'
    if(!staticOwner&&!instanceOwner)return
    const name=target.property.name
    if(!/^[a-zA-Z_$][\w$]*$/.test(name))return
    assigned.set((staticOwner?'static:':'instance:')+name,{name,staticOwner})
  }})
  const tree=ts.createSourceFile(className+'.ts',typescript,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS)
  const node=tree.statements.find(x=>ts.isClassDeclaration(x)&&x.name?.text===className)
  if(!node)throw Error('Generated class missing '+className)
  const existing=new Set(node.members.filter(x=>x.name?.text).map(x=>
    (x.modifiers?.some(m=>m.kind===ts.SyntaxKind.StaticKeyword)?'static:':'instance:')+x.name.text))
  const additions=[...assigned].filter(([key])=>!existing.has(key)).map(([,x])=>x)
    .sort((a,b)=>Number(a.staticOwner)-Number(b.staticOwner)||a.name.localeCompare(b.name))
  if(!additions.length)return {code:typescript,declarations:[]}
  const insert=node.members.pos===node.end?node.end-1:node.members.pos
  const before=typescript.slice(0,insert)
  const after=typescript.slice(insert)
  const declarations=additions.map(x=>(x.staticOwner?'static ':'')+x.name+': any;')
  const code=before+'\n  '+declarations.join('\n  ')+ '\n'+after
  const emitted=ts.transpileModule(code,{compilerOptions:{target:ts.ScriptTarget.ES2015,module:ts.ModuleKind.CommonJS},reportDiagnostics:true})
  if(emitted.diagnostics?.length)throw Error('Invalid source-backed declarations: '+className)
  return {code,declarations}
}
