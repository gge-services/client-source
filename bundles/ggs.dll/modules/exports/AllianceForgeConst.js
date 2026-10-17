// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: AllianceForgeConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local3 = function () {
  function AllianceForgeConst() {}
  AllianceForgeConst.canUseRelicAllianceForge = function (__s111param0) {
    return __s111param0 >= AllianceForgeConst.MINIMUM_LEGEND_LEVEL_FOR_RELIC_ALLIANCE_FORGE;
  };
  AllianceForgeConst.calculateC1CostForSoftCurrencyRelicAllianceForge = function (__s113param0) {
    return Math.pow(1.5, __s113param0) * 60000 | 0;
  };
  AllianceForgeConst.calculateC2CostForHardCurrencyRelicAllianceForge = function (__s115param0) {
    return Math.pow(1.25, __s115param0) * 10000 | 0;
  };
  return AllianceForgeConst;
}();
__s0local3.TOMBOLA_ID_SOFT_CURRENCY_FORGE = -1;
__s0local3.TOMBOLA_ID_HARD_CURRENCY_FORGE = -2;
__s0local3.MINIMUM_LEGEND_LEVEL_FOR_RELIC_ALLIANCE_FORGE = 1;
exports.AllianceForgeConst = __s0local3;
__s0local3.__class = "AllianceForgeConst";
