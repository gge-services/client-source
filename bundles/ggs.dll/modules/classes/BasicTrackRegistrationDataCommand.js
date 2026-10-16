Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_ConnectionTrackingUtil = require("gge-module:class_ConnectionTrackingUtil");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicTrackRegistrationDataCommand");
var __s0local1 = function (__s1param0) {
  function BasicTrackRegistrationDataCommand() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.wasExecuted = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicTrackRegistrationDataCommand, __s1param0);
  BasicTrackRegistrationDataCommand.prototype.execute = function (__s5param0 = null) {
    if (!this.wasExecuted) {
      __s0local0.warn("FIRST INSTANCE TRACKING WAS RETIRED --  REPLACE TRACKING WITH CLIENTFUNNEL?");
      if (this.env.doUserTunnelTracking) {
        __dep_class_ConnectionTrackingUtil.ConnectionTrackingUtil.instance.measureRTT(__dep_class_ConnectionTrackingUtil.ConnectionTrackingUtil.SECOND_CONNECTION_EVENT_DELAY);
        __dep_class_ConnectionTrackingUtil.ConnectionTrackingUtil.instance.measureRTT(__dep_class_ConnectionTrackingUtil.ConnectionTrackingUtil.THIRD_CONNECTION_EVENT_DELAY);
      }
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT);
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT);
      this.wasExecuted = true;
    }
  };
  Object.defineProperty(BasicTrackRegistrationDataCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicTrackRegistrationDataCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicTrackRegistrationDataCommand = __s0local1;
