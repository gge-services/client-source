// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 661
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_97059f540d47a11d.js
// Original canonical SHA-256: 871f3cadde5ace515987cd0466bcfc55860c05293ef4c847e9bf33c72749d990
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1014),
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
  }),
  unitLost: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0;
  }),
  unitSent: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
