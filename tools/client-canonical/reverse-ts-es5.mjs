import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname, resolve } from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import generateModule from '@babel/generator'
import * as t from '@babel/types'
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
  if (!objectCall(call, 'defineProperty') || call.arguments.length !== 3 || !isClassProto(call.arguments[0], className) ||
    !t.isStringLiteral(call.arguments[1]) || !t.isObjectExpression(call.arguments[2])) return null
  const descriptor = Object.fromEntries(call.arguments[2].properties.filter(t.isObjectProperty).map(p => [nodeName(p.key), p.value]))
  if (!t.isBooleanLiteral(descriptor.enumerable, {value:true}) || !t.isBooleanLiteral(descriptor.configurable, {value:true})) return null
  const methods = []
  for (const kind of ['get','set']) {
    if (!descriptor[kind]) continue
    if (!t.isFunctionExpression(descriptor[kind])) return null
    methods.push(t.classMethod(kind, t.identifier(call.arguments[1].value), descriptor[kind].params, t.cloneNode(descriptor[kind].body,true)))
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

function accessorSuperCall(node, baseExpression, property, method, params) {
  if (!t.isCallExpression(node) || !member(node.callee, 'call') ||
    !member(node.callee.object, method) || node.arguments.length !== (method === 'set' ? 2 : 1) ||
    !t.isThisExpression(node.arguments[0])) return false
  const getter = node.callee.object.object
  if (!objectCall(getter, 'getOwnPropertyDescriptor') || getter.arguments.length !== 2 ||
    !member(getter.arguments[0], 'prototype') || !t.isNodesEquivalent(getter.arguments[0].object, baseExpression) ||
    !t.isStringLiteral(getter.arguments[1], {value: property})) return false
  if (method === 'set' && (!t.isIdentifier(params[0]) || !exactName(node.arguments[1], params[0].name))) return false
  return true
}

function rewriteSuperAccessor(method, property, baseExpression) {
  const file = t.file(t.program([t.classDeclaration(t.identifier('Temporary'), null, t.classBody([method]))]))
  let rewritten = 0
  traverse(file, {
    CallExpression(path) {
      if (!accessorSuperCall(path.node, baseExpression, property, method.kind === 'set' ? 'set' : 'get', method.params)) return
      rewritten++
      const expr = t.memberExpression(t.super(), t.identifier(property))
      path.replaceWith(method.kind === 'set' ? t.assignmentExpression('=', expr, t.cloneNode(method.params[0])) : expr)
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

function resolveImports(sourceAst, cls, options) {
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
  const bodyAst = t.file(t.program([cls]))
  const existing = new Set()
  traverse(bodyAst, {
    MemberExpression(path) {
      const object = path.node.object
      if (!t.isIdentifier(object) || !assignments.has(object.name) || path.node.computed || !t.isIdentifier(path.node.property)) return
      const spec = assignments.get(object.name)
      const stable = /^gge-module:export_(.+)$/.exec(spec)
      if (stable && path.node.property.name === stable[1]) {
        const key = stable[1]
        const referenced = options.specifiers?.[spec]
        if (!referenced) throw Error('Dependency missing from manifest: ' + spec)
        modules.set(key, {specifier:spec, source:referenced, imported:key})
        path.replaceWith(t.identifier(key))
        existing.add(object.name)
      } else if (options.errorExportAvailable && spec.startsWith('gge-module:exact_') && path.node.property.name === 'ERROR') {
        modules.set('ERROR', {specifier:'ggs.dll:export:ERROR', source:'ggs.dll/modules/exports/ERROR.js', imported:'ERROR',confidence:'unique-member-and-export'})
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
    const specifier = data.specifier.startsWith('ggs.dll:') ? '../../../ggs.dll/reconstructed/exports/ERROR' : './' + name
    return t.importDeclaration([t.importSpecifier(t.identifier(name), t.identifier(name))], t.stringLiteral(specifier))
  })
  return {imports, node:bodyAst.program.body[0], modules:[...modules.values()]}
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
        !t.isFunctionExpression(dec.init.callee) || dec.init.arguments.length!==1 ||
        !t.isIdentifier(dec.init.callee.params[0]))continue
      const body=dec.init.callee.body.body
      const constructor=body.find(t.isFunctionDeclaration)
      if (!constructor)continue
      const className=constructor.id?.name,superName=dec.init.callee.params[0].name
      if (!isDelegatingConstructor(constructor,superName))continue
      const extending=body.some(n=>t.isExpressionStatement(n) && t.isCallExpression(n.expression) &&
        member(n.expression.callee,'__extends') && exactName(n.expression.arguments[0],className) &&
        exactName(n.expression.arguments[1],superName))
      if (!extending)continue
      if (!body.some(n=>t.isReturnStatement(n)&&exactName(n.argument,className)))continue
      const members=[];let unsupported=false
      for(const element of body) {
        if(t.isFunctionDeclaration(element)||t.isReturnStatement(element))continue
        if(!t.isExpressionStatement(element)){unsupported=true;break}
        const expr=element.expression
        if(t.isCallExpression(expr) && member(expr.callee,'__extends'))continue
        if(t.isCallExpression(expr) && objectCall(expr,'defineProperty')) {
          const accessors=getterDescriptor(element,className)
          if(!accessors){unsupported=true;break}
          members.push(...accessors.map(m=>rewriteSuperAccessor(m,m.key.name,dec.init.arguments[0])))
          continue
        }
        if(t.isAssignmentExpression(expr,{operator:'='}) && t.isMemberExpression(expr.left) &&
          isClassProto(expr.left.object,className) && t.isIdentifier(expr.left.property) &&
          t.isFunctionExpression(expr.right)) {
          members.push(t.classMethod('method',t.cloneNode(expr.left.property),expr.right.params,t.cloneNode(expr.right.body,true)))
          continue
        }
        unsupported=true;break
      }
      if (unsupported || !members.length)continue
      const base=dec.init.arguments[0]
      if (!t.isMemberExpression(base) || !t.isIdentifier(base.object)||!t.isIdentifier(base.property))continue
      const cls=t.classDeclaration(t.identifier(className),t.cloneNode(base,true),t.classBody(members))
      const resolved=resolveImports(ast,rewriteSuperMethods(cls,superName),options)
      const aliases=replaceParameterAliases(resolved.node)
      const program=t.program([...resolved.imports,t.exportNamedDeclaration(aliases.node)])
      const code=generate(t.file(program),{jsescOption:{minimal:true}}).code+'\n'
      if (code.includes('Object.getOwnPropertyDescriptor') || code.includes('Object.defineProperty') || code.includes('.prototype.')) throw Error('Unreversed descriptor remains: ' + className)
      parser.parse(code,{sourceType:'module',plugins:['typescript']})
      return {className,code,metadata:{sourceHash:sha(source),generatedHash:sha(code),constructor:'implicit-super',accessors:members.filter(m=>m.kind==='get'||m.kind==='set').map(m=>m.kind+':'+m.key.name),methods:members.filter(m=>m.kind==='method').map(m=>m.key.name),dependencies:resolved.modules,renamed:aliases.renamed,removedRuntimeInterfaceCalls:ast.program.body.filter(n => t.isExpressionStatement(n) && t.isCallExpression(n.expression) && member(n.expression.callee,'classImplementsInterfaces')).length,fullRuntimeEquivalent:false}}
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
