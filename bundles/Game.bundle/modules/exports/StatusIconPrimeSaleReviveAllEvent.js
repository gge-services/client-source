Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconPrimeSaleReviveAllEvent() {
    var __s3local0 = __s1param0.call(this, "Btn_PrimeSalesReviveAll", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_REVIVE_ALL) || this;
    __s3local0.setTooltip("dialog_specialOfferDeco_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconPrimeSaleReviveAllEvent, __s1param0);
  StatusIconPrimeSaleReviveAllEvent.prototype.setVisibilityLoaded = function () {
    this._primeSaleEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_REVIVE_ALL);
    if (this._primeSaleEventVO) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this._primeSaleEventVO) {
      this._primeSaleEventVO.openDialog();
    }
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.updateStatusIcon = function (__s16param0) {
    this.setVisibility();
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.showLoaded = function (__s18param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.onTimerUpdate = function (__s20param0 = null) {
    var __s20local0 = 0;
    if (this._primeSaleEventVO) {
      __s20local0 = __dep_exact_f855840627e6e145.int(this._primeSaleEventVO.remainingEventTimeInSeconds);
    }
    if (this.itxt_label) {
      this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s20local0);
    }
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeSaleReviveAllEvent.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconPrimeSaleReviveAllEvent;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconPrimeSaleReviveAllEvent = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
