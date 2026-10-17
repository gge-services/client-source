// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 696
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_d0fa8f58241b348c.js
// Original canonical SHA-256: 0b00c1780de7917c84e6e25876b96dcf67adee1779d1217b16477174d64459e1
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(97),
  sender_game_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 1 && __s29param0 <= 100;
  }),
  sender_network_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 1 && __s31param0 <= 1000;
  }),
  sender_instance_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 1 && __s33param0 <= 1000;
  }),
  sender_player_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= 0;
  }),
  action: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s37param0) {
    return __s37param0.length <= 20;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  receiver_game_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0 && __s39param0 <= 100;
  }),
  receiver_network_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 0 && __s41param0 <= 1000;
  }),
  receiver_instance_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0 && __s43param0 <= 1000;
  }),
  receiver_player_id: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0;
  }),
  refer_method: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s47param0) {
    return __s47param0.length <= 20;
  }),
  trigger: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s49param0) {
    return __s49param0.length <= 20;
  }),
  external_inviter_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s51param0) {
    return __s51param0.length <= 50;
  }),
  external_invited_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s53param0) {
    return __s53param0.length <= 50;
  }),
  sender_level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s55param0) {
    return __s55param0 >= 0;
  })
}));
