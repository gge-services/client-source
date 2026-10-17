// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 684
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_99010f257a47c32a.js
// Original canonical SHA-256: 564e1b6faca4238021e62382c29d5f8d0630507074698f8727c12f2ebd2b0fb2
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(19),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  customHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s3param0) {
    return __s3param0.length <= 30;
  }),
  testId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0 && __s5param0 <= 65535;
  }),
  caseId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 16777215;
  }),
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s9param0) {
    return __s9param0.length <= 30;
  }),
  partnerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 65535;
  }),
  creativeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  crna: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s15param0) {
    return __s15param0.length <= 100;
  }),
  countryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 2;
  }),
  useragent: __dep_exact_f5b02bbe07c08b29.String,
  loginClickerCookie: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0 && __s19param0 <= 1;
  })
}));
