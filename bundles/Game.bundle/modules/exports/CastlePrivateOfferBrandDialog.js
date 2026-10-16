Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastlePrivateOfferBrandDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrivateOfferBrandDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferBrandDialog, __s1param0);
  CastlePrivateOfferBrandDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_pay.btn_ok]);
    this.setMouseChildren();
    this.setTitleText();
  };
  CastlePrivateOfferBrandDialog.prototype.initPayment = function () {
    this.dialogDisp.mc_pay.btn_ok.toolTipText = "dialog_specialOfferBrand_takeOffer";
    this.dialogDisp.mc_pay.mc_info_icon.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
  };
  CastlePrivateOfferBrandDialog.prototype.initReward = function () {
    this._rewardList = this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferBrand_takeOffer"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_pay.mc_info_icon.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2))), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.initRewardItem(this.dialogDisp.mc_reward.mc_item_1, 0, this._rewardList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
    this.initRewardItem(this.dialogDisp.mc_reward.mc_item_2, 1, this._rewardList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.FOOD));
    this.initRewardItem(this.dialogDisp.mc_reward.mc_item_3, 2, this._rewardList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
  };
  CastlePrivateOfferBrandDialog.prototype.initRewardItem = function (__s11param0, __s11param1, __s11param2) {
    this.textFieldManager.registerTextField(__s11param0.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s11param1 != 2 ? this._rewardList.getItemByType(__dep_export_CollectableEnum.CollectableEnum.UNITS).amount : this._rewardList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.FOOD)), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.initInfos = function (__s13param0, __s13param1, __s13param2) {
    this.initInfo(this.dialogDisp.mc_info_1, __s13param0, "dialog_specialOfferBrand_check1");
    this.initInfo(this.dialogDisp.mc_info_2, __s13param1, "dialog_specialOfferBrand_check2");
    this.initInfo(this.dialogDisp.mc_info_3, __s13param2, "dialog_specialOfferBrand_check3");
  };
  CastlePrivateOfferBrandDialog.prototype.initInfo = function (__s15param0, __s15param1, __s15param2) {
    if (__s15param1) {
      __s15param0.mc_checkBox.gotoAndStop("enabled");
    } else {
      __s15param0.mc_checkBox.gotoAndStop("disabled");
    }
    this.textFieldManager.registerTextField(__s15param0.txt_unit, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s15param2), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.applyPropertiesLoaded = function (__s19param0 = null) {
    this.initReward();
    this.initPayment();
    this.initInfos(true, true, true);
    this.setRemainingTime();
    this.setIconRewardInfo();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferEnded));
  };
  CastlePrivateOfferBrandDialog.prototype.onOfferEnded = function (__s21param0) {
    if (__s21param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastlePrivateOfferBrandDialog.prototype.setIconRewardInfo = function () {
    var __s24local0 = this._rewardList.containsType(__dep_export_CollectableEnum.CollectableEnum.EXTINGUISH_FIRE);
    var __s24local1 = this._rewardList.getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.UNITS);
    for (var __s24local2 = 1; __s24local2 <= 2; __s24local2++) {
      var __s24local3 = __s24local1.getItemByIndex(__s24local2 - 1).unitVO;
      this.dialogDisp.mc_reward["mc_item_" + __s24local2].mc_icon.gotoAndStop(6);
      __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__s24local3, this.dialogDisp.mc_reward["mc_item_" + __s24local2].mc_icon.mc_units, 32, 32, 0, 0);
      this.dialogDisp.mc_reward["mc_item_" + __s24local2].toolTipText = __s24local3.getNameString();
    }
    this.dialogDisp.mc_reward.mc_item_3.mc_icon.gotoAndStop(5);
    this.dialogDisp.mc_reward.mc_item_3.toolTipText = "food";
    this.dialogDisp.mc_reward.mc_image.mouseChildren = false;
    this.dialogDisp.mc_reward.mc_image.visible = __s24local0;
    this.dialogDisp.mc_reward.mc_image.toolTipText = "repairAll";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("reward"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.dialogDisp.mc_reward.mc_item_1.mouseChildren = this.dialogDisp.mc_reward.mc_item_2.mouseChildren = this.dialogDisp.mc_reward.mc_item_3.mouseChildren = false;
  };
  CastlePrivateOfferBrandDialog.prototype.setMouseChildren = function () {
    this.dialogDisp.mc_reward.mouseChildren = true;
    this.dialogDisp.mc_pay.mouseChildren = true;
    this.dialogDisp.mc_pay.mc_info_icon.mouseChildren = false;
  };
  CastlePrivateOfferBrandDialog.prototype.setRemainingTime = function (__s30param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(this.dialogProperties.offerVO.remainingSeconds)));
  };
  CastlePrivateOfferBrandDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferBrand_copy"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.setTitleText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOfferBrand_title"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
  };
  CastlePrivateOfferBrandDialog.prototype.onClick = function (__s36param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      __s1param0.prototype.onClick.call(this, __s36param0);
      switch (__s36param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_pay.btn_ok:
          __dep_export_CastleModel.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
          this.hide();
      }
    }
  };
  CastlePrivateOfferBrandDialog.prototype.hideLoaded = function (__s40param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    __dep_export_CastleModel.CastleModel.privateOfferData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferEnded));
  };
  Object.defineProperty(CastlePrivateOfferBrandDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferBrandDialog.__initialize_static_members = function () {
    CastlePrivateOfferBrandDialog.NAME = "CastlePrivateOfferBrand";
  };
  return CastlePrivateOfferBrandDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePrivateOfferBrandDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
