// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 675
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_e415912b2e1d6b25.js
// Original canonical SHA-256: e9aa33d7ee53b61e3ba624a85cbb2c42af33781cba45d75e888036670da3e957
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1030),
  gameEventId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  subTypeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= -1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  intervalSpent: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  lifetimeSpent: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  })
}));
