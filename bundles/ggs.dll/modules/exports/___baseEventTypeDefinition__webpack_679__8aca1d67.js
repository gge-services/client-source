// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 679
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_cac4548524a459c8.js
// Original canonical SHA-256: 86b55d78467160f12389413a6c1c18f094e9d25b62b1d69795a6d5e19d4aa4c0
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1035),
  amount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  unitId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
