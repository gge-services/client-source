// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 80
// Export: TimeType; preserved source: modules/internal/exact_461cbd60a0a86f1b.js
// Original canonical SHA-256: eed67eb7192619bb9cd1f8de8a75c81ba0c3874cf65cc1737f1461a1afb2bcb2
var __s0local0 = function (__s1param0) {
  function TimeType(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3) || this;
    __s3local0._milliseconds = 0;
    __s3local0._rate = 0;
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
    return __dep_exact_0d9a542ca0706547.BasicEnum.getByProperty(TimeType, "name", __s7param0, null);
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
  TimeType.MILLISECONDS = new TimeType("milliseconds", null, 1, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.SECONDS = new TimeType("seconds", TimeType.MILLISECONDS, 1000, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.MINUTES = new TimeType("minutes", TimeType.SECONDS, 60, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.HOURS = new TimeType("hours", TimeType.MINUTES, 60, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.DAYS = new TimeType("days", TimeType.HOURS, 24, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.WEEKS = new TimeType("weeks", TimeType.DAYS, 7, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.MONTHS = new TimeType("months", TimeType.WEEKS, 4, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.YEARS = new TimeType("years", TimeType.MONTHS, 12, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.MILLENNIUMS = new TimeType("millenniums", TimeType.YEARS, 1000, __dep_exact_0d9a542ca0706547.BasicEnum.instantiationKey);
  TimeType.BIGGEST = TimeType.MILLENNIUMS;
  TimeType.SMALLEST = TimeType.MILLISECONDS;
  return TimeType;
}(__dep_exact_0d9a542ca0706547.BasicEnum);
exports.TimeType = __s0local0;
