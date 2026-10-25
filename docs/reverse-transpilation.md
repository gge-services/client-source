# Goodgame Empire build reconstruction

The original TranspilationEmpire metadata is embedded in bundles/Game.bundle/modules/packages/TranspilationEmpire.js (version 1.170.22). Its declared origin is the internal, unlicensed repository Foundation-HTML5/TranspilationEmpire at source.services.ggs-net.com. Its recorded dependencies include @goodgamestudios/as3-to-ts ^0.46.0, TypeScript ^2.9.2 and Webpack ^4.16.1.

The official stages are AS3 under as3/src/code/flash/; as3-to-ts with --commonjs, --measure, and --symbolMap referring to the empire-createjs-assets LibrarySymbolMap.json; formatting/fixes to transpiled/; TypeScript compilation to compiled/; and DLL/client Webpack builds to dist/.

The exact Goodgame transpiler and symbol-map package return HTTP 404 on the public npm registry. The public as3-to-ts@0.3.3 names the ggsgamecore maintainer and points to GoodgameStudios/as3-to-ts, currently 404 through the public GitHub API. An independent public successor @as3web/as3-to-ts@0.3.10 is accessible on GitHub. Neither public predecessor proves the Goodgame 0.46 implementation. Source-map endpoints for the captured Game.bundle and ggs.dll returned 403.

## Implemented inverse stages

The graph generator builds persistent IDs for uniquely named public export/class modules, never trusting Webpack numbers or emitted content hashes as semantic identities. The 16 October snapshot has 6,850 modules, 6,575 stable semantic graph nodes, 275 unresolved semantic graph identities, and 50,799 referenced import edges. A compact JSONL graph keeps one node on each line to reduce future diff noise.

The ES5 AST transformer recognizes verified derived classes with delegating constructors, TypeScript __extends, prototype methods, configurable and enumerable accessor descriptors, inherited descriptor-setter dispatch and inherited method calls. It creates native class, extends, get, set, super and import syntax. Public import specifiers are mapped to named dependencies in the manifest rather than copied from hashed Webpack names.

The new resolver follows the actual Game.bundle DLL-loader call to its numbered ggs.dll owner, then checks the requested export name against a verified symbol view or explicit exported property. The stable graph documents 20,213 validated DLL member dependencies and one independently verified whole-module namespace dependency across 5,455 Game modules. No unknown DLL dependency edges are silently discarded. Graph edges use persistent named export identities, while version-specific numeric module IDs remain in the original manifests.

The Command reconstruction pass currently examines 701 named Commands and reconstructs 687 class views. Fourteen Commands remain unsupported because their original constructors mutate the receiver before calling the superclass, or because a non-direct inherited descriptor setter cannot yet be proven behavior-preserving. Source-derived logger bindings, closure helper functions, interface registrations, static initializers, static methods, static fields, and TypeScript 2.9-incompatible logical assignments are handled conservatively. Runtime comparison tests verify selected actual commands, including interface registration and static initialization order. Each accepted view records its original source hash and generated hash.

The wider read-only AST scan examines 5,763 canonical Game export modules, of which 2,114 can currently be represented by the basic reconstruction rules. These wider results are **audit candidates**, not a compiled full-client release. The rest include enums, factories, complex classes, and unverified syntax patterns. Unsupported sources remain byte-preserved rather than being silently replaced.

An isolated TypeScript 2.9 compatibility build verifies 515 imported dependencies against immutable canonical sources, but still needs temporary **type-only** declarations for them. It typechecks and emits all 687 reconstructed Command classes without diagnostics. These declarations are not executable implementations, and TypeScript output alone is not a working browser client. The strict full-reconstruction and runtime-ready gates are deliberately still failing.

A direct AST parser additionally inspected the real 25 October official raw bundles, avoiding Webcrack's slow unminifying transforms. The October 16 Game bundle contained 5,826 modules and the live Game bundle contains 5,827. There are 5,776 unique export-backed cross-version module correspondences; 173 of those module owners changed their Webpack index. The ggs.dll module count increased from 1,008 to 1,009, with 110 unique cross-version exported-owner correspondences, none moving index in that subset. The mapping rejects conflicting many-to-one or one-to-many identities; unanchored exports remain unproven. See graphs/2026-10-25-cross-version-summary.json and graphs/2026-10-25-verified-raw-exports.jsonl.

The graph-context identity resolver additionally proposes 37 two-sided unique candidates among 275 unresolved older nodes, but **does not call them verified across real client builds**. There are still 238 unresolved nodes, and 4 of the rejected candidates form repeated, indistinguishable graph contexts. A synthetic shuffled-ID regression test checks identity stability, not complete real-world semantic equivalence.

Both official October 25 sourceMappingURL endpoints point to S3 objects currently returning HTTP 403. Their existence does not make the original source maps publicly accessible.

The resulting TypeScript is a readable reconstruction, not a complete original ActionScript or TypeScript source and not an executable drop-in replacement. Compiler optimizations, interface-registration runtime helpers, reflection and class initialization details can differ. Metadata explicitly records that full runtime equivalence has not been proved. Selected real commands are tested for equivalent observable behavior against ES2015 reconstruction, while all canonical JavaScript and source checksums remain unmodified.

The generated TypeScript itself contains no prototype method assignments, Object.defineProperty accessor shims or getOwnPropertyDescriptor calls. Wire fields, exported identifiers and externally visible API spellings are not renamed.

## Reproduction

Install pinned npm dependencies in tools/client-canonical, then from the repository root run:

    node tools/client-canonical/build-semantic-graph.mjs . graphs/2026-10-16.jsonl
    node tools/client-canonical/audit-dll-edges.mjs . graphs/2026-10-16-dll-edges.jsonl
    node tools/client-canonical/resolve-graph-identities.mjs . graphs/2026-10-16-derived-identities.jsonl
    node tools/client-canonical/reconstruct-commands.mjs .
    node tools/client-canonical/audit-ts-project.mjs . /tmp/gge-client-ts-project-audit --emit
    node --test tools/client-canonical/reverse-ts-es5.test.mjs
    node tools/client-canonical/verify.mjs .
    node tools/client-canonical/audit-all-classes.mjs . /tmp/gge-client-all-class-audit.json
    node tools/client-canonical/fetch-client.mjs --output-root=/tmp/gge-client-current --no-unpack
    node tools/client-canonical/compare-official-raw.mjs . /tmp/gge-client-current /tmp/gge-client-version-compare.json

Future snapshots must repeat this process with hash verification, graph-identity matching, exact change audits, rejection review and behavior tests. Do not promote guesses about unknown symbols into verified identities.
