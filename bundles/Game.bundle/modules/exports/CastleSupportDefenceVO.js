Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_instanceOf_ISupportCapacityVO = require("gge-module:export_instanceOf_ISupportCapacityVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_CastleFightScreenVO = require("gge-module:export_CastleFightScreenVO");
var __s0local0 = function (__s1param0) {
  function CastleSupportDefenceVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._unitsYard = 0;
    __s3local0._unitsYardLimit = 0;
    __s3local0._allianceUnitYard = 0;
    __s3local0._allianceUnitYardLimit = 0;
    __s3local0._unitsWall = 0;
    __s3local0._unitsWallLimit = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSupportDefenceVO, __s1param0);
  CastleSupportDefenceVO.prototype.fillFromParamObject = function (__s5param0) {
    this._sourceArea = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s5param0.SCID);
    this._sourceOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.gaa.AI);
    if (this._targetArea.ownerInfo) {
      this._targetOwner = this._targetArea.ownerInfo;
    } else {
      this._targetOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s5param0.gaa.OI[0]);
    }
    var __s5local0 = this._targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER ? __s5param0.abe : __s5param0.B;
    this._spyInfo = new __dep_export_CastleSpyArmyInfoVO.CastleSpyArmyInfoVO();
    this._spyInfo.parseArmyInfo(__s5param0.S, __s5param0.AS, __s5local0, __s5param0.LS);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
    this._strongholdUnitInventory = new __dep_export_StrongholdUnitInventory.StrongholdUnitInventory();
    this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
    this._supportUnits = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(CastleSupportDefenceVO.ITEM_TYPES, CastleSupportDefenceVO.ITEM_LEVELS, 99, this.getDefenderLimit());
    this._allianceUnitYardLimit = __s5param0.AUYL || 0;
    this._unitsYardLimit = __s5param0.UYL - this._allianceUnitYardLimit || 0;
    this._unitsWallLimit = __s5param0.UWL || 0;
    if (this.spyInfo.itemsKeep) {
      var __s5local1 = this.spyInfo.itemsKeep.getSoldierCount();
      this._unitsWall = this.spyInfo.totalWallSoldierCount;
      this._unitsYard = Math.min(__s5local1, this._unitsYardLimit);
      this._allianceUnitYard = Math.max(0, __s5local1 - this._unitsYardLimit);
    }
    __s1param0.prototype.fillFromParamObject.call(this, __s5param0);
  };
  CastleSupportDefenceVO.prototype.getDefenderLimit = function () {
    if (__dep_export_instanceOf_ISupportCapacityVO.instanceOf_ISupportCapacityVO(this._targetArea)) {
      return __dep_exact_f855840627e6e145.int(this._targetArea.supportCapacity - this.getUnitCountFromSupportMovements());
    } else {
      return __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    }
  };
  CastleSupportDefenceVO.prototype.getArmy = function () {
    var __s14local0 = [];
    for (var __s14local1 = 0, __s14local2 = this._supportUnits.getSlotList(); __s14local1 < __s14local2.length; __s14local1++) {
      var __s14local3 = __s14local2[__s14local1];
      if (__s14local3[0] != -1) {
        __s14local0.push([__s14local3[0], __s14local3[1]]);
      }
    }
    return __s14local0;
  };
  CastleSupportDefenceVO.prototype.getSumOfItems = function () {
    return this._supportUnits.sumOfItems;
  };
  CastleSupportDefenceVO.prototype.getSumOfTools = function () {
    return 0;
  };
  CastleSupportDefenceVO.prototype.getSumOfUnits = function () {
    return this._supportUnits.sumOfItems;
  };
  CastleSupportDefenceVO.prototype.getLowestTravelSpeed = function (__s25param0 = null) {
    return __dep_exact_f855840627e6e145.int(this._supportUnits.getLowestTravelSpeed(false, __s25param0));
  };
  Object.defineProperty(CastleSupportDefenceVO.prototype, "supportUnits", {
    get: function () {
      return this._supportUnits;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceVO.prototype.getTravelCost = function (__s29param0) {
    var __s29local0 = __s29param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTravelCostBonusForAreaType(__s29param0, this.targetArea.areaType, this.targetActionType) : 0;
    var __s29local1 = 0;
    if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
      __s29local1 = __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION);
    }
    var __s29local2 = __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.TravelConst.getTravelCostC1(this.distance, this.getSumOfItems(), __s29local0, __s29local1));
    return Math.ceil(__s29local2);
  };
  CastleSupportDefenceVO.prototype.getTravelTime = function (__s32param0, __s32param1) {
    if (__s32param0.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      return 0;
    } else {
      return __dep_exact_f855840627e6e145.int(this.getBoostedTravelTime(__s32param0, 0, __s32param1));
    }
  };
  CastleSupportDefenceVO.prototype.getBoostedTravelTime = function (__s36param0, __s36param1, __s36param2) {
    if (this.getSumOfItems() == 0) {
      return 0;
    }
    var __s36local0 = __s36param2 ? this.getActionTravelTimeBonusForAreaType(__s36param2, null) : 0;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TravelConst.getTravelTimeWithHorse(this.getLowestTravelSpeed(__s36param2), this.distance, 1, __s36param1, __s36local0, this.distance, false));
  };
  Object.defineProperty(CastleSupportDefenceVO.prototype, "travelTimeIsSubscriptionBoosted", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, this.targetArea.areaType, this.targetArea.spaceID) > 0 && this.targetOwner.allianceID >= 0 && this.targetOwner.allianceID == this.sourceOwner.allianceID;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightScreenVO.CastleFightScreenVO.prototype, "travelTimeIsSubscriptionBoosted").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceVO.prototype.getUnitCountFromSupportMovements = function () {
    var __s43local0 = 0;
    var __s43local1 = __dep_export_CastleModel.CastleModel.armyData.getMovementsToAreaPos(this.targetArea);
    if (__s43local1 != null) {
      for (var __s43local2 = 0, __s43local3 = __s43local1; __s43local2 < __s43local3.length; __s43local2++) {
        var __s43local4 = __s43local3[__s43local2];
        if (__s43local4 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s43local4, "SupportDefenceMapmovementVO")) {
          __s43local0 += __dep_exact_f855840627e6e145.int(__s43local4.armySize);
        }
      }
    }
    return __s43local0;
  };
  CastleSupportDefenceVO.prototype.getMyUnitCountFromSupportMovements = function () {
    var __s49local0 = 0;
    var __s49local1 = __dep_export_CastleModel.CastleModel.armyData.getMyMovementsToAreaPos(this.targetArea);
    if (__s49local1 != null) {
      for (var __s49local2 = 0, __s49local3 = __s49local1; __s49local2 < __s49local3.length; __s49local2++) {
        var __s49local4 = __s49local3[__s49local2];
        if (__s49local4 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s49local4, "SupportDefenceMapmovementVO")) {
          __s49local0 += __dep_exact_f855840627e6e145.int(__s49local4.armySize);
        }
      }
    }
    return __s49local0;
  };
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsYardLimit", {
    get: function () {
      return this._unitsYardLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "allianceUnitYardLimit", {
    get: function () {
      return this._allianceUnitYardLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsWallLimit", {
    get: function () {
      return this._unitsWallLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsYard", {
    get: function () {
      return this._unitsYard;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "allianceUnitYard", {
    get: function () {
      return this._allianceUnitYard;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSupportDefenceVO.prototype, "unitsWall", {
    get: function () {
      return this._unitsWall;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceVO.ITEM_TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CastleSupportDefenceVO.ITEM_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return CastleSupportDefenceVO;
}(__dep_export_CastleFightScreenVO.CastleFightScreenVO);
exports.CastleSupportDefenceVO = __s0local0;
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleFightItemContainer = require("gge-module:export_CastleFightItemContainer");
var __dep_export_CastleSpyArmyInfoVO = require("gge-module:export_CastleSpyArmyInfoVO");
var __dep_export_StrongholdUnitInventory = require("gge-module:export_StrongholdUnitInventory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightScreenVO");
