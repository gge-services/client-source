Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Localize = require("gge-module:class_Localize");
var __s0local0 = function (__s1param0) {
  function LocalizedTimeVO(__s3param0 = 0, __s3param1 = 2, __s3param2 = true, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._seconds = NaN;
    __s3local0._leadingZero = false;
    __s3local0._trim = 0;
    __s3local0._seconds = __s3param0;
    __s3local0._trim = __s3param1;
    __s3local0._leadingZero = __s3param2;
    __s3local0._templatesSet = __s3param3;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocalizedTimeVO, __s1param0);
  Object.defineProperty(LocalizedTimeVO.prototype, "seconds", {
    get: function () {
      return this._seconds;
    },
    set: function (__s7param0) {
      this._seconds = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTimeVO.prototype, "leadingZero", {
    get: function () {
      return this._leadingZero;
    },
    set: function (__s11param0) {
      this._leadingZero = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTimeVO.prototype, "trim", {
    get: function () {
      return this._trim;
    },
    set: function (__s15param0) {
      this._trim = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedTimeVO.prototype.compose = function () {
    return __dep_class_Localize.Localize.time(this._seconds, this._trim, this._leadingZero, this._templatesSet);
  };
  LocalizedTimeVO.prototype.toString = function () {
    return LocalizedTimeVO.NAME + ", seconds: " + this._seconds + ", trim: " + this._trim + ", leadingZero: " + this._leadingZero;
  };
  Object.defineProperty(LocalizedTimeVO.prototype, "templatesSet", {
    get: function () {
      return this._templatesSet;
    },
    set: function (__s23param0) {
      this._templatesSet = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedTimeVO.NAME = "LocalizedTimeVO";
  return LocalizedTimeVO;
}(require("gge-module:class_AbstractTextContentVO").AbstractTextContentVO);
exports.LocalizedTimeVO = __s0local0;
