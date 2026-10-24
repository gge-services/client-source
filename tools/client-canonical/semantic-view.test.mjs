import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createSemanticView } from './semantic-view.mjs'

const base = dirname(fileURLToPath(import.meta.url))
const root = join(base, '../..')
const profile = async () => {
  const data = JSON.parse(await readFile(join(base, 'mappings/semantic-names.json'), 'utf8'))
  return data.profiles['Game.bundle:export_AALCommand']
}
const source = () => readFile(join(root, 'bundles/Game.bundle/modules/exports/AALCommand.js'), 'utf8')

test('persistent semantic names recover dependency roles and callback parameters', async () => {
  const result = createSemanticView(await source(), await profile())
  const code = result.code
  assert.match(code, /inheritanceHelper\.__extends\(AALCommand/)
  assert.match(code, /interfaceHelper\.classImplementsInterfaces\(/)
  assert.match(code, /gameErrors\.ERROR\.ALL_OK/)
  assert.match(code, /executeCommand = function \(statusCode, responseFields\)/)
  assert.match(code, /var parsedResponse = JSON\.parse\(responseFields\[1\]\)/)
  assert.match(code, /parsedResponse\.OI/)
  assert.equal(result.evidence.attributes.OI.renameInCode, false)
  assert.match(code, /cmdId/)
  assert.doesNotMatch(code, /__s9param/)
})

test('renamed mangled bindings and shifted function scope numbering keep semantic names', async () => {
  const original = await source()
  const variation = original
    .replaceAll('__s9param0', 'obfuscatedStatus')
    .replaceAll('__s9param1', 'obfuscatedReply')
    .replaceAll('__s9local0', 'transientDecode')
    .replaceAll('__dep_exact_6fd0a7f85c69b366', 'webpackExtends')
    .replaceAll('__dep_exact_81dacdf05bd32292', 'webpackInterfaces')
    .replaceAll('__dep_exact_26a421b704832cff', 'webpackErrors')
    .replaceAll('gge-module:exact_6fd0a7f85c69b366', 'gge-module:exact_reindexedA')
    .replaceAll('gge-module:exact_81dacdf05bd32292', 'gge-module:exact_reindexedB')
    .replaceAll('gge-module:exact_26a421b704832cff', 'gge-module:exact_reindexedC')
    .replace('Object.defineProperty(exports, "__esModule", {', 'function unrelatedExtraScope(x) { return x; }\nObject.defineProperty(exports, "__esModule", {')
  const mapping = await profile()
  const before = createSemanticView(original, mapping)
  const after = createSemanticView(variation, mapping)
  for (const snippet of [
    'inheritanceHelper.__extends(AALCommand',
    'gameErrors.ERROR.ALL_OK',
    'executeCommand = function (statusCode, responseFields)',
    'var parsedResponse = JSON.parse(responseFields[1])',
    'parseOwnerInfoArray(parsedResponse.OI)'
  ]) {
    assert.ok(before.code.includes(snippet), snippet)
    assert.ok(after.code.includes(snippet), snippet)
  }
})

test('fails closed on changed method arity or ambiguous dependency identity', async () => {
  const original = await source()
  const mapping = await profile()
  assert.throws(() => createSemanticView(original.replace('function (__s9param0, __s9param1)', 'function (__s9param0)'), mapping), /Parameter arity drift/)
  assert.throws(() => createSemanticView(original.replace('gameErrors', 'anotherErrorObject'), {
    ...mapping,
    dependencies: [{ member: 'NOT_PRESENT', name: 'unknownDependency' }]
  }), /Dependency role NOT_PRESENT has 0 candidate/)
})

test('human-readable annotations do not rewrite published wire attributes', async () => {
  const mapping = await profile()
  const readable = createSemanticView(await source(), mapping)
  assert.equal(mapping.attributes.OI.kind, 'wire')
  assert.equal(mapping.attributes.cmdId.kind, 'public-interface')
  assert.ok(readable.code.includes('parsedResponse.OI'))
  assert.ok(readable.code.includes('"cmdId"'))
})

test('checked-in semantic view and mapping provenance are reproducible', async () => {
  const input = await source()
  const mapping = await profile()
  const generated = createSemanticView(input, mapping)
  const readablePath = join(root, 'bundles/Game.bundle/readable/exports/AALCommand.js')
  const [readable, evidence] = await Promise.all([
    readFile(readablePath, 'utf8'),
    readFile(readablePath + '.evidence.json', 'utf8').then(JSON.parse)
  ])
  assert.equal(readable, generated.code)
  assert.deepEqual(evidence, generated.evidence)
})
