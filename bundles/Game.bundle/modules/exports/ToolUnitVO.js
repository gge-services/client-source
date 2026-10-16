Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SDefenceInstantBuyToolVO = require("gge-module:export_C2SDefenceInstantBuyToolVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BonusVO = require("gge-module:export_BonusVO");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BasicUnitVO = require("gge-module:export_BasicUnitVO");
var __dep_export_InstantBuyInfoVO = require("gge-module:export_InstantBuyInfoVO");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __s0local0 = function (__s1param0) {
  function ToolUnitVO() {
    var __s3local0 = this;
    __s3local0.wallBonus = 0;
    __s3local0.gateBonus = 0;
    __s3local0.moatBonus = 0;
    __s3local0.pointBonus = 0;
    __s3local0.reputationBonus = 0;
    __s3local0.defRangeBonus = 0;
    __s3local0.defMeleeBonus = 0;
    __s3local0.offRangeBonus = 0;
    __s3local0.offMeleeBonus = 0;
    __s3local0.khanTabletBonus = 0;
    __s3local0.samuraiBonus = 0;
    __s3local0._amountPerWave = 0;
    __s3local0.numberofDolls = 0;
    __s3local0.dollWod = 0;
    __s3local0.fameBonus = 0;
    __s3local0.xpBonus = 0;
    __s3local0.canBeUsedToAttackNPC = false;
    __s3local0.c1Bonus = 0;
    __s3local0.allianceCoinBonus = 0;
    __s3local0.allianceTokenBonus = 0;
    __s3local0.rageBonus = 0;
    __s3local0.khanMedalBonus = 0;
    __s3local0.pearlBooster = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ToolUnitVO, __s1param0);
  ToolUnitVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this.wallBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallBonus", __s5param0, "0")) * 0.01;
    this.gateBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateBonus", __s5param0, "0")) * 0.01;
    this.moatBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("moatBonus", __s5param0, "0")) * 0.01;
    this.pointBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("pointBonus", __s5param0, "0")) * 0.01;
    this.reputationBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("reputationBonus", __s5param0, "0")) * 0.01;
    this.defRangeBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defRangeBonus", __s5param0, "0")) * 0.01;
    this.defMeleeBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defMeleeBonus", __s5param0, "0")) * 0.01;
    this.offRangeBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("offRangeBonus", __s5param0, "0")) * 0.01;
    this.offMeleeBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("offMeleeBonus", __s5param0, "0")) * 0.01;
    this.attackType = String(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("typ", __s5param0, "0", true));
    this.numberofDolls = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("numberofDolls", __s5param0, "0"));
    this.dollWod = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("dollWod", __s5param0, "0"));
    this.xpBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("xpBonus", __s5param0, "0")) * 0.01;
    this.slotTypes = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("slotTypes", __s5param0, "", true).split(",");
    this.fameBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fameBonus", __s5param0, "0")) * 0.01;
    this.canBeUsedToAttackNPC = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("canBeUsedToAttackNPC", __s5param0, "1")) == 1;
    this._amountPerWave = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("amountPerWave", __s5param0, "-1"));
    this.c1Bonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c1Bonus", __s5param0, "0")) * 0.01;
    this.rageBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("ragePointBonus", __s5param0, "0")) * 0.01;
    this.khanMedalBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("khanMedalBooster", __s5param0, "0")) * 0.01;
    this.khanTabletBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("khanTabletBooster", __s5param0, "0")) * 0.01;
    this.samuraiBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("samuraiTokenBooster", __s5param0, "0")) * 0.01;
    this.allianceCoinBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("royalCapitalCoinBooster", __s5param0, "0")) * 0.01;
    this.allianceTokenBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("royalCapitalTokenBooster", __s5param0, "0")) * 0.01;
    this.pearlBooster = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("pearlBooster", __s5param0, "0")) * 0.01;
    this._effectsString = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("effects", __s5param0);
  };
  ToolUnitVO.prototype.getVisualClassName = function () {
    var __s7local0 = __s1param0.prototype.getVisualClassName.call(this);
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s7local0)) {
      return __s7local0;
    } else {
      return "Unknown_Unit_Tools";
    }
  };
  ToolUnitVO.prototype.isToolForSlotType = function (__s11param0) {
    if (this.slotTypes != null) {
      for (var __s11local0 = 0, __s11local1 = this.slotTypes; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2 == __s11param0) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(ToolUnitVO.prototype, "unitCategory", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "unitCategory").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.requestInstantBuy = function (__s21param0, __s21param1, __s21param2, __s21param3, __s21param4 = -1) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SDefenceInstantBuyToolVO.C2SDefenceInstantBuyToolVO(this.wodId, __s21param0, __s21param1, __s21param2, __s21param3, __s21param4));
  };
  ToolUnitVO.prototype.getBonusString = function (__s23param0 = 0) {
    if (this.effectTypes.length) {
      var __s23local0;
      var __s23local1 = this.effectTypes[__s23param0];
      __s23local0 = __s23local1.hasAbsoluteBonus ? this.isPositiveEffect(__s23local1) ? __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD : __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_SUBTRACT : this.isPositiveEffect(__s23local1) ? __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD : __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
      if (__s23local1 === __dep_export_ToolEffectType.ToolEffectType.GENERIC_EFFECT) {
        var __s23local2 = this.effectTypes.length - this.effects.length;
        var __s23local3 = this.effects[__s23param0 - __s23local2];
        if (__s23local3) {
          var __s23local4 = __s23local3.effect.effectType.type.simpleValueTextID;
          return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s23local4, [Math.round(__s23local3.strength)]);
        }
        return null;
      }
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s23local0, [this.getDisplayedBonusByEffect(__s23local1)]);
    }
    if (this.numberofDolls > 0) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [this.numberofDolls]);
    } else if (this.isSlowDownTool()) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.unitSpeed.toString());
    } else {
      return null;
    }
  };
  ToolUnitVO.prototype.isPositiveEffect = function (__s31param0) {
    switch (__s31param0) {
      case __dep_export_ToolEffectType.ToolEffectType.OFF_MELEE_BONUS:
      case __dep_export_ToolEffectType.ToolEffectType.OFF_RANGE_BONUS:
        return this.attackType == __dep_export_ClientConstCastle.ClientConstCastle.ATTACK_TOOL;
      case __dep_export_ToolEffectType.ToolEffectType.WALL_BONUS:
      case __dep_export_ToolEffectType.ToolEffectType.GATE_BONUS:
      case __dep_export_ToolEffectType.ToolEffectType.MOAT_BONUS:
      case __dep_export_ToolEffectType.ToolEffectType.DEF_MELEE_BONUS:
      case __dep_export_ToolEffectType.ToolEffectType.DEF_RANGE_BONUS:
        return this.attackType == __dep_export_ClientConstCastle.ClientConstCastle.DEFENSE_TOOL;
      case __dep_export_ToolEffectType.ToolEffectType.EFFECT_TYPE_INFECTION_RATE_BASE_MALUS:
        return false;
    }
    return true;
  };
  ToolUnitVO.prototype.getDisplayedBonusByEffect = function (__s34param0, __s34param1 = 1) {
    if (__s34param0.hasAbsoluteBonus) {
      return __dep_exact_f855840627e6e145.int(this.getBonusByEffect(__s34param0) * __s34param1);
    } else {
      return Math.round(this.getBonusByEffect(__s34param0) * 100 * __s34param1);
    }
  };
  ToolUnitVO.prototype.getBonusByEffect = function (__s38param0) {
    switch (__s38param0) {
      case __dep_export_ToolEffectType.ToolEffectType.WALL_BONUS:
        return this.wallBonus;
      case __dep_export_ToolEffectType.ToolEffectType.GATE_BONUS:
        return this.gateBonus;
      case __dep_export_ToolEffectType.ToolEffectType.MOAT_BONUS:
        return this.moatBonus;
      case __dep_export_ToolEffectType.ToolEffectType.POINT_BONUS:
        return this.pointBonus;
      case __dep_export_ToolEffectType.ToolEffectType.REPUTATION_BONUS:
        return this.reputationBonus;
      case __dep_export_ToolEffectType.ToolEffectType.DEF_RANGE_BONUS:
        return this.defRangeBonus;
      case __dep_export_ToolEffectType.ToolEffectType.DEF_MELEE_BONUS:
        return this.defMeleeBonus;
      case __dep_export_ToolEffectType.ToolEffectType.OFF_RANGE_BONUS:
        return this.offRangeBonus;
      case __dep_export_ToolEffectType.ToolEffectType.OFF_MELEE_BONUS:
        return this.offMeleeBonus;
      case __dep_export_ToolEffectType.ToolEffectType.KHAN_TABLET_BONUS:
        return this.khanTabletBonus;
      case __dep_export_ToolEffectType.ToolEffectType.SAMURAI_BONUS:
        return this.samuraiBonus;
      case __dep_export_ToolEffectType.ToolEffectType.ALLIANCE_CITY_COIN_BONUS:
        return this.allianceCoinBonus;
      case __dep_export_ToolEffectType.ToolEffectType.ALLIANCE_CITY_TOKEN_BONUS:
        return this.allianceTokenBonus;
      case __dep_export_ToolEffectType.ToolEffectType.XP_BONUS:
        return this.xpBonus;
      case __dep_export_ToolEffectType.ToolEffectType.LOOT_BONUS:
        return this.lootValue;
      case __dep_export_ToolEffectType.ToolEffectType.FAME_BONUS:
        return this.fameBonus;
      case __dep_export_ToolEffectType.ToolEffectType.C1_BONUS:
        return this.c1Bonus;
      case __dep_export_ToolEffectType.ToolEffectType.KHAN_MEDAL_BONUS:
        return this.khanMedalBonus;
      case __dep_export_ToolEffectType.ToolEffectType.PEARL_BONUS:
        return this.pearlBooster;
      case __dep_export_ToolEffectType.ToolEffectType.RAGE_BONUS:
        return this.rageBonus;
    }
    if (this.effects.length > 0) {
      for (var __s38local0 = 0, __s38local1 = this.effects; __s38local0 < __s38local1.length; __s38local0++) {
        var __s38local2 = __s38local1[__s38local0];
        if (__s38local2.effect.effectType.type.mappedToolEffectType == __s38param0) {
          if (__s38param0.hasAbsoluteBonus) {
            return this.getEffectValue(__s38local2.effect.effectType.type).strength;
          } else {
            return this.getEffectValue(__s38local2.effect.effectType.type).strength * 0.01;
          }
        }
      }
    }
    return 0;
  };
  Object.defineProperty(ToolUnitVO.prototype, "effectTypes", {
    get: function () {
      var __s47local0 = this;
      if (this._effectTypes == null) {
        this._effectTypes = [];
        if (this.wallBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.WALL_BONUS);
        }
        if (this.gateBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.GATE_BONUS);
        }
        if (this.moatBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.MOAT_BONUS);
        }
        if (this.pointBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.POINT_BONUS);
        }
        if (this.reputationBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.REPUTATION_BONUS);
        }
        if (this.defRangeBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.DEF_RANGE_BONUS);
        }
        if (this.defMeleeBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.DEF_MELEE_BONUS);
        }
        if (this.offRangeBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.OFF_RANGE_BONUS);
        }
        if (this.offMeleeBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.OFF_MELEE_BONUS);
        }
        if (this.khanTabletBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.KHAN_TABLET_BONUS);
        }
        if (this.samuraiBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.SAMURAI_BONUS);
        }
        if (this.allianceCoinBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.ALLIANCE_CITY_COIN_BONUS);
        }
        if (this.allianceTokenBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.ALLIANCE_CITY_TOKEN_BONUS);
        }
        if (this.c1Bonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.C1_BONUS);
        }
        if (this.xpBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.XP_BONUS);
        }
        if (this.lootValue) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.LOOT_BONUS);
        }
        if (this.fameBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.FAME_BONUS);
        }
        if (this.khanMedalBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.KHAN_MEDAL_BONUS);
        }
        if (this.pearlBooster) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.PEARL_BONUS);
        }
        if (this.rageBonus) {
          this._effectTypes.push(__dep_export_ToolEffectType.ToolEffectType.RAGE_BONUS);
        }
        if (this.effects.length > 0) {
          this.effects.forEach(function (__s71param0) {
            return __s47local0._effectTypes.push(__s71param0.effect.effectType.type.mappedToolEffectType ?? __dep_export_ToolEffectType.ToolEffectType.GENERIC_EFFECT);
          });
        }
      }
      return this._effectTypes;
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.getTooltipString = function (__s73param0 = 1, __s73param1 = ToolUnitVO.ALL_EFFECTS) {
    if (this.effectTypes.length > 0) {
      var __s73local0 = 0;
      var __s73local1 = 0;
      if (__s73param1 == ToolUnitVO.ALL_EFFECTS) {
        __s73local0 = 0;
        __s73local1 = __dep_exact_f855840627e6e145.int(this.effectTypes.length - 1);
      } else {
        __s73local0 = __s73param1;
        __s73local1 = __s73param1;
      }
      var __s73local2 = "";
      var __s73local3 = false;
      var __s73local4 = this.effectTypes.length - this.effects.length;
      for (var __s73local5 = __s73local0; __s73local5 <= __s73local1; __s73local5++) {
        var __s73local6;
        var __s73local7 = this.effectTypes[__s73local5];
        __s73local6 = __s73local7.hasAbsoluteBonus ? this.isPositiveEffect(__s73local7) ? "xFlat_Bonus_on" : "xFlat_Malus_on" : this.isPositiveEffect(__s73local7) ? "xPercent_Bonus_on_new" : "xPercent_Malus_on_new";
        if (__s73local3) {
          __s73local2 += "\n";
        }
        __s73local3 = true;
        switch (__s73local7) {
          case __dep_export_ToolEffectType.ToolEffectType.EFFECT_TYPE_INFECTION_RATE_BASE_MALUS:
          case __dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_ALL:
          case __dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_RIGHT:
          case __dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_LEFT:
          case __dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_FRONT:
          case __dep_export_ToolEffectType.ToolEffectType.RESERVE_UNIT_KILL:
            var __s73local8 = this.effects.find(function (__s82param0) {
              return __s82param0.effect.effectType.type.mappedToolEffectType == __s73local7;
            });
            if (__s73local8) {
              __s73local2 = __s73local8.descriptionText;
            }
            break;
          case __dep_export_ToolEffectType.ToolEffectType.GENERIC_EFFECT:
            var __s73local9 = this.effects[__s73local5 - __s73local4];
            if (__s73local9) {
              __s73local2 += __s73local9.descriptionText;
            }
            break;
          default:
            __s73local2 += __dep_exact_92d05af59ee2ff30.Localize.text(__s73local6, [__dep_exact_92d05af59ee2ff30.Localize.text(__s73local7.tooltipTextId), this.getDisplayedBonusByEffect(__s73local7, __s73param0)]);
        }
      }
      return __s73local2;
    }
    if (this.isSlowDownTool()) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("light_and_heavystone_tooltip", [this.unitSpeed.toString()]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("effect");
    }
  };
  Object.defineProperty(ToolUnitVO.prototype, "hasLimitedAmountPerWave", {
    get: function () {
      return this.amountPerWave > -1;
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (__s90param0) {
    var __s90local0 = new __dep_export_InstantBuyInfoVO.InstantBuyInfoVO();
    var __s90local1 = __s90param0.unlockedTools;
    if (this.costC2 > 0 && (__s90local0.isVisible = true, __s90local1 != null)) {
      for (var __s90local2 = 0, __s90local3 = __s90local1; __s90local2 < __s90local3.length; __s90local2++) {
        var __s90local4 = __s90local3[__s90local2];
        if (__s90local4 !== undefined && __s90local4.wodId == this.wodId) {
          __s90local0.isEnabled = true;
          break;
        }
      }
    }
    if (__s90local0.isVisible == 1 && !__s90local0.isEnabled) {
      if (__s90param0.getAssociatedEventPackage(this._wodId) != null) {
        __s90local0.isEnabled = true;
      }
    }
    __s90local0.toolTip = __s90local0.isEnabled ? "dialog_fight_instantBuy" : this.getRequiredBuildingString();
    return __s90local0;
  };
  ToolUnitVO.prototype.isSlowDownTool = function () {
    return this._type == "HeavyStone" || this._type == "LightStone" || this._type == "BerimondAntiBoost";
  };
  ToolUnitVO.prototype.getAbsoluteBoostEffectType = function () {
    return __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_TIME_BONUS;
  };
  ToolUnitVO.prototype.getCost = function (__s102param0) {
    var __s102local0 = this.isOffensive ? __dep_export_CastleEffectEnum.CastleEffectEnum.REDUCEOFFENSIVETOOLSCOSTS : __dep_export_CastleEffectEnum.CastleEffectEnum.REDUCEDEFENSIVETOOLSCOSTS;
    var __s102local1 = __s102param0.type != __dep_export_CollectableEnum.CollectableEnum.C2 ? Math.max(1 - __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(__s102local0) / 100, 0) : 1;
    var __s102local2 = __dep_exact_f855840627e6e145.int(this.isOnTempServer && __s102param0.type == __dep_export_CollectableEnum.CollectableEnum.C2 ? this.costC2 : this.costs.getAmountOrDefaultByTypeVO(__s102param0));
    return Math.round(__s102local2 * __s102local1);
  };
  ToolUnitVO.prototype.getBoostedRecruitmentTime = function (__s104param0 = 1) {
    var __s104local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType);
    var __s104local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId);
    var __s104local2 = __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST;
    var __s104local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__s104local2, this.wodId).getValueforWodId(this.wodId));
    __s104local3 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__s104local2, __s104local0, __s104local1, this.wodId).getValueforWodId(this.wodId));
    __s104local3 += __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST));
    var __s104local4 = __dep_exact_f855840627e6e145.int(this.getBaseRecruitmentTime());
    var __s104local5 = __dep_export_CastleModel.CastleModel.militaryData.getBuildingProductionSpeed(this.unitBuildingType) + __s104local3;
    var __s104local6 = Math.round(__s104local4 / (__s104local5 / 100));
    return __dep_exact_f855840627e6e145.int(this.getPremiumBoostedTime(__s104local5, __s104local4, __s104param0, __s104local6, 0));
  };
  Object.defineProperty(ToolUnitVO.prototype, "isRecruitTimeSubscriptionBuffed", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST) > 0;
    },
    set: function (__s108param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "isRecruitTimeSubscriptionBuffed").set.call(this, __s108param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "applyFestival", {
    get: function () {
      return false;
    },
    set: function (__s112param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "applyFestival").set.call(this, __s112param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "applyInstructor", {
    get: function () {
      return false;
    },
    set: function (__s116param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "applyInstructor").set.call(this, __s116param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "hasPremiumBoostedTime", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.isInPeaceMode;
    },
    set: function (__s120param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicUnitVO.BasicUnitVO.prototype, "hasPremiumBoostedTime").set.call(this, __s120param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "effects", {
    get: function () {
      if (!this._effects) {
        this.parseEffects();
      }
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.prototype.getEffectValue = function (__s125param0, __s125param1 = null) {
    if (__s125param1 == null) {
      __s125param1 = __dep_export_CastleEffectConditionVO.CastleEffectConditionVO.NULL_CONDITION;
    }
    var __s125local0 = new __s125param0.valueClass();
    if (this.effects.length > 0) {
      this._effects.forEach(function (__s129param0) {
        if (__s129param0 && __s129param0.matchesConditions(__s125param0, __s125param1.areaType, __s125param1.spaceId, __s125param1.wodId, __s125param1.otherPlayer)) {
          __s125local0.add(__s129param0.effectValue, null);
        }
      });
    }
    return __s125local0;
  };
  ToolUnitVO.prototype.parseEffects = function () {
    this._effects = [];
    if (!ToolUnitVO.effectMappingCreated) {
      ToolUnitVO.createEffectMapping();
    }
    if (this._effectsString != "") {
      for (var __s132local0 = 0, __s132local1 = this._effectsString.split(","); __s132local0 < __s132local1.length; __s132local0++) {
        var __s132local2 = __s132local1[__s132local0];
        if (__s132local2.length > 0) {
          var __s132local3 = __s132local2.split("&");
          var __s132local4 = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(parseInt(__s132local3[0]));
          var __s132local5 = new __dep_export_BonusVO.BonusVO().parseFromValueString(__s132local4, __s132local3[1]);
          this._effects.push(__s132local5);
        }
      }
    }
  };
  ToolUnitVO.createEffectMapping = function () {
    ToolUnitVO.effectMappingCreated = true;
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_UNIT_AMOUNT_WALL);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BONUS);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BOOST_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.ATTACK_BOOST_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.ATTACK_BONUS);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.ADDITIONAL_WAVE);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_MELEE_TROOPS_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.KILL_ATTACKING_MELEE_TROOPS_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_RANGED_TROOPS_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.KILL_ATTACKING_RANGED_TROOPS_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_KILL_ATTACKING_ANY_TROOPS_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.KILL_ATTACKING_ANY_TROOPS_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_MELEE_TROOPS_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.KILL_DEFENDING_MELEE_TROOPS_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_RANGED_TROOPS_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.KILL_DEFENDING_RANGED_TROOPS_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_KILL_DEFENDING_ANY_TROOPS_YARD.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.KILL_DEFENDING_ANY_TROOPS_YARD);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_INFECTION_RATE_BASE_MALUS.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.EFFECT_TYPE_INFECTION_RATE_BASE_MALUS);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RESERVE_UNIT_KILL.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.RESERVE_UNIT_KILL);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_LEFT.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_LEFT);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_FRONT.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_FRONT);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_RIGHT.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_RIGHT);
    __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RAID_BOSS_WALL_REGENERATION_DELAY_ALL.mapToolEffectType(__dep_export_ToolEffectType.ToolEffectType.RAID_BOSS_WALL_REGENERATION_DELAY_ALL);
  };
  Object.defineProperty(ToolUnitVO.prototype, "isSupportTool", {
    get: function () {
      return this.isOffenseSupportTool || this.isDefenceSupportTool;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "isOffenseSupportTool", {
    get: function () {
      return this.slotTypes.indexOf(ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE.toString()) != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "isDefenceSupportTool", {
    get: function () {
      return this.slotTypes.indexOf(ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE.toString()) != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "amountPerWave", {
    get: function () {
      if (this.isOffenseSupportTool) {
        return 1;
      } else {
        return this._amountPerWave;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ToolUnitVO.prototype, "isBoosterTool", {
    get: function () {
      return this.effectTypes.some(function (__s153param0) {
        return __dep_export_ToolEffectType.ToolEffectType.BOOSTER_TYPES.indexOf(__s153param0) > -1;
      });
    },
    enumerable: true,
    configurable: true
  });
  ToolUnitVO.SLOTTYPE_SOLDIER = 0;
  ToolUnitVO.SLOTTYPE_TOOL_WALL = 1;
  ToolUnitVO.SLOTTYPE_TOOL_GATE = 2;
  ToolUnitVO.SLOTTYPE_TOOL_MOAT = 4;
  ToolUnitVO.SLOTTYPE_TOOL_KEEP = 5;
  ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_DEFENSE = 6;
  ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE = 10;
  ToolUnitVO.ALL_EFFECTS = -1;
  ToolUnitVO.effectMappingCreated = false;
  return ToolUnitVO;
}(__dep_export_BasicUnitVO.BasicUnitVO);
exports.ToolUnitVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
