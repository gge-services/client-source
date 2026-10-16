Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __s0local0 = function (__s1param0) {
  function CastlePreloaderDialogBehavior() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePreloaderDialogBehavior, __s1param0);
  CastlePreloaderDialogBehavior.prototype.checkRegisterBehavior = function (__s5param0, __s5param1, __s5param2) {
    if (__s1param0.prototype.checkRegisterBehavior.call(this, __s5param0, __s5param1, __s5param2)) {
      for (var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param1.length), __s5local1 = 0; __s5local1 < __s5local0; __s5local1++) {
        if (__s5param1[__s5local1].type == __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER) {
          return false;
        }
      }
      __s5local0 = __dep_exact_f855840627e6e145.int(__s5param2.length);
      for (var __s5local2 = 0; __s5local2 < __s5local0; __s5local2++) {
        if (__s5param2[__s5local2].type == __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER) {
          return false;
        }
      }
      return true;
    }
    return false;
  };
  CastlePreloaderDialogBehavior.prototype.checkDisplayBehavior = function (__s14param0, __s14param1, __s14param2, __s14param3, __s14param4) {
    return !!__s1param0.prototype.checkDisplayBehavior.call(this, __s14param0, __s14param1, __s14param2, __s14param3, __s14param4) && this.checkDisplayBehaviorPreloader(__s14param0, __s14param1, __s14param2, __s14param3);
  };
  CastlePreloaderDialogBehavior.prototype.checkDisplayBehaviorPreloader = function (__s16param0, __s16param1, __s16param2, __s16param3) {
    for (var __s16local0 = __dep_exact_f855840627e6e145.int(__s16param2.length), __s16local1 = 0; __s16local1 < __s16local0; __s16local1++) {
      if (__s16param2[__s16local1].type == __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER) {
        return false;
      }
    }
    return true;
  };
  CastlePreloaderDialogBehavior.prototype.checkRemoveRegisteredWhenHideBehavior = function () {
    return true;
  };
  CastlePreloaderDialogBehavior.prototype.canModifyBlockDialogs = function () {
    return false;
  };
  return CastlePreloaderDialogBehavior;
}(require("gge-module:export_CastleBasicDialogBehavior").CastleBasicDialogBehavior);
exports.CastlePreloaderDialogBehavior = __s0local0;
