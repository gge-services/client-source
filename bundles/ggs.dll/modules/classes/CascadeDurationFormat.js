Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Localize = require("gge-module:class_Localize");
var __dep_exact_646bd5ed4ef81e12 = require("gge-module:exact_646bd5ed4ef81e12");
var __dep_exact_461cbd60a0a86f1b = require("gge-module:exact_461cbd60a0a86f1b");
var __s0local0 = function () {
  function CascadeDurationFormat(__s3param0 = null, __s3param1 = null, __s3param2 = null, __s3param3 = null, __s3param4 = null, __s3param5 = null, __s3param6 = null, __s3param7 = null, __s3param8 = null) {
    this._templates = [__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8];
  }
  CascadeDurationFormat.prototype.apply = function (__s5param0, __s5param1 = null) {
    if (!__s5param1) {
      var __s5local0 = this._templates.length;
      for (__s5param1 = __dep_exact_461cbd60a0a86f1b.TimeType.MILLISECONDS; __s5local0--;) {
        if (this._templates[__s5local0]) {
          __s5param1 = __dep_exact_461cbd60a0a86f1b.TimeType.values[__s5local0];
          break;
        }
      }
    }
    for (var __s5local1, __s5local2 = new __dep_exact_646bd5ed4ef81e12.Time(__s5param0, __dep_exact_461cbd60a0a86f1b.TimeType.SECONDS, __s5param1), __s5local3 = Math.min(__dep_exact_461cbd60a0a86f1b.TimeType.values.indexOf(__s5local2.major) + 1, this._templates.length); __s5local3-- != 0 && !(__s5local1 = this._templates[__s5local3]););
    if (__s5local1) {
      return __dep_class_Localize.Localize.timeCustom(__s5local1, __s5param0, __s5param1);
    } else {
      return "";
    }
  };
  return CascadeDurationFormat;
}();
exports.CascadeDurationFormat = __s0local0;
