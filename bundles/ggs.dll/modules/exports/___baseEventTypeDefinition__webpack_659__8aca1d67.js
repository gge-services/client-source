// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 659
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_9c4df3b68d319e45.js
// Original canonical SHA-256: 70c57cc172b2c957854ec6f60274003fe60233f13a0f6c8c37ff4deb5bf882e0
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1010),
  oldPosX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1 && __s1param0 <= 10000;
  }),
  oldPosY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= -1 && __s3param0 <= 10000;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  posX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1 && __s7param0 <= 10000;
  }),
  posY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= -1 && __s9param0 <= 10000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  currency2: __dep_exact_f5b02bbe07c08b29.Number
}));
