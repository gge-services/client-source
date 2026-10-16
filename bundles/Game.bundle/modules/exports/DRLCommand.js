Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_AutoRecruitmentEvent = require("gge-module:export_AutoRecruitmentEvent");
var __dep_export_AutoRecruitmentBuyRecruitmentSlotsProperties = require("gge-module:export_AutoRecruitmentBuyRecruitmentSlotsProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function DRLCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DRLCommand, __s1param0);
  Object.defineProperty(DRLCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_DUPLICATE_RECRUITMENT_LOOP;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  DRLCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.controller.dispatchEvent(new __dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent(__dep_export_AutoRecruitmentEvent.AutoRecruitmentEvent.ON_COPY_SUCCESS));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_ENOUGH_RESOURCES:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_copyQueue_tools_resourcesGone")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AutoRecruitmentBuyRecruitmentSlots.AutoRecruitmentBuyRecruitmentSlots, new __dep_export_AutoRecruitmentBuyRecruitmentSlotsProperties.AutoRecruitmentBuyRecruitmentSlotsProperties(__s9local0.LID, __s9local0.AMT));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return DRLCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.DRLCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_AutoRecruitmentBuyRecruitmentSlots = require("gge-module:export_AutoRecruitmentBuyRecruitmentSlots");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
