// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: LuckyWheelConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local50 = function () {
  function LuckyWheelConst() {}
  LuckyWheelConst.calculateC2CostForIncreasingPrizeClass = function (__s1255param0, __s1255param1) {
    if (__s1255param0 <= 0 || __s1255param1 <= 0) {
      return 0;
    }
    var __s1255local0 = __s1255param0 * __s1255param1;
    return (Math.ceil(__s1255local0 / 100) | 0) * 100;
  };
  return LuckyWheelConst;
}();
__s0local50.SPIN_TICKET_COST_NORMAL = 30;
__s0local50.SPIN_TICKET_COST_PROMODE = 300;
__s0local50.SPIN_TICKET_COST_SALE_DAYS = 1;
__s0local50.JACKPOT_C2_COST_NORMAL = 2900;
__s0local50.JACKPOT_C2_COST_PROMODE = 29000;
__s0local50.CATEGORY_COUNT_NORMAL = 8;
__s0local50.CATEGORY_JACKPOT = 0;
__s0local50.MIN_EXCLUSIVE_POINT_VALUE = 1;
__s0local50.WINNING_CLASS_PROGRESS_NORMAL = 1;
__s0local50.WINNING_CLASS_PROGRESS_PROMODE = 10;
exports.LuckyWheelConst = __s0local50;
__s0local50.__class = "LuckyWheelConst";
