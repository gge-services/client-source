import {test} from 'node:test'
import assert from 'node:assert/strict'
import parser from '@babel/parser'
import generatorModule from '@babel/generator'
import {renameVerifiedParameters} from './semantic-parameters.mjs'

const generate=generatorModule.default??generatorModule
const transform=code=>{
  const ast=parser.parse(code,{sourceType:'module'})
  const result=renameVerifiedParameters(ast.program.body[0])
  return {code:generate(result.node).code,renamed:result.renamed}
}

test('derives stable response array role despite parameter renumbering',()=>{
  const base='class BCQCommand { exec(argument0) { const status = Number(argument0[0]); const body = argument0[1]; this.showErrorDialog(status, body) } }'
  const changed='class BCQCommand { exec(obfuscatedB) { const status = Number(obfuscatedB[0]); const body = obfuscatedB[1]; this.showErrorDialog(status, body) } }'
  const a=transform(base),b=transform(changed)
  assert.equal(a.code,b.code)
  assert.match(a.code,/exec\(commandResponse\)/)
  assert.equal(a.renamed[0].confidence,'high')
})

test('array element usage alone does not infer protocol response semantics',()=>{
  const code='class Sample { exec(argument0) { return argument0[0] + argument0[1] } }'
  const result=transform(code)
  assert.match(result.code,/exec\(argument0\)/)
  assert.equal(result.renamed.length,0)
})

test('derives inventory argument names without touching protocol field names',()=>{
  const a=transform('class Inventory { static parseGemInventory(argument0) { return argument0.length } }')
  const b=transform('class Inventory { static parseGemInventory(other) { return other.length } }')
  assert.equal(a.code,b.code)
  assert.match(a.code,/parseGemInventory\(gemEntries\)/)
})

test('derives event role from event properties rather than a method name alone',()=>{
  const positive=transform('class Watcher { onComplete(input) { return input.target } }')
  const negative=transform('class Watcher { onComplete(input) { return input } }')
  assert.match(positive.code,/onComplete\(event\)/)
  assert.match(negative.code,/onComplete\(input\)/)
})
