Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(142),
  account_hash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s1param0) {
    return __s1param0.length <= 32;
  }),
  client_language_code: __dep_exact_f5b02bbe07c08b29.String,
  client_version: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s3param0) {
    return __s3param0.length <= 90;
  }),
  device_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0 && __s5param0 <= 50;
  }),
  device_language_code: __dep_exact_f5b02bbe07c08b29.String,
  gamestate_count_session: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 1;
  }),
  gamestate_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s9param0) {
    return __s9param0.length <= 60;
  }),
  platform_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 10;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= -1;
  }),
  session_count: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0;
  }),
  session_length_ms: __dep_exact_f5b02bbe07c08b29.Number,
  session_type_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 30;
  }),
  is_html5: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0 && __s19param0 <= 1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  connection_type_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 20;
  }),
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 1 && __s25param0 <= 10;
  }),
  install_source_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 30;
  }),
  ip_long: __dep_exact_f5b02bbe07c08b29.Number,
  media_partner_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0;
  }),
  referrer_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s31param0) {
    return __s31param0.length <= 100;
  }),
  website_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 0;
  })
}));
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(142),
  account_hash: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s35param0) {
    return __s35param0.length <= 32;
  }),
  client_language_code: __dep_exact_f5b02bbe07c08b29.String,
  client_version: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s37param0) {
    return __s37param0.length <= 90;
  }),
  device_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0 && __s39param0 <= 50;
  }),
  device_language_code: __dep_exact_f5b02bbe07c08b29.String,
  gamestate_count_session: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 1;
  }),
  gamestate_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s43param0) {
    return __s43param0.length <= 60;
  }),
  platform_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0 && __s45param0 <= 10;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= -1;
  }),
  session_count: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s49param0) {
    return __s49param0 >= 0;
  }),
  session_length_ms: __dep_exact_f5b02bbe07c08b29.Number,
  session_type_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s51param0) {
    return __s51param0.length <= 30;
  }),
  is_html5: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s53param0) {
    return __s53param0 >= 0 && __s53param0 <= 1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  connection_type_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s55param0) {
    return __s55param0.length <= 20;
  }),
  client_timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s57param0) {
    return __s57param0 >= 0;
  }),
  event_mapping_version: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s59param0) {
    return __s59param0 >= 1 && __s59param0 <= 10;
  }),
  install_source_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s61param0) {
    return __s61param0.length <= 30;
  }),
  ip_long: __dep_exact_f5b02bbe07c08b29.Number,
  media_partner_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s63param0) {
    return __s63param0 >= 0;
  }),
  referrer_name: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s65param0) {
    return __s65param0.length <= 100;
  }),
  website_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s67param0) {
    return __s67param0 >= 0;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s69param0) {
    return __s69param0 >= 1 && __s69param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s71param0) {
    return __s71param0 >= -10 && __s71param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s73param0) {
    return __s73param0 >= 0 && __s73param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s75param0) {
    return __s75param0 >= -1 && __s75param0 <= 1000;
  })
}));
exports.validateEvent = function (__s77param0) {
  return exports.___completeEventTypeDefinition.validate(__s77param0);
};
exports.ID = 142;
