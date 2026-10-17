// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: JudgementCitizenCalculation; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local44 = function () {
  function JudgementCitizenCalculation() {}
  JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND = [[-1, 1.925], [2.2, 1.925], [-1, 2.2], [-1, -1], [2.2, -1]];
    }
    return JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.FACTOR_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTOR_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.FACTOR_FORMULA_1_COND = [[-1, 0.22], [0.4, 0.22], [-1, 0.3], [-1, -1], [0.15, -1]];
    }
    return JudgementCitizenCalculation.FACTOR_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.OFFSET_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.OFFSET_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.OFFSET_FORMULA_1_COND = [[-1, 0], [0, 0], [-1, 0], [-1, -1], [-15, -1]];
    }
    return JudgementCitizenCalculation.OFFSET_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.MIN_VALUE_$LI$ = function () {
    if (JudgementCitizenCalculation.MIN_VALUE == null) {
      JudgementCitizenCalculation.MIN_VALUE = [[-1, 5], [15, 5], [-1, 10], [-1, -1], [5, -1]];
    }
    return JudgementCitizenCalculation.MIN_VALUE;
  };
  JudgementCitizenCalculation.FACTORS_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTORS_REWARD == null) {
      JudgementCitizenCalculation.FACTORS_REWARD = [[[-1, -1, -1, -1], [5, -1.6, 0.12, -0.0013]], [[-1, -1, -1, -1], [5, -1.6, 0.121, -0.0013]], [[-1, -1, -1, -1], [5, -1.6, 0.123, -0.0013]], [[-1, -1, -1, -1], [-1, -1, -1, -1]], [[-1, -1, -1, -1], [5, -1.58, 0.12, -0.0013]]];
    }
    return JudgementCitizenCalculation.FACTORS_REWARD;
  };
  JudgementCitizenCalculation.MAX_VALUE_$LI$ = function () {
    if (JudgementCitizenCalculation.MAX_VALUE == null) {
      JudgementCitizenCalculation.MAX_VALUE = [[-1, 3400], [-1, 3800], [-1, 4200], [0, 0], [-1, 3500]];
    }
    return JudgementCitizenCalculation.MAX_VALUE;
  };
  JudgementCitizenCalculation.OFFSET_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.OFFSET_REWARD == null) {
      JudgementCitizenCalculation.OFFSET_REWARD = [[-1, 10], [-1, 10], [-1, 10], [-1, -1], [-1, 10]];
    }
    return JudgementCitizenCalculation.OFFSET_REWARD;
  };
  JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD == null) {
      JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD = [[-1, -1], [-1, -1], [-1, -1], [2.15, 2.3], [-1, -1]];
    }
    return JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD;
  };
  JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD == null) {
      JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD = [[-1, -1], [-1, -1], [-1, -1], [0.5, 0.3], [-1, -1]];
    }
    return JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD;
  };
  JudgementCitizenCalculation.calcCond = function (__s1194param0, __s1194param1, __s1194param2) {
    return Math.max(JudgementCitizenCalculation.MIN_VALUE_$LI$()[__s1194param1][__s1194param2], Math.round((JudgementCitizenCalculation.FACTOR_FORMULA_1_COND_$LI$()[__s1194param1][__s1194param2] * Math.pow(__s1194param0, JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND_$LI$()[__s1194param1][__s1194param2]) + JudgementCitizenCalculation.OFFSET_FORMULA_1_COND_$LI$()[__s1194param1][__s1194param2]) / 5) * 5) | 0;
  };
  JudgementCitizenCalculation.rewardC1 = function (__s1196param0, __s1196param1, __s1196param2) {
    return Math.min(JudgementCitizenCalculation.MAX_VALUE_$LI$()[__s1196param1][__s1196param2], Math.ceil((JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][3] * Math.pow(__s1196param0, 4) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][2] * Math.pow(__s1196param0, 3) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][1] * Math.pow(__s1196param0, 2) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[__s1196param1][__s1196param2][0] * __s1196param0 + JudgementCitizenCalculation.OFFSET_REWARD_$LI$()[__s1196param1][__s1196param2]) / 10) * 10) | 0;
  };
  JudgementCitizenCalculation.rewardWoodStone = function (__s1198param0, __s1198param1, __s1198param2) {
    return Math.round(JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD_$LI$()[__s1198param1][__s1198param2] * Math.pow(__s1198param0, JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD_$LI$()[__s1198param1][__s1198param2]) / 5) * 5 | 0;
  };
  JudgementCitizenCalculation.calculateWaitingTimeUntilNextJudgement = function (__s1200param0) {
    return (Math.round((__s1200param0 * 0.3 * Math.pow(__s1200param0, 2.6) + 50) / 10) | 0) * 10;
  };
  return JudgementCitizenCalculation;
}();
exports.JudgementCitizenCalculation = __s0local44;
__s0local44.__class = "JudgementCitizenCalculation";
__s0local44.FACTOR_FORMULA_1_REWARD_$LI$();
__s0local44.EXPONENT_FORMULA_1_REWARD_$LI$();
__s0local44.OFFSET_REWARD_$LI$();
__s0local44.MAX_VALUE_$LI$();
__s0local44.FACTORS_REWARD_$LI$();
__s0local44.MIN_VALUE_$LI$();
__s0local44.OFFSET_FORMULA_1_COND_$LI$();
__s0local44.FACTOR_FORMULA_1_COND_$LI$();
__s0local44.EXPONENT_FORMULA_1_COND_$LI$();
