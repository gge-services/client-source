Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function () {
  function LordEffectFilterStrategySupport() {}
  LordEffectFilterStrategySupport.prototype.isGroupActive = function (__s5param0, __s5param1) {
    return __s5param0 == 5 && (__s5param1 == 1 || __s5param1 == 2) || __s5param0 == 6 && __s5param1 == 1;
  };
  LordEffectFilterStrategySupport.prototype.getExcludedEffectTypes = function () {
    return [__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STATIONING_SPEED_BONUS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_STATIONING_TRAVEL_COST_REDUCTION, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST_PVP, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS_PVP, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_COST_REDUCTION_PVP];
  };
  LordEffectFilterStrategySupport.prototype.isEffectTypeIncluded = function (__s9param0) {
    return this.getExcludedEffectTypes().indexOf(__s9param0.type) === -1 && __s9param0.effectCategory != 7;
  };
  return LordEffectFilterStrategySupport;
}();
exports.LordEffectFilterStrategySupport = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectFilterStrategy");
