import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import parser from '@babel/parser'
import traverseModule from '@babel/traverse'

const traverse = traverseModule.default ?? traverseModule
const bundles = ['Game.bundle', 'ggs.dll', 'CacheBreaker.bundle', 'CastleLoader.bundle', 'vendor.bundle']

export async function auditExportShapes(root) {
  const summary = {
    modules: 0,
    symbolViews: 0,
    computedStaticExportModules: [],
    computedDynamicExportModules: [],
    bulkExportModules: [],
    dynamicImportModules: [],
    unknownModuleExportModules: []
  }
  for (const bundle of bundles) {
    const directory = join(root, 'bundles', bundle)
    const manifest = JSON.parse(await readFile(join(directory, 'manifest.json'), 'utf8'))
    summary.modules += manifest.modules.length
    summary.symbolViews += manifest.symbolViews?.length ?? 0
    for (const mod of manifest.modules) {
      const source = await readFile(join(directory, mod.path), 'utf8')
      const ast = parser.parse(source, { sourceType: 'unambiguous', allowReturnOutsideFunction: true })
      const flags = new Set()
      traverse(ast, {
        MemberExpression(path) {
          const node = path.node
          if (node.object?.type !== 'Identifier' || node.object.name !== 'exports' || !node.computed) return
          if (node.property.type === 'StringLiteral') flags.add('computedStaticExportModules')
          else flags.add('computedDynamicExportModules')
        },
        CallExpression(path) {
          const n = path.node
          const name = n.callee.type === 'MemberExpression' && !n.callee.computed &&
            n.callee.object.type === 'Identifier' && n.callee.object.name === 'Object' ? n.callee.property.name : null
          if (['assign', 'defineProperties'].includes(name) && n.arguments[0]?.type === 'Identifier' && n.arguments[0].name === 'exports') flags.add('bulkExportModules')
          if (n.callee.type !== 'Identifier' || n.callee.name !== 'require') return
          if (n.arguments.length !== 1 || n.arguments[0].type !== 'StringLiteral') flags.add('dynamicImportModules')
        },
        AssignmentExpression(path) {
          const left = path.node.left
          if (left.type === 'MemberExpression' && !left.computed && left.object.type === 'Identifier' &&
            left.object.name === 'module' && left.property.name === 'exports') flags.add('unknownModuleExportModules')
        }
      })
      for (const flag of flags) summary[flag].push({ bundle, path: mod.path, webpackId: mod.webpackId })
    }
  }
  return summary
}

if (process.argv[1]?.endsWith('/audit-export-shapes.mjs')) {
  auditExportShapes(resolve(process.argv[2] ?? '../..'))
    .then(report => process.stdout.write(JSON.stringify({
      modules: report.modules,
      symbolViews: report.symbolViews,
      flags: Object.fromEntries(Object.entries(report).filter(([, value]) => Array.isArray(value)).map(([key, value]) => [key, {
        count: value.length,
        examples: value.slice(0, 8)
      }]))
    }, null, 2) + '\n'))
    .catch(error => { console.error(error); process.exitCode = 1 })
}
