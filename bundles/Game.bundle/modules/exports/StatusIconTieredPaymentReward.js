Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconTieredPaymentReward() {
    return __s1param0.call(this, "Btn_TieredPaymentReward", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_TIERED) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconTieredPaymentReward, __s1param0);
  StatusIconTieredPaymentReward.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.onTimerUpdate();
  };
  StatusIconTieredPaymentReward.prototype.onTimerUpdate = function (__s7param0 = null) {
    if (this._paymentEventVO && !this._paymentEventVO.isTimeless) {
      this.setTime();
      this.itxt_label.visible = true;
    } else {
      this.itxt_label.visible = false;
    }
  };
  StatusIconTieredPaymentReward.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    if (this._paymentEventVO && !this._paymentEventVO.isTimeless) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  StatusIconTieredPaymentReward.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconTieredPaymentReward.prototype.setTime = function () {
    this.itxt_label.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinuteSecondTimeString(this._paymentEventVO.remainingEventTimeInSeconds);
    this.updateCache();
  };
  StatusIconTieredPaymentReward.prototype.setVisibilityLoaded = function () {
    this.updateCurrentEventVO();
    var __s18local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    var __s18local1 = __dep_exact_f855840627e6e145.int(this._paymentEventVO ? this._paymentEventVO.maxBuyCount - this._paymentEventVO.boughtAllRewardsCount : 0);
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive || !__s18local0 || !this._paymentEventVO || __s18local1 <= 0 || __dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._paymentEventVO.eventId)) {
      this.hide();
    } else {
      this.setTooltip("dialog_primeday_paymentTier_hudIcon_tooltip");
      this.show();
    }
  };
  StatusIconTieredPaymentReward.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconTieredPaymentReward.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
  };
  StatusIconTieredPaymentReward.prototype.onChangePossibilityToShowMe = function (__s26param0) {
    this.setVisibility();
  };
  StatusIconTieredPaymentReward.prototype.onClick = function () {
    if (this._paymentEventVO) {
      this._paymentEventVO.openDialog();
    }
  };
  StatusIconTieredPaymentReward.prototype.onRemoveEvent = function (__s31param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s31param0.specialEventVO, "PaymentrewardEventVO") && this._paymentEventVO && __s31param0.specialEventVO.eventId == this._paymentEventVO.eventId) {
      this.hide();
    }
  };
  StatusIconTieredPaymentReward.prototype.onPaymentRewardUpdate = function (__s34param0) {
    this.updateCurrentEventVO();
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s34param0.specialEventVO, "PaymentrewardEventVO") && __s34param0.specialEventVO.eventId != __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
      this.setVisibility();
    }
  };
  StatusIconTieredPaymentReward.prototype.updateCurrentEventVO = function () {
    this._paymentEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId([__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TIERED_PRIME_DAY]);
  };
  return StatusIconTieredPaymentReward;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconTieredPaymentReward = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
