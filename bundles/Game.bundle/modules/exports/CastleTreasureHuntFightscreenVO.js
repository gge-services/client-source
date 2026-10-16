Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleFightItemContainer = require("gge-module:export_CastleFightItemContainer");
var __dep_export_CastleAttackInfoVO = require("gge-module:export_CastleAttackInfoVO");
var __s0local0 = function (__s1param0) {
  function CastleTreasureHuntFightscreenVO() {
    var __s3local0 = this;
    __s3local0._eventID = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureHuntFightscreenVO, __s1param0);
  CastleTreasureHuntFightscreenVO.prototype.fillFromParamObject = function (__s5param0) {
    this._treasureMapVO = __dep_export_CastleModel.CastleModel.treasureMapData.getTreasureMapByID(__s5param0.MID);
    this._tmapNode = this._treasureMapVO.getNodeById(__s5param0.NID);
    this.initSeasonID();
    this._sourceOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    this._targetOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this._tmapNode.ownerID);
    if (this._treasureMapVO.hasCamp) {
      this._sourceArea = new __dep_export_EventCampMapobjectVO.EventCampMapobjectVO();
    } else {
      this._sourceArea = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
    }
    var __s5local0 = new __dep_export_TreasureDungeonMapObjectVO.TreasureDungeonMapObjectVO();
    __s5local0.parseAreaInfo([__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_TREASURE_DUNGEON, -1, -1, 0, __dep_exact_26a421b704832cff.DungeonConst.getVictories(this._tmapNode.dungeonlevel, 0), 0, 0]);
    __s5local0.tmapID = this._treasureMapVO.mapID;
    __s5local0.tMapNode = this._tmapNode;
    __s5local0.baseGateBonus = this._tmapNode.gateBonus;
    __s5local0.baseWallBonus = this._tmapNode.wallBonus;
    __s5local0.ownerInfo = this._targetOwner;
    __s5local0.mapID = this._tmapNode.mapID;
    this._targetArea = __s5local0;
    this._spyInfo = new __dep_export_CastleSpyArmyInfoVO.CastleSpyArmyInfoVO();
    this._spyInfo.parseArmyInfo(__s5param0.S, __s5param0.AS, __s5param0.B, __s5param0.LS);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._strongholdUnitInventory = new __dep_export_StrongholdUnitInventory.StrongholdUnitInventory();
    this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
    this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
    this._army = new __dep_export_CastleAttackArmyVO.CastleAttackArmyVO();
    this._army.init(this._tmapNode.dungeonlevel, false, false, this._targetArea);
    this._yardWaveItemContainer = new __dep_export_CastleFightItemContainer.CastleFightItemContainer([0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], 0, 10000);
    this._supportItemContainer = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(__dep_exact_26a421b704832cff.CombatConst.ITEMS_ASUPPORT_TOOLS, __dep_exact_26a421b704832cff.CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP, this.homeWorkshopLevel);
  };
  CastleTreasureHuntFightscreenVO.prototype.addAdditionalWave = function () {
    this._army.addAdditionalWave(this._tmapNode.dungeonlevel, false, this._targetArea);
  };
  CastleTreasureHuntFightscreenVO.prototype.deductLastWave = function () {
    this.unitInventory.addAll(this._army.getUnitVectorFromCompleteWave(this.army.getWaveCount() - 1));
    this._army.deductLastWave();
  };
  CastleTreasureHuntFightscreenVO.prototype.initSeasonID = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID == this.treasureMapVO.mapID) {
      this._eventID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId);
    }
  };
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "distance", {
    get: function () {
      return this._tmapNode.distance;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "distance").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureHuntFightscreenVO.prototype.getTravelTime = function (__s20param0, __s20param1) {
    var __s20local0 = __s20param1 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s20param1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.targetArea.areaType).strength : 0;
    var __s20local1 = 1 + __dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.targetArea.areaType) / 100;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.TravelConst.getTravelTime(this.getLowestTravelSpeed(false, __s20param1), this.distance, __s20local1, __s20local0, false));
  };
  CastleTreasureHuntFightscreenVO.prototype.getBoostedTravelTime = function (__s22param0, __s22param1, __s22param2) {
    return 0;
  };
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "waitTime", {
    get: function () {
      return 0;
    },
    set: function (__s26param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "isConquerAttack", {
    get: function () {
      return false;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "isConquerAttack").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "treasureMapVO", {
    get: function () {
      return this._treasureMapVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "tmapNode", {
    get: function () {
      return this._tmapNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "detailViewObject", {
    get: function () {
      this._tmapNode.eventID = this._eventID;
      return this._tmapNode;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "detailViewObject").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "targetOwnerLevel", {
    get: function () {
      return this._tmapNode.dungeonlevel;
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "targetOwnerLevel").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "baseWallBonus", {
    get: function () {
      return this._tmapNode.wallBonus;
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "baseWallBonus").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "baseGateBonus", {
    get: function () {
      return this._tmapNode.gateBonus;
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "baseGateBonus").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "baseMoatBonus", {
    get: function () {
      return 0;
    },
    set: function (__s56param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "baseMoatBonus").set.call(this, __s56param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntFightscreenVO.prototype, "morality", {
    get: function () {
      return this._treasureMapVO.morality;
    },
    set: function (__s60param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO.prototype, "morality").set.call(this, __s60param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureHuntFightscreenVO;
}(__dep_export_CastleAttackInfoVO.CastleAttackInfoVO);
exports.CastleTreasureHuntFightscreenVO = __s0local0;
var __dep_export_EventCampMapobjectVO = require("gge-module:export_EventCampMapobjectVO");
var __dep_export_TreasureDungeonMapObjectVO = require("gge-module:export_TreasureDungeonMapObjectVO");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleSpyArmyInfoVO = require("gge-module:export_CastleSpyArmyInfoVO");
var __dep_export_StrongholdUnitInventory = require("gge-module:export_StrongholdUnitInventory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_CastleAttackArmyVO = require("gge-module:export_CastleAttackArmyVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightScreenVO");
