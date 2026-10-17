// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 667
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_4a7fd344ab3b1ac9.js
// Original canonical SHA-256: ab464d795e16d6fe85cec7e1f35d3bceb7ffd2c5c8b6bdd12d15b7d8dfe17756
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1020),
  gameEventId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  status: __dep_exact_f5b02bbe07c08b29.Number,
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1 && __s9param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= -1 && __s15param0 <= 1000;
  })
}));
