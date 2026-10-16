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
  function StatusIconDynamicOffer() {
    var __s3local0 = __s1param0.call(this, "Btn_DynamicOffer", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    __s3local0.setTooltip("dialog_specialIngameOffer_DynamicOfferTooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconDynamicOffer, __s1param0);
  StatusIconDynamicOffer.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
  };
  StatusIconDynamicOffer.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
  };
  StatusIconDynamicOffer.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconDynamicOffer.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconDynamicOffer.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDynamicOfferDialog.CastleDynamicOfferDialog, new __dep_export_CastleOfferDialogProperties.CastleOfferDialogProperties(this._currentOffer));
    }
  };
  StatusIconDynamicOffer.prototype.setVisibilityLoaded = function () {
    var __s16local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (!this._currentOffer && __dep_export_CastleModel.CastleModel.globalOfferData.isGlobalOfferActive) {
      this.hide();
    }
    if (this._currentOffer && __s16local0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconDynamicOffer.prototype.onTimerUpdate = function (__s21param0 = null) {
    this.itxt_label.textContentVO.stringValue = __s21param0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(__s21param0.nowValue)) : __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._currentOffer.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  StatusIconDynamicOffer.prototype.onOfferEnded = function (__s23param0) {
    this.setVisibility();
  };
  StatusIconDynamicOffer.prototype.showLoaded = function (__s25param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s25param0);
    this.onTimerUpdate();
  };
  return StatusIconDynamicOffer;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconDynamicOffer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDynamicOfferDialog = require("gge-module:export_CastleDynamicOfferDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
