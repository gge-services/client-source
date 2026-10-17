// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 697
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_c248bf40b4b4e70d.js
// Original canonical SHA-256: c855d7a8bdbdb2d9fa89c73d4e2359351e8919676583c62c004d8d666eb2c9ea
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(98),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 1;
  }),
  timestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 1;
  }),
  facebook_connection_state: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s5param0) {
    return __s5param0.length <= 20;
  }),
  game_level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= 0;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  user_external_id: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s9param0) {
    return __s9param0.length <= 100;
  }),
  facebook_business_token: __dep_exact_f5b02bbe07c08b29.String.withConstraint(function (__s11param0) {
    return __s11param0.length <= 100;
  })
}));
