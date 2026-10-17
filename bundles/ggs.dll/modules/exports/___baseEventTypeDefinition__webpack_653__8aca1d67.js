// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 653
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_d0eed4f5f528cc42.js
// Original canonical SHA-256: a2921da954b9e9e6c79d256d771f902e6d5b7f542ef5fd6effa25ab6e836914a
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1004),
  allianceId1: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  allianceId2: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1;
  }),
  newDiplomacy: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0 && __s5param0 <= 10;
  }),
  oldDiplomacy: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 10;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
