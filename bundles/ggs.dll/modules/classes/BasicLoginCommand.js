Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicLoginCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLoginCommand, __s1param0);
  BasicLoginCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_BasicController.BasicController.getInstance().onLogIn();
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.pln !== "" && __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sig !== "") {
      __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOGIN_SOCIAL, [__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.pln, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sig, __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime, __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.cleanReferrer, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId, "", "", __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.urlVariables.loginSource]);
    } else {
      __dep_class_BasicController.BasicController.getInstance().sendServerMessageAndWait(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOGIN, [__dep_class_BasicModel.BasicModel.userData.userName, __dep_class_BasicModel.BasicModel.userData.loginPwd, __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime.toString(), __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime.toString(), __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId.toString()], __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOGIN);
    }
  };
  return BasicLoginCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicLoginCommand = __s0local0;
