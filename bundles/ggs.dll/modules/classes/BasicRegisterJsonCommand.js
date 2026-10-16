Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicRegisterJsonCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicRegisterJsonCommand, __s1param0);
  BasicRegisterJsonCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = __s5local0.shift();
    var __s5local2 = __s5local0.shift();
    var __s5local3 = __s5local0.shift();
    __s5local3.mail = __s5local1;
    __s5local3.pw = __s5local2;
    __s5local3.referrer = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.cleanReferrer;
    __s5local3.lang = __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    __s5local3.did = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.distributorId;
    __s5local3.connectTime = __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime;
    __s5local3.ping = __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime;
    __s5local3.accountId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId;
    __s5local3.campainPId = parseInt(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.partnerId);
    __s5local3.campainCr = parseInt(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.creative);
    __s5local3.campainPl = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.placement;
    __s5local3.campainKey = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.keyword;
    __s5local3.campainNW = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.network;
    __s5local3.campainLP = parseInt(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.lp);
    __s5local3.campainCId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.channelId;
    __s5local3.campainTS = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.trafficSource;
    __s5local3.adid = parseInt(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.aid);
    __s5local3.camp = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.camp;
    __s5local3.adgr = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.adgr;
    __s5local3.matchtype = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.campainVars.matchtype;
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_REGISTER, [JSON.stringify(__s5local3)]);
    __dep_class_BasicModel.BasicModel.userData.loginPwd = __s5local2;
  };
  return BasicRegisterJsonCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicRegisterJsonCommand = __s0local0;
