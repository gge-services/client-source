// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 687
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_1dfdd1fe9f623a09.js
// Original canonical SHA-256: f253346fe0c93e8f867261d0941c0b9091d09661450b50520813914c7bfe6998
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(25),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1;
  }),
  setLanguage: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 2;
  }),
  playerLanguage: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s13param0) {
    return __s13param0.length <= 5;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 1 && __s15param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 1 && __s17param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 1 && __s19param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  email: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 255;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0;
  })
}));
