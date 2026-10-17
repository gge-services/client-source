// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 657
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_4ede3c655d3bc009.js
// Original canonical SHA-256: 852b5f71a8005547b3d167b4012f691b03fbba4ce730ea9da850b6b6c8b37268
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1008),
  kingdomId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0 && __s1param0 <= 1000;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0;
  }),
  posX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= -1 && __s5param0 <= 10000;
  }),
  posY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1 && __s7param0 <= 10000;
  }),
  reset: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0 && __s9param0 <= 1;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  level: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= -1 && __s11param0 <= 10000;
  })
}));
