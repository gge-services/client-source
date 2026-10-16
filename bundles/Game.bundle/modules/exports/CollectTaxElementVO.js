Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CollectTaxElementVO(__s3param0) {
    var __s3local0 = this;
    __s3local0.taxType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).taxType = __s3param0;
    __s3local0.active = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectTaxElementVO, __s1param0);
  Object.defineProperty(CollectTaxElementVO.prototype, "c1Costs", {
    get: function () {
      var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.premiumAccountType);
      var __s5local1 = __dep_export_CastleModel.CastleModel.vipData.currentActiveVIPLevel;
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.TaxConst.getCollectorC1Costs(this.taxType, __s5local0, __dep_export_CastleModel.CastleModel.taxData.taxInfoVO.population, this.hasTaxResearch, __s5local1.taxCollector12HoursNoRubies, __s5local1.taxCollector24HoursNoRubies));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "c2Costs", {
    get: function () {
      var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.premiumAccountType);
      var __s7local1 = __dep_export_CastleModel.CastleModel.vipData.currentActiveVIPLevel;
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.TaxConst.getCollectorC2Costs(this.taxType, __s7local0, this.hasTaxResearch, __s7local1.taxCollector12HoursNoRubies, __s7local1.taxCollector24HoursNoRubies));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "hasTaxResearch", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_NO_RUBIES).strength >= 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "hasC2CostWithoutPremium", {
    get: function () {
      var __s11local0 = __dep_export_CastleModel.CastleModel.vipData.currentActiveVIPLevel;
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff.TaxConst.getCollectorC2Costs(this.taxType, -1, this.hasTaxResearch, __s11local0.taxCollector12HoursNoRubies, __s11local0.taxCollector24HoursNoRubies)) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "duration", {
    get: function () {
      return __dep_exact_26a421b704832cff.TaxConst.COLLECTOR_DURATION[this.taxType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "reward", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.taxData.taxInfoVO.getEstimatedIncomeById(this.taxType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "durationString", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinutesTimeString(__dep_exact_26a421b704832cff.TaxConst.COLLECTOR_DURATION[this.taxType]);
    },
    enumerable: true,
    configurable: true
  });
  return CollectTaxElementVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CollectTaxElementVO = __s0local0;
