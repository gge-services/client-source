Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __s0local0 = function (__s1param0) {
  function CastleTimelessSpecialOfferDialog() {
    var __s3local0 = this;
    __s3local0.colors = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleTimelessSpecialOfferDialog.NAME) || this).colors.push(4425479);
    __s3local0.colors.push(8966950);
    __s3local0.colors.push(15911692);
    __s3local0.colors.push(15692815);
    __s3local0.colors.push(13376517);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimelessSpecialOfferDialog, __s1param0);
  Object.defineProperty(CastleTimelessSpecialOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimelessSpecialOfferDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_shop, this.dialogDisp.btn_payment]);
  };
  CastleTimelessSpecialOfferDialog.prototype.getDiscountValueBasedOnOfferType = function () {
    if (this.dialogProperties.offerVO.offerType == __dep_export_CastleGlobalOfferData.CastleGlobalOfferData.PRIME_TIME) {
      return this.dialogProperties.offerVO.cashDiscount;
    } else {
      return this.dialogProperties.offerVO.goldDiscount;
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.dialogDisp.btn_shop.toolTipText = "add_Gold";
    this.dialogDisp.btn_payment.toolTipText = "add_Gold";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_payment.txt_shop, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_gold"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description_left, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_TimelessSpecialOffer_description"));
    var __s13local0 = this.getDiscountValueBasedOnOfferType();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateOffer_whaleChest_noise"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_copy2_2", [__s13local0]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_copy3", [CastleTimelessSpecialOfferDialog.EXAMPLE_GOLD, (1 + __s13local0 / 100) * CastleTimelessSpecialOfferDialog.EXAMPLE_GOLD]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("primetime_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_Bonus")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus_amount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s13local0]));
    this.dialogDisp.progressBar.mouseChildren = false;
    this.onTimerUpdate();
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (this.dialogProperties == null || this.dialogProperties.offerVO == null) {
      this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.hideLoaded = function (__s16param0 = null) {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleTimelessSpecialOfferDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_shop:
      case this.dialogDisp.btn_payment:
        __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_TIMELESS_SPECIAL_OFFER, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_TIMELESS_SPECIAL_OFFER);
        this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.onOfferAdded = function (__s21param0) {
    if (__dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.onOfferEnded = function (__s24param0) {
    if (__s24param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.onTimerUpdate = function (__s27param0 = null) {
    var __s27local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.offerStartTimeStamp);
    var __s27local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.offerEndTimeStamp);
    var __s27local2 = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer());
    var __s27local3 = CastleTimelessSpecialOfferDialog.barrelFillLevel(__dep_export_CastleMathHelper.CastleMathHelper.clamp((__s27local1 - __s27local2) / (__s27local1 - __s27local0), 0, 1));
    this.SetRemainingRubies(__s27local3);
    this.dialogDisp.progressBar.toolTipText = {
      t: "dialog_TimelessSpecialOffer_barTooltip",
      p: [Math.round(__s27local3 * 100)]
    };
  };
  CastleTimelessSpecialOfferDialog.barrelFillLevel = function (__s29param0) {
    var __s29local0 = 1 - __s29param0;
    if (__s29local0 > 0.9) {
      return (__s29local0 * -99 + 99) / 109.091;
    } else {
      return (1 / (Math.pow(__s29local0 + 0.0033, 2) + 0.01) + 9.2) / 109.091;
    }
  };
  CastleTimelessSpecialOfferDialog.prototype.SetRemainingRubies = function (__s33param0) {
    var __s33local0 = Math.ceil(__s33param0 * 36);
    for (var __s33local1 = 1; __s33local1 <= 36; ++__s33local1) {
      this.dialogDisp.barrel["ruby" + __s33local1].visible = __s33local1 <= __s33local0;
    }
    this.dialogDisp.progressBar.bar_mask.scaleY = __s33param0;
    var __s33local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s33local2.color = this.colors[Math.min(this.colors.length - 1, Math.floor((1 - __s33param0) * this.colors.length))];
    this.dialogDisp.progressBar.bar.useFilters([new createjs.ColorFilter(__s33local2.redMultiplier, __s33local2.greenMultiplier, __s33local2.blueMultiplier, __s33local2.alphaMultiplier, __s33local2.redOffset, __s33local2.greenOffset, __s33local2.blueOffset, __s33local2.alphaOffset)]);
  };
  CastleTimelessSpecialOfferDialog.__initialize_static_members = function () {
    CastleTimelessSpecialOfferDialog.NAME = "CastleTimelessSpecialOffer";
    CastleTimelessSpecialOfferDialog.EXAMPLE_GOLD = 50000;
  };
  return CastleTimelessSpecialOfferDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTimelessSpecialOfferDialog = __s0local0;
var __dep_export_CastleGlobalOfferData = require("gge-module:export_CastleGlobalOfferData");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
