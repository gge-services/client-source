// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: ConditionConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local15 = function () {
  function ConditionConst() {}
  ConditionConst.calculateSpyCount = function (__s387param0) {
    return Math.min(__s0local19.MAX_SPY_COUNT, Math.ceil((__s387param0 - 4) / 10) | 0);
  };
  ConditionConst.amountOfTaxesToCollect = function (__s389param0) {
    return (Math.round((Math.exp(__s389param0 * 0.052) * 150 - 170) / 10) | 0) * 10;
  };
  ConditionConst.getLevelOfClassicDungeonToDestroy = function (__s391param0) {
    if (__s391param0 < 8) {
      return 1;
    } else {
      return Math.min(25, Math.ceil(25 / 65 * (__s391param0 - 6)) | 0);
    }
  };
  ConditionConst.calculateFameForFight = function (__s395param0, __s395param1) {
    return Math.round(Math.round(Math.pow(__s395param0, 5) * 1e-7 + 5) / 5) * 5 * __s395param1 | 0;
  };
  return ConditionConst;
}();
exports.ConditionConst = __s0local15;
__s0local15.__class = "ConditionConst";
