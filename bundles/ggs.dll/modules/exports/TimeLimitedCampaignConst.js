// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: TimeLimitedCampaignConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local88 = function () {
  function TimeLimitedCampaignConst() {}
  TimeLimitedCampaignConst.calculateEndRewardPurchaseCost = function (__s1762param0, __s1762param1, __s1762param2) {
    var __s1762local0 = __s1762param0 * (1 - __s1762param2 / __s1762param1) | 0;
    return __s1762local0 - __s1762local0 % TimeLimitedCampaignConst.END_REWARD_VALUE_REMAINDER_DIVISOR;
  };
  return TimeLimitedCampaignConst;
}();
__s0local88.NO_SKIN = -1;
__s0local88.QUEST_STATUS_NEW = "N";
__s0local88.QUEST_STATUS_INPROGRESS = "I";
__s0local88.QUEST_STATUS_FAILED = "F";
__s0local88.QUEST_STATUS_COMPLETE = "C";
__s0local88.DEFAULT_END_REWARD_VALUE = 1000000;
__s0local88.END_REWARD_VALUE_REMAINDER_DIVISOR = 10000;
exports.TimeLimitedCampaignConst = __s0local88;
__s0local88.__class = "TimeLimitedCampaignConst";
