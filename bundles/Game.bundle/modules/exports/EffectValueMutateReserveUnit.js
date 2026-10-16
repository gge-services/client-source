Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function EffectValueMutateReserveUnit() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EffectValueMutateReserveUnit, __s1param0);
  Object.defineProperty(EffectValueMutateReserveUnit.prototype, "textReplacements", {
    get: function () {
      var __s5local0 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.firstWodID);
      if (__s5local0) {
        var __s5local1 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s5local0.upgradeWodID);
        if (__s5local1) {
          return [this._wodIdToValueDict.get(this.firstWodID), __s5local0.getNameString(), __s5local1.getNameString()];
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  return EffectValueMutateReserveUnit;
}(require("gge-module:export_EffectValueWodID").EffectValueWodID);
exports.EffectValueMutateReserveUnit = __s0local0;
