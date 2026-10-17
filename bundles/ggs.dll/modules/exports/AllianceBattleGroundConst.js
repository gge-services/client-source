// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: AllianceBattleGroundConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local1 = function () {
  function AllianceBattleGroundConst() {}
  AllianceBattleGroundConst.calculateAllianceTowerPointsToLoot = function (__s25param0, __s25param1, __s25param2, __s25param3) {
    if (__s25param2 === 0) {
      return __s25param0;
    } else {
      return (__s25param0 + __s25param1 * (Math.pow(2, __s25param2) | 0)) * __s25param3;
    }
  };
  AllianceBattleGroundConst.calculateEffectStrength = function (__s29param0, __s29param1, __s29param2) {
    return __s29param1 + __s29param2 * (__s29param0 - 1);
  };
  AllianceBattleGroundConst.calculateBuffCosts = function (__s31param0, __s31param1, __s31param2) {
    var __s31local0 = 0;
    for (var __s31local1 = __s31param0 + 1; __s31local1 <= __s31param1; ++__s31local1) {
      __s31local0 += __s31local1 <= 45 ? __s31local1 * __s31param2 : __s31param2 * 45 * Math.pow((__s31local1 - 41) / 100 + 1, __s31local1 - 45);
    }
    return __s31local0 = Math.round(__s31local0);
  };
  return AllianceBattleGroundConst;
}();
__s0local1.NORMAL_SERVER_EVENT_JOIN_LEVEL = 30;
__s0local1.HIGHSCORE_ALLIANCE_COLLECTOR = "AllianceCollector";
__s0local1.HIGHSCORE_ALLIANCE_TOWER = "AllianceTower";
__s0local1.MAX_CONQUERABLE_METROPOLIS = 5;
__s0local1.MAX_CONQUERABLE_KINGSTOWER = 5;
__s0local1.MAX_ALLOWED_TOWER_CONNECTED_PLAYERS = 5;
__s0local1.JOIN_PERIOD_DAYS = 2;
exports.AllianceBattleGroundConst = __s0local1;
__s0local1.__class = "AllianceBattleGroundConst";
