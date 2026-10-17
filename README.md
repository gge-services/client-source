# GGE Client Source

Individually versioned JavaScript modules reconstructed from the publicly served Goodgame Empire browser client. Separate from gge-services/data (structured game data) and gge-services/protocol (wiki and protocol reference).

The reconstruction is an audit view, not original TypeScript or executable production source. Official source-map references and immutable SHA-256 fingerprints are recorded, but private source maps are not required or claimed to be accessible.

## Layout

- bundles/*/modules/exports/: single-symbol audit views or single-export Webpack modules (e.g. AlchemistConst.js now only contains AlchemistConst)
- bundles/*/modules/webpack/: byte-for-byte original canonical Webpack modules that contain multiple exports; their original module IDs and dependency bindings are retained
- bundles/*/modules/helpers/: explicitly labeled, non-standalone lexical helper class excerpts, not independent Webpack modules
- bundles/*/modules/classes/: original Webpack modules with stable class identities
- bundles/*/modules/packages/: third-party package/version metadata
- bundles/*/modules/internal/: exact-content fallback identities
- bundles/*/modules/opaque/: unidentified code, content-derived names, explicit review required
- bundles/*/bootstrap/entry.js: reconstructed webpack entrypoints
- bundles/*/manifest.json: immutable Webpack ID mapping and source hashes, symbolic module views with statement-by-statement AST provenance, original source-map URL
- snapshots/*.json: immutable revision metadata and original client hashes
- tools/client-canonical/: downloader, Webcrack extraction, AST matcher, class-per-export view generator, complete source-to-view audit, tests, verifier

## Webpack modules versus classes (October 17 correction)

A Webpack module is **not** necessarily one class. The initial export-first filename selection incorrectly put 111 separate exports into `ggs.dll/modules/exports/AlchemistConst.js`. The correction places the real `AlchemistConst` audit view in that file; `AllianceConst`, `AllianceBattleGroundConst`, `ERROR`, and the other distinct symbols now have separate files. Index modules such as `AssetLoadingFlowType` are reexport aggregators rather than large class implementations. The full original canonical module is retained, unchanged and SHA-256 verified, at `modules/webpack/exports/AlchemistConst.js`. `manifest.json` continues to map original Webpack IDs and `gge-module:` specifiers to that original file; its `symbolViews` section maps class names to traceable excerpts.

The isolated class and helper views are **audit artifacts, not independently runnable JavaScript**. They preserve original top-level statements verbatim and may refer to identifiers defined elsewhere in the original module. Removing or arbitrarily copying these shared bindings would corrupt deobfuscated program semantics. The original module preserves those dependencies. The generator validates every AST view against the original statement spans and every module against its canonical digest; it does not claim to recover the game's original TypeScript module boundaries. 23 modules retain unresolved historical lineage, and single-file third-party/vendor runtimes retain their upstream packaging.

The `publish.mjs` pipeline now applies `refine-modules.mjs` automatically after extracting Webpack modules. `verify.mjs` invokes `audit-symbol-views.mjs` automatically. The regression tests cover class constructors exported through `new`, re-exports, and enum initialization; all 6,850 original modules plus every generated symbol view are checked before publication.

We intentionally avoid guessing business-domain folder names (combat, troops, events) from obfuscated files. Human-verified semantic classifications can be added as search metadata later without moving the stable module files.

## New client capture

Install Node 22. Run these commands from tools/client-canonical:

    npm ci --ignore-scripts
    npm test
    node fetch-client.mjs --output-root=/tmp/gge-capture-new
    node compare.mjs /path/old/unpacked/Game.bundle /tmp/gge-capture-new/unpacked/Game.bundle /tmp/compare-game
    node compare.mjs /path/old/unpacked/ggs.dll /tmp/gge-capture-new/unpacked/ggs.dll /tmp/compare-dll
    node publish.mjs ../.. /tmp/gge-capture-new/unpacked /path/old/unpacked /tmp/compare-game /tmp/compare-dll 2026-10-17
    node verify.mjs ../.. /tmp/gge-capture-new/unpacked

Captures use the public official game client, Node 22, and the free open-source Webcrack 2.16.0 CLI. Raw bundles and unpacking work folders remain outside Git. Commit only reviewed and deterministic named outputs. Generated source uses virtual gge-module imports for provenance and MUST NOT be run as the official client.

## Initial benchmark (October 6 to October 16, 2026)

6,850 Webpack source modules across five bundles. The October 17 refinement detects 118 compound Webpack modules and creates 1,290 named export views plus 190 labeled nested helper excerpts (1,480 extra JavaScript files). Verified normalized file hashes, unique module IDs, all resolvable symbolic imports and 100% raw SHA-256 linkage to the local current official snapshot. The 23 ggs.dll modules without reliable lineage are retained under opaque/ and expressly flagged.

The first snapshot is historically pinned to GGE Data commit 15cbbddc54f2b7c170c4ecda397968629916c9cc. Removing monoliths from the current GGE Data branch does NOT remove them from historical Git commits. The Protocol Wiki must migrate old source line citations before that Git history can be considered for separate rewriting.

Do not publish or merge as an authoritative wiki source while any unresolved-lineage module is incorrectly represented as semantically verified.
