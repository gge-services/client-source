import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname, resolve } from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import generateModule from '@babel/generator'
import * as t from '@babel/types'
import {renameVerifiedParameters} from './semantic-parameters.mjs'
const traverse = traverseModule.default ?? traverseModule
const generate = generateModule.default ?? generateModule
const sha = input => createHash('sha256').update(input).digest('hex')
const member = (node, name) => t.isMemberExpression(node) && !node.computed && t.isIdentifier(node.property, {name})
const nodeName = node => t.isIdentifier(node) ? node.name : null
const exactName = (node, name) => t.isIdentifier(node, {name})
const objectCall = (node, name) => t.isCallExpression(node) && member(node.callee, name) && exactName(node.callee.object, 'Object')
const isClassProto = (node, className) => member(node, 'prototype') && exactName(node.object, className)
const fnBody = node => t.isFunctionExpression(node) ? node.body : null

function getterDescriptor(stmt, className) {
  const call = stmt.expression
  if (!objectCall(call, 'defineProperty') || call.arguments.length !== 3 ||
    !(isClassProto(call.arguments[0], className)||t.isIdentifier(call.arguments[0],{name:className})) ||
    !t.isStringLiteral(call.arguments[1]) || !t.isObjectExpression(call.arguments[2])) return null
  const descriptor = Object.fromEntries(call.arguments[2].properties.filter(t.isObjectProperty).map(p => [nodeName(p.key), p.value]))
  if (!t.isBooleanLiteral(descriptor.enumerable, {value:true}) || !t.isBooleanLiteral(descriptor.configurable, {value:true})) return null
  const methods = []
  for (const kind of ['get','set']) {
    if (!descriptor[kind]) continue
    if (!t.isFunctionExpression(descriptor[kind])) return null
    const method=t.classMethod(kind, t.identifier(call.arguments[1].value), descriptor[kind].params, t.cloneNode(descriptor[kind].body,true))
    method.static=t.isIdentifier(call.arguments[0],{name:className})
    methods.push(method)
  }
  return methods.length ? methods : null
}

function isDelegatingConstructor(fn, superName) {
  const statements = fn.body.body
  if (fn.params.length || statements.length !== 1 || !t.isReturnStatement(statements[0])) return false
  const n = statements[0].argument
  if (!t.isLogicalExpression(n, {operator:'||'}) || !t.isThisExpression(n.right)) return false
  const a = n.left
  if (!t.isLogicalExpression(a, {operator:'&&'})) return false
  if (!t.isBinaryExpression(a.left, {operator:'!=='}) || !exactName(a.left.left, superName) ||
    !t.isNullLiteral(a.left.right)) return false
  const call = a.right
  return t.isCallExpression(call) && member(call.callee, 'apply') && exactName(call.callee.object, superName) &&
    call.arguments.length === 2 && t.isThisExpression(call.arguments[0]) && exactName(call.arguments[1], 'arguments')
}

function constructorFromCall(fn, superName) {
  const statements=fn.body.body
  const hasHook=statements.length===2&&t.isExpressionStatement(statements[0])&&
    t.isIdentifier(statements[0].expression,{name:'CONSTRUCTOR_HACK'})
  if ((!hasHook&&statements.length!==1)||!t.isReturnStatement(statements.at(-1)))return null
  const expr=statements.at(-1).argument
  if(!t.isLogicalExpression(expr,{operator:'||'})||!t.isThisExpression(expr.right)||
    !t.isCallExpression(expr.left)||!member(expr.left.callee,'call')||
    !exactName(expr.left.callee.object,superName)||expr.left.arguments.length!==fn.params.length+1||
    !t.isThisExpression(expr.left.arguments[0]))return null
  for(let i=0;i<fn.params.length;i++){
    const param=fn.params[i],id=t.isAssignmentPattern(param)?param.left:param
    if(!t.isIdentifier(id)||!t.isIdentifier(expr.left.arguments[i+1],{name:id.name}))return null
  }
  return t.classMethod('constructor',t.identifier('constructor'),fn.params.map(p=>t.cloneNode(p,true)),
    t.blockStatement([
      ...(hasHook?[t.expressionStatement(t.identifier('CONSTRUCTOR_HACK'))]:[]),
      t.expressionStatement(t.callExpression(t.super(),
        fn.params.map(p=>t.identifier(t.isAssignmentPattern(p)?p.left.name:p.name))))
    ]))
}

