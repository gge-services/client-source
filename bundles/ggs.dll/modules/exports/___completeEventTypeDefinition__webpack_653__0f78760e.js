// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 653
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_d0eed4f5f528cc42.js
// Original canonical SHA-256: a2921da954b9e9e6c79d256d771f902e6d5b7f542ef5fd6effa25ab6e836914a
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1004),
  allianceId1: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1;
  }),
  allianceId2: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 1;
  }),
  newDiplomacy: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 10;
  }),
  oldDiplomacy: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 10;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 1 && __s17param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0 && __s19param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0 && __s21param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= -1 && __s23param0 <= 1000;
  })
}));
