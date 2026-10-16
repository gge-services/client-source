Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_SimpleEffectSource = require("gge-module:export_SimpleEffectSource");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __s0local0 = function () {
  function CastleFightScreenVO() {
    this._waitTime = 0;
    this._targetActionType = 0;
    this._kingstowerBonus = 0;
    this._monumentBonus = 0;
    this._isCollectorAttack = false;
    this._collectorBooster = [];
    this._toolsSupportWodIds = [-1, -1, -1];
    this._targetCollectorCurrencyAmount = 0;
    this._openSelectBoosterDialog = false;
  }
  CastleFightScreenVO.getResourcesVectorItemRenderers = function () {
    var __s5local0 = [];
    var __s5local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local1.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_lootprio_all");
    __s5local1.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_NO
    };
    __s5local0.push(__s5local1);
    var __s5local2 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local2.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("wood");
    __s5local2.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_WOOD
    };
    __s5local0.push(__s5local2);
    var __s5local3 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local3.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("stone");
    __s5local3.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_STONE
    };
    __s5local0.push(__s5local3);
    var __s5local4 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local4.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("food");
    __s5local4.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_FOOD
    };
    __s5local0.push(__s5local4);
    var __s5local5 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local5.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("coal");
    __s5local5.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_COAL
    };
    __s5local0.push(__s5local5);
    var __s5local6 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local6.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("oliveoil");
    __s5local6.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_OIL
    };
    __s5local0.push(__s5local6);
    var __s5local7 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local7.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("glass");
    __s5local7.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_GLASS
    };
    __s5local0.push(__s5local7);
    var __s5local8 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    __s5local8.itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("iron");
    __s5local8.data = {
      resource: __dep_exact_26a421b704832cff_4.CombatConst.LOOT_PRIO_IRON
    };
    __s5local0.push(__s5local8);
    return __s5local0;
  };
  CastleFightScreenVO.prototype.fillFromParamObject = function (__s7param0) {
    this._additionalEffects = new __dep_export_SimpleEffectSource.SimpleEffectSource();
    if (__s7param0.AE) {
      this._additionalEffects.parseEffects(__s7param0.AE);
    }
  };
  CastleFightScreenVO.prototype.addAdditionalWave = function () {};
  CastleFightScreenVO.prototype.deductLastWave = function () {};
  CastleFightScreenVO.prototype.getActionTravelTimeBonusForAreaType = function (__s14param0, __s14param1) {
    var __s14local0;
    var __s14local1 = 0;
    var __s14local2 = [];
    __s14local2.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS);
    var __s14local3 = !!__s14param1 && (!__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s14param1.playerID) || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(__s14param1.playerID)) && this.targetOwnerLevel >= __dep_exact_26a421b704832cff_1.PlayerConst.LEVEL_CAP;
    __dep_exact_f855840627e6e145.int(__s14local3 ? __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.TRAVEL_ATTACK_BOOST) : 0);
    switch (this.targetActionType) {
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK:
        __s14local2.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS:
        __s14local2.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE:
        __s14local2.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER:
      case __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK:
        __s14local2.push(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_CONQUER_SPEED_BONUS);
        if (__s14local3 || __dep_export_PlayerHelper.PlayerHelper.isEilandVillagePlayer(__s14param1.playerID)) {
          __s14local0 = __dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.TRAVEL_CONQUER_BOOST;
        }
    }
    var __s14local4 = null;
    if (__s14param1 != null) {
      __s14local4 = __dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s14param1.playerID) && !__dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(__s14param1.playerID) ? __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_ATTACK_PVE : __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_ATTACK;
    }
    if (__s14local2.length > 0 && __s14local2 != null) {
      for (var __s14local5 = 0, __s14local6 = __s14local2; __s14local5 < __s14local6.length; __s14local5++) {
        var __s14local7 = __s14local6[__s14local5];
        if (__s14local7 !== undefined) {
          __s14local1 += __s14param0 ? __dep_exact_f855840627e6e145.int(__dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s14param0, __s14local7, this._targetArea.areaType, true, __s14local4).strength) : 0;
        }
      }
    }
    if (__s14local0) {
      __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__s14local0));
    }
    __dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this._targetArea.areaType, this._targetArea.spaceID);
    return __s14local1;
  };
  Object.defineProperty(CastleFightScreenVO.prototype, "distance", {
    get: function () {
      return __dep_export_MapHelper.MapHelper.getDistanceByMapobjects(this.sourceArea, this.targetArea, true, this._targetActionType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "sourceArea", {
    get: function () {
      return this._sourceArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetArea", {
    get: function () {
      return this._targetArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "sourceOwner", {
    get: function () {
      return this._sourceOwner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetOwner", {
    get: function () {
      return this._targetOwner;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "strongholdUnitInventory", {
    get: function () {
      return this._strongholdUnitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "spyInfo", {
    get: function () {
      return this._spyInfo;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightScreenVO.prototype.getTravelTime = function (__s40param0, __s40param1) {
    return 0;
  };
  CastleFightScreenVO.prototype.getTravelTimeBack = function (__s42param0, __s42param1) {
    return 0;
  };
  CastleFightScreenVO.prototype.getBoostedTravelTime = function (__s44param0, __s44param1, __s44param2) {
    return 0;
  };
  CastleFightScreenVO.prototype.getTravelCost = function (__s46param0) {
    return 0;
  };
  CastleFightScreenVO.prototype.getSumOfItems = function () {
    return 0;
  };
  CastleFightScreenVO.prototype.getSumOfTools = function () {
    return 0;
  };
  CastleFightScreenVO.prototype.getSumOfUnits = function () {
    return 0;
  };
  Object.defineProperty(CastleFightScreenVO.prototype, "waitTime", {
    get: function () {
      return this._waitTime;
    },
    set: function (__s56param0) {
      this._waitTime = __s56param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetActionType", {
    get: function () {
      return this._targetActionType;
    },
    set: function (__s60param0) {
      this._targetActionType = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isConquerAttack", {
    get: function () {
      return this._targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER || this._targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK || this._targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK || this._targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK || this._targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isOccupyConquerAttack", {
    get: function () {
      return this._targetActionType == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "detailViewObject", {
    get: function () {
      return this._targetArea;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "hasUnlockedTools", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "sourceOwnerCrestVO", {
    get: function () {
      if (this.sourceArea.kingdomID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
        if (this.sourceOwner.factionID == __dep_exact_26a421b704832cff_2.FactionConst.BLUE_FACTION) {
          return __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO;
        } else {
          return __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
        }
      } else {
        return this.sourceOwner.crest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetOwnerCrestVO", {
    get: function () {
      if (this.targetArea.kingdomID == __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID) {
        if (this.targetOwner.factionID == __dep_exact_26a421b704832cff_2.FactionConst.BLUE_FACTION) {
          return __dep_export_FactionEventVO.FactionEventVO.BLUE_CREST_VO;
        } else {
          return __dep_export_FactionEventVO.FactionEventVO.RED_CREST_VO;
        }
      } else {
        return this.targetOwner.crest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetOwnerLevel", {
    get: function () {
      if (this._targetArea.isUnderConquerControl) {
        return this._targetOwner.playerLevel;
      } else {
        return this._targetArea.minimumOwnerLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "baseWallBonus", {
    get: function () {
      return this._targetArea.baseWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "baseGateBonus", {
    get: function () {
      return this._targetArea.baseGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._targetArea.baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "kingstowerBonus", {
    get: function () {
      return this._kingstowerBonus;
    },
    set: function (__s94param0) {
      this._kingstowerBonus = __s94param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "monumentBonus", {
    get: function () {
      return this._monumentBonus;
    },
    set: function (__s98param0) {
      this._monumentBonus = __s98param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "travelTimeIsSubscriptionBoosted", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "collecterBooster", {
    get: function () {
      return this._collectorBooster;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "toolsSupportWodIds", {
    get: function () {
      return this._toolsSupportWodIds;
    },
    set: function (__s106param0) {
      this._toolsSupportWodIds = __s106param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightScreenVO.prototype.resetCollectorBooster = function () {
    this._collectorBooster = [];
  };
  CastleFightScreenVO.prototype.addCollectorBooster = function (__s110param0, __s110param1) {
    this._collectorBooster.push([__s110param0, __s110param1]);
  };
  Object.defineProperty(CastleFightScreenVO.prototype, "isCollectorAttack", {
    get: function () {
      return this._isCollectorAttack;
    },
    set: function (__s114param0) {
      this._isCollectorAttack = __s114param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isTempServerCollectorAttack", {
    get: function () {
      if (!__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnTemporaryServer) {
        return false;
      }
      if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.targetArea, "CastleMapobjectVO")) {
        return false;
      }
      if (this.targetArea.kingdomID != __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
        return false;
      }
      var __s116local0 = __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
      if (!__s116local0) {
        return false;
      }
      if (__s116local0.settingVO.scoringSystem != __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR) {
        return false;
      }
      var __s116local1 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_ARMORER), "ArmorerEventVO");
      return !!__s116local1 && __s116local1.containsEventPackage(__s116local0.settingVO.boosterCurrencyPackageID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isTempServerRankSwapAttack", {
    get: function () {
      return !!__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnTemporaryServer && !!__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.targetArea, "CastleMapobjectVO") && this.targetArea.kingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID && !!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.scoringSystem == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isAllianceBattleGroundPlayerPointsAttack", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.isOnABGAndCollector && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.targetArea, "CastleMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "isAllianceBattleGroundTowerAttack", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.isOnABGAndTower && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.targetArea, "ABGAllianceTowerMapobjectVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "targetCollectorCurrencyAmount", {
    get: function () {
      return this._targetCollectorCurrencyAmount;
    },
    set: function (__s131param0) {
      this._targetCollectorCurrencyAmount = __s131param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "openSelectBoosterDialog", {
    get: function () {
      return this._openSelectBoosterDialog;
    },
    set: function (__s135param0) {
      this._openSelectBoosterDialog = __s135param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightScreenVO.prototype, "additionalEffects", {
    get: function () {
      return this._additionalEffects;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFightScreenVO;
}();
exports.CastleFightScreenVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFightScreenVO");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
