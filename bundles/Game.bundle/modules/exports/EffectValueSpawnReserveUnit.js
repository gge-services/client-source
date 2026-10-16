Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function EffectValueSpawnReserveUnit() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EffectValueSpawnReserveUnit, __s1param0);
  Object.defineProperty(EffectValueSpawnReserveUnit.prototype, "textReplacements", {
    get: function () {
      var __s5local0 = Array.from(this._wodIdToValueDict.values()).reduce(function (__s7param0, __s7param1) {
        return __s7param0 + __s7param1;
      }, 0);
      var __s5local1 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.firstWodID);
      if (__s5local1) {
        return [__s5local0, __s5local1.getNameString()];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueSpawnReserveUnit.prototype, "allTextReplacements", {
    get: function () {
      var __s10local0 = [];
      for (var __s10local1 = 0, __s10local2 = Array.from(this._wodIdToValueDict.entries()); __s10local1 < __s10local2.length; __s10local1++) {
        var __s10local3 = __s10local2[__s10local1];
        var __s10local4 = __s10local3[0];
        var __s10local5 = __s10local3[1];
        var __s10local6 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s10local4);
        if (__s10local6) {
          __s10local0.push([__s10local5, __s10local6.getNameString()]);
        }
      }
      return __s10local0;
    },
    enumerable: true,
    configurable: true
  });
  return EffectValueSpawnReserveUnit;
}(require("gge-module:export_EffectValueWodID").EffectValueWodID);
exports.EffectValueSpawnReserveUnit = __s0local0;
