// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 660
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_cf55a35f2959dca0.js
// Original canonical SHA-256: a58f7ed195be2ad7bfdeb8ff39b7a50a654ac6e146d603b5629380f706daf643
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1013),
  areaId: __dep_exact_f5b02bbe07c08b29.Number,
  areaType: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= -1 && __s17param0 <= 1000;
  }),
  attackerAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= -2;
  }),
  attackerId: __dep_exact_f5b02bbe07c08b29.Number,
  battleLogId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 1;
  }),
  castleOwnerId: __dep_exact_f5b02bbe07c08b29.Number,
  defenderAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= -2;
  }),
  mapId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= -1 && __s25param0 <= 1000;
  }),
  outcome: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 40;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 1 && __s29param0 <= 100;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 1 && __s31param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  attackerLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= -1 && __s33param0 <= 10000;
  }),
  defenderLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= -1 && __s35param0 <= 10000;
  })
}));
