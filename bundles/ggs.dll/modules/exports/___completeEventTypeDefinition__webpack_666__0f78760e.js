// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 666
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_95fc57309d8c929d.js
// Original canonical SHA-256: 533f7cdc03f840c17f4010056ba5da8eff530428a7325029679657ea0dd4c88b
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1019),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  }),
  buildingWod: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 1 && __s15param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  kingdomId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= -1 && __s17param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0 && __s19param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0 && __s21param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= -1 && __s23param0 <= 1000;
  })
}));
