Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function ReduceGateBonusStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ReduceGateBonusStrategy, __s1param0);
  ReduceGateBonusStrategy.prototype.getRelevantToolBonus = function (__s5param0) {
    return __s5param0.gateBonus;
  };
  ReduceGateBonusStrategy.prototype.getRelevantDefenderBonus = function (__s7param0, __s7param1) {
    return __s7param1.defenderGateBonus - __s7param0.attackerGateReduction;
  };
  return ReduceGateBonusStrategy;
}(require("gge-module:export_AReduceDefenseBonusStrategy").AReduceDefenseBonusStrategy);
exports.ReduceGateBonusStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillToolSlotStrategy");
