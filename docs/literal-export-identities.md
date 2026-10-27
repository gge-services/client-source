# Literal export anchors

Three previously unnamed ggs.dll modules can be matched across the October 16 and October 25 official client revisions by a unique pair of exported constant name and string literal value: CREATEJS_UTILITIES_LOGGER, FPS_MEASUREMENT_LOGGER, and GLOBAL_LOGGER.

The parser recognizes top-level exports assignments and minifier-created comma expressions, not arbitrary nested writes. It demands a unique export name/value pair on both versions, a one-to-one mapping of baseline and live owners, and no conflicting source or destination IDs. The candidate's pinned source SHA-256 must match the immutable baseline file before the graph accepts its semantic identity.

The cross-revision evidence lives in graphs/2026-10-25-literal-identities.jsonl. The new Graph module identifiers are prefixed with ggs.dll:literal-export:. This does not establish that the complete implementation body is unchanged; only the unique export anchor is established.

This raises the graph's verified identity coverage from 6,621 to 6,624 of 6,850 modules, leaving 226 unresolved. The separate bidirectional-neighborhood heuristic yields 36 additional candidates but those are not promoted to verified identities.

The comparison requires the separate official raw DLL capture and is optional. Offline graph reproduction and GitHub CI depend on the committed identity evidence, not a network download.
