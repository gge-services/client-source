// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 669
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_c51b99d9b65737bc.js
// Original canonical SHA-256: b0a5613478c8384a4e8cd7f1efcf3c985c7c468a0289f1e1a8bb659e6e3f0690
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1023),
  endTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  pointsTotal: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
