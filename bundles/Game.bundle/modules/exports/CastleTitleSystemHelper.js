Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTitleSystemHelper() {}
  CastleTitleSystemHelper.setTitleSystemIcon = function (__s5param0, __s5param1, __s5param2) {
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s5param0);
    if (__dep_export_ClientConstTitle.ClientConstTitle.VALID_TITLE_SYSTEMS.indexOf(__s5param1) != -1) {
      var __s5local0 = "TitleSystemIcon_" + __s5param1;
      var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s5local0), null, 0, false);
      var __s5local2 = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(__s5param2.x, __s5param2.y);
      __s5local2.clipSizeChanged.add(CastleTitleSystemHelper.onClipSizeChanged);
      __s5local1.clipSizeComponent = __s5local2;
      __s5param0.addChild(__s5local1.asDisplayObject());
      __s5param0.toolTipText = CastleTitleSystemHelper.getTitleSystemTextID(__s5param1);
      __s5param0.mouseChildren = false;
    }
  };
  CastleTitleSystemHelper.onClipSizeChanged = function (__s8param0) {
    var __s8local0 = __s8param0.asDisplayObject();
    __s8local0.x = __s8param0.clipSizeComponent.offsetX;
    __s8local0.y = __s8param0.clipSizeComponent.offsetY;
  };
  CastleTitleSystemHelper.getTitleSystemTextID = function (__s10param0, __s10param1 = true) {
    var __s10local0 = __s10param1 ? "_plural" : "_singular";
    var __s10local1 = "";
    switch (__s10param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        __s10local1 = __dep_export_ClientConstTitle.ClientConstTitle.SYSTEM_GLORY_TEXT;
        break;
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        __s10local1 = __dep_export_ClientConstTitle.ClientConstTitle.SYSTEM_FACTION_TEXT;
        break;
      case __dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE:
        __s10local1 = __dep_export_ClientConstTitle.ClientConstTitle.SYSTEM_ISLAND_TEXT;
    }
    return __s10local1 + __s10local0;
  };
  CastleTitleSystemHelper.getTitleSystemPointsTextID = function (__s13param0) {
    switch (__s13param0) {
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return "dialog_fame_fame";
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return "dialog_berimond_nobilityPoints";
    }
    return "";
  };
  CastleTitleSystemHelper.isIslandKing = function (__s16param0) {
    return !!__s16param0.playerPrefix && !!__s16param0.playerPrefix.boni && __s16param0.playerPrefix.isKing || !!__s16param0.playerSuffix && !!__s16param0.playerSuffix.boni && __s16param0.playerSuffix.isKing;
  };
  CastleTitleSystemHelper.getAttackBoost = function (__s18param0, __s18param1, __s18param2) {
    return __dep_exact_f855840627e6e145.int(CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS, -1, __s18param1, __s18param2).strength);
  };
  CastleTitleSystemHelper.returnTitleEffectValues = function (__s20param0, __s20param1 = -1, __s20param2 = -1, __s20param3 = -1) {
    var __s20local0 = new __s20param0[0].valueClass();
    if (__s20param0 != null) {
      for (var __s20local1 = 0, __s20local2 = __s20param0; __s20local1 < __s20local2.length; __s20local1++) {
        var __s20local3 = __s20local2[__s20local1];
        if (__s20local3 !== undefined) {
          __s20local0.add(CastleTitleSystemHelper.returnTitleEffectValue(__s20local3, __s20param1, __s20param2, __s20param3), null);
        }
      }
    }
    return __s20local0;
  };
  CastleTitleSystemHelper.returnTitleEffectValue = function (__s26param0, __s26param1 = -1, __s26param2 = -1, __s26param3 = -1) {
    var __s26local0 = new __s26param0.valueClass();
    if (__dep_exact_26a421b704832cff_1.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(__s26param3) > -1) {
      return __s26local0;
    } else {
      return (__s26local0 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.returnTitleEffectsByType(__s26param0, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(__s26param2, __s26param3, __s26param1)), true)) || new __s26param0.valueClass();
    }
  };
  CastleTitleSystemHelper.returnTitleEffectsByType = function (__s30param0, __s30param1 = null) {
    __s30param1 = __s30param1 || new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO();
    if (__dep_exact_26a421b704832cff_1.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(__s30param1.spaceId) > -1) {
      return [];
    }
    var __s30local0 = [];
    __dep_export_CastleModel.CastleModel.titleData.thisUsersTitles.forEach(function (__s33param0) {
      if (__s33param0.hasEffects()) {
        var __s33local0 = __s33param0.getBonusVOByEffectType(__s30param0);
        if (__s33local0 && __s33local0.matchesConditions(__s30param0, __s30param1.areaType, __s30param1.spaceId, __s30param1.wodId, __s30param1.otherPlayer)) {
          __s30local0.push(__s33local0);
        }
      }
    });
    return __s30local0;
  };
  CastleTitleSystemHelper.isWodIdUnlocked = function (__s37param0) {
    for (var __s37local0 = 0, __s37local1 = __dep_export_CastleModel.CastleModel.titleData.thisUsersTitles; __s37local0 < __s37local1.length; __s37local0++) {
      var __s37local2 = __s37local1[__s37local0];
      if (__s37local2 !== undefined) {
        for (var __s37local3 = 0, __s37local4 = __s37local2.boni; __s37local3 < __s37local4.length; __s37local3++) {
          var __s37local5 = __s37local4[__s37local3];
          if (__s37local5 !== undefined) {
            if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s37local5.effectValue, "EffectValueWodID")) {
              if (__s37local5.effectValue.hasWodId(__s37param0)) {
                return true;
              }
            } else if (__s37local5.strength == __s37param0) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo = function (__s48param0) {
    if (__s48param0.playerPrefix && __s48param0.playerSuffix && __s48param0.playerPrefix != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE && __s48param0.playerSuffix != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
      var __s48local0 = "";
      if (CastleTitleSystemHelper.needsJapaneseSuffixSuffix) {
        __s48local0 = "_jap";
        if (__s48param0.playerPrefix.isKing) {
          __s48local0 += "_stormlord";
        }
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text("playerTitle_composition_prefix_suffix", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s48param0.playerPrefix.textID), new __dep_exact_92d05af59ee2ff30_2.TextVO(__s48param0.playerName), new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s48param0.playerSuffix.textID + __s48local0)]);
    }
    if (__s48param0.playerPrefix && __s48param0.playerPrefix != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("playerTitle_composition_prefix", [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s48param0.playerPrefix.textID), new __dep_exact_92d05af59ee2ff30_2.TextVO(__s48param0.playerName)]);
    } else {
      return __s48param0.playerName;
    }
  };
  Object.defineProperty(CastleTitleSystemHelper, "needsJapaneseSuffixSuffix", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.GGSCountryController.instance.currentCountry.ggsLanguageCode == __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_JAPANESE || __dep_exact_9e901e8e2483a22f_3.GGSCountryController.instance.currentCountry.ggsLanguageCode == __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_CHINESE_SIMPLE || __dep_exact_9e901e8e2483a22f_3.GGSCountryController.instance.currentCountry.ggsLanguageCode == __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_CHINESE_TRADITIONAL;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSystemHelper.getTitleRewardText = function (__s57param0) {
    if (__s57param0.rewardID > -1) {
      var __s57local0 = "";
      for (var __s57local1 = 0, __s57local2 = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s57param0.rewardID).list; __s57local1 < __s57local2.length; __s57local1++) {
        var __s57local3 = __s57local2[__s57local1];
        if (__s57local3 !== undefined) {
          if (__s57local0 != "") {
            __s57local0 += " ";
          }
          __s57local0 += __dep_exact_92d05af59ee2ff30.Localize.text("generic_amount_reward", [__s57local3.amount, __s57local3.getTooltipTextId()]);
        }
      }
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s57local0);
    }
    if (__s57param0.boni) {
      var __s57local4;
      var __s57local5 = __s57param0.boni;
      if (__s57param0.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST])) {
        __s57local4 = __s57param0.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST]);
        var __s57local6 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s57local4.effectValue.firstWodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardRecruitementSpeedBoost", [__s57local4.strength, __s57local6.getNameString()]);
      }
      if (__s57param0.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE])) {
        __s57local4 = __s57param0.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE]);
        var __s57local7 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s57local4.effectValue.firstWodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rewardBoost", [__s57local4.strength, __dep_exact_92d05af59ee2ff30.Localize.text(__s57local7.getNameString())]);
      }
      if (__s57param0.hasAllEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST])) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eiland_fameLoot_malus", [__s57param0.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST]).strength]);
      }
      if (__s57local5 != null) {
        for (var __s57local8 = 0, __s57local9 = __s57local5; __s57local8 < __s57local9.length; __s57local8++) {
          var __s57local10 = __s57local9[__s57local8];
          if (__s57local10 !== undefined) {
            var __s57local11 = __s57local10.effect;
            switch (__s57local10.effect.effectTypeID) {
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardAttackIncreaseYard", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BOOST_YARD).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eiland_publicOrder_malus", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eiland_spy_bonus", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardToolProductionSpeedBoost", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS.id:
                var __s57local12 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s57local10.strength, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rewardUnlockUnit", [__s57local12.getNameString()]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardUnitAmountIncreaseFlank", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FLANK).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardUnitAmountIncreaseFront", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_UNIT_AMOUNT_FRONT).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FACTION_POINT_GAIN_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardNobilityBoost", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FACTION_POINT_GAIN_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MORALE_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardMoralBoost", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MORALE_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardLootBoost", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_LOOT_BONUS).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_reward_C1Bonus", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rewardFameBoost", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_FAME_GAIN_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_AllyFameBoost_desc", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_FAME_GAIN_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUXILIARY_CAPACITY_BOOST.id:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardAuxiliaryCapacity", [__s57param0.getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_AUXILIARY_CAPACITY_BOOST).strength]);
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS.id:
                if (__s57local10.effect.spaceIDs.length > 0 && __s57local10.effect.spaceIDs[0] == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardMovementBoost", [__s57local10.strength]);
                } else {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rewardMovementBoost", [__s57local10.strength]);
                }
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST.id:
                if (__s57local11.areaTypes.length == 1 && __s57local11.areaTypes[0] == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardFoodBoostKingdoms", [__s57local10.strength]);
                } else if (__s57local11.spaceIDs.length == 1 && __s57local11.spaceIDs[0] == __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID) {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nobility_rewardFoodBoostMainKingdom", [__s57local10.strength]);
                } else {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_eiland_foodProduction_bonus", [__s57local10.strength]);
                }
              case __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.id:
                if (__s57local11.effectID == CastleTitleSystemHelper.EFFECT_ATTACK_BONUS) {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rewardAttackBoost", [__s57local10.strength]);
                } else if (__s57local11.effectID == CastleTitleSystemHelper.EFFECT_ATTACK_BONUS_PVP) {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fame_rewardAttackBoostPvp", [__s57local10.strength]);
                } else {
                  return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s57local10.effect.defaultTextID, [__s57local10.strength]);
                }
              default:
                return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s57local10.effect.defaultTextID, [__s57local10.strength]);
            }
          }
        }
      }
    }
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("-");
  };
  CastleTitleSystemHelper.getSingleMoreImportantTitle = function (__s81param0) {
    if (__s81param0.playerSuffix != null && __s81param0.playerSuffix != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s81param0.playerSuffix.textID);
    } else if (__s81param0.playerPrefix != null && __s81param0.playerPrefix != __dep_export_CastleTitleData.CastleTitleData.NULL_TITLE) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s81param0.playerPrefix.textID);
    } else {
      return __s81param0.playerName;
    }
  };
  CastleTitleSystemHelper.getSummedEffectValueFromTitles = function (__s86param0, __s86param1) {
    var __s86local0 = 0;
    if (__s86param0 != null) {
      for (var __s86local1 = 0, __s86local2 = __s86param0; __s86local1 < __s86local2.length; __s86local1++) {
        var __s86local3 = __s86local2[__s86local1];
        if (__s86local3 !== undefined) {
          __s86local0 += __s86local3.getEffectValueByType(__s86param1).strength;
        }
      }
    }
    return __s86local0;
  };
  CastleTitleSystemHelper.EFFECT_ATTACK_BONUS_PVP = 47;
  CastleTitleSystemHelper.EFFECT_ATTACK_BONUS = 48;
  return CastleTitleSystemHelper;
}();
exports.CastleTitleSystemHelper = __s0local0;
var __dep_export_CastleTitleData = require("gge-module:export_CastleTitleData");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
