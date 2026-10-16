# GGE Client Canonical Diff Prototype

This is a local, deterministic, offline AST comparison tool. It never executes code extracted from the official client, calls an AI model, or uses an API service. NPM is used only to install pinned open-source parser, traversal, and generator dependencies.

## Pipeline

1. Retain the original official bundle and its SHA-256 as immutable evidence.
2. Unpack the bundle with Webcrack into a directory of numbered JavaScript modules.
3. Match adjacent versions through uniquely identifying named exports, class declarations, package names, and exact source hashes.
4. Rewrite matched numeric CommonJS imports to stable symbolic module references.
5. Use Babel scope analysis to canonicalize locally mangled identifiers without changing known exported identifiers, property names, string literals, or numeric literals.
6. Emit two stable source trees and a JSON report that distinguishes source changes, normalized changes, unmatched modules, unresolved imports, and parser errors.
7. Review uncertain module matches and dependency changes before generating source-evidence links or publishing the canonical tree.

## Reproduction

```bash
cd tools/client-canonical
npm ci --ignore-scripts
npm test
node compare.mjs /path/to/old/webcrack/Game.bundle /path/to/new/webcrack/Game.bundle /tmp/gge-diff-game
node compare.mjs /path/to/old/webcrack/ggs.dll /path/to/new/webcrack/ggs.dll /tmp/gge-diff-dll
node compare.mjs /path/to/old/webcrack/Game.bundle /path/to/new/webcrack/Game.bundle /tmp/unused --inventory-only
```

Outputs under the supplied directory are `old/`, `new/`, and `report.json`. The `--inventory-only` command performs module identification without AST rendering.

## Evidence and limitations

This prototype operates on Webcrack's extracted modules, not the original source code or source maps. The emitted source uses virtual `gge-module:` and `gge-unresolved:` specifiers and is an audit view, not a runnable replacement for the official client. It does not guarantee semantic equivalence or identify every third-party module correctly. An unresolved import placeholder prevents an upstream dependency change from incorrectly appearing as a change to the importer, but the report must still be reviewed for possible dependency retargeting.

Matching a uniquely named export is evidence of lineage, not proof of identical behavior. Missing matches are marked as unresolved, never automatically treated as added or removed implementations. A changed AST is not necessarily a changed computation. Added imports, declaration reordering, renaming of longer obfuscated identifiers, and unmatched dependency identities can still introduce cosmetic diffs.

The eventual production generator should require independent parser and AST confidence gates, a positive provenance mapping to immutable official-client archives, compatibility tests against the Protocol audit, and review of all unresolved symbol mappings before accepting the output as the authoritative wiki source.
