const unique=values=>[...new Set(values)].sort()
const proofKey=(incoming,outgoing)=>JSON.stringify([unique(incoming),unique(outgoing)])

export function applyVerifiedNeighborhoods(nodes,edges,entries,records){
  const unresolved=nodes.filter(x=>x.bundle==='ggs.dll'&&!x.id)
  const byPath=new Map(unresolved.map(x=>[x.path,x]))
  const entryByPath=new Map(entries.filter(x=>x.bundle==='ggs.dll').map(x=>[x.module.path,x]))
  const proofs=new Map()
  for(const node of unresolved){
    const incoming=edges.filter(x=>x.bundle==='ggs.dll'&&x.toSpecifier===node.specifier&&x.from).map(x=>x.from)
    const outgoing=edges.filter(x=>x.bundle==='ggs.dll'&&x.fromSpecifier===node.specifier&&x.to).map(x=>x.to)
    if(!incoming.length||!outgoing.length)continue
    const key=proofKey(incoming,outgoing)
    const group=proofs.get(key)??[]
    group.push(node.path)
    proofs.set(key,group)
  }
  const claimed=new Set(),knownIds=new Set(nodes.filter(x=>x.id).map(x=>x.id))
  for(const record of records){
    const node=byPath.get(record.sourcePath),source=entryByPath.get(record.sourcePath)
    if(record.bundle!=='ggs.dll'||!node||!source||claimed.has(record.sourcePath)||knownIds.has(record.semanticId)||
      node.sourceSha256!==record.canonicalSha256||
      String(source.module.webpackId)!==record.previousWebpackId||
      record.previousLiveFactorySha256!==record.currentLiveFactorySha256||
      !record.verifiedIdenticalLiveFactories)throw Error('Unverified cross-revision neighborhood: '+record.sourcePath)
    const key=proofKey(record.incomingAnchors,record.outgoingAnchors)
    if(proofs.get(key)?.length!==1||proofs.get(key)?.[0]!==record.sourcePath)
      throw Error('Graph neighborhood no longer uniquely identifies '+record.sourcePath)
    claimed.add(record.sourcePath)
    knownIds.add(record.semanticId)
    node.id=record.semanticId
    node.confidence='verified-three-revision-neighborhood'
  }
  const idsBySpec=new Map(nodes.map(x=>[x.bundle+'\0'+x.specifier,x.id]))
  for(const edge of edges){
    edge.from=idsBySpec.get(edge.bundle+'\0'+edge.fromSpecifier)??null
    edge.to=idsBySpec.get(edge.bundle+'\0'+edge.toSpecifier)??null
  }
  return claimed.size
}
