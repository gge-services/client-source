Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconPaymentReward() {
    return __s1param0.call(this, "Btn_PaymentReward", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_EVENT) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconPaymentReward, __s1param0);
  StatusIconPaymentReward.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
  };
  StatusIconPaymentReward.prototype.initTextField = function () {
    __s1param0.prototype.initTextField.call(this);
    if (this.itxt_label && this.itxt_label.visible && this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
      this.itxt_label.visible = false;
    }
  };
  StatusIconPaymentReward.prototype.displayTimeInPercentage = function () {
    this.updateRemainingFromTimestamps(this._paymentEventVO.startTimestamp, this._paymentEventVO.endTimestamp);
  };
  StatusIconPaymentReward.prototype.hide = function () {
    this._paymentEventVO = null;
    __s1param0.prototype.hide.call(this);
  };
  StatusIconPaymentReward.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPaymentReward.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onPaymentRewardUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onChangePossibilityToShowMe));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPaymentReward.prototype.onTimerUpdate = function (__s18param0 = null) {
    if (this._paymentEventVO) {
      if (this._paymentEventVO.isTimeDisplayedInPercentage) {
        this.displayTimeInPercentage();
      } else if (this.itxt_label && !this._paymentEventVO.isTimeless) {
        this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._paymentEventVO.remainingEventTimeInSeconds);
      }
    }
  };
  StatusIconPaymentReward.prototype.setVisibilityLoaded = function () {
    this.updateCurrentEventVO();
    var __s23local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && __s23local0 && this._paymentEventVO && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._paymentEventVO.eventId)) {
      this.setVisibilityForSimplePrimeDay();
      this.show();
      this.updateCache(false);
    } else {
      this.hide();
    }
  };
  StatusIconPaymentReward.prototype.setVisibilityForSimplePrimeDay = function () {
    this.setTooltip(this.getTooltipBySkinID());
    if (this._innerIconClip) {
      this.customizeInnerIconClip(this._innerIconClip);
      this.addAndResizeInnerIcon();
    }
    if (this.iconDisp.barItem) {
      this.iconDisp.barItem.visible = false;
      if (this._paymentEventVO && this._paymentEventVO.isTimeDisplayedInPercentage) {
        this.iconDisp.barItem.visible = true;
      }
    }
    this.initTextField();
  };
  StatusIconPaymentReward.prototype.getTooltipBySkinID = function () {
    switch (this._paymentEventVO.skinID) {
      case 1:
        return "dialog_primeday_independenceDay_title";
      case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUPER:
      default:
        return "eventBuilding_decoOffer";
    }
  };
  StatusIconPaymentReward.prototype.updateCurrentEventVO = function () {
    this._paymentEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PAYMENTREWARD_SPECIAL_OFFER);
  };
  StatusIconPaymentReward.prototype.onChangePossibilityToShowMe = function (__s37param0) {
    this.setVisibility();
  };
  StatusIconPaymentReward.prototype.onClick = function () {
    if (this._paymentEventVO) {
      this._paymentEventVO.openDialog();
    }
  };
  StatusIconPaymentReward.prototype.onRemoveEvent = function (__s42param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s42param0.specialEventVO, "PaymentrewardEventVO") && this._paymentEventVO && __s42param0.specialEventVO.eventId == this._paymentEventVO.eventId) {
      this.hide();
    }
  };
  StatusIconPaymentReward.prototype.onPaymentRewardUpdate = function (__s45param0) {
    this.updateCurrentEventVO();
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s45param0.specialEventVO, "PaymentrewardEventVO") && __s45param0.specialEventVO.eventId != __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
      this.setVisibility();
    }
  };
  StatusIconPaymentReward.prototype.showLoaded = function (__s48param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s48param0);
    this.onTimerUpdate();
  };
  StatusIconPaymentReward.prototype.onInnerIconClipLoaded = function (__s50param0 = null) {
    if (this.visible) {
      this.setVisibilityForSimplePrimeDay();
    }
    __s1param0.prototype.onInnerIconClipLoaded.call(this, __s50param0);
  };
  StatusIconPaymentReward.prototype.customizeInnerIconClip = function (__s53param0) {
    if (__s53param0 && this._paymentEventVO) {
      __s1param0.prototype.customizeInnerIconClip.call(this, __s53param0);
      var __s53local0 = 4 + this._paymentEventVO.skinID;
      if (__s53local0 >= 100) {
        __s53local0 -= 100;
      }
      __s53param0.gotoAndStop(__s53local0);
    }
  };
  return StatusIconPaymentReward;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconPaymentReward = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
