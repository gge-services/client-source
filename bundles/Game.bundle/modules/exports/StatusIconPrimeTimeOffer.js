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
  function StatusIconPrimeTimeOffer() {
    var __s3local0 = __s1param0.call(this, "Btn_PrivatePrimeTimeOffer", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_PRIME_TIME) || this;
    __s3local0.setTooltip("dialog_specialOffer_HappyHourTooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconPrimeTimeOffer, __s1param0);
  StatusIconPrimeTimeOffer.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconPrimeTimeOffer.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
  };
  StatusIconPrimeTimeOffer.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeTimeOffer.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPrimeTimeOffer.prototype.setVisibilityLoaded = function () {
    this.currentOfferVO = __dep_export_CastleModel.CastleModel.globalOfferData.getActivePrivatePrimeTimeOffer();
    if (this.currentOfferVO && !this.currentOfferVO.isTimeless) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconPrimeTimeOffer.prototype.initLoaded = function (__s17param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s17param0);
    if (this.iconDisp.barItem) {
      this.iconDisp.barItem.visible = false;
    }
  };
  StatusIconPrimeTimeOffer.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePrivatePrimeTimeOfferDialog.CastlePrivatePrimeTimeOfferDialog, new __dep_export_CastleOfferDialogProperties.CastleOfferDialogProperties(this.currentOfferVO));
  };
  StatusIconPrimeTimeOffer.prototype.onTimerUpdate = function (__s22param0 = null) {
    this.itxt_label.textContentVO.stringValue = __s22param0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentOfferVO.remainingDuration(__s22param0.nowValue)) : __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.currentOfferVO.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  StatusIconPrimeTimeOffer.prototype.onOfferEnded = function (__s24param0) {
    this.setVisibility();
  };
  StatusIconPrimeTimeOffer.prototype.onOfferAdded = function (__s26param0) {
    this.setVisibility();
  };
  StatusIconPrimeTimeOffer.prototype.showLoaded = function (__s28param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s28param0);
    this.onTimerUpdate();
  };
  return StatusIconPrimeTimeOffer;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconPrimeTimeOffer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivatePrimeTimeOfferDialog = require("gge-module:export_CastlePrivatePrimeTimeOfferDialog");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
