Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function LordEffectFilterStrategyDefencePVP() {}
  LordEffectFilterStrategyDefencePVP.prototype.isGroupActive = function (__s5param0, __s5param1) {
    return true;
  };
  LordEffectFilterStrategyDefencePVP.prototype.getExcludedEffectTypes = function () {
    return [];
  };
  LordEffectFilterStrategyDefencePVP.prototype.isEffectTypeIncluded = function (__s9param0) {
    return this.getExcludedEffectTypes().indexOf(__s9param0.type) === -1 && __s9param0.effectCategory != 7;
  };
  return LordEffectFilterStrategyDefencePVP;
}();
exports.LordEffectFilterStrategyDefencePVP = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ILordEffectFilterStrategy");
