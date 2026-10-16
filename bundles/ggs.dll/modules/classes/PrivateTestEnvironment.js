Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function PrivateTestEnvironment() {
    return __s1param0.call(this, PrivateTestEnvironment.PRIVATE_TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(PrivateTestEnvironment, __s1param0);
  PrivateTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isPrivateTestServer;
  };
  PrivateTestEnvironment.PRIVATE_TEST_ENVIRONMENT_ID = "PrivateTestEnvironment";
  return PrivateTestEnvironment;
}(require("gge-module:class_LiveEnvironment").LiveEnvironment);
exports.PrivateTestEnvironment = __s0local0;
