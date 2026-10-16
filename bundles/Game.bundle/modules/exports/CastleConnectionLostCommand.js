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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleConnectionLostCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConnectionLostCommand, __s1param0);
  CastleConnectionLostCommand.prototype.execute = function (__s5param0 = null) {
    if (this.layoutManager.currentState != __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_STARTSCREEN) {
      var __s5local0 = __dep_exact_9e901e8e2483a22f_6.EnvGlobalsHandler.globals;
      __s5local0.isFacebook;
      if (__dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.userForcedDisconnect) {
        if (__s5local0.underAgeConnectionLost && __s5local0.isIdentityManagementActive) {
          __dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame = true;
          __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_DESTROY_GAME);
          __dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame = false;
          this.layoutManager.state = __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_CONNECT;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleReconnectDialog.CastleReconnectDialog, new __dep_exact_9e901e8e2483a22f_3.BasicReconnectDialogProperties(__dep_exact_9e901e8e2483a22f_2.BasicModel.languageData.getTextById("generic_alert_information"), __dep_exact_9e901e8e2483a22f_2.BasicModel.languageData.getTextById("generic_alert_korea_logoutMessage"), this.bindFunction(this.onReconnect), __dep_exact_9e901e8e2483a22f_2.BasicModel.languageData.getTextById("generic_btn_reconnect")));
        } else {
          __dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame = true;
          __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_DESTROY_GAME);
          __dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame = false;
          this.layoutManager.state = __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_CONNECT;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleReconnectDialog.CastleReconnectDialog, new __dep_exact_9e901e8e2483a22f_3.BasicReconnectDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_loggedout_title"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_logout_copy"), this.bindFunction(this.onReconnect), __dep_exact_92d05af59ee2ff30.Localize.text("generic_btn_reconnect")));
        }
      } else {
        __dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame = true;
        __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_DESTROY_GAME);
        __dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame = false;
        this.layoutManager.state = __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_CONNECT;
        if (__dep_export_CastleModel.CastleModel.userData.connectToSpecialServer || __dep_exact_9e901e8e2483a22f_6.EnvGlobalsHandler.globals.isOnSpecialServer) {
          this.onReconnect();
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_exact_9e901e8e2483a22f_5.CommonDialogNames.ReconnectDialog_NAME, new __dep_exact_9e901e8e2483a22f_3.BasicReconnectDialogProperties(__dep_exact_9e901e8e2483a22f_2.BasicModel.languageData.getTextById("generic_alert_connection_lost_title"), __dep_exact_9e901e8e2483a22f_2.BasicModel.languageData.getTextById("generic_alert_connection_lost_copy"), this.bindFunction(this.onReconnect), __dep_exact_9e901e8e2483a22f_2.BasicModel.languageData.getTextById("generic_btn_reconnect")));
        }
      }
    }
  };
  CastleConnectionLostCommand.prototype.onReconnect = function () {
    __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __dep_exact_9e901e8e2483a22f_2.BasicModel.instanceProxy.selectedInstanceVO);
    __dep_exact_9e901e8e2483a22f_4.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_INITALIZE_CONTROLLER);
    __dep_export_GZPTrackingController.GZPTrackingController.getInstance().startTracking();
  };
  Object.defineProperty(CastleConnectionLostCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectionLostCommand.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_6.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectionLostCommand;
}(__dep_exact_9e901e8e2483a22f_7.SimpleCommand);
exports.CastleConnectionLostCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleReconnectDialog = require("gge-module:export_CastleReconnectDialog");
var __dep_export_GZPTrackingController = require("gge-module:export_GZPTrackingController");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
