# Goodgame Empire build reconstruction

The original TranspilationEmpire metadata is embedded in bundles/Game.bundle/modules/packages/TranspilationEmpire.js (version 1.170.22). Its declared origin is the internal, unlicensed repository Foundation-HTML5/TranspilationEmpire at source.services.ggs-net.com. Its recorded dependencies include @goodgamestudios/as3-to-ts ^0.46.0, TypeScript ^2.9.2 and Webpack ^4.16.1.

The official stages are AS3 under as3/src/code/flash/; as3-to-ts with --commonjs, --measure, and --symbolMap referring to the empire-createjs-assets LibrarySymbolMap.json; formatting/fixes to transpiled/; TypeScript compilation to compiled/; and DLL/client Webpack builds to dist/.

The exact Goodgame transpiler and symbol-map package return HTTP 404 on the public npm registry. The public as3-to-ts@0.3.3 names the ggsgamecore maintainer and points to GoodgameStudios/as3-to-ts, currently 404 through the public GitHub API. An independent public successor @as3web/as3-to-ts@0.3.10 is accessible on GitHub. Neither public predecessor proves the Goodgame 0.46 implementation. Source-map endpoints for the captured Game.bundle and ggs.dll returned 403.

## Implemented inverse stages

The graph generator builds persistent IDs for uniquely named public export/class modules, never trusting Webpack numbers or emitted content hashes as semantic identities. The 16 October snapshot has 6,850 modules, 6,575 stable semantic graph nodes, 275 unresolved semantic graph identities, and 50,799 referenced import edges. A compact JSONL graph keeps one node on each line to reduce future diff noise.

The ES5 AST transformer recognizes verified derived classes with delegating constructors, TypeScript __extends, prototype methods, configurable and enumerable accessor descriptors, inherited descriptor-setter dispatch and inherited method calls. It creates native class, extends, get, set, super and import syntax. Public import specifiers are mapped to named dependencies in the manifest rather than copied from hashed Webpack names.

The command reconstruction pass examines 701 named Command modules, restores 389 classes and rejects 312, of which 198 have unsupported/unresolved imports, 113 do not match the proven class shapes, and one has an unsupported inherited accessor. Every successful output has a SHA-256 evidence record and is parsed with TypeScript 2.9. Every rejected module remains available unchanged in canonical JavaScript and is included in the coverage report.

The resulting TypeScript is a readable reconstruction, not a complete original ActionScript or TypeScript source and not an executable drop-in replacement. Compiler optimizations, interface-registration runtime helpers, reflection and class initialization details can differ. Metadata explicitly records that full runtime equivalence has not been proved. Two real example commands are tested for equivalent observable behavior against ES2015 reconstruction, while all canonical JavaScript and source checksums remain unmodified.

The generated TypeScript itself contains no prototype method assignments, Object.defineProperty accessor shims or getOwnPropertyDescriptor calls. Wire fields, exported identifiers and externally visible API spellings are not renamed.

## Reproduction

Install pinned npm dependencies in tools/client-canonical, then from the repository root run:

    node tools/client-canonical/build-semantic-graph.mjs . graphs/2026-10-16.jsonl
    node tools/client-canonical/reconstruct-commands.mjs .
    node --test tools/client-canonical/reverse-ts-es5.test.mjs
    node tools/client-canonical/verify.mjs .

Future snapshots must repeat this process with hash verification, graph-identity matching, exact change audits, rejection review and behavior tests. Do not promote guesses about unknown symbols into verified identities.
