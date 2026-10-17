// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: GemConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local35 = function () {
  function GemConst() {}
  GemConst.getTotalStorageCapacity = function (__s1071param0) {
    if (__s1071param0) {
      return GemConst.MAX_GEM_STORAGE;
    } else {
      return GemConst.NORMAL_GEM_STORAGE;
    }
  };
  return GemConst;
}();
__s0local35.MAX_GEM_LEVEL = 13;
__s0local35.MIN_GEM_LEVEL = 0;
__s0local35.MIN_PLAYER_LEVEL_FOR_GEM_DROP = 25;
__s0local35.NUM_GEMS_NEEDED_FOR_UPGRADE = 6;
__s0local35.MAX_GEM_STORAGE = 500;
__s0local35.NORMAL_GEM_STORAGE = 480;
exports.GemConst = __s0local35;
__s0local35.__class = "GemConst";
