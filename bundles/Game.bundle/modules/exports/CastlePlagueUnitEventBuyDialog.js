Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpyDataEvent = require("gge-module:export_CastleSpyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGenericSliderBuyDialog = require("gge-module:export_CastleGenericSliderBuyDialog");
var __s0local0 = function (__s1param0) {
  function CastlePlagueUnitEventBuyDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlagueUnitEventBuyDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlagueUnitEventBuyDialog, __s1param0);
  CastlePlagueUnitEventBuyDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s5param0);
    this.showMonkDiscount();
    this.dialogDisp.mc_plagueMonkCount.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_reward.toolTipText = "dialog_plagueUnitEventBuy_name";
    this.dialogDisp.btn_info.visible = false;
    this.updateAvailableMonkText();
    this.setDescriptionText("dialog_plagueUnitEventBuy_desc");
    this.amountPicker.amountFactor = 1;
    this.handleCost();
  };
  CastlePlagueUnitEventBuyDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.i_monkCount_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_plagueMonkCount.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE));
  };
  CastlePlagueUnitEventBuyDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.spyData.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlagueMonkCountUpdated));
  };
  CastlePlagueUnitEventBuyDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __dep_export_CastleModel.CastleModel.spyData.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPlagueMonkCountUpdated));
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
  };
  CastlePlagueUnitEventBuyDialog.prototype.onPlagueMonkCountUpdated = function (__s13param0) {
    this.updateAvailableMonkText();
  };
  CastlePlagueUnitEventBuyDialog.prototype.updateAvailableMonkText = function () {
    this.i_monkCount_txt_value.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks);
  };
  CastlePlagueUnitEventBuyDialog.prototype.showMonkDiscount = function () {
    var __s17local0;
    __s17local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.dialogProperties.eventPackageVO.packageID));
    this.itxt_discount.textContentVO.textReplacements = [-__s17local0];
    this.dialogDisp.mc_discount.visible = __s17local0 != 0;
  };
  Object.defineProperty(CastlePlagueUnitEventBuyDialog.prototype, "selectedPackagesAmount", {
    get: function () {
      return this.amountPicker.selectedValue + 1;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericSliderBuyDialog.CastleGenericSliderBuyDialog.prototype, "selectedPackagesAmount").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePlagueUnitEventBuyDialog.__initialize_static_members = function () {
    CastlePlagueUnitEventBuyDialog.NAME = "CastlePlagueUnitEventBuy";
  };
  return CastlePlagueUnitEventBuyDialog;
}(__dep_export_CastleGenericSliderBuyDialog.CastleGenericSliderBuyDialog);
exports.CastlePlagueUnitEventBuyDialog = __s0local0;
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
