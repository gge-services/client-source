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
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleCheatData = require("gge-module:export_CastleCheatData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleChooseLoginMethodCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChooseLoginMethodCommand, __s1param0);
  CastleChooseLoginMethodCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.userForcedDisconnect;
    var __s5local1 = __dep_export_CastleCheatData.CastleCheatData.cheatLoginName != null && __dep_export_CastleCheatData.CastleCheatData.cheatLoginName != "";
    var __s5local2 = __dep_export_CastleModel.CastleModel.userData.connectToSpecialServer;
    if (__s5local1 || !__s5local0 || __dep_export_CastleModel.CastleModel.localData.getIsRedirectedWithFacebook() || __s5local2) {
      var __s5local3;
      var __s5local4;
      var __s5local5 = false;
      if (this.isAutoLoginInSocialNetworkPossible()) {
        __s5local3 = "*** Castle **** With social login account.";
        __s5local5 = true;
        __dep_export_CastleModel.CastleModel.userData.persistentLogin = true;
      } else if (this.isLoginPossibleWithFacebookCookie()) {
        __s5local3 = "*** Castle **** With  facebook account stored in SharedObject.";
        __dep_export_CastleModel.CastleModel.localData.saveIsRedirectedWithFacebook(false);
        __s5local5 = true;
      } else if (this.isLoginPossibleWithCookieAccount() && !__s5local2) {
        __s5local3 = "*** Castle **** With account stored in SharedObject.";
        __dep_export_CastleModel.CastleModel.localData.saveIsRedirectedWithFacebook(false);
        __dep_export_CastleModel.CastleModel.localData.saveFacebookID("");
        __s5local5 = true;
        __dep_export_CastleModel.CastleModel.userData.persistentLogin = true;
      }
      if (!this.isAgeGateValid()) {
        __s5local4 = __s5local5 ? "*** Castle ****  Auto login would have been possible, but age gate validation is not complete." : "*** Castle ****  AgeGate validation is not complete. No login possible.";
        __dep_exact_9e901e8e2483a22f_6.info(__s5local4);
        __dep_exact_9e901e8e2483a22f_2.BasicModel.ageGateData.autoLoginTryFailed = __s5local5;
        __s5local5 = false;
      }
      if (__s5local1) {
        __dep_export_CastleModel.CastleModel.userData.userName = __dep_export_CastleCheatData.CastleCheatData.cheatLoginName;
        __dep_export_CastleModel.CastleModel.userData.loginPwd = "-+";
        __dep_export_CastleModel.CastleModel.userData.loginToken = null;
        __s5local5 = true;
      }
      if (__s5local5 && !__s5local2) {
        __dep_exact_9e901e8e2483a22f_6.info("*** Castle **** Do autologin: " + __s5local3);
        this.login();
        return;
      }
      if (__s5local2) {
        this.login();
        return;
      }
    }
    __dep_exact_9e901e8e2483a22f_6.info("*** Castle **** No auto login possible, show startscreen.");
    this.handleAutoLoginImpossible();
  };
  CastleChooseLoginMethodCommand.prototype.isAgeGateValid = function () {
    return !__dep_exact_9e901e8e2483a22f_2.BasicModel.ageGateData.isAgeGateActive || !!__dep_exact_9e901e8e2483a22f_2.BasicModel.ageGateData.validationSucceeded;
  };
  CastleChooseLoginMethodCommand.prototype.handleAutoLoginImpossible = function () {
    __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.getInstance().state = __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_STARTSCREEN;
  };
  CastleChooseLoginMethodCommand.prototype.isAutoLoginInSocialNetworkPossible = function () {
    var __s19local0 = __dep_exact_9e901e8e2483a22f_2.BasicModel.socialData.displayNameExistingPlayer;
    if (__s19local0 && __s19local0 != "") {
      var __s19local1 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_2.BasicModel.instanceProxy.instanceMap.length);
      var __s19local2 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_2.BasicModel.instanceProxy.instanceMap[0].countries.length);
      return __s19local1 != 1 || !(__s19local2 > 1);
    }
    return false;
  };
  CastleChooseLoginMethodCommand.prototype.isLoginPossibleWithFacebookCookie = function () {
    var __s22local0 = __dep_export_CastleModel.CastleModel.localData.getFacebookID();
    return !!__s22local0 && __s22local0 != "";
  };
  CastleChooseLoginMethodCommand.prototype.isLoginPossibleWithCookieAccount = function () {
    var __s24local0 = __dep_export_CastleModel.CastleModel.localData.readLoginDataUsername();
    var __s24local1 = __dep_export_CastleModel.CastleModel.localData.readLoginDataLoginToken();
    return !!this.hasAccountSavedInCookie(__s24local0, __s24local1) && (__dep_export_CastleModel.CastleModel.userData.userName = __s24local0, __dep_export_CastleModel.CastleModel.userData.loginToken = __s24local1, true);
  };
  CastleChooseLoginMethodCommand.prototype.hasAccountSavedInCookie = function (__s26param0, __s26param1) {
    return !!__s26param0 && __s26param0 != "" && !!__s26param1 && __s26param1 != "";
  };
  CastleChooseLoginMethodCommand.prototype.login = function () {
    var __s28local0;
    if (__dep_export_CastleModel.CastleModel.userData.connectToSpecialServer && __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken) {
      if (__dep_export_CastleModel.CastleModel.userData.connectToTempServer) {
        __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER, "login");
      }
      if (__dep_export_CastleModel.CastleModel.userData.connectToABGServer) {
        __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER, "login");
      }
      return;
    }
    __s28local0 = __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.isSSO && !__dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.useLegacySocialRegistration ? __dep_exact_9e901e8e2483a22f.BasicController.COMMAND_SOCIAL_LOGIN : __dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGIN;
    __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__s28local0);
  };
  return CastleChooseLoginMethodCommand;
}(__dep_exact_9e901e8e2483a22f_5.SimpleCommand);
exports.CastleChooseLoginMethodCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
