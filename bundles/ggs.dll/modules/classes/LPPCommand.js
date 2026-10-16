Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __s0local0 = function (__s1param0) {
  function LPPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LPPCommand, __s1param0);
  Object.defineProperty(LPPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_LOST_PASSWORD_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  LPPCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_LOST_PASSWORD, __s7param0);
    return __s1param0.prototype.executeCommand.call(this, __s7param0, __s7param1);
  };
  return LPPCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.LPPCommand = __s0local0;
