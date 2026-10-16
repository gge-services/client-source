Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconSpecialOffer() {
    return __s1param0.call(this, "Btn_SpecialOffer", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_GLOBAL_PRIME_TIME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSpecialOffer, __s1param0);
  StatusIconSpecialOffer.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconSpecialOffer.prototype.initLoaded = function (__s7param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.setTooltip("dialog_specialOffer_HappyHourTooltip");
  };
  StatusIconSpecialOffer.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconSpecialOffer.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialOffer.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialOffer.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
      this.hide();
    } else {
      this._currentOffer = __dep_export_CastleModel.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
      if (this._currentOffer && !this._currentOffer.isTimeless) {
        this.show();
      } else {
        this.hide();
      }
    }
  };
  StatusIconSpecialOffer.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, this._currentOffer);
    }
  };
  StatusIconSpecialOffer.prototype.onTimerUpdate = function (__s24param0 = null) {
    var __s24local0;
    var __s24local1 = NaN;
    if (this._currentOffer.goldDiscount >= 175) {
      this.icon.gotoAndStop(2);
    } else {
      this.icon.gotoAndStop(1);
    }
    __s24local1 = __s24param0 ? __s24param0.nowValue : __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    __s24local0 = __dep_exact_f855840627e6e145.int(Math.max(this._currentOffer.remainingDuration(__s24local1), 1));
    this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s24local0);
  };
  StatusIconSpecialOffer.prototype.onOfferEnded = function (__s28param0) {
    this.setVisibility();
  };
  StatusIconSpecialOffer.prototype.onOfferAdded = function (__s30param0) {
    this.setVisibility();
  };
  StatusIconSpecialOffer.prototype.showLoaded = function (__s32param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s32param0);
    this.onTimerUpdate();
  };
  return StatusIconSpecialOffer;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconSpecialOffer = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
