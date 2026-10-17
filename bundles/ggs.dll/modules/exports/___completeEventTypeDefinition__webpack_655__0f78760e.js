// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 655
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_053fd28a413f5563.js
// Original canonical SHA-256: 26379a278c4c58818a919f7c16644283eea40d46a755eb85b41cdafb26d8ab21
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1006),
  leaderPosX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s21param0) {
    return __s21param0 >= -1 && __s21param0 <= 10000;
  }),
  leaderPosY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s23param0) {
    return __s23param0 >= -1 && __s23param0 <= 10000;
  }),
  newAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s25param0) {
    return __s25param0 >= -2;
  }),
  newAllianceRank: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s27param0) {
    return __s27param0 >= -1 && __s27param0 <= 100;
  }),
  oldAllianceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s29param0) {
    return __s29param0 >= -2;
  }),
  oldAllianceRank: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s31param0) {
    return __s31param0 >= -1 && __s31param0 <= 100;
  }),
  playerId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 0;
  }),
  posX: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= -1 && __s35param0 <= 10000;
  }),
  posY: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s37param0) {
    return __s37param0 >= -1 && __s37param0 <= 10000;
  }),
  status: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0 && __s39param0 <= 100;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 1 && __s41param0 <= 100;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0 && __s43param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0 && __s45param0 <= 1000;
  }),
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= -1 && __s47param0 <= 1000;
  })
}));