function constructorWithProperties(fn, superName) {
  const statements=fn.body.body
  if(statements.length<3||!t.isVariableDeclaration(statements[0])||
    statements[0].declarations.length!==1||!t.isReturnStatement(statements.at(-1)))return null
  const decl=statements[0].declarations[0]
  if(!t.isIdentifier(decl.id))return null
  const name=decl.id.name
  const test=t.functionExpression(null,fn.params.map(p=>t.cloneNode(p,true)),
    t.blockStatement([t.returnStatement(t.cloneNode(decl.init,true))]))
  const baseConstructor=isDelegatingConstructor(test,superName)?null:constructorFromCall(test,superName)
  if(!isDelegatingConstructor(test,superName)&&!baseConstructor)return null
  if(!exactName(statements.at(-1).argument,name))return null
  const fields=[]
  for(const entry of statements.slice(1,-1)) {
    if(!t.isExpressionStatement(entry)||!t.isAssignmentExpression(entry.expression,{operator:'='})||
      !t.isMemberExpression(entry.expression.left)||entry.expression.left.computed||
      !exactName(entry.expression.left.object,name)||!t.isIdentifier(entry.expression.left.property))return null
    fields.push(t.expressionStatement(t.assignmentExpression('=',
      t.memberExpression(t.thisExpression(),t.cloneNode(entry.expression.left.property)),
      t.cloneNode(entry.expression.right,true))))
  }
  const params=baseConstructor?baseConstructor.params:[t.restElement(t.identifier('args'))]
  const parent=baseConstructor?baseConstructor.body.body[0]:
    t.expressionStatement(t.callExpression(t.super(),[t.spreadElement(t.identifier('args'))]))
  return t.classMethod('constructor',t.identifier('constructor'),params,t.blockStatement([parent,...fields]))
}

function accessorSuperCall(node, baseExpression, property, method, params, allowedAncestors) {
  if (!t.isCallExpression(node) || !member(node.callee, 'call') ||
    !member(node.callee.object, method) || node.arguments.length !== (method === 'set' ? 2 : 1) ||
    !t.isThisExpression(node.arguments[0])) return false
  const getter = node.callee.object.object
  const ancestor=getter.arguments[0]?.object
  const ancestryValid=t.isNodesEquivalent(ancestor,baseExpression) ||
    t.isMemberExpression(ancestor) && !ancestor.computed && t.isIdentifier(ancestor.property) &&
    allowedAncestors?.has(ancestor.property.name)
  if (!objectCall(getter, 'getOwnPropertyDescriptor') || getter.arguments.length !== 2 ||
    !member(getter.arguments[0], 'prototype') || !ancestryValid ||
    !t.isStringLiteral(getter.arguments[1], {value: property})) return false
  if (method === 'set' && (!t.isIdentifier(params[0]) || !exactName(node.arguments[1], params[0].name))) return false
  return true
}

function rewriteSuperAccessor(method, property, baseExpression, className, readonlyBaseAccessors, trustedAncestors) {
  const file = t.file(t.program([t.classDeclaration(t.identifier('Temporary'), null, t.classBody([method]))]))
  let rewritten = 0
  traverse(file, {
    CallExpression(path) {
      if (!accessorSuperCall(path.node, baseExpression, property, method.kind === 'set' ? 'set' : 'get', method.params, trustedAncestors?.get((baseExpression?.property?.name??'')+':'+property))) return
      rewritten++
      const parentClass = t.isMemberExpression(baseExpression) && t.isIdentifier(baseExpression.property) ? baseExpression.property.name : null
      if (method.kind === 'set' && readonlyBaseAccessors?.has(parentClass+':'+property)) {
        if(!path.parentPath.isExpressionStatement())throw Error('Non-statement inherited readonly setter')
        const inherited=t.callExpression(t.memberExpression(t.identifier('Object'),t.identifier('getPrototypeOf')),
          [t.memberExpression(t.identifier(className),t.identifier('prototype'))])
        const attempt=t.callExpression(t.memberExpression(t.identifier('Reflect'),t.identifier('set')),
          [inherited,t.stringLiteral(property),t.cloneNode(method.params[0]),t.thisExpression()])
        path.parentPath.replaceWith(t.ifStatement(t.unaryExpression('!',attempt),
          t.blockStatement([t.throwStatement(t.newExpression(t.identifier('TypeError'),[t.stringLiteral('Inherited accessor is not writable')]))])))
      }else{
        const expr = t.memberExpression(t.super(), t.identifier(property))
        path.replaceWith(method.kind === 'set' ? t.assignmentExpression('=', expr, t.cloneNode(method.params[0])) : expr)
      }
    }
  })
  if (method.kind === 'set' && rewritten !== 1) throw Error('Unsupported inherited accessor setter: ' + property)
  return file.program.body[0].body.body[0]
}

