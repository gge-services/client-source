// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 692
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_c1f643bf85195826.js
// Original canonical SHA-256: 44b4a4253accb43e4b1c504fe1d9366b7276719fcef9a9c3075c26738ecfeca9
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(8),
  partnerId: __dep_exact_f5b02bbe07c08b29.Number,
  creative: __dep_exact_f5b02bbe07c08b29.Number,
  lp: __dep_exact_f5b02bbe07c08b29.Number,
  aid: __dep_exact_f5b02bbe07c08b29.Number,
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s19param0) {
    return __s19param0.length <= 256;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 1 && __s21param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0 && __s23param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0 && __s25param0 <= 1000;
  }),
  lang: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 5;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s31param0) {
    return __s31param0.length <= 256;
  }),
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s33param0) {
    return __s33param0.length <= 100;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s35param0) {
    return __s35param0.length <= 150;
  }),
  network: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s37param0) {
    return __s37param0.length <= 1;
  }),
  cid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s39param0) {
    return __s39param0.length <= 25;
  }),
  tid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s41param0) {
    return __s41param0.length <= 25;
  }),
  camp: __dep_exact_f5b02bbe07c08b29.Number,
  adgr: __dep_exact_f5b02bbe07c08b29.Number,
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s43param0) {
    return __s43param0.length <= 1;
  }),
  journeyHash: __dep_exact_f5b02bbe07c08b29.Number,
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0 && __s45param0 <= 1000;
  })
}));
