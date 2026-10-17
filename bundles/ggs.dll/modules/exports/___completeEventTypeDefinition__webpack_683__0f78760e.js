// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 683
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_d3f38989e9bc3028.js
// Original canonical SHA-256: 15e717462b1ca05587d509c9d8db5bc84a649caf0c0c518ff12e305c79d97388
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(18),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1;
  }),
  hasBeenGuest: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 1;
  }),
  timezone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 255;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 1 && __s15param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 1 && __s17param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 1 && __s19param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  distributorId: __dep_exact_f5b02bbe07c08b29.Number,
  partnerId: __dep_exact_f5b02bbe07c08b29.Number,
  creative: __dep_exact_f5b02bbe07c08b29.Number,
  accountHash: __dep_exact_f5b02bbe07c08b29.String,
  lp: __dep_exact_f5b02bbe07c08b29.Number,
  aid: __dep_exact_f5b02bbe07c08b29.Number,
  email: __dep_exact_f5b02bbe07c08b29.String,
  referrer: __dep_exact_f5b02bbe07c08b29.String,
  placement: __dep_exact_f5b02bbe07c08b29.String,
  keyword: __dep_exact_f5b02bbe07c08b29.String,
  googleNetwork: __dep_exact_f5b02bbe07c08b29.String,
  cid: __dep_exact_f5b02bbe07c08b29.String,
  tid: __dep_exact_f5b02bbe07c08b29.String,
  camp: __dep_exact_f5b02bbe07c08b29.Number,
  adgr: __dep_exact_f5b02bbe07c08b29.Number,
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 1;
  }),
  name: __dep_exact_f5b02bbe07c08b29.String,
  zoneId: __dep_exact_f5b02bbe07c08b29.Number,
  lang: __dep_exact_f5b02bbe07c08b29.String
}));
