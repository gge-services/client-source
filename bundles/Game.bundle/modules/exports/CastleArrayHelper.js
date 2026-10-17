// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 559
// Export: CastleArrayHelper; preserved source: modules/webpack/exports/CastleArrayHelper.js
// Original canonical SHA-256: be53f7e996fdeb7e2fb6f208ce12ffd91e7bbb115ff4caf9cf6b086b8f6ce505
var __s0local1 = function () {
  function CastleArrayHelper() {}
  CastleArrayHelper.toUintVector = function (__s5param0) {
    __s0local0.warn("CastleArrayHelper::toUINTVector::  this not doing what it says...");
    var __s5local0 = [];
    if (__s5param0) {
      for (var __s5local1 = 0; __s5local1 < __s5param0.length; __s5local1++) {
        __s5local0.push(__s5param0[__s5local1]);
      }
    }
    return __s5local0;
  };
  CastleArrayHelper.toIntVector = function (__s10param0) {
    __s0local0.warn("CastleArrayHelper::toINTVector::  this not doing what it says...");
    var __s10local0 = [];
    if (__s10param0) {
      for (var __s10local1 = 0; __s10local1 < __s10param0.length; __s10local1++) {
        __s10local0.push(__s10param0[__s10local1]);
      }
    }
    return __s10local0;
  };
  CastleArrayHelper.moveIndex = function (__s15param0, __s15param1, __s15param2) {
    __s15param0.splice(__s15param2, 0, __s15param0.splice(__s15param1, 1)[0]);
  };
  return CastleArrayHelper;
}();
exports.CastleArrayHelper = __s0local1;
