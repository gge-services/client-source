// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: ColossusConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local12 = function () {
  function ColossusConst() {}
  ColossusConst.calcResourcePointsForResources = function (__s175param0, __s175param1) {
    return Math.round(__s175param0) * ColossusConst.WOOD_POINTS + Math.round(__s175param1) * ColossusConst.STONE_POINTS;
  };
  ColossusConst.getResourcePointsForCoins = function (__s177param0) {
    return ColossusConst.COIN_POINTS * Math.round(__s177param0);
  };
  ColossusConst.getDecoPoints = function (__s179param0) {
    if (__s179param0 < ColossusConst.MIN_POINTS) {
      return 0;
    }
    var __s179local0 = Math.log(__s179param0 * 2.2 + 319) * 233 - 1320;
    if (__s179local0 < 3000) {
      return Math.round(__s179local0) | 0;
    } else {
      return Math.round(__s179local0 / 10 + 2700) | 0;
    }
  };
  return ColossusConst;
}();
__s0local12.COIN_POINTS = 1;
__s0local12.WOOD_POINTS = 2;
__s0local12.STONE_POINTS = 3;
__s0local12.MIN_POINTS = 50;
exports.ColossusConst = __s0local12;
__s0local12.__class = "ColossusConst";
