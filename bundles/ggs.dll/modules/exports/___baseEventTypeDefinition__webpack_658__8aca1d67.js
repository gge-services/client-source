// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 658
// Export: ___baseEventTypeDefinition; preserved source: modules/webpack/internal/exact_972eca825fc9ccb9.js
// Original canonical SHA-256: 80c528210af244af1547cc2064a6949356321ec01b2ba9a5db5f72565e35c08d
exports.___baseEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1009),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s1param0) {
    return __s1param0 >= 0;
  }),
  kingdomId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s3param0) {
    return __s3param0 >= 0 && __s3param0 <= 1000;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  posX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s5param0) {
    return __s5param0 >= -1 && __s5param0 <= 10000;
  }),
  posY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s7param0) {
    return __s7param0 >= -1 && __s7param0 <= 10000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  reason: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s9param0) {
    return __s9param0 >= 0 && __s9param0 <= 100;
  })
}));
