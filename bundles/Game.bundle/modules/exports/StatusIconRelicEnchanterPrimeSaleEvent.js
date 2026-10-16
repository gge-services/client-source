Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconRelicEnchanterPrimeSaleEvent() {
    var __s3local0 = __s1param0.call(this, "Btn_RelicEnchanterPrimeSale", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_RELICUS) || this;
    __s3local0.setTooltip("dialog_primeday_primesale_relicEnchanterHudIcon_tooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconRelicEnchanterPrimeSaleEvent, __s1param0);
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._relicEnchanterPrimeSaleEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER);
    if (this._relicEnchanterPrimeSaleEventVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= this._relicEnchanterPrimeSaleEventVO.minLevel && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._relicEnchanterPrimeSaleEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this._relicEnchanterPrimeSaleEventVO) {
      this._relicEnchanterPrimeSaleEventVO.openDialog();
    }
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.onTimerUpdate = function (__s16param0 = null) {
    if (this.icon && this.icon.txt_label && this._relicEnchanterPrimeSaleEventVO) {
      var __s16local0 = this._relicEnchanterPrimeSaleEventVO ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._relicEnchanterPrimeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.itxt_label.textContentVO.stringValue = __s16local0;
      this.updateCache();
    }
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.updateStatusIcon = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconRelicEnchanterPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconRelicEnchanterPrimeSaleEvent;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconRelicEnchanterPrimeSaleEvent = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
