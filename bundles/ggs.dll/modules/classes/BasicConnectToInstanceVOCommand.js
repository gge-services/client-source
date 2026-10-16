Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_InstanceErrorLOFactory = require("gge-module:class_InstanceErrorLOFactory");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_SmartfoxEvent = require("gge-module:class_SmartfoxEvent");
var __dep_class_BasicSmartfoxClient = require("gge-module:class_BasicSmartfoxClient");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_shouldReloadBranch = require("gge-module:export_shouldReloadBranch");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("BasicConnectToInstanceVOCommand");
var __s0local1 = function (__s1param0) {
  function BasicConnectToInstanceVOCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicConnectToInstanceVOCommand, __s1param0);
  BasicConnectToInstanceVOCommand.prototype.execute = function (__s5param0) {
    if (!__s5param0) {
      __s0local0.error("trying to connect to an instance without passing an instance ??");
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_InstanceErrorLOFactory.InstanceErrorLOFactory(__dep_class_InstanceErrorLOFactory.InstanceErrorLOFactory.CONNECT_TO_INSTANCE_NULL));
      return;
    }
    __s0local0.debug("Going to connect to instance: " + __s5param0.instanceId);
    if (__dep_export_shouldReloadBranch.shouldReloadBranch(__s5param0)) {
      __s0local0.warn("Reloading game because new instance is on a different branch");
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __s5param0);
    } else {
      if (__dep_class_BasicModel.BasicModel.smartfoxClient) {
        __dep_class_BasicModel.BasicModel.smartfoxClient.removeEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
        __dep_class_BasicModel.BasicModel.smartfoxClient.addEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
      } else {
        __dep_class_BasicModel.BasicModel.smartfoxClient = new __dep_class_BasicSmartfoxClient.BasicSmartfoxClient();
      }
      var __s5local0 = window.ggs.worldAssignment;
      if (__s5param0.instanceId != __s5local0.facade.selectedNetworkInstance.instanceId) {
        __s5local0.selectInstance(__s5param0);
      }
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_CHECK_MAINTENANCE, __dep_class_BasicController.BasicController.COMMAND_CONNECT_CLIENT);
    }
  };
  BasicConnectToInstanceVOCommand.prototype.onConnectionEstablished = function (__s13param0) {
    if (__dep_class_BasicModel.BasicModel.localData && __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.suk == "") {
      __dep_class_BasicModel.BasicModel.localData.saveInstance(__dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId, __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.zoneId);
    }
    __dep_class_BasicModel.BasicModel.smartfoxClient.removeEventListener(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
  };
  BasicConnectToInstanceVOCommand.NAME = "BasicConnectToInstanceVOCommand";
  return BasicConnectToInstanceVOCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicConnectToInstanceVOCommand = __s0local1;