function rewriteSuperMethods(cls, superName) {
  const ast = t.file(t.program([cls]))
  traverse(ast, {
    CallExpression(path) {
      const callee = path.node.callee
      if (!member(callee, 'call') || !t.isMemberExpression(callee.object) || callee.object.computed ||
        !isClassProto(callee.object.object,superName) || !t.isIdentifier(callee.object.property) ||
        !t.isThisExpression(path.node.arguments[0])) return
      path.replaceWith(t.callExpression(t.memberExpression(t.super(),t.cloneNode(callee.object.property)),path.node.arguments.slice(1).map(x=>t.cloneNode(x,true))))
    }
  })
  return ast.program.body[0]
}

function safeModuleBindings(ast, cls, options={}) {
  const byName = new Map()
  const imports = new Map()
  for(const stmt of ast.program.body) {
    if(t.isFunctionDeclaration(stmt)&&stmt.id)byName.set(stmt.id.name,{kind:'function',node:stmt})
    if(!t.isVariableDeclaration(stmt))continue
    for(const decl of stmt.declarations) {
      if(!t.isIdentifier(decl.id))continue
      byName.set(decl.id.name,{kind:'variable',node:decl})
      if(t.isCallExpression(decl.init)&&t.isIdentifier(decl.init.callee,{name:'require'})&&
        decl.init.arguments.length===1&&t.isStringLiteral(decl.init.arguments[0])){
        imports.set(decl.id.name,decl.init.arguments[0].value)
      }
    }
  }
  const pending=[cls],seen=new Set(),included=new Map()
  while(pending.length){
    const element=pending.pop()
    const container=t.file(t.program([t.cloneNode(element,true)]))
    const referenced=new Set()
    traverse(container,{Identifier(path) {
      if(path.isReferencedIdentifier()&&/^__s0local[0-9]+$/.test(path.node.name)&&
        !path.scope.hasBinding(path.node.name))referenced.add(path.node.name)
    }})
    for(const name of referenced){
      if(seen.has(name))continue
      seen.add(name)
      const source=byName.get(name)
      if(!source)continue
      if(source.kind==='function'){
        const entry=t.cloneNode(source.node,true)
        included.set(name,entry)
        pending.push(entry)
        continue
      }
      const init=source.node.init
      if(t.isCallExpression(init)&&init.arguments.length===0&&t.isFunctionExpression(init.callee)&&
        init.callee.params.length===0&&init.callee.body.body.length===1&&
        t.isReturnStatement(init.callee.body.body[0])&&
        t.isFunctionExpression(init.callee.body.body[0].argument)){
        const helper=init.callee.body.body[0].argument
        if(helper.id&&t.isIdentifier(helper.id)&&helper.params.length===0&&helper.body.body.length===0){
          included.set(name,t.variableDeclaration('const',[t.variableDeclarator(t.identifier(name),t.identifier(helper.id.name))]))
          included.set(name+':class',t.classDeclaration(t.cloneNode(helper.id),null,t.classBody([])))
          continue
        }
      }
      const createjsAlias=t.isMemberExpression(init)&&!init.computed&&
        t.isIdentifier(init.object,{name:'createjs'})&&t.isIdentifier(init.property)&&
        ['Point','Event','Rectangle','MouseEvent'].includes(init.property.name)
      const verifiedLogger=t.isCallExpression(init)&&
        t.isMemberExpression(init.callee)&&!init.callee.computed&&
        t.isIdentifier(init.callee.object)&&
        t.isIdentifier(init.callee.property,{name:'getLogger'})&&
        Boolean(options.resolveMember?.(imports.get(init.callee.object.name),'getLogger'))&&
        init.arguments.length===1&&t.isStringLiteral(init.arguments[0])
      if(!createjsAlias&&!verifiedLogger)continue
      const entry=t.variableDeclaration('const',[t.variableDeclarator(t.identifier(name),t.cloneNode(init,true))])
      included.set(name,entry)
    }
  }
  const entries=[...included.values()]
  const classes=entries.filter(t.isClassDeclaration)
  const rest=entries.filter(x=>!t.isClassDeclaration(x))
  return [...classes,...rest]
}

