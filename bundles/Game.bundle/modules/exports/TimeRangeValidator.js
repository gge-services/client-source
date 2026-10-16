Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TimeRangeValidator(__s3param0, __s3param1) {
    this.minFutureOffset = 0;
    this.maxFutureOffset = 0;
    this.minFutureOffset = __s3param0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this.maxFutureOffset = __s3param1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  }
  TimeRangeValidator.prototype.validateTime = function (__s5param0, __s5param1 = false) {
    var __s5local0 = __s5param0.getTime();
    var __s5local1 = this.absoluteMinTime;
    var __s5local2 = this.absoluteMaxTime;
    if (__s5local0 < __s5local1) {
      if (this._currentTime.getTime() <= __s5local0) {
        __s5param0.setTime(__s5local1);
      } else {
        var __s5local3 = __s5local0 + __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
        if (!__s5param1 && __s5local3 <= __s5local2) {
          __s5param0.setTime(__s5local3);
        } else {
          __s5param0.setTime(__s5local1);
        }
      }
    } else if (__s5local0 > __s5local2) {
      __s5param0.setTime(__s5local2);
    }
  };
  TimeRangeValidator.prototype.isValid = function (__s13param0) {
    return __s13param0.getTime() >= this.absoluteMinTime && __s13param0.getTime() <= this.absoluteMaxTime;
  };
  Object.defineProperty(TimeRangeValidator.prototype, "absoluteMinTime", {
    get: function () {
      return this._currentTime.getTime() + this.minFutureOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeRangeValidator.prototype, "absoluteMaxTime", {
    get: function () {
      return this._currentTime.getTime() + this.maxFutureOffset;
    },
    enumerable: true,
    configurable: true
  });
  TimeRangeValidator.prototype.updateCurrentTime = function () {
    this._currentTime = new Date();
  };
  Object.defineProperty(TimeRangeValidator.prototype, "currentTime", {
    set: function (__s21param0) {
      this._currentTime.setTime(__s21param0);
    },
    enumerable: true,
    configurable: true
  });
  TimeRangeValidator.prototype.canIncreaseDate = function (__s23param0) {
    var __s23local0 = new Date(this.absoluteMaxTime);
    return __s23param0.getDate() < __s23local0.getDate() || __s23param0.getMonth() < __s23local0.getMonth() || __s23param0.getFullYear() < __s23local0.getFullYear();
  };
  TimeRangeValidator.prototype.canDecreaseDate = function (__s25param0) {
    var __s25local0 = new Date(this.absoluteMinTime);
    return __s25param0.getDate() > __s25local0.getDate() || __s25param0.getMonth() > __s25local0.getMonth() || __s25param0.getFullYear() > __s25local0.getFullYear();
  };
  TimeRangeValidator.prototype.canIncreaseHours = function (__s27param0) {
    return this.absoluteMaxTime - __s27param0.getTime() >= __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  TimeRangeValidator.prototype.canDecreaseHours = function (__s29param0) {
    return __s29param0.getTime() - this.absoluteMinTime > __dep_export_ClientConstTime.ClientConstTime.MINUTES_2_MILLISEC * 59;
  };
  TimeRangeValidator.prototype.canIncreaseMinutes = function (__s31param0) {
    return this.absoluteMaxTime - __s31param0.getTime() >= __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC * 60;
  };
  TimeRangeValidator.prototype.canDecreaseMinutes = function (__s33param0) {
    return __s33param0.getTime() - this.absoluteMinTime > 0;
  };
  return TimeRangeValidator;
}();
exports.TimeRangeValidator = __s0local0;
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
