# Persistent semantic naming without upstream source maps

The verified Webpack modules under bundles/*/modules/ remain immutable. Semantic naming creates an additional, explicitly non-executable readable view, never replacing an original file or changing its original SHA-256.

## Stable symbols, not minifier identifiers

Use the bundle and a verified public export/class identity as a primary module key. A numerical Webpack ID, variable name, line offset, scope counter, and source hash are not durable semantic identifiers. For ambiguous modules, match a strongly connected import/export graph neighborhood, stable property-access signatures and distinctive string literals. Transfer aliases only after the match is unique. Track confidence and all rejected candidates.

Use the public owner method path and argument position to identify a parameter. Identify a local variable by a validated AST initializer and data-flow role. For AALCommand.prototype.executeCommand, argument zero is switched against ERROR.ALL_OK, argument one carries JSON data at index 1, and the parsed-response local is identified by its JSON.parse initializer. Do not use __s9param0 or __s9local0 as mapping keys.

Match dependency variables using imported-binding usage: __extends, classImplementsInterfaces or ERROR. The import module ID and generated import variable can both change in the next build. Future versions should transfer the canonical graph identity and verify the API members again, rather than relying on a content-derived exact_* filename.

## Source of truth and reproducibility

The reviewed profiles are stored in mappings/semantic-names.json. Every generated readable view has a sibling evidence file with hashes of the input, accepted semantic mapping and rendered output. The prototype currently covers one real class; it does not claim reconstructed names for every module.

Run from the repository root:

    node tools/client-canonical/semantic-view.mjs bundles/Game.bundle/modules/exports/AALCommand.js tools/client-canonical/mappings/semantic-names.json Game.bundle:export_AALCommand bundles/Game.bundle/readable/exports/AALCommand.js

Run tests from tools/client-canonical using npm test.

The normalizer rejects ambiguous imported bindings, unexpected method arity and unmatched semantic-local initializers instead of quietly guessing names. Tests exercise mangled variable changes, shifted scope numbering, unmatched roles, preserved fields and reproducible hashes. An optional external validation has also succeeded on the original Webcrack outputs from 6 and 16 October 2026.

## Public and wire attributes

Never rewrite public property or wire-field spellings in the code, including OI, cmdId, ERROR.ALL_OK and C2S/S2C payload keys. They may be consumed via dynamic lookup or serialized literally. Store stable human-friendly interpretations separately as attributes with a semantic name, evidence and kind. Wiki, search or IDE tooling may display these labels while linking to the actual protocol field.

## Version-upgrade requirements

1. Verify official raw captures and all extracted module inventory against the manifest.
2. Match modules, exports and dependency graph edges using unambiguous stable identities.
3. Resolve re-export wrappers, including Game.bundle imports into ggs.dll, and mark ambiguous edges for manual review.
4. Transfer method/parameter aliases using qualified method names and positions. Transfer local aliases only with verified AST-use patterns.
5. Generate readable views; preserve original canonical source, exported names, protocol names and hashes.
6. Run AST parsing, original-source verification, collision detection, ambiguity checks and cross-version naming regression tests before publishing.
7. Review all previously unknown dynamic export patterns or require forms rather than ignoring them.

Without source maps, original author-chosen private identifiers usually cannot be recovered with certainty. The aim is deterministic, reviewed, meaningful names, not a claim to know the original variable spelling. The original Game.bundle and ggs.dll source-map URLs referenced by the October 16 snapshot currently respond with HTTP 403.
