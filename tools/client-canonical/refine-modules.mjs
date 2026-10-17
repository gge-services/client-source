import { createHash } from 'node:crypto';
import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import parser from '@babel/parser';
import traverseModule from '@babel/traverse';
const traverse = traverseModule.default ?? traverseModule;

// Preserve original Webpack modules as byte-for-byte canonical evidence. The
// extra files are independently navigable symbol audit views, not executable
// replacements for Webpack's module runtime or its require() graph.
const root = resolve(process.argv[2] ?? '.');
const snapshotDate = process.argv[3] ?? '2026-10-16';
const sha = s => createHash('sha256').update(s).digest('hex');
const valid = n => /^[A-Za-z_$][\w$]*$/.test(n);
function memberRoot(n) {
  if(n?.type==='Identifier')return n.name;
  return n?.type==='MemberExpression'?memberRoot(n.object):null;
}
function propertyName(n) {
  if(n?.type!=='MemberExpression'||n.computed)return null;
  return n.property?.type==='Identifier'?n.property.name:null;
}
const isExport = n => n?.type==='MemberExpression' && n.object?.name==='exports' ? propertyName(n) : null;
const SIMPLE_BINDINGS=new Set(['Identifier','MemberExpression']);
const CALL_BINDINGS=new Set(['NewExpression','CallExpression']);
const BRANCH_BINDINGS={ConditionalExpression:['consequent','alternate'],LogicalExpression:['left','right']};
const bindingCandidates = n => {
  if(!n)return [];
  if(SIMPLE_BINDINGS.has(n.type))return [memberRoot(n)];
  if(CALL_BINDINGS.has(n.type))return [memberRoot(n.callee)];
  if(n.type==='AssignmentExpression')return bindingCandidates(n.right);
  if(n.type==='SequenceExpression')return bindingCandidates(n.expressions.at(-1));
  return (BRANCH_BINDINGS[n.type]??[]).flatMap(field=>bindingCandidates(n[field]));
};
const parse = code => parser.parse(code, { sourceType:'unambiguous',allowReturnOutsideFunction:true,errorRecovery:false });
function exportAssignments(node) {
  const assignments=[];
  for(let current=node;current?.type==='AssignmentExpression';current=current.right){
    const name=isExport(current.left);
    if(name&&name!=='__esModule')assignments.push({name,rhs:current.right});
  }
  return assignments;
}
function objectDefineProperty(callee) {
  return memberRoot(callee?.object)==='Object' && propertyName(callee)==='defineProperty';
}
function exportPropertyKey(args) {
  const [target,property]=args??[];
  if(target?.name!=='exports')return null;
  if(property?.type!=='StringLiteral')return null;
  return property.value==='__esModule'?null:property.value;
}
function namedDefineProperty(e) {
  if(e?.type!=='CallExpression')return null;
  if(e.callee?.type!=='MemberExpression')return null;
  if(!objectDefineProperty(e.callee))return null;
  return exportPropertyKey(e.arguments);
}
function statementExports(stmt) {
  const e=stmt.type==='ExpressionStatement'?stmt.expression:null;
  const exported=exportAssignments(e);
  const name=namedDefineProperty(e);
  if(name)exported.push({name,rhs:null});
  return exported;
}
function initialModulePaths(manifest) {
  return new Set(manifest.modules.map(module=>module.path));
}
function statementText(source,node) {
  return source.slice(node.start,node.end);
}
function symbolViewHeader(bundle,module,name) {
  return [
    '// Canonical symbol view; NOT a standalone executable Webpack module.',
    `// Bundle: ${bundle}; Webpack module: ${module.webpackId}`,
    `// Export: ${name}; preserved source: ${module.path}`,
    `// Original canonical SHA-256: ${module.canonicalSha256}`,
  ].join('\n')+'\n';
}
function bundleSummary(bundle,manifest,work,views) {
  return {
    bundle,
    webpackModuleCount:manifest.modules.length,
    compoundWebpackModules:work.filter(item=>item.compound).length,
    symbolViewCount:views.length,
    helperViews:views.filter(view=>view.helper).length,
  };
}
const index=[];
for (const bundle of ['Game.bundle','ggs.dll','CacheBreaker.bundle','CastleLoader.bundle','vendor.bundle']) {
  const directory=join(root,'bundles',bundle);
  const manifestFile=join(directory,'manifest.json');
  const manifest=JSON.parse(await readFile(manifestFile,'utf8'));
  if(manifest.symbolViews) throw Error(`${bundle}: already refined; regenerate clean from published canonical baseline`);
  const published=initialModulePaths(manifest);
  const byName=new Map();
  const work=[];
  for(const mod of manifest.modules) {
    const source=await readFile(join(directory,mod.path),'utf8');
    if(sha(source)!==mod.canonicalSha256) throw Error(`${bundle}: mismatch ${mod.path}`);
    const ast=parse(source), statements=ast.program.body;
    const exportsByStmt=statements.map(statementExports);
    const exportNames=[...new Set(exportsByStmt.flat().map(x=>x.name))];
    // Detect non-exported helper classes separately, too. They should never
    // be silently described as a stand-alone Webpack export.
    const constructors=[...new Set([...source.matchAll(/\bfunction\s+([A-Z][A-Za-z\d_$]{3,})\s*\(/g)].map(x=>x[1]))];
    const needsSingleView=exportNames.length===1 && constructors.length>0 && !mod.path.endsWith('/'+exportNames[0]+'.js');
    if(exportNames.length<2 && constructors.length<2 && !needsSingleView && !constructors.some(n=>!mod.path.endsWith('/'+n+'.js')&&!exportNames.includes(n))) continue;
    const record={mod,source,ast,statements,exportsByStmt,exportNames,constructors,compound:exportNames.length>=2,needsSingleView};
    work.push(record);
    if(record.compound||needsSingleView) {
      for(const name of exportNames) {
        if(!valid(name)) throw Error(`${bundle}: unsafe export ${name}`);
        const target=`modules/exports/${name}.js`;
        const key=target.toLowerCase();
        if(!byName.has(key)) byName.set(key,[]);
        byName.get(key).push({name,webpackId:mod.webpackId});
      }
    }
  }
  const views=[];
  const viewBodies=new Map();
  for(const item of work) {
    const {mod,source,ast,statements,exportsByStmt,exportNames,constructors,compound,needsSingleView}=item;
    const origin=mod.path;
    if(compound) {
      const target=`modules/webpack/${origin.slice('modules/'.length)}`;
      if(published.has(target)) throw Error('Webpack preservation path conflict: '+target);
      await mkdir(dirname(join(directory,target)),{recursive:true});
      await rename(join(directory,origin),join(directory,target));
      mod.path=target;
      published.delete(origin);published.add(target);
      const spec=mod.specifier;
      if(manifest.specifiers[spec]!==origin.slice('modules/'.length)) throw Error('Specifier mismatch '+spec);
      manifest.specifiers[spec]=target.slice('modules/'.length);
    }
    const ownerRoots=new Map();
    for(let i=0;i<statements.length;i++) {
      for(const e of exportsByStmt[i]) {
        for (const key of bindingCandidates(e.rhs)) {
          if(!key || key==='exports' || key==='Object' || key==='Math') continue;
          if(!ownerRoots.has(key)) ownerRoots.set(key,new Set());
          ownerRoots.get(key).add(e.name);
        }
      }
    }
    for(const name of exportNames) {
      if(!compound && !needsSingleView) break;
      const owner=[...ownerRoots].filter(([,names])=>names.has(name)).map(([key])=>key);
      const selected=[];
      for(let i=0;i<statements.length;i++) {
        const s=statements[i];
        const exp=exportsByStmt[i];
        const isMine=exp.some(x=>x.name===name);
        const decl=s.type==='VariableDeclaration'&&s.declarations.some(d=>d.id?.type==='Identifier'&&owner.includes(d.id.name));
        const left=s.type==='ExpressionStatement'&&s.expression.type==='AssignmentExpression'&&owner.includes(memberRoot(s.expression.left));
        const call=s.type==='ExpressionStatement'&&s.expression.type==='CallExpression' &&
            (owner.includes(memberRoot(s.expression.callee)) ||
             s.expression.arguments.some(a=>owner.some(k=>new RegExp('\\b'+k+'\\b').test(statementText(source,a)))));
        if(isMine||decl||left||call)selected.push(i);
      }
      if(!selected.length) throw Error(`${bundle}: missing AST segment for ${name}`);
      const base=`modules/exports/${name}.js`;
      const competing=byName.get(base.toLowerCase());
      const uniqueCaseVariants=new Set(competing.map(item=>item.name)).size===competing.length;
      const preferred=competing.slice().sort((a,b)=>{
        const ca=/^[A-Z]/.test(a.name)?0:1,cb=/^[A-Z]/.test(b.name)?0:1;
        return ca-cb || a.name.localeCompare(b.name) || String(a.webpackId).localeCompare(String(b.webpackId),undefined,{numeric:true});
      })[0];
      const mayUseBase=competing.length===1 || (uniqueCaseVariants && preferred.name===name && preferred.webpackId===mod.webpackId);
      const occupied=[...published].some(path=>path.toLowerCase()===base.toLowerCase());
      const destination=mayUseBase&&!occupied?base:`modules/exports/${name}__webpack_${mod.webpackId}__${sha(name).slice(0,8)}.js`;
      if(published.has(destination)) throw Error(`${bundle}: conflicting symbol view ${destination}`);
      published.add(destination);
      const header=symbolViewHeader(bundle,mod,name);
      const body=selected.map(i=>statementText(source,statements[i])).join('\n');
      const view=header+body+'\n';
      parse(view);
      await mkdir(dirname(join(directory,destination)),{recursive:true});
      await writeFile(join(directory,destination),view);
      viewBodies.set(destination,view);
      views.push({name,path:destination,webpackId:mod.webpackId,ownerPath:mod.path,canonicalSha256:sha(view),statementCount:selected.length,sourceStatementIndices:selected});
    }
    // Scan the whole AST once: distinct helper constructors may reuse their
    // name in different closure scopes, and an exported instance can have a
    // different constructor name (e.g. CastleFacebookModule/FacebookModule).
    const functionNodes=[];
    traverse(ast, {
      Function(path) {
        const fn=path.node;
        if(!['FunctionDeclaration','FunctionExpression'].includes(fn.type))return;
        if(/^[A-Z][A-Za-z\d_$]{3,}$/.test(fn.id?.name??''))functionNodes.push(fn);
      },
    });
    const emitted=new Set();
    const ownedViews=views.filter(v=>v.webpackId===mod.webpackId&&!v.helper).map(v=>viewBodies.get(v.path));
    for(const fn of functionNodes){
      const name=fn.id.name;
      const snippet=source.slice(fn.start,fn.end);
      if(ownedViews.some(view=>view.includes(snippet)))continue;
      if(!compound && mod.path.endsWith('/'+name+'.js'))continue;
      if(emitted.has(fn.start))continue;
      emitted.add(fn.start);
      const helper=`modules/helpers/${name}__webpack_${mod.webpackId}__at_${fn.start}.js`;
      if(published.has(helper))throw Error(`${bundle}: duplicate constructor view ${helper}`);
      published.add(helper);
      const code=`// Lexically nested helper class excerpt (not executable by itself).\n// Bundle: ${bundle}; Webpack module: ${mod.webpackId}; original: ${mod.path}\n${snippet}\n`;
      parse(code);
      await mkdir(dirname(join(directory,helper)),{recursive:true});
      await writeFile(join(directory,helper),code);
      views.push({name,path:helper,webpackId:mod.webpackId,ownerPath:mod.path,canonicalSha256:sha(code),helper:true,sourceStart:fn.start,sourceEnd:fn.end});
    }
  }
  // Views are never counted as Webpack modules, and never change the 1:1
  // mapping from captured Webpack IDs to original canonical source bytes.
  manifest.symbolViews=views;
  manifest.symbolViewCount=views.length;
  await writeFile(manifestFile,JSON.stringify(manifest,null,2)+'\n');
  index.push(bundleSummary(bundle,manifest,work,views));
}
await writeFile(join(root,'snapshots','symbol-separation-'+snapshotDate+'.json'),JSON.stringify({schemaVersion:1,sourceSnapshotDate:snapshotDate,bundles:index},null,2)+'\n');
console.log(JSON.stringify(index,null,2));
