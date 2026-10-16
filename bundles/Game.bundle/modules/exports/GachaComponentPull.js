Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_cxfResetCommandCache = require("gge-module:export_cxfResetCommandCache");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_C2SGachaSpinVO = require("gge-module:export_C2SGachaSpinVO");
var __dep_export_CommandDelayController = require("gge-module:export_CommandDelayController");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_SelectInputFieldComponent = require("gge-module:export_SelectInputFieldComponent");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaComponentPull(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._animationInProgress = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_pull, __s3local0.disp.btn_shop, __s3local0.disp.btn_minus, __s3local0.disp.btn_plus, __s3local0.disp.btn_max], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.itxt_label = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.btn_pull.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    var __s3local1 = {
      sourceId: __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.CXF_SOURCE_WEB_SHOP_BUTTON
    };
    if (__s3param1) {
      __s3local1.page = __s3param1;
    }
    __dep_export_CastleModel.CastleModel.userData.splitRunData.handleHCShopABTestPayload(__s3local1);
    __dep_export_cxfResetCommandCache.registerUIComponentToCXF(__s3local0.disp.btn_shop, "btn_webshop", __s3local1);
    __s3local0.disp.btn_shop.toolTipText = "goToTheShop";
    __s3local0.inputTextField = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(__s3local0.disp.mc_pickerTxt, __s3local0.bindFunction(__s3local0.onPercentValueInput), "1");
    __s3local0.inputTextField.searchField.restrict = "0-9";
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SHINE_ANIMATION_LOADED, __s3local0.bindFunction(__s3local0.onShineAnimationLoaded));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentPull, __s1param0);
  GachaComponentPull.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._animationInProgress = false;
    this.updateText();
    this.updateCurrency();
    this.inputTextField.searchField.text = this.currencyAmountPerPull.toString();
    this.updateButtons();
  };
  GachaComponentPull.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
    __dep_export_CommandDelayController.CommandDelayController.getInstance().finishDelayOfAllCommands();
  };
  GachaComponentPull.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentPull.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyUpdate));
  };
  GachaComponentPull.prototype.onGachaUpdate = function (__s14param0) {
    if (__s14param0.eventVO.eventId == this.getEventVO().eventId) {
      this.updateCurrency();
    }
  };
  GachaComponentPull.prototype.onSpin = function (__s17param0) {
    this._animationInProgress = true;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
    this.setSelectedAmount(this.selectedAmount);
  };
  GachaComponentPull.prototype.onSpinComplete = function (__s19param0) {
    this._animationInProgress = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
    __dep_export_CommandDelayController.CommandDelayController.getInstance().finishDelayOfAllCommands();
    this.updateButtons();
  };
  GachaComponentPull.prototype.onShineAnimationLoaded = function (__s21param0) {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.SHINE_ANIMATION_LOADED, this.bindFunction(this.onShineAnimationLoaded));
    this.updateButtons();
  };
  GachaComponentPull.prototype.onCurrencyUpdate = function (__s23param0) {
    this.updateCurrency();
    this.updateButtons();
  };
  GachaComponentPull.prototype.updateButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
    var __s25local0 = this.maxOfferings > this.currencyAmountPerPull;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_minus, __s25local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_plus, __s25local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_max, __s25local0);
  };
  GachaComponentPull.prototype.onClick = function (__s27param0) {
    __s1param0.prototype.onClick.call(this, __s27param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.disp.btn_pull:
          __dep_export_CommandDelayController.CommandDelayController.getInstance().addDelayCommandID(__dep_export_ClientConstSF.ClientConstSF.S2C_SHOW_POPUP, true);
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGachaSpinVO.C2SGachaSpinVO(this.getEventVO().eventId, this.selectedAmount / this.currencyAmountPerPull));
          this._animationInProgress = true;
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_pull, this.isPullPossible());
          break;
        case this.disp.btn_minus:
          this.setSelectedAmount(this.selectedAmount > this.currencyAmountPerPull ? this.selectedAmount - this.currencyAmountPerPull : this.currencyAmountPerPull);
          break;
        case this.disp.btn_plus:
          this.setSelectedAmount(this.selectedAmount < this.maxOfferings ? this.selectedAmount + this.currencyAmountPerPull : this.maxOfferings);
          break;
        case this.disp.btn_max:
          this.setSelectedAmount(this.maxOfferings);
      }
    }
  };
  GachaComponentPull.prototype.updateCurrency = function () {
    var __s31local0 = this.getEventVO().getCurrentGachaVO().costs.list[0];
    var __s31local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_icon).addIconMc(this.disp.mc_icon).addTextfield(this.disp.txt_text);
    var __s31local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, new __s0local0(30, 30));
    __s31local2.costTextfield.defaultColor = 15921906;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s31local1, __s31local0, __s31local2);
  };
  GachaComponentPull.prototype.updateText = function () {
    this.itxt_label.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("gachaPull_button_" + this.getEventVO().assetName());
  };
  GachaComponentPull.prototype.isPullPossible = function () {
    var __s35local0 = __dep_export_CostHelper.CostHelper.canAfford(new __dep_export_CollectablesCosts.CollectablesCosts(this.getEventVO().getCurrentGachaVO().costs));
    return !this._animationInProgress && __s35local0;
  };
  GachaComponentPull.prototype.onPercentValueInput = function () {
    var __s37local0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.selectedAmount, 1, this.maxOfferings);
    this.setSelectedAmount(__s37local0);
  };
  GachaComponentPull.prototype.setSelectedAmount = function (__s39param0) {
    __s39param0 = Math.floor(__s39param0 / this.currencyAmountPerPull) * this.currencyAmountPerPull;
    __s39param0 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s39param0, this.currencyAmountPerPull, this.maxOfferings);
    this.inputTextField.updateText(__s39param0.toString());
    this.getEventVO().currentMultiPull = this.selectedAmount / this.currencyAmountPerPull;
  };
  Object.defineProperty(GachaComponentPull.prototype, "selectedAmount", {
    get: function () {
      return parseInt(this.inputTextField.text);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaComponentPull.prototype, "maxOfferings", {
    get: function () {
      var __s43local0 = this.getEventVO().getCurrentGachaVO().multiPullMax;
      var __s43local1 = new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(this.getEventVO().getCurrentGachaVO().costs.getItemByIndex(0));
      var __s43local2 = Math.floor(__dep_export_CostHelper.CostHelper.getAvailableGoods(__s43local1) / this.currencyAmountPerPull) * this.currencyAmountPerPull;
      var __s43local3 = (this.getEventVO().getCurrentGachaVO().maxPulls + 1 - this.getEventVO().ownPoints) * this.currencyAmountPerPull;
      if (__s43local3 <= 0) {
        __s43local3 = Number.MAX_VALUE;
      }
      return Math.min(__s43local0 * this.currencyAmountPerPull, __s43local2, __s43local3);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaComponentPull.prototype, "currencyAmountPerPull", {
    get: function () {
      return this.getEventVO().getCurrentGachaVO().costs.getItemByIndex(0).amount;
    },
    enumerable: true,
    configurable: true
  });
  GachaComponentPull.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentPull;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentPull = __s0local1;
