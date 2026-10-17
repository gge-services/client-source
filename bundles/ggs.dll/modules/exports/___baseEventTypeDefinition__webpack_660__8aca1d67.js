// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 660
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_cf55a35f2959dca0.js
// Original canonical SHA-256: a58f7ed195be2ad7bfdeb8ff39b7a50a654ac6e146d603b5629380f706daf643
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1013),
  areaId: __dep_exact_f5b02bbe07c08b29.Number,
  areaType: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1 && __s1param0 <= 1000;
  }),
  attackerAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= -2;
  }),
  attackerId: __dep_exact_f5b02bbe07c08b29.Number,
  battleLogId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 1;
  }),
  castleOwnerId: __dep_exact_f5b02bbe07c08b29.Number,
  defenderAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -2;
  }),
  mapId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= -1 && __s9param0 <= 1000;
  }),
  outcome: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 40;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  attackerLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= -1 && __s13param0 <= 10000;
  }),
  defenderLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= -1 && __s15param0 <= 10000;
  })
}));
