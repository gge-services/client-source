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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function LRECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LRECommand, __s1param0);
  Object.defineProperty(LRECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_REGISTER;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  LRECommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.playerID = __s9local0 && __s9local0.PID ? __s9local0.PID : __dep_export_CastleModel.CastleModel.userData.playerID;
        __dep_export_CastleModel.CastleModel.localData.saveCountryData(__dep_exact_9e901e8e2483a22f_6.GGSCountryController.instance.currentCountry.ggsCountryCode);
        __dep_exact_9e901e8e2483a22f_3.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f_2.ClientFunnelGameStates.REGISTERED);
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GTM_CALL_GGS_TRACK_EVENT, "clientregistration");
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new __dep_export_GameSightPayloadVO.GameSightPayloadVO(__dep_export_GamesightEventConstants.GamesightEventConstants.PLAYER_REGISTRATION));
        __dep_exact_9e901e8e2483a22f_5.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_exact_9e901e8e2483a22f_8.JavascriptCallOnRegisterCompleteFactory());
        if (__dep_export_CastleFacebookModule.CastleFacebookModule.userID) {
          __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.UPDATE_DATA_FOR_FACEBOOK_LOGIN_REGISTRATION);
        } else if (__dep_export_CastleModel.CastleModel.userData.persistentLogin) {
          __dep_export_CastleModel.CastleModel.localData.saveFacebookID("");
          __dep_export_CastleModel.CastleModel.localData.saveUsername(__dep_export_CastleModel.CastleModel.userData.userName);
        }
        __dep_export_CastleModel.CastleModel.userData.sendInviterCodeToServer();
        __dep_exact_9e901e8e2483a22f_1.BasicModel.sessionData.loggedIn = true;
        return true;
      case __dep_exact_26a421b704832cff.ERROR.EMAIL_ALREADY_IN_USE:
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.EMAIL_ALREADY_IN_USE));
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_EMAIL:
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_EMAIL));
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_PASSWORD:
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_PASSWORD));
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_NAME:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME, __s9local0));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_ALREADY_IN_USE:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, __s9local0));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.WRONG_INPUT_SCREEN:
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_LOGIN_FIELD));
        break;
      case __dep_exact_26a421b704832cff.ERROR.WRONG_MODE:
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_HAS_ONLY_NUMBERS:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, __s9local0));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, __s9local0));
        }
        break;
      case __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED:
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_CLIENT_REGISTER_AGE_CHECK_FAILED);
        break;
      case __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA);
        break;
      case __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_KOREA_ID_ALREADY_REGISTERED:
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_KOREA_ID_ALREADY_REGISTERED);
        break;
      case __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.playerID = __s9local0 && __s9local0.PID ? __s9local0.PID : __dep_export_CastleModel.CastleModel.userData.playerID;
        if (__dep_exact_9e901e8e2483a22f_1.BasicModel.identityManagement) {
          __dep_exact_9e901e8e2483a22f_1.BasicModel.identityManagement.authenticateViaJS();
        } else {
          __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_CLIENT_REGISTER_MISSING_KOREA_ID_CHECK);
        }
        break;
      case __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE:
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, __dep_exact_9e901e8e2483a22f_7.IdentityManagementConstants.ERROR_CLIENT_REGISTER_NOT_ALLOWED_FOR_AGE);
        break;
      case __dep_exact_26a421b704832cff.ERROR.UNEXPECTED_FACEBOOK_ERROR:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return LRECommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.LRECommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_GamesightEventConstants = require("gge-module:export_GamesightEventConstants");
var __dep_export_GameSightPayloadVO = require("gge-module:export_GameSightPayloadVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
