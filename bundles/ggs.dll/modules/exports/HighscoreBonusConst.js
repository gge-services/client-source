// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: HighscoreBonusConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local41 = function () {
  function HighscoreBonusConst() {}
  HighscoreBonusConst.calcHighscoreBonusForC1 = function (__s1115param0, __s1115param1, __s1115param2, __s1115param3, __s1115param4) {
    var __s1115local0 = HighscoreBonusConst.calcLevelIndependentC1HighscoreBonus(__s1115param0, __s1115param1, __s1115param2, __s1115param3);
    var __s1115local1 = HighscoreBonusConst.calcLevelDependentC1HighscoreBonus(__s1115param4);
    return Math.max(__s1115local0, __s1115local1);
  };
  HighscoreBonusConst.calcHighscoreBonusForUnits = function (__s1117param0, __s1117param1, __s1117param2, __s1117param3) {
    return Math.round(Math.max(__s1117param3, (1 - (__s1117param2 - __s1117param1 + 1) / 100 + 0.01) * __s1117param0)) | 0;
  };
  HighscoreBonusConst.calcHighscoreBonusForTools = function (__s1119param0, __s1119param1, __s1119param2) {
    return Math.max(__s1119param0, Math.floor((__s1119param1 - __s1119param2) * 0.5) | 0);
  };
  HighscoreBonusConst.calcLevelIndependentC1HighscoreBonus = function (__s1121param0, __s1121param1, __s1121param2, __s1121param3) {
    return Math.max(__s1121param3, __s1121param0 - (__s1121param2 - __s1121param1) * 10);
  };
  HighscoreBonusConst.calcLevelDependentC1HighscoreBonus = function (__s1123param0) {
    return (Math.round(Math.pow(__s1123param0, 1.1)) | 0) * 10;
  };
  return HighscoreBonusConst;
}();
exports.HighscoreBonusConst = __s0local41;
__s0local41.__class = "HighscoreBonusConst";
