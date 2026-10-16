Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSocialLoginCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSocialLoginCommand, __s1param0);
  CastleSocialLoginCommand.prototype.execute = function (__s5param0 = null) {
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().onLogIn();
    var __s5local0 = [];
    __s5local0[0] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.pln;
    __s5local0[1] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.sig;
    __s5local0[2] = __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.connectionTime;
    __s5local0[3] = __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.roundTripTime;
    __s5local0[4] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.referrer;
    __s5local0[5] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.networkId;
    __s5local0[6] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.accountId;
    __s5local0[7] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.suk;
    __s5local0[8] = __dep_exact_9e901e8e2483a22f_5.TimezoneUtil.getTrackingTimezone();
    __s5local0[9] = __dep_exact_9e901e8e2483a22f_1.BasicModel.socialData.displayNameExistingPlayer;
    __s5local0[10] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.urlVariables.websiteId;
    __s5local0[11] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.urlVariables.loginSource;
    __s5local0[12] = __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals.urlVariables.urlParams.get("gci") || "";
    __dep_exact_9e901e8e2483a22f_6.info("Social login, request parameters: " + __s5local0);
    __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.sendMessage(__dep_exact_9e901e8e2483a22f_2.BasicSmartfoxConstants.C2S_NEW_LOGIN_SOCIAL, __s5local0);
  };
  return CastleSocialLoginCommand;
}(__dep_exact_9e901e8e2483a22f_4.SimpleCommand);
exports.CastleSocialLoginCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
