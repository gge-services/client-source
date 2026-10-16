Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function APostAttackSelectBoosterDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentAvailableBoosters = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APostAttackSelectBoosterDialog, __s1param0);
  APostAttackSelectBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.buttonInit();
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addSliderButton(this.dialogDisp.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_slider.sliderBar), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
  };
  APostAttackSelectBoosterDialog.prototype.buttonInit = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_buy, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.dialogDisp.btn_buy.mouseChildren = false;
  };
  APostAttackSelectBoosterDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.fightScreenVO.resetCollectorBooster();
    this._currentAvailableBoosters = -1;
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onValueChanged));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this.updateScrollComponent();
    this.updateReward();
    this.updateSelectedBoosterTexts();
    this.updateDiscount();
  };
  APostAttackSelectBoosterDialog.prototype.hide = function () {
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onValueChanged));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "discount", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  APostAttackSelectBoosterDialog.prototype.updateDiscount = function (__s15param0 = null) {
    if (this.discount > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.mc_discount.txt_priceReduction, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [-this.discount]));
      this.dialogDisp.btn_buy.mc_discount.visible = true;
    } else {
      this.dialogDisp.btn_buy.mc_discount.visible = false;
    }
  };
  APostAttackSelectBoosterDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return 0;
  };
  APostAttackSelectBoosterDialog.prototype.updateScrollComponent = function () {
    var __s21local0 = this.getCurrentTrueMaxSpendableBooster();
    if (this._currentAvailableBoosters != __s21local0) {
      var __s21local1 = this._currentAvailableBoosters;
      this._currentAvailableBoosters = __s21local0;
      this._scrollComponent.init(0, this._currentAvailableBoosters);
      this._scrollComponent.scrollToValue(__s21local1);
      this.updateSliderFill();
      this._scrollComponent.enableComponent(this._currentAvailableBoosters > 0);
    }
  };
  APostAttackSelectBoosterDialog.prototype.updateSliderFill = function () {
    this.dialogDisp.mc_slider.mc_sliderLineFill.width = this.dialogDisp.mc_slider.btn_slider.x - this.dialogDisp.mc_slider.sliderBar.x;
  };
  APostAttackSelectBoosterDialog.prototype.updateSelectedBoosterTexts = function () {};
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "scrollComponentValue", {
    get: function () {
      return this._scrollComponent.currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "boosterKey", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "boostedKey", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  APostAttackSelectBoosterDialog.prototype.updateReward = function () {
    var __s34local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(60, 60));
    __s34local0.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(new __dep_export_CollectableRendererList.CollectableRendererList(), new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_reward.mc_item).addInfoBtn(this.dialogDisp.mc_reward.btn_info), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, this._currentAvailableBoosters, this.boosterKey), __s34local0, null, this.bindFunction(this.afterRend));
    this.dialogDisp.mc_reward.mc_item.mc_textBackground.visible = false;
    if (this.dialogDisp.mc_charmIcon) {
      this.dialogDisp.mc_charmIcon.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, this.boostedKey).getNameTextId();
    }
  };
  APostAttackSelectBoosterDialog.prototype.afterRend = function (__s37param0) {
    if (this.dialogDisp.mc_icon) {
      var __s37local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(30, 30));
      __s37local0.tooltip.useAmount = false;
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.dialogDisp.mc_icon).addIconMc(this.dialogDisp.mc_icon), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, this._currentAvailableBoosters, this.boostedKey), __s37local0);
    }
  };
  APostAttackSelectBoosterDialog.prototype.onClick = function (__s40param0) {
    __s1param0.prototype.onClick.call(this, __s40param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      switch (__s40param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_buy:
          this.onBuyButton();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
      }
    }
  };
  APostAttackSelectBoosterDialog.prototype.onBuyButton = function () {};
  APostAttackSelectBoosterDialog.prototype.onValueChanged = function () {
    this.updateSliderFill();
    this.updateSelectedBoosterTexts();
  };
  APostAttackSelectBoosterDialog.prototype.onSpecialUserCurrencyUpdate = function (__s48param0) {
    this.updateScrollComponent();
    this.updateSelectedBoosterTexts();
  };
  APostAttackSelectBoosterDialog.prototype.onOkButton = function () {};
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "fightScreenVO", {
    get: function () {
      return this.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APostAttackSelectBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return APostAttackSelectBoosterDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.APostAttackSelectBoosterDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
