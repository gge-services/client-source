// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 663
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_ac398b5e7c451d9d.js
// Original canonical SHA-256: 6fa11b40cabad44f30ac67873df511ce5f0ca8771eec7669ecbb9f8eecfcbc3f
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1016),
  count: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1 && __s1param0 <= 50;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  rarenessResult: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 1 && __s5param0 <= 50;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
