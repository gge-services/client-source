import { createHash } from 'node:crypto'
import { readFile, writeFile, mkdir, readdir, copyFile } from 'node:fs/promises'
import { join, dirname, relative, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { canonical, symbols } from './compare.mjs'

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const root = resolve(process.argv[2] ?? '.')
const current = resolve(process.argv[3] ?? '.')
const old = resolve(process.argv[4] ?? '.')
const officialCaptureRoot = process.argv[9] ? resolve(process.argv[9]) : null
const officialCapture = officialCaptureRoot ? JSON.parse(await readFile(join(officialCaptureRoot, 'capture.json'), 'utf8')) : null
const gameReport = process.argv[5]
const dllReport = process.argv[6]
const oldCommit = 'e09bcc330c88a1f424ea6bbbccec9db9b4126691'
const capturedAt = process.argv[7] ?? '2026-10-16'
const sourceDataCommit = process.argv[8] ?? (capturedAt === '2026-10-16' ? '15cbbddc54f2b7c170c4ecda397968629916c9cc' : null)
const bundles = ['Game.bundle', 'ggs.dll', 'CacheBreaker.bundle', 'CastleLoader.bundle', 'vendor.bundle']

function modulePath(name) {
  if (name.startsWith('export_')) return 'exports/' + name.slice(7) + '.js'
  if (name.startsWith('class_')) return 'classes/' + name.slice(6) + '.js'
  if (name.startsWith('package_')) return 'packages/' + name.slice(8) + '.js'
  if (name.startsWith('exact_')) return 'internal/' + name + '.js'
  return 'opaque/' + name + '.js'
}

async function save(filename, content) {
  await mkdir(dirname(filename), { recursive: true })
  await writeFile(filename, content)
}

async function numeric(directory) {
  const names = (await readdir(directory)).filter(n => /^\d+\.js$/.test(n))
  return names.sort((a, b) => Number(a.slice(0, -3)) - Number(b.slice(0, -3)))
}

function moduleName(src, contentSha) {
  const s = symbols(src)
  if (s.packageName) return 'package_' + s.packageName.replace(/[^a-zA-Z0-9_.-]/g, '_')
  if (s.exported[0]) return 'export_' + s.exported[0]
  if (s.classes[0]) return 'class_' + s.classes[0]
  return 'opaque_' + contentSha.slice(0, 24)
}

async function bundleManifest(bundle, reportPath) {
  const sourceDir = join(current, bundle)
  const oldDir = join(old, bundle)
  const inputFiles = await numeric(sourceDir)
  const sourceCode = new Map()
  const sha = new Map()
  for (const filename of inputFiles) {
    const id = filename.slice(0, -3)
    const code = await readFile(join(sourceDir, filename), 'utf8')
    sourceCode.set(id, { id, source: code, sha256: sha256(code) })
    sha.set(id, sha256(code))
  }
  const identities = new Map()
  const matchDetails = new Map()
  if (reportPath) {
    const report = JSON.parse(await readFile(join(reportPath, 'report.json'), 'utf8'))
    for (const item of report.entries) {
      identities.set(item.newId, item.path.slice(0, -3))
      matchDetails.set(item.newId, item)
    }
    for (const id of report.unmatchedNew) {
      const oldFile = join(oldDir, id + '.js')
      const previousSha = sha256(await readFile(oldFile))
      identities.set(id, 'opaque_' + previousSha.slice(0, 24))
    }
  } else {
    for (const id of sourceCode.keys()) {
      const entry = sourceCode.get(id)
      identities.set(id, moduleName(entry.source, entry.sha256))
    }
  }
  const collisionIndex = new Map()
  const pathMap = new Map()
  for (const [id, name] of identities) {
    const proposed = modulePath(name)
    const count = collisionIndex.get(proposed) ?? 0
    collisionIndex.set(proposed, count + 1)
    if (count) identities.set(id, name + '__' + count)
    pathMap.set(id, count ? proposed.replace(/\.js$/, '__' + count + '.js') : proposed)
  }
  const specifiers = Object.fromEntries([...identities].map(([id, name]) => ['gge-module:' + name, pathMap.get(id)]))
  const entries = []
  for (const [id, entry] of sourceCode) {
    const file = pathMap.get(id)
    if (!file) throw Error(bundle + ': no identity for module ' + id)
    const previous = matchDetails.get(id)
    let output
    if (previous && !previous.unresolvedImports.new.length) {
      output = await readFile(join(reportPath, 'new', previous.path), 'utf8')
    } else {
      output = canonical(entry.source, identities, sourceCode).code
    }
    await save(join(root, 'bundles', bundle, 'modules', file), output)
    entries.push({
      webpackId: id,
      path: 'modules/' + file,
      specifier: 'gge-module:' + identities.get(id),
      sourceSha256: entry.sha256,
      canonicalSha256: sha256(output),
      lineage: previous ? previous.anchors : [],
      confidence: previous ? 'matched' : reportPath ? 'unresolved-lineage' : 'current-only',
    })
  }
  const bootstrap = []
  for (const entryName of ['index.js']) {
    try {
      const content = await readFile(join(sourceDir, entryName), 'utf8')
      const normalized = canonical(content, identities, sourceCode).code
      await save(join(root, 'bundles', bundle, 'bootstrap', 'entry.js'), normalized)
      bootstrap.push('bootstrap/entry.js')
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }
  }
  if (bundle === 'vendor.bundle' && !inputFiles.length) {
    const source = await readFile(join(sourceDir, 'deobfuscated.js'))
    await save(join(root, 'bundles', bundle, 'modules', 'vendor-runtime.js'), source)
    entries.push({
      webpackId: null,
      path: 'modules/vendor-runtime.js',
      specifier: 'gge-module:vendor-runtime',
      sourceSha256: sha256(source),
      canonicalSha256: sha256(source),
      lineage: [],
      confidence: 'single-vendor-asset',
    })
  }
  const source = await readFile(join(sourceDir, 'deobfuscated.js'))
  const captured = officialCapture?.bundles?.find(entry => entry.bundle === bundle) ?? null
  if (officialCaptureRoot && !captured) throw Error('Missing official capture: ' + bundle)
  const officialRaw = officialCaptureRoot ? await readFile(join(officialCaptureRoot, 'raw', bundle + '.js')) : null
  if (officialRaw && sha256(officialRaw) !== captured.sha256) throw Error('Official raw file mismatch: ' + bundle)
  const map = source.toString().match(/sourceMappingURL=(\S+)/)?.[1] ?? null
  const upstreamBundle = await readFile(join(sourceDir, 'bundle.json'), 'utf8').catch(() => null)
  const parsedBundle = upstreamBundle ? JSON.parse(upstreamBundle) : null
  const manifest = {
    schemaVersion: 1,
    bundle,
    sourceCommit: sourceDataCommit,
    deobfuscatedBundleSha256: sha256(source),
    officialRawBundleSha256: officialRaw ? sha256(officialRaw) : null,
    officialRawAsset: captured?.versionedAsset ?? null,
    upstreamSourceMap: map,
    entryId: parsedBundle?.entryId ?? null,
    sourceFileCount: inputFiles.length,
    publishedModuleCount: entries.length,
    unresolvedLineage: entries.filter(e => e.confidence === 'unresolved-lineage').length,
    bootstrap,
    specifiers,
    modules: entries,
  }
  await save(join(root, 'bundles', bundle, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
  return {
    bundle,
    deobfuscatedBundleSha256: manifest.deobfuscatedBundleSha256,
    officialRawBundleSha256: manifest.officialRawBundleSha256,
    officialRawAsset: manifest.officialRawAsset,
    moduleCount: entries.length,
    unmatched: manifest.unresolvedLineage,
    sourceMap: map,
  }
}

const reports = { 'Game.bundle': gameReport, 'ggs.dll': dllReport }
const results = []
for (const bundle of bundles) {
  results.push(await bundleManifest(bundle, reports[bundle]))
  process.stdout.write(JSON.stringify(results.at(-1)) + '\n')
}
await save(join(root, 'snapshots', capturedAt + '.json'), JSON.stringify({
  schemaVersion: 1,
  capturedAt,
  sourceDataCommit,
  rawBundlesPreviouslyCommittedToData: Boolean(sourceDataCommit),
  bundles: results,
}, null, 2) + '\n')
if (capturedAt === '2026-10-16') await save(join(root, 'snapshots', '2026-10-06.json'), JSON.stringify({
  schemaVersion: 1,
  capturedAt: '2026-10-06',
  legacyDataCommit: oldCommit,
  comparisonReports: ['Game.bundle', 'ggs.dll'],
  note: 'Prior module bodies were retained in their original GGE Data Git commit; this snapshot is provenance-only.',
}, null, 2) + '\n')
const n = results.reduce((sum, item) => sum + item.moduleCount, 0)
process.stdout.write('Published ' + n + ' modules across ' + results.length + ' bundles\n')
const refined = spawnSync(process.execPath, [join(import.meta.dirname, 'refine-modules.mjs'), root, capturedAt], { stdio: 'inherit' })
if (refined.status !== 0) throw Error('AST symbol refinement failed after publishing Webpack modules')
