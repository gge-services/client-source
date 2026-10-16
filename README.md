# GGE Client Source

Individually versioned JavaScript modules reconstructed from the publicly served Goodgame Empire browser client. Separate from gge-services/data (structured game data) and gge-services/protocol (wiki and protocol reference).

The reconstruction is an audit view, not original TypeScript or executable production source. Official source-map references and immutable SHA-256 fingerprints are recorded, but private source maps are not required or claimed to be accessible.

## Layout

- bundles/Game.bundle/modules/exports/: uniquely exported classes and functions (e.g. CastleEffectEnum.js)
- bundles/*/modules/classes/: modules with stable class identities
- bundles/*/modules/packages/: third-party package/version metadata
- bundles/*/modules/internal/: exact-content fallback identities
- bundles/*/modules/opaque/: unidentified code, content-derived names, explicit review required
- bundles/*/bootstrap/entry.js: reconstructed webpack entrypoints
- bundles/*/manifest.json: path, webpack ID metadata, original hash, normalized hash, symbolic module map, source-map URL
- snapshots/*.json: immutable revision metadata and original client hashes
- tools/client-canonical/: downloader, Webcrack extraction, AST module matcher, canonicalizer, tests, verifier

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

6,850 published modules across five bundles. Verified normalized file hashes, unique module IDs, all resolvable symbolic imports and 100% raw SHA-256 linkage to the local current official snapshot. The 23 ggs.dll modules without reliable lineage are retained under opaque/ and expressly flagged.

The first snapshot is historically pinned to GGE Data commit 15cbbddc54f2b7c170c4ecda397968629916c9cc. Removing monoliths from the current GGE Data branch does NOT remove them from historical Git commits. The Protocol Wiki must migrate old source line citations before that Git history can be considered for separate rewriting.

Do not publish or merge as an authoritative wiki source while any unresolved-lineage module is incorrectly represented as semantically verified.
