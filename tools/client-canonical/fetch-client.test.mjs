import { test } from 'node:test'
import assert from 'node:assert/strict'
import { officialPreloads } from './fetch-client.mjs'

test('recognizes five official versioned bundles and ignores unrelated links', () => {
  const input = ['Game.bundle', 'ggs.dll', 'CacheBreaker.bundle', 'CastleLoader.bundle', 'vendor.bundle']
    .map(name => `<link rel="preload" as="script" id="${name}" href="${name}.abc123.js">`).join('')
  const html = '<head>' + input + '<link rel="stylesheet" href="Game.bundle.aabb.js"></head>'
  assert.deepEqual(officialPreloads(html).map(item => item.bundle), [
    'Game.bundle', 'ggs.dll', 'CacheBreaker.bundle', 'CastleLoader.bundle', 'vendor.bundle',
  ])
  assert.equal(officialPreloads('<link rel="preload" as="image" href="Game.bundle.123aaa.js">').length, 0)
})
