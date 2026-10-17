// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 668
// Export: ___completeEventTypeDefinition; preserved source: modules/webpack/internal/exact_2fc42849381bb261.js
// Original canonical SHA-256: 71f40bcdcbf871a8ccc1f353539b4e10f8bf7b552f05445799e141308ad14f74
exports.___completeEventTypeDefinition = __dep_exact_f5b02bbe07c08b29.Record({
  eventId: __dep_exact_f5b02bbe07c08b29.Literal(1021),
  bluePlayerCampCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s33param0) {
    return __s33param0 >= 0;
  }),
  bluePlayerCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s35param0) {
    return __s35param0 >= 0;
  }),
  blueSpectatorCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s37param0) {
    return __s37param0 >= 0;
  }),
  blueVillageCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s39param0) {
    return __s39param0 >= 0;
  }),
  destroyedBlueTowers: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s41param0) {
    return __s41param0 >= 0;
  }),
  destroyedRedTowers: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s43param0) {
    return __s43param0 >= 0;
  }),
  destroyerOfBlueCap: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s45param0) {
    return __s45param0 >= 0;
  }),
  destroyerOfRedCap: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s47param0) {
    return __s47param0 >= 0;
  }),
  eventEndTimestamp: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s49param0) {
    return __s49param0 >= -1;
  }),
  lmsBlueStartDate: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s51param0) {
    return __s51param0 >= -1;
  }),
  lmsRedStartDate: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s53param0) {
    return __s53param0 >= -1;
  }),
  redPlayerCampCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s55param0) {
    return __s55param0 >= 0;
  }),
  redPlayerCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s57param0) {
    return __s57param0 >= 0;
  }),
  redSpectatorCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s59param0) {
    return __s59param0 >= 0;
  }),
  redVillageCount: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s61param0) {
    return __s61param0 >= 0;
  }),
  winningFaction: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s63param0) {
    return __s63param0 >= -1 && __s63param0 <= 1;
  }),
  gameId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s65param0) {
    return __s65param0 >= 1 && __s65param0 <= 100;
  }),
  instanceId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s67param0) {
    return __s67param0 >= 0 && __s67param0 <= 1000;
  }),
  networkId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s69param0) {
    return __s69param0 >= 0 && __s69param0 <= 1000;
  })
}).And(__dep_exact_f5b02bbe07c08b29.Partial({
  zoneId: __dep_exact_f5b02bbe07c08b29.Number.withConstraint(function (__s71param0) {
    return __s71param0 >= -1 && __s71param0 <= 1000;
  })
}));
