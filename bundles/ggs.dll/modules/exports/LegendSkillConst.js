// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: LegendSkillConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local46 = function () {
  function LegendSkillConst() {}
  LegendSkillConst.RESET_COOLDOWN_IN_SECONDS_$LI$ = function () {
    if (LegendSkillConst.RESET_COOLDOWN_IN_SECONDS == null) {
      LegendSkillConst.RESET_COOLDOWN_IN_SECONDS = 1296000;
    }
    return LegendSkillConst.RESET_COOLDOWN_IN_SECONDS;
  };
  LegendSkillConst.TIER_UNLOCK_POINTS_$LI$ = function () {
    if (LegendSkillConst.TIER_UNLOCK_POINTS == null) {
      LegendSkillConst.TIER_UNLOCK_POINTS = [0, LegendSkillConst.TIER_1_POINTS_TO_TIER_2, LegendSkillConst.TIER_2_POINTS_TO_TIER_3, LegendSkillConst.TIER_3_POINTS_TO_TIER_4, LegendSkillConst.TIER_4_POINTS_TO_TIER_5, LegendSkillConst.TIER_5_POINTS_TO_TIER_6];
    }
    return LegendSkillConst.TIER_UNLOCK_POINTS;
  };
  LegendSkillConst.isTierUnlocked = function (__s1226param0, __s1226param1) {
    return __s1226param0 >= LegendSkillConst.MIN_TIER_ID && __s1226param0 <= LegendSkillConst.MAX_TIER_ID && __s1226param1 >= LegendSkillConst.TIER_UNLOCK_POINTS_$LI$()[__s1226param0 - 1];
  };
  LegendSkillConst.pointsNeededForTier = function (__s1228param0) {
    if (__s1228param0 >= LegendSkillConst.MIN_TIER_ID && __s1228param0 <= LegendSkillConst.MAX_TIER_ID) {
      return LegendSkillConst.TIER_UNLOCK_POINTS_$LI$()[__s1228param0 - 1];
    } else {
      return -1;
    }
  };
  LegendSkillConst.resetSkipCostC2 = function (__s1232param0, __s1232param1) {
    return (LegendSkillConst.BASE_COST * Math.pow(__s1232param1, LegendSkillConst.EXPONENT) | 0) + (__s1232param0 + LegendSkillConst.BASE_SKILL_POINTS) * LegendSkillConst.POINTS_FACTOR;
  };
  return LegendSkillConst;
}();
__s0local46.TIER_1_POINTS_TO_TIER_2 = 40;
__s0local46.TIER_2_POINTS_TO_TIER_3 = 80;
__s0local46.TIER_3_POINTS_TO_TIER_4 = 90;
__s0local46.TIER_4_POINTS_TO_TIER_5 = 90;
__s0local46.TIER_5_POINTS_TO_TIER_6 = 90;
__s0local46.MIN_TIER_ID = 1;
__s0local46.MAX_TIER_ID = 6;
__s0local46.BASE_COST = 20;
__s0local46.EXPONENT = 5;
__s0local46.BASE_SKILL_POINTS = 50;
__s0local46.POINTS_FACTOR = 30;
exports.LegendSkillConst = __s0local46;
__s0local46.__class = "LegendSkillConst";
__s0local46.TIER_UNLOCK_POINTS_$LI$();
__s0local46.RESET_COOLDOWN_IN_SECONDS_$LI$();
