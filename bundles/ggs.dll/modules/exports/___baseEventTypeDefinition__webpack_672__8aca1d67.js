// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 672
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_0cb38b490184d165.js
// Original canonical SHA-256: 779481601234f0ea18ab3043421ab5f44cb7de30c88927a78d41cf3490055538
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1026),
  deltaAmount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0 && __s1param0 <= 100;
  }),
  minutes: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  newAmount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  sourceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= -1 && __s9param0 <= 10000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
