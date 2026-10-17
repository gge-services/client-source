// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 689
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_c5ed4d17fe04a73a.js
// Original canonical SHA-256: ca1e974cea1188fe2428a347b6832f06b1858548128345155bd8767ea491e789
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(41),
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 30;
  }),
  clientTimeZone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= -200 && __s29param0 <= 200;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 0 && __s31param0 <= 50;
  }),
  websiteId: __dep_exact_f5b02bbe07c08b29.String,
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 0 && __s33param0 <= 50;
  }),
  clientCountryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s35param0) {
    return __s35param0.length <= 10;
  }),
  browserLang: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s37param0) {
    return __s37param0.length <= 15;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 1 && __s39param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 0 && __s41param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0 && __s43param0 <= 1000;
  }),
  lang: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s45param0) {
    return __s45param0.length <= 5;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  partnerId: __dep_exact_f5b02bbe07c08b29.Number,
  creative: __dep_exact_f5b02bbe07c08b29.Number,
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s47param0) {
    return __s47param0.length <= 100;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s49param0) {
    return __s49param0.length <= 150;
  }),
  googleNetwork: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s51param0) {
    return __s51param0.length <= 1;
  }),
  lp: __dep_exact_f5b02bbe07c08b29.Number,
  cid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s53param0) {
    return __s53param0.length <= 25;
  }),
  tid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s55param0) {
    return __s55param0.length <= 25;
  }),
  aid: __dep_exact_f5b02bbe07c08b29.Number,
  camp: __dep_exact_f5b02bbe07c08b29.Number,
  adgr: __dep_exact_f5b02bbe07c08b29.Number,
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s57param0) {
    return __s57param0.length <= 1;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s59param0) {
    return __s59param0.length <= 100;
  }),
  geoIpRequestTime: __dep_exact_f5b02bbe07c08b29.Number,
  countryDetectionFactor: __dep_exact_f5b02bbe07c08b29.Number,
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s61param0) {
    return __s61param0 >= 0 && __s61param0 <= 1000;
  })
}));
