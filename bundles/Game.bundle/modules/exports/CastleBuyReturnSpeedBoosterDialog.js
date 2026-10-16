Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SReturnSpeedBoosterStartVO = require("gge-module:export_C2SReturnSpeedBoosterStartVO");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleBuyReturnSpeedBoosterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBuyReturnSpeedBoosterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyReturnSpeedBoosterDialog, __s1param0);
  CastleBuyReturnSpeedBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close]);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.itxt_booster = this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.tfAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txtDesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_buyReturnSpeed_copy", [0]));
    this.itxt_curCapacity = this.textFieldManager.registerTextField(this.dialogDisp.curCapacity.tfAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_nextCapacity = this.textFieldManager.registerTextField(this.dialogDisp.nextCapacity.tfAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.itxt_costsLabel = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("costs"));
    this.itxt_costsValue = this.textFieldManager.registerTextField(this.dialogDisp.costs.tfAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.dialogDisp.curCapacity.toolTipText = "dialog_buyReturnSpeed_currentSpeed_tooltip";
    this.dialogDisp.curCapacity.mouseChildren = false;
    this.dialogDisp.nextCapacity.toolTipText = "dialog_buyReturnSpeed_futureSpeed_tooltip";
    this.dialogDisp.nextCapacity.mouseChildren = false;
    this.dialogDisp.mc_booster.mouseChildren = false;
    this.dialogDisp.costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.costs.mouseChildren = false;
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.setTexts();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    this.btnDelayTimer = new __dep_exact_81dacdf05bd32292.Timer(500, 1);
    this.btnDelayTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onBtnDelayOver_0));
    this.btnDelayTimer.start();
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.hideLoaded = function (__s11param0 = null) {
    this.stopTimer();
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.onBtnDelayOver_0 = function (__s13param0) {
    this.stopTimer();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.stopTimer = function () {
    if (this.btnDelayTimer) {
      this.btnDelayTimer.stop();
      this.btnDelayTimer.removeEventListener(__s0local0.TIMER, this.onBtnDelayOver_0);
      this.btnDelayTimer = null;
    }
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.onBoosterDataChanges = function (__s18param0) {
    this.setTexts();
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.setTexts = function () {
    this.itxt_booster.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.bonusValueDifference];
    this.itxt_desc.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.bonusValueDifference];
    this.itxt_curCapacity.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.returnSpeedForCurrentLevel];
    this.itxt_nextCapacity.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.returnSpeedForNextLevel];
    this.itxt_costsValue.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.finalCostsC2;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_costsValue, __dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.finalCostsC2);
    this.dialogDisp.mc_booster.toolTipText = {
      t: "dialog_buyReturnSpeed_additionalSpeed_tooltip",
      p: [__dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.bonusValueDifference]
    };
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.costs.mc_discount, __dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED);
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataChanges));
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyReturnSpeedBoosterDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      switch (__s24param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SReturnSpeedBoosterStartVO.C2SReturnSpeedBoosterStartVO(__dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED)));
          this.hide();
      }
    }
  };
  CastleBuyReturnSpeedBoosterDialog.__initialize_static_members = function () {
    CastleBuyReturnSpeedBoosterDialog.NAME = "CastleBuyReturnSpeedBoost";
  };
  return CastleBuyReturnSpeedBoosterDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBuyReturnSpeedBoosterDialog = __s0local1;
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
