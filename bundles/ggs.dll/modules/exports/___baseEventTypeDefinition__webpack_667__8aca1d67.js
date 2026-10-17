// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 667
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_4a7fd344ab3b1ac9.js
// Original canonical SHA-256: ab464d795e16d6fe85cec7e1f35d3bceb7ffd2c5c8b6bdd12d15b7d8dfe17756
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1020),
  gameEventId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  status: __dep_exact_f5b02bbe07c08b29.Number
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