function resolveImports(sourceAst, cls, options, retained=[]) {
  const assignments = new Map()
  for (const statement of sourceAst.program.body) {
    if (!t.isVariableDeclaration(statement)) continue
    for (const declaration of statement.declarations) {
      if (!t.isIdentifier(declaration.id) || !t.isCallExpression(declaration.init) ||
        !exactName(declaration.init.callee, 'require') || declaration.init.arguments.length !== 1 ||
        !t.isStringLiteral(declaration.init.arguments[0])) continue
      assignments.set(declaration.id.name, declaration.init.arguments[0].value)
    }
  }
  const modules = new Map()
  const bodyAst = t.file(t.program([...retained,cls]))
  const existing = new Set()
  traverse(bodyAst, {
    MemberExpression(path) {
      const object = path.node.object
      if (path.node.computed || !t.isIdentifier(path.node.property)) return
      let spec=null
      if(t.isIdentifier(object)&&assignments.has(object.name)) spec=assignments.get(object.name)
      else if(t.isCallExpression(object)&&t.isIdentifier(object.callee,{name:'require'})&&
        object.arguments.length===1&&t.isStringLiteral(object.arguments[0]))spec=object.arguments[0].value
      if(!spec)return
      const stable = /^gge-module:export_(.+)$/.exec(spec)
      const mapped = options.resolveMember?.(spec,path.node.property.name)
      if (mapped) {
        const key = mapped.imported
        const previous = modules.get(key)
        if (previous && (previous.specifier !== mapped.specifier || previous.bundle !== mapped.bundle)) {
          throw Error('Conflicting named import: '+key)
        }
        modules.set(key,mapped)
        path.replaceWith(t.identifier(key))
        existing.add(object.name)
      } else if (stable && path.node.property.name === stable[1]) {
        const key = stable[1]
        const referenced = options.specifiers?.[spec]
        if (!referenced) throw Error('Dependency missing from manifest: ' + spec)
        modules.set(key, {specifier:spec, source:referenced, imported:key,bundle:'Game.bundle'})
        path.replaceWith(t.identifier(key))
        existing.add(object.name)
      } else if (!options.resolveMember && options.errorExportAvailable && spec.startsWith('gge-module:exact_') && path.node.property.name === 'ERROR') {
        modules.set('ERROR', {specifier:'ggs.dll:export:ERROR', source:'ggs.dll/modules/exports/ERROR.js', imported:'ERROR',bundle:'ggs.dll',confidence:'unique-member-and-export'})
        path.replaceWith(t.identifier('ERROR'))
        existing.add(object.name)
      }
    }
  })
  const unknown = new Set()
  traverse(bodyAst, {Identifier(path) {
    if (assignments.has(path.node.name) && path.isReferencedIdentifier()) unknown.add(path.node.name)
  }})
  if (unknown.size) throw Error('Unresolved generated dependencies: ' + [...unknown].join(', '))
  const imports = [...modules.entries()].sort(([a],[b])=>a.localeCompare(b)).map(([name,data]) => {
    const specifier = data.bundle === 'ggs.dll' ? '../../../ggs.dll/reconstructed/exports/'+(options.dllImportFileName?.(name)??name) : './' + name
    return t.importDeclaration([t.importSpecifier(t.identifier(name), t.identifier(name))], t.stringLiteral(specifier))
  })
  return {imports, retained:bodyAst.program.body.slice(0,-1),node:bodyAst.program.body.at(-1),modules:[...modules.values()]}
}

