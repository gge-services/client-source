Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalInterfaceController = require("gge-module:class_ExternalInterfaceController");
var __dep_class_JavascriptCallOnLoginCompleteFactory = require("gge-module:class_JavascriptCallOnLoginCompleteFactory");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __s0local0 = function (__s1param0) {
  function BasicSendClientLoginTrackingCommand() {
    return __s1param0.call(this, true) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicSendClientLoginTrackingCommand, __s1param0);
  BasicSendClientLoginTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (!__s5param0.isLocal) {
      __dep_class_ExternalInterfaceController.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_class_JavascriptCallOnLoginCompleteFactory.JavascriptCallOnLoginCompleteFactory());
    }
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT);
  };
  return BasicSendClientLoginTrackingCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicSendClientLoginTrackingCommand = __s0local0;
