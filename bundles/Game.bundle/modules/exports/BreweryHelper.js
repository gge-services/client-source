Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __s0local0 = function () {
  function BreweryHelper() {}
  BreweryHelper.getOverseerBoost = function () {
    if (__dep_export_CastleModel.CastleModel.boostData.overseerMeadVO.isActive) {
      return __dep_export_CastleModel.CastleModel.boostData.overseerMeadVO.bonusValue;
    } else {
      return 0;
    }
  };
  BreweryHelper.getBuildingBoost = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isoData.objects.provider.getFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.BARREL_WORKSHOP);
    var __s9local1 = __s9local0 ? __s9local0.meadBoost : 0;
    return __s9local1 += __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getBuildingBonus = function () {
    var __s11local0 = 0;
    return __s11local0 += __dep_export_CastleModel.CastleModel.areaData.activeConstructionList.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCIBaseBonus = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_INCREASE, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCIBonus = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCIBoost = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeConstructionItems.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getCrestBoost = function () {
    return __dep_export_CastleModel.CastleModel.userData.playerCrest.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO()).strength;
  };
  BreweryHelper.getAllianceLayoutBonus = function () {
    if (!__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      return 0;
    }
    var __s21local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.getLayoutEffectsByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION);
    if (__s21local0.length == 0) {
      return 0;
    } else {
      return __s21local0[0].strength;
    }
  };
  BreweryHelper.getBaronBonus = function () {
    var __s26local0 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleId(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId);
    if (__s26local0) {
      return __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s26local0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType).strength;
    } else {
      return 0;
    }
  };
  BreweryHelper.getBaronBoost = function () {
    var __s30local0 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleId(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId);
    if (__s30local0) {
      return __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s30local0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType).strength;
    } else {
      return 0;
    }
  };
  BreweryHelper.getResearchBoost = function () {
    return __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_BOOST).strength;
  };
  BreweryHelper.getTotalBonus = function () {
    return BreweryHelper.getCIBonus() + BreweryHelper.getBaronBonus() + BreweryHelper.getBuildingBonus() + BreweryHelper.getAllianceLayoutBonus();
  };
  BreweryHelper.getTotalBoost = function () {
    var __s38local0 = 1 + (BreweryHelper.getOverseerBoost() + BreweryHelper.getBuildingBoost() + BreweryHelper.getCIBoost() + BreweryHelper.getCrestBoost() + BreweryHelper.getBaronBoost() + BreweryHelper.getResearchBoost()) / 100;
    var __s38local1 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor();
    return __dep_exact_26a421b704832cff.ResourceConst.getCombinedProductionModifier(__s38local0, __s38local1, 1);
  };
  return BreweryHelper;
}();
exports.BreweryHelper = __s0local0;
