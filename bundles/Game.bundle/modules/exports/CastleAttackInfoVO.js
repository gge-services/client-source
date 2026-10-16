Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleFightItemContainer = require("gge-module:export_CastleFightItemContainer");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_CastleSpyArmyInfoVO = require("gge-module:export_CastleSpyArmyInfoVO");
var __dep_export_StrongholdUnitInventory = require("gge-module:export_StrongholdUnitInventory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_CastleAttackArmyVO = require("gge-module:export_CastleAttackArmyVO");
var __dep_export_CastleFightScreenVO = require("gge-module:export_CastleFightScreenVO");
var __s0local0 = function (__s1param0) {
  function CastleAttackInfoVO() {
    var __s3local0 = this;
    __s3local0._morality = 0;
    __s3local0._autoSkipCooldownType = 0;
    __s3local0._advisorType = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAttackInfoVO, __s1param0);
  CastleAttackInfoVO.prototype.fillFromParamObject = function (__s5param0) {
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._strongholdUnitInventory = new __dep_export_StrongholdUnitInventory.StrongholdUnitInventory();
    this._army = new __dep_export_CastleAttackArmyVO.CastleAttackArmyVO();
    if (__s5param0.MB) {
      this._morality = __s5param0.MB;
    }
    switch (this.targetActionType) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
        var __s5local0 = __s5param0.gaa.AI;
        this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5local0);
        this._targetOwner = this._targetArea.ownerInfo;
        this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.gaa.AI);
        this._targetOwner = this._targetArea.ownerInfo;
        this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK:
        var __s5local1 = __s5param0.gaa.AI;
        var __s5local2 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.generateBossDungeonByXY(__s5local1[0], __s5local1[1], __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
        __s5local2.parseAreaInfo(__s5local1);
        this._targetArea = __s5local2;
        this._targetOwner = __s5local2.ownerInfo;
        this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.gaa.AI);
        this._targetOwner = this._targetArea.controllerWorldMapOwnerInfoVO;
        this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
        break;
      default:
        this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
        this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
    }
    if (this._targetArea) {
      this._army.init(this.targetOwnerLevel, this.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER || this.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK, this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_TOWER || this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_FACTION_CAPITAL, this._targetArea);
    }
    this._sourceArea = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s5param0.SCID, __s5param0.KID);
    this._sourceOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    this._kingstowerBonus = __s5param0.KTB ? __s5param0.KTB : 0;
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      this._monumentBonus = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.landmarksList.getMonumentBonus();
    } else {
      this._monumentBonus = __dep_export_CastleModel.CastleModel.userData.monumentList.getLandmarkBonus();
    }
    var __s5local3 = __s5param0.abe || __s5param0.B;
    this._spyInfo = new __dep_export_CastleSpyArmyInfoVO.CastleSpyArmyInfoVO();
    this._spyInfo.parseArmyInfo(__s5param0.S, __s5param0.AS, __s5local3, __s5param0.LS);
    __dep_export_CastleModel.CastleModel.lordData.parse_GLI(__s5param0.gli);
    this._homeWorkshopLevel = __s5param0.HAWL;
    this._supportItemContainer = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff_4.CombatConst.ITEMS_ASUPPORT_TOOLS, __dep_exact_26a421b704832cff_4.CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP, this.homeWorkshopLevel);
    this._yardWaveItemContainer = new __dep_export_CastleFightItemContainer.CastleFightItemContainer([0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], 0, 10000);
    __s1param0.prototype.fillFromParamObject.call(this, __s5param0);
  };
  CastleAttackInfoVO.prototype.addAdditionalWave = function () {
    this._army.addAdditionalWave(this.targetOwnerLevel, this.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER || this.targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK, this._targetArea);
  };
  CastleAttackInfoVO.prototype.deductLastWave = function () {
    this.unitInventory.addAll(this._army.getUnitVectorFromCompleteWave(this.army.getWaveCount() - 1));
    this._army.deductLastWave();
  };
  CastleAttackInfoVO.prototype.getLowestTravelSpeed = function (__s16param0 = false, __s16param1 = null) {
    var __s16local0 = __dep_exact_f855840627e6e145.int(this._army.getLowestTravelSpeed(__s16param0, __s16param1));
    return __s16local0 = __dep_exact_f855840627e6e145.int(Math.min(__s16local0, this._yardWaveItemContainer.getLowestTravelSpeed(__s16param0, __s16param1)));
  };
  CastleAttackInfoVO.prototype.getTravelTime = function (__s18param0, __s18param1) {
    return __dep_exact_f855840627e6e145.int(this.calculateTravelTime(__s18param0.controllerWorldMapOwnerInfoVO, 0, __s18param1));
  };
  CastleAttackInfoVO.prototype.calculateTravelTime = function (__s20param0, __s20param1, __s20param2, __s20param3 = false, __s20param4 = false) {
    if (this.getSumOfItems() == 0) {
      return 0;
    }
    var __s20local0 = 1;
    var __s20local1 = 0;
    if (__dep_export_CastleModel.CastleModel.userData.userLevel <= __dep_exact_26a421b704832cff_3.TutorialConst.TUTORIAL_END_LEVEL && __s20param0.playerID < 0) {
      __s20local0 = __dep_exact_26a421b704832cff.TravelConst.TRAVEL_BOOST_TUTORIAL;
    }
    if (__s20param4) {
      __s20local1 = __dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO.returnSpeedForCurrentLevel / 100;
    }
    var __s20local2 = this.getActionTravelTimeBonusForAreaType(__s20param2, __s20param0);
    if (__dep_exact_26a421b704832cff_2.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this._targetArea.mapID) < 0) {
      __s20local2 += __dep_export_CastleModel.CastleModel.vipData.currentActiveVIPLevel.attackSpeedBonus;
    }
    var __s20local3 = __s20local0 + __s20local1;
    if (__s20param0.isLegend) {
      __s20local3 += __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.TRAVEL_ATTACK_BOOST) / 100;
    }
    var __s20local4 = this.isTempServerRankSwapAttack ? 0 : __dep_exact_26a421b704832cff.TravelConst.calculateLowLevelBoost(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer);
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TravelConst.getTravelTimeWithHorse(this.getLowestTravelSpeed(__s20param3, __s20param2), this.getCorrectedAttackDistance(), __s20local3 + __s20local4, __s20param1, __s20local2, this.getCorrectedAttackDistance(), false));
  };
  CastleAttackInfoVO.prototype.getBoostedTravelTime = function (__s27param0, __s27param1, __s27param2) {
    return __dep_exact_f855840627e6e145.int(this.calculateTravelTime(__s27param0.controllerWorldMapOwnerInfoVO, __s27param1, __s27param2, false));
  };
  CastleAttackInfoVO.prototype.getCorrectedAttackDistance = function () {
    if (this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL) {
      return Math.min(Math.max(this.distance, __dep_exact_26a421b704832cff.TravelConst.CAPITAL_CONQUER_MIN_ATTACK_DISTANCE), __dep_exact_26a421b704832cff.TravelConst.CAPITAL_CONQUER_MAX_ATTACK_DISTANCE);
    } else if (this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL) {
      return Math.min(Math.max(this.distance, __dep_exact_26a421b704832cff.TravelConst.METROPOL_CONQUER_MIN_ATTACK_DISTANCE), __dep_exact_26a421b704832cff.TravelConst.METROPOL_CONQUER_MAX_ATTACK_DISTANCE);
    } else if (this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ARE_PORTAL) {
      return __dep_exact_26a421b704832cff.TravelConst.ALLIANCE_RAID_PORTAL_TRAVEL_DISTANCE;
    } else {
      return this.distance;
    }
  };
  CastleAttackInfoVO.prototype.getTravelCost = function (__s35param0) {
    return Math.ceil(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff.TravelConst.getAttackTravelCostC1(this.distance, this.getSumOfItems(), __s35param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTravelCostBonusForAreaType(__s35param0, this.targetArea.areaType, this.targetActionType) : 0, __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION), __dep_export_CastleModel.CastleModel.userData.attackCounter.attackCount, __dep_export_CastleModel.CastleModel.userData.attackCounter.attackCountThreshold, __dep_export_CastleModel.CastleModel.userData.attackCounter.attackCountGrowthRate)));
  };
  Object.defineProperty(CastleAttackInfoVO.prototype, "isAlienAttack", {
    get: function () {
      return __dep_exact_81dacdf05bd32292.instanceOfClass(this._targetArea, "AAlienInvasionMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackInfoVO.prototype.isAttackComplete = function () {
    return this._army.isAnyWaveComplete();
  };
  CastleAttackInfoVO.prototype.getSumOfItems = function () {
    return this._army.getSumOfItems() + (this._supportItemContainer ? this._supportItemContainer.sumOfItems : 0) + (this._yardWaveItemContainer ? this._yardWaveItemContainer.sumOfItems : 0);
  };
  CastleAttackInfoVO.prototype.getSumOfTools = function () {
    return this._army.getSumOfTools();
  };
  CastleAttackInfoVO.prototype.getSumOfUnits = function () {
    return this._army.getSumOfUnits();
  };
  CastleAttackInfoVO.prototype.getLevelGate = function () {
    return __dep_exact_f855840627e6e145.int(this._targetArea.gateLevel);
  };
  CastleAttackInfoVO.prototype.getLevelWall = function () {
    return __dep_exact_f855840627e6e145.int(this._targetArea.wallLevel);
  };
  CastleAttackInfoVO.prototype.getLevelMoat = function () {
    return __dep_exact_f855840627e6e145.int(this._targetArea.moatLevel);
  };
  CastleAttackInfoVO.prototype.getLevelWallGate = function () {
    return __dep_exact_f855840627e6e145.int(this._targetArea.wallLevel + this._targetArea.gateLevel);
  };
  Object.defineProperty(CastleAttackInfoVO.prototype, "army", {
    get: function () {
      return this._army;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "hasUnlockedTools", {
    get: function () {
      return true;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightScreenVO.CastleFightScreenVO.prototype, "hasUnlockedTools").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    set: function (__s63param0) {
      this._morality = __s63param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "homeWorkshopLevel", {
    get: function () {
      return this._homeWorkshopLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "yardWaveContainer", {
    get: function () {
      return this._yardWaveItemContainer;
    },
    set: function (__s69param0) {
      this._yardWaveItemContainer = __s69param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "supportItemContainer", {
    get: function () {
      return this._supportItemContainer;
    },
    set: function (__s73param0) {
      this._supportItemContainer = __s73param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "toolsSupportWodIds", {
    get: function () {
      var __s75local0 = [];
      if (this._supportItemContainer) {
        this._supportItemContainer.items.forEach(function (__s78param0) {
          if (__s78param0.unitVO) {
            __s75local0.push(__s78param0.unitVO.wodId);
          } else {
            __s75local0.push(-1);
          }
        });
      }
      return __s75local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return this._autoSkipCooldownType;
    },
    set: function (__s84param0) {
      this._autoSkipCooldownType = __s84param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "advisorAttacks", {
    get: function () {
      return this._advisorAttacks;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackInfoVO.prototype, "advisorAttacksBattlelog", {
    get: function () {
      return this._advisorAttacksBattlelog;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackInfoVO.prototype.setAdvisor = function (__s90param0, __s90param1 = 0, __s90param2 = false) {
    this._advisorAttacks = __s90param1;
    this._advisorAttacksBattlelog = __s90param2;
    this._advisorType = __s90param0;
  };
  Object.defineProperty(CastleAttackInfoVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackInfoVO;
}(__dep_export_CastleFightScreenVO.CastleFightScreenVO);
exports.CastleAttackInfoVO = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IFightScreenVO");
