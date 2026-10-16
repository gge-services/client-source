Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SCaravanOverloaderStartVO = require("gge-module:export_C2SCaravanOverloaderStartVO");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleBuyCaravanOverloaderDialog() {
    return __s1param0.call(this, CastleBuyCaravanOverloaderDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyCaravanOverloaderDialog, __s1param0);
  CastleBuyCaravanOverloaderDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.itxt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.tfAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_buyCaravanCapacity_copy", [0]));
    this.itxt_curCapacity = this.textFieldManager.registerTextField(this.dialogDisp.curCapacity.tfAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_nextCapacity = this.textFieldManager.registerTextField(this.dialogDisp.nextCapacity.tfAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_costsLabel = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("costs"));
    this.itxt_costsValue = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.dialogDisp.curCapacity.toolTipText = "dialog_currentCapacity_copy";
    this.dialogDisp.curCapacity.mouseChildren = false;
    this.dialogDisp.nextCapacity.toolTipText = "dialog_increasedCapacity_copy";
    this.dialogDisp.nextCapacity.mouseChildren = false;
    this.dialogDisp.mc_booster.mouseChildren = false;
    this.dialogDisp.costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.costs.mouseChildren = false;
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleBuyCaravanOverloaderDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.setTexts();
    if (__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.singleCarriageCapacityForNextLevel <= 0) {
      this.hide();
    }
  };
  CastleBuyCaravanOverloaderDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyCaravanOverloaderDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
  };
  CastleBuyCaravanOverloaderDialog.prototype.onBoosterDataChanges = function (__s14param0) {
    this.setTexts();
  };
  CastleBuyCaravanOverloaderDialog.prototype.setTexts = function () {
    this.itxt_booster.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference;
    this.itxt_desc.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference];
    this.itxt_curCapacity.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.singleCarriageCapacityForCurrentLevel;
    this.itxt_nextCapacity.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.singleCarriageCapacityForNextLevel;
    this.itxt_costsValue.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.finalCostsC2;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_costsValue, __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.finalCostsC2);
    this.dialogDisp.mc_booster.toolTipText = {
      t: "dialog_additionalCapacity_copy",
      p: [__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.bonusValueDifference]
    };
    var __s16local0 = __dep_export_CastleModel.CastleModel.boosterSaleData.isBoosterOnSale(__dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER);
    this.dialogDisp.costs.mc_discount.visible = __s16local0;
    if (__s16local0) {
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.costs.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(__dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER)]));
    }
  };
  CastleBuyCaravanOverloaderDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyCaravanOverloaderDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      switch (__s21param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCaravanOverloaderStartVO.C2SCaravanOverloaderStartVO(__dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER)));
          this.hide();
      }
    }
  };
  CastleBuyCaravanOverloaderDialog.NAME = "CastleBuyCaravanOverloader";
  return CastleBuyCaravanOverloaderDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBuyCaravanOverloaderDialog = __s0local0;
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
