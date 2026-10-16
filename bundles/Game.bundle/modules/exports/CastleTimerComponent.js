Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleTimerComponentEvent = require("gge-module:export_CastleTimerComponentEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTimerComponent(__s3param0, __s3param1, __s3param2 = 0, __s3param3 = "") {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.remainingTimeStamp = NaN;
    __s3local0._timerID = "";
    __s3local0._isRunning = false;
    __s3local0._getTimeString = __s3param1;
    __s3local0.itxt_timer = __s3param0;
    __s3local0._timerID = __s3param3;
    if (__s3param2 > 0) {
      __s3local0.start(__s3param2);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimerComponent, __s1param0);
  CastleTimerComponent.prototype.start = function (__s6param0 = 0) {
    if (__s6param0 > 0) {
      this.remainingTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s6param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
    if (!this._isRunning) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
      this._isRunning = true;
    }
    this.updateTimer(null);
  };
  CastleTimerComponent.prototype.stop = function () {
    if (this._isRunning) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTimer));
      this._isRunning = false;
    }
  };
  CastleTimerComponent.prototype.updateTimer = function (__s13param0) {
    if (this.itxt_timer && this.itxt_timer.textContentVO) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.itxt_timer.textContentVO, "LocalizedTextVO")) {
        this.itxt_timer.textContentVO.textReplacements = [this._getTimeString(this.remainingTimeInSeconds)];
      } else {
        this.itxt_timer.textContentVO.stringValue = this._getTimeString(this.remainingTimeInSeconds);
      }
      if (this.isExpired()) {
        this.dispatchEvent(new __dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.timerID));
        this.stop();
      }
    } else {
      this.stop();
    }
  };
  CastleTimerComponent.prototype.isExpired = function () {
    return this.remainingTimeInSeconds <= 0;
  };
  Object.defineProperty(CastleTimerComponent.prototype, "remainingTimeInSeconds", {
    get: function () {
      return (this.remainingTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerComponent.prototype, "timerID", {
    get: function () {
      return this._timerID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTimerComponent;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleTimerComponent = __s0local0;
