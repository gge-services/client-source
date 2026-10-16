Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentPurchaseToolsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AutoRecruitmentPurchaseToolsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentPurchaseToolsDialog, __s1param0);
  AutoRecruitmentPurchaseToolsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_info.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_purchaseLoop_tools_desc"));
    this.dialogDisp.mc_time.toolTipText = "dialog_purchaseLoop_time_tools";
  };
  AutoRecruitmentPurchaseToolsDialog.__initialize_static_members = function () {
    AutoRecruitmentPurchaseToolsDialog.NAME = "AutoRecruitmentPurchaseTools";
  };
  return AutoRecruitmentPurchaseToolsDialog;
}(require("gge-module:export_AAutoRecruitmentPurchaseDialog").AAutoRecruitmentPurchaseDialog);
exports.AutoRecruitmentPurchaseToolsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
