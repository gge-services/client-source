Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_TrackingVerificationErrorLOFactory = require("gge-module:class_TrackingVerificationErrorLOFactory");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("Tracking.TrackingVerifier");
var __s0local2 = function () {
  function TrackingVerifier() {
    var __s3local0 = this;
    this.TRACKING_LIST_SEPARATOR = ";";
    this.TRACKING_TIMER_REPEAT_COUNT = 1;
    this._listOfFiredEvents = [];
    this._isActive = false;
    this.onVerificationTimerComplete = function (__s5param0) {
      return __s3local0.verifyTracking();
    };
  }
  TrackingVerifier.prototype.keepEvent = function (__s7param0) {
    if (this.isActive) {
      this._listOfFiredEvents.push(__s7param0.toString());
    }
  };
  TrackingVerifier.prototype.startVerification = function (__s10param0, __s10param1, __s10param2 = 0) {
    if (this.isActive) {
      this._currentCase = __s10param0;
      this._currentTrackingPattern = __s10param1;
      if (__s10param2 > 0) {
        this._verificationTimer = new __dep_export_CSSMouseCursor.Timer(__s10param2, this.TRACKING_TIMER_REPEAT_COUNT);
        this._verificationTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.onVerificationTimerComplete);
        this._verificationTimer.start();
      } else {
        this.verifyTracking();
      }
    }
  };
  TrackingVerifier.prototype.verifyTracking = function () {
    var __s15local0 = [];
    for (; this._currentTrackingPattern.length != 0;) {
      var __s15local1 = this._currentTrackingPattern.pop();
      if (this.eventWasNotFired(__s15local1)) {
        __s15local0.push(__s15local1);
      }
    }
    if (__s15local0.length != 0) {
      __s0local1.error("Tracking verification error! Some tracking events were not fired: " + __s15local0.join(this.TRACKING_LIST_SEPARATOR) + ", please contact Core-team immediately.");
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_TrackingVerificationErrorLOFactory.TrackingVerificationErrorLOFactory(__dep_class_TrackingVerificationErrorLOFactory.TrackingVerificationErrorLOFactory.TRACKING_EVENTS_MISSING_ERROR, this._currentCase, __s15local0.join(this.TRACKING_LIST_SEPARATOR)));
    }
    this.dispose();
  };
  TrackingVerifier.prototype.eventWasNotFired = function (__s21param0) {
    return this._listOfFiredEvents.indexOf(__s21param0) == -1;
  };
  Object.defineProperty(TrackingVerifier.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (__s25param0) {
      this._isActive = __s25param0;
      __s0local1.debug("Tracking verification is active: " + this._isActive);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingVerifier.prototype, "listOfFiredEvents", {
    get: function () {
      return this._listOfFiredEvents.concat();
    },
    set: function (__s29param0) {
      if (__s29param0 && __s29param0.length) {
        var __s29local0 = __s29param0.length;
        var __s29local1 = undefined;
        for (__s29local1 = 0; __s29local1 < __s29local0; __s29local1++) {
          if (this._listOfFiredEvents.indexOf(__s29param0[__s29local1]) < 0) {
            this._listOfFiredEvents.push(__s29param0[__s29local1]);
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  TrackingVerifier.prototype.dispose = function () {
    if (this.isActive) {
      this.isActive = false;
      if (this._verificationTimer) {
        this._verificationTimer.stop();
        this._verificationTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.onVerificationTimerComplete);
        this._verificationTimer = null;
      }
      this._listOfFiredEvents = null;
      this._currentCase = null;
      this._currentTrackingPattern = null;
    }
  };
  return TrackingVerifier;
}();
exports.TrackingVerifier = __s0local2;
