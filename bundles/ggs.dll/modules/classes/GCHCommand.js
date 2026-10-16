Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __s0local0 = function (__s1param0) {
  function GCHCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GCHCommand, __s1param0);
  Object.defineProperty(GCHCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_CASH_HASH;
    },
    enumerable: true,
    configurable: true
  });
  GCHCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    return __s7param0 == 0 && (__s7param1.shift(), __dep_class_BasicController.BasicController.getInstance().paymentHash = String(__s7param1.shift()), true);
  };
  return GCHCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.GCHCommand = __s0local0;
