Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleOfferDialogProperties = require("gge-module:export_CastleOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function StatusIconSpecialIngameOffer() {
    return __s1param0.call(this, "Btn_SpecialIngameOffer", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSpecialIngameOffer, __s1param0);
  StatusIconSpecialIngameOffer.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.setTooltip("dialog_specialIngameOffer_HappyHourTooltip");
  };
  StatusIconSpecialIngameOffer.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconSpecialIngameOffer.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconSpecialIngameOffer.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialIngameOffer.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialIngameOffer.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpecialIngameOfferDialog.CastleSpecialIngameOfferDialog, new __dep_export_CastleOfferDialogProperties.CastleOfferDialogProperties(this._currentOffer));
    }
  };
  StatusIconSpecialIngameOffer.prototype.setVisibilityLoaded = function () {
    var __s18local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    this._currentOffer = __dep_export_CastleModel.CastleModel.globalOfferData.getActiveOffer(__dep_export_CastleGlobalOfferData.CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER);
    if (this._currentOffer && __s18local0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconSpecialIngameOffer.prototype.onTimerUpdate = function (__s22param0 = null) {
    this.itxt_label.textContentVO.stringValue = __s22param0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(__s22param0.nowValue)) : __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  StatusIconSpecialIngameOffer.prototype.onOfferEnded = function (__s24param0) {
    this.setVisibility();
  };
  StatusIconSpecialIngameOffer.prototype.onOfferAdded = function (__s26param0) {
    if (!this._currentOffer && !__dep_export_CastleModel.CastleModel.globalOfferData.isPrivateOfferActive) {
      if (__s26param0.offerVO.offerType == __dep_export_CastleGlobalOfferData.CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER) {
        this._currentOffer = __s26param0.offerVO;
        this.show();
      }
    }
  };
  StatusIconSpecialIngameOffer.prototype.showLoaded = function (__s30param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s30param0);
    this.onTimerUpdate();
  };
  return StatusIconSpecialIngameOffer;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconSpecialIngameOffer = __s0local0;
var __dep_export_CastleGlobalOfferData = require("gge-module:export_CastleGlobalOfferData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSpecialIngameOfferDialog = require("gge-module:export_CastleSpecialIngameOfferDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
