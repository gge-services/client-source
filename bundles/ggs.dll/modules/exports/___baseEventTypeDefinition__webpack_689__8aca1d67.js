// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 689
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_c5ed4d17fe04a73a.js
// Original canonical SHA-256: ca1e974cea1188fe2428a347b6832f06b1858548128345155bd8767ea491e789
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(41),
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s1param0) {
    return __s1param0.length <= 30;
  }),
  clientTimeZone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= -200 && __s3param0 <= 200;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0 && __s5param0 <= 50;
  }),
  websiteId: __dep_exact_f5b02bbe07c08b29.String,
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 50;
  }),
  clientCountryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s9param0) {
    return __s9param0.length <= 10;
  }),
  browserLang: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 15;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  partnerId: __dep_exact_f5b02bbe07c08b29.Number,
  creative: __dep_exact_f5b02bbe07c08b29.Number,
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s13param0) {
    return __s13param0.length <= 100;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s15param0) {
    return __s15param0.length <= 150;
  }),
  googleNetwork: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 1;
  }),
  lp: __dep_exact_f5b02bbe07c08b29.Number,
  cid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s19param0) {
    return __s19param0.length <= 25;
  }),
  tid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 25;
  }),
  aid: __dep_exact_f5b02bbe07c08b29.Number,
  camp: __dep_exact_f5b02bbe07c08b29.Number,
  adgr: __dep_exact_f5b02bbe07c08b29.Number,
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s23param0) {
    return __s23param0.length <= 1;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s25param0) {
    return __s25param0.length <= 100;
  }),
  geoIpRequestTime: __dep_exact_f5b02bbe07c08b29.Number,
  countryDetectionFactor: __dep_exact_f5b02bbe07c08b29.Number
}));
