Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TaxInfoVO() {
    this._currentTaxType = 0;
    this._taxCollectEndTime = NaN;
    this._expectedIncome = 0;
    this._population = 0;
    this._isBoostedCollection = false;
    this._rewardBoosterLevel = 0;
    this._vipBonus = 0;
  }
  TaxInfoVO.prototype.fillFromParamObject = function (__s5param0) {
    if (__s5param0) {
      this._currentTaxType = __dep_exact_f855840627e6e145.int(__s5param0.TT);
      var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param0.RT);
      this._taxCollectEndTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._expectedIncome = __dep_exact_f855840627e6e145.int(__s5param0.EM);
      this._population = __dep_exact_f855840627e6e145.int(__s5param0.PO);
      this._isBoostedCollection = Boolean(parseInt(__s5param0.IB));
      this._vipBonus = __dep_exact_f855840627e6e145.int(parseFloat(__s5param0.VB));
    }
  };
  Object.defineProperty(TaxInfoVO.prototype, "taxState", {
    get: function () {
      if (this._currentTaxType > -1) {
        if (this.remainingCollectionTimeInSeconds >= 0) {
          return TaxInfoVO.TAXSTATUS_COLLECTING;
        } else {
          return TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT;
        }
      } else {
        return TaxInfoVO.TAXSTATUS_NONE;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "remainingCollectionTimeInSeconds", {
    get: function () {
      return (this._taxCollectEndTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "timeInPercent", {
    get: function () {
      switch (this.taxState) {
        case TaxInfoVO.TAXSTATUS_NONE:
          return 0;
        case TaxInfoVO.TAXSTATUS_COLLECTING:
          return (this.currentTaxDuration - this.remainingCollectionTimeInSeconds) / this.currentTaxDuration;
        case TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
          return 1;
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "currentTaxDuration", {
    get: function () {
      return __dep_exact_26a421b704832cff.TaxConst.COLLECTOR_DURATION[this._currentTaxType];
    },
    enumerable: true,
    configurable: true
  });
  TaxInfoVO.prototype.getEstimatedIncomeById = function (__s21param0) {
    var __s21local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TaxConst.getCollectorIncome(__s21param0, this._population));
    var __s21local1 = __dep_export_CastleModel.CastleModel.boostData.taxBribeVO.isActive;
    var __s21local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.currentActiveVIPLevel.taxBonus);
    var __s21local3 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST).strength / 100;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TaxConst.applyCollectionBoosts(__s21local0, __s21local1, __s21local3, __s21local2));
  };
  Object.defineProperty(TaxInfoVO.prototype, "currentIncome", {
    get: function () {
      var __s23local0 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST).strength / 100;
      return __dep_exact_26a421b704832cff.TaxConst.getCollectedMoney(this._currentTaxType, this.remainingCollectionTimeInSeconds, this._expectedIncome, this._isBoostedCollection, __s23local0, this._vipBonus);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "expectedIncome", {
    get: function () {
      var __s25local0 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST).strength / 100;
      return __dep_exact_26a421b704832cff.TaxConst.applyCollectionBoosts(this._expectedIncome, this._isBoostedCollection, __s25local0, this._vipBonus);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "isBoostedCollection", {
    get: function () {
      return this._isBoostedCollection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "population", {
    get: function () {
      return this._population;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "isCollecting", {
    get: function () {
      return this.taxState == TaxInfoVO.TAXSTATUS_COLLECTING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "isTaxReadyForCollection", {
    get: function () {
      return this.taxState == TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "currentTaxType", {
    get: function () {
      return this._currentTaxType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "rewardBoosterLevel", {
    get: function () {
      return this._rewardBoosterLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "taxAmountString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.currentIncome, this.expectedIncome]);
    },
    enumerable: true,
    configurable: true
  });
  TaxInfoVO.__initialize_static_members = function () {
    TaxInfoVO.TAXSTATUS_NONE = 0;
    TaxInfoVO.TAXSTATUS_COLLECTING = 1;
    TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT = 2;
  };
  return TaxInfoVO;
}();
exports.TaxInfoVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
__s0local0.__initialize_static_members();
