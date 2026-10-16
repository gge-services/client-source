Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconReactivationPaymentRewardEvent() {
    return __s1param0.call(this, "Btn_PaymentReward") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconReactivationPaymentRewardEvent, __s1param0);
  StatusIconReactivationPaymentRewardEvent.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.displayTimeInPercentage = function () {
    this.updateRemainingFromTimestamps(this._paymentEventVO.startTimestamp, this._paymentEventVO.endTimestamp);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.hide = function () {
    this._paymentEventVO = null;
    __s1param0.prototype.hide.call(this);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconReactivationPaymentRewardEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onTimerUpdate = function (__s15param0 = null) {
    if (this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
      this.displayTimeInPercentage();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.setVisibilityLoaded = function () {
    this.updateCurrentEventVO();
    var __s18local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (this._paymentEventVO && __s18local0 && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._paymentEventVO.eventId)) {
      this.setTooltip(this.getTooltipBySkinID());
      var __s18local1 = 4 + this._paymentEventVO.skinID;
      if (__s18local1 >= 100) {
        __s18local1 -= 100;
      }
      this.icon.gotoAndStop(__s18local1);
      if (this.iconDisp.barItem) {
        this.iconDisp.barItem.visible = false;
        if (this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
          this.iconDisp.barItem.visible = true;
        }
      }
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.getTooltipBySkinID = function () {
    switch (this._paymentEventVO.skinID) {
      case 1:
        return "dialog_primeday_independenceDay_title";
      case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUPER:
      default:
        return "eventBuilding_decoOffer";
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.updateCurrentEventVO = function () {
    this._paymentEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId([__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY]);
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onChangePossibilityToShowMe = function (__s30param0) {
    this.setVisibility();
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this._paymentEventVO) {
      this._paymentEventVO.openDialog();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onRemoveEvent = function (__s35param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s35param0.specialEventVO, "PaymentrewardEventVO") && this._paymentEventVO && __s35param0.specialEventVO.eventId == this._paymentEventVO.eventId) {
      this.hide();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.onPaymentRewardUpdate = function (__s38param0) {
    this.updateCurrentEventVO();
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s38param0.specialEventVO, "PaymentrewardEventVO") && __s38param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
      this.setVisibility();
    }
  };
  StatusIconReactivationPaymentRewardEvent.prototype.showLoaded = function (__s41param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s41param0);
    this.onTimerUpdate();
  };
  return StatusIconReactivationPaymentRewardEvent;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconReactivationPaymentRewardEvent = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
