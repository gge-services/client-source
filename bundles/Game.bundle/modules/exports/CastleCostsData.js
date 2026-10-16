Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleCostsData() {}
  CastleCostsData.prototype.getFinalCostsC1 = function (__s5param0) {
    if (__s5param0 <= 0 || isNaN(__s5param0)) {
      return 0;
    } else if (__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive) {
      return Math.ceil(__s5param0 * __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.factor_C1);
    } else {
      return __dep_exact_f855840627e6e145.int(__s5param0);
    }
  };
  CastleCostsData.prototype.getFinalCostsC2 = function (__s10param0, __s10param1 = false, __s10param2 = 0) {
    if (__s10param0 <= 0) {
      return 0;
    } else {
      return Math.ceil(__s10param0 * (1 - this.getMaxPriceC2Reduction(__s10param1, __s10param2)));
    }
  };
  CastleCostsData.prototype.getMaxPriceC2Reduction = function (__s14param0 = false, __s14param1 = 0) {
    var __s14local0 = __s14param1;
    if (__dep_export_CastleModel.CastleModel.globalOfferData.isAnyIngameDiscountActive()) {
      __s14local0 = Math.max(__s14local0, __dep_export_CastleModel.CastleModel.globalOfferData.highestActiveIngameDiscount * 0.01);
    }
    if (__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive) {
      __s14local0 = Math.max(__s14local0, 1 - __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.factor_C2);
    }
    if (__s14param0) {
      __s14local0 = Math.max(__s14local0, __dep_exact_26a421b704832cff.BoosterConst.DISCOUNT_FACTOR);
    }
    return __s14local0;
  };
  CastleCostsData.prototype.getFinalCostsStringC1 = function (__s19param0) {
    return String(this.getFinalCostsC1(__s19param0));
  };
  CastleCostsData.prototype.getFinalCostsStringC2 = function (__s21param0) {
    return String(this.getFinalCostsC2(__s21param0));
  };
  return CastleCostsData;
}();
exports.CastleCostsData = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