function recoverInterfaceRegistrations(ast, className, wrapperId, options) {
  if(!options.preserveRuntimeInterfaces)return {imports:[],statements:[],dependencies:[]}
  const imports=new Map()
  for(const stmt of ast.program.body){
    if(!t.isVariableDeclaration(stmt))continue
    for(const decl of stmt.declarations){
      if(!t.isIdentifier(decl.id)||!t.isCallExpression(decl.init)||
        !t.isIdentifier(decl.init.callee,{name:'require'})||
        decl.init.arguments.length!==1||!t.isStringLiteral(decl.init.arguments[0]))continue
      imports.set(decl.id.name,decl.init.arguments[0].value)
    }
  }
  const registrations=[]
  const dependencies=[]
  for(const stmt of ast.program.body){
    if(!t.isExpressionStatement(stmt)||!t.isCallExpression(stmt.expression))continue
    const call=stmt.expression
    if(!member(call.callee,'classImplementsInterfaces')||!t.isIdentifier(call.callee.object)||
      call.arguments.length<2||!t.isIdentifier(call.arguments[0],{name:wrapperId}))continue
    const spec=imports.get(call.callee.object.name)
    const mapped=options.resolveMember?.(spec,'classImplementsInterfaces')
    if(!mapped||mapped.bundle!=='ggs.dll')throw Error('Unverified runtime interface registration: '+className)
    dependencies.push(mapped)
    registrations.push(t.expressionStatement(t.callExpression(t.identifier('classImplementsInterfaces'),
      [t.identifier(className),...call.arguments.slice(1).map(arg=>t.cloneNode(arg,true))])))
  }
  if(!registrations.length)return {imports:[],statements:[],dependencies:[]}
  const imp=t.importDeclaration([
    t.importSpecifier(t.identifier('classImplementsInterfaces'),t.identifier('classImplementsInterfaces'))
  ],t.stringLiteral('../../../ggs.dll/reconstructed/exports/'+
    (options.dllImportFileName?.('classImplementsInterfaces')??'classImplementsInterfaces')))
  return {imports:[imp],statements:registrations,dependencies}
}

function preserveDynamicSourceTypes(cls) {
  const file=t.file(t.program([cls]))
  traverse(file,{
    AssignmentExpression(path) {
      const n=path.node
      if(['&&=','||=','??='].includes(n.operator)&&t.isMemberExpression(n.left)){
      const receiver=t.identifier('sourceObject'),key=t.identifier('sourceKey'),previous=t.identifier('previousValue')
      const memberAccess=t.memberExpression(t.cloneNode(receiver),t.cloneNode(key),true)
      const shouldAssign=n.operator==='&&='?t.cloneNode(previous):
        n.operator==='||='?t.unaryExpression('!',t.cloneNode(previous)):
          t.binaryExpression('==',t.cloneNode(previous),t.nullLiteral())
      const next=t.assignmentExpression('=',t.cloneNode(memberAccess),t.cloneNode(n.right,true))
      const body=t.blockStatement([
        t.variableDeclaration('const',[t.variableDeclarator(t.cloneNode(receiver),t.cloneNode(n.left.object,true))]),
        t.variableDeclaration('const',[t.variableDeclarator(t.cloneNode(key),
          n.left.computed?t.cloneNode(n.left.property,true):t.stringLiteral(n.left.property.name))]),
        t.variableDeclaration('const',[t.variableDeclarator(t.cloneNode(previous),t.cloneNode(memberAccess))]),
        t.returnStatement(t.conditionalExpression(shouldAssign,next,t.cloneNode(previous)))
      ])
      path.replaceWith(t.callExpression(t.arrowFunctionExpression([],body),[]))
      }else if(t.isObjectExpression(n.right)&&n.right.properties.length===0){
        n.right=t.tsAsExpression(n.right,t.tsAnyKeyword())
      }
    },
    VariableDeclarator(path) {
      const init=path.node.init
      if(t.isObjectExpression(init)&&init.properties.length===0){
        path.node.init=t.tsAsExpression(init,t.tsAnyKeyword())
      }else if(t.isMemberExpression(init)&&init.computed&&t.isIdentifier(init.object)){
        const source=path.scope.getBinding(init.object.name)?.path.node.init
        if(t.isCallExpression(source)&&member(source.callee,'from')&&t.isIdentifier(source.callee.object,{name:'Array'})){
          path.node.init=t.tsAsExpression(init,t.tsAnyKeyword())
        }
      }
    },
    ClassMethod(path) {
      for(const p of path.node.params) {
        if(!t.isIdentifier(p)||p.optional)continue
        const defaultCheck=path.node.body.body.some(stmt=>{
          if(!t.isIfStatement(stmt)||!t.isBinaryExpression(stmt.test))return false
          const c=stmt.test
          const compare=(t.isIdentifier(c.left,{name:p.name})&&t.isIdentifier(c.right,{name:'undefined'}))||
            (t.isIdentifier(c.right,{name:p.name})&&t.isIdentifier(c.left,{name:'undefined'}))
          if(!compare||!['===','=='].includes(c.operator))return false
          const body=t.isBlockStatement(stmt.consequent)?stmt.consequent.body:[stmt.consequent]
          return body.some(n=>t.isExpressionStatement(n)&&t.isAssignmentExpression(n.expression,{operator:'='})&&t.isIdentifier(n.expression.left,{name:p.name}))
        })
        if(defaultCheck){p.optional=true;p.typeAnnotation=t.tsTypeAnnotation(t.tsAnyKeyword())}
      }
    }
  })
  return file.program.body[0]
}

