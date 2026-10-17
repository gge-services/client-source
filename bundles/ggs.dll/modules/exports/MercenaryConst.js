// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: MercenaryConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local52 = function () {
  function MercenaryConst() {}
  MercenaryConst.getSkipC2Cost = function (__s1272param0) {
    return Math.ceil(__s1272param0 * 1 / 60 * MercenaryConst.INSTANT_COST_C2_PER_MINUTE) | 0;
  };
  return MercenaryConst;
}();
__s0local52.REFRESH_MISSION_COST = 240;
__s0local52.REFRESH_INTERVAL_HOURS = 6;
__s0local52.MAX_MISSION_COUNT = 6;
__s0local52.REWARD_AMOUNT = 3;
__s0local52.INSTANT_COST_C2_PER_MINUTE = 5;
__s0local52.REFRESH_FIRST_HOUR_OF_THE_DAY = 4;
exports.MercenaryConst = __s0local52;
__s0local52.__class = "MercenaryConst";
