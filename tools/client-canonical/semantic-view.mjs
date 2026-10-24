import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import generatorModule from '@babel/generator'

const traverse = traverseModule.default ?? traverseModule
const generate = generatorModule.default ?? generatorModule
const hash = value => createHash('sha256').update(value).digest('hex')
const identifier = name => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)

function memberName(node) {
  if (!node) return null
  if (node.type === 'Identifier') return node.name
  if (node.type !== 'MemberExpression') return null
  if (node.computed || node.property.type !== 'Identifier') return null
  const parent = memberName(node.object)
  return parent ? parent + '.' + node.property.name : null
}

function isImportedBinding(binding) {
  const path = binding?.path
  if (!path?.isVariableDeclarator()) return false
  const initializer = path.node.init
  return initializer?.type === 'CallExpression' &&
    initializer.callee.type === 'Identifier' &&
    initializer.callee.name === 'require'
}

function resolveDependency(ast, member) {
  const found = new Map()
  traverse(ast, {
    MemberExpression(path) {
      const prop = path.node.property
      if (path.node.computed || prop.type !== 'Identifier' || prop.name !== member) return
      const object = path.node.object
      if (object.type !== 'Identifier') return
      const binding = path.scope.getBinding(object.name)
      if (!isImportedBinding(binding)) return
      found.set(binding.identifier, binding)
    }
  })
  if (found.size !== 1) throw Error('Dependency role ' + member + ' has ' + found.size + ' candidate bindings')
  return [...found.values()][0]
}

function selectMethod(ast, signature) {
  const found = []
  traverse(ast, {
    AssignmentExpression(path) {
      if (memberName(path.node.left) !== signature) return
      const right = path.get('right')
      if (!right.isFunctionExpression() && !right.isArrowFunctionExpression()) return
      found.push(right)
    }
  })
  if (found.length !== 1) throw Error('Method ' + signature + ' has ' + found.length + ' candidates')
  return found[0]
}

function renameBinding(binding, name) {
  if (!binding || !identifier(name)) throw Error('Unresolved or invalid semantic name ' + name)
  if (binding.identifier.name === name) return
  if (binding.scope.hasBinding(name)) throw Error('Semantic name collision: ' + name)
  binding.scope.rename(binding.identifier.name, name)
}

function renameLocals(method, rules) {
  for (const rule of rules) {
    if (rule.pattern !== 'JSON.parse(responseFields[1])') throw Error('Unsupported semantic-local rule ' + rule.pattern)
    const candidates = []
    method.traverse({
      VariableDeclarator(path) {
        const n = path.node
        const e = n.init
        if (n.id.type !== 'Identifier' || e?.type !== 'CallExpression' || memberName(e.callee) !== 'JSON.parse') return
        const arg = e.arguments[0]
        if (arg?.type !== 'MemberExpression' || arg.object.type !== 'Identifier' ||
          arg.object.name !== 'responseFields' || arg.property.type !== 'NumericLiteral' || arg.property.value !== 1) return
        if (path.getFunctionParent()?.node !== method.node) return
        candidates.push(path.scope.getBinding(n.id.name))
      }
    })
    if (candidates.length !== 1) throw Error('Semantic local ' + rule.name + ' has ' + candidates.length + ' candidates')
    renameBinding(candidates[0], rule.name)
  }
}

export function createSemanticView(source, profile) {
  const ast = parser.parse(source, { sourceType: 'unambiguous', allowReturnOutsideFunction: true, errorRecovery: false })
  const names = new Set()
  for (const dependency of profile.dependencies ?? []) {
    if (!identifier(dependency.name) || names.has(dependency.name)) throw Error('Invalid dependency alias ' + dependency.name)
    names.add(dependency.name)
    const binding = resolveDependency(ast, dependency.member)
    renameBinding(binding, dependency.name)
  }
  for (const [signature, rule] of Object.entries(profile.methods ?? {})) {
    const method = selectMethod(ast, signature)
    const params = method.node.params
    if (params.length !== rule.parameters.length) throw Error('Parameter arity drift for ' + signature)
    for (let i = 0; i < params.length; i++) {
      if (params[i].type !== 'Identifier') throw Error('Non-identifier parameter at ' + signature + ':' + i)
      const binding = method.scope.getBinding(params[i].name)
      renameBinding(binding, rule.parameters[i].name)
    }
    renameLocals(method, rule.locals ?? [])
  }
  const output = generate(ast, { comments: true, retainLines: false, jsescOption: { minimal: true } }).code + '\n'
  parser.parse(output, { sourceType: 'unambiguous', allowReturnOutsideFunction: true, errorRecovery: false })
  return {
    code: output,
    evidence: {
      originalSha256: hash(source),
      mappingSha256: hash(JSON.stringify(profile)),
      semanticSha256: hash(output),
      module: profile.source,
      attributes: profile.attributes ?? {}
    }
  }
}

async function main() {
  const [sourcePath, mappingPath, moduleKey, outputPath] = process.argv.slice(2)
  if (!sourcePath || !mappingPath || !moduleKey || !outputPath) throw Error('Usage: semantic-view.mjs SOURCE MAPPINGS MODULE_KEY OUTPUT')
  const [source, mappings] = await Promise.all([
    readFile(resolve(sourcePath), 'utf8'),
    readFile(resolve(mappingPath), 'utf8').then(JSON.parse)
  ])
  const profile = mappings.profiles[moduleKey]
  if (!profile) throw Error('No semantic naming profile for ' + moduleKey)
  const result = createSemanticView(source, profile)
  await mkdir(dirname(resolve(outputPath)), { recursive: true })
  await writeFile(resolve(outputPath), result.code)
  await writeFile(resolve(outputPath) + '.evidence.json', JSON.stringify(result.evidence, null, 2) + '\n')
  process.stdout.write(JSON.stringify(result.evidence) + '\n')
}

if (process.argv[1]?.endsWith('/semantic-view.mjs')) main().catch(error => { console.error(error); process.exitCode = 1 })
