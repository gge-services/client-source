import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { basename, dirname, join, resolve } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { createHash } from 'node:crypto'
import { pathToFileURL } from 'node:url'

const exec = promisify(execFile)
const base = 'https://empire-html5.goodgamestudios.com/default/'
const scriptPattern = /^(Game\.bundle|ggs\.dll|CacheBreaker\.bundle|CastleLoader\.bundle|vendor\.bundle)\.[a-f0-9]+\.js$/i

export function officialPreloads(html) {
  const candidates = []
  for (const [tag] of html.matchAll(/<link\b[^>]*>/gi)) {
    const attributes = Object.fromEntries(
      [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(
        match => [match[1].toLowerCase(), match[2] ?? match[3] ?? match[4]],
      ),
    )
    if (!attributes.rel?.toLowerCase().split(/\s+/).includes('preload')) continue
    if (attributes.as?.toLowerCase() !== 'script' || !attributes.href) continue
    const asset = basename(new URL(attributes.href, base).pathname)
    const match = asset.match(scriptPattern)
    if (!match) continue
    candidates.push({ bundle: match[1], versionedAsset: asset, href: attributes.href })
  }
  return [...new Map(candidates.map(item => [item.bundle.toLowerCase(), item])).values()]
}

async function download(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(45000) })
  if (!response.ok) throw Error(url + ': HTTP ' + response.status)
  return Buffer.from(await response.arrayBuffer())
}

function digest(content) {
  return createHash('sha256').update(content).digest('hex')
}

export async function capture({ outputRoot, htmlFile, unpack = true }) {
  const html = htmlFile ? await readFile(htmlFile, 'utf8') : (await download(new URL('index.html?inGameShop=1&allowFullScreen=true', base))).toString('utf8')
  const links = officialPreloads(html)
  if (links.length !== 5) throw Error('Expected five official browser bundles; found ' + links.length)
  const work = resolve(outputRoot)
  const rawDir = join(work, 'raw')
  const extractedDir = join(work, 'unpacked')
  await mkdir(rawDir, { recursive: true })
  const manifest = { schemaVersion: 1, capturedAt: new Date().toISOString(), origin: base, bundles: [] }
  for (const entry of links) {
    const url = new URL(entry.href, base).toString()
    if (!url.startsWith(base)) throw Error('Non-official script host: ' + url)
    const content = await download(url)
    const filename = join(rawDir, entry.bundle + '.js')
    await writeFile(filename, content)
    manifest.bundles.push({ ...entry, url, sha256: digest(content), bytes: content.length })
    if (!unpack) continue
    const destination = join(extractedDir, entry.bundle)
    await mkdir(dirname(destination), { recursive: true })
    await exec('npx', ['-y', '-p', 'node@22', '-p', 'webcrack@2.16.0', 'webcrack', filename, '--output', destination], { timeout: 300000, maxBuffer: 2 * 1024 * 1024 })
  }
  await writeFile(join(work, 'capture.json'), JSON.stringify(manifest, null, 2) + '\n')
  return manifest
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const flags = new Map(process.argv.slice(2).filter(item => item.startsWith('--')).map(item => item.slice(2).split('=', 2)))
  const outputRoot = flags.get('output-root')
  if (!outputRoot) throw Error('Supply --output-root=/path/to/ignored/work-directory')
  capture({ outputRoot, htmlFile: flags.get('html-file'), unpack: !flags.has('no-unpack') })
    .then(report => console.log('Captured', report.bundles.length, 'official scripts'))
    .catch(error => { console.error(error); process.exitCode = 1 })
}
