// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 665
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_5016046a035b2bee.js
// Original canonical SHA-256: e00fb9f8b5e7b59501a70f2af33296c5040beea7cc620cb5624a35d204ab5493
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1018),
  finishedDailyQuests: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s1param0) {
    return __s1param0.length <= 200;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  seenDailyQuests: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 200;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
