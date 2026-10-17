// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 697
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_c248bf40b4b4e70d.js
// Original canonical SHA-256: c855d7a8bdbdb2d9fa89c73d4e2359351e8919676583c62c004d8d666eb2c9ea
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(98),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 1;
  }),
  timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= 1;
  }),
  facebook_connection_state: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s17param0) {
    return __s17param0.length <= 20;
  }),
  game_level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 0;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 1 && __s21param0 <= 100;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 1 && __s23param0 <= 200;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 1 && __s25param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  user_external_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s27param0) {
    return __s27param0.length <= 100;
  }),
  facebook_business_token: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s29param0) {
    return __s29param0.length <= 100;
  })
}));
