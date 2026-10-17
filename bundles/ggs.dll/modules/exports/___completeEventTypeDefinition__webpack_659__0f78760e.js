// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 659
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_9c4df3b68d319e45.js
// Original canonical SHA-256: 70c57cc172b2c957854ec6f60274003fe60233f13a0f6c8c37ff4deb5bf882e0
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1010),
  oldPosX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= -1 && __s11param0 <= 10000;
  }),
  oldPosY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= -1 && __s13param0 <= 10000;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0;
  }),
  posX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= -1 && __s17param0 <= 10000;
  }),
  posY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= -1 && __s19param0 <= 10000;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 1 && __s21param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  currency2: __dep_exact_f5b02bbe07c08b29.Number,
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0 && __s23param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0 && __s25param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= -1 && __s27param0 <= 1000;
  })
}));
