// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: SpyConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local80 = function () {
  function SpyConst() {}
  SpyConst.SPY_VALIDITY_$LI$ = function () {
    if (SpyConst.SPY_VALIDITY == null) {
      SpyConst.SPY_VALIDITY = 172800;
    }
    return SpyConst.SPY_VALIDITY;
  };
  SpyConst.MAX_SABOTAGE_COOLDOWN_$LI$ = function () {
    if (SpyConst.MAX_SABOTAGE_COOLDOWN == null) {
      SpyConst.MAX_SABOTAGE_COOLDOWN = 43200;
    }
    return SpyConst.MAX_SABOTAGE_COOLDOWN;
  };
  SpyConst.SABOTAGE_PROTECTION_WINDOW_$LI$ = function () {
    if (SpyConst.SABOTAGE_PROTECTION_WINDOW == null) {
      SpyConst.SABOTAGE_PROTECTION_WINDOW = 345600;
    }
    return SpyConst.SABOTAGE_PROTECTION_WINDOW;
  };
  SpyConst.getRatioGuardSpy = function () {
    return SpyConst.MAX_GUARD / SpyConst.MAX_SPY;
  };
  SpyConst.getRatioAccuracy = function () {
    return 50 - (SpyConst.MAX_ACCURACY + SpyConst.MIN_ACCURACY) / 2;
  };
  SpyConst.getRatioDamage = function () {
    return 50 - (SpyConst.MAX_DAMAGE + SpyConst.MIN_DAMAGE) / 2;
  };
  SpyConst.getSpyRisk = function (__s1683param0, __s1683param1, __s1683param2, __s1683param3, __s1683param4) {
    var __s1683local0 = SpyConst.MIN_RISK_SPY_PLAYER;
    if (!!__s1683param3 || !__s1683param4) {
      __s1683local0 = SpyConst.MIN_RISK_SPY_DUNGEON;
    }
    var __s1683local1 = Math.max(Math.min(-(SpyConst.getRatioGuardSpy() * __s1683param0 - __s1683param1) + SpyConst.getRatioAccuracy() + __s1683param2, SpyConst.MAX_RISK_SPY), __s1683local0);
    var __s1683local2 = Math.max(Math.min(Math.floor(__s1683param1 * 1 / __s1683param0 / SpyConst.getRatioGuardSpy() * (SpyConst.getRatioAccuracy() + __s1683param2)), SpyConst.MAX_RISK_SPY), __s1683local0);
    return Math.round((__s1683local1 + __s1683local2) / 2);
  };
  SpyConst.getSabotageRisk = function (__s1686param0, __s1686param1, __s1686param2) {
    var __s1686local0 = Math.max(Math.min(-(SpyConst.getRatioGuardSpy() * __s1686param0 - __s1686param1) + SpyConst.getRatioDamage() + __s1686param2, SpyConst.MAX_RISK_SABOTAGE), SpyConst.MIN_RISK_SABOTAGE);
    var __s1686local1 = Math.max(Math.min(Math.floor(__s1686param1 * 1 / __s1686param0 / SpyConst.getRatioGuardSpy() * (SpyConst.getRatioDamage() + __s1686param2)), SpyConst.MAX_RISK_SABOTAGE), SpyConst.MIN_RISK_SABOTAGE);
    return Math.round((__s1686local0 + __s1686local1) / 2);
  };
  SpyConst.getTravelCostC1 = function (__s1688param0, __s1688param1, __s1688param2) {
    return (__s1688param0 * 20 * Math.log(__s1688param1 + 1) / Math.log(2.3) + __s1688param2 - 20) * 0.6 | 0;
  };
  SpyConst.getHorseCostC1 = function (__s1690param0, __s1690param1, __s1690param2, __s1690param3) {
    return __s1690param2 * (Math.ceil((__s1690param1 * Math.log(__s1690param0 + 1) / Math.log(2.3) * 20 + __s1690param3 - 20) * 0.2) | 0);
  };
  SpyConst.getHorseCostC2 = function (__s1692param0, __s1692param1, __s1692param2) {
    var __s1692local0 = (Math.sqrt(__s1692param0 + 60) * -25 * Math.pow(1.5, Math.pow(__s1692param0 + 60, 2) * -0.0002) + 145) * 1.5 * (1 + __s1692param1 / 28) | 0;
    return Math.round(__s1692local0 * __s1692param2);
  };
  return SpyConst;
}();
__s0local80.SPY_QUEST_ID = 2147;
__s0local80.TRAVELSPEED_SABOTAGE = 50;
__s0local80.TRAVELSPEED_SPY = 450;
__s0local80.MAX_GUARD = 180;
__s0local80.MAX_SPY = 15;
__s0local80.MAX_DEPLOYABLE_PLAGUEMONKS = 20;
__s0local80.MAX_OWNABLE_PLAGUEMONKS = 200;
__s0local80.MIN_RISK_SPY_PLAYER = 5;
__s0local80.MIN_RISK_SPY_DUNGEON = 0;
__s0local80.MAX_RISK_SPY = 95;
__s0local80.MIN_RISK_SABOTAGE = 10;
__s0local80.MAX_RISK_SABOTAGE = 90;
__s0local80.MIN_ACCURACY = 50;
__s0local80.MAX_ACCURACY = 100;
__s0local80.MIN_DAMAGE = 10;
__s0local80.MAX_DAMAGE = 50;
__s0local80.PLAGUEMONK_OWNER_ID = -334;
__s0local80.PLAGUEMONK_DISTANCE_TO_TARGET = 10;
__s0local80.DAMAGE_PER_BUILDING = 10;
__s0local80.DAMAGE_PER_SPY = 0.02;
__s0local80.QUEST_ID_DEFENSE = 0;
__s0local80.QUEST_ID_ECO = 1;
__s0local80.MAX_DELTA_LEVEL_SPY = 50;
__s0local80.MIN_LEVEL_SPY_ALL = 50;
__s0local80.SABTOAGE_PROTECTION_THRESHOLD = 12;
exports.SpyConst = __s0local80;
__s0local80.__class = "SpyConst";
__s0local80.SABOTAGE_PROTECTION_WINDOW_$LI$();
__s0local80.MAX_SABOTAGE_COOLDOWN_$LI$();
__s0local80.SPY_VALIDITY_$LI$();
