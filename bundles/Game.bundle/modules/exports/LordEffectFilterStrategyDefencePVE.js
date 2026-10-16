Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function () {
  function LordEffectFilterStrategyDefencePVE() {}
  LordEffectFilterStrategyDefencePVE.prototype.isGroupActive = function (__s5param0, __s5param1) {
    return true;
  };
  LordEffectFilterStrategyDefencePVE.prototype.getExcludedEffectTypes = function () {
    return [__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_WALL_P_V_P];
  };
  LordEffectFilterStrategyDefencePVE.prototype.isEffectTypeIncluded = function (__s9param0) {
    return this.getExcludedEffectTypes().indexOf(__s9param0.type) === -1 && __s9param0.effectCategory != 7;
  };
  return LordEffectFilterStrategyDefencePVE;
}();
exports.LordEffectFilterStrategyDefencePVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectFilterStrategy");
