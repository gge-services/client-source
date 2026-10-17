// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: RelocationConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local69 = function () {
  function RelocationConst() {}
  RelocationConst.RELOCATION_DURATION_$LI$ = function () {
    if (RelocationConst.RELOCATION_DURATION == null) {
      RelocationConst.RELOCATION_DURATION = [600, 21600];
    }
    return RelocationConst.RELOCATION_DURATION;
  };
  RelocationConst.RELOCATION_COST_C2_$LI$ = function () {
    if (RelocationConst.RELOCATION_COST_C2 == null) {
      RelocationConst.RELOCATION_COST_C2 = [0, 5000, 20000, 35000];
    }
    return RelocationConst.RELOCATION_COST_C2;
  };
  RelocationConst.RELOCATION_COOLDOWN_$LI$ = function () {
    if (RelocationConst.RELOCATION_COOLDOWN == null) {
      RelocationConst.RELOCATION_COOLDOWN = 1209600;
    }
    return RelocationConst.RELOCATION_COOLDOWN;
  };
  RelocationConst.getRelocationCost = function (__s1584param0) {
    var __s1584local0 = __s1584param0;
    if (RelocationConst.RELOCATION_COST_C2_$LI$().length <= __s1584param0) {
      __s1584local0 = RelocationConst.RELOCATION_COST_C2_$LI$().length - 1;
    }
    return RelocationConst.RELOCATION_COST_C2_$LI$()[__s1584local0];
  };
  RelocationConst.getRelocationTime = function (__s1587param0) {
    var __s1587local0 = __s1587param0 - 1;
    if (RelocationConst.RELOCATION_DURATION_$LI$().length <= __s1587param0) {
      __s1587local0 = RelocationConst.RELOCATION_DURATION_$LI$().length - 1;
    }
    return RelocationConst.RELOCATION_DURATION_$LI$()[__s1587local0];
  };
  RelocationConst.getRelocationTimeForTesting = function (__s1590param0) {
    var __s1590local0 = __s1590param0 - 1;
    if (RelocationConst.TEST_RELOCATION_DURATION_$LI$().length <= __s1590param0) {
      __s1590local0 = RelocationConst.TEST_RELOCATION_DURATION_$LI$().length - 1;
    }
    return RelocationConst.TEST_RELOCATION_DURATION_$LI$()[__s1590local0];
  };
  RelocationConst.TEST_RELOCATION_DURATION_$LI$ = function () {
    if (RelocationConst.TEST_RELOCATION_DURATION == null) {
      RelocationConst.TEST_RELOCATION_DURATION = [180, 300];
    }
    return RelocationConst.TEST_RELOCATION_DURATION;
  };
  RelocationConst.TEST_RELOCATION_COOLDOWN_$LI$ = function () {
    if (RelocationConst.TEST_RELOCATION_COOLDOWN == null) {
      RelocationConst.TEST_RELOCATION_COOLDOWN = 180;
    }
    return RelocationConst.TEST_RELOCATION_COOLDOWN;
  };
  return RelocationConst;
}();
__s0local69.MIN_RELOCATION_LEVEL = 6;
exports.RelocationConst = __s0local69;
__s0local69.__class = "RelocationConst";
__s0local69.TEST_RELOCATION_COOLDOWN_$LI$();
__s0local69.TEST_RELOCATION_DURATION_$LI$();
__s0local69.RELOCATION_COOLDOWN_$LI$();
__s0local69.RELOCATION_COST_C2_$LI$();
__s0local69.RELOCATION_DURATION_$LI$();
