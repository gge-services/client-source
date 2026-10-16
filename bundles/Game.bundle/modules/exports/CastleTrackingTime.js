Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function CastleTrackingTime() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.timerDict = new Map();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTrackingTime, __s1param0);
  CastleTrackingTime.prototype.addTrackingTimer = function (__s5param0) {
    this.timerDict.set(__s5param0, __dep_export_CachedTimer.CachedTimer.getCachedTimer());
  };
  CastleTrackingTime.prototype.retrieveTrackingTimeInSeconds = function (__s7param0) {
    return Math.ceil((__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this.timerDict.get(__s7param0)) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  return CastleTrackingTime;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleTrackingTime = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
