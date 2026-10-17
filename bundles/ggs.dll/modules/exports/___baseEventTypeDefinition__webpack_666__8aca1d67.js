// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 666
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_95fc57309d8c929d.js
// Original canonical SHA-256: 533f7cdc03f840c17f4010056ba5da8eff530428a7325029679657ea0dd4c88b
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1019),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  buildingWod: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  kingdomId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1 && __s7param0 <= 1000;
  })
}));
