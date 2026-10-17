Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = require("gge-module:exact_c549e43d1112dfff").getLogger("CastleArrayHelper");
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
exports.numericSort = function (__s17param0, __s17param1) {
  return __s17param0 - __s17param1;
};
