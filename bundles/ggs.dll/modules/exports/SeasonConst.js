// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: SeasonConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local75 = function () {
  function SeasonConst() {}
  SeasonConst.calculateMaxPromotion = function (__s1642param0) {
    return Math.max(1, Math.min(Math.floor(__s1642param0 * SeasonConst.MAX_POINTS_PER_DAY / SeasonConst.POINTS_PER_PROMOTION) + 1, 21)) | 0;
  };
  SeasonConst.calculateSeasonPassPrice = function (__s1644param0, __s1644param1, __s1644param2, __s1644param3) {
    return Math.max(0, (__s1644param0 - 1) * __s1644param1 + __s1644param2 * __s1644param3 - 2);
  };
  SeasonConst.calculateSeasonPassC2Cost = function (__s1646param0, __s1646param1, __s1646param2, __s1646param3, __s1646param4) {
    return Math.max(__s1646param0 - (__s1646param1 * __s1646param2 + __s1646param3 * __s1646param4), 0);
  };
  return SeasonConst;
}();
__s0local75.GOLD_MEDAL_ID = 1;
__s0local75.SILVER_MEDAL_ID = 2;
__s0local75.BRONZE_MEDAL_ID = 3;
__s0local75.PASS_TYPE_SEASON = 1;
__s0local75.PASS_TYPE_EVENT_END = 2;
__s0local75.PASS_TYPE_PROMOTION = 3;
__s0local75.MAX_POINTS_PER_DAY = 1000;
__s0local75.POINTS_PER_PROMOTION = 2000;
exports.SeasonConst = __s0local75;
__s0local75.__class = "SeasonConst";
