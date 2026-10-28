import {createHash} from 'node:crypto'

const hash=text=>createHash('sha256').update(text).digest('hex')

export function resolveCrossBundleAliases(entries){
  const known=new Map()
  for(const entry of entries.filter(x=>x.id)){
    const actual=hash(entry.source)
    if(actual!==entry.module.canonicalSha256)throw Error('Canonical source fingerprint mismatch: '+entry.module.path)
    if(!known.has(actual))known.set(actual,[])
    known.get(actual).push(entry)
  }
  const aliases=[]
  for(const entry of entries){
    if(entry.id)continue
    const actual=hash(entry.source)
    if(actual!==entry.module.canonicalSha256)throw Error('Unverified source checksum: '+entry.module.path)
    const owners=(known.get(actual)??[]).filter(x=>x.bundle!==entry.bundle)
    if(owners.length!==1)continue
    const original=owners[0]
    const id=entry.bundle+':exact-source-alias:'+original.id
    aliases.push({bundle:entry.bundle,id,path:entry.module.path,
      sourceSha256:actual,identityOwner:original.id,identityOwnerBundle:original.bundle,
      identityOwnerSource:original.module.path})
    entry.id=id
  }
  return aliases
}
