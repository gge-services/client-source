// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 678
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_a44c6ab7cb7ac985.js
// Original canonical SHA-256: bbc8125ed989225497507d4876e617b6ce2b5ab77833f012e9669fd67ae92884
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1033),
  areaType: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1 && __s1param0 <= 100;
  }),
  attackerLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  castleOwnerId: __dep_exact_f5b02bbe07c08b29.Number,
  defenderLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  succeeded: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0 && __s9param0 <= 1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
