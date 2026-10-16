Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_TestCaseInfoEvent = require("gge-module:class_TestCaseInfoEvent");
var __dep_exact_407c3085171b4394 = require("gge-module:exact_407c3085171b4394");
var __s0local0 = function (__s1param0) {
  function TCICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TCICommand, __s1param0);
  Object.defineProperty(TCICommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_TEST_CASE_INFO;
    },
    enumerable: true,
    configurable: true
  });
  TCICommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 == __dep_exact_407c3085171b4394.CoreErrorIdConstants.OK) {
      var __s7local0 = JSON.parse(__s7param1.pop());
      __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_TestCaseInfoEvent.TestCaseInfoEvent(__dep_class_TestCaseInfoEvent.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, __s7local0));
      return true;
    }
    __dep_exact_048b0d27b75c40dd.error("TCICommand received TestCaseInfo error: " + __s7param0.toString());
    return false;
  };
  return TCICommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.TCICommand = __s0local0;
