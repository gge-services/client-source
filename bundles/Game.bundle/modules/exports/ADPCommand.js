Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function ADPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADPCommand, __s1param0);
  Object.defineProperty(ADPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ALLIANCE_CHANGE_DIPLOMACY;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ADPCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.ODR);
        var __s9local2 = __dep_exact_f855840627e6e145.int(__s9local0.NDR);
        var __s9local3 = __dep_exact_f855840627e6e145.int(__s9local0.S);
        __dep_export_CastleModel.CastleModel.allianceData.parseAllianceInfo(__s9local0.AS);
        __dep_export_CastleModel.CastleModel.allianceData.parseAllianceInfo(__s9local0.AO);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(this.getTitleText(__s9local3), this.getCopyText(__s9local1, __s9local2, __s9local3)));
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.OTHER_ALLIANCE_REACHED_MAXIMUM:
        if ((__s9local0 = JSON.parse(__s9param1[1])).NDR == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_maxHardPacted")));
        } else if (__s9local0.NDR == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_maxSoftPacted")));
        }
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.THIS_ALLIANCE_REACHED_MAXIMUM:
        if ((__s9local0 = JSON.parse(__s9param1[1])).NDR == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("diplomacy_max_pact_myAlliance")));
        } else if (__s9local0.NDR == __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("diplomacy_max_noAttack_myAlliance")));
        }
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.EXCEEDING_MAXIMUM_COUNT:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_diplomacy_error_93")));
        break;
      case __dep_exact_26a421b704832cff_1.ERROR.NO_CHANGE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_diplomacy_error_15")));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  ADPCommand.prototype.getTitleText = function (__s16param0) {
    switch (__s16param0) {
      case 0:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_allianceDiplomacy_request_title");
      case 1:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_allianceDiplomacy_changed_title");
    }
    return "";
  };
  ADPCommand.prototype.getTextSearch = function (__s19param0, __s19param1, __s19param2) {
    var __s19local0 = "dialog_allianceDiplomacy_from_";
    switch (__s19param0) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
        __s19local0 += "war";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL:
        __s19local0 += "neutral";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        __s19local0 += "pact";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        __s19local0 += "noAttack";
    }
    __s19local0 += "_to_";
    switch (__s19param1) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
        __s19local0 += "war";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL:
        __s19local0 += "neutral";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        __s19local0 += "pact";
        break;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        __s19local0 += "noAttack";
    }
    __s19local0 += "_";
    switch (__s19param2) {
      case 0:
        __s19local0 += "request";
        break;
      case 1:
        __s19local0 += "changed";
    }
    return __s19local0;
  };
  ADPCommand.prototype.getCopyText = function (__s24param0, __s24param1, __s24param2) {
    var __s24local0;
    if ((__s24local0 = __dep_exact_92d05af59ee2ff30.Localize.text(this.getTextSearch(__s24param0, __s24param1, __s24param2))) == "") {
      __s24local0 = this.getTextSearch(__s24param0, __s24param1, __s24param2);
    }
    return __s24local0;
  };
  return ADPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.ADPCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
