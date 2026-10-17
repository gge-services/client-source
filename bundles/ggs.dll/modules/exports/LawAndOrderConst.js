// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: LawAndOrderConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local45 = function () {
  function LawAndOrderConst() {}
  LawAndOrderConst.calculateLawAndOrder = function (__s1206param0, __s1206param1, __s1206param2) {
    return __s1206param0 - (__s1206param2 + __s1206param1);
  };
  LawAndOrderConst.calculateLawAndOrderWithTitle = function (__s1208param0, __s1208param1, __s1208param2, __s1208param3) {
    return Math.round((__s1208param0 - (__s1208param2 + __s1208param1)) * (1 + __s1208param3 / 100));
  };
  LawAndOrderConst.calculateLawAndOrderFactor = function (__s1210param0, __s1210param1, __s1210param2) {
    return LawAndOrderConst.calculateLawAndOrderFactorWithEffect(__s1210param0, __s1210param1, __s1210param2, __s0local27.DEFAULT_MODIFIER);
  };
  LawAndOrderConst.calculateLawAndOrderFactorWithEffect = function (__s1212param0, __s1212param1, __s1212param2, __s1212param3) {
    var __s1212local0 = LawAndOrderConst.calculateLawAndOrder(__s1212param0, __s1212param1, __s1212param2);
    if (__s1212local0 < 0) {
      return 1 / (Math.sqrt(Math.abs(__s1212local0)) / 50 + 1) * __s1212param3;
    } else {
      return (Math.sqrt(__s1212local0) / 50 + 1) * __s1212param3;
    }
  };
  return LawAndOrderConst;
}();
exports.LawAndOrderConst = __s0local45;
__s0local45.__class = "LawAndOrderConst";
