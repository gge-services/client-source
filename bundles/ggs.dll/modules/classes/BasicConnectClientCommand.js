Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicSmartfoxClient = require("gge-module:class_BasicSmartfoxClient");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("Connection.BasicConnectClientCommand");
var __s0local1 = function (__s1param0) {
  function BasicConnectClientCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicConnectClientCommand, __s1param0);
  BasicConnectClientCommand.prototype.execute = function () {
    var __s5local0 = __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO;
    if (__s5local0) {
      if (__dep_class_BasicModel.BasicModel.smartfoxClient == null) {
        __dep_class_BasicModel.BasicModel.smartfoxClient = new __dep_class_BasicSmartfoxClient.BasicSmartfoxClient();
      }
      __s0local0.info("Connect to: " + __s5local0.instanceId, __s5local0.ip);
      __dep_class_BasicController.BasicController.getInstance().connectClient(__s5local0.ip, __s5local0.port);
    } else {
      __s0local0.error("Network instance is null!");
    }
  };
  return BasicConnectClientCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicConnectClientCommand = __s0local1;
