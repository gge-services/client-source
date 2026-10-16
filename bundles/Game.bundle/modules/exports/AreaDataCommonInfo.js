Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function AreaDataCommonInfo() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._metropolBoost = 0;
    __s3local0._resourceDeltaFoodConsumption = 0;
    __s3local0._resourceDeltaMeadConsumption = 0;
    __s3local0._resourceDeltaBeefConsumption = 0;
    __s3local0._foodConsumptionReduction = 0;
    __s3local0._meadConsumptionReduction = 0;
    __s3local0._beefConsumptionReduction = 0;
    __s3local0._population = 0;
    __s3local0._populationPenalty = 0;
    __s3local0._maxPopulation = 0;
    __s3local0._buildSpeedBoost = 0;
    __s3local0._decoPoints = 0;
    __s3local0._sickness = 0;
    __s3local0._riot = 0;
    __s3local0._protection = 0;
    __s3local0._guardAmount = 0;
    __s3local0._builderDiscount = 0;
    __s3local0._isCastleBurning = false;
    __s3local0._maxUnitStorage = -1;
    __s3local0._maxAuxiliariesStorage = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AreaDataCommonInfo, __s1param0);
  AreaDataCommonInfo.prototype.parseGAB = function (__s5param0) {
    this._builderDiscount = __s5param0.B;
  };
  AreaDataCommonInfo.prototype.parseGPA = function (__s7param0) {
    this._resourceDeltaFoodConsumption = __s7param0[__dep_exact_26a421b704832cff.CommKeys.FOOD_CONSUMPTION_DELTA] / 10;
    this._resourceDeltaMeadConsumption = __s7param0.DMEADC / 10;
    this._resourceDeltaBeefConsumption = __s7param0.DBEEFC / 10;
    this._foodConsumptionReduction = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.FOOD_CONSUMPTION_REDUCTION]);
    this._meadConsumptionReduction = __dep_exact_f855840627e6e145.int(__s7param0.MEADCR);
    this._beefConsumptionReduction = __dep_exact_f855840627e6e145.int(__s7param0.BEEFCR);
    this._population = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.POPULATION]);
    this._decoPoints = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.NEUTRAL_DECO_POINTS]);
    this._sickness = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.SICKNESS]);
    this._riot = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.RIOT]);
    this._metropolBoost = __s7param0[__dep_exact_26a421b704832cff.CommKeys.RESOURCE_METROPOLIS_FOOD_PRODUCTION_BONUS] ? __s7param0[__dep_exact_26a421b704832cff.CommKeys.RESOURCE_METROPOLIS_FOOD_PRODUCTION_BONUS] : 0;
    this._buildSpeedBoost = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.BUILD_SPEED]);
    this._guardAmount = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.GUARD_COUNT_2]);
    this._maxUnitStorage = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.UNIT_SLOTS_2]);
    this._maxAuxiliariesStorage = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.AUXILIARY_CAPACITY]);
    this.updateInfos();
    __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED));
  };
  AreaDataCommonInfo.prototype.updateInfos = function () {
    this._maxPopulation = 0;
    this._protection = 0;
    this._populationPenalty = 0;
    this._isCastleBurning = false;
    this._buildingDistrictInfo = new Map();
    if (this.areaData.isoData) {
      for (var __s9local0 = 0, __s9local1 = this.areaData.isoData.objects.getCompleteObjectsList(); __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        var __s9local3 = __dep_exact_81dacdf05bd32292.castAs(__s9local2, "AEffectBuildingVO");
        if (__s9local3 && __s9local3.areValuesActive) {
          if (__dep_export_ClientConstUtils.ClientConstUtils.isObjectClassOf(__s9local3, [__dep_export_DwellingBuildingVO.DwellingBuildingVO, __dep_export_PdwellingBuildingVO.PdwellingBuildingVO])) {
            this._populationPenalty += __s9local3.rawDecoPoints;
          }
          if (__dep_export_ClientConstUtils.ClientConstUtils.isObjectClassOf(__s9local3, [__dep_export_ADefenceBuildingVO.ADefenceBuildingVO, __dep_export_KeepBuildingVO.KeepBuildingVO])) {
            this._protection += __s9local3.decoPoints;
          }
          this._maxPopulation += __s9local3.population;
        }
        var __s9local4 = __dep_exact_81dacdf05bd32292.castAs(__s9local2, "ABasicBuildingVO");
        var __s9local5 = __s9local4 && __s9local4.hitPoints < 100 && __s9local4.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED && __s9local4.level > 0;
        if (!this._isCastleBurning && __s9local4 && __s9local5) {
          this._isCastleBurning = true;
        }
        if (__s9local4 && __s9local4.isInBuildingDistrict || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s9local4, "ADistrictBuildingVO")) {
          if (!this._buildingDistrictInfo.get(__s9local4.districtTypeID)) {
            this._buildingDistrictInfo.set(__s9local4.districtTypeID, new __s0local1());
          }
          var __s9local6 = this._buildingDistrictInfo.get(__s9local4.districtTypeID);
          if (__s9local4.isInBuildingDistrict) {
            __s9local6.buildingsInDistrict++;
            __s9local6.districtMightPoints += __s9local4.mightValue;
            if (__s9local4 instanceof __dep_export_AEffectBuildingVO.AEffectBuildingVO) {
              __s9local6.districtDecoPoints += __s9local4.decoPoints;
            }
            if (__s9local5) {
              __s9local6.districtBurning = true;
            }
          } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s9local4, "ADistrictBuildingVO")) {
            __s9local6.districtSize = __dep_exact_f855840627e6e145.int(__s9local4.districtSlots);
            __s9local6.districtObjectId = __dep_exact_f855840627e6e145.int(__s9local4.objectId);
          }
        }
      }
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED));
    }
  };
  AreaDataCommonInfo.prototype.getDecoPointsWithBoni = function () {
    var __s24local0 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, this.areaData.areaInfo.areaType, this.areaData.spaceId).strength;
    var __s24local1 = this.getPublicOrderSubscriptionBonus();
    var __s24local2 = this.getPublicOrderBaronBonus();
    var __s24local3 = this.getCIBonusToDecoPoints();
    return __dep_exact_f855840627e6e145.int(this.decoPoints + __s24local0 + __s24local1 + __s24local2 + __s24local3);
  };
  AreaDataCommonInfo.prototype.getCIBonusToDecoPoints = function () {
    var __s26local0 = __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
    return __dep_exact_f855840627e6e145.int(__s26local0);
  };
  AreaDataCommonInfo.prototype.getLawAndOrderFactor = function () {
    if (this.areaData.isSeasonCamp) {
      return 1;
    }
    var __s28local0 = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getSummedEffectValueFromTitles(__dep_export_CastleModel.CastleModel.titleData.getAllAssignedUserTitles(), __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST);
    return __dep_exact_26a421b704832cff_1.LawAndOrderConst.calculateLawAndOrderFactorWithEffect(this.getDecoPointsWithBoni(), this.sickness, this.riot, __dep_exact_26a421b704832cff.EffectConst.boostToModifier(__s28local0));
  };
  AreaDataCommonInfo.prototype.getLawAndOrderValue = function () {
    var __s31local0 = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getSummedEffectValueFromTitles(__dep_export_CastleModel.CastleModel.titleData.getAllAssignedUserTitles(), __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST);
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.LawAndOrderConst.calculateLawAndOrderWithTitle(this.getDecoPointsWithBoni(), this.sickness, this.riot, __s31local0));
  };
  AreaDataCommonInfo.prototype.getDecoPoints = function () {
    return this._decoPoints - this._protection;
  };
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodIsEmptyTimeInSeconds", {
    get: function () {
      if (this.foodProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).amount / this.foodProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "honeyIsEmptyTimeInSeconds", {
    get: function () {
      if (this.honeyProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).amount / this.honeyProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadIsEmptyTimeInSeconds", {
    get: function () {
      if (this.meadProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).amount / this.meadProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefIsEmptyTimeInSeconds", {
    get: function () {
      if (this.beefProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.BEEF).amount / this.beefProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  AreaDataCommonInfo.prototype.getPublicOrderSubscriptionBonus = function () {
    return __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS);
  };
  AreaDataCommonInfo.prototype.getPublicOrderBaronBonus = function () {
    var __s53local0 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleMapObjectVO(this.areaData.areaInfo);
    if (__s53local0) {
      return __s53local0.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, this.areaData.areaInfo.areaType, this.areaData.spaceId);
    } else {
      return 0;
    }
  };
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).productionPerSec - this.foodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).productionPerSec - this.meadConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.BEEF).productionPerSec - this.beefConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "honeyProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY).productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodBaseProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).productionPerSec - this._metropolBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadBaseProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD).productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefBaseProduction", {
    get: function () {
      return this.areaData.storage.getItem(__dep_export_CollectableEnum.CollectableEnum.BEEF).productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodConsumption", {
    get: function () {
      return this._resourceDeltaFoodConsumption * this._foodConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadConsumption", {
    get: function () {
      return this._resourceDeltaMeadConsumption * this._meadConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefConsumption", {
    get: function () {
      return this._resourceDeltaBeefConsumption * this._beefConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "buildDurationBoostFactor", {
    get: function () {
      return 100 / this._buildSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "resourceDeltaFoodConsumption", {
    get: function () {
      return this._resourceDeltaFoodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodConsumptionReduction", {
    get: function () {
      return this._foodConsumptionReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadConsumptionReduction", {
    get: function () {
      return this._meadConsumptionReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefConsumptionReduction", {
    get: function () {
      return this._beefConsumptionReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "population", {
    get: function () {
      return this._population;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "populationPenalty", {
    get: function () {
      return this._populationPenalty;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "maxPopulation", {
    get: function () {
      return this._maxPopulation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "metropolBoost", {
    get: function () {
      return this._metropolBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "buildSpeedBoost", {
    get: function () {
      return this._buildSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "decoPoints", {
    get: function () {
      return this._decoPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "sickness", {
    get: function () {
      return this._sickness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "riot", {
    get: function () {
      return this._riot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "protection", {
    get: function () {
      return this._protection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "guardAmount", {
    get: function () {
      return this._guardAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "builderDiscount", {
    get: function () {
      return this._builderDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "isCastleBurning", {
    get: function () {
      return this._isCastleBurning;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "maxUnitStorage", {
    get: function () {
      return this._maxUnitStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "maxAuxiliariesStorage", {
    get: function () {
      return this._maxAuxiliariesStorage;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataCommonInfo.prototype.isDistrictEmpty = function (__s115param0) {
    if (!this._buildingDistrictInfo) {
      return true;
    }
    var __s115local0 = this._buildingDistrictInfo.get(__s115param0);
    return !!__s115local0 && __s115local0.buildingsInDistrict == 0;
  };
  AreaDataCommonInfo.prototype.isDistrictFull = function (__s118param0) {
    if (!this._buildingDistrictInfo) {
      return false;
    }
    var __s118local0 = this._buildingDistrictInfo.get(__s118param0);
    return !!__s118local0 && __s118local0.buildingsInDistrict >= __s118local0.districtSize;
  };
  AreaDataCommonInfo.prototype.hasDistrictOfType = function (__s121param0) {
    return !!this._buildingDistrictInfo && !!this._buildingDistrictInfo.get(__s121param0);
  };
  AreaDataCommonInfo.prototype.getDistrictObjectId = function (__s123param0) {
    if (!this._buildingDistrictInfo) {
      return 0;
    }
    var __s123local0 = this._buildingDistrictInfo.get(__s123param0);
    return __dep_exact_f855840627e6e145.int(__s123local0 ? __s123local0.districtObjectId : 0);
  };
  AreaDataCommonInfo.prototype.isDistrictBuring = function (__s126param0) {
    if (!this._buildingDistrictInfo) {
      return false;
    }
    var __s126local0 = this._buildingDistrictInfo.get(__s126param0);
    return !!__s126local0 && __s126local0.districtBurning;
  };
  AreaDataCommonInfo.prototype.getDistrictDecoPoints = function (__s129param0) {
    if (!this._buildingDistrictInfo) {
      return 0;
    }
    var __s129local0 = this._buildingDistrictInfo.get(__s129param0);
    if (__s129local0) {
      return __s129local0.districtDecoPoints;
    } else {
      return 0;
    }
  };
  AreaDataCommonInfo.prototype.getDistrictMightPoints = function (__s134param0) {
    if (!this._buildingDistrictInfo) {
      return 0;
    }
    var __s134local0 = this._buildingDistrictInfo.get(__s134param0);
    if (__s134local0) {
      return __s134local0.districtMightPoints;
    } else {
      return 0;
    }
  };
  return AreaDataCommonInfo;
}(require("gge-module:export_AAreaDataComponent").AAreaDataComponent);
exports.AreaDataCommonInfo = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent");
var __s0local1 = function () {
  return function BuildingDistrictInfoVO() {
    this.buildingsInDistrict = 0;
    this.districtSize = 0;
    this.districtObjectId = 0;
    this.districtBurning = false;
    this.districtMightPoints = 0;
    this.districtDecoPoints = 0;
  };
}();
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ADefenceBuildingVO = require("gge-module:export_ADefenceBuildingVO");
var __dep_export_DwellingBuildingVO = require("gge-module:export_DwellingBuildingVO");
var __dep_export_KeepBuildingVO = require("gge-module:export_KeepBuildingVO");
var __dep_export_PdwellingBuildingVO = require("gge-module:export_PdwellingBuildingVO");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IAreaDataComponent");
