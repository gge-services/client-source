Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentPurchaseUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AutoRecruitmentPurchaseUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentPurchaseUnitsDialog, __s1param0);
  AutoRecruitmentPurchaseUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_info.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_purchaseLoop_units_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_resource0.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("costs")).autoFitToBounds = true;
    this.dialogDisp.mc_foodTime.toolTipText = "dialog_copyQueue_foodProductionFinal";
    this.dialogDisp.mc_time.toolTipText = "dialog_purchaseLoop_time_units";
    this.dialogDisp.mc_foodTime.mc_icon.gotoAndStop(2);
  };
  AutoRecruitmentPurchaseUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateFoodProductionAfterLoops();
  };
  AutoRecruitmentPurchaseUnitsDialog.prototype.updateFoodProductionAfterLoops = function () {
    var __s9local0 = this.dialogDisp.mc_foodTime.txt_value;
    var __s9local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction - (this.dialogProperties.currentFoodConsumption + this.dialogProperties.foodProductionAfterLoops * this.selectedLoopCount));
    this.textFieldManager.registerTextField(__s9local0, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local1));
    __dep_export_CostHelper.CostHelper.setCostColor(__s9local0, __s9local1 < 0);
  };
  AutoRecruitmentPurchaseUnitsDialog.prototype.onLoopSelected = function (__s11param0) {
    __s1param0.prototype.onLoopSelected.call(this, __s11param0);
    this.updateFoodProductionAfterLoops();
  };
  AutoRecruitmentPurchaseUnitsDialog.__initialize_static_members = function () {
    AutoRecruitmentPurchaseUnitsDialog.NAME = "AutoRecruitmentPurchaseUnits";
  };
  return AutoRecruitmentPurchaseUnitsDialog;
}(require("gge-module:export_AAutoRecruitmentPurchaseDialog").AAutoRecruitmentPurchaseDialog);
exports.AutoRecruitmentPurchaseUnitsDialog = __s0local0;
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
