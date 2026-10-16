Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleVIPLevelInfoTextComposer() {}
  CastleVIPLevelInfoTextComposer.generateBonusText = function (__s5param0, __s5param1 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE)) {
    var __s5local0 = "";
    for (var __s5local1 = CastleVIPLevelInfoTextComposer.generateCompleteBonusList(__s5param0), __s5local2 = 0; __s5local2 < __s5local1.length; __s5local2++) {
      __s5local0 += __s5local1[__s5local2];
      if (__s5local2 < __s5local1.length - 1) {
        __s5local0 += "\n";
      }
      if (__s5local2 > __s5param1 - 1) {
        __s5local0 += CastleVIPLevelInfoTextComposer.getTranslatedText("dialog_VipBonus_andMoreBonus");
        break;
      }
    }
    return __s5local0;
  };
  CastleVIPLevelInfoTextComposer.generateCompleteBonusList = function (__s11param0) {
    var __s11local0 = [];
    __s11local0.push(CastleVIPLevelInfoTextComposer.getTranslatedText("dialog_VipBonus_premiumBanner_v2"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.WOOD, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.STONE, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.generateResourceBoost(__s11param0, __dep_export_CollectableEnum.CollectableEnum.FOOD, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.bonusLoginKeys, "dialog_VipBonus_additionalLoginbonus_box"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.attackSpeedBonus, "dialog_VipBonus_boostAttackspeed"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.attackFameBonus, "dialog_VipBonus_boostAttackFame"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.taxBonus, "dialog_VipBonus_boostTaxCollector"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.productionBonusSlots, "dialog_VipBonus_freeProductionSlot_singular", "dialog_VipBonus_freeProductionSlot_plural"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.recruitmentBonusSlots, "dialog_VipBonus_freeRecruitmentSlot_singular", "dialog_VipBonus_freeRecruitmentSlot_plural"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.freePremiumCommandersPerDay, "dialog_VipBonus_freePremiumGeneral_singular", "dialog_VipBonus_freePremiumGeneral_plural"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.magicFindBonus, "dialog_VipBonus_magicFindBonus"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.taxCollector12HoursNoRubies ? 1 : 0, "dialog_VipBonus_FreeTaxCollector_12h"));
    CastleVIPLevelInfoTextComposer.pushIfNotEmpty(__s11local0, CastleVIPLevelInfoTextComposer.getBonusText(__s11param0.taxCollector24HoursNoRubies ? 1 : 0, "dialog_VipBonus_FreeTaxCollector_24h"));
    return __s11local0;
  };
  CastleVIPLevelInfoTextComposer.getBonusText = function (__s13param0, __s13param1, __s13param2 = null) {
    if (__s13param0 > 0) {
      if (__s13param2) {
        return CastleVIPLevelInfoTextComposer.getTranslatedText(__dep_export_ClientConstUtils.ClientConstUtils.chooseSingularOrPluralTextID(__s13param0, __s13param1, __s13param2), [__s13param0]);
      } else {
        return CastleVIPLevelInfoTextComposer.getTranslatedText(__s13param1, [__s13param0]);
      }
    } else {
      return null;
    }
  };
  CastleVIPLevelInfoTextComposer.pushIfNotEmpty = function (__s19param0, __s19param1) {
    if (__s19param1 != null && __s19param1 != "") {
      __s19param0.push(__s19param1);
    }
  };
  CastleVIPLevelInfoTextComposer.generateResourceBoost = function (__s22param0, __s22param1, __s22param2) {
    var __s22local0 = __dep_exact_f855840627e6e145.int(__s22param0.getResourceBoostForArea(__s22param1, __s22param2));
    if (__s22local0 > 0) {
      return CastleVIPLevelInfoTextComposer.getTranslatedText(CastleVIPLevelInfoTextComposer.getResBoostTextID(__s22param1, __s22param2), [__s22local0]);
    } else {
      return null;
    }
  };
  CastleVIPLevelInfoTextComposer.getResBoostTextID = function (__s26param0, __s26param1) {
    var __s26local0 = "dialog_VipBonus_boost" + __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s26param0.name) + "Production_";
    switch (__s26param1) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE:
        __s26local0 += "main";
        break;
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST:
        __s26local0 += "AP";
        break;
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE:
        __s26local0 += "kingdoms";
    }
    return __s26local0;
  };
  CastleVIPLevelInfoTextComposer.getTranslatedText = function (__s29param0, __s29param1 = null) {
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s29param0, __s29param1);
  };
  return CastleVIPLevelInfoTextComposer;
}();
exports.CastleVIPLevelInfoTextComposer = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
