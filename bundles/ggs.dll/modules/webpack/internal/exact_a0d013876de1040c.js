Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f5b02bbe07c08b29 = require("gge-module:exact_f5b02bbe07c08b29");
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1037),
  deltaAmount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= -1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  sourceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= 0 && __s5param0 <= 10000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1 && __s7param0 <= 10000;
  })
}));
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1037),
  deltaAmount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= -1;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0;
  }),
  sourceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 10000;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 1 && __s15param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= 0 && __s17param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0 && __s19param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= -1 && __s21param0 <= 10000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= -1 && __s23param0 <= 1000;
  })
}));
exports.validateEvent = function (__s25param0) {
  return exports.___completeEventTypeDefinition.validate(__s25param0);
};
exports.ID = 1037;
