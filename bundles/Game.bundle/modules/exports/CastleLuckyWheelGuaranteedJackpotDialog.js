Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelGuaranteedJackpotDialog() {
    var __s3local0 = this;
    __s3local0.willShowDialogAgain = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleLuckyWheelGuaranteedJackpotDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelGuaranteedJackpotDialog, __s1param0);
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.cancelBtn, this.dialogDisp.acceptBtn]);
    this.checkmarkComponent = new __dep_export_CastleLuckyWheelCheckboxWrapper.CastleLuckyWheelCheckboxWrapper(this.dialogDisp.checkmarkComponent);
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.willShowDialogAgain = __dep_export_CastleModel.CastleModel.luckyWheelData.showGuaranteedJackpotDialog;
    this.checkmarkComponent.isEnabled = !this.willShowDialogAgain;
    this.setTexts();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.addEventListenerOnShow();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.removeEventListenersOnHide();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onUserCurrencyUpdate = function (__s13param0) {
    this.colorizeTexts();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onTicketUpdate = function (__s15param0) {
    this.colorizeTexts();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onRemoveSpecialEvent = function (__s17param0) {
    if (__s17param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onTimerTick = function (__s20param0) {
    if (this.eventVO.remainingEventTimeInSeconds < __dep_export_LuckyWheelData.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.acceptBtn, false);
    }
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_guaranteedJackpot_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.descTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_guaranteedJackpot_copy", [__dep_export_CastleModel.CastleModel.luckyWheelData.jackpotC2Price, __dep_export_CastleModel.CastleModel.luckyWheelData.jackpotTicketPrice]));
    this.textFieldManager.registerTextField(this.dialogDisp.notAgainTxt, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_luckyWheel_guaranteedJackpot_dontShow"));
    this._ticketPriceText = this.textFieldManager.registerTextField(this.dialogDisp.ticketsTxt, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.luckyWheelData.jackpotTicketPrice));
    this._c2PriceText = this.textFieldManager.registerTextField(this.dialogDisp.rubbiesTxt, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.luckyWheelData.jackpotC2Price));
    this.colorizeTexts();
    this.dialogDisp.ticketPriceTooltipArea.toolTipText = "tooltip_tickets";
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.colorizeTexts = function () {
    if (this.eventVO.hasEnoughRubiesToBuyJackpot) {
      this._c2PriceText.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this._c2PriceText.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.dialogDisp.c2PriceTooltipArea.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    if (this.eventVO.hasEnoughTicketsToBuyJackpot) {
      this._ticketPriceText.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this._ticketPriceText.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onClick = function (__s31param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s31param0.target)) {
      __s1param0.prototype.onClick.call(this, __s31param0);
      switch (__s31param0.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.cancelBtn:
          this.hide();
          break;
        case this.dialogDisp.acceptBtn:
          this.willShowDialogAgain = !this.checkmarkComponent.isEnabled;
          this.eventVO.willShowDialogAgain = this.willShowDialogAgain;
          this.dialogProperties.clickAcceptCallback();
      }
    }
  };
  Object.defineProperty(CastleLuckyWheelGuaranteedJackpotDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelGuaranteedJackpotDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelGuaranteedJackpotDialog.__initialize_static_members = function () {
    CastleLuckyWheelGuaranteedJackpotDialog.NAME = "CastleLuckyWheelGuaranteedJackpotDialog";
  };
  return CastleLuckyWheelGuaranteedJackpotDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleLuckyWheelGuaranteedJackpotDialog = __s0local0;
var __dep_export_LuckyWheelData = require("gge-module:export_LuckyWheelData");
var __dep_export_CastleLuckyWheelCheckboxWrapper = require("gge-module:export_CastleLuckyWheelCheckboxWrapper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
