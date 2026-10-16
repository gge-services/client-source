Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AutoRecruitmentHelper = require("gge-module:export_AutoRecruitmentHelper");
var __s0local0 = function (__s1param0) {
  function AutoRecruitmentPurchaseDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._listId = 0;
    __s3local0._currentLoopCount = 0;
    __s3local0._currentRecruitTime = 0;
    __s3local0._currentFoodConsumption = 0;
    __s3local0._currentKingdomId = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
    __s3local0._foodProductionAfterLoops = 0;
    __s3local0._costs = new __dep_export_AutoRecruitmentCosts.AutoRecruitmentCosts();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._listId = __dep_exact_f855840627e6e145.int(__s3param0.LID);
    __s3local0._recruitmentSnapshot = __dep_export_AutoRecruitmentHelper.AutoRecruitmentHelper.createAutoRecruitSnapshot(__s3local0.listId);
    __s3local0._currentLoopCount = __dep_exact_f855840627e6e145.int(__dep_export_AutoRecruitmentHelper.AutoRecruitmentHelper.getCurrentListLoopCount(__s3local0.listId));
    __s3local0._currentRecruitTime = __dep_exact_f855840627e6e145.int(__s3param0.CRT);
    __s3local0._currentFoodConsumption = __dep_exact_f855840627e6e145.int(__s3param0.CFC);
    __s3local0._currentKingdomId = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    __s3local0._foodProductionAfterLoops = __dep_exact_f855840627e6e145.int(__s3param0.FCAL);
    __s3local0.costs.fillByServerData(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentPurchaseDialogProperties, __s1param0);
  AutoRecruitmentPurchaseDialogProperties.prototype.getTotalRecruitTime = function (__s5param0, __s5param1) {
    var __s5local0 = 0;
    if (this.recruitmentSnapshot != null) {
      for (var __s5local1 = 0, __s5local2 = this.recruitmentSnapshot; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = __dep_exact_f855840627e6e145.int(__s5local3.ID);
          var __s5local5 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s5local4, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT), "BasicUnitVO");
          var __s5local6 = __dep_exact_f855840627e6e145.int(__s5local5.isAuxiliary ? __dep_exact_26a421b704832cff.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT_IN_FACTION_KINGDOM : __dep_exact_26a421b704832cff.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT);
          var __s5local7 = __dep_exact_f855840627e6e145.int(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, __s5local4).getValueforWodId(__s5local4) + __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST, __s5local4).getValueforWodId(__s5local4));
          var __s5local8 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.getBuildingProductionSpeed(__s5local5.unitBuildingType) + __s5local7);
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local5, "SoldierUnitVO")) {
            __s5local8 -= __s5param1;
          }
          var __s5local9 = __dep_exact_f855840627e6e145.int(__s5local3.IA);
          var __s5local10 = __dep_exact_f855840627e6e145.int(__s5local5.getBaseRecruitmentTime() * (__s5param0 && !__s5local5.isAvailableInPeaceMode ? __dep_exact_26a421b704832cff_1.UnitProductionConst.PEACE_MODE_SLOWDOWN : 1) * __s5local9);
          if ((__s5local10 = Math.ceil(__s5local10 / (__s5local8 / 100))) > __s5local6 * __s5local9 || __s5local5.isLowlevelBoosted) {
            __s5local0 += __s5local10;
          } else {
            __s5local0 += __s5local6 * __s5local9;
          }
        }
      }
    }
    return __s5local0;
  };
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "foodProductionAfterLoops", {
    get: function () {
      return this._foodProductionAfterLoops;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentFoodConsumption", {
    get: function () {
      return this._currentFoodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "recruitmentSnapshot", {
    get: function () {
      return this._recruitmentSnapshot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentRecruitTime", {
    get: function () {
      return this._currentRecruitTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentLoopCount", {
    get: function () {
      return this._currentLoopCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentKingdomId", {
    get: function () {
      return this._currentKingdomId;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentPurchaseDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.AutoRecruitmentPurchaseDialogProperties = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_AutoRecruitmentCosts = require("gge-module:export_AutoRecruitmentCosts");
