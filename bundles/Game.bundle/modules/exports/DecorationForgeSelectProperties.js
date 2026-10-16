Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DecorationForgeSelectProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._buttons = __s3param0;
    __s3local0._onSuccessFunc = __s3param1;
    __s3local0._onAbortFunc = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectProperties, __s1param0);
  Object.defineProperty(DecorationForgeSelectProperties.prototype, "onSuccessFunc", {
    get: function () {
      return this._onSuccessFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectProperties.prototype, "onAbortFunc", {
    get: function () {
      return this._onAbortFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectProperties.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.DecorationForgeSelectProperties = __s0local0;
