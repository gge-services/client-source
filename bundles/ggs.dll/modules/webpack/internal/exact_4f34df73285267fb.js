Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1031),
  coal: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  food: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  glass: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0;
  }),
  iron: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  }),
  oil: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0;
  }),
  stone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0;
  }),
  wood: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({}));
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1031),
  coal: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0;
  }),
  food: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0;
  }),
  glass: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0;
  }),
  iron: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0;
  }),
  oil: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= 0;
  }),
  stone: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= 0;
  }),
  wood: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= 0;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 1 && __s33param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= 0 && __s35param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s37param0) {
    return __s37param0 >= 0 && __s37param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= -1 && __s39param0 <= 1000;
  })
}));
exports.validateEvent = function (__s41param0) {
  return exports.___completeEventTypeDefinition.validate(__s41param0);
};
exports.ID = 1031;
