Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Localize = require("gge-module:class_Localize");
var __s0local0 = function (__s1param0) {
  function LocalizedNumberVO(__s3param0 = NaN, __s3param1 = false, __s3param2 = 0, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._numberValue = NaN;
    __s3local0._compact = false;
    __s3local0._fractionalDigits = 0;
    __s3local0._isRTL = false;
    __s3local0._numberValue = __s3param0;
    __s3local0._compact = __s3param1;
    __s3local0._fractionalDigits = __s3param2;
    __s3local0._isRTL = __s3param3;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocalizedNumberVO, __s1param0);
  Object.defineProperty(LocalizedNumberVO.prototype, "numberValue", {
    get: function () {
      return this._numberValue;
    },
    set: function (__s7param0) {
      this._numberValue = __s7param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedNumberVO.prototype, "compact", {
    get: function () {
      return this._compact;
    },
    set: function (__s11param0) {
      this._compact = __s11param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedNumberVO.prototype, "fractionalDigits", {
    get: function () {
      return this._fractionalDigits;
    },
    set: function (__s15param0) {
      this._fractionalDigits = __s15param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedNumberVO.prototype, "isRTL", {
    get: function () {
      return this._isRTL;
    },
    set: function (__s19param0) {
      this._isRTL = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedNumberVO.prototype.compose = function () {
    return __dep_class_Localize.Localize.number(this._numberValue, this._compact, this._fractionalDigits, this._isRTL);
  };
  LocalizedNumberVO.prototype.toString = function () {
    return LocalizedNumberVO.NAME + ", numberValue: " + this._numberValue + ", compact: " + this._compact + ", fractionalDigits: " + this._fractionalDigits + ", isRTL: " + this._isRTL;
  };
  LocalizedNumberVO.NAME = "LocalizedNumberVO";
  return LocalizedNumberVO;
}(require("gge-module:class_AbstractTextContentVO").AbstractTextContentVO);
exports.LocalizedNumberVO = __s0local0;
