Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_ClientConstReCaptcha = require("gge-module:export_ClientConstReCaptcha");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_C2SLoginVO = require("gge-module:export_C2SLoginVO");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("Connection.CastleLoginCommand");
var __s0local1 = function (__s1param0) {
  function CastleLoginCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLoginCommand, __s1param0);
  CastleLoginCommand.prototype.execute = function (__s5param0 = null) {
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().onLogIn();
    __dep_exact_9e901e8e2483a22f.BasicModel.sessionData.loggedIn = true;
    if (!__s0local2() && !__s0local3(__s5param0) && !__s0local4()) {
      __s0local5();
    }
  };
  return CastleLoginCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.CastleLoginCommand = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
function __s0local2() {
  var __s8local0 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
  return __s8local0.pln !== "" && __s8local0.sig !== "" && (__dep_export_CastleModel.CastleModel.smartfoxClient.sendMessage(__dep_export_ClientConstSF.ClientConstSF.C2S_LOGIN_SOCIAL, [__s8local0.pln, __s8local0.sig, __dep_export_CastleModel.CastleModel.smartfoxClient.connectionTime, __dep_export_CastleModel.CastleModel.smartfoxClient.roundTripTime, __s8local0.referrer, __s8local0.networkId, __s8local0.accountId, __s8local0.suk, Math.round(new Date().getTimezoneOffset() * -1 / 60) + 13]), true);
}
function __s0local3(__s10param0) {
  return __s10param0 !== null && !!__s0local7(__s10param0) && (__dep_export_CastleModel.CastleModel.localData.saveFacebookID(__s10param0.userID), __s0local6(__s10param0), true);
}
function __s0local4() {
  var __s12local0 = __dep_export_CastleModel.CastleModel.localData.getFacebookID();
  return !!__s12local0 && (__dep_export_CastleFacebookModule.CastleFacebookModule.hasAuthResponse ? __dep_export_CastleFacebookModule.CastleFacebookModule.userID != __s12local0 ? (__s0local0.warn("Facebook UserID we found in Cookies does not match with user currently logged in Facebook"), __dep_export_CastleModel.CastleModel.localData.deleteLoginData(), __dep_exact_9e901e8e2483a22f.BasicLayoutManager.getInstance().state = __dep_exact_9e901e8e2483a22f.BasicLayoutManager.STATE_STARTSCREEN) : __s0local6(__dep_export_CastleFacebookModule.facebookAuthResponse()) : (__s0local0.debug("found fb cookie " + __s12local0 + " but user is not logged in,  show login panel"), __dep_export_CastleModel.CastleModel.localData.deleteLoginData(), __dep_exact_9e901e8e2483a22f.BasicLayoutManager.getInstance().state = __dep_exact_9e901e8e2483a22f.BasicLayoutManager.STATE_STARTSCREEN), true);
}
function __s0local5() {
  var __s14local0 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
  var __s14local1 = new __dep_export_C2SLoginVO.C2SLoginVO(__dep_export_CastleModel.CastleModel.userData.userName, __dep_export_CastleModel.CastleModel.userData.loginPwd, __dep_export_CastleModel.CastleModel.userData.loginToken, __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode, __s14local0.distributorId, __dep_export_CastleModel.CastleModel.smartfoxClient.connectionTime, __dep_export_CastleModel.CastleModel.smartfoxClient.roundTripTime, __s14local0.accountId, __s14local0.referrer, __s14local0.identityManagementId, __dep_export_CastleModel.CastleModel.userData.persistentLogin);
  __s0local8(__s14local1);
  return true;
}
function __s0local6(__s16param0) {
  var __s16local0 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
  var __s16local1 = new __dep_export_C2SLoginVO.C2SLoginVO(null, null, null, __dep_exact_9e901e8e2483a22f.GGSCountryController.instance.currentCountry.ggsLanguageCode, __s16local0.distributorId, __dep_export_CastleModel.CastleModel.smartfoxClient.connectionTime, __dep_export_CastleModel.CastleModel.smartfoxClient.roundTripTime, __s16local0.accountId, __s16local0.referrer, __s16local0.identityManagementId, __dep_export_CastleModel.CastleModel.userData.persistentLogin);
  __s16local1.FID = __s16param0 ? __s16param0.userID : __dep_export_CastleFacebookModule.CastleFacebookModule.userID;
  __s16local1.FTK = __s16param0 ? __s16param0.accessToken : __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken;
  __s16local1.FAID = __dep_export_CastleFacebookModule.CastleFacebookModule.appID;
  __s0local8(__s16local1);
}
function __s0local7(__s18param0) {
  return __s18param0.userID !== undefined && __s18param0.accessToken !== undefined && __s18param0.expiresIn !== undefined && __s18param0.signedRequest !== undefined;
}
function __s0local8(__s20param0, __s20param1 = 20) {
  try {
    window.grecaptcha.ready(function () {
      var __s23local0 = __dep_export_ClientConstReCaptcha.ClientConstReCaptcha.getSiteKey();
      window.grecaptcha.execute(__s23local0, {
        action: "login"
      }).then(function (__s25param0) {
        __s20param0.RCT = __s25param0;
        __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = true;
        __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendCommandVOAndWait(__s20param0);
      }).catch(function (__s27param0) {
        if (__s20param1 > 0) {
          window.setTimeout(function () {
            __s0local8(__s20param0, __s20param1 - 1);
          }, 250);
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
        }
      });
    });
  } catch (__s33local0) {
    if (__s20param1 > 0) {
      window.setTimeout(function () {
        __s0local8(__s20param0, __s20param1 - 1);
      }, 250);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
    }
  }
}
