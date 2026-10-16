Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_461cbd60a0a86f1b = require("gge-module:exact_461cbd60a0a86f1b");
var __s0local0 = function () {
  function DurationFormatUtils() {}
  DurationFormatUtils.placeholderReplacementsFrom = function (__s5param0) {
    for (var __s5local0, __s5local1 = {}, __s5local2 = /\{(.*?)\}/g; (__s5local0 = __s5local2.exec(__s5param0)) !== null;) {
      __s5local1[__s5local0[1]] = __s5local0[0];
    }
    return __s5local1;
  };
  Object.defineProperty(DurationFormatUtils, "placeholderRegex", {
    get: function () {
      return DurationFormatUtils.REGEXP_PLACEHOLDER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DurationFormatUtils, "timeTypeNames", {
    get: function () {
      return DurationFormatUtils.TIMETYPE_NAMES;
    },
    enumerable: true,
    configurable: true
  });
  DurationFormatUtils.forAllPlaceholders = function (__s13param0, __s13param1) {
    for (var __s13local0, __s13local1 = {}; __s13local0 = DurationFormatUtils.placeholderRegex.exec(__s13param0);) {
      var __s13local2 = __s13local0[1];
      var __s13local3 = __s13local0[2] || "";
      __s13local1[__s13local0[0]] = __s13param1(__s13local2, __s13local3, __s13local0, __s13param0);
    }
    return __s13local1;
  };
  DurationFormatUtils.replacePlaceholders = function (__s17param0, __s17param1) {
    var __s17local0 = DurationFormatUtils.forAllPlaceholders(__s17param0, __s17param1);
    var __s17local1 = __s17param0;
    for (var __s17local2 in __s17local0) {
      __s17local1 = __s17local1.replace(__s17local2, __s17local0[__s17local2]);
    }
    return __s17local1;
  };
  DurationFormatUtils.TIMETYPE_NAMES = __dep_exact_461cbd60a0a86f1b.TimeType.values.map(function (__s21param0) {
    return __s21param0.name;
  });
  DurationFormatUtils.REGEXP_PLACEHOLDER = /{(\w+)(?::(.*?))?}/g;
  return DurationFormatUtils;
}();
exports.DurationFormatUtils = __s0local0;
