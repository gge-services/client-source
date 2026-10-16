Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_Localize = require("gge-module:class_Localize");
var __s0local0 = function (__s1param0) {
  function LocalizedTextVO(__s3param0 = null, __s3param1 = null, __s3param2 = true) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._groupNumber = false;
    __s3local0._textId = __s3param0;
    __s3local0._textReplacements = __s3param1;
    __s3local0._groupNumber = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocalizedTextVO, __s1param0);
  Object.defineProperty(LocalizedTextVO.prototype, "textId", {
    get: function () {
      return this._textId;
    },
    set: function (__s7param0) {
      this._textId = __s7param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTextVO.prototype, "textReplacements", {
    get: function () {
      return this._textReplacements;
    },
    set: function (__s11param0) {
      this._textReplacements = __s11param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTextVO.prototype, "groupNumber", {
    get: function () {
      return this._groupNumber;
    },
    set: function (__s15param0) {
      this._groupNumber = __s15param0;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  LocalizedTextVO.prototype.compose = function () {
    return __dep_class_Localize.Localize.text(this._textId, this._textReplacements, this._groupNumber);
  };
  LocalizedTextVO.prototype.toString = function () {
    return LocalizedTextVO.NAME + ", textId: " + this._textId + ", textReplacements: " + this._textReplacements + ", groupNumber: " + this._groupNumber;
  };
  LocalizedTextVO.NAME = "LocalizedTextVO";
  return LocalizedTextVO;
}(require("gge-module:class_AbstractTextContentVO").AbstractTextContentVO);
exports.LocalizedTextVO = __s0local0;
