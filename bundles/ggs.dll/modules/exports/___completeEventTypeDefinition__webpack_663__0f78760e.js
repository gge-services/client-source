// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 663
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_ac398b5e7c451d9d.js
// Original canonical SHA-256: 6fa11b40cabad44f30ac67873df511ce5f0ca8771eec7669ecbb9f8eecfcbc3f
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1016),
  count: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 1 && __s7param0 <= 50;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  }),
  rarenessResult: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 1 && __s11param0 <= 50;
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
