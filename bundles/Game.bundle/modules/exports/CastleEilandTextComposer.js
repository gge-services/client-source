Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleEilandTextComposer() {}
  CastleEilandTextComposer.generateBonusText = function (__s5param0, __s5param1 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE)) {
    var __s5local0 = "";
    for (var __s5local1 = CastleEilandTextComposer.generateCompleteBonusList(__s5param0), __s5local2 = 0; __s5local2 < __s5local1.length; __s5local2++) {
      __s5local0 += __s5local1[__s5local2];
      if (__s5local2 < __s5local1.length - 1) {
        __s5local0 += "\n";
      }
      if (__s5local2 > __s5param1 - 1) {
        __s5local0 += CastleEilandTextComposer.getTranslatedText("dialog_VipBonus_andMoreBonus");
        break;
      }
    }
    return __s5local0;
  };
  CastleEilandTextComposer.generateCompleteBonusList = function (__s11param0) {
    var __s11local0 = [];
    if (__s11param0.hasAllEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST])) {
      CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_fameLoot_malus", __s11param0.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_FAME_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENEMY_LOOT_BOOST]).strength));
    }
    if (__s11param0.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL], true)) {
      CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_recruitCost_malus", __s11param0.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL]).strength));
    }
    if (__s11param0.hasOneOrMoreEffectTypes([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL])) {
      CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_recruitBuildspeed_bonus", __s11param0.getBoniVOByFirstFoundEffectType([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL]).strength));
    }
    for (var __s11local1 = 0, __s11local2 = __s11param0.boni; __s11local1 < __s11local2.length; __s11local1++) {
      var __s11local3 = __s11local2[__s11local1];
      if (__s11local3 !== undefined) {
        if (__s11local3.effect.effectTypeID == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FOOD_PRODUCTION_BOOST.id) {
          CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_foodProduction_bonus", __s11local3.strength));
        }
        if (__s11local3.effect.effectTypeID == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS.id) {
          CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_attack_bonus", __s11local3.strength));
        }
        if (__s11local3.effect.effectTypeID == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST.id && __s11local3.strength < 0) {
          CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_publicOrder_malus", __s11local3.strength));
        }
        if (__s11local3.effect.effectTypeID == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS.id && __s11local3.strength < 0) {
          CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_armyBoost_malus", __s11local3.strength));
        }
        if (__s11local3.effect.effectTypeID == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST.id) {
          CastleEilandTextComposer.pushIfNotEmpty(__s11local0, CastleEilandTextComposer.getTranslatedText("dialog_eiland_spy_bonus", __s11local3.strength));
        }
      }
    }
    return __s11local0;
  };
  CastleEilandTextComposer.pushIfNotEmpty = function (__s24param0, __s24param1) {
    if (__s24param1 != null && __s24param1 != "") {
      __s24param0.push(__s24param1);
    }
  };
  CastleEilandTextComposer.getTranslatedText = function (__s27param0, __s27param1 = 0) {
    if (__s27param1 == 0) {
      return null;
    }
    var __s27local0 = Math.abs(__s27param1);
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s27param0, [__s27local0]);
  };
  return CastleEilandTextComposer;
}();
exports.CastleEilandTextComposer = __s0local0;
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
