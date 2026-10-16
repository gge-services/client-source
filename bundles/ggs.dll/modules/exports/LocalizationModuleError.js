Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function LocalizationModuleError(__s3param0 = "", __s3param1 = "") {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._id = "";
    __s3local0._id = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocalizationModuleError, __s1param0);
  Object.defineProperty(LocalizationModuleError.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  return LocalizationModuleError;
}(Error);
exports.LocalizationModuleError = __s0local0;
