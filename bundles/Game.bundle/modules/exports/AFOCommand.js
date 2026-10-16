Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstAlliance = require("gge-module:export_ClientConstAlliance");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function AFOCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AFOCommand, __s1param0);
  Object.defineProperty(AFOCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_FOUND_ALLIANCE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AFOCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.allianceData.parseAllianceInfo(__s9local0.A);
        __dep_export_CastleModel.CastleModel.userData.parse_GAL(__s9local0.gal);
        this.controller.dispatchEvent(new __dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_FOUNDED));
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties(__dep_export_ClientConstAlliance.ClientConstAlliance.CAT_OVERVIEW));
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.TEXT_TOO_SHORT:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_alliancenameTooShort", [__dep_exact_26a421b704832cff.AllianceConst.NAME_MIN_LENGTH])));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return AFOCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.AFOCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
