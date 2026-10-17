// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 680
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_a8a7c619178d3437.js
// Original canonical SHA-256: 904d3c9564a60f0714694776d83ba17035d6f2feb5d2f1b888ce2813616ae650
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1036),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  starveHome: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  starveMove: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  unitId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
