# Cross-revision Command method signatures

The October 16 official Game.bundle canonical snapshot and the separately captured October 25 official Game.bundle were compared with a method-signature parser. This audit uses the previously verified, uniquely named cross-revision Webpack export owners from the existing export ledger, never raw Webpack ID equality.

All 688 reconstructed Command classes have verified matching export owners in both revisions. Across these classes, all 2,075 declared methods, getters, setters and static methods have unchanged names, roles and declared parameter counts. All 688 observed original constructors have unchanged declared arity. No Command is missing from this identity comparison.

The complete source-backed evidence is stored in graphs/2026-10-25-command-abi.jsonl, with totals in graphs/2026-10-25-command-abi.summary.json. Each entry gives the stable public class name, old and current module indices, original canonical source SHA-256, current raw factory SHA-256, and both extracted method signatures. The canonical portion is checked in CI without downloading the official bundle.

The comparison deliberately does not claim that method bodies are identical. It does not prove parity of data flow, default parameter values, emitted network payloads, game rules, side effects, or runtime initialization. Matching method arity allows semantic parameter labels to be assigned to stable method positions across builds, but does not recover the original TypeScript identifier spelling.

The parameter naming audit for the current reconstructed Commands contains 1,851 parameter positions, of which 1,619 have usable names and 232 remain position-only placeholders. The separate parameter-role detector contributed 304 additional high-confidence roles. Constructor behavior for 13 unsupported Command classes remains unproven, and the compatibility build still uses 515 type-only dependency declarations.

To reproduce a real revision comparison, capture the official Game.bundle and ggs.dll scripts and run npm run abi:compare in tools/client-canonical. The regular npm test command checks the pinned canonical evidence and exercises the comparison against a real capture when the inputs exist.
