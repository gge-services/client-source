Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ABasicQuestConditionVO = require("gge-module:export_ABasicQuestConditionVO");
var __s0local0 = function (__s1param0) {
  function CastleQuestConditionVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestConditionVO, __s1param0);
  Object.defineProperty(CastleQuestConditionVO.prototype, "conditionCounter", {
    get: function () {
      return this._conditionCounter;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO.prototype, "conditionCounter").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "conditionMaxCounter", {
    get: function () {
      return this._conditionMaxCounter;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO.prototype, "conditionMaxCounter").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "conditionData", {
    get: function () {
      return this._conditionData;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO.prototype, "conditionData").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "isDonationQuest", {
    get: function () {
      switch (this._conditionType) {
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
          return true;
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestConditionVO.prototype, "isFactionQuest", {
    get: function () {
      return this.getCurrentQuest().triggerKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestConditionVO.prototype.getConditionIcon = function () {
    switch (this._conditionType) {
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
        var __s22local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._conditionData[0]);
        if (__s22local0.level == 1) {
          if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s22local0, "DwellingBuildingVO")) {
            return 1;
          } else {
            return 15;
          }
        } else {
          return 10;
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOL_START:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOLS:
        return 2;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_UNITS:
        return 15;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DECOS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
        return 1;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_INSTANTBUILD:
        return 3;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BRIBE_TAXCOLLECTOR:
        return 4;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return 5;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return 6;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return 7;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return 8;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        if (this.getCurrentQuest().eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return 27;
        } else if ([1075, 1072, 1073].indexOf(this._questID) >= 0) {
          return 22;
        } else {
          return 10;
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
        return 9;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
        return 11;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
        return 12;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPY:
        return 13;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
        return 14;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
        if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(this._conditionData[0])) {
          return 27;
        } else if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this._conditionData[0])) {
          return 22;
        } else {
          return 16;
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
        return 17;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
        return 18;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        if (this._conditionData[0] == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return 28;
        } else if (this._conditionData[0] == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
          return 21;
        } else {
          return 19;
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
        return 19;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
        var __s22local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (__s22local1 && __s22local1.ownFaction == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
          return 42;
        } else {
          return 43;
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
        return 20;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
        return 10;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_AREA:
        return 23;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        if (this.getCurrentQuest().eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return 27;
        } else if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this._conditionData[0])) {
          return 22;
        } else {
          return 16;
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        return 24;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
        return 25;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
        return 26;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
        return 29;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
        return 30;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
        return 31;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RESEARCH:
        return 32;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
        return 33;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
        return 34;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
        return 35;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_MINUTESKIP:
        return 36;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONSTRUCTION_ALLIANCE_HELP:
        return 37;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
        return 20;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
        return 38;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
        return 40;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
        return 39;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
        return 41;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
        return 30;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
        return 12;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
        return 44;
      default:
        return 0;
    }
  };
  CastleQuestConditionVO.prototype.getConditionHelpIconVO = function () {
    switch (this._conditionType) {
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
        return __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(this._conditionData[0]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOLS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_UNITS:
        return __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this._conditionData[0]);
    }
    return null;
  };
  CastleQuestConditionVO.prototype.getConditionText = function () {
    switch (this._conditionType) {
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
        var __s46local0;
        if (this._conditionData.length == 1) {
          if ((__s46local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._conditionData[0]), "ABasicBuildingVO")).level == 1) {
            if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s46local0, "DecoBuildingVO")) {
              return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_BuildBuildings", [__dep_exact_92d05af59ee2ff30.Localize.text(__s46local0.getNameString())]);
            } else {
              return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_BuildBuildings_withLevel", [__dep_exact_92d05af59ee2ff30.Localize.text(__s46local0.getNameString()), __s46local0.level]);
            }
          } else {
            return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_UpgradeBuilding", [__dep_exact_92d05af59ee2ff30.Localize.text(__s46local0.getNameString()), __s46local0.level]);
          }
        }
        var __s46local1 = [];
        var __s46local2 = [];
        for (var __s46local3 = 0; __s46local3 < this._conditionData.length && !(__s46local3 >= 2); __s46local3++) {
          __s46local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(this._conditionData[__s46local3]);
          __s46local1.push(__dep_exact_92d05af59ee2ff30.Localize.text(__s46local0.getNameString()));
          __s46local2.push(__s46local0.level);
        }
        if (__s46local2[0] != __s46local2[1]) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_BuildNormalOrLegendaryBuildings_withLevel", [__s46local1[0], __s46local2[0], __s46local1[1], __s46local2[1]]);
        } else if (__s46local2[0] == 1) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_BuildMultipleBuildings_withLevel", __s46local1.concat(__s46local2));
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_UpgradeMultipleBuildings", __s46local1.concat(__s46local2));
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOL_START:
        var __s46local4 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this._conditionData[0]);
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_startRecruit", [__dep_exact_92d05af59ee2ff30.Localize.text(__s46local4.getNameString())]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TOOLS:
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_UNITS:
        var __s46local5 = "";
        for (var __s46local6 = 0; __s46local6 < this._conditionData.length; __s46local6++) {
          var __s46local7 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(this._conditionData[__s46local6]);
          if (!__s46local7.isResearchLocked) {
            if (__s46local6 != 0) {
              __s46local5 += " / ";
            }
            __s46local5 += __dep_exact_92d05af59ee2ff30.Localize.text(__s46local7.getNameString() + "_short") != __s46local7.getNameString() + "_short" ? __dep_exact_92d05af59ee2ff30.Localize.text(__s46local7.getNameString() + "_short") : __dep_exact_92d05af59ee2ff30.Localize.text(__s46local7.getNameString());
          }
        }
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_Recruit", [__s46local5]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DECOS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_ownDecorations");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_ownExpansions");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_INSTANTBUILD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_instantBuild");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_collectTax");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BRIBE_TAXCOLLECTOR:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_bribeTaxCollector");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateStone");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateFood");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateWood");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateC1");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateCoal");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateOil");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateGlass");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_donateIron");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_wonBattles");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_countPopulation");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_lootResources");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
        var __s46local8 = this.getCurrentQuest();
        if (__s46local8.triggerKingdomID == __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_count_castleName_2", [this._conditionData[0]]);
        } else if (__s46local8.triggerKingdomID == __dep_exact_26a421b704832cff_3.WorldDessert.KINGDOM_ID) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("pointsEvent_defeatDungeonDessert_condition_01", [this._conditionData[0]]);
        } else if (__s46local8.triggerKingdomID == __dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("pointsEvent_countDungeons_3_condition", [this._conditionData[0]]);
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_countDungeons", [this._conditionData[0]]);
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPY:
        if (__dep_exact_f855840627e6e145.int(this._conditionData[0]) == __dep_exact_26a421b704832cff_2.SpyConst.QUEST_ID_DEFENSE) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_spyCountMilitary");
        }
        if (__dep_exact_f855840627e6e145.int(this._conditionData[0]) == __dep_exact_26a421b704832cff_2.SpyConst.QUEST_ID_ECO) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_spyCountEco");
        }
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
        var __s46local9 = this._conditionMaxCounter > 1 ? "questCondition_outposts" : "questCondition_outpost";
        return __dep_exact_92d05af59ee2ff30.Localize.text(__s46local9, [this._conditionMaxCounter]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_startTreasureMap");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_treasureNode_" + this._questID);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_treasureDungeons_" + this._conditionData[0]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_joinAlliance");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_startKingdom", [__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
        if (this.conditionMaxCounter == 1) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_village", [__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_villages", [__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
        }
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_bossDungeon", [__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._conditionData[0]).kingdomNameString]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_treasureVillages_" + this._conditionData[0]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_conquerFactionVillage");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defeatedFactionCapitalOnMap");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defeatedFactionTowersOnMap");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defeatFactionCamp");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
        var __s46local10 = __dep_export_CastleModel.CastleModel.equipData.getRareStringFromRareID(parseInt(this._conditionData[0]));
        var __s46local11 = __dep_exact_92d05af59ee2ff30.Localize.text("equipment_rarity_" + __s46local10.toLowerCase());
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_findEquipment", [__s46local11]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_anyunits_off");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_anyunits_deff");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
        var __s46local12 = __dep_export_CastleModel.CastleModel.kingdomData.getSlumVOByPartPayPriceId(parseInt(this._conditionData[0]));
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_upgradeVillages", [__s46local12 ? __s46local12.level : 0]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_AREA:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_wordlmap");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_treasureNode_1043");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_collectKhanTablets");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_collectSamuraiTokens");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_spendSamuraiTokens");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_lawAndOrder");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_conquerResourceIsle");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_lootAquamarine_npc");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_lootAquamarine_pvp");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_buyGold");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_visitShop");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_buyMinAmountOfRubies", [this._conditionData[0]]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_collectFame");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_healSoldiers");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RESEARCH:
        var __s46local13 = "research_" + __dep_export_CastleModel.CastleModel.researchData.researchVOs.get(this._conditionData[0]).groupID + "_title";
        var __s46local14 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.researchVOs.get(this._conditionData[0]).level);
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_researchTech", [__s46local13, __s46local14]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_MINUTESKIP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questcondition_timeSkip_useSpecificSkip");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_referFriend_inviteDialog_friends");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_spendKhanTablets");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_wishingWell");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONSTRUCTION_ALLIANCE_HELP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questcondition_requestAllianceHelp_construction");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_buyPackage");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_changeCrest");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_collectGallantryPoints");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_assignCI");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_connectToFacebook");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_recruitedAttackUnitsWithMinStrength", [this._conditionData[0]]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_recruitedDefenderUnitsWithMinStrength", [this._conditionData[0]]);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_lootResourcesPvp");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defeatKhanCamps");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_collectRage");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defendKhanAttacks");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defeatNomads");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_joinTempServer");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_goToGeneralsInn");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_assignToBaron104");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_tauntWolfFortress");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_assignToGeneral104");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_defeatWolfFortress");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_gachaDrawFatKing");
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
        return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_goToGeneralsOverview");
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text("questCondition_" + this._conditionType);
  };
  Object.defineProperty(CastleQuestConditionVO.prototype, "hasConditionShowHowTo", {
    get: function () {
      if (this.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER) {
        return !__dep_export_CastleModel.CastleModel.userData.hasSentMailVerification && !__dep_export_CastleModel.CastleModel.userData.hasValidatedEmail;
      } else {
        return __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.hasShowHowToFunction(this.conditionType);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestConditionVO.prototype.getCurrentQuest = function () {
    if (__dep_export_CastleModel.CastleModel.questData.isQuestActive(this._questID)) {
      return __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(this._questID);
    } else {
      return __dep_export_CastleModel.CastleModel.questData.getQuestPrototype(this._questID);
    }
  };
  return CastleQuestConditionVO;
}(__dep_export_ABasicQuestConditionVO.ABasicQuestConditionVO);
exports.CastleQuestConditionVO = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IShowMeQuestConditionVO");
