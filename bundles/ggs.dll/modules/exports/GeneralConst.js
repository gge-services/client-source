// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: GeneralConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local36 = function () {
  function GeneralConst() {}
  GeneralConst.getMaxLevelForStarTier = function (__s1079param0) {
    return Math.min(100, (__s1079param0 + 1) * 10);
  };
  GeneralConst.calculateXPGainForAttackingGeneral = function (__s1081param0, __s1081param1, __s1081param2, __s1081param3) {
    if (__s1081param0 > GeneralConst.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN) {
      return 0;
    }
    var __s1081local0 = GeneralConst.BASE_XP_ATTACK;
    if (__s1081param0 > 2) {
      __s1081local0 = Math.max(10, GeneralConst.BASE_XP_ATTACK - GeneralConst.BASE_XP_ATTACK * __s1081param0 / 15);
    }
    var __s1081local1 = __s1081param0 === 1 ? GeneralConst.FIRST_ATTACK_BONUS_XP : 0;
    var __s1081local2 = GeneralConst.calculateUnitsKilledBonusXPForAttackingGeneral(__s1081param3, __s1081param0, __s1081param1, __s1081param2);
    return Math.round(__s1081local0 + __s1081local1 + __s1081local2);
  };
  GeneralConst.calculateUnitsKilledBonusXPForAttackingGeneral = function (__s1085param0, __s1085param1, __s1085param2, __s1085param3) {
    if (__s1085param0) {
      return 0;
    } else {
      __s1085local0 = __s1085param1 > 2 ? Math.max(10, Math.round(GeneralConst.UNITS_KILLED_XP_CAP - GeneralConst.UNITS_KILLED_XP_CAP * __s1085param1 / 15)) : GeneralConst.UNITS_KILLED_XP_CAP;
      __s1085local1 = __s1085param2 < 45 ? (GeneralConst.log15(__s1085param3 * Math.max(5, 35 - __s1085param2) / __s1085param2 + 60 / __s1085param2) - 1) * 200 : (GeneralConst.log15(__s1085param3 * Math.pow(__s1085param2, 0.75) / (__s1085param2 * 5)) - 1) * 200;
      return Math.max(0, Math.min(__s1085local0, __s1085local1));
    }
    var __s1085local0;
    var __s1085local1;
  };
  GeneralConst.log15 = function (__s1089param0) {
    return Math.log(__s1089param0) / Math.log(15);
  };
  GeneralConst.calculateXPGainForDefendingGeneral = function (__s1091param0) {
    if (__s1091param0 > GeneralConst.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN) {
      return 0;
    }
    var __s1091local0 = GeneralConst.BASE_XP_DEFENSE;
    if (__s1091param0 > 2) {
      __s1091local0 = Math.max(10, GeneralConst.BASE_XP_DEFENSE - GeneralConst.BASE_XP_DEFENSE * __s1091param0 / 15);
    }
    return Math.round(__s1091local0);
  };
  return GeneralConst;
}();
__s0local36.SKILL_RESET_C2_COST = 2500;
__s0local36.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN = 20;
__s0local36.BASE_XP_ATTACK = 100;
__s0local36.BASE_XP_DEFENSE = 100;
__s0local36.FIRST_ATTACK_BONUS_XP = 500;
__s0local36.UNITS_KILLED_XP_CAP = 500;
__s0local36.GENERALS_STARTER_QUEST_SERIES_ID = 10000;
__s0local36.GENERAL_HORATIO_ID = 104;
__s0local36.NPC_GENERAL_ID = 106;
exports.GeneralConst = __s0local36;
__s0local36.__class = "GeneralConst";
