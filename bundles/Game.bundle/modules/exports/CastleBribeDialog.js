Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleBribeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBribeDialog.ASSETNAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBribeDialog, __s1param0);
  CastleBribeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.info_bonus.gotoAndStop(__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.bonusIconFrame);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("costs"));
    this.dialogDisp.info_time.toolTipText = "runTime";
    this.dialogDisp.info_bonus.mouseChildren = false;
    this.i_iTime_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.i_iCosts_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.i_iBonus_txt_bonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    this.i_reDisc_txt_value1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.i_reDisc_txt_value2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBribeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.isActive) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bribetaxcollector2_copy"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bribetaxcollector_copy"));
    }
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.info_bonus.toolTipText = {
      t: "bribe_taxcollector_tooltipp",
      p: [__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.bonusText[1]]
    };
    this.i_iTime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_DURATION, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    this.i_iCosts_txt_value.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.finalCostsC2.toString();
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.i_iCosts_txt_value, __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.finalCostsC2);
    this.i_iBonus_txt_bonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.bonusText[0], [__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.bonusText[1]]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    this.i_reDisc_txt_value1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.rebuyDiscountString]));
    this.i_reDisc_txt_value2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.boostData.taxBribeVO.rebuyDiscountString]));
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    var __s7local0 = __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.hasRebuyDiscount && !__dep_export_CastleModel.CastleModel.boosterSaleData.isBoosterOnSale(__dep_exact_26a421b704832cff.BoosterConst.TAX);
    this.dialogDisp.mc_rebuyDiscount.visible = __s7local0;
    if (!this.dialogDisp.mc_rebuyDiscount.visible) {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    }
    __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, __dep_exact_26a421b704832cff.BoosterConst.TAX);
    this.addCharacterPic();
  };
  CastleBribeDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBribeDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBribeDialog.prototype.onBoosterDataChanges = function (__s16param0) {
    this.applyProperties();
  };
  CastleBribeDialog.prototype.onClick = function (__s18param0) {
    switch (__s18param0.target) {
      case this.dialogDisp.btn_ok:
        if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.finalCostsC2) {
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
        } else {
          this.hide();
          var __s18local0 = JSON.stringify({
            PO: __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(__dep_exact_26a421b704832cff.BoosterConst.TAX)
          });
          __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendServerMessageAndWait(__dep_export_ClientConstSF.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR, [__s18local0], __dep_export_ClientConstSF.ClientConstSF.S2C_BRIBE_TAX_COLLECTOR);
        }
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tax_bribe"));
    }
  };
  CastleBribeDialog.prototype.addCharacterPic = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var __s23local0 = __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(__s23local0);
  };
  CastleBribeDialog.__initialize_static_members = function () {
    CastleBribeDialog.NAME = "CastleBribeDialog";
    CastleBribeDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBribeDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBribeDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
