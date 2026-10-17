// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 656
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_3e37cb6fc3c4a26f.js
// Original canonical SHA-256: 3b325be6cf5092208a83eecee924644d9e7b95cbe6e142e098566ad8b764aab1
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1007),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  reason: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 1000;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1 && __s9param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  currency1: __dep_exact_f5b02bbe07c08b29.Number,
  currency2: __dep_exact_f5b02bbe07c08b29.Number,
  wood: __dep_exact_f5b02bbe07c08b29.Number,
  stone: __dep_exact_f5b02bbe07c08b29.Number,
  coal: __dep_exact_f5b02bbe07c08b29.Number,
  oil: __dep_exact_f5b02bbe07c08b29.Number,
  glass: __dep_exact_f5b02bbe07c08b29.Number,
  aquamarine: __dep_exact_f5b02bbe07c08b29.Number,
  iron: __dep_exact_f5b02bbe07c08b29.Number,
  capitalCoins: __dep_exact_f5b02bbe07c08b29.Number,
  allianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= -1;
  }),
  otherAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= -1;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0 && __s17param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= -1 && __s19param0 <= 1000;
  })
}));
