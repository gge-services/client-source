# Byte-identical modules in separate official bundles

The October 16 canonical CacheBreaker.bundle snapshot contains two module files with package metadata identical byte-for-byte to already named Game.bundle modules: TranspilationEmpire and @goodgamestudios/empire-createjs-assets. Each has the same original-source SHA-256 as exactly one named source in another bundle.

The graph resolver now assigns these exact-source duplicates stable identities anchored to their named Game.bundle owners, for example CacheBreaker.bundle:exact-source-alias:Game.bundle:package:TranspilationEmpire. This does not claim that all future builds have identical bytes. On a new revision, both source modules must still match exactly to recover this identity; if the source changes or the reference becomes ambiguous, matching fails closed instead of using an obsolete Webpack index.

This resolves two more graph nodes: 6,626 verified identities, 224 still unresolved. Thirty-six other graph-context candidates are not promoted to verified identities. Source SHA-256 equality establishes identical checked-in module text and canonical export provenance, not full browser runtime parity.
