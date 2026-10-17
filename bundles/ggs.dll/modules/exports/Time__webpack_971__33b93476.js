// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 971
// Export: Time; preserved source: modules/internal/exact_2bd5311171633c25.js
// Original canonical SHA-256: a0df09aa2c6d578f5d3def54f9f2708e3dcf8b24c3aeaa5d30060fdd97d4e965
var __s0local0 = function () {
  function Time(__s3param0, __s3param1 = null, __s3param2 = null) {
    __s3param1 = __s3param1 || __dep_exact_99454cd17118dc18.TimeType.MILLISECONDS;
    __s3param2 = __s3param2 || __dep_exact_99454cd17118dc18.TimeType.BIGGEST;
    this.update(__s3param0, __s3param1, __s3param2);
  }
  Object.defineProperty(Time.prototype, "major", {
    get: function () {
      return this._major;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "milliseconds", {
    get: function () {
      return this._milliseconds;
    },
    set: function (__s9param0) {
      this.update(__s9param0, __dep_exact_99454cd17118dc18.TimeType.MILLISECONDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "seconds", {
    get: function () {
      return this._seconds;
    },
    set: function (__s13param0) {
      this.update(__s13param0, __dep_exact_99454cd17118dc18.TimeType.SECONDS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "minutes", {
    get: function () {
      return this._minutes;
    },
    set: function (__s17param0) {
      this.update(__s17param0, __dep_exact_99454cd17118dc18.TimeType.MINUTES);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "hours", {
    get: function () {
      return this._hours;
    },
    set: function (__s21param0) {
      this.update(__s21param0, __dep_exact_99454cd17118dc18.TimeType.HOURS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "days", {
    get: function () {
      return this._days;
    },
    set: function (__s25param0) {
      this.update(__s25param0, __dep_exact_99454cd17118dc18.TimeType.DAYS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "weeks", {
    get: function () {
      return this._weeks;
    },
    set: function (__s29param0) {
      this.update(__s29param0, __dep_exact_99454cd17118dc18.TimeType.WEEKS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "months", {
    get: function () {
      return this._months;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "years", {
    get: function () {
      return this._years;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Time.prototype, "millenniums", {
    get: function () {
      return this._millenniums;
    },
    enumerable: true,
    configurable: true
  });
  Time.prototype.roundTo = function (__s37param0) {
    this.update(this._mls, __dep_exact_99454cd17118dc18.TimeType.MILLISECONDS, __s37param0);
  };
  Time.prototype.update = function (__s39param0, __s39param1, __s39param2) {
    var __s39local0;
    if (__s39param2 === undefined) {
      __s39param2 = null;
    }
    this._milliseconds = this._seconds = this._minutes = this._hours = this._days = this._weeks = 0;
    __s39param0 = __s39param0 < 0 ? 0 : __s39param0;
    __s39param2 = __s39param2 || __dep_exact_99454cd17118dc18.TimeType.BIGGEST;
    this._major = __s39param1;
    this._mls = this._milliseconds = __s39param0 * __s39param1.milliseconds;
    var __s39local1;
    var __s39local2 = __dep_exact_99454cd17118dc18.TimeType.values.length - 1;
    var __s39local3 = __dep_exact_99454cd17118dc18.TimeType.values.indexOf(__s39param1);
    for (__s39local1 = __s39local2; __s39local1 > __s39local3; __s39local1--) {
      __s39local0 = __dep_exact_99454cd17118dc18.TimeType.values[__s39local1];
      if (this._mls / __s39local0.milliseconds >= 1 && __s39local0.milliseconds <= __s39param2.milliseconds) {
        this._major = __s39local0;
        break;
      }
    }
    if (this._major != __dep_exact_99454cd17118dc18.TimeType.MILLISECONDS) {
      var __s39local4;
      var __s39local5;
      var __s39local6 = __dep_exact_99454cd17118dc18.TimeType.values.length;
      var __s39local7 = [this._milliseconds];
      for (__s39local1 = 1; __s39local1 < __s39local6 && (__s39local0 = __dep_exact_99454cd17118dc18.TimeType.values[__s39local1], __s39local4 = __s39local5 = __s39local7[__s39local1 - 1], __s39local5 %= __s39local0.rate, __s39local7[__s39local1] = (__s39local4 - __s39local5) / __s39local0.rate, __s39local7[__s39local1 - 1] = __s39local5, __s39local0 != this._major); __s39local1++);
      __s39local7.reverse();
      this._milliseconds = Number(__s39local7.pop());
      this._seconds = __s39local7.pop() || 0;
      this._minutes = __s39local7.pop() || 0;
      this._hours = __s39local7.pop() || 0;
      this._days = __s39local7.pop() || 0;
      this._weeks = __s39local7.pop() || 0;
      this._months = __s39local7.pop() || 0;
      this._years = __s39local7.pop() || 0;
      this._millenniums = __s39local7.pop() || 0;
    }
  };
  Time.prototype.toVector = function () {
    return [this._milliseconds, this._seconds, this._minutes, this._hours, this._days, this._weeks, this._months, this._years, this._millenniums];
  };
  return Time;
}();
exports.Time = __s0local0;
