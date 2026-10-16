Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TimezoneUtil = require("gge-module:class_TimezoneUtil");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicC2SRegisterUserVO = require("gge-module:class_BasicC2SRegisterUserVO");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicTrackingStringComposer = require("gge-module:class_BasicTrackingStringComposer");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __s0local0 = function (__s1param0) {
  function BasicRegisterUserCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicRegisterUserCommand, __s1param0);
  BasicRegisterUserCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = this.parseCommandVariables(__s5param0);
    this.saveDataInCookie();
    this.saveAccountInUserData(__s5local0.username, __s5local0.password);
    var __s5local1 = this.composeRegisterUserVO(__s5local0);
    this.sendRegisterUserCommand(__s5local1);
  };
  Object.defineProperty(BasicRegisterUserCommand.prototype, "registrationVOClass", {
    get: function () {
      return __dep_class_BasicC2SRegisterUserVO.BasicC2SRegisterUserVO;
    },
    enumerable: true,
    configurable: true
  });
  BasicRegisterUserCommand.prototype.parseCommandVariables = function (__s9param0 = null) {
    throw new Error("You must implement parseCommandVariables()");
  };
  BasicRegisterUserCommand.prototype.composeRegisterUserVO = function (__s11param0) {
    var __s11local0;
    try {
      __s11local0 = new this.registrationVOClass();
    } catch (__s14local0) {
      __dep_exact_048b0d27b75c40dd.error("TypeError");
    }
    __s11local0.username = __s11param0.username;
    __s11local0.email = __s11param0.email;
    __s11local0.password = __s11param0.password;
    __s11local0.accountId = this.env.accountId;
    __s11local0.ggsLanguageCode = __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    __s11local0.referrer = this.env.cleanReferrer;
    __s11local0.distributorId = Number(this.env.distributorId);
    __s11local0.connectionTime = __dep_class_BasicModel.BasicModel.smartfoxClient.connectionTime;
    __s11local0.roundTripTime = __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripTime;
    __s11local0.campaignVars = __dep_class_BasicTrackingStringComposer.BasicTrackingStringComposer.composeVarDataForRegistration(__s11param0.email, this.env.referrer);
    __s11local0.campaignVars_adid = this.env.campainVars.aid;
    __s11local0.campaignVars_lp = this.env.campainVars.lp;
    __s11local0.campaignVars_creative = this.env.campainVars.creative;
    __s11local0.campaignVars_partnerId = this.env.campainVars.partnerId;
    __s11local0.campaignVars_websiteId = this.env.urlVariables.websiteId;
    __s11local0.timezone = __dep_class_TimezoneUtil.TimezoneUtil.getTrackingTimezone();
    __s11local0.initialize();
    return __s11local0;
  };
  BasicRegisterUserCommand.prototype.sendRegisterUserCommand = function (__s16param0) {
    throw new Error("You must implement sendRegisterUserCommand()");
  };
  BasicRegisterUserCommand.prototype.saveDataInCookie = function () {
    this.saveCurrentCountryInNetworkCookie();
    this.saveGameDataInCookie();
  };
  BasicRegisterUserCommand.prototype.saveCurrentCountryInNetworkCookie = function () {};
  BasicRegisterUserCommand.prototype.saveGameDataInCookie = function () {};
  BasicRegisterUserCommand.prototype.saveAccountInUserData = function (__s24param0, __s24param1) {
    __dep_class_BasicModel.BasicModel.userData.userName = __s24param0;
    __dep_class_BasicModel.BasicModel.userData.loginPwd = __s24param1;
  };
  Object.defineProperty(BasicRegisterUserCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicRegisterUserCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicRegisterUserCommand = __s0local0;
