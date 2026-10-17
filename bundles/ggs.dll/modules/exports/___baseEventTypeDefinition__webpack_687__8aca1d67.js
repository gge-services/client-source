// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 687
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_1dfdd1fe9f623a09.js
// Original canonical SHA-256: f253346fe0c93e8f867261d0941c0b9091d09661450b50520813914c7bfe6998
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(25),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  setLanguage: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s3param0) {
    return __s3param0.length <= 2;
  }),
  playerLanguage: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 5;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  email: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s7param0) {
    return __s7param0.length <= 255;
  })
}));