function replaceParameterAliases(cls) {
  const file = t.file(t.program([cls]))
  const renamed = []
  traverse(file, {
    ClassMethod(path) {
      if (path.node.kind === 'set' && path.node.params.length === 1 && t.isIdentifier(path.node.params[0])) {
        path.scope.rename(path.node.params[0].name, 'value')
        renamed.push('value')
      }
      if (path.node.key.name !== 'executeCommand' || path.node.params.length !== 2) return
      const [first,second] = path.node.params
      if (!t.isIdentifier(first) || !t.isIdentifier(second)) return
      const hasSwitch = path.node.body.body.some(n => t.isSwitchStatement(n) && exactName(n.discriminant,first.name))
      const containsPayload = path.node.body.body.some(n => t.isSwitchStatement(n) && n.cases.some(k =>
        k.consequent.some(s => t.isVariableDeclaration(s) && s.declarations.some(d =>
          t.isCallExpression(d.init) && member(d.init.callee,'parse') &&
          exactName(d.init.callee.object,'JSON') && t.isMemberExpression(d.init.arguments[0]) &&
          exactName(d.init.arguments[0].object,second.name) && t.isNumericLiteral(d.init.arguments[0].property,{value:1})))))
      const delegatesToBase = path.node.body.body.some(n => t.isReturnStatement(n) && t.isCallExpression(n.argument) &&
        member(n.argument.callee,'executeCommand') && t.isSuper(n.argument.callee.object) &&
        n.argument.arguments.length === 2 && exactName(n.argument.arguments[0],first.name) && exactName(n.argument.arguments[1],second.name))
      if (!(hasSwitch && containsPayload) && !delegatesToBase) return
      const s1=path.scope.getBinding(first.name),s2=path.scope.getBinding(second.name)
      if (!s1||!s2) return
      path.scope.rename(s1.identifier.name,'statusCode')
      path.scope.rename(s2.identifier.name,'responseFields')
      renamed.push('statusCode','responseFields')
      path.traverse({VariableDeclarator(p) {
        if (!t.isIdentifier(p.node.id) || !t.isCallExpression(p.node.init) ||
          !member(p.node.init.callee,'parse') || !exactName(p.node.init.callee.object,'JSON'))return
        if (!t.isMemberExpression(p.node.init.arguments[0]) || !exactName(p.node.init.arguments[0].object,'responseFields'))return
        const binding=p.scope.getBinding(p.node.id.name)
        if (binding){p.scope.rename(binding.identifier.name,'parsedResponse');renamed.push('parsedResponse')}
      }})
    }
  })
  return {node:file.program.body[0],renamed}
}

