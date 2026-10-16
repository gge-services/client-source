Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __s0local0 = function (__s1param0) {
  function CastlePaymentDialogBehavior() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaymentDialogBehavior, __s1param0);
  CastlePaymentDialogBehavior.prototype.checkRegisterBehavior = function (__s5param0, __s5param1, __s5param2) {
    if (__dep_export_CastleModel.CastleModel.settingsData.isDestroyingGame) {
      return false;
    }
    if (!__dep_export_CastleModel.CastleModel.settingsData.isLoginReady && __s1param0.prototype.checkRegisterBehavior.call(this, __s5param0, __s5param1, __s5param2)) {
      var __s5local0;
      var __s5local1;
      var __s5local2 = 0;
      var __s5local3 = false;
      __s5local0 = __dep_exact_f855840627e6e145.int(__s5param1.length);
      var __s5local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PAYMENT_SORT_ORDER.indexOf(__s5param0.type));
      var __s5local5 = 0;
      for (__s5local2 = 0; __s5local2 < __s5local0; __s5local2++) {
        __s5local1 = __s5param1[__s5local2];
        if ((__s5local5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleDialogConsts.CastleDialogConsts.PAYMENT_SORT_ORDER.indexOf(__s5local1.type))) > -1 && (__s5local3 = true, __s5local5 > __s5local4)) {
          __s5param1.splice(__s5local2, 1);
          return true;
        }
      }
      if (__s5local3) {
        return false;
      }
    }
    return true;
  };
  CastlePaymentDialogBehavior.prototype.checkDisplayBehavior = function (__s13param0, __s13param1, __s13param2, __s13param3, __s13param4) {
    return !!__s1param0.prototype.checkDisplayBehavior.call(this, __s13param0, __s13param1, __s13param2, __s13param3, __s13param4) && !__s13param4 && this.checkDisplayBehaviorPayment(__s13param0, __s13param1, __s13param2, __s13param3);
  };
  CastlePaymentDialogBehavior.prototype.checkDisplayBehaviorPayment = function (__s15param0, __s15param1, __s15param2, __s15param3) {
    return __dep_export_CastleModel.CastleModel.settingsData.isLoginReady;
  };
  return CastlePaymentDialogBehavior;
}(require("gge-module:export_CastleBasicDialogBehavior").CastleBasicDialogBehavior);
exports.CastlePaymentDialogBehavior = __s0local0;
