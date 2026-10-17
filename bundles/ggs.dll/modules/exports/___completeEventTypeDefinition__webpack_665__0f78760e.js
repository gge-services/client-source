// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 665
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_5016046a035b2bee.js
// Original canonical SHA-256: e00fb9f8b5e7b59501a70f2af33296c5040beea7cc620cb5624a35d204ab5493
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1018),
  finishedDailyQuests: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s7param0) {
    return __s7param0.length <= 200;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  }),
  seenDailyQuests: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 200;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 1 && __s13param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0 && __s17param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= -1 && __s19param0 <= 1000;
  })
}));
