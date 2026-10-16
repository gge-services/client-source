Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicLoginJsonCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLoginJsonCommand, __s1param0);
  BasicLoginJsonCommand.prototype.execute = function (__s5param0 = null) {
    if (__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.pln !== "" && __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sig !== "") {
      __s5param0.PLN = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.pln;
      __s5param0.KEY = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sig;
      __s5param0.connectTime = __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime;
      __s5param0.ping = __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime;
      __s5param0.referrer = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.cleanReferrer;
      __s5param0.networkID = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId;
      __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOGIN_SOCIAL, [JSON.stringify(__s5param0)]);
    } else {
      __s5param0.name = __dep_class_BasicModel.BasicModel.userData.userName;
      __s5param0.pw = __dep_class_BasicModel.BasicModel.userData.loginPwd;
      __s5param0.lang = __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode;
      __s5param0.did = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.distributorId;
      __s5param0.connectTime = __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime;
      __s5param0.ping = __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime;
      __s5param0.accountId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId;
      __dep_class_BasicController.BasicController.getInstance().sendServerMessageAndWait(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOGIN, [JSON.stringify(__s5param0)], __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_LOGIN);
    }
  };
  return BasicLoginJsonCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicLoginJsonCommand = __s0local0;
