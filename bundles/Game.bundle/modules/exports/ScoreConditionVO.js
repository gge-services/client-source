Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ScoreConditionVO(__s3param0, __s3param1, __s3param2 = -1) {
    this._score = 0;
    this._amount = 0;
    this._targetId = -1;
    this._kingdomId = 0;
    this._score = __s3param0;
    this._name = __s3param1[0];
    this._amount = __dep_exact_f855840627e6e145.int(__s3param1[1]);
    if (__s3param1.length > 2) {
      this._targetId = __dep_exact_f855840627e6e145.int(__s3param1[2]);
    }
    this._kingdomId = __s3param2;
  }
  Object.defineProperty(ScoreConditionVO.prototype, "score", {
    get: function () {
      return this._score;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreConditionVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreConditionVO.prototype, "textId", {
    get: function () {
      return "pointsEvent_" + this._name + this.textIdSuffix + "_condition";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreConditionVO.prototype, "isTargetIdUsedForTextIdSuffix", {
    get: function () {
      switch (this._name) {
        case ScoreConditionVO.FIND_EQUIPMENT_RARENESS:
        case ScoreConditionVO.CRAFT_EQUIPMENT_RARENESS:
        case ScoreConditionVO.POINT_EVENT_FAME:
        case ScoreConditionVO.CONQUER_VILLAGE:
        case ScoreConditionVO.SPIN_LUCKY_WHEEL:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreConditionVO.prototype, "isKingdomIdUsedForTextIdSuffix", {
    get: function () {
      return this._name == ScoreConditionVO.COUNT_DUNGEONS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreConditionVO.prototype, "textIdSuffix", {
    get: function () {
      if (this.isTargetIdUsedForTextIdSuffix) {
        return "_" + this._targetId;
      } else if (this.isKingdomIdUsedForTextIdSuffix) {
        return "_" + this._kingdomId;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreConditionVO.prototype, "textReplacements", {
    get: function () {
      if (this._targetId == -1 || this.isTargetIdUsedForTextIdSuffix) {
        return [this._amount];
      } else {
        return [this._targetId];
      }
    },
    enumerable: true,
    configurable: true
  });
  ScoreConditionVO.__initialize_static_members = function () {
    ScoreConditionVO.COLLECT_TAX = "collectTax";
    ScoreConditionVO.COUNT_SABOTAGE = "countSabotage";
    ScoreConditionVO.COUNT_SPY = "countSpy";
    ScoreConditionVO.DO_FIRE_DAMAGE = "doFireDamage";
    ScoreConditionVO.COLLECT_FROM_CITIZEN = "collectFromCitizen";
    ScoreConditionVO.OFF_MELEE_UNITS = "offMeleeUnits";
    ScoreConditionVO.OFF_RANGE_UNITS = "offRangeUnits";
    ScoreConditionVO.FIND_EQUIPMENT_RARENESS = "findEquipmentRareness";
    ScoreConditionVO.CRAFT_EQUIPMENT_RARENESS = "craftEquipmentRareness";
    ScoreConditionVO.COUNT_DUNGEONS = "countDungeons";
    ScoreConditionVO.RESOURCE_TO_PLAYER = "resourceToPlayer";
    ScoreConditionVO.POINT_EVENT_FAME = "pointEventFame";
    ScoreConditionVO.CONQUER_VILLAGE = "conquerVillage";
    ScoreConditionVO.SPIN_LUCKY_WHEEL = "spinLuckyWheel";
    ScoreConditionVO.COMPLETE_BOUNTY_HUNTER = "completeBountyHunter";
    ScoreConditionVO.COLLECT_KHAN_TABLETS = "collectKhanTablets";
    ScoreConditionVO.COLLECT_SAMURAI_TOKENS = "collectSamuraiTokens";
    ScoreConditionVO.COLLECT_MARAUDER_POINTS = "collectMarauderPoints";
    ScoreConditionVO.GET_ATT_TOOLS_POINT_EVENT = "getAttToolsPointEvent";
    ScoreConditionVO.GET_DEF_TOOLS_POINT_EVENT = "getDefToolsPointEvent";
    ScoreConditionVO.LOOT_RESOURCES_POINT_EVENT = "lootResourcesPointEvent";
    ScoreConditionVO.REVIVE_ATT_UNITS_WITH_MIN_STRENGTH = "reviveAttUnitsWithMinStrength";
    ScoreConditionVO.REVIVE_DEF_UNITS_WITH_MIN_STRENGTH = "reviveDefUnitsWithMinStrength";
    ScoreConditionVO.GAIN_FACTION_POINTS = "gainFactionPoints";
    ScoreConditionVO.SPEND_C2 = "spendC2";
    ScoreConditionVO.DEFEAT_ALIENS_WITH_MIN_FAME = "defeatAliensWithMinFame";
    ScoreConditionVO.RECRUIT_UNITS = "recruitedUnits";
    ScoreConditionVO.PRODUCE_TOOLS = "producedTools";
  };
  return ScoreConditionVO;
}();
exports.ScoreConditionVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
