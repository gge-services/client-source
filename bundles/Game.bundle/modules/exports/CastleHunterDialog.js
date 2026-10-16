Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SHunterInfoVO = require("gge-module:export_C2SHunterInfoVO");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleHunterValueChangerController = require("gge-module:export_CastleHunterValueChangerController");
var __s0local0 = function (__s1param0) {
  function CastleHunterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleHunterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHunterDialog, __s1param0);
  CastleHunterDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btnHelp, this.dialogDisp.btnClose, this.dialogDisp.btnConfirm, this.dialogDisp.btn_less, this.dialogDisp.btn_more]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_hunter_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_hunter_instructions"));
    this.textFood = this.textFieldManager.registerTextField(this.dialogDisp.tfFood, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.textStone = this.textFieldManager.registerTextField(this.dialogDisp.tfStone, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.textWood = this.textFieldManager.registerTextField(this.dialogDisp.tfWood, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.textExchangeRate = this.textFieldManager.registerTextField(this.dialogDisp.tfRatio, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_hunter_ExchangeRate", [0, 0]));
    this.dialogDisp.foodHitArea.toolTipText = "foodproduction";
    this.dialogDisp.stoneWoodHitArea.toolTipText = "hunter_productivity_WoodStone";
    this.dialogDisp.ratioHitArea.toolTipText = "dialog_hunter_productivityExchangeRate";
    this.dialogDisp.sliderContainer.slider.toolTipText = "dialog_hunter_SetProductivity";
    this.dialogDisp.btnHelp.toolTipText = "generic_help";
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleHunterDialog.prototype.onSliderUpdated = function () {
    this.textFood.textContentVO.textReplacements = [Math.floor(CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE + this.valueController.value)];
    this.textStone.textContentVO.textReplacements = [Math.floor(CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE - this.valueController.value * __dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO.hunterRatio / __dep_export_CastleHunterData.CastleHunterData.RATIO_FACTOR)];
    this.textWood.textContentVO.textReplacements = [Math.floor(CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE - this.valueController.value * __dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO.hunterRatio / __dep_export_CastleHunterData.CastleHunterData.RATIO_FACTOR)];
  };
  CastleHunterDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.valueController = new __dep_export_CastleHunterValueChangerController.CastleHunterValueChangerController(__dep_export_CastleModel.CastleModel.hunterData.foodBoost, 0, __dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO.hunterMax);
    this.valueController.addButtons(this.dialogDisp, 1);
    this.valueController.addSlider(this.dialogDisp.sliderContainer);
    this.valueController.valueUpdatedSignal.add(this.bindFunction(this.onSliderUpdated));
    this.onSliderUpdated();
    this.textExchangeRate.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO.hunterRatioFactor, false, 1), "1"];
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
  };
  CastleHunterDialog.prototype.onHunterBuildingDataSet = function (__s11param0) {
    this.onSliderUpdated();
    this.textExchangeRate.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.hunterData.hunterBuildingVO.hunterRatio / __dep_export_CastleHunterData.CastleHunterData.RATIO_FACTOR, "1"];
  };
  CastleHunterDialog.prototype.hideLoaded = function (__s13param0 = null) {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
    this.valueController.valueUpdatedSignal.remove(this.bindFunction(this.onSliderUpdated));
    this.valueController.dispose();
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleHunterDialog.prototype.onClick = function (__s15param0) {
    switch (__s15param0.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.btnConfirm:
        if (this.valueController.value != __dep_export_CastleModel.CastleModel.hunterData.foodBoost) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SHunterInfoVO.C2SHunterInfoVO(this.valueController.value));
        }
        this.hide();
        break;
      case this.dialogDisp.btnHelp:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_hunter_SetProductivity"));
    }
  };
  CastleHunterDialog.__initialize_static_members = function () {
    CastleHunterDialog.NAME = "CastleHunter";
    CastleHunterDialog.INITIAL_PRODUCTION_PERCENTAGE = 100;
  };
  return CastleHunterDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleHunterDialog = __s0local0;
var __dep_export_CastleHunterData = require("gge-module:export_CastleHunterData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
