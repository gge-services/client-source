Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_AutoRecruitmentInfoEvent = require("gge-module:export_AutoRecruitmentInfoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function DRICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DRICommand, __s1param0);
  Object.defineProperty(DRICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_DUPLICATE_RECRUITMENT_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  DRICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AutoRecruitmentInfoEvent.AutoRecruitmentInfoEvent(__dep_export_AutoRecruitmentInfoEvent.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, true, __s9local0));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_AutoRecruitmentInfoEvent.AutoRecruitmentInfoEvent(__dep_export_AutoRecruitmentInfoEvent.AutoRecruitmentInfoEvent.ON_DUPLICATE_RECRUITMENT_INFO, false, null));
    }
    return false;
  };
  DRICommand.prototype.getDialogClassByListId = function (__s12param0) {
    switch (__s12param0) {
      case __dep_exact_26a421b704832cff_1.UnitProductionConst.TOOLS_LIST:
        return __dep_export_AutoRecruitmentCopyToolsDialog.AutoRecruitmentCopyToolsDialog;
      default:
        return __dep_export_AutoRecruitmentCopyUnitsDialog.AutoRecruitmentCopyUnitsDialog;
    }
  };
  return DRICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.DRICommand = __s0local0;
var __dep_export_AutoRecruitmentCopyToolsDialog = require("gge-module:export_AutoRecruitmentCopyToolsDialog");
var __dep_export_AutoRecruitmentCopyUnitsDialog = require("gge-module:export_AutoRecruitmentCopyUnitsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
