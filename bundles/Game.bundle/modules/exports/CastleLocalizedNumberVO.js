Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleLocalizedNumberVO(__s3param0, __s3param1 = null, __s3param2 = 2) {
    var __s3local0 = __s1param0.call(this, __s3param0, false, __s3param2) || this;
    __s3local0.compactThreshold = 10000000;
    __s3local0.compactFractionalDigits = 2;
    __s3local0.trailingZeros = false;
    if (__s3param1) {
      Object.assign(__s3local0, __s3param1);
    }
    __s3local0.compact = Math.abs(__s3local0.numberValue) >= __s3local0.compactThreshold;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLocalizedNumberVO, __s1param0);
  Object.defineProperty(CastleLocalizedNumberVO.prototype, "numberValue", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_92d05af59ee2ff30.LocalizedNumberVO.prototype, "numberValue").get.call(this);
    },
    set: function (__s8param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_92d05af59ee2ff30.LocalizedNumberVO.prototype, "numberValue").set.call(this, __s8param0);
      var __s8local0 = this.compactThreshold && Math.abs(__s8param0) >= this.compactThreshold;
      if (__s8local0 !== this.compact) {
        this.compact = __s8local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleLocalizedNumberVO;
}(__dep_exact_92d05af59ee2ff30.LocalizedNumberVO);
exports.CastleLocalizedNumberVO = __s0local0;
