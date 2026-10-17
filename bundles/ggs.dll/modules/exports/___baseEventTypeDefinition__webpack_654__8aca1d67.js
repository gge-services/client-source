// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 654
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_0f1a6d5b3533a514.js
// Original canonical SHA-256: 73f79774cfa428c9f479751c2953d6bd389ba8aee6836ad52b99825d7875cbca
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1005),
  allianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  allianceName: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s3param0) {
    return __s3param0.length <= 80;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
