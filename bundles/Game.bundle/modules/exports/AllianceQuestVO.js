Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __s0local0 = function () {
  function AllianceQuestVO() {}
  AllianceQuestVO.prototype.fillFromParamXML = function (__s5param0) {
    this._allianceQuestID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceQuestID", __s5param0, "-1", true));
    this._duration = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("duration", __s5param0, "0", true));
    this._questID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questID", __s5param0, "-1", true));
    this._rewardPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardPoints", __s5param0, "0", true));
    this._questType = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questType", __s5param0, "", true);
    this._questType = this._questType[0].toUpperCase() + this._questType.slice(1);
    this._cancelCostC2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("cancelCostC2", __s5param0, "199", false));
    this._eventID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventID", __s5param0, "-1", false));
  };
  Object.defineProperty(AllianceQuestVO.prototype, "allianceQuestID", {
    get: function () {
      return this._allianceQuestID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "questID", {
    get: function () {
      return this._questID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "rewardPoints", {
    get: function () {
      return this._rewardPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "questType", {
    get: function () {
      return this._questType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "questVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(this._questID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "questIconFrame", {
    get: function () {
      switch (this._questType) {
        case AllianceQuestVO.QUEST_TYPE_KILL_WALL_UNITS:
        case AllianceQuestVO.QUEST_TYPE_KILL_WALL_UNITS_ANY:
        case AllianceQuestVO.QUEST_TYPE_KILL_COURTYARD_UNITS:
        case AllianceQuestVO.QUEST_TYPE_KILL_COURTYARD_UNITS_ANY:
          return AllianceQuestVO.ALLIANCE_QUEST_TYPES.indexOf(AllianceQuestVO.QUEST_TYPE_KILL_UNITS) + 1;
        case AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINTS_WALL:
        case AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINTS_COURTYARD:
          return AllianceQuestVO.ALLIANCE_QUEST_TYPES.indexOf(AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINT) + 1;
        case AllianceQuestVO.QUEST_TYPE_OFF_MELEE_UNITS:
        case AllianceQuestVO.QUEST_TYPE_OFF_RANGE_UNITS:
        case AllianceQuestVO.QUEST_TYPE_DEF_MELEE_UNITS:
        case AllianceQuestVO.QUEST_TYPE_DEF_RANGE_UNITS:
          return AllianceQuestVO.ALLIANCE_QUEST_TYPES.indexOf(AllianceQuestVO.QUEST_TYPE_OBTAIN_UNITS) + 1;
      }
      return AllianceQuestVO.ALLIANCE_QUEST_TYPES.indexOf(this._questType) + 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "useAREBanner", {
    get: function () {
      return this.questType == AllianceQuestVO.QUEST_TYPE_KILL_UNITS || this._questType == AllianceQuestVO.QUEST_TYPE_CONSUME_TOOL || this._questType == AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINT || this._questType == AllianceQuestVO.QUEST_TYPE_COMPLETE_ATTACK || this._questType == AllianceQuestVO.QUEST_TYPE_KILL_WALL_UNITS || this._questType == AllianceQuestVO.QUEST_TYPE_KILL_WALL_UNITS_ANY || this._questType == AllianceQuestVO.QUEST_TYPE_KILL_COURTYARD_UNITS || this._questType == AllianceQuestVO.QUEST_TYPE_KILL_COURTYARD_UNITS_ANY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "cancelCostC2", {
    get: function () {
      return this._cancelCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceQuestVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  AllianceQuestVO.prototype.hasEventTimer = function () {
    return this._eventID != -1 || this._questType == AllianceQuestVO.QUEST_TYPE_STORM_ISLANDS;
  };
  AllianceQuestVO.prototype.getRemainingEventTime = function () {
    if (this._eventID != -1) {
      var __s30local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
      if (__s30local0) {
        return __s30local0.remainingEventTimeInSeconds;
      } else {
        return 0;
      }
    }
    if (this._questType == AllianceQuestVO.QUEST_TYPE_STORM_ISLANDS) {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).resetTime;
    } else {
      return 0;
    }
  };
  AllianceQuestVO.prototype.getEventNameTextId = function () {
    if (this._eventID != -1) {
      return "event_title_" + this._eventID;
    } else if (this._questType == AllianceQuestVO.QUEST_TYPE_STORM_ISLANDS) {
      return "event_title_102";
    } else {
      return "";
    }
  };
  AllianceQuestVO.prototype.getConditionTextVO = function (__s42param0) {
    var __s42local0 = this.getEventSpecificTextID(__s42param0, "popup_ame_quest_requirement_" + this._allianceQuestID);
    if (__dep_exact_92d05af59ee2ff30.Localize.hasText(__s42local0)) {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s42local0);
    }
    var __s42local1 = this.getFirstCondition();
    if (!__s42local1) {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s42local0);
    }
    var __s42local2;
    var __s42local3 = __s42local1.conditionType;
    var __s42local4 = __s42local1.conditionMaxCounter;
    var __s42local5 = __s42local1.conditionData;
    switch (__s42local3) {
      case AllianceQuestVO.CONDITION_TYPE_KILL_WALL_UNITS:
      case AllianceQuestVO.CONDITION_TYPE_KILL_COURTYARD_UNITS:
      case AllianceQuestVO.CONDITION_TYPE_CONSUME_TOOL:
        __s42local2 = [__s42local4, this.getUnitName(__s42local5[1]), __s42local5[0]];
        break;
      case AllianceQuestVO.CONDITION_TYPE_KILL_WALL_UNITS_ANY:
      case AllianceQuestVO.CONDITION_TYPE_KILL_COURTYARD_UNITS_ANY:
        __s42local2 = [__s42local4, __s42local5[0]];
        break;
      case AllianceQuestVO.CONDITION_TYPE_OBTAIN_RIFT_POINTS_WALL:
      case AllianceQuestVO.CONDITION_TYPE_OBTAIN_RIFT_POINTS_COURTYARD:
        __s42local2 = [__s42local4, __s42local5[0]];
        break;
      case AllianceQuestVO.CONDITION_TYPE_COLLECT_CURRENCY:
      case AllianceQuestVO.CONDITION_TYPE_SPEND_CURRENCY:
      case AllianceQuestVO.CONDITION_TYPE_BUY_CURRENCY:
        __s42local2 = [__s42local4, this.getCurrencyName(__s42local5[0])];
        break;
      case AllianceQuestVO.CONDITION_TYPE_OFF_MELEE_UNITS:
      case AllianceQuestVO.CONDITION_TYPE_OFF_RANGE_UNITS:
      case AllianceQuestVO.CONDITION_TYPE_DEF_MELEE_UNITS:
      case AllianceQuestVO.CONDITION_TYPE_DEF_RANGE_UNITS:
        __s42local2 = [__s42local4, __s42local5[0]];
        break;
      case AllianceQuestVO.CONDITION_TYPE_OPEN_LOOT_BOX:
        __s42local2 = [__s42local4, this.getLootBoxName(__s42local5[0])];
        break;
      default:
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s42local0);
    }
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.getEventSpecificTextID(__s42param0, "popup_ame_quest_requirement_" + __s42local3), __s42local2);
  };
  AllianceQuestVO.prototype.getTitleTextId = function (__s47param0) {
    var __s47local0 = this.getEventSpecificTextID(__s47param0, "popup_ame_quest_title_" + this._allianceQuestID);
    if (__dep_exact_92d05af59ee2ff30.Localize.hasText(__s47local0)) {
      return __s47local0;
    }
    var __s47local1 = this.getFirstCondition();
    if (__s47local1) {
      return this.getEventSpecificTextID(__s47param0, "popup_ame_quest_title_" + __s47local1.conditionType);
    } else {
      return __s47local0;
    }
  };
  AllianceQuestVO.prototype.getTitleTextReplacements = function () {
    var __s52local0 = this.getFirstCondition();
    if (__s52local0) {
      return [__s52local0.conditionMaxCounter];
    } else {
      return [];
    }
  };
  AllianceQuestVO.prototype.getEventSpecificTextID = function (__s56param0, __s56param1) {
    if (__s56param0) {
      return __s56param0.getEventSpecificTextID(__s56param1);
    } else {
      return __s56param1;
    }
  };
  AllianceQuestVO.prototype.getFirstCondition = function () {
    var __s60local0 = __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(this._questID);
    __s60local0 ||= __dep_export_CastleModel.CastleModel.questData.getQuestPrototype(this._questID);
    if (__s60local0 && __s60local0.conditions && __s60local0.conditions.length != 0) {
      return __s60local0.conditions[0];
    } else {
      return null;
    }
  };
  AllianceQuestVO.prototype.getUnitName = function (__s64param0) {
    var __s64local0 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(__s64param0);
    if (__s64local0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s64local0.getNameString());
    } else {
      return "";
    }
  };
  AllianceQuestVO.prototype.getCurrencyName = function (__s68param0) {
    var __s68local0 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__s68param0);
    if (!__s68local0) {
      return "";
    }
    var __s68local1 = __s68local0.assetName == "" || __s68local0.assetName == null ? __s68local0.name : __s68local0.assetName;
    return __dep_exact_92d05af59ee2ff30.Localize.text("currency_name_" + __s68local1);
  };
  AllianceQuestVO.prototype.getLootBoxName = function (__s71param0) {
    var __s71local0 = __dep_export_CastleModel.CastleModel.lootBoxData.xml.getLootBoxByID(__s71param0);
    if (__s71local0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("mysteryBox_boxName_" + __s71local0.name + "_" + __s71local0.rarity);
    } else {
      return "";
    }
  };
  AllianceQuestVO.QUEST_TYPE_OBTAIN_CURRENCIES_OR_RESOURCES = "ObtainCurrenciesOrResources";
  AllianceQuestVO.QUEST_TYPE_OBTAIN_UNITS = "ObtainUnits";
  AllianceQuestVO.QUEST_TYPE_DEFEAT_TARGET = "DefeatTarget";
  AllianceQuestVO.QUEST_TYPE_SPEND_CURRENCIES_OR_RESOURCES = "SpendCurrenciesOrResources";
  AllianceQuestVO.QUEST_TYPE_UPGRADE = "Upgrade";
  AllianceQuestVO.QUEST_TYPE_NOMAD_INVASION = "NomadInvasion";
  AllianceQuestVO.QUEST_TYPE_SAMURAI_INVASION = "SamuraiInvasion";
  AllianceQuestVO.QUEST_TYPE_ALIEN_INVASION = "AlienInvasion";
  AllianceQuestVO.QUEST_TYPE_BLOODCROW_INVASION = "BloodcrowInvasion";
  AllianceQuestVO.QUEST_TYPE_STORM_ISLANDS = "StormIslands";
  AllianceQuestVO.QUEST_TYPE_BERIMOND_KINGDOM = "BerimondKingdom";
  AllianceQuestVO.QUEST_TYPE_KILL_UNITS = "KillUnits";
  AllianceQuestVO.QUEST_TYPE_CONSUME_TOOL = "ConsumeTool";
  AllianceQuestVO.QUEST_TYPE_OPEN_LOOT_BOX = "OpenLootBox";
  AllianceQuestVO.QUEST_TYPE_COMPLETE_ATTACK = "CompleteAttack";
  AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINT = "ObtainRiftPoint";
  AllianceQuestVO.QUEST_TYPE_BUY_CURRENCY = "BuyCurrency";
  AllianceQuestVO.QUEST_TYPE_KILL_WALL_UNITS = "KillWallUnits";
  AllianceQuestVO.QUEST_TYPE_KILL_WALL_UNITS_ANY = "KillWallUnitsAny";
  AllianceQuestVO.QUEST_TYPE_KILL_COURTYARD_UNITS = "KillCourtyardUnits";
  AllianceQuestVO.QUEST_TYPE_KILL_COURTYARD_UNITS_ANY = "KillCourtyardUnitsAny";
  AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINTS_WALL = "ObtainRiftPointsWall";
  AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINTS_COURTYARD = "ObtainRiftPointsCourtyard";
  AllianceQuestVO.QUEST_TYPE_OFF_MELEE_UNITS = "OffMeleeUnits";
  AllianceQuestVO.QUEST_TYPE_OFF_RANGE_UNITS = "OffRangeUnits";
  AllianceQuestVO.QUEST_TYPE_DEF_MELEE_UNITS = "DefMeleeUnits";
  AllianceQuestVO.QUEST_TYPE_DEF_RANGE_UNITS = "DefRangeUnits";
  AllianceQuestVO.CONDITION_TYPE_KILL_WALL_UNITS = "killWallUnits";
  AllianceQuestVO.CONDITION_TYPE_KILL_WALL_UNITS_ANY = "killWallUnitsAny";
  AllianceQuestVO.CONDITION_TYPE_KILL_COURTYARD_UNITS = "killCourtyardUnits";
  AllianceQuestVO.CONDITION_TYPE_KILL_COURTYARD_UNITS_ANY = "killCourtyardUnitsAny";
  AllianceQuestVO.CONDITION_TYPE_CONSUME_TOOL = "consumeTool";
  AllianceQuestVO.CONDITION_TYPE_OBTAIN_RIFT_POINTS_WALL = "obtainRiftPointsWall";
  AllianceQuestVO.CONDITION_TYPE_OBTAIN_RIFT_POINTS_COURTYARD = "obtainRiftPointsCourtyard";
  AllianceQuestVO.CONDITION_TYPE_COLLECT_CURRENCY = "collectCurrency";
  AllianceQuestVO.CONDITION_TYPE_SPEND_CURRENCY = "spendCurrency";
  AllianceQuestVO.CONDITION_TYPE_BUY_CURRENCY = "buyCurrency";
  AllianceQuestVO.CONDITION_TYPE_OFF_MELEE_UNITS = "offMeleeUnits";
  AllianceQuestVO.CONDITION_TYPE_OFF_RANGE_UNITS = "offRangeUnits";
  AllianceQuestVO.CONDITION_TYPE_DEF_MELEE_UNITS = "defMeleeUnits";
  AllianceQuestVO.CONDITION_TYPE_DEF_RANGE_UNITS = "defRangeUnits";
  AllianceQuestVO.CONDITION_TYPE_OPEN_LOOT_BOX = "openLootBox";
  AllianceQuestVO.ALLIANCE_QUEST_TYPES = [AllianceQuestVO.QUEST_TYPE_OBTAIN_CURRENCIES_OR_RESOURCES, AllianceQuestVO.QUEST_TYPE_OBTAIN_UNITS, AllianceQuestVO.QUEST_TYPE_DEFEAT_TARGET, AllianceQuestVO.QUEST_TYPE_SPEND_CURRENCIES_OR_RESOURCES, AllianceQuestVO.QUEST_TYPE_UPGRADE, AllianceQuestVO.QUEST_TYPE_NOMAD_INVASION, AllianceQuestVO.QUEST_TYPE_SAMURAI_INVASION, AllianceQuestVO.QUEST_TYPE_ALIEN_INVASION, AllianceQuestVO.QUEST_TYPE_BLOODCROW_INVASION, AllianceQuestVO.QUEST_TYPE_STORM_ISLANDS, AllianceQuestVO.QUEST_TYPE_BERIMOND_KINGDOM, AllianceQuestVO.QUEST_TYPE_KILL_UNITS, AllianceQuestVO.QUEST_TYPE_CONSUME_TOOL, AllianceQuestVO.QUEST_TYPE_OPEN_LOOT_BOX, AllianceQuestVO.QUEST_TYPE_COMPLETE_ATTACK, AllianceQuestVO.QUEST_TYPE_OBTAIN_RIFT_POINT, AllianceQuestVO.QUEST_TYPE_BUY_CURRENCY];
  return AllianceQuestVO;
}();
exports.AllianceQuestVO = __s0local0;
