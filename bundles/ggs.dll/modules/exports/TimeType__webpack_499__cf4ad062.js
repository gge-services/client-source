// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 499
// Export: TimeType; preserved source: modules/internal/exact_99454cd17118dc18.js
// Original canonical SHA-256: cf8faa772821a1e315c4b4d348ba8169f2f80c9761c12def001e84dfb5e4a96a
var __s0local0 = function (__s1param0) {
  function TimeType(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3) || this;
    __s3local0._milliseconds = __s3param2 * (__s3param1 ? __s3param1.milliseconds : 1);
    __s3local0._previous = __s3param1;
    __s3local0._rate = __s3param2;
    TimeType._values.push(__s3local0);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TimeType, __s1param0);
  Object.defineProperty(TimeType, "values", {
    get: function () {
      return TimeType._values.concat();
    },
    enumerable: true,
    configurable: true
  });
  TimeType.getByName = function (__s7param0) {
    return __dep_export_instantiationKey.BasicEnum.getByProperty(TimeType, "name", __s7param0, null);
  };
  Object.defineProperty(TimeType.prototype, "milliseconds", {
    get: function () {
      return this._milliseconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeType.prototype, "previous", {
    get: function () {
      return this._previous;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeType.prototype, "rate", {
    get: function () {
      return this._rate;
    },
    enumerable: true,
    configurable: true
  });
  TimeType._values = [];
  TimeType.MILLISECONDS = new TimeType("milliseconds", null, 1, TimeType.instantiationKey);
  TimeType.SECONDS = new TimeType("seconds", TimeType.MILLISECONDS, 1000, TimeType.instantiationKey);
  TimeType.MINUTES = new TimeType("minutes", TimeType.SECONDS, 60, TimeType.instantiationKey);
  TimeType.HOURS = new TimeType("hours", TimeType.MINUTES, 60, TimeType.instantiationKey);
  TimeType.DAYS = new TimeType("days", TimeType.HOURS, 24, TimeType.instantiationKey);
  TimeType.WEEKS = new TimeType("weeks", TimeType.DAYS, 7, TimeType.instantiationKey);
  TimeType.MONTHS = new TimeType("months", TimeType.WEEKS, 4, TimeType.instantiationKey);
  TimeType.YEARS = new TimeType("years", TimeType.MONTHS, 12, TimeType.instantiationKey);
  TimeType.MILLENNIUMS = new TimeType("millenniums", TimeType.YEARS, 1000, TimeType.instantiationKey);
  TimeType.BIGGEST = TimeType.MILLENNIUMS;
  TimeType.SMALLEST = TimeType.MILLISECONDS;
  return TimeType;
}(__dep_export_instantiationKey.BasicEnum);
exports.TimeType = __s0local0;
