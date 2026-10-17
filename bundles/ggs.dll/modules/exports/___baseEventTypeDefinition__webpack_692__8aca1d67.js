// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 692
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_c1f643bf85195826.js
// Original canonical SHA-256: 44b4a4253accb43e4b1c504fe1d9366b7276719fcef9a9c3075c26738ecfeca9
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(8),
  partnerId: __dep_exact_f5b02bbe07c08b29.Number,
  creative: __dep_exact_f5b02bbe07c08b29.Number,
  lp: __dep_exact_f5b02bbe07c08b29.Number,
  aid: __dep_exact_f5b02bbe07c08b29.Number,
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s1param0) {
    return __s1param0.length <= 256;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 256;
  }),
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s7param0) {
    return __s7param0.length <= 100;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s9param0) {
    return __s9param0.length <= 150;
  }),
  network: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 1;
  }),
  cid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s13param0) {
    return __s13param0.length <= 25;
  }),
  tid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s15param0) {
    return __s15param0.length <= 25;
  }),
  camp: __dep_exact_f5b02bbe07c08b29.Number,
  adgr: __dep_exact_f5b02bbe07c08b29.Number,
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 1;
  }),
  journeyHash: __dep_exact_f5b02bbe07c08b29.Number
}));
