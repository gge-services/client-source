// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 694
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_1459f4642b7365c0.js
// Original canonical SHA-256: 2b5957da679d8df4d1e0b433b68532341b14b4d54f5c20637f8ea6cca385ece9
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(93),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  accountHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s3param0) {
    return __s3param0.length <= 32;
  }),
  customHash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 32;
  }),
  testId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1;
  }),
  caseId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= -1;
  }),
  countryCode: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 2;
  }),
  journeyStep: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  }),
  userAgent: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s15param0) {
    return __s15param0.length <= 250;
  }),
  source: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0;
  }),
  auto: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s19param0) {
    return /$false|true^/.test(__s19param0);
  }),
  milliseconds: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0;
  }),
  recurringUser: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0;
  }),
  w: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0;
  }),
  pid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= 0;
  }),
  creative: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0;
  }),
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s31param0) {
    return __s31param0.length <= 255;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s33param0) {
    return __s33param0.length <= 255;
  }),
  network: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s35param0) {
    return __s35param0.length <= 2;
  }),
  cid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s37param0) {
    return __s37param0.length <= 255;
  }),
  tid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s39param0) {
    return __s39param0.length <= 255;
  }),
  aid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 0;
  }),
  camp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0;
  }),
  adgr: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0;
  }),
  matchtype: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s47param0) {
    return __s47param0.length <= 1;
  }),
  gid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s49param0) {
    return __s49param0 >= 0;
  }),
  gclid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s51param0) {
    return __s51param0.length <= 100;
  }),
  yclid: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s53param0) {
    return __s53param0.length <= 20;
  }),
  nid: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s55param0) {
    return __s55param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  crna: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s57param0) {
    return __s57param0.length <= 100;
  }),
  registration_type_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s59param0) {
    return __s59param0 >= 1 && __s59param0 <= 10;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s61param0) {
    return __s61param0.length <= 255;
  }),
  tracking_link: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s63param0) {
    return __s63param0.length <= 2048;
  })
}));
