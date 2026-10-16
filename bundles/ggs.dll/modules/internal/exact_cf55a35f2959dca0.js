Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1013),
  areaId: __dep_exact_f5b02bbe07c08b29.Number,
  areaType: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1 && __s1param0 <= 1000;
  }),
  attackerAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= -2;
  }),
  attackerId: __dep_exact_f5b02bbe07c08b29.Number,
  battleLogId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 1;
  }),
  castleOwnerId: __dep_exact_f5b02bbe07c08b29.Number,
  defenderAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -2;
  }),
  mapId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= -1 && __s9param0 <= 1000;
  }),
  outcome: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 40;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  attackerLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= -1 && __s13param0 <= 10000;
  }),
  defenderLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= -1 && __s15param0 <= 10000;
  })
}));
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1013),
  areaId: __dep_exact_f5b02bbe07c08b29.Number,
  areaType: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= -1 && __s17param0 <= 1000;
  }),
  attackerAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= -2;
  }),
  attackerId: __dep_exact_f5b02bbe07c08b29.Number,
  battleLogId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 1;
  }),
  castleOwnerId: __dep_exact_f5b02bbe07c08b29.Number,
  defenderAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= -2;
  }),
  mapId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= -1 && __s25param0 <= 1000;
  }),
  outcome: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 40;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 1 && __s29param0 <= 100;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 1 && __s31param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  attackerLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= -1 && __s33param0 <= 10000;
  }),
  defenderLevel: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= -1 && __s35param0 <= 10000;
  })
}));
exports.validateEvent = function (__s37param0) {
  return exports.___completeEventTypeDefinition.validate(__s37param0);
};
exports.ID = 1013;
