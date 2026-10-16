Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function LordEffectFilterStrategyAttackPVE() {}
  LordEffectFilterStrategyAttackPVE.prototype.isGroupActive = function (__s5param0, __s5param1) {
    return true;
  };
  LordEffectFilterStrategyAttackPVE.prototype.getExcludedEffectTypes = function () {
    return [__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SUPPORT_TRAVEL_COST_REDUCTION, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD];
  };
  LordEffectFilterStrategyAttackPVE.prototype.isEffectTypeIncluded = function (__s9param0) {
    return this.getExcludedEffectTypes().indexOf(__s9param0.type) === -1 && __s9param0.effectCategory != 7;
  };
  return LordEffectFilterStrategyAttackPVE;
}();
exports.LordEffectFilterStrategyAttackPVE = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectFilterStrategy");
