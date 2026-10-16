Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function LocalHostTestEnvironment() {
    return __s1param0.call(this, LocalHostTestEnvironment.LOCAL_HOST_ENVIRONMENT_ID) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LocalHostTestEnvironment, __s1param0);
  LocalHostTestEnvironment.prototype.initPatterns = function () {
    __s1param0.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = "../../branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = "../../branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LocalHostTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLocalHost;
  };
  LocalHostTestEnvironment.LOCAL_HOST_ENVIRONMENT_ID = "LocalHostTestEnvironment";
  return LocalHostTestEnvironment;
}(require("gge-module:class_TestEnvironment").TestEnvironment);
exports.LocalHostTestEnvironment = __s0local0;
