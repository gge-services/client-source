// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 688
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_93e13d6c92a04efb.js
// Original canonical SHA-256: 47f88dede14182658ffc91375ffb31b53287032ed02525c8c199ff1f0a893080
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(30),
  distributorId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  versionDate: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1230764400;
  }),
  websiteId: __dep_exact_f5b02bbe07c08b29.String,
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 32;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s7param0) {
    return __s7param0.length <= 255;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1 && __s9param0 <= 10;
  }),
  sub_partner_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0;
  })
}));
