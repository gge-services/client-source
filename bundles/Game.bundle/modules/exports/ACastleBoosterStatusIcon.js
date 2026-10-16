Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BoosterDataEvent = require("gge-module:export_BoosterDataEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function ACastleBoosterStatusIcon(__s3param0, __s3param1 = null, __s3param2 = __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE), __s3param3 = true) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleBoosterStatusIcon, __s1param0);
  ACastleBoosterStatusIcon.prototype.onAddedToStage = function (__s5param0) {
    this.icon.parent.parent.updateCacheIfCached();
  };
  ACastleBoosterStatusIcon.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  ACastleBoosterStatusIcon.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  ACastleBoosterStatusIcon.prototype.setVisibilityLoaded = function () {
    if (this.checkVisbilityCondition() == 1) {
      this.iconDisp.addEventListener(createjs.Event.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
      this.show();
    } else {
      this.hide();
      this.controller.dispatchEvent(new __dep_export_BoosterDataEvent.BoosterDataEvent(__dep_export_BoosterDataEvent.BoosterDataEvent.BOOSTER_REMOVED));
      this.iconDisp.removeEventListener(createjs.Event.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    }
  };
  ACastleBoosterStatusIcon.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataUpdated));
  };
  ACastleBoosterStatusIcon.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataUpdated));
  };
  ACastleBoosterStatusIcon.prototype.onBoosterDataUpdated = function (__s19param0) {
    this.setVisibility();
  };
  ACastleBoosterStatusIcon.prototype.onTimerUpdate = function (__s21param0 = null) {
    var __s21local0 = 0;
    if (this.boosterVO) {
      __s21local0 = __dep_exact_f855840627e6e145.int(this.boosterVO.remainingTimeInSeconds);
    }
    this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s21local0);
    this.setVisibility();
    if (!this.icon.stage) {
      this.icon.parent.parent.updateCacheIfCached();
    }
  };
  Object.defineProperty(ACastleBoosterStatusIcon.prototype, "boosterVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBoosterStatusIcon.prototype.checkVisbilityCondition = function () {
    return false;
  };
  ACastleBoosterStatusIcon.prototype.disposeLoaded = function () {
    if (this.iconDisp) {
      this.iconDisp.removeEventListener(createjs.Event.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    }
    __s1param0.prototype.disposeLoaded.call(this);
  };
  return ACastleBoosterStatusIcon;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.ACastleBoosterStatusIcon = __s0local0;
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
