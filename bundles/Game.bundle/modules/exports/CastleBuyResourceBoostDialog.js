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
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SOverseerStartVO = require("gge-module:export_C2SOverseerStartVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleBuyResourceBoostDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleBuyResourceBoostDialog.ASSETNAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBuyResourceBoostDialog, __s1param0);
  CastleBuyResourceBoostDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("costs"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buyResourceBoost_copy"));
    this.itxt_infotime = this.textFieldManager.registerTextField(this.dialogDisp.info_time.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(""), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_infocosts = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  Object.defineProperty(CastleBuyResourceBoostDialog.prototype, "shopVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getOverseerVOByID(this.dialogProperties.resourceType);
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyResourceBoostDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.isWaitingForServerMessage = false;
    if (this.shopVO.isActive) {
      this.itxt_copy.textContentVO.textId = "dialog_buyResourceBoost2_copy";
    } else {
      this.itxt_copy.textContentVO.textId = "dialog_buyResourceBoost_copy";
    }
    this.itxt_infotime.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_DURATION, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    this.itxt_infocosts.textContentVO.numberValue = this.shopVO.finalCostsC2;
    __dep_export_CostHelper.CostHelper.setCostC2TextFieldColor(this.itxt_infocosts, this.shopVO.finalCostsC2);
    this.itxt_rebuy1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value1, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.shopVO.rebuyDiscountString]));
    this.itxt_rebuy2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_rebuyDiscount.txt_value2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.shopVO.rebuyDiscountString]));
    this.dialogDisp.info_bonus.gotoAndStop(this.shopVO.bonusIconFrame);
    this.itxt_infobonus = this.textFieldManager.registerTextField(this.dialogDisp.info_bonus.txt_bonus, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.shopVO.bonusText[0], [this.shopVO.bonusText[1]]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    this.dialogDisp.info_bonus.toolTipText = {
      t: "dialog_buyResourceBoost_boostAmount",
      p: [this.shopVO.bonusText[1]]
    };
    this.dialogDisp.info_time.toolTipText = "dialog_buyResourceBoost_overseeTime";
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    this.dialogDisp.mc_rebuyDiscount.visible = this.shopVO.hasRebuyDiscount;
    this.addCharacterPic();
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.info_bonus.mouseChildren = false;
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.info_bonus);
    this.dialogDisp.info_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.textFieldManager.setText(this.dialogDisp.mc_rebuyDiscount.txt_value1, __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.shopVO.rebuyDiscountString]));
    this.textFieldManager.setText(this.dialogDisp.mc_rebuyDiscount.txt_value2, this.dialogDisp.mc_rebuyDiscount.txt_value1.text);
    var __s9local0 = this.shopVO.hasRebuyDiscount && !__dep_export_CastleModel.CastleModel.boosterSaleData.isBoosterOnSale(this.dialogProperties.resourceType);
    this.dialogDisp.mc_rebuyDiscount.toolTipText = "dialog_rebuyBoost_percentTooltip";
    this.dialogDisp.mc_rebuyDiscount.visible = __s9local0;
    this.dialogDisp.info_costs.mc_discount.visible = false;
    if (__s9local0) {
      this.dialogDisp.info_costs.x = -14;
    } else {
      this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
      __dep_export_CastleModel.CastleModel.boosterSaleData.handleMc(this.dialogDisp.info_costs.mc_discount, this.dialogProperties.resourceType);
    }
  };
  CastleBuyResourceBoostDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyResourceBoostDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onBoosterDataChanges));
  };
  CastleBuyResourceBoostDialog.prototype.onBoosterDataChanges = function (__s19param0) {
    this.show();
  };
  CastleBuyResourceBoostDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_cancle:
        case this.dialogDisp.btn_close:
          this.hide();
      }
      if (!this.isLocked && !this.isWaitingForServerMessage) {
        switch (__s21param0.target) {
          case this.dialogDisp.btn_ok:
            if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.shopVO.finalCostsC2) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
            } else {
              __dep_exact_9e901e8e2483a22f.BasicController.getInstance().sendServerMessageVOAndWait(new __dep_export_C2SOverseerStartVO.C2SOverseerStartVO(this.dialogProperties.resourceType, __dep_export_CastleModel.CastleModel.boosterSaleData.getOfferId(this.dialogProperties.resourceType)));
              this.isWaitingForServerMessage = true;
            }
        }
      }
    }
  };
  CastleBuyResourceBoostDialog.prototype.checkWaitingAnimState = function (__s29param0) {
    switch (__s29param0) {
      case __dep_export_ClientConstSF.ClientConstSF.S2C_OVERSEER_START:
        this.hide();
        this.isWaitingForServerMessage = false;
    }
  };
  CastleBuyResourceBoostDialog.prototype.addCharacterPic = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    var __s32local0 = __dep_export_CastleModel.CastleModel.boostData.overseerFoodVO.createVisualMovieClipForBuyDialog();
    this.dialogDisp.mc_CharHolder.addChild(__s32local0);
  };
  Object.defineProperty(CastleBuyResourceBoostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuyResourceBoostDialog.__initialize_static_members = function () {
    CastleBuyResourceBoostDialog.NAME = "CastleBuyResourceBoostDialog";
    CastleBuyResourceBoostDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  };
  return CastleBuyResourceBoostDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBuyResourceBoostDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
