// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 681
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_a0d013876de1040c.js
// Original canonical SHA-256: 318245a570453baf1da39e0905100f8da04e513f9963226281dcbb924e06b4fb
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1037),
  deltaAmount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  sourceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0 && __s5param0 <= 10000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1 && __s7param0 <= 10000;
  })
}));
