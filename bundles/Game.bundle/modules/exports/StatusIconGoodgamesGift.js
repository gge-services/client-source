Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SRequestGoodgamesGift = require("gge-module:export_C2SRequestGoodgamesGift");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconGoodgamesGift() {
    var __s3local0 = __s1param0.call(this, "GGSGiftIcon", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_LOWER) || this;
    __s3local0.setTooltip("dialog_unpackedGift__tooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconGoodgamesGift, __s1param0);
  StatusIconGoodgamesGift.prototype.setVisibilityLoaded = function () {
    this._eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GGS_GIFT);
    if (this.isVisible()) {
      if (this._innerIconClip && this._innerIconClip.isLoaded) {
        this.customizeInnerIconClip(this._innerIconClip);
      }
      this.setCountdownText();
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconGoodgamesGift.prototype.getSkinFrame = function () {
    return 1 + this._eventVO.skinID * 2;
  };
  StatusIconGoodgamesGift.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SRequestGoodgamesGift.C2SRequestGoodgamesGift());
    }
  };
  StatusIconGoodgamesGift.prototype.onChangeEvent = function (__s15param0) {
    this.setVisibility();
  };
  StatusIconGoodgamesGift.prototype.onTimer = function (__s17param0) {
    this.setVisibility();
  };
  StatusIconGoodgamesGift.prototype.onRemoveEvent = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconGoodgamesGift.prototype.setCountdownText = function () {
    this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_exact_f855840627e6e145.int(this._eventVO.remainingEventTimeInSeconds));
  };
  StatusIconGoodgamesGift.prototype.isVisible = function () {
    return !!this._eventVO && this._eventVO.isCollectable() && this.isOutOfTutorial() && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventVO.eventId);
  };
  StatusIconGoodgamesGift.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconGoodgamesGift.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconGoodgamesGift.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  StatusIconGoodgamesGift.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  StatusIconGoodgamesGift.prototype.customizeInnerIconClip = function (__s33param0) {
    __s1param0.prototype.customizeInnerIconClip.call(this, __s33param0);
    if (__s33param0 && __s33param0.isLoaded && this.isVisible()) {
      __s33param0.currentshownDisplayObject.mc_bg.gotoAndStop(this.getSkinFrame() + 1);
    }
  };
  return StatusIconGoodgamesGift;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconGoodgamesGift = __s0local0;
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
