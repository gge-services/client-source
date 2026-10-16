import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { compare } from './compare.mjs'

test('module IDs and local names do not create spurious changes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'gge-client-canonical-'))
  try {
    const oldDir = join(root, 'old-modules')
    const newDir = join(root, 'new-modules')
    const resultDir = join(root, 'result')
    await mkdir(oldDir)
    await mkdir(newDir)
    await writeFile(join(oldDir, '1.js'), 'var t = require("./2.js"); function Spear(e) { return t.Helper(e) + 1; } exports.Spear = Spear;')
    await writeFile(join(oldDir, '2.js'), 'function Helper(e) { return e * 2; } exports.Helper = Helper;')
    await writeFile(join(newDir, '7.js'), 'var z = require("./9.js"); function Spear(x) { return z.Helper(x) + 1; } exports.Spear = Spear;')
    await writeFile(join(newDir, '9.js'), 'function Helper(t) { return t * 2; } exports.Helper = Helper;')
    const stable = await compare(oldDir, newDir, resultDir)
    assert.equal(stable.matched, 2)
    assert.equal(stable.changed, 0)
    assert.equal(stable.unmatchedOld.length, 0)
    assert.equal(stable.unmatchedNew.length, 0)
    await writeFile(join(newDir, '7.js'), 'var z = require("./9.js"); function Spear(x) { return z.Helper(x) + 3; } exports.Spear = Spear;')
    const changed = await compare(oldDir, newDir, resultDir)
    assert.equal(changed.changed, 1)
    assert.deepEqual(changed.changedPaths, ['export_Spear.js'])
    const source = await readFile(join(resultDir, 'new', 'export_Spear.js'), 'utf8')
    assert.match(source, /\+ 3/)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})

test('package metadata is matched by package name instead of build number', async () => {
  const root = await mkdtemp(join(tmpdir(), 'gge-client-package-'))
  try {
    const oldDir = join(root, 'old')
    const newDir = join(root, 'new')
    await mkdir(oldDir)
    await mkdir(newDir)
    await writeFile(join(oldDir, '857.js'), 'module.exports = { name: "transpiled-empire", version: "1.2.1397" };')
    await writeFile(join(newDir, '222.js'), 'module.exports = { name: "transpiled-empire", version: "1.2.1407" };')
    const report = await compare(oldDir, newDir, join(root, 'output'), { inventoryOnly: true })
    assert.equal(report.matched, 1)
    assert.deepEqual(report.matchedPackages, ['package:transpiled-empire'])
    assert.deepEqual(report.unmatchedOld, [])
    assert.deepEqual(report.unmatchedNew, [])
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})

test('unresolved dependency changes are reported without cascading code diffs', async () => {
  const root = await mkdtemp(join(tmpdir(), 'gge-client-unresolved-'))
  try {
    const oldDir = join(root, 'old')
    const newDir = join(root, 'new')
    await mkdir(oldDir)
    await mkdir(newDir)
    await writeFile(join(oldDir, '1.js'), 'var e = require("./2.js"); exports.CastleInit = function () { return e.value; };')
    await writeFile(join(oldDir, '2.js'), 'module.exports = { value: 100 };')
    await writeFile(join(newDir, '3.js'), 'var t = require("./4.js"); exports.CastleInit = function () { return t.value; };')
    await writeFile(join(newDir, '4.js'), 'module.exports = { value: 120 };')
    const report = await compare(oldDir, newDir, join(root, 'output'))
    assert.equal(report.matched, 1)
    assert.equal(report.changed, 0)
    assert.equal(report.unresolvedImportModules, 1)
    assert.deepEqual(report.unmatchedOld, ['2'])
    assert.deepEqual(report.unmatchedNew, ['4'])
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})
