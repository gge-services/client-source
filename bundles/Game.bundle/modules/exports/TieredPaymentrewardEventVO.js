Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_PaymentrewardEventVO = require("gge-module:export_PaymentrewardEventVO");
var __s0local0 = function (__s1param0) {
  function TieredPaymentrewardEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TieredPaymentrewardEventVO, __s1param0);
  Object.defineProperty(TieredPaymentrewardEventVO.prototype, "skinnedSpecialOfferDialogKey", {
    get: function () {
      return __dep_export_CastleTieredPrimeDayDialog.CastleTieredPrimeDayDialog;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_PaymentrewardEventVO.PaymentrewardEventVO.prototype, "skinnedSpecialOfferDialogKey").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return TieredPaymentrewardEventVO;
}(__dep_export_PaymentrewardEventVO.PaymentrewardEventVO);
exports.TieredPaymentrewardEventVO = __s0local0;
var __dep_export_CastleTieredPrimeDayDialog = require("gge-module:export_CastleTieredPrimeDayDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
