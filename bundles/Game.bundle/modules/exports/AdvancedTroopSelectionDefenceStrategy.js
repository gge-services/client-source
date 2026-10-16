Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __s0local0 = function (__s1param0) {
  function AdvancedTroopSelectionDefenceStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvancedTroopSelectionDefenceStrategy, __s1param0);
  AdvancedTroopSelectionDefenceStrategy.prototype.changeAmount = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    if (__dep_exact_f855840627e6e145.int(__s5param1 - __s5param2.getTotalAmountOfUntit(__s5param0)) >= 0) {
      if (this.getFreeAndSameSlots(__s5param0, __s5param3).length > 0) {
        this.changeUnits(__s5param0, __s5param1, this.getFreeAndSameSlots(__s5param0, __s5param3), __s5param4);
      } else {
        this.exchangeWithExchangeable(__s5param0, __s5param1, __s5param2, this.getExchangeableSlots(__s5param0, __s5param3), __s5param4);
      }
    } else {
      this.changeUnits(__s5param0, __s5param1, this.getSameSlots(__s5param0, __s5param3), __s5param4);
    }
  };
  AdvancedTroopSelectionDefenceStrategy.prototype.exchangeWithExchangeable = function (__s11param0, __s11param1, __s11param2, __s11param3, __s11param4) {
    if (__s11param3 && !(__s11param3.length <= 0)) {
      var __s11local0 = __s11param3[__s11param3.length - 1];
      var __s11local1 = __s11param2.getAllSlotsWithUnit(__s11local0.unitVO);
      var __s11local2 = (__s11local0 = __s11local1.pop()).getAmount();
      __s11local0.unitVO = null;
      var __s11local3 = __dep_exact_f855840627e6e145.int(__s11local2 / __s11local1.length);
      var __s11local4 = __dep_exact_f855840627e6e145.int(__s11local2 % __s11local1.length);
      for (var __s11local5 = __dep_exact_f855840627e6e145.int(__s11local1.length - 1); __s11local5 >= 0; __s11local5--) {
        var __s11local6 = __s11local1[__s11local5];
        __s11local6.unitVO.inventoryAmount += __s11local3 + (__s11local4 > 0 ? 1 : 0);
        __s11local6.outline = __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE);
        __s11local4--;
      }
      __s11param4(__s11param0, __s11local0, __s11param1);
    }
  };
  AdvancedTroopSelectionDefenceStrategy.prototype.changeUnits = function (__s16param0, __s16param1, __s16param2, __s16param3) {
    var __s16local0 = __dep_exact_f855840627e6e145.int(__s16param1 / __s16param2.length);
    var __s16local1 = __dep_exact_f855840627e6e145.int(__s16param1 % __s16param2.length);
    if (__s16param2 != null) {
      for (var __s16local2 = 0, __s16local3 = __s16param2; __s16local2 < __s16local3.length; __s16local2++) {
        var __s16local4 = __s16local3[__s16local2];
        if (__s16local4 !== undefined) {
          var __s16local5 = __s16local0 + (__s16local1 > 0 ? 1 : 0);
          __s16local1--;
          __s16param3(__s16param0, __s16local4, __s16local5);
        }
      }
    }
  };
  return AdvancedTroopSelectionDefenceStrategy;
}(require("gge-module:export_AdvancedTroopsSelectionStrategyBasics").AdvancedTroopsSelectionStrategyBasics);
exports.AdvancedTroopSelectionDefenceStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAdvancedTroopSelectionStrategy");
