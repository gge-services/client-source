Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SDismissHospitalUnits = require("gge-module:export_C2SDismissHospitalUnits");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleHospitalDismissUnitsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleHospitalDismissUnitsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHospitalDismissUnitsDialog, __s1param0);
  CastleHospitalDismissUnitsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mcInfoFoodCost.visible = false;
    this.dialogDisp.btnDismiss.toolTipText = "dialog_dismissWounded_confirmButton_tooltip";
    this.txtTitle ||= this.textFieldManager.registerTextField(this.dialogDisp.txtTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dismissUnit_title"));
    this.txtTitle.autoFitToBounds = true;
    this.txtDesc ||= this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dismissWounded_description"));
  };
  CastleHospitalDismissUnitsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.txtTitle.textContentVO.textId = this.dismissUnitsDialogProperties.unitVO.getNameString();
  };
  CastleHospitalDismissUnitsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleHospitalDismissUnitsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleHospitalDismissUnitsDialog.prototype.onInventoryUpdated = function (__s13param0) {
    var __s13local0 = __dep_exact_f855840627e6e145.int(this.dismissUnitsDialogProperties.unitVO.wodId);
    this.maxSelectableUnits = __dep_export_CastleModel.CastleModel.militaryData.unitHospitalInventory.getUnitCountByWodId(__s13local0);
  };
  CastleHospitalDismissUnitsDialog.prototype.dismissUnits = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDismissHospitalUnits.C2SDismissHospitalUnits(this.dismissUnitsDialogProperties.unitVO.wodId, this.selectedUnitAmount));
  };
  CastleHospitalDismissUnitsDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_dismissWounded"));
  };
  CastleHospitalDismissUnitsDialog.__initialize_static_members = function () {
    CastleHospitalDismissUnitsDialog.NAME = "CastleRecruitDismissUnitsEx";
  };
  return CastleHospitalDismissUnitsDialog;
}(require("gge-module:export_ACastleDismissUnitsDialog").ACastleDismissUnitsDialog);
exports.CastleHospitalDismissUnitsDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
