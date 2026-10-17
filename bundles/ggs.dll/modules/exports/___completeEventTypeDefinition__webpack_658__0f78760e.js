// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 658
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_972eca825fc9ccb9.js
// Original canonical SHA-256: 80c528210af244af1547cc2064a6949356321ec01b2ba9a5db5f72565e35c08d
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1009),
  areaId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s11param0) {
    return __s11param0 >= 0;
  }),
  kingdomId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s13param0) {
    return __s13param0 >= 0 && __s13param0 <= 1000;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number,
  posX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s15param0) {
    return __s15param0 >= -1 && __s15param0 <= 10000;
  }),
  posY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s17param0) {
    return __s17param0 >= -1 && __s17param0 <= 10000;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s19param0) {
    return __s19param0 >= 1 && __s19param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  reason: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= 0 && __s21param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= 0 && __s23param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= 0 && __s25param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number
}));
