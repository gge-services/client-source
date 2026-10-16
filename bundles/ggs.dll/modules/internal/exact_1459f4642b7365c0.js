Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
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
exports.validateEvent = function (__s137param0) {
  return exports.___completeEventTypeDefinition.validate(__s137param0);
};
exports.ID = 93;
