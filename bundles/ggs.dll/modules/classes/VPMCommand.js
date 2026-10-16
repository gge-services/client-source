Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __s0local0 = function (__s1param0) {
  function VPMCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(VPMCommand, __s1param0);
  Object.defineProperty(VPMCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_VERIFY_PLAYER_MAIL_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  VPMCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_VERIFY_PLAYER_MAIL, __s7param0);
    return __s1param0.prototype.executeCommand.call(this, __s7param0, __s7param1);
  };
  return VPMCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.VPMCommand = __s0local0;
