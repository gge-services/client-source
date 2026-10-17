// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: VillageConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local96 = function () {
  function VillageConst() {}
  VillageConst.getVillageDefaultOwnerID = function (__s1887param0) {
    return VillageConst.DEFAULT_OWNER_OFFSET - (__s1887param0 - 1);
  };
  VillageConst.isVillagePlayer = function (__s1889param0) {
    return __s1889param0 <= VillageConst.DEFAULT_OWNER_OFFSET && __s1889param0 > VillageConst.DEFAULT_OWNER_OFFSET - 4;
  };
  return VillageConst;
}();
__s0local96.VILLAGE_UNSPAWNED_AREA_ID = -1;
__s0local96.DEFAULT_OWNER_OFFSET = -400;
exports.VillageConst = __s0local96;
__s0local96.__class = "VillageConst";
