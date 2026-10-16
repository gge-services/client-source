Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLogoutEvent = require("gge-module:export_CastleLogoutEvent");
var __dep_export_CastleFacebookEvent = require("gge-module:export_CastleFacebookEvent");
var __dep_export_CastleFacebookSDKEvent = require("gge-module:export_CastleFacebookSDKEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SMapFacebookVO = require("gge-module:export_C2SMapFacebookVO");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("CastleMapFacebookAccountCommand");
var __s0local1 = function (__s1param0) {
  function CastleMapFacebookAccountCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMapFacebookAccountCommand, __s1param0);
  CastleMapFacebookAccountCommand.prototype.execute = function (__s5param0) {
    this.removeListeners();
    if (__s5param0) {
      this.controller.addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
      this.controller.addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
      this.controller.addEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
      __dep_export_CastleFacebookModule.CastleFacebookModule.login();
    } else {
      this.unmap();
    }
  };
  CastleMapFacebookAccountCommand.prototype.onFbCancel = function (__s9param0) {
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.controller.dispatchEvent(new __dep_export_CastleFacebookEvent.CastleFacebookEvent(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_ACTION_CANCELED));
  };
  CastleMapFacebookAccountCommand.prototype.onFBLoggedIn = function (__s11param0) {
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.map();
  };
  CastleMapFacebookAccountCommand.prototype.map = function () {
    this.addMappingListeners();
    this.controller.addEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    __dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook = true;
    __dep_export_CastleModel.CastleModel.localData.saveFacebookID(__dep_export_CastleFacebookModule.CastleFacebookModule.userID);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMapFacebookVO.C2SMapFacebookVO(true, __dep_export_CastleFacebookModule.CastleFacebookModule.userID, __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken, __dep_export_CastleFacebookModule.CastleFacebookModule.appID));
  };
  CastleMapFacebookAccountCommand.prototype.onLogout = function (__s15param0) {
    this.removeMappingListeners();
    this.controller.removeEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
  };
  CastleMapFacebookAccountCommand.prototype.unmap = function () {
    this.addMappingListeners();
    this.controller.addEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMapFacebookVO.C2SMapFacebookVO(false, __dep_export_CastleFacebookModule.CastleFacebookModule.userID, __dep_export_CastleFacebookModule.CastleFacebookModule.accessToken, __dep_export_CastleFacebookModule.CastleFacebookModule.appID));
  };
  CastleMapFacebookAccountCommand.prototype.onUnmapFailed = function (__s19param0) {
    this.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
    __dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook = true;
  };
  CastleMapFacebookAccountCommand.prototype.addMappingListeners = function () {
    this.controller.addEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.addEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  };
  CastleMapFacebookAccountCommand.prototype.removeMappingListeners = function () {
    this.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  };
  CastleMapFacebookAccountCommand.prototype.onMappingUpdated = function (__s25param0) {
    this.removeMappingListeners();
    if (__dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook) {
      __s0local0.debug("Facebook_User <--> Player mapped successfully");
      __dep_export_CastleModel.CastleModel.localData.saveFacebookID(__dep_export_CastleFacebookModule.CastleFacebookModule.userID);
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.GET_FACEBOOK_USER_DATA, false);
    } else {
      __s0local0.debug("Facebook_User <--> Player UNmapped successfully");
      this.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
      if (__dep_export_CastleFacebookModule.CastleFacebookModule.hasAuthResponse) {
        __dep_export_CastleFacebookModule.CastleFacebookModule.revokeLogin();
      }
      __dep_export_CastleModel.CastleModel.userData.resetFacebookData();
    }
  };
  CastleMapFacebookAccountCommand.prototype.removeListeners = function () {
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(__dep_export_CastleFacebookSDKEvent.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.removeEventListener(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.onUnmapFailed));
    this.controller.removeEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
  };
  Object.defineProperty(CastleMapFacebookAccountCommand.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleMapFacebookAccountCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.CastleMapFacebookAccountCommand = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
