Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_IdentityManagementEvent = require("gge-module:class_IdentityManagementEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicIdentityManagementData = require("gge-module:class_BasicIdentityManagementData");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicIdentityManagementCommand");
var __s0local1 = function (__s1param0) {
  function BasicIdentityManagementCommand(__s3param0 = false) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicIdentityManagementCommand, __s1param0);
  BasicIdentityManagementCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isIdentityManagementActive = __s5local0;
    __s0local0.debug("[BasicIdentityManagementCommand] execute() -> isIdentityManagementActive: " + __s5local0);
    if (__s5local0) {
      if (!__dep_class_BasicModel.BasicModel.identityManagement) {
        __dep_class_BasicModel.BasicModel.identityManagement = new __dep_class_BasicIdentityManagementData.BasicIdentityManagementData();
        __dep_class_BasicModel.BasicModel.identityManagement.initialize();
      }
      __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_IdentityManagementEvent.IdentityManagementEvent(__dep_class_IdentityManagementEvent.IdentityManagementEvent.ID_MANAGEMENT_ACTIVE));
    } else {
      if (__dep_class_BasicModel.BasicModel.identityManagement) {
        __dep_class_BasicModel.BasicModel.identityManagement.dispose();
        __dep_class_BasicModel.BasicModel.identityManagement = null;
      }
      __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_IdentityManagementEvent.IdentityManagementEvent(__dep_class_IdentityManagementEvent.IdentityManagementEvent.ID_MANAGEMENT_INCTIVE));
    }
  };
  BasicIdentityManagementCommand.NAME = "BasicIdentityManagementCommand";
  return BasicIdentityManagementCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicIdentityManagementCommand = __s0local1;
