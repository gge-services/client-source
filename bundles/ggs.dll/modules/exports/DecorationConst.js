// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: DecorationConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local21 = function () {
  function DecorationConst() {}
  DecorationConst.getStorageID = function (__s513param0) {
    var __s513local0 = false;
    for (var __s513local1 = 0; __s513local1 < __s0local93.CRUSADE_MAP_IDS_$LI$().length; __s513local1++) {
      if (__s0local93.CRUSADE_MAP_IDS_$LI$()[__s513local1] === __s513param0) {
        __s513local0 = true;
        break;
      }
    }
    if (__s513local0 || __s0local32.KINGDOM_ID === __s513param0) {
      return __s513param0;
    }
    var __s513local2 = false;
    for (__s513local1 = 0; __s513local1 < __s0local105.WORLD_IDS_$LI$().length; __s513local1++) {
      if (__s0local105.WORLD_IDS_$LI$()[__s513local1] === __s513param0) {
        __s513local2 = true;
        break;
      }
    }
    if (__s513local2) {
      return DecorationConst.GLOBAL_DECORATION_STORAGE_ID;
    } else {
      return DecorationConst.NO_DECORATION_STORAGE_ID;
    }
  };
  return DecorationConst;
}();
__s0local21.HARD_CAP = 3000;
__s0local21.SOFT_CAP = 50;
__s0local21.EMPTY_NEW_COUNT = 0;
__s0local21.NO_DECORATION_STORAGE_ID = -1;
__s0local21.GLOBAL_DECORATION_STORAGE_ID = 1;
__s0local21.AREA_INVENTORY_STORAGE_ID = 2;
exports.DecorationConst = __s0local21;
__s0local21.__class = "DecorationConst";
