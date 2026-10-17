// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: SceatSkillConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local74 = function () {
  function SceatSkillConst() {}
  SceatSkillConst.getFastCompleteCostC2 = function (__s1636param0, __s1636param1) {
    return Math.ceil(__s1636param0 * 1 / 60 * __s0local17.getInstantCostC2PerMinuteFor(__s1636param1)) | 0;
  };
  return SceatSkillConst;
}();
exports.SceatSkillConst = __s0local74;
__s0local74.__class = "SceatSkillConst";
