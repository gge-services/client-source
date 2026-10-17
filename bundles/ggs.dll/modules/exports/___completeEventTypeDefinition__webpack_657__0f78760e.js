// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 657
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_4ede3c655d3bc009.js
// Original canonical SHA-256: 852b5f71a8005547b3d167b4012f691b03fbba4ce730ea9da850b6b6c8b37268
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1008),
  kingdomId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 1000;
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
  reset: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0 && __s21param0 <= 1;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 1 && __s23param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= -1 && __s25param0 <= 10000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= 0 && __s27param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0 && __s29param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number
}));
