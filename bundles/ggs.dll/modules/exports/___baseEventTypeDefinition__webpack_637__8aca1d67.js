// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 637
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_72174832d62c9145.js
// Original canonical SHA-256: 3e1c8a192ea0551cd34362c82fbb1176b645b48cba5e6210f8eedc789e22f963
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1003),
  allianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  autoCreated: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0 && __s3param0 <= 1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  allianceName: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s7param0) {
    return __s7param0.length <= 80;
  })
}));
