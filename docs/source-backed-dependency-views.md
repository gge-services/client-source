# Reconstructed TypeScript dependencies

The client-source Command compatibility compiler previously generated 515 temporary type-only declarations for imported game and DLL symbols. This pass replaces 23 of them with source-derived TypeScript class implementations. It does not turn the entire browser client into a standalone application.

The generator selects only unique canonical Game.bundle exports whose source SHA-256 agrees with the repository manifest, whose reconstruction has no remaining Game.bundle or DLL imports, and whose TypeScript 2.9 syntax check succeeds. It also scans all reconstructed Command consumers for static member usages. If a consumer references a static property absent from the reconstructed class, the candidate is excluded rather than fabricating that property. `CastleCheatData` is specifically rejected by this general proof rule because Commands require `cheatLoginName` but its declaration is absent from the verified class source.

Every accepted `.ts` file and its evidence record live in `bundles/Game.bundle/reconstructed/dependencies/`. The aggregate coverage report records 23 implemented class views and 492 still type-only imports. Thirteen generated classes depend on browser globals `createjs` or `CONSTRUCTOR_HACK` and are not independently runtime-ready. The other ten provide import-free TypeScript class implementations. The compatibility compiler imports the 23 concrete `.ts` files instead of producing `.d.ts` placeholders, while preserving the previous dependency provenance checks and the strict `runtimeReady=false` gate.

Representative original-versus-compiled JavaScript behavior tests cover constant arrays, static methods and utility functions. Other classes are only source-hash validated and TypeScript-compilable; their full behavior must not be assumed equivalent without additional runtime tests. The canonical original files remain unchanged.

From `tools/client-canonical`:

    npm run reconstruct
    npm test
    npm run typecheck:compat
    npm run verify

The generator is idempotent: a second reconstruction uses both the previous compile status and the previously published dependency-coverage provenance, so it never discards the 23 implementations merely because the new status has fewer type-only dependencies. The typecheck removes stale output `.ts` files for dependencies that are again represented by declarations, preventing cached compilation outputs from masquerading as implemented modules.