export function reconstructEs5Class(source, options={}) {
  const ast = parser.parse(source, {sourceType:'unambiguous',allowReturnOutsideFunction:true})
  const wrappers=[]
  for (const statement of ast.program.body) {
    if (!t.isVariableDeclaration(statement))continue
    for (const dec of statement.declarations) {
      if (!t.isIdentifier(dec.id) || !t.isCallExpression(dec.init) ||
        !t.isFunctionExpression(dec.init.callee) ||
        !((dec.init.arguments.length===1&&dec.init.callee.params.length===1&&t.isIdentifier(dec.init.callee.params[0]))||
          (dec.init.arguments.length===0&&dec.init.callee.params.length===0)))continue
      const body=dec.init.callee.body.body
      const constructor=body.find(t.isFunctionDeclaration)
      if (!constructor)continue
      const className=constructor.id?.name,superName=dec.init.callee.params[0]?.name
      const standalone=!superName&&dec.init.arguments.length===0&&constructor.params.length===0&&constructor.body.body.length===0
      const delegating=superName&&isDelegatingConstructor(constructor,superName)
      const generatedConstructor = delegating||standalone ? null :
        constructorFromCall(constructor,superName) ?? constructorWithProperties(constructor,superName)
      if (!delegating&&!standalone&&!generatedConstructor)continue
      const extending=body.some(n=>t.isExpressionStatement(n) && t.isCallExpression(n.expression) &&
        member(n.expression.callee,'__extends') && exactName(n.expression.arguments[0],className) &&
        exactName(n.expression.arguments[1],superName))
      if (Boolean(superName)!==Boolean(extending))continue
      if (!body.some(n=>t.isReturnStatement(n)&&exactName(n.argument,className)))continue
      const needsConstructor=Boolean(!generatedConstructor&&delegating&&options.passThroughConstructors?.has(className))
      const passThroughConstructor=needsConstructor?t.classMethod('constructor',t.identifier('constructor'),
        [t.restElement(t.identifier('args'))],
        t.blockStatement([t.expressionStatement(t.callExpression(t.super(),[t.spreadElement(t.identifier('args'))]))])):null
      const members=generatedConstructor ? [generatedConstructor] : passThroughConstructor?[passThroughConstructor]:[]
      let unsupported=false
      for(const element of body) {
        if(t.isFunctionDeclaration(element)||t.isReturnStatement(element))continue
        if(!t.isExpressionStatement(element)){unsupported=true;break}
        const expr=element.expression
        if(t.isCallExpression(expr) && member(expr.callee,'__extends'))continue
        if(t.isCallExpression(expr) && objectCall(expr,'defineProperty')) {
          const accessors=getterDescriptor(element,className)
          if(!accessors){unsupported=true;break}
          members.push(...accessors.map(m=>rewriteSuperAccessor(m,m.key.name,dec.init.arguments[0],className,options.readonlyBaseAccessors,options.trustedAncestors)))
          continue
        }
        if(t.isAssignmentExpression(expr,{operator:'='}) && t.isMemberExpression(expr.left) &&
          t.isIdentifier(expr.left.property) && t.isFunctionExpression(expr.right)) {
          const instance=isClassProto(expr.left.object,className)
          const staticMethod=t.isIdentifier(expr.left.object,{name:className})
          if(instance||staticMethod){
            const method=t.classMethod('method',t.cloneNode(expr.left.property),expr.right.params,t.cloneNode(expr.right.body,true))
            method.static=staticMethod
            members.push(method)
            continue
          }
        }
        if(t.isAssignmentExpression(expr,{operator:'='}) &&
          t.isMemberExpression(expr.left) && !expr.left.computed &&
          t.isIdentifier(expr.left.object,{name:className}) &&
          t.isIdentifier(expr.left.property) &&
          !t.isFunctionExpression(expr.right)) {
          const field=t.classProperty(t.cloneNode(expr.left.property),t.cloneNode(expr.right,true))
          field.static=true
          members.push(field)
          continue
        }
        unsupported=true;break
      }
      if (unsupported || !members.length)continue
      const base=dec.init.arguments[0]
      if (!standalone&&(!t.isMemberExpression(base) || !t.isIdentifier(base.property)))continue
      const staticInit=members.find(m=>t.isClassMethod(m)&&m.static&&t.isIdentifier(m.key,{name:'__initialize_static_members'}))
      const staticNames=new Set()
      if(staticInit){
        const f=t.file(t.program([t.classDeclaration(t.identifier('Temporary'),null,t.classBody([t.cloneNode(staticInit,true)]))]))
        traverse(f,{AssignmentExpression(path){
          const left=path.node.left
          if(!t.isMemberExpression(left)||left.computed||!t.isIdentifier(left.object,{name:className})||
            !t.isIdentifier(left.property))return
          staticNames.add(left.property.name)
        }})
      }
      for(const name of [...staticNames].sort()){
        if(members.some(m=>m.static&&t.isIdentifier(m.key,{name})))continue
        const field=t.classProperty(t.identifier(name),null,t.tsTypeAnnotation(t.tsAnyKeyword()))
        field.static=true
        members.unshift(field)
      }
      const staticInvocation=ast.program.body.some(stmt=>t.isExpressionStatement(stmt)&&
        t.isCallExpression(stmt.expression)&&member(stmt.expression.callee,'__initialize_static_members')&&
        t.isIdentifier(stmt.expression.callee.object,{name:dec.id.name}))
      if(staticInvocation&&!staticInit)throw Error('Unresolved static initializer: '+className)
      const cls=t.classDeclaration(t.identifier(className),standalone?null:t.cloneNode(base,true),t.classBody(members))
      const resolved=resolveImports(ast,rewriteSuperMethods(cls,superName),options,safeModuleBindings(ast,cls,options))
      const aliases=replaceParameterAliases(resolved.node)
      const improved=renameVerifiedParameters(aliases.node)
      aliases.node=preserveDynamicSourceTypes(improved.node)
      const interfaces=recoverInterfaceRegistrations(ast,className,dec.id.name,options)
      const postlude=staticInvocation?[t.expressionStatement(t.callExpression(
        t.memberExpression(t.identifier(className),t.identifier('__initialize_static_members')),[]))]:[]
      const program=t.program([...resolved.imports,...interfaces.imports,...resolved.retained,
        t.exportNamedDeclaration(aliases.node),...interfaces.statements,...postlude])
      const generated=t.file(program)
      const unbound=new Set()
      traverse(generated,{Identifier(path) {
        if (!path.isReferencedIdentifier()) return
        if (!/^(__s[0-9]|__dep_)/.test(path.node.name)) return
        if (!path.scope.hasBinding(path.node.name)) unbound.add(path.node.name)
      }})
      if (unbound.size) throw Error('Captured minifier bindings are not available outside the original module: '+[...unbound].sort().join(', '))
      const code=generate(generated,{jsescOption:{minimal:true}}).code+'\n'
      if (code.includes('Object.getOwnPropertyDescriptor') || code.includes('Object.defineProperty') || code.includes('.prototype.')) throw Error('Unreversed descriptor remains: ' + className)
      parser.parse(code,{sourceType:'module',plugins:['typescript']})
      return {className,code,metadata:{sourceHash:sha(source),generatedHash:sha(code),constructor:'implicit-super',accessors:members.filter(m=>m.kind==='get'||m.kind==='set').map(m=>m.kind+':'+m.key.name),methods:members.filter(m=>m.kind==='method').map(m=>m.key.name),dependencies:[...resolved.modules,...interfaces.dependencies],renamed:aliases.renamed,...(improved.renamed.length?{verifiedParameterRenames:improved.renamed}:{}),runtimeInterfaceCallsPreserved:interfaces.statements.length,removedRuntimeInterfaceCalls:ast.program.body.filter(n => t.isExpressionStatement(n) && t.isCallExpression(n.expression) && member(n.expression.callee,'classImplementsInterfaces')).length,staticInitializationPreserved:staticInvocation,fullRuntimeEquivalent:false}}
    }
  }
  return null
}

