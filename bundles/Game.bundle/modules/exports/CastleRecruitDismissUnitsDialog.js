Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SDismissUnitPackageVO = require("gge-module:export_C2SDismissUnitPackageVO");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleRecruitDismissUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRecruitDismissUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitDismissUnitsDialog, __s1param0);
  CastleRecruitDismissUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.btnDismiss.toolTipText = "dialog_dismissUnit_final_tooltip";
    this.dialogDisp.mcInfoFoodCost.toolTipText = "foodwastage_current";
    this.dialogDisp.mcInfoFoodCost.mouseChildren = false;
    this.dialogDisp.mcInfoFoodCost.gotoAndStop(2);
    this.dialogDisp.mcInfoMeadCost.toolTipText = "meadwastage";
    this.dialogDisp.mcInfoMeadCost.mouseChildren = false;
    this.dialogDisp.mcInfoMeadCost.gotoAndStop(2);
    this.dialogDisp.mcInfoBeefCost.toolTipText = "beefwastage";
    this.dialogDisp.mcInfoBeefCost.mouseChildren = false;
    this.dialogDisp.mcInfoBeefCost.gotoAndStop(2);
    this.txtTitle ||= this.textFieldManager.registerTextField(this.dialogDisp.txtTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_dismissUnit_title"));
    this.txtTitle.autoFitToBounds = true;
    this.txtDesc ||= this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_dismissUnit_description"));
    this.txtFoodCost ||= this.textFieldManager.registerTextField(this.dialogDisp.mcInfoFoodCost.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, false, 1));
    this.txtMeadCost ||= this.textFieldManager.registerTextField(this.dialogDisp.mcInfoMeadCost.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, false, 1));
    this.txtBeefCost ||= this.textFieldManager.registerTextField(this.dialogDisp.mcInfoBeefCost.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, false, 1));
  };
  CastleRecruitDismissUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.txtTitle.textContentVO.textId = this.dismissUnitsDialogProperties.unitVO.getNameString();
    this.dialogDisp.mcInfoFoodCost.visible = this.dismissUnitsDialogProperties.unitVO.foodSupply > 0;
    this.dialogDisp.mcInfoMeadCost.visible = this.dismissUnitsDialogProperties.unitVO.meadSupply > 0;
    this.dialogDisp.mcInfoBeefCost.visible = this.dismissUnitsDialogProperties.unitVO.beefSupply > 0;
  };
  CastleRecruitDismissUnitsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleRecruitDismissUnitsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleRecruitDismissUnitsDialog.prototype.onInventoryUpdated = function (__s13param0) {
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.dismissUnitsDialogProperties.unitVO.wodId);
    if (this.dismissUnitsDialogProperties.unitVO.isStronghold) {
      this.maxSelectableUnits = __dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByWodId(__s13local0);
    } else {
      this.maxSelectableUnits = __dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCountByWodId(__s13local0);
    }
  };
  CastleRecruitDismissUnitsDialog.prototype.onUnitAmountChanged = function () {
    var __s17local0 = this.dismissUnitsDialogProperties.unitVO;
    var __s17local1 = __s17local0.foodSupply * this.selectedUnitAmount * (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodConsumptionReduction / 100);
    this.txtFoodCost.textContentVO.numberValue = __s17local1;
    var __s17local2 = __s17local0.meadSupply * this.selectedUnitAmount * (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadConsumptionReduction / 100);
    this.txtMeadCost.textContentVO.numberValue = __s17local2;
    var __s17local3 = __s17local0.beefSupply * this.selectedUnitAmount * (__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefConsumptionReduction / 100);
    this.txtBeefCost.textContentVO.numberValue = __s17local3;
  };
  CastleRecruitDismissUnitsDialog.prototype.dismissUnits = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDismissUnitPackageVO.C2SDismissUnitPackageVO(this.dismissUnitsDialogProperties.unitVO.wodId, this.selectedUnitAmount, this.dismissUnitsDialogProperties.unitVO.isStronghold));
  };
  CastleRecruitDismissUnitsDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_dismissUnits"));
  };
  CastleRecruitDismissUnitsDialog.__initialize_static_members = function () {
    CastleRecruitDismissUnitsDialog.NAME = "CastleRecruitDismissUnitsEx_R";
  };
  return CastleRecruitDismissUnitsDialog;
}(require("gge-module:export_ACastleDismissUnitsDialog").ACastleDismissUnitsDialog);
exports.CastleRecruitDismissUnitsDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
