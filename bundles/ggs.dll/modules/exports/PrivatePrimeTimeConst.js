// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 617
// Export: PrivatePrimeTimeConst; preserved source: modules/webpack/exports/AlchemistConst.js
// Original canonical SHA-256: 2191b914f78728d7dfa7974d2e53b4d3ce65f7850bd27ed0cb7ea4c86f964783
var __s0local64 = function () {
  function PrivatePrimeTimeConst() {}
  PrivatePrimeTimeConst.DEFAULT_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.DEFAULT_SKIN_ID == null) {
      PrivatePrimeTimeConst.DEFAULT_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID;
    }
    return PrivatePrimeTimeConst.DEFAULT_SKIN_ID;
  };
  PrivatePrimeTimeConst.GOLD_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.GOLD_SKIN_ID == null) {
      PrivatePrimeTimeConst.GOLD_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID;
    }
    return PrivatePrimeTimeConst.GOLD_SKIN_ID;
  };
  PrivatePrimeTimeConst.BRICK_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.BRICK_SKIN_ID == null) {
      PrivatePrimeTimeConst.BRICK_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID + 1;
    }
    return PrivatePrimeTimeConst.BRICK_SKIN_ID;
  };
  PrivatePrimeTimeConst.SKIN_LIST_$LI$ = function () {
    if (PrivatePrimeTimeConst.SKIN_LIST == null) {
      PrivatePrimeTimeConst.SKIN_LIST = [PrivatePrimeTimeConst.GOLD_SKIN_ID_$LI$(), PrivatePrimeTimeConst.BRICK_SKIN_ID_$LI$()];
    }
    return PrivatePrimeTimeConst.SKIN_LIST;
  };
  return PrivatePrimeTimeConst;
}();
__s0local64.USE_NOVELITY_ALGORITHM_SKIN_ID = 1;
__s0local64.START_SKIN_ID = 10;
exports.PrivatePrimeTimeConst = __s0local64;
__s0local64.__class = "PrivatePrimeTimeConst";
__s0local64.SKIN_LIST_$LI$();
__s0local64.BRICK_SKIN_ID_$LI$();
__s0local64.GOLD_SKIN_ID_$LI$();
__s0local64.DEFAULT_SKIN_ID_$LI$();
