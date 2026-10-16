Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function CastleTimerData() {
    var __s3local0 = this;
    __s3local0._dailyResetTimestamp = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimerData, __s1param0);
  CastleTimerData.prototype.executeUpdate = function (__s5param0) {
    if (this._timeEvent) {
      this._timeEvent.nowValue = __s5param0;
    } else {
      this._timeEvent = new __dep_export_CastleTimerEvent.CastleTimerEvent(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, __s5param0);
    }
    this.dispatchEvent(this._timeEvent);
  };
  CastleTimerData.prototype.parse_DRT = function (__s9param0) {
    if (__s9param0) {
      this._dailyResetTimestamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0.STR * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    }
  };
  Object.defineProperty(CastleTimerData.prototype, "timeTillDailyResetInSec", {
    get: function () {
      return Math.max((this._dailyResetTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTimerData.prototype.reset = function () {
    this._dailyResetTimestamp = 0;
  };
  return CastleTimerData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleTimerData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
