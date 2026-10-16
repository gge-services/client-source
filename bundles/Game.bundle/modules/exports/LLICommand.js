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
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_8 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_9 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_10 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_11 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleCheatData = require("gge-module:export_CastleCheatData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicTimedNoClickProperties = require("gge-module:export_BasicTimedNoClickProperties");
var __dep_export_CastleTimerOkDialog = require("gge-module:export_CastleTimerOkDialog");
var __dep_export_CastleTimerOKDialogProperties = require("gge-module:export_CastleTimerOKDialogProperties");
var __dep_export_AccountBannedDialog = require("gge-module:export_AccountBannedDialog");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function LLICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LLICommand, __s1param0);
  Object.defineProperty(LLICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_LOGIN;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  LLICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    __dep_export_CastleCheatData.CastleCheatData.cheatLoginName = null;
    if (__s9param0 != __dep_exact_26a421b704832cff_1.ERROR.ALL_OK) {
      __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().blockDialogs = false;
      this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.LLI_ERROR, "LLI", __s9param0));
    }
    __dep_exact_9e901e8e2483a22f_3.BasicModel.smartfoxClient.onLoginResponceSuccess();
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.PLAYER_NOT_FOUND:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_LOGIN_NAME);
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.INVALID_PASSWORD:
        __dep_exact_9e901e8e2483a22f_6.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_5.ClientFunnelGameStates.ERROR_LOGIN_PASSWORD);
    }
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        this.layoutManager.onEndProgressbar();
        LLICommand.authenticateToBugsnag();
        this.env.isFirstVisitOfGGS;
        this.env.isFirstVisit &&= false;
        if (__dep_export_CastleFacebookModule.CastleFacebookModule.hasAuthResponse && !__dep_export_CastleFacebookModule.CastleFacebookModule.credentialsFromLandingPage) {
          __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.UPDATE_DATA_FOR_FACEBOOK_LOGIN_REGISTRATION);
        } else if (__dep_export_CastleModel.CastleModel.userData.persistentLogin) {
          __dep_export_CastleModel.CastleModel.localData.saveFacebookID("");
          __dep_export_CastleModel.CastleModel.localData.saveUsername(__dep_export_CastleModel.CastleModel.userData.userName);
        }
        __dep_export_CastleModel.CastleModel.localData.saveCountryData(__dep_exact_9e901e8e2483a22f_8.GGSCountryController.instance.currentCountry.ggsCountryCode);
        __dep_exact_9e901e8e2483a22f_3.BasicModel.sessionData.loggedIn = true;
        if (this.env.currentCountryLanguageCode == "ko") {
          if (!this.env.isIdentityManagementActive) {
            __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
          }
          __dep_exact_9e901e8e2483a22f_3.BasicModel.identityManagement.showStuff = true;
        }
        return true;
      case __dep_exact_26a421b704832cff_1.ERROR.PLAYER_NOT_FOUND:
      case __dep_exact_26a421b704832cff_1.ERROR.INVALID_PASSWORD:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_STARTSCREEN;
        }
        this.layoutManager.unLockPanel(__dep_export_CastleStartscreenPanel.CastleStartscreenPanel);
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.NO_AVATAR_CREATED:
        this.layoutManager.state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_STARTSCREEN;
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.IS_BANNED:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_STARTSCREEN;
        }
        if ((__s9local0 = JSON.parse(__s9param1[1])).GDPR) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f_4.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("attention"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_deleted")));
        } else {
          this.handleBannedUser(__s9local0.RS);
        }
        break;
      case __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED:
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED);
        break;
      case __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA);
        break;
      case __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.playerID = __s9local0 && __s9local0.PID ? __s9local0.PID : __dep_export_CastleModel.CastleModel.userData.playerID;
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
        __dep_exact_9e901e8e2483a22f_3.BasicModel.identityManagement.authenticateViaJS();
        break;
      case __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE:
        __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_9.IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED);
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.EXISTING_MAPPING_WRONG_SERVER:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_exact_9e901e8e2483a22f_3.BasicModel.instanceProxy.getInstanceVOByID(__s9local0[__dep_exact_26a421b704832cff.CommKeys.INSTANCE_ID]);
        if (__s9local1) {
          if (__dep_export_CastleFacebookModule.CastleFacebookModule.hasAuthResponse) {
            __dep_export_CastleModel.CastleModel.localData.saveUsername("");
            __dep_export_CastleModel.CastleModel.localData.saveFacebookID(__dep_export_CastleFacebookModule.CastleFacebookModule.userID);
            __dep_export_CastleModel.CastleModel.localData.saveIsRedirectedWithFacebook(true);
          }
          __dep_exact_9e901e8e2483a22f_7.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s9local1);
        } else {
          __dep_exact_9e901e8e2483a22f_11.error("facebook account mapped to unknown instance ID or wrong network");
        }
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.INVALID_LOGIN_TOKEN:
        __dep_export_CastleModel.CastleModel.localData.deleteLoginData();
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_STARTSCREEN;
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.UNEXPECTED_FACEBOOK_ERROR:
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.LOGIN_COOLDOWN_ACTIVE:
        this.layoutManager.state = __dep_exact_9e901e8e2483a22f_2.BasicLayoutManager.STATE_STARTSCREEN;
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleTimerOkDialog.CastleTimerOkDialog, new __dep_export_CastleTimerOKDialogProperties.CastleTimerOKDialogProperties("generic_alert_information", "login_attempt_cooldown", __s9local0[__dep_exact_26a421b704832cff.CommKeys.REMAINING_COOLDOWN]));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  LLICommand.prototype.handleBannedUser = function (__s25param0) {
    var __s25local0;
    var __s25local1 = new Date();
    var __s25local2 = new Date();
    __s25local2.setTime(__s25local2.getTime() + __s25param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    __s25local0 = __s25local1.getFullYear() == __s25local2.getFullYear() && __s25local1.getMonth() == __s25local2.getMonth() && __s25local1.getDate() == __s25local2.getDate() ? __dep_exact_9e901e8e2483a22f_10.TimeStringHelper.getDateToString(__s25local2.getTime(), __dep_exact_9e901e8e2483a22f_10.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30.Localize.text) : __dep_exact_92d05af59ee2ff30.Localize.datetime(__s25local2);
    if (__s25param0 >= __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_FOUR_WEEKS) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_AccountBannedDialog.AccountBannedDialog, new __dep_export_BasicTimedNoClickProperties.BasicTimedNoClickProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_banned", [__s25local0]), __s25param0));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_AccountBannedDialog.AccountBannedDialog, new __dep_export_BasicTimedNoClickProperties.BasicTimedNoClickProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_login_banned_2", [__s25local0]), __s25param0));
    }
  };
  LLICommand.authenticateToBugsnag = function () {
    var __s29local0 = window.bugsnagClient;
    if (__s29local0) {
      __s29local0.user = {
        id: __dep_export_CastleModel.CastleModel.userData.playerID != -1 ? __dep_export_CastleModel.CastleModel.userData.playerID : __dep_export_CastleModel.CastleModel.userData.userName,
        name: __dep_export_CastleModel.CastleModel.userData.userName
      };
    }
  };
  return LLICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.LLICommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStartscreenPanel = require("gge-module:export_CastleStartscreenPanel");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
