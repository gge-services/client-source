Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1007),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  reason: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0 && __s1param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  currency1: __dep_exact_f5b02bbe07c08b29.Number,
  currency2: __dep_exact_f5b02bbe07c08b29.Number,
  wood: __dep_exact_f5b02bbe07c08b29.Number,
  stone: __dep_exact_f5b02bbe07c08b29.Number,
  coal: __dep_exact_f5b02bbe07c08b29.Number,
  oil: __dep_exact_f5b02bbe07c08b29.Number,
  glass: __dep_exact_f5b02bbe07c08b29.Number,
  aquamarine: __dep_exact_f5b02bbe07c08b29.Number,
  iron: __dep_exact_f5b02bbe07c08b29.Number,
  capitalCoins: __dep_exact_f5b02bbe07c08b29.Number,
  allianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= -1;
  }),
  otherAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= -1;
  })
}));
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1007),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  reason: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0 && __s7param0 <= 1000;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 1 && __s9param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  currency1: __dep_exact_f5b02bbe07c08b29.Number,
  currency2: __dep_exact_f5b02bbe07c08b29.Number,
  wood: __dep_exact_f5b02bbe07c08b29.Number,
  stone: __dep_exact_f5b02bbe07c08b29.Number,
  coal: __dep_exact_f5b02bbe07c08b29.Number,
  oil: __dep_exact_f5b02bbe07c08b29.Number,
  glass: __dep_exact_f5b02bbe07c08b29.Number,
  aquamarine: __dep_exact_f5b02bbe07c08b29.Number,
  iron: __dep_exact_f5b02bbe07c08b29.Number,
  capitalCoins: __dep_exact_f5b02bbe07c08b29.Number,
  allianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= -1;
  }),
  otherAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= -1;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0 && __s15param0 <= 1000;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0 && __s17param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= -1 && __s19param0 <= 1000;
  })
}));
exports.validateEvent = function (__s21param0) {
  return exports.___completeEventTypeDefinition.validate(__s21param0);
};
exports.ID = 1007;
