Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_646bd5ed4ef81e12 = require("gge-module:exact_646bd5ed4ef81e12");
var __dep_exact_461cbd60a0a86f1b = require("gge-module:exact_461cbd60a0a86f1b");
var __dep_class_LocalizedTimeFormatVO = require("gge-module:class_LocalizedTimeFormatVO");
var __dep_export_InlineDurationFormat = require("gge-module:export_InlineDurationFormat");
var __dep_export_DurationFormatUtils = require("gge-module:export_DurationFormatUtils");
var __s0local0 = function () {
  function DynamicDurationFormat(__s3param0) {
    this._processor = __s3param0;
    this._inlineDurationFormat = new __dep_export_InlineDurationFormat.InlineDurationFormat();
  }
  DynamicDurationFormat.prototype.apply = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0 = this;
    if (__s5param1 === undefined) {
      __s5param1 = 2;
    }
    if (__s5param2 === undefined) {
      __s5param2 = true;
    }
    if (__s5param3 === undefined) {
      __s5param3 = null;
    }
    var __s5local1 = (__s5param3 || DynamicDurationFormat.DEFAULT_TEMPLATES).data;
    var __s5local2 = new __dep_exact_646bd5ed4ef81e12.Time(isNaN(__s5param0) ? 0 : __s5param0, __dep_exact_461cbd60a0a86f1b.TimeType.SECONDS, __dep_exact_461cbd60a0a86f1b.TimeType.DAYS);
    var __s5local3 = __s5param1 === 0 || __s5param1 > __s5local1.length ? __s5local1.length - 1 : __s5param1 - 1;
    var __s5local4 = __dep_exact_461cbd60a0a86f1b.TimeType.values.indexOf(__dep_exact_461cbd60a0a86f1b.TimeType.DAYS) - __dep_exact_461cbd60a0a86f1b.TimeType.values.indexOf(__s5local2.major);
    var __s5local5 = __s5local2.toVector();
    var __s5local6 = __s5local1[__s5local3][__s5local4];
    var __s5local7 = this._processor.text(__s5local6);
    return __dep_export_DurationFormatUtils.DurationFormatUtils.replacePlaceholders(__s5local7, function (__s10param0, __s10param1) {
      var __s10local0 = __s5local0._inlineDurationFormat.parse(__s10param1);
      __s10local0.fill = __s10local0.fill || (__s5param2 ? "0" : null) || "";
      __s10local0.width = String(__s10local0.width || (__s5param2 ? 2 + (__s10local0.precision ? Number(__s10local0.precision) + 1 : 0) : 0));
      var __s10local1 = __dep_export_DurationFormatUtils.DurationFormatUtils.timeTypeNames.indexOf(__s10param0);
      return __s10local0.apply(__s5local0._processor.text, __s5local5, __s10local1);
    });
  };
  DynamicDurationFormat.DEFAULT_TEMPLATES = new __dep_class_LocalizedTimeFormatVO.LocalizedTimeFormatVO("generic_time_t1_d", "generic_time_t1_h", "generic_time_t1_m", "generic_time_t1_s", "generic_time_t2_d", "generic_time_t2_h", "generic_time_t2_m", "generic_time_t3_d", "generic_time_t3_h", "generic_time_t4_d");
  return DynamicDurationFormat;
}();
exports.DynamicDurationFormat = __s0local0;
