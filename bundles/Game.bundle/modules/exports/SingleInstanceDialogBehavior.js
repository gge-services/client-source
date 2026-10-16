Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SingleInstanceDialogBehavior() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SingleInstanceDialogBehavior, __s1param0);
  SingleInstanceDialogBehavior.prototype.checkRegisterBehavior = function (__s5param0, __s5param1, __s5param2) {
    if (__s1param0.prototype.checkRegisterBehavior.call(this, __s5param0, __s5param1, __s5param2)) {
      if (__s5param1 != null) {
        for (var __s5local0 = 0, __s5local1 = __s5param1; __s5local0 < __s5local1.length; __s5local0++) {
          __s5local4 = __s5local1[__s5local0];
          if (__s5local4 !== undefined && __s5local4.type == __s5param0.type) {
            return false;
          }
        }
      }
      if (__s5param2 != null) {
        for (var __s5local2 = 0, __s5local3 = __s5param2; __s5local2 < __s5local3.length; __s5local2++) {
          var __s5local4;
          __s5local4 = __s5local3[__s5local2];
          if (__s5local4 !== undefined && __s5local4.type == __s5param0.type) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
  return SingleInstanceDialogBehavior;
}(require("gge-module:export_CastleBasicDialogBehavior").CastleBasicDialogBehavior);
exports.SingleInstanceDialogBehavior = __s0local0;
