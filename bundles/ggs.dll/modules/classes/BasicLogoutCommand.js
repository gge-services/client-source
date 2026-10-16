Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_PerformanceMonitoringService = require("gge-module:class_PerformanceMonitoringService");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_JavascriptFunctionName = require("gge-module:class_JavascriptFunctionName");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function BasicLogoutCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLogoutCommand, __s1param0);
  BasicLogoutCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isFirstVisitOfGGS = false;
    __dep_class_BasicController.BasicController.getInstance().onLogOut();
    __dep_class_BasicModel.BasicModel.sessionData.resetLoggedinTimer();
    __dep_class_BasicModel.BasicModel.smartfoxClient.logout();
    __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().revertFullscreen();
    __dep_export_CSSMouseCursor.ExternalInterface.call(__dep_class_JavascriptFunctionName.JavascriptFunctionName.ON_LOGOUT);
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isSSO) {
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.REQUEST_SOCIAL_LOGIN_KEYS);
    }
    if (BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT) {
      __dep_class_BasicModel.BasicModel.localData.deleteLoginData();
    }
    __dep_class_PerformanceMonitoringService.PerformanceMonitoringService.getInstance().stopMonitoring();
  };
  BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT = true;
  return BasicLogoutCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicLogoutCommand = __s0local0;
