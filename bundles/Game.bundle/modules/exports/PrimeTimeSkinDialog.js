Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function PrimeTimeSkinDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, PrimeTimeSkinDialog.skinName) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrimeTimeSkinDialog, __s1param0);
  Object.defineProperty(PrimeTimeSkinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  PrimeTimeSkinDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payment], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  PrimeTimeSkinDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.dialogDisp.btn_payment.toolTipText = "add_Gold";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_payment.txt_shop, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("add_gold"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.dialogProperties.offerVO.goldDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_bonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_Bonus"));
    var __s9local0 = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("primetime_copy1");
    __s9local0 += "\n";
    __s9local0 += __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_specialOffer_copy2_2", [this.dialogProperties.offerVO.goldDiscount]);
    var __s9local1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.TextVO(__s9local0));
    if (__s9local1.height < __s9local1.textHeight) {
      __s9local1.textContentVO.stringValue = __s9local0.replace("\n", " ");
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_copy4", [new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.number(Math.floor((1 + this.dialogProperties.offerVO.goldDiscount / 100) * PrimeTimeSkinDialog.EXAMPLE_GOLD), false))])).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_title"));
    this.onTimerUpdate();
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    if (__dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.hideLoaded = function (__s13param0 = null) {
    this.removeEventListenerOnHide();
    __s1param0.prototype.hideLoaded.call(this);
    this.layoutManager.clearDialog(this);
  };
  PrimeTimeSkinDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __s1param0.prototype.removeEventListenerOnHide.call(this);
  };
  PrimeTimeSkinDialog.prototype.onEventRemoved = function (__s17param0) {
    if (__s17param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_TIME_SKIN) {
      this.hide();
      if (__dep_export_CastleModel.CastleModel.globalOfferData.isGlobalOfferActive) {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, __dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer());
      }
    }
  };
  PrimeTimeSkinDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_payment:
        if (__dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() != null) {
          __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_SPECIAL_OFFER_BETTER, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_SPECIAL_OFFER_BETTER);
        }
        this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.onOfferAdded = function (__s25param0) {
    if (__dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.onOfferEnded = function (__s28param0) {
    var __s28local0 = __dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
    if (__s28param0.offerVO == this.dialogProperties.offerVO || __s28local0 == null) {
      this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.onTimerUpdate = function (__s31param0 = null) {
    this.itxt_time.textContentVO.stringValue = __s31param0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(__s31param0.nowValue)) : __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  PrimeTimeSkinDialog.prototype.removeEventListenerOnDestroy = function () {
    this.removeEventListenerOnHide();
    __s1param0.prototype.removeEventListenerOnDestroy.call(this);
  };
  PrimeTimeSkinDialog.prototype.displayObjectClipIsLoaded = function (__s35param0) {
    var __s35local0 = this.dialogDisp.mc_banner.x;
    var __s35local1 = this.dialogDisp.mc_banner.y;
    this.dialogDisp.mc_banner.x = 0;
    this.dialogDisp.mc_banner.y = 0;
    this.dialogDisp.mc_banner.visible = false;
    __s1param0.prototype.displayObjectClipIsLoaded.call(this, __s35param0);
    this.dialogDisp.mc_banner.visible = true;
    this.dialogDisp.mc_banner.x = __s35local0;
    this.dialogDisp.mc_banner.y = __s35local1;
  };
  Object.defineProperty(PrimeTimeSkinDialog, "skinName", {
    get: function () {
      return "PrimeTimeDialog_" + PrimeTimeSkinDialog.skinEventVO.skinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeTimeSkinDialog, "skinEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_TIME_SKIN);
    },
    enumerable: true,
    configurable: true
  });
  PrimeTimeSkinDialog.__initialize_static_members = function () {
    PrimeTimeSkinDialog.EXAMPLE_GOLD = 50000;
  };
  return PrimeTimeSkinDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.PrimeTimeSkinDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
