// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 680
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_a8a7c619178d3437.js
// Original canonical SHA-256: 904d3c9564a60f0714694776d83ba17035d6f2feb5d2f1b888ce2813616ae650
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1036),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  starveHome: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0;
  }),
  starveMove: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  }),
  unitId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= -1;
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
  zoneId: __dep_exact_f5b02bbe07c08b29.Number
}));