if (process.argv[1]?.endsWith('/reverse-ts-es5.mjs')) {
  const [sourcePath,manifestPath,outputPath]=process.argv.slice(2)
  if(!sourcePath||!manifestPath||!outputPath)throw Error('usage: reverse-ts-es5.mjs SOURCE MANIFEST OUTPUT')
  const [source,manifest]=await Promise.all([readFile(resolve(sourcePath),'utf8'),readFile(resolve(manifestPath),'utf8').then(JSON.parse)])
  const dllPath = join(dirname(dirname(resolve(manifestPath))),'ggs.dll/manifest.json')
  const dllManifest = JSON.parse(await readFile(dllPath,'utf8'))
  const errorExportAvailable = dllManifest.symbolViews?.filter(v => v.name === 'ERROR').length === 1
  const result=reconstructEs5Class(source,{specifiers:manifest.specifiers,errorExportAvailable})
  if(!result)throw Error('Unsupported ES5 class shape; canonical original preserved')
  await mkdir(dirname(resolve(outputPath)),{recursive:true})
  await writeFile(resolve(outputPath),result.code)
  await writeFile(resolve(outputPath)+'.evidence.json',JSON.stringify(result.metadata,null,2)+'\n')
  console.log(JSON.stringify({className:result.className,metadata:result.metadata}))
}
