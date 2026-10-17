// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 694
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_1459f4642b7365c0.js
// Original canonical SHA-256: 2b5957da679d8df4d1e0b433b68532341b14b4d54f5c20637f8ea6cca385ece9
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(93),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s65param0) {
    return __s65param0 >= 0;
  }),
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s67param0) {
    return __s67param0.length <= 32;
  }),
  customHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s69param0) {
    return __s69param0.length <= 32;
  }),
  testId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s71param0) {
    return __s71param0 >= -1;
  }),
  caseId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s73param0) {
    return __s73param0 >= -1;
  }),
  countryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s75param0) {
    return __s75param0.length <= 2;
  }),
  journeyStep: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s77param0) {
    return __s77param0 >= 0;
  }),
  userAgent: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s79param0) {
    return __s79param0.length <= 250;
  }),
  source: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s81param0) {
    return __s81param0 >= 0;
  }),
  auto: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s83param0) {
    return /$false|true^/.test(__s83param0);
  }),
  milliseconds: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s85param0) {
    return __s85param0 >= 0;
  }),
  recurringUser: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s87param0) {
    return __s87param0 >= 0;
  }),
  w: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s89param0) {
    return __s89param0 >= 0;
  }),
  pid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s91param0) {
    return __s91param0 >= 0;
  }),
  creative: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s93param0) {
    return __s93param0 >= 0;
  }),
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s95param0) {
    return __s95param0.length <= 255;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s97param0) {
    return __s97param0.length <= 255;
  }),
  network: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s99param0) {
    return __s99param0.length <= 2;
  }),
  cid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s101param0) {
    return __s101param0.length <= 255;
  }),
  tid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s103param0) {
    return __s103param0.length <= 255;
  }),
  aid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s105param0) {
    return __s105param0 >= 0;
  }),
  camp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s107param0) {
    return __s107param0 >= 0;
  }),
  adgr: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s109param0) {
    return __s109param0 >= 0;
  }),
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s111param0) {
    return __s111param0.length <= 1;
  }),
  gid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s113param0) {
    return __s113param0 >= 0;
  }),
  gclid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s115param0) {
    return __s115param0.length <= 100;
  }),
  yclid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s117param0) {
    return __s117param0.length <= 20;
  }),
  nid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s119param0) {
    return __s119param0 >= 0;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s121param0) {
    return __s121param0 >= 1 && __s121param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s123param0) {
    return __s123param0 >= 0 && __s123param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s125param0) {
    return __s125param0 >= 0 && __s125param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  crna: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s127param0) {
    return __s127param0.length <= 100;
  }),
  registration_type_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s129param0) {
    return __s129param0 >= 1 && __s129param0 <= 10;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s131param0) {
    return __s131param0.length <= 255;
  }),
  tracking_link: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s133param0) {
    return __s133param0.length <= 2048;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s135param0) {
    return __s135param0 >= 0 && __s135param0 <= 1000;
  })
}));
