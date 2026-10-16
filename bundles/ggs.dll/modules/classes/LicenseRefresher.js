Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __s0local0 = createjs.TimerEvent;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local1 = function () {
  function LicenseRefresher(__s3param0, __s3param1, __s3param2) {
    this._initialShowDelayTimeSeconds = __s3param0;
    this._licenseShowScheduleSeconds = __s3param1 * 60;
    this._licencseDisplayDurationSeconds = __s3param2;
    this.initializeTimers();
    this._intervalReachCount = 0;
    this.licenseAgeRatingShowed = new __dep_exact_becd07da092f4a09.Signal();
    this.licenseShowed = new __dep_exact_becd07da092f4a09.Signal();
    this.licenseHided = new __dep_exact_becd07da092f4a09.Signal();
  }
  LicenseRefresher.prototype.initializeTimers = function () {
    this.licenseShowSchedule = new __dep_export_CSSMouseCursor.Timer(this.secondsToMilliseconds(this._initialShowDelayTimeSeconds), 0);
    this.licenseDisplayDuration = new __dep_export_CSSMouseCursor.Timer(this.secondsToMilliseconds(this._licencseDisplayDurationSeconds), 1);
  };
  LicenseRefresher.prototype.secondsToMilliseconds = function (__s7param0) {
    return __s7param0 * 1000;
  };
  LicenseRefresher.prototype.startRefreshing = function () {
    this.startLicenseShowSchedule();
  };
  LicenseRefresher.prototype.stopRefreshing = function () {
    this.licenseDisplayDuration.stop();
    this.licenseShowSchedule.stop();
    this.licenseShowSchedule.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onLicenseShowScheduleIntervalReached));
    this.licenseDisplayDuration.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onLicenseDisplayDurationComplete));
  };
  LicenseRefresher.prototype.dispose = function () {
    this.stopRefreshing();
    this._intervalReachCount = 0;
    this.licenseAgeRatingShowed.removeAll();
    this.licenseShowed.removeAll();
    this.licenseHided.removeAll();
    this.licenseDisplayDuration = null;
    this.licenseShowSchedule = null;
    this.licenseAgeRatingShowed = null;
    this.licenseShowed = null;
    this.licenseHided = null;
  };
  LicenseRefresher.prototype.startLicenseShowSchedule = function () {
    if (!this.licenseShowSchedule.hasEventListener(__s0local0.TIMER)) {
      this.licenseShowSchedule.addEventListener(__s0local0.TIMER, this.bindFunction(this.onLicenseShowScheduleIntervalReached));
    }
    this.licenseShowSchedule.start();
  };
  LicenseRefresher.prototype.onLicenseShowScheduleIntervalReached = function (__s18param0 = null) {
    __dep_exact_9036b0ddd67c3c6e.debug("Interval reached after: " + this.licenseShowSchedule.delay / 1000 + " seconds / " + this.licenseShowSchedule.delay / 60000 + " minutes");
    if (!__s18param0) {
      this.licenseAgeRatingShowed.dispatch();
    }
    if (this._intervalReachCount == 0) {
      this.licenseShowSchedule.delay = this.secondsToMilliseconds(this._licenseShowScheduleSeconds - this._initialShowDelayTimeSeconds);
      this.licenseAgeRatingShowed.dispatch();
    } else if (this._intervalReachCount == 1) {
      this.licenseShowSchedule.delay = this.secondsToMilliseconds(this._licenseShowScheduleSeconds);
    }
    this.licenseShowed.dispatch();
    this.startLicenceHideTimer();
    this._intervalReachCount++;
  };
  LicenseRefresher.prototype.startLicenceHideTimer = function () {
    this.licenseDisplayDuration.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onLicenseDisplayDurationComplete));
    this.licenseDisplayDuration.start();
  };
  LicenseRefresher.prototype.onLicenseDisplayDurationComplete = function (__s25param0) {
    __dep_exact_9036b0ddd67c3c6e.debug("Hide license after: " + this.licenseDisplayDuration.delay / 1000 + " seconds / " + this.licenseDisplayDuration.delay / 60000 + " minutes");
    this.licenseDisplayDuration.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onLicenseDisplayDurationComplete));
    this.licenseHided.dispatch();
  };
  LicenseRefresher.NAME = "LicenseRefresher";
  return LicenseRefresher;
}();
exports.LicenseRefresher = __s0local1;
