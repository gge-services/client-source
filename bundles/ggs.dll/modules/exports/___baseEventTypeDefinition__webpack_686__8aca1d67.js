// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 686
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_e0e41121cba988f2.js
// Original canonical SHA-256: 9c0ea6b04be868682f611a8553d55689d73e561c6bb182b619b3258db9f86e66
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(20),
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
  errorCode: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 2;
  }),
  partnerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 65535;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  registration_type_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 1 && __s15param0 <= 10;
  }),
  crna: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 100;
  }),
  countryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s19param0) {
    return __s19param0.length <= 2;
  }),
  useragent: __dep_exact_f5b02bbe07c08b29.String
}));
