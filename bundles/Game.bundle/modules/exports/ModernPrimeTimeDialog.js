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
  function ModernPrimeTimeDialog() {
    return __s1param0.call(this, ModernPrimeTimeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernPrimeTimeDialog, __s1param0);
  Object.defineProperty(ModernPrimeTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernPrimeTimeDialog.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payment], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  ModernPrimeTimeDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.dialogDisp.mc_banner.x = ModernPrimeTimeDialog.BANNER_X;
    this.dialogDisp.mc_banner.y = ModernPrimeTimeDialog.BANNER_Y;
    this.dialogDisp.btn_payment.toolTipText = "add_Gold";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_payment.txt_shop, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("add_gold"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.dialogProperties.offerVO.goldDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_bonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_Bonus"));
    var __s9local0 = __dep_exact_92d05af59ee2ff30.Localize.text("primetime_copy1");
    __s9local0 += "\n";
    __s9local0 += __dep_exact_92d05af59ee2ff30.Localize.text("dialog_specialOffer_copy2_2", [this.dialogProperties.offerVO.goldDiscount]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.TextVO(__s9local0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_copy4", [new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.number(Math.floor((1 + this.dialogProperties.offerVO.goldDiscount / 100) * ModernPrimeTimeDialog.EXAMPLE_GOLD), false))])).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_specialOffer_title"));
    this.onTimerUpdate();
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (__dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.hideLoaded = function (__s12param0 = null) {
    this.removeEventListenerOnHide();
    __s1param0.prototype.hideLoaded.call(this);
  };
  ModernPrimeTimeDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    __s1param0.prototype.removeEventListenerOnHide.call(this);
  };
  ModernPrimeTimeDialog.prototype.onEventAdded = function (__s16param0) {
    if (__s16param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_TIME_SKIN) {
      var __s16local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_TIME_SKIN);
      if (!!__s16local0 && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned("PrimeTimeDialog_" + __s16local0.skinName)) {
        this.hide();
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, this.dialogProperties.offerVO);
      }
    }
  };
  ModernPrimeTimeDialog.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    switch (__s20param0.target) {
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
  ModernPrimeTimeDialog.prototype.onOfferAdded = function (__s24param0) {
    if (__dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.onOfferEnded = function (__s27param0) {
    var __s27local0 = __dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
    if (__s27param0.offerVO == this.dialogProperties.offerVO || __s27local0 == null) {
      this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.onTimerUpdate = function (__s30param0 = null) {
    this.itxt_time.textContentVO.stringValue = __s30param0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(__s30param0.nowValue)) : __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  ModernPrimeTimeDialog.prototype.removeEventListenerOnDestroy = function () {
    this.removeEventListenerOnHide();
    __s1param0.prototype.removeEventListenerOnDestroy.call(this);
  };
  ModernPrimeTimeDialog.__initialize_static_members = function () {
    ModernPrimeTimeDialog.NAME = "ModernPrimeTime";
    ModernPrimeTimeDialog.EXAMPLE_GOLD = 50000;
  };
  ModernPrimeTimeDialog.BANNER_X = -274.9;
  ModernPrimeTimeDialog.BANNER_Y = -312.7;
  return ModernPrimeTimeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ModernPrimeTimeDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
