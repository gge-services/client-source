Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TimezoneUtil = require("gge-module:class_TimezoneUtil");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_exact_39c566239c224ca4 = require("gge-module:exact_39c566239c224ca4");
var __s0local0 = function (__s1param0) {
  function BasicSocialLoginCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicSocialLoginCommand, __s1param0);
  BasicSocialLoginCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_BasicController.BasicController.getInstance().onLogIn();
    var __s5local0 = [];
    __s5local0[0] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.pln;
    __s5local0[1] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sig;
    __s5local0[2] = __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime;
    __s5local0[3] = __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime;
    __s5local0[4] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.cleanReferrer;
    __s5local0[5] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId;
    __s5local0[6] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId;
    __s5local0[7] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.suk;
    __s5local0[8] = __dep_class_TimezoneUtil.TimezoneUtil.getTrackingTimezone();
    __s5local0[9] = __dep_class_BasicModel.BasicModel.socialData.displayNameExistingPlayer;
    __s5local0[10] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.urlVariables.websiteId;
    __s5local0[11] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.urlVariables.loginSource;
    __s5local0[12] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.storeId;
    __s5local0[13] = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.platformId;
    __dep_exact_39c566239c224ca4.info("Social login, request parameters: " + __s5local0);
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_NEW_LOGIN_SOCIAL, __s5local0);
  };
  return BasicSocialLoginCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicSocialLoginCommand = __s0local0;
