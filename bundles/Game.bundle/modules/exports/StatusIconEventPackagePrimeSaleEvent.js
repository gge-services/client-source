Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __s0local0 = function (__s1param0) {
  function StatusIconEventPackagePrimeSaleEvent() {
    var __s3local0 = __s1param0.call(this, "Btn_EventPackagePrimeSales", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_PACKAGES) || this;
    __s3local0.setTooltip("dialog_specialOfferDeco_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconEventPackagePrimeSaleEvent, __s1param0);
  StatusIconEventPackagePrimeSaleEvent.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._eventPackagePrimeSaleEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES);
    if (this._eventPackagePrimeSaleEventVO && this.isVisible()) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.isVisible = function () {
    return this._eventPackagePrimeSaleEventVO.canShowDialog();
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this._eventPackagePrimeSaleEventVO) {
      this._eventPackagePrimeSaleEventVO.openDialog();
    }
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.updateStatusIcon));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.updateStatusIcon));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.onTimerUpdate = function (__s24param0) {
    var __s24local0;
    if (__s24param0 === undefined) {
      __s24param0 = null;
    }
    if (this.icon) {
      __s24local0 = this._eventPackagePrimeSaleEventVO ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._eventPackagePrimeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this._itxt_label.textContentVO.stringValue = __s24local0;
      this.updateCache();
    }
  };
  StatusIconEventPackagePrimeSaleEvent.prototype.updateStatusIcon = function (__s28param0) {
    this.setVisibility();
  };
  return StatusIconEventPackagePrimeSaleEvent;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconEventPackagePrimeSaleEvent = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
