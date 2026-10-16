Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSocketDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._lordID = 0;
    __s3local0._gemVO = __s3param0;
    __s3local0._oldGemVO = __s3param1;
    __s3local0._eqVO = __s3param2;
    __s3local0._lordID = __s3param3;
    __s3local0._onConfirm = __s3param4;
    __s3local0._onAbort = __s3param5;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSocketDialogProperties, __s1param0);
  Object.defineProperty(CastleSocketDialogProperties.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "oldGemVO", {
    get: function () {
      return this._oldGemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "eqVO", {
    get: function () {
      return this._eqVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "onConfirm", {
    get: function () {
      return this._onConfirm;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "onAbort", {
    get: function () {
      return this._onAbort;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSocketDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSocketDialogProperties = __s0local0;
