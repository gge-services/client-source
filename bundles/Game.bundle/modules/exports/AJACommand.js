Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleLargeYesNoDialogProperties = require("gge-module:export_CastleLargeYesNoDialogProperties");
var __s0local0 = function (__s1param0) {
  function AJACommand() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AJACommand, __s1param0);
  Object.defineProperty(AJACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_AUTO_JOIN_ALLIANCE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AJACommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    var __s9local1;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.parse_GAL(__s9local2.gal);
        __dep_export_CastleModel.CastleModel.allianceData.parseAllianceInfo(__s9local2.A);
        var __s9local3 = __s9local2.A.M.length == 1;
        var __s9local4 = __s9local3 ? this.showAllianceDialog : this.showAllianceChat;
        __s9local0 = __s9local3 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_joiningAlliance_failed_title") : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_joiningAlliance_popup_title");
        __s9local1 = __s9local3 ? __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_joiningAlliance_failed_copy") : __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_joiningAlliance_popup_copy", [__s9local2.A.N]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog, new __dep_export_CastleLargeYesNoDialogProperties.CastleLargeYesNoDialogProperties(__s9local0, __s9local1, __s9local4, null, null, "", "", false));
    }
    return false;
  };
  AJACommand.prototype.showAllianceDialog = function (__s12param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
  };
  AJACommand.prototype.showAllianceChat = function (__s14param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_COMMUNICATION));
  };
  return AJACommand;
}(__dep_exact_9e901e8e2483a22f.BasicCommand);
exports.AJACommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleLargeYesNoDialog = require("gge-module:export_CastleLargeYesNoDialog");
