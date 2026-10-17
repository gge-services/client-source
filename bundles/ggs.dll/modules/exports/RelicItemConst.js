// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: RelicItemConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local68 = function () {
  function RelicItemConst() {}
  RelicItemConst.calculateRelicItemMightValue = function (__s1561param0) {
    return 1000 + __s1561param0 * 10;
  };
  RelicItemConst.calculateFragmentSellValue = function (__s1563param0) {
    return __s1563param0 / 10 | 0;
  };
  RelicItemConst.calculateFragmentSellMinValue = function () {
    return 100;
  };
  RelicItemConst.calculateFragmentSellMaxValue = function (__s1567param0) {
    return (1 + __s1567param0) * 100;
  };
  RelicItemConst.isTombolaID = function (__s1569param0) {
    return __s1569param0 < 0;
  };
  return RelicItemConst;
}();
__s0local68.INSERT_RELIC_GEM_C1_COST = 95000;
__s0local68.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST = 2000;
exports.RelicItemConst = __s0local68;
__s0local68.__class = "RelicItemConst";
