Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleBoosterSelectComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._maxSelectable = 0;
    __s3local0._currencyID = 0;
    __s3local0._boostValue = 0;
    __s3local0._buyPackageID = 0;
    __s3local0._eventID = 0;
    __s3local0._disp = __s3param0;
    __s3local0._currencyID = __s3param1;
    __s3local0._boostValue = __s3param2;
    __s3local0._buyPackageID = __s3param3;
    __s3local0._eventID = __s3param4;
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3local0._disp.btn_buy, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __s3local0._disp.btn_buy.mouseChildren = false;
    __s3local0._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0._disp).addSliderButton(__s3local0._disp.mc_slider.btn_slider).addSliderLine(__s3local0._disp.mc_slider.sliderBar), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBoosterSelectComponent, __s1param0);
  CastleBoosterSelectComponent.prototype.show = function () {
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onValueChanged));
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this.updateScrollComponent();
    this.updateReward();
    this.updateSelectedCharmBoosterTexts();
    this.updateDiscount();
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  CastleBoosterSelectComponent.prototype.hide = function () {
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onValueChanged));
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  CastleBoosterSelectComponent.prototype.onValueChanged = function () {
    this.updateSliderFill();
    this.updateSelectedCharmBoosterTexts();
  };
  CastleBoosterSelectComponent.prototype.updateScrollComponent = function () {
    var __s11local0 = __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue);
    this._scrollComponent.init(0, this._maxSelectable);
    this._scrollComponent.scrollToValue(__s11local0);
    this.updateSliderFill();
    this._scrollComponent.enableComponent(this._maxSelectable > 0);
  };
  CastleBoosterSelectComponent.prototype.updateSliderFill = function () {
    this._disp.mc_slider.mc_sliderLineFill.width = this._disp.mc_slider.btn_slider.x - this._disp.mc_slider.sliderBar.x;
  };
  CastleBoosterSelectComponent.prototype.updateReward = function () {
    this._disp.mc_reward.mc_item.mc_textBackground.visible = false;
    this._disp.mc_charmIcon.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this._currencyID).getNameTextId();
    var __s15local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local1(60, 60));
    __s15local0.tooltip.useAmount = false;
    var __s15local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this._disp.mc_reward.mc_item).addInfoBtn(this._disp.mc_reward.btn_info);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s15local1, __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, this._maxSelectable, this._currencyID), __s15local0);
  };
  CastleBoosterSelectComponent.prototype.updateSelectedCharmBoosterTexts = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_proportional_value", [this._scrollComponent.currentValue, this._maxSelectable])).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.txx_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_shapeshifter_Booster_CharmBooster_value", [this._scrollComponent.currentValue * this._boostValue])).autoFitToBounds = true;
  };
  CastleBoosterSelectComponent.prototype.updateDiscount = function () {
    var __s19local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this._buyPackageID));
    if (__s19local0 > 0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._disp.btn_buy.mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [-__s19local0]));
      this._disp.btn_buy.mc_discount.visible = true;
    } else {
      this._disp.btn_buy.mc_discount.visible = false;
    }
  };
  Object.defineProperty(CastleBoosterSelectComponent.prototype, "maxSelectable", {
    set: function (__s23param0) {
      this._maxSelectable = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleBoosterSelectComponent.prototype.updateWithNewMaxValue = function (__s25param0) {
    if (this._maxSelectable != __s25param0) {
      this._maxSelectable = __s25param0;
      this.updateScrollComponent();
    }
  };
  CastleBoosterSelectComponent.prototype.onClick = function (__s28param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target)) {
      switch (__s28param0.target) {
        case this._disp.btn_buy:
          this.onClickBuy();
      }
    }
  };
  CastleBoosterSelectComponent.prototype.onClickBuy = function () {
    var __s32local0 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
    __s32local0.eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._buyPackageID);
    __s32local0.specialEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    var __s32local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s32local1.parseDataFromScrollItem(__s32local0);
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __s32local1);
  };
  CastleBoosterSelectComponent.prototype.getValue = function () {
    return __dep_exact_f855840627e6e145.int(this._scrollComponent.currentValue);
  };
  return CastleBoosterSelectComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleBoosterSelectComponent = __s0local2;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
