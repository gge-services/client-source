Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function ReduceMeleeBonusStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ReduceMeleeBonusStrategy, __s1param0);
  ReduceMeleeBonusStrategy.prototype.getRelevantToolBonus = function (__s5param0) {
    return __s5param0.defMeleeBonus + this.getConditionedEffectBonus(__s5param0, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_DEFENSE_MALUS);
  };
  ReduceMeleeBonusStrategy.prototype.getRelevantDefenderBonus = function (__s7param0, __s7param1) {
    return __s7param1.defenderMeleeBonus - __s7param0.defenderMeleeReduction;
  };
  ReduceMeleeBonusStrategy.prototype.pickToolByStrategy = function (__s9param0, __s9param1, __s9param2, __s9param3, __s9param4, __s9param5, __s9param6, __s9param7) {
    if (__s9param1.hasMeleeDefenders) {
      return __s1param0.prototype.pickToolByStrategy.call(this, __s9param0, __s9param1, __s9param2, __s9param3, __s9param4, __s9param5, __s9param6, __s9param7);
    } else {
      return null;
    }
  };
  return ReduceMeleeBonusStrategy;
}(require("gge-module:export_AReduceDefenseBonusStrategy").AReduceDefenseBonusStrategy);
exports.ReduceMeleeBonusStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillToolSlotStrategy");
