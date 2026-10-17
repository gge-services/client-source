Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
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
exports.validateEvent = function (__s57param0) {
  return exports.___completeEventTypeDefinition.validate(__s57param0);
};
exports.ID = 97;
