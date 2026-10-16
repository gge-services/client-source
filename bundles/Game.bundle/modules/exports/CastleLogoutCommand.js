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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_CastleLogoutEvent = require("gge-module:export_CastleLogoutEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFacebookModule = require("gge-module:export_CastleFacebookModule");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
var __dep_export_CastleDeleteAccountMicroservice = require("gge-module:export_CastleDeleteAccountMicroservice");
var __dep_export_CastleWebShopAccountIDMicroservice = require("gge-module:export_CastleWebShopAccountIDMicroservice");
var __s0local0 = function (__s1param0) {
  function CastleLogoutCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLogoutCommand, __s1param0);
  CastleLogoutCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleLogoutEvent.CastleLogoutEvent(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED));
    __dep_exact_9e901e8e2483a22f_5.BasicLogoutCommand.DELETE_LOGIN_DATA_ON_LOGOUT = !__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer;
    __s1param0.prototype.execute.call(this, __s5param0);
    __dep_export_cxfResetCommandCache.cxfResetCommandCache();
    __dep_export_CastleDataHolder.CastleDataHolder.instance.gbdParsed = false;
    __dep_export_CastleDataHolder.CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
    __dep_export_CastleModel.CastleModel.userData.joinCastleCount = 0;
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.reset();
    __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.reset();
    __dep_export_CastleWebShopAccountIDMicroservice.CastleWebShopAccountIDMicroservice.Instance.reset();
    __dep_export_CastleModel.CastleModel.userData.resetApiToken();
    __dep_export_CastleModel.CastleModel.userData.resetFacebookData();
    __dep_export_CastleFacebookModule.CastleFacebookModule.reset();
    __dep_exact_9e901e8e2483a22f_3.BasicModel.networkCookie.facebookAccessToken = "";
    if (__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnSpecialServer) {
      __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken = null;
      __dep_export_CastleModel.CastleModel.userData.resetConnectToFlags();
      this.changeInstanceFromTempToHome();
      return;
    }
    if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsOnLogout");
    }
    __dep_export_CastleModel.CastleModel.localData.deleteLoginData();
    __dep_exact_9e901e8e2483a22f_4.BasicContextMenuController.instance.enableContextMenuItem(__dep_exact_9e901e8e2483a22f_4.BasicContextMenuController.SUPPORT_LABEL);
  };
  CastleLogoutCommand.prototype.changeInstanceFromTempToHome = function () {
    __dep_export_CastleModel.CastleModel.userData.resetConnectToFlags();
    __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken = null;
    window.ggs.worldAssignment.selectInstance(__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.originalInstanceVOBeforeSpecialServer);
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CHECK_MAINTENANCE, __dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CONNECT_CLIENT);
  };
  return CastleLogoutCommand;
}(__dep_exact_9e901e8e2483a22f_5.BasicLogoutCommand);
exports.CastleLogoutCommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
