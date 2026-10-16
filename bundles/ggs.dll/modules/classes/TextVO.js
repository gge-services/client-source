Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function TextVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._stringValue = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TextVO, __s1param0);
  Object.defineProperty(TextVO.prototype, "stringValue", {
    get: function () {
      return this._stringValue;
    },
    set: function (__s7param0) {
      this._stringValue = __s7param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  TextVO.prototype.compose = function () {
    return this._stringValue;
  };
  TextVO.prototype.toString = function () {
    return TextVO.NAME + ", stringValue: " + this._stringValue;
  };
  TextVO.NAME = "TextVO";
  return TextVO;
}(require("gge-module:class_AbstractTextContentVO").AbstractTextContentVO);
exports.TextVO = __s0local0;
