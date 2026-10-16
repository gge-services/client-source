Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_646bd5ed4ef81e12 = require("gge-module:exact_646bd5ed4ef81e12");
var __dep_exact_461cbd60a0a86f1b = require("gge-module:exact_461cbd60a0a86f1b");
var __dep_export_InlineDurationFormat = require("gge-module:export_InlineDurationFormat");
var __dep_export_DurationFormatUtils = require("gge-module:export_DurationFormatUtils");
var __s0local0 = function () {
  function SimpleDurationFormat(__s3param0) {
    this._processor = __s3param0;
    this._inlineDurationFormat = new __dep_export_InlineDurationFormat.InlineDurationFormat();
  }
  SimpleDurationFormat.bestRounding = function (__s5param0) {
    var __s5local0 = __dep_exact_461cbd60a0a86f1b.TimeType.MILLISECONDS;
    __dep_export_DurationFormatUtils.DurationFormatUtils.forAllPlaceholders(__s5param0, function (__s7param0) {
      var __s7local0 = __dep_exact_461cbd60a0a86f1b.TimeType.getByName(__s7param0);
      if (__s7local0 && __s7local0.milliseconds > __s5local0.milliseconds) {
        __s5local0 = __s7local0;
      }
    });
    return __s5local0;
  };
  SimpleDurationFormat.prototype.apply = function (__s10param0, __s10param1, __s10param2) {
    var __s10local0 = this;
    if (__s10param2 === undefined) {
      __s10param2 = null;
    }
    var __s10local1 = this._processor.text(__s10param0);
    __s10param2 = __s10param2 || SimpleDurationFormat.bestRounding(__s10local1);
    var __s10local2 = new __dep_exact_646bd5ed4ef81e12.Time(__s10param1, __dep_exact_461cbd60a0a86f1b.TimeType.SECONDS, __s10param2).toVector();
    var __s10local3 = this._processor.text.bind(this._processor);
    return __dep_export_DurationFormatUtils.DurationFormatUtils.replacePlaceholders(__s10local1, function (__s13param0, __s13param1) {
      var __s13local0 = __dep_export_DurationFormatUtils.DurationFormatUtils.timeTypeNames.indexOf(__s13param0);
      return __s10local0._inlineDurationFormat.parse(__s13param1).apply(__s10local3, __s10local2, __s13local0);
    });
  };
  return SimpleDurationFormat;
}();
exports.SimpleDurationFormat = __s0local0;
