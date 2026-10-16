Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_CastleFightScreenVO = require("gge-module:export_CastleFightScreenVO");
var __s0local0 = function (__s1param0) {
  function CastleTroopSupportVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTroopSupportVO, __s1param0);
  CastleTroopSupportVO.prototype.fillFromParamObject = function (__s5param0) {
    this._sourceArea = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s5param0.SCID, __s5param0.KID);
    this._sourceOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    this._targetArea = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s5param0.gaa.AI);
    this._targetOwner = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s5param0.gaa.OI);
    this._unitInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(__s5param0.gui.I);
    this._strongholdUnitInventory = new __dep_export_StrongholdUnitInventory.StrongholdUnitInventory();
    this._strongholdUnitInventory.fillFromWodAmountArray(__s5param0.gui.SHI);
    this._supportUnits = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(CastleTroopSupportVO.ITEM_TYPES, CastleTroopSupportVO.ITEM_LEVELS, 99);
    this._supportTools = new __dep_export_CastleFightItemContainer.CastleFightItemContainer(CastleTroopSupportVO.ITEM_TYPES_1, CastleTroopSupportVO.ITEM_LEVELS_1, 99);
    __s1param0.prototype.fillFromParamObject.call(this, __s5param0);
  };
  CastleTroopSupportVO.prototype.getArmy = function () {
    var __s7local0 = [];
    for (var __s7local1 = 0, __s7local2 = this._supportUnits.getSlotList(); __s7local1 < __s7local2.length; __s7local1++) {
      var __s7local3 = __s7local2[__s7local1];
      if (__s7local3[0] != -1) {
        __s7local0.push([__s7local3[0], __s7local3[1]]);
      }
    }
    for (var __s7local4 = 0, __s7local5 = this._supportTools.getSlotList(); __s7local4 < __s7local5.length; __s7local4++) {
      var __s7local6 = __s7local5[__s7local4];
      if (__s7local6[0] != -1) {
        __s7local0.push([__s7local6[0], __s7local6[1]]);
      }
    }
    return __s7local0;
  };
  CastleTroopSupportVO.prototype.getSumOfItems = function () {
    return this._supportUnits.sumOfItems + this._supportTools.sumOfItems;
  };
  CastleTroopSupportVO.prototype.getSumOfTools = function () {
    return this._supportTools.sumOfItems;
  };
  CastleTroopSupportVO.prototype.getSumOfUnits = function () {
    return this._supportUnits.sumOfItems;
  };
  CastleTroopSupportVO.prototype.getLowestTravelSpeed = function (__s21param0 = null) {
    return __dep_exact_f855840627e6e145.int(Math.min(this._supportUnits.getLowestTravelSpeed(false, __s21param0), this._supportTools.getLowestTravelSpeed(false, __s21param0)));
  };
  Object.defineProperty(CastleTroopSupportVO.prototype, "supportUnits", {
    get: function () {
      return this._supportUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportVO.prototype, "supportTools", {
    get: function () {
      return this._supportTools;
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportVO.prototype.getTravelCost = function (__s27param0) {
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TravelConst.getRedeployTravelCostC1(this.distance, this.getSumOfItems(), __s27param0 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTravelCostBonusForAreaType(__s27param0, this.targetArea.areaType, this.targetActionType) : 0, __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.TRAVEL_COST_REDUCTION)));
  };
  CastleTroopSupportVO.prototype.getTravelTime = function (__s29param0, __s29param1) {
    return __dep_exact_f855840627e6e145.int(this.getBoostedTravelTime(__s29param0, 0, __s29param1));
  };
  CastleTroopSupportVO.prototype.getBoostedTravelTime = function (__s31param0, __s31param1, __s31param2) {
    if (this.getSumOfItems() == 0) {
      return 0;
    }
    var __s31local0 = __dep_exact_26a421b704832cff.TravelConst.calculateLowLevelBoost(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) + 1;
    var __s31local1 = __s31param2 ? this.getActionTravelTimeBonusForAreaType(__s31param2, null) : 0;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.TravelConst.getTravelTimeWithHorse(this.getLowestTravelSpeed(__s31param2), this.distance, __s31local0, __s31param1, __s31local1, this.distance, false));
  };
  Object.defineProperty(CastleTroopSupportVO.prototype, "hasUnlockedTools", {
    get: function () {
      return true;
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightScreenVO.CastleFightScreenVO.prototype, "hasUnlockedTools").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportVO.prototype, "unlockedTools", {
    get: function () {
      return this._unlockedTools;
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportVO.ITEM_TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CastleTroopSupportVO.ITEM_TYPES_1 = [9, 9, 9, 9, 9, 9, 9, 9, 9];
  CastleTroopSupportVO.ITEM_LEVELS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  CastleTroopSupportVO.ITEM_LEVELS_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return CastleTroopSupportVO;
}(__dep_export_CastleFightScreenVO.CastleFightScreenVO);
exports.CastleTroopSupportVO = __s0local0;
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleFightItemContainer = require("gge-module:export_CastleFightItemContainer");
var __dep_export_StrongholdUnitInventory = require("gge-module:export_StrongholdUnitInventory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightScreenVO");
