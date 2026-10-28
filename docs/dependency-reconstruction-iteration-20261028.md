# Source-backed dependency reconstruction: transitive imports

This iteration expands the Game.bundle Command-compatible TypeScript project from 23 to 78 actual source-derived class implementations without changing any of the 6,850 canonical Webpack source modules. The generator accepts a class only when its unique source is SHA-256 verified, its ES5 class shape is recognized, all referenced dependencies have verified canonical source ownership, and its generated TypeScript can be emitted. It does not convert unrecognized source into empty stub classes.

Every new class source and dependency owner is preserved in bundles/Game.bundle/reconstructed/dependencies. The canonical generator independently proves assignment-backed instance and static property declarations for types that were present as JavaScript own properties but had no TS declarations. These declarations have no initializers, and an original-versus-reconstructed TS emission check confirms they do not change the generated JavaScript. Unknown static members remain rejected, including CastleCheatData.cheatLoginName.

A direct import graph alone hid dependencies of the previously type-only modules. This compiler now resolves and source-verifies their imports recursively for the 78 implemented classes, retaining a type-only placeholder if the referenced dependency is not yet reconstructed. The compiler has zero diagnostics in TypeScript 2.9 and distinguishes:

- 688 reconstructed Commands; 13 unsupported original constructor semantics
- 78 source-backed TypeScript dependency class implementations (55 more than before)
- 437 direct type-only imports from Commands, down from 492
- 261 additional transitive type-only imports required by the newly implemented classes
- 698 unresolved type-only module imports in total

A zero-diagnostic compiler build is not a runtime-ready client. Several generated classes require createjs, CONSTRUCTOR_HACK, or Library browser globals. Classes with further imports cannot run without their real implementations. The compatibility globals are compile-time declarations only, not runtime shims.

npm run reconstruct, npm test, npm run typecheck:compat, and npm run verify reproduce the canonical reconstruction. The runtime equivalence tests currently cover representative original JavaScript constants/utilities and AST-preserved field declarations, not all 78 classes end to end. Full source closure, runtime orchestration, and the 13 pre-super constructor shapes remain open.
