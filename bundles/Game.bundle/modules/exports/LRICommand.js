Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function LRICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LRICommand, __s1param0);
  Object.defineProperty(LRICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_LOOP_RECRUITMENT_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  LRICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = new __dep_export_AutoRecruitmentPurchaseDialogProperties.AutoRecruitmentPurchaseDialogProperties(__s9local0);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this.getDialogClassByListId(__s9local1.listId), __s9local1);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  LRICommand.prototype.getDialogClassByListId = function (__s12param0) {
    switch (__s12param0) {
      case __dep_exact_26a421b704832cff_1.UnitProductionConst.TOOLS_LIST:
        return __dep_export_AutoRecruitmentPurchaseToolsDialog.AutoRecruitmentPurchaseToolsDialog;
      default:
        return __dep_export_AutoRecruitmentPurchaseUnitsDialog.AutoRecruitmentPurchaseUnitsDialog;
    }
  };
  return LRICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.LRICommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AutoRecruitmentPurchaseToolsDialog = require("gge-module:export_AutoRecruitmentPurchaseToolsDialog");
var __dep_export_AutoRecruitmentPurchaseUnitsDialog = require("gge-module:export_AutoRecruitmentPurchaseUnitsDialog");
var __dep_export_AutoRecruitmentPurchaseDialogProperties = require("gge-module:export_AutoRecruitmentPurchaseDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
