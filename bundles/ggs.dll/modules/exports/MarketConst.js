// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: MarketConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local51 = function () {
  function MarketConst() {}
  MarketConst.getMarketTravelCostC1 = function (__s1262param0, __s1262param1) {
    return Math.ceil(__s1262param1 * 5 * Math.log(__s1262param0 + 1) / Math.log(2.3) * 0.6) | 0;
  };
  MarketConst.getHorseCostC1 = function (__s1264param0, __s1264param1, __s1264param2) {
    return __s1264param2 * (Math.ceil(__s1264param1 * 5 * Math.log(__s1264param0 + 1) / Math.log(2.3) * 0.2) | 0);
  };
  MarketConst.getHorseCostC2 = function (__s1266param0, __s1266param1, __s1266param2) {
    var __s1266local0 = (Math.sqrt(__s1266param0 + 60) * -25 * Math.pow(1.5, Math.pow(__s1266param0 + 60, 2) * -0.0002) + 145) * 1.5 * (1 + __s1266param1 / 83) | 0;
    return Math.round(__s1266local0 * __s1266param2);
  };
  return MarketConst;
}();
__s0local51.MARKET_TRAVEL_SPEED = 50;
__s0local51.RESOURCES_PER_CARRIAGE = 100;
__s0local51.MAX_MARKET_MOVEMENTS_TO_TARGET = 15;
exports.MarketConst = __s0local51;
__s0local51.__class = "MarketConst";
