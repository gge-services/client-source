// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: DailyQuestConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local19 = function () {
  function DailyQuestConst() {}
  DailyQuestConst.REWARD_STEPS_$LI$ = function () {
    if (DailyQuestConst.REWARD_STEPS == null) {
      DailyQuestConst.REWARD_STEPS = [3, 6, 9, 12];
    }
    return DailyQuestConst.REWARD_STEPS;
  };
  DailyQuestConst.RANDOM_REWARD_STEPS_$LI$ = function () {
    if (DailyQuestConst.RANDOM_REWARD_STEPS == null) {
      DailyQuestConst.RANDOM_REWARD_STEPS = [3, 6, 9];
    }
    return DailyQuestConst.RANDOM_REWARD_STEPS;
  };
  return DailyQuestConst;
}();
__s0local19.MIN_LEVEL = 6;
__s0local19.MAX_SPY_COUNT = 5;
__s0local19.RUBY_STEP = 12;
__s0local19.ACTIVITIES_PER_DAY = 12;
__s0local19.TEMP_SERVER_ACTIVITIES_PER_DAY = 3;
exports.DailyQuestConst = __s0local19;
__s0local19.__class = "DailyQuestConst";
__s0local19.RANDOM_REWARD_STEPS_$LI$();
__s0local19.REWARD_STEPS_$LI$();
