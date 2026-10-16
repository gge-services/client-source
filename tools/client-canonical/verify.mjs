import { createHash } from 'node:crypto'
import { readFile, readdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

const root = resolve(process.argv[2] ?? '.')
const sourceRoot = process.argv[3] ? resolve(process.argv[3]) : null
const officialCaptureRoot = process.argv[4] ? resolve(process.argv[4]) : null
const sha256 = data => createHash('sha256').update(data).digest('hex')
const snapshot = JSON.parse(await readFile(join(root, 'snapshots', '2026-10-16.json'), 'utf8'))
let total = 0
let unresolved = 0
for (const metadata of snapshot.bundles) {
  const directory = join(root, 'bundles', metadata.bundle)
  const manifest = JSON.parse(await readFile(join(directory, 'manifest.json'), 'utf8'))
  const allPaths = new Set()
  const allSpecifiers = new Set()
  const idMap = new Map()
  for (const module of manifest.modules) {
    if (allPaths.has(module.path)) throw Error('Duplicate module path: ' + module.path)
    if (allSpecifiers.has(module.specifier)) throw Error('Duplicate module specifier: ' + module.specifier)
    allPaths.add(module.path)
    allSpecifiers.add(module.specifier)
    idMap.set(module.webpackId, module)
    const contents = await readFile(join(directory, module.path))
    if (sha256(contents) !== module.canonicalSha256) throw Error('Modified canonical source: ' + module.path)
    const source = contents.toString()
    if (source.includes('gge-unresolved:')) throw Error('Unresolved import inside published source: ' + module.path)
    for (const [, spec] of source.matchAll(/require\(["'](gge-module:[^"']+)["']\)/g)) {
      if (!manifest.specifiers[spec]) throw Error('Unresolved symbolic import: ' + module.path + ' -> ' + spec)
    }
    if (sourceRoot && module.webpackId !== null) {
      const original = await readFile(join(sourceRoot, metadata.bundle, module.webpackId + '.js'))
      if (sha256(original) !== module.sourceSha256) throw Error('Wrong source hash: ' + module.path)
    }
    total++
  }
  if (manifest.publishedModuleCount !== manifest.modules.length || manifest.modules.length !== metadata.moduleCount) {
    throw Error('Module count mismatch: ' + metadata.bundle)
  }
  if (sourceRoot) {
    const raw = await readFile(join(sourceRoot, metadata.bundle, 'deobfuscated.js'))
    if (sha256(raw) !== manifest.deobfuscatedBundleSha256 || sha256(raw) !== metadata.deobfuscatedBundleSha256) {
      throw Error('Official snapshot digest mismatch: ' + metadata.bundle)
    }
  }
  if (officialCaptureRoot) {
    const capture = JSON.parse(await readFile(join(officialCaptureRoot, 'capture.json'), 'utf8'))
    const captured = capture.bundles.find(entry => entry.bundle === metadata.bundle)
    const raw = await readFile(join(officialCaptureRoot, 'raw', metadata.bundle + '.js'))
    if (!captured || sha256(raw) !== captured.sha256 || captured.sha256 !== manifest.officialRawBundleSha256) {
      throw Error('Official asset hash mismatch: ' + metadata.bundle)
    }
  }
  unresolved += manifest.unresolvedLineage
  console.log(metadata.bundle, manifest.modules.length, 'verified', manifest.unresolvedLineage, 'unresolved lineage')
}
console.log('VERIFIED', total, 'files across', snapshot.bundles.length, 'bundles;', unresolved, 'lineage matches require review')
