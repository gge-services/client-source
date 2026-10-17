// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 696
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_d0fa8f58241b348c.js
// Original canonical SHA-256: 0b00c1780de7917c84e6e25876b96dcf67adee1779d1217b16477174d64459e1
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(97),
  sender_game_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1 && __s1param0 <= 100;
  }),
  sender_network_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1 && __s3param0 <= 1000;
  }),
  sender_instance_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 1 && __s5param0 <= 1000;
  }),
  sender_player_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  action: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s9param0) {
    return __s9param0.length <= 20;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  receiver_game_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0 && __s11param0 <= 100;
  }),
  receiver_network_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 1000;
  }),
  receiver_instance_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 1000;
  }),
  receiver_player_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0;
  }),
  refer_method: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s19param0) {
    return __s19param0.length <= 20;
  }),
  trigger: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s21param0) {
    return __s21param0.length <= 20;
  }),
  external_inviter_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s23param0) {
    return __s23param0.length <= 50;
  }),
  external_invited_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s25param0) {
    return __s25param0.length <= 50;
  }),
  sender_level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= 0;
  })
}));
