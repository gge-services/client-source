// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 670
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_1f97e1246525171a.js
// Original canonical SHA-256: 9b76ae1f500317c7b129c9b6b31e8143f6167c0d017deef3db83435382d3f648
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1024),
  grantedRewards: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s1param0) {
    return __s1param0.length <= 255;
  }),
  luckyWheelTickets: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0 && __s3param0 <= 1000;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  winningClassProgress: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
