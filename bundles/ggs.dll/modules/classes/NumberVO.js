Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_AbstractTextContentVO = require("gge-module:class_AbstractTextContentVO");
var __dep_class_Localize = require("gge-module:class_Localize");
var __s0local0 = function (__s1param0) {
  function NumberVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._numberValue = "";
    __s3local0._numberValue = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(NumberVO, __s1param0);
  Object.defineProperty(NumberVO.prototype, "numberValue", {
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
  NumberVO.prototype.compose = function () {
    if (typeof this._numberValue == "number") {
      return __dep_class_Localize.Localize.numberForArabic(this._numberValue);
    } else {
      return this._numberValue;
    }
  };
  NumberVO.prototype.toString = function () {
    return NumberVO.NAME + ", numberValue: " + this._numberValue;
  };
  NumberVO.NAME = "NumberVO";
  return NumberVO;
}(__dep_class_AbstractTextContentVO.AbstractTextContentVO);
exports.NumberVO = __s0local0;
