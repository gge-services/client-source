Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __s0local0 = function (__s1param0) {
  function AdvancedTroopSelectionDefaultStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvancedTroopSelectionDefaultStrategy, __s1param0);
  AdvancedTroopSelectionDefaultStrategy.prototype.changeAmount = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param1 - __s5param2.getTotalAmountOfUntit(__s5param0));
    if (__s5local0 >= 0) {
      if (this.getFreeAndSameSlots(__s5param0, __s5param3).length > 0) {
        this.addUnits(__s5param0, __s5param1, __s5param2, __s5param3, __s5param4);
      } else {
        this.exchangeWithExchangeable(__s5param0, __s5param1, __s5param2, this.getExchangeableSlots(__s5param0, __s5param3), __s5param4);
      }
    } else {
      this.deductUnits(__s5local0, __s5param0, __s5param1, __s5param3, __s5param4);
    }
  };
  AdvancedTroopSelectionDefaultStrategy.prototype.exchangeWithExchangeable = function (__s11param0, __s11param1, __s11param2, __s11param3, __s11param4) {
    var __s11local0 = __s11param3[__s11param3.length - 1];
    if (__s11local0) {
      var __s11local1 = __s11param2.getFirstSlotWithUnit(__s11local0.unitVO);
      __s11local1.unitVO.inventoryAmount += __s11local0.getAmount();
      __s11local1.outline = __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE);
      __s11local0.unitVO = null;
      __s11param4(__s11param0, __s11local0, __s11param1);
    }
  };
  AdvancedTroopSelectionDefaultStrategy.prototype.addUnits = function (__s14param0, __s14param1, __s14param2, __s14param3, __s14param4) {
    var __s14local0;
    var __s14local1 = false;
    for (var __s14local2 = 0; __s14local2 < __s14param3.length; __s14local2++) {
      var __s14local3 = __s14param3[__s14local2];
      if (__s14local3.getWodId() == __s14param0.wodId) {
        __s14local0 = __s14local3;
        break;
      }
      if (!__s14local1 && __s14local3.isFree()) {
        __s14local1 = true;
        __s14local0 = __s14local3;
      }
    }
    __s14param4(__s14param0, __s14local0, __dep_exact_f855840627e6e145.int(__s14param1 - (__s14param2.getTotalAmountOfUntit(__s14param0) - __s14local0.getAmount())));
  };
  AdvancedTroopSelectionDefaultStrategy.prototype.deductUnits = function (__s20param0, __s20param1, __s20param2, __s20param3, __s20param4) {
    var __s20local0 = __s20param0;
    for (var __s20local1 = __dep_exact_f855840627e6e145.int(__s20param3.length - 1); __s20local1 >= 0; __s20local1--) {
      var __s20local2 = __s20param3[__s20local1];
      if (!__s20local2.isFree() && __s20local2.getWodId() == __s20param1.wodId) {
        var __s20local3 = __dep_exact_f855840627e6e145.int(Math.min(__s20local2.getAmount(), -__s20local0));
        __s20local0 += __s20local3;
        __s20param4(__s20param1, __s20local2, __s20local2.getAmount() - __s20local3);
        if (__s20local0 >= 0) {
          break;
        }
      }
    }
  };
  return AdvancedTroopSelectionDefaultStrategy;
}(require("gge-module:export_AdvancedTroopsSelectionStrategyBasics").AdvancedTroopsSelectionStrategyBasics);
exports.AdvancedTroopSelectionDefaultStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAdvancedTroopSelectionStrategy");
