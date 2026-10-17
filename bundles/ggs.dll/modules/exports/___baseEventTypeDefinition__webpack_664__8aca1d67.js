// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 664
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_4cf601c3be39afc5.js
// Original canonical SHA-256: 830c7e23bba0fd7f71cdb1cb6a91f731d7c856bf0784210d2b8cb553fb2f08e4
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1017),
  dungeonId: __dep_exact_f5b02bbe07c08b29.Number,
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  victory: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0 && __s3param0 <= 1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
