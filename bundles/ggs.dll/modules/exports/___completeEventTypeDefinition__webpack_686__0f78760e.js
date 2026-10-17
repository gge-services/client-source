// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 686
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_e0e41121cba988f2.js
// Original canonical SHA-256: 9c0ea6b04be868682f611a8553d55689d73e561c6bb182b619b3258db9f86e66
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(20),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0;
  }),
  customHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s23param0) {
    return __s23param0.length <= 30;
  }),
  testId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0 && __s25param0 <= 65535;
  }),
  caseId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= 0 && __s27param0 <= 16777215;
  }),
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s29param0) {
    return __s29param0.length <= 30;
  }),
  errorCode: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 0 && __s31param0 <= 2;
  }),
  partnerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 0 && __s33param0 <= 65535;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= 1 && __s35param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s37param0) {
    return __s37param0 >= 0 && __s37param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0 && __s39param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  registration_type_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 1 && __s41param0 <= 10;
  }),
  crna: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s43param0) {
    return __s43param0.length <= 100;
  }),
  countryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s45param0) {
    return __s45param0.length <= 2;
  }),
  useragent: __dep_exact_f5b02bbe07c08b29.String,
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= 0 && __s47param0 <= 1000;
  })
}));
