import traverseModule from '@babel/traverse'
import * as t from '@babel/types'

const traverse=traverseModule.default??traverseModule
const indexed=(node,name,index)=>t.isMemberExpression(node)&&node.computed&&t.isIdentifier(node.object,{name})&&t.isNumericLiteral(node.property,{value:index})
const role=(name,meaning,evidence)=>({name,meaning,evidence,confidence:'high'})

export function renameVerifiedParameters(classNode){
  const ast=t.file(t.program([t.cloneNode(classNode,true)]))
  const renamed=[]
  traverse(ast,{
    ClassMethod(path){
      const name=path.node.key?.name
      const params=path.node.params
      if(!name)return
      const candidates=[]
      const bare=params.every(t.isIdentifier)
      if(bare&&name==='executeCommand'&&params.length===2){
        const [status,fields]=params.map(x=>x.name)
        let statusUse=false,fieldsUse=false
        path.traverse({
          SwitchStatement(p){if(t.isIdentifier(p.node.discriminant,{name:status}))statusUse=true},
          CallExpression(p){
            if(!t.isMemberExpression(p.node.callee)||p.node.callee.computed||
              !t.isIdentifier(p.node.callee.property,{name:'showErrorDialog'}))return
            if(t.isIdentifier(p.node.arguments[0],{name:status})&&t.isIdentifier(p.node.arguments[1],{name:fields})){statusUse=true;fieldsUse=true}
          },
          MemberExpression(p){if(indexed(p.node,fields,1))fieldsUse=true}
        })
        if(statusUse&&fieldsUse){
          candidates.push([0,role('statusCode','protocol-status','status-branch-and-response-fields')])
          candidates.push([1,role('responseFields','protocol-payload','server-command-payload')])
        }
      }
      if(bare&&name==='exec'&&params.length===1){
        const param=params[0].name
        let status=false,fields=false,errorHandler=false
        path.traverse({
          MemberExpression(p){if(indexed(p.node,param,0))status=true;if(indexed(p.node,param,1))fields=true},
          CallExpression(p){if(t.isMemberExpression(p.node.callee)&&
            t.isIdentifier(p.node.callee.property,{name:'showErrorDialog'}))errorHandler=true}
        })
        if(status&&fields&&errorHandler)candidates.push([0,role('commandResponse','status-payload-pair','indexed-status-and-payload-error-handler')])
      }
      if(bare&&params.length===1&&['parseEquipmentInventory','parseGemInventory'].includes(name)){
        const param=params[0].name
        let length=false
        path.traverse({MemberExpression(p){
          if(t.isIdentifier(p.node.object,{name:param})&&t.isIdentifier(p.node.property,{name:'length'}))length=true
        }})
        if(length)candidates.push([0,role(name==='parseEquipmentInventory'?'equipmentEntries':'gemEntries','inventory-array','verified-array-length-in-inventory-parser')])
      }
      if(bare&&name==='showNameOrRenameDialog'&&params.length===1){
        const param=params[0].name
        let parses=false
        path.traverse({CallExpression(p){
          if(!t.isMemberExpression(p.node.callee)||!t.isIdentifier(p.node.callee.object,{name:'JSON'})||
            !t.isIdentifier(p.node.callee.property,{name:'parse'}))return
          if(indexed(p.node.arguments[0],param,1))parses=true
        }})
        if(parses)candidates.push([0,role('responseFields','protocol-fields','json-decoded-command-response')])
      }
      if(bare&&/^on[A-Z]/.test(name)&&params.length===1){
        const param=params[0].name
        let eventShape=false
        path.traverse({MemberExpression(p){
          if(t.isIdentifier(p.node.object,{name:param})&&!p.node.computed&&
            t.isIdentifier(p.node.property)&&['type','target','currentTarget'].includes(p.node.property.name))eventShape=true
        }})
        if(eventShape)candidates.push([0,role('event','event-object','observed-event-property')])
      }
      for(const [index,inferred]of candidates){
        const old=params[index].name
        if(old===inferred.name||path.scope.hasBinding(inferred.name))continue
        path.scope.rename(old,inferred.name)
        renamed.push({method:name,index,original:old,...inferred})
      }
      for(const [index,param] of params.entries()){
        const id=t.isAssignmentPattern(param)?param.left:t.isRestElement(param)?param.argument:param
        if(!t.isIdentifier(id)||!/^__s[0-9]+param[0-9]+(?:_[0-9]+)?$/.test(id.name))continue
        const fallback='argument'+index
        if(path.scope.hasBinding(fallback))throw Error('Parameter placeholder collision: '+name+':'+index)
        path.scope.rename(id.name,fallback)
      }
    }
  })
  return {node:ast.program.body[0],renamed}
}
