import {test} from 'node:test'
import assert from 'node:assert/strict'
import {createHash} from 'node:crypto'
import {readFile} from 'node:fs/promises'
import {join,dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {buildSemanticGraph} from './build-semantic-graph.mjs'
import {resolveCrossBundleAliases} from './cross-bundle-aliases.mjs'

const root=join(dirname(fileURLToPath(import.meta.url)),'../..')
const sha=s=>createHash('sha256').update(s).digest('hex')
const entry=(bundle,id,source,path)=>({bundle,id,source,module:{path,canonicalSha256:sha(source)}})

test('cross-bundle duplicate gets a unique named identity, independent of source spelling',()=>{
  const example=[
    entry('Game.bundle','Game.bundle:package:TranspilationEmpire','module.exports={name:"TranspilationEmpire",version:"1"}', 'modules/packages/A.js'),
    entry('CacheBreaker.bundle',null,'module.exports={name:"TranspilationEmpire",version:"1"}', 'modules/packages/B.js')
  ]
  const result=resolveCrossBundleAliases(example)
  assert.equal(result.length,1)
  assert.equal(example[1].id,'CacheBreaker.bundle:exact-source-alias:Game.bundle:package:TranspilationEmpire')
  const updated=[
    entry('Game.bundle','Game.bundle:package:TranspilationEmpire','module.exports={name:"TranspilationEmpire",version:"2"}', 'modules/packages/A.js'),
    entry('CacheBreaker.bundle',null,'module.exports={name:"TranspilationEmpire",version:"2"}', 'modules/packages/B.js')
  ]
  resolveCrossBundleAliases(updated)
  assert.equal(updated[1].id,example[1].id)
})

test('cannot assign a source alias from conflicting owners or different bytes',()=>{
  const repeated=[
    entry('Game.bundle','Game.bundle:export:A','content','a'),
    entry('ggs.dll','ggs.dll:export:B','content','b'),
    entry('CacheBreaker.bundle',null,'content','c')
  ]
  assert.deepEqual(resolveCrossBundleAliases(repeated),[])
  assert.equal(repeated[2].id,null)
  const unequal=[
    entry('Game.bundle','Game.bundle:export:A','content','a'),
    entry('CacheBreaker.bundle',null,'different','b')
  ]
  assert.deepEqual(resolveCrossBundleAliases(unequal),[])
  assert.equal(unequal[1].id,null)
  unequal[1].module.canonicalSha256=sha('content')
  assert.throws(()=>resolveCrossBundleAliases(unequal),/Unverified source checksum/)
})

test('real canonical snapshot has exactly two source-identical package aliases',async()=>{
  const graph=await buildSemanticGraph(root)
  const verified=graph.nodes.filter(x=>x.confidence==='verified-exact-source-alias')
  assert.equal(verified.length,2)
  assert.deepEqual(verified.map(x=>x.path).sort(),[
    'modules/packages/TranspilationEmpire.js',
    'modules/packages/_goodgamestudios_empire-createjs-assets.js'
  ])
  for(const row of verified){
    const original=await readFile(join(root,'bundles/CacheBreaker.bundle',row.path),'utf8')
    const owner=await readFile(join(root,'bundles/Game.bundle',row.path),'utf8')
    assert.equal(original,owner)
    assert.ok(row.id.includes('Game.bundle:package:'))
  }
  assert.equal(graph.stableNodeCount,6631)
  assert.equal(graph.unresolvedNodeCount,219)
})
