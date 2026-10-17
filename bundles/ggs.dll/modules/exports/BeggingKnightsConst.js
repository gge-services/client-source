// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: BeggingKnightsConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local10 = function () {
  function BeggingKnightsConst() {}
  BeggingKnightsConst.calculateRequirement = function (__s145param0, __s145param1) {
    return Math.max(1, Math.round(__s145param0 * __s145param1));
  };
  BeggingKnightsConst.calculateRewardAmount = function (__s147param0, __s147param1) {
    var __s147local0 = __s147param1 / 100 * __s147param0;
    return Math.max(1, Math.round(__s147local0));
  };
  return BeggingKnightsConst;
}();
exports.BeggingKnightsConst = __s0local10;
__s0local10.__class = "BeggingKnightsConst";
