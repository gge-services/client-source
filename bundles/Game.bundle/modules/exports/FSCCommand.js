Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_PrebuiltCastleResponseEvent = require("gge-module:export_PrebuiltCastleResponseEvent");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function FSCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FSCCommand, __s1param0);
  Object.defineProperty(FSCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SELECT_FACTION_CAMP_ID;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  FSCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    if (__s9param0 == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      this.controller.dispatchEvent(new __dep_export_PrebuiltCastleResponseEvent.PrebuiltCastleResponseEvent(false));
      return false;
    }
    this.controller.dispatchEvent(new __dep_export_PrebuiltCastleResponseEvent.PrebuiltCastleResponseEvent(true));
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.FACTION_LAST_MAN_STANDING_ACTIVE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_factionJoin_lms_triggered ")), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return FSCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.FSCCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
