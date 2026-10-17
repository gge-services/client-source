// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 682
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_e7d5f35324136cb3.js
// Original canonical SHA-256: 18bf8d797cec92fe2280f08c5d68bd77fc149ea690ef491aa51202092567f112
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
