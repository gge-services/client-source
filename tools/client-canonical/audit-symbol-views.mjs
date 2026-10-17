import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import parser from '@babel/parser';

const root=resolve(process.argv[2]??'.');
const hash=data=>createHash('sha256').update(data).digest('hex');
const ast=source=>parser.parse(source,{sourceType:'unambiguous',allowReturnOutsideFunction:true,errorRecovery:false});
function namedAssignment(n) {
  if(n?.type!=='MemberExpression'||n.object?.name!=='exports')return null;
  if(n.computed||n.property?.type!=='Identifier')return null;
  return n.property.name==='__esModule'?null:n.property.name;
}
function definedExportKey(args) {
  const [target,property]=args??[];
  if(target?.name!=='exports')return null;
  if(property?.type!=='StringLiteral')return null;
  return property.value==='__esModule'?null:property.value;
}
function namedDefineProperty(n) {
  if(n?.type!=='CallExpression')return null;
  if(n.callee?.object?.name!=='Object')return null;
  if(n.callee?.property?.name!=='defineProperty')return null;
  return definedExportKey(n.arguments);
}
function exportedNames(node) {
  const names=[];
  let current=node;
  while(current?.type==='AssignmentExpression'){
    const name=namedAssignment(current.left);
    if(name)names.push(name);
    current=current.right;
  }
  const defined=namedDefineProperty(node);
  if(defined)names.push(defined);
  return new Set(names);
}
let verifiedModules=0,verifiedViews=0,verifiedExports=0,helpers=0,compounds=0;
for(const bundle of ['Game.bundle','ggs.dll','CacheBreaker.bundle','CastleLoader.bundle','vendor.bundle']) {
  const directory=join(root,'bundles',bundle),manifest=JSON.parse(await readFile(join(directory,'manifest.json')));
  const views=manifest.symbolViews??[];
  if(manifest.publishedModuleCount!==manifest.modules.length)throw Error(`${bundle}: Webpack module count changed`);
  const paths=new Set(),viewIndex=new Map(),casefoldPaths=new Map();
  for(const view of views){
    if(viewIndex.has(view.path))throw Error(`${bundle}: duplicate symbol view ${view.path}`);
    viewIndex.set(view.path,view);
  }
  for(const mod of manifest.modules){
    if(paths.has(mod.path))throw Error(`${bundle}: repeated module path ${mod.path}`);
    paths.add(mod.path);
    const source=await readFile(join(directory,mod.path),'utf8');
    if(hash(source)!==mod.canonicalSha256)throw Error(`${bundle}: corrupted original Webpack module ${mod.path}`);
    const statements=ast(source).program.body;
    const originalDeclarations=new Set(statements.flatMap(st=>st.type==='VariableDeclaration'?st.declarations.filter(d=>d.id?.type==='Identifier').map(d=>d.id.name):[]));
    const names=new Set(statements.flatMap(s=>[...exportedNames(s.type==='ExpressionStatement'?s.expression:null)]));
    const relevant=views.filter(v=>v.webpackId===mod.webpackId);
    const mapped=relevant.filter(v=>!v.helper);
    if(names.size>1){
      compounds++;
      if(!mod.path.startsWith('modules/webpack/'))throw Error(`${bundle}: still compound at ${mod.path}`);
      if(mapped.length!==names.size)throw Error(`${bundle}: ${mod.path} has ${names.size} exports but ${mapped.length} symbol views`);
      const sorted=[...names].sort(),actual=mapped.map(v=>v.name).sort();
      if(sorted.join('\0')!==actual.join('\0'))throw Error(`${bundle}: incomplete export split ${mod.path}`);
    }else if(mapped.length && !(names.size===1 && mapped.length===1 && names.has(mapped[0].name)))throw Error(`${bundle}: invalid single-export view ${mod.path}`);
    const declared=[...new Set([...source.matchAll(/\bfunction\s+([A-Z][A-Za-z\d_$]{3,})\s*\(/g)].map(x=>x[1]))];
    if(declared.length){
      const viewBodies=await Promise.all(relevant.map(v=>readFile(join(directory,v.path),'utf8')));
      for(const constructor of declared) {
        const pattern=new RegExp('\\bfunction\\s+'+constructor.replace(/[$]/g,'\\$&')+'\\s*\\(');
        if(!viewBodies.some(body=>pattern.test(body)) && !(names.size<2 && mod.path.endsWith('/'+constructor+'.js')))throw Error(`${bundle}: constructor ${constructor} has no independent view from ${mod.path}`);
      }
    }
    for(const view of relevant){
      const content=await readFile(join(directory,view.path),'utf8');
      if(hash(content)!==view.canonicalSha256)throw Error(`${bundle}: modified symbol view ${view.path}`);
      const parsed=ast(content).program.body;
      if(!view.helper){
        const indices=view.sourceStatementIndices;
        if(!Array.isArray(indices)||indices.length!==view.statementCount||parsed.length!==indices.length)throw Error(`${bundle}: incomplete statement trace ${view.path}`);
        for(let i=0;i<indices.length;i++){
          const st=statements[indices[i]],excerpt=parsed[i];
          if(!st||content.slice(excerpt.start,excerpt.end)!==source.slice(st.start,st.end))throw Error(`${bundle}: AST slice diverged ${view.path}: statement ${i}`);
        }
        const found=new Set(parsed.flatMap(s=>[...exportedNames(s.type==='ExpressionStatement'?s.expression:null)]));
        if(!found.has(view.name))throw Error(`${bundle}: source export missing in ${view.path}`);
        const viewDeclarations=new Set(parsed.flatMap(st=>st.type==='VariableDeclaration'?st.declarations.filter(d=>d.id?.type==='Identifier').map(d=>d.id.name):[]));
        for(const statement of parsed){
          const expr=statement.type==='ExpressionStatement'?statement.expression:null;
          const exports=[];
          let candidate=expr;
          while(candidate?.type==='AssignmentExpression'){
            if(namedAssignment(candidate.left)===view.name)exports.push(candidate.right);
            candidate=candidate.right;
          }
          for(const rhs of exports){
            let root=null;
            if(rhs.type==='Identifier')root=rhs.name;
            else if(rhs.type==='MemberExpression'){let n=rhs;while(n?.type==='MemberExpression')n=n.object;root=n?.name;}
            else if(rhs.type==='NewExpression'||rhs.type==='CallExpression')root=rhs.callee?.name;
            if(root&&originalDeclarations.has(root)&&!viewDeclarations.has(root))throw Error(`${bundle}: export ${view.name} lost local initializer ${root} in ${view.path}`);
          }
        }
        verifiedExports++;
      }else{
        const fnName=new RegExp('\\bfunction\\s+'+view.name.replace(/[$]/g,'\\$&')+'\\s*\\(');
        if(!fnName.test(content)||!source.includes('function '+view.name))throw Error(`${bundle}: invalid helper excerpt ${view.path}`);
        helpers++;
      }
      verifiedViews++;
    }
    verifiedModules++;
  }
  if(manifest.symbolViewCount!==views.length)throw Error(`${bundle}: view count mismatch`);
  const onDisk=async dir=>{
    const result=[];for(const item of await readdir(dir,{withFileTypes:true})){const path=join(dir,item.name);if(item.isDirectory())result.push(...await onDisk(path));else if(item.name.endsWith('.js'))result.push(path.slice(directory.length+1));}return result;
  };
  const expected=new Set([...manifest.modules.map(m=>m.path),...views.map(v=>v.path),...(manifest.bootstrap??[])]);
  const physical=await onDisk(join(directory,'modules'));
  for(const file of physical)if(!expected.has(file))throw Error(`${bundle}: orphan module file ${file}`);
  for(const file of expected)if(file.startsWith('modules/')&&!physical.includes(file))throw Error(`${bundle}: absent manifest file ${file}`);
  for(const file of physical){const lower=file.toLowerCase();const previous=casefoldPaths.get(lower);if(previous&&previous!==file)throw Error(`${bundle}: case-insensitive file collision: ${previous} and ${file}`);casefoldPaths.set(lower,file);}
  console.log(`${bundle}: ${manifest.modules.length} intact Webpack modules; ${views.length} validated class/export views`);
}
// Explicit regression cases: a class constructor instantiated with `new`,
// 111 constant exports including ERROR's 431+ value enum, and reexport indexes.
const js=async p=>readFile(join(root,p),'utf8');
const alchemist=await js('bundles/ggs.dll/modules/exports/AlchemistConst.js');
const errors=await js('bundles/ggs.dll/modules/exports/ERROR.js');
const facebook=await js('bundles/Game.bundle/modules/exports/CastleFacebookModule.js');
if(!alchemist.includes('function AlchemistConst()')||alchemist.includes('function AllianceConst()'))throw Error('AlchemistConst not separated');
if(!errors.includes('NO_FREE_EMBLEM')||!errors.includes('INVALID_PARAMETER_VALUE'))throw Error('ERROR enum was truncated');
if(!facebook.includes('function FacebookModule()'))throw Error('NewExpression class definition missing');
console.log(JSON.stringify({verifiedWebpackModules:verifiedModules,compoundWebpackModules:compounds,verifiedSymbolViews:verifiedViews,verifiedNamedExports:verifiedExports,nestedHelperViews:helpers}));
