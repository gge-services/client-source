// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: ResearchConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local70 = function () {
  function ResearchConst() {}
  ResearchConst.getFastCompleteCostC2 = function (__s1603param0, __s1603param1) {
    return Math.ceil(__s1603param0 * 1 / 60 * __s0local17.getInstantCostC2PerMinuteFor(__s1603param1)) | 0;
  };
  ResearchConst.RESOURCE_TYPES_TO_MODIFY_$LI$ = function () {
    if (ResearchConst.RESOURCE_TYPES_TO_MODIFY == null) {
      ResearchConst.RESOURCE_TYPES_TO_MODIFY = [__s0local14.FOOD, __s0local14.WOOD, __s0local14.STONE, __s0local14.COAL, __s0local14.OIL, __s0local14.GLASS, __s0local14.IRON, __s0local14.AQUAMARINE, __s0local14.MEAD, __s0local14.HONEY, __s0local14.BEEF];
    }
    return ResearchConst.RESOURCE_TYPES_TO_MODIFY;
  };
  return ResearchConst;
}();
exports.ResearchConst = __s0local70;
__s0local70.__class = "ResearchConst";
__s0local70.RESOURCE_TYPES_TO_MODIFY_$LI$();
