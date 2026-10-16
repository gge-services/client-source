import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { createHash } from 'node:crypto'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'
import generatorModule from '@babel/generator'

const traverse = traverseModule.default ?? traverseModule
const generate = generatorModule.default ?? generatorModule
const hash = value => createHash('sha256').update(value).digest('hex')
const safe = value => value.replace(/[^A-Za-z0-9_.-]/g, '_')
const genericNames = new Set(['default', '__esModule', 'prototype', 'constructor'])
const unique = values => [...new Set(values)]
function isMangledLocal(name) {
  return /^[a-zA-Z_$]{1,2}$/.test(name)
}

export function symbols(source) {
  const packageName = source.match(/^\s*module\.exports\s*=\s*\{\s*name:\s*["']([^"']+)["']/)?.[1] ?? null
  const exported = unique([
    ...[...source.matchAll(/\bexports\.([A-Za-z_$][\w$]+)\s*=/g)].map(match => match[1]),
    ...[...source.matchAll(/Object\.defineProperty\(exports,\s*["']([A-Za-z_$][\w$]+)["']/g)].map(match => match[1]),
  ]).filter(name => name.length > 2 && !genericNames.has(name))
  const classes = unique([
    ...[...source.matchAll(/\bfunction\s+([A-Z][A-Za-z0-9_$]{3,})\s*\(/g)].map(match => match[1]),
    ...[...source.matchAll(/\bclass\s+([A-Z][A-Za-z0-9_$]{3,})\b/g)].map(match => match[1]),
    ...[...source.matchAll(/\b([A-Z][A-Za-z0-9_$]{3,})\.prototype\.[A-Za-z_$]/g)].map(match => match[1]),
  ])
  return { exported, classes, packageName }
}

async function load(directory) {
  const entries = (await readdir(directory)).filter(file => /^\d+\.js$/.test(file)).sort((a, b) => Number(a.slice(0, -3)) - Number(b.slice(0, -3)))
  const modules = new Map()
  for (const entry of entries) {
    const id = entry.slice(0, -3)
    const source = await readFile(join(directory, entry), 'utf8')
    modules.set(id, { id, source, sha256: hash(source), ...symbols(source) })
  }
  return modules
}

function indexes(modules) {
  const result = new Map()
  for (const module of modules.values()) {
    if (module.packageName) add(result, `package:${module.packageName}`, module.id)
    for (const name of module.exported) add(result, `export:${name}`, module.id)
    for (const name of module.classes) add(result, `class:${name}`, module.id)
  }
  return result
}

function add(index, key, id) {
  if (!index.has(key)) index.set(key, new Set())
  index.get(key).add(id)
}

function symbolEdges(oldIndex, newIndex) {
  const edges = new Map()
  for (const [key, oldIds] of oldIndex) {
    const newIds = newIndex.get(key)
    if (oldIds.size !== 1 || newIds?.size !== 1) continue
    const oldId = [...oldIds][0]
    const newId = [...newIds][0]
    const edgeKey = `${oldId}\u0000${newId}`
    if (!edges.has(edgeKey)) edges.set(edgeKey, { oldId, newId, score: 0, anchors: [] })
    const edge = edges.get(edgeKey)
    edge.score += key.startsWith('package:') ? 12 : key.startsWith('export:') ? 10 : 5
    edge.anchors.push(key)
  }
  return edges
}

function chooseEdges(edges) {
  const matches = []
  const usedOld = new Set()
  const usedNew = new Set()
  for (const edge of [...edges.values()].sort((a, b) => b.score - a.score || a.oldId.localeCompare(b.oldId, undefined, { numeric: true }))) {
    if (usedOld.has(edge.oldId) || usedNew.has(edge.newId)) continue
    matches.push(edge)
    usedOld.add(edge.oldId)
    usedNew.add(edge.newId)
  }
  return { matches, usedOld, usedNew }
}

function unmatchedHashes(modules, used) {
  const index = new Map()
  for (const module of modules.values()) {
    if (!used.has(module.id)) add(index, module.sha256, module.id)
  }
  return index
}

function appendExactMatches(oldModules, newModules, state) {
  const { matches, usedOld, usedNew } = state
  const oldByFingerprint = unmatchedHashes(oldModules, usedOld)
  const newByFingerprint = unmatchedHashes(newModules, usedNew)
  for (const [fingerprint, oldIds] of oldByFingerprint) {
    const newIds = newByFingerprint.get(fingerprint)
    if (oldIds.size !== 1 || newIds?.size !== 1) continue
    const oldId = [...oldIds][0]
    const newId = [...newIds][0]
    matches.push({ oldId, newId, score: 3, anchors: [`exact:${fingerprint.slice(0, 16)}`] })
    usedOld.add(oldId)
    usedNew.add(newId)
  }
}

function matchModules(oldModules, newModules) {
  const edges = symbolEdges(indexes(oldModules), indexes(newModules))
  const state = chooseEdges(edges)
  appendExactMatches(oldModules, newModules, state)
  const { matches, usedOld, usedNew } = state
  const known = matches.filter(match => match.score >= 5).length
  return { matches, usedOld, usedNew, symbolMatched: known }
}

function stableName(match) {
  const anchors = match.anchors.filter(anchor => !anchor.startsWith('exact:'))
  const exported = anchors.filter(anchor => anchor.startsWith('export:')).sort()
  const packages = anchors.filter(anchor => anchor.startsWith('package:')).sort()
  const classes = anchors.filter(anchor => anchor.startsWith('class:')).sort()
  return safe((packages[0] ?? exported[0] ?? classes[0] ?? match.anchors[0]).replace(':', '/'))
}

function buildIds(matches, oldModules, newModules) {
  const oldIds = new Map()
  const newIds = new Map()
  const collisions = new Map()
  for (const match of matches) {
    const proposed = stableName(match)
    const count = collisions.get(proposed) ?? 0
    collisions.set(proposed, count + 1)
    match.stableName = count ? `${proposed}__${count}` : proposed
    oldIds.set(match.oldId, match.stableName)
    newIds.set(match.newId, match.stableName)
  }
  return { oldIds, newIds }
}

function parameterName(binding, scopeNumber) {
  if (binding.kind !== 'param') return ''
  const params = binding.scope.path.node.params ?? []
  const position = params.findIndex(param => param === binding.identifier || param.start === binding.identifier.start)
  return position < 0 ? '' : `__s${scopeNumber}param${position}`
}

function importName(binding) {
  if (!binding.path.isVariableDeclarator()) return ''
  const expression = binding.path.node.init
  if (expression?.type !== 'CallExpression') return ''
  if (expression.callee.type !== 'Identifier' || expression.callee.name !== 'require') return ''
  const target = expression.arguments[0]
  if (target?.type !== 'StringLiteral' || !target.value.startsWith('gge-module:')) return ''
  return `__dep_${safe(target.value.slice(11))}`
}

function renameScope(path, scopeNumber) {
  const bindings = Object.values(path.scope.bindings).filter(binding => binding.scope === path.scope)
  bindings.sort((a, b) => (a.identifier.start ?? 0) - (b.identifier.start ?? 0))
  let localCounter = 0
  const usedNames = new Set()
  for (const binding of bindings) {
    if (!isMangledLocal(binding.identifier.name)) continue
    const preferred = parameterName(binding, scopeNumber) || importName(binding) || `__s${scopeNumber}local${localCounter++}`
    let targetName = preferred
    let suffix = 1
    while (usedNames.has(targetName) || path.scope.hasBinding(targetName)) targetName = `${preferred}_${suffix++}`
    usedNames.add(targetName)
    path.scope.rename(binding.identifier.name, targetName)
  }
}

export function canonical(source, moduleIds, allModules) {
  const tree = parser.parse(source, { sourceType: 'unambiguous', allowReturnOutsideFunction: true, errorRecovery: false })
  const unresolvedImports = []
  let unresolvedSlot = 0
  traverse(tree, {
    CallExpression(path) {
      const { node } = path
      if (node.callee.type !== 'Identifier' || node.callee.name !== 'require') return
      if (node.arguments.length !== 1 || node.arguments[0].type !== 'StringLiteral') return
      const id = node.arguments[0].value.match(/^\.(?:\/)?(\d+)\.js$/)?.[1]
      if (id === undefined) return
      const name = moduleIds.get(id)
      if (name) node.arguments[0].value = `gge-module:${name}`
      else {
        const target = allModules.get(id)
        unresolvedImports.push({ slot: unresolvedSlot, id, sha256: target?.sha256 ?? null })
        node.arguments[0].value = `gge-unresolved:slot${unresolvedSlot++}`
      }
    },
  })
  let scopeCounter = 0
  traverse(tree, {
    Scopable(path) {
      renameScope(path, scopeCounter++)
    },
  })
  return {
    code: generate(tree, { comments: false, compact: false, retainLines: false, jsescOption: { minimal: true } }).code + '\n',
    unresolvedImports,
  }
}

async function emit({ directory, match, old, newer, oldIds, newIds, oldModules, newModules }) {
  const oldResult = canonical(old.source, oldIds, oldModules)
  const newResult = canonical(newer.source, newIds, newModules)
  const relative = `${match.stableName}.js`
  const oldPath = join(directory, 'old', relative)
  const newPath = join(directory, 'new', relative)
  await mkdir(resolve(oldPath, '..'), { recursive: true })
  await mkdir(resolve(newPath, '..'), { recursive: true })
  await writeFile(oldPath, oldResult.code)
  await writeFile(newPath, newResult.code)
  return {
    path: relative,
    oldId: old.id,
    newId: newer.id,
    oldHash: old.sha256,
    newHash: newer.sha256,
    canonicalOldHash: hash(oldResult.code),
    canonicalNewHash: hash(newResult.code),
    changed: oldResult.code !== newResult.code,
    anchors: match.anchors,
    unresolvedImports: { old: oldResult.unresolvedImports, new: newResult.unresolvedImports },
  }
}

export async function compare(oldDir, newDir, outputDir, options = {}) {
  const [oldModules, newModules] = await Promise.all([load(oldDir), load(newDir)])
  const { matches, usedOld, usedNew, symbolMatched } = matchModules(oldModules, newModules)
  if (options.inventoryOnly) {
    return {
      oldCount: oldModules.size,
      newCount: newModules.size,
      matched: matches.length,
      symbolMatched,
      unmatchedOld: [...oldModules.keys()].filter(id => !usedOld.has(id)),
      unmatchedNew: [...newModules.keys()].filter(id => !usedNew.has(id)),
      matchedPackages: matches.filter(item => item.anchors.some(anchor => anchor.startsWith('package:'))).map(item => item.anchors.find(anchor => anchor.startsWith('package:'))),
    }
  }
  const { oldIds, newIds } = buildIds(matches, oldModules, newModules)
  const details = []
  const errors = []
  for (const match of matches) {
    try {
      details.push(await emit({
        directory: outputDir,
        match,
        old: oldModules.get(match.oldId),
        newer: newModules.get(match.newId),
        oldIds,
        newIds,
        oldModules,
        newModules,
      }))
    } catch (error) {
      errors.push({ oldId: match.oldId, newId: match.newId, error: String(error) })
    }
  }
  const unmatchedOld = [...oldModules.keys()].filter(id => !usedOld.has(id))
  const unmatchedNew = [...newModules.keys()].filter(id => !usedNew.has(id))
  const changed = details.filter(item => item.changed)
  const sourceChanged = details.filter(item => item.oldHash !== item.newHash)
  const result = {
    oldDir: resolve(oldDir),
    newDir: resolve(newDir),
    oldCount: oldModules.size,
    newCount: newModules.size,
    matched: matches.length,
    symbolMatched,
    unchanged: details.length - changed.length,
    changed: changed.length,
    sourceChanged: sourceChanged.length,
    sourceChangedPaths: sourceChanged.map(item => item.path),
    canonicalOnlyChangedPaths: changed.filter(item => item.oldHash === item.newHash).map(item => item.path),
    sourceChangedButCanonicalEqualPaths: sourceChanged.filter(item => !item.changed).map(item => item.path),
    unmatchedOld,
    unmatchedNew,
    errors,
    unresolvedImportModules: details.filter(item => item.unresolvedImports.old.length || item.unresolvedImports.new.length).length,
    changedPaths: changed.map(item => item.path),
    entries: details,
  }
  await mkdir(outputDir, { recursive: true })
  await writeFile(join(outputDir, 'report.json'), JSON.stringify(result, null, 2) + '\n')
  const { entries, ...summary } = result
  return summary
}

if (process.argv[1] && basename(process.argv[1]) === basename(new URL(import.meta.url).pathname)) {
  const inventoryOnly = process.argv.includes('--inventory-only')
  const [oldDir, newDir, outputDir] = process.argv.slice(2).filter(arg => arg !== '--inventory-only')
  if (!oldDir || !newDir || !outputDir) {
    process.stderr.write('Usage: node compare.mjs OLD_WEBCRACK_DIR NEW_WEBCRACK_DIR OUTPUT_DIR\n')
    process.exitCode = 2
  } else {
    compare(oldDir, newDir, outputDir, { inventoryOnly }).then(report => process.stdout.write(JSON.stringify(report, null, 2) + '\n')).catch(error => {
      process.stderr.write(String(error) + '\n')
      process.exitCode = 1
    })
  }
}
