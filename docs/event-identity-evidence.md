# Stable event module identities

The October 16 canonical ggs.dll snapshot contains 46 previously anonymous Webpack modules exporting a serialized event type definition. Each of those modules declares exactly one numeric eventId field using the event schema library's Literal constructor.

The October 25 official client capture contains exactly the same 46 unique numeric event IDs. The cross-revision AST matcher recovers each event module independently of its numerical Webpack ID or its minifier-generated variable names. Each matched record in graphs/2026-10-25-event-identities.jsonl contains the semantic identity, previous and current module numbers, the canonical file path, SHA-256 values for both source views, and both sets of serialized event definition fields.

The graph now uses stable identities of the form ggs.dll:event:1029 for these events. Across the inspected October 16 and October 25 captures, all 46 event schemas have identical base field names and validator operation paths. This shows no changes to those particular event-field inventories or operation names, not full parity of all constraint functions, nested semantics, or game logic.

Graph identities have increased from 6,575 to 6,621 verified nodes. There are 229 unresolved nodes, of which 37 have separate unique two-sided graph-context candidates. These candidates are not treated as proven stable identities.

The event comparison requires the official original bundled scripts in /tmp/gge-official-20261025-live/raw. It is intentionally a separate command, not an unconditional prerequisite for the offline graph rebuild or GitHub CI. The committed comparison artifact is audited against its canonical sources in tests; live revision fingerprints can be reproduced when those raw inputs are available.

The reconstructed TypeScript compatibility project is not a complete executable replacement for the browser client. This identity improvement does not remove the 13 unresolved Command constructors or 515 type-only dependencies.
