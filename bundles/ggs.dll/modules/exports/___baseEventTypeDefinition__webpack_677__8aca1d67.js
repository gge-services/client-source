// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 677
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_46714262e3d456c5.js
// Original canonical SHA-256: d4719bc9ecc618ee5c71f4766d1982620e76d4a3bf0daefc1b8d58da92216905
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1032),
  amount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  packageId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  receiverPlayerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
