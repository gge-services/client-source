// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 676
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_4f34df73285267fb.js
// Original canonical SHA-256: 81c53bbe12e98e2cf30794a9fa6399079f654b48816cd01aae06999860542484
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1031),
  coal: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0;
  }),
  food: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0;
  }),
  glass: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0;
  }),
  iron: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0;
  }),
  oil: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= 0;
  }),
  stone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0;
  }),
  wood: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 0;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 1 && __s33param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= 0 && __s35param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s37param0) {
    return __s37param0 >= 0 && __s37param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= -1 && __s39param0 <= 1000;
  })
}));
