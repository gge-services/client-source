Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = function (__s1param0) {
  function CastleCPSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCPSCommand, __s1param0);
  CastleCPSCommand.prototype.executeCommand = function (__s5param0, __s5param1) {
    switch (__s5param0) {
      case __dep_exact_9e901e8e2483a22f_3.IdentityManagementConstants.ERROR_SHUT_DOWN_ALERT:
        this._shutDownControlTimer = new __dep_exact_9e901e8e2483a22f_4.ShutDownControlTimer(__dep_exact_9e901e8e2483a22f_3.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPS_ARRIVED, [this._shutDownControlTimer]));
        this._shutDownControlTimer.startCountDown();
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleNotifyDialog.CastleNotifyDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(null, __dep_exact_9e901e8e2483a22f.BasicModel.languageData.getTextById("generic_alert_korea_logoutCountdown", [this._shutDownControlTimer.showTimerCountdown])));
        break;
      case __dep_exact_9e901e8e2483a22f_3.IdentityManagementConstants.ERROR_UNDERAGE_LOGOUT:
        __s1param0.prototype.executeCommand.call(this, __s5param0, __s5param1);
    }
    return true;
  };
  return CastleCPSCommand;
}(__dep_exact_9e901e8e2483a22f_2.CPSCommand);
exports.CastleCPSCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleNotifyDialog = require("gge-module:export_CastleNotifyDialog");
