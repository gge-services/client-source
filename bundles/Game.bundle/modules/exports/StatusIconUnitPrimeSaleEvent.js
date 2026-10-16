Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AOfferHubItemStatusIcon = require("gge-module:export_AOfferHubItemStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconUnitPrimeSaleEvent() {
    var __s3local0 = __s1param0.call(this, "Btn_EventPackagePrimeSales") || this;
    __s3local0.setTooltip("dialog_specialOfferDeco_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconUnitPrimeSaleEvent, __s1param0);
  StatusIconUnitPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._primeSaleEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNIT_PRIME_SALE);
    if (this._primeSaleEventVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= this._primeSaleEventVO.minLevel && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._primeSaleEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconUnitPrimeSaleEvent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this._primeSaleEventVO) {
      this._primeSaleEventVO.openDialog();
    }
  };
  StatusIconUnitPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconUnitPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconUnitPrimeSaleEvent.prototype.onTimerUpdate = function (__s16param0 = null) {
    if (this.icon && this._primeSaleEventVO) {
      var __s16local0 = this._primeSaleEventVO ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._primeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.itxt_label.textContentVO.stringValue = __s16local0;
      this.updateCache();
    }
  };
  StatusIconUnitPrimeSaleEvent.prototype.updateStatusIcon = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconUnitPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconUnitPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconUnitPrimeSaleEvent;
}(__dep_export_AOfferHubItemStatusIcon.AOfferHubItemStatusIcon);
exports.StatusIconUnitPrimeSaleEvent = __s0local0;
