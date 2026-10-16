Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicConstants = require("gge-module:class_BasicConstants");
var __s0local0 = function (__s1param0) {
  function DevTestEnvironment() {
    return __s1param0.call(this, DevTestEnvironment.DEV_TEST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(DevTestEnvironment, __s1param0);
  DevTestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test-dev/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = __dep_class_BasicConstants.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test-dev/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  DevTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isDevTest;
  };
  DevTestEnvironment.DEV_TEST_ENVIRONMENT_ID = "DevTestEnvironment";
  return DevTestEnvironment;
}(require("gge-module:class_TestEnvironment").TestEnvironment);
exports.DevTestEnvironment = __s0local0;
