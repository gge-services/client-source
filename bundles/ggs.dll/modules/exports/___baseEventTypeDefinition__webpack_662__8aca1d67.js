// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 662
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_0e4b05446ff4efc1.js
// Original canonical SHA-256: bb189a16e073a729245a64c99de2c65f8c316d336e1e6f479b915dc59b90a583
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1015),
  currency1: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  stone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  wood: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
