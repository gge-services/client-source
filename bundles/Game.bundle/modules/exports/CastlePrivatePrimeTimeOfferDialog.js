Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SkinnableDialog = require("gge-module:export_SkinnableDialog");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local0 = function (__s1param0) {
  function CastlePrivatePrimeTimeOfferDialog() {
    var __s3local0 = this;
    __s3local0.goldDiscount = 0;
    __s3local0.cashDiscount = 0;
    __s3local0.typeID = -1;
    __s3local0._timeString = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastlePrivatePrimeTimeOfferDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivatePrimeTimeOfferDialog, __s1param0);
  Object.defineProperty(CastlePrivatePrimeTimeOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeTimeOfferDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_buy, this.dialogDisp.btn_close]);
  };
  Object.defineProperty(CastlePrivatePrimeTimeOfferDialog.prototype, "skinId", {
    get: function () {
      return this.dialogProperties.offerVO.typeID;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_SkinnableDialog.SkinnableDialog.prototype, "skinId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeTimeOfferDialog.prototype, "defaultAssetName", {
    get: function () {
      return this.dialogClassName + "_010";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_SkinnableDialog.SkinnableDialog.prototype, "defaultAssetName").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeTimeOfferDialog.prototype.hideLoaded = function (__s17param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.showLoaded = function (__s19param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    if (__dep_export_CastleModel.CastleModel.globalOfferData.getActivePrivatePrimeTimeOffer() == null) {
      this.hide();
    }
    this.goldDiscount = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.cashDiscount);
    this.cashDiscount = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.goldDiscount);
    this.typeID = __dep_exact_f855840627e6e145.int(this.dialogProperties.offerVO.typeID);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.initTexts();
    this.onTimerUpdate();
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_limitedTime, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privatePrimeTime_limitedTime")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privatePrimeTime_loyaltyBonus")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privatePrimeTime_onlyNowFor")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offerEndsTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privatePrimeTime_offerEnds")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privatePrimeTime_bonusValue", [this.goldDiscount])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_btn, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_Gold")).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_offerEndsTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privatePrimeTime_copy", [this.goldDiscount, 50000, this.goldDiscount * 50000 * 0.01 + 50000]));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_title3, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
    this.itxt_time.autoFitToBounds = true;
    this.itxt_description.autoFitToBounds = true;
    this.itxt_name.autoFitToBounds = true;
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    switch (__s24param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_buy:
        __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_TIME_OFFER, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_PRIVATE_PRIME_TIME_OFFER);
    }
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.onTimerUpdate = function (__s27param0 = null) {
    var __s27local0 = this.dialogProperties.offerVO.remainingDuration(__s27param0 ? __s27param0.nowValue : __dep_export_CachedTimer.CachedTimer.getCachedTimer());
    this._timeString = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s27local0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT);
    if (this.itxt_time) {
      this.itxt_time.textContentVO.stringValue = this._timeString;
      this.itxt_time.autoFitToBounds = true;
    }
  };
  CastlePrivatePrimeTimeOfferDialog.prototype.onOfferEnded = function (__s30param0) {
    if (__s30param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastlePrivatePrimeTimeOfferDialog.__initialize_static_members = function () {
    CastlePrivatePrimeTimeOfferDialog.NAME = "CastlePrivatePrimeTimeOffer";
  };
  return CastlePrivatePrimeTimeOfferDialog;
}(__dep_export_SkinnableDialog.SkinnableDialog);
exports.CastlePrivatePrimeTimeOfferDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
