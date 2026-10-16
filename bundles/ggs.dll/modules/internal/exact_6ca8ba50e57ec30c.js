Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(2),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  conTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  roundTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  downloadrate: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  bluebox: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 1;
  }),
  delay: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  }),
  clientTimeZone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 100;
  }),
  accountHash: __dep_exact_f5b02bbe07c08b29.String,
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2)
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 50;
  }),
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0 && __s17param0 <= 50;
  }),
  connectionType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s19param0) {
    return __s19param0.length <= 10;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 100;
  }),
  partner_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0;
  }),
  creative_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0;
  }),
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 255;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s29param0) {
    return __s29param0.length <= 255;
  }),
  network: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s31param0) {
    return __s31param0.length <= 1;
  }),
  landing_page: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 0;
  }),
  channel_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s35param0) {
    return __s35param0.length <= 255;
  }),
  traffic_source_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s37param0) {
    return __s37param0.length <= 255;
  }),
  campaign_key: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0;
  }),
  adgroup_key: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 0;
  }),
  advertiser_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0;
  }),
  match_type: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s45param0) {
    return __s45param0.length <= 1;
  }),
  is_ip_v6: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= 0 && __s47param0 <= 1;
  })
}));
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(2),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  conTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s49param0) {
    return __s49param0 >= 0;
  }),
  roundTime: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s51param0) {
    return __s51param0 >= 0;
  }),
  downloadrate: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s53param0) {
    return __s53param0 >= 0;
  }),
  bluebox: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s55param0) {
    return __s55param0 >= 0 && __s55param0 <= 1;
  }),
  delay: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s57param0) {
    return __s57param0 >= 0;
  }),
  clientTimeZone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s59param0) {
    return __s59param0 >= 0 && __s59param0 <= 100;
  }),
  accountHash: __dep_exact_f5b02bbe07c08b29.String,
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Literal(2),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s61param0) {
    return __s61param0 >= 1 && __s61param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s63param0) {
    return __s63param0 >= 0 && __s63param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s65param0) {
    return __s65param0 >= 0 && __s65param0 <= 1000;
  }),
  lang: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s67param0) {
    return __s67param0.length <= 5;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s69param0) {
    return __s69param0 >= 0;
  }),
  deviceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s71param0) {
    return __s71param0 >= 0 && __s71param0 <= 50;
  }),
  storeId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s73param0) {
    return __s73param0 >= 0 && __s73param0 <= 50;
  }),
  connectionType: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s75param0) {
    return __s75param0.length <= 10;
  }),
  referrer: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s77param0) {
    return __s77param0.length <= 100;
  }),
  partner_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s79param0) {
    return __s79param0 >= 0;
  }),
  creative_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s81param0) {
    return __s81param0 >= 0;
  }),
  placement: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s83param0) {
    return __s83param0.length <= 255;
  }),
  keyword: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s85param0) {
    return __s85param0.length <= 255;
  }),
  network: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s87param0) {
    return __s87param0.length <= 1;
  }),
  landing_page: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s89param0) {
    return __s89param0 >= 0;
  }),
  channel_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s91param0) {
    return __s91param0.length <= 255;
  }),
  traffic_source_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s93param0) {
    return __s93param0.length <= 255;
  }),
  campaign_key: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s95param0) {
    return __s95param0 >= 0;
  }),
  adgroup_key: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s97param0) {
    return __s97param0 >= 0;
  }),
  advertiser_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s99param0) {
    return __s99param0 >= 0;
  }),
  match_type: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s101param0) {
    return __s101param0.length <= 1;
  }),
  is_ip_v6: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s103param0) {
    return __s103param0 >= 0 && __s103param0 <= 1;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s105param0) {
    return __s105param0 >= 0 && __s105param0 <= 1000;
  })
}));
exports.validateEvent = function (__s107param0) {
  return exports.___completeEventTypeDefinition.validate(__s107param0);
};
exports.ID = 2;
