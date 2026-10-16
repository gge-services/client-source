Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __s0local0 = function (__s1param0) {
  function BasicTestCaseInfoCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicTestCaseInfoCommand, __s1param0);
  BasicTestCaseInfoCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = __s5param0[0];
      __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_TEST_CASE_INFO, [__s5local0]);
    } else {
      __dep_exact_ba3768902da9162c.warn("Can't request TestCaseInfo without a testCaseID");
    }
  };
  return BasicTestCaseInfoCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicTestCaseInfoCommand = __s0local0;
