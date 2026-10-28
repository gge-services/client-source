# Official raw client revision diff: 25 October to 27 October 2026

The official October 25 and October 27 Game.bundle and ggs.dll scripts were separately captured from Goodgame Empire's live HTML5 distribution. Each capture has its original asset version, SHA-256 and byte length in capture.json. The capture inputs remain outside Git; the small deterministic evidence report is tracked in graphs/2026-10-25-to-2026-10-27-rawdiff.json.

The raw Game.bundle module array has 5,827 present factories. Exactly 5,825 factories are byte-identical and two differ. Both differences are restricted to the exported package metadata objects:

- empire-createjs-assets version changed from 1.2.1412 to 1.2.1423, and its resolutions metadata added encoding 0.1.13.
- TranspilationEmpire version changed from 1.171.8 to 1.171.9.

The raw ggs.dll module array has 1,009 present factories. Exactly 990 factories are byte-identical and 19 differ. Of these differences, 18 disappear entirely after AST scope-binding alpha-renaming without modifying property names. The remaining difference is the asset catalog factory. Its non-asset AST body is identical after removing only literal assignments to this.assets and then normalizing scope bindings. Its catalog increased from 8,159 to 8,230 distinct keys, with 71 added names, 8 modified value sequences, and no removed names. Duplicate property assignments are retained and compared as ordered value sequences rather than silently collapsed. The original assignment counts are 8,162 and 8,233.

The pipeline has negative tests for executable expression changes, accessor changes, non-literal assets, direct eval, and unsupported Webpack wrappers. It does not use fuzzy text similarity, infer original parameter spelling, or pretend to prove semantic parity when it cannot do so. If the module array lengths differ or fewer than 95 percent of the present factories remain exactly identical at the same index, the raw comparison fails instead of reusing module numbers as identity. A separate stable export and graph matcher is required for a significantly reorganized release.

The current comparison proves that the changed executable AST outside the catalog and metadata is identical under the tested binding renaming rules. It does not prove all possible browser runtime effects are equivalent, nor does it establish an entirely executable TypeScript client. At the time of this raw diff, 688 of 701 Commands were reconstructed. The newer October 28 reconstruction covers 701 of 701 Command shapes but still contains type-only dependencies and 219 unresolved semantic graph identities; it is not an executable standalone client.

To regenerate the report, fetch two official client snapshots into separate isolated directories and run from tools/client-canonical:

    node compare-raw-revisions.mjs /tmp/gge-official-20261025-live /tmp/gge-official-20261027-rawdiff ../../graphs/2026-10-25-to-2026-10-27-rawdiff.json

The test suite verifies the committed result and can additionally re-run the raw comparison when both captures exist on the host. CI uses only the committed artifact and synthetic regression fixtures, so it does not need to fetch 20 MB of proprietary original bundles or commit them.
