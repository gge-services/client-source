// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 673
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_6568faffcbcf25d3.js
// Original canonical SHA-256: 073b03cc223ba3feeaf985f841d7b814c7d37b275e8c0739688ccfab5b1eb792
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1028),
  gameEventId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  subTypeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= -1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  grantedRewards: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1;
  }),
  finishTime: __dep_exact_f5b02bbe07c08b29.Number
}));
