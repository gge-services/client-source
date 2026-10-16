Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function AdvancedTroopSelectionToolStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AdvancedTroopSelectionToolStrategy, __s1param0);
  AdvancedTroopSelectionToolStrategy.prototype.changeAmount = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__s5param1 - __s5param2.getTotalAmountOfUntit(__s5param0));
    if (__s5local0 >= 0) {
      if (this.getFreeAndSameSlots(__s5param0, __s5param3).length > 0) {
        var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param1 - __s5param2.getTotalAmountOfUntit(__s5param0));
        if ((__s5local1 = __dep_exact_f855840627e6e145.int(this.addUnits(__s5param0, __s5local1, __s5param2, this.getSameSlots(__s5param0, __s5param3), __s5param4))) > 0 && (__s5local1 = __dep_exact_f855840627e6e145.int(this.addUnits(__s5param0, __s5local1, __s5param2, this.getFreeSlots(__s5param0, __s5param3), __s5param4))) > 0) {
          this.exchangeWithExchangeable(__s5param0, __s5local1, __s5param2, this.getExchangeableSlots(__s5param0, __s5param3), __s5param4);
        }
      } else {
        this.exchangeWithExchangeable(__s5param0, __s5param1, __s5param2, this.getExchangeableSlots(__s5param0, __s5param3), __s5param4);
      }
    } else {
      this.deductUnits(__s5local0, __s5param0, __s5param1, __s5param3, __s5param4);
    }
  };
  AdvancedTroopSelectionToolStrategy.prototype.exchangeWithExchangeable = function (__s12param0, __s12param1, __s12param2, __s12param3, __s12param4) {
    for (var __s12local0 = __s12param1; __s12local0 > 0;) {
      var __s12local1 = __dep_exact_f855840627e6e145.int(Math.min(__s12local0, __dep_exact_26a421b704832cff.TravelConst.MAX_TOOLS_PER_SLOT));
      __s12local0 -= __s12local1;
      var __s12local2 = __s12param3.pop();
      var __s12local3 = __s12param2.getAllSlotsWithUnit(__s12local2.unitVO);
      __s12local3.splice(__s12local3.indexOf(__s12local2), 1);
      var __s12local4;
      var __s12local5 = __s12local2.getAmount();
      for (__s12local2.unitVO = null; __s12local5 > 0 && __s12local3.length != 0;) {
        __s12local4 = __s12local3.shift();
        var __s12local6 = __dep_exact_f855840627e6e145.int(Math.min(__dep_exact_26a421b704832cff.TravelConst.MAX_TOOLS_PER_SLOT - __s12local4.getAmount(), __s12local5));
        __s12local5 -= __s12local6;
        __s12local4.unitVO.inventoryAmount = __s12local4.getAmount() + __s12local6;
      }
      __s12param4(__s12param0, __s12local2, __s12local1);
    }
  };
  AdvancedTroopSelectionToolStrategy.prototype.addUnits = function (__s18param0, __s18param1, __s18param2, __s18param3, __s18param4) {
    var __s18local0;
    for (var __s18local1 = __s18param1, __s18local2 = 0; __s18local1 > 0 && __s18param3.length != 0;) {
      __s18local1 -= __s18local2 = (__s18local0 = __s18param3.shift()).isFree() ? __dep_exact_f855840627e6e145.int(Math.min(__dep_exact_26a421b704832cff.TravelConst.MAX_TOOLS_PER_SLOT, __s18local1)) : __dep_exact_f855840627e6e145.int(Math.min(__dep_exact_26a421b704832cff.TravelConst.MAX_TOOLS_PER_SLOT - __s18local0.getAmount(), __s18local1));
      __s18param4(__s18param0, __s18local0, __s18local0.getAmount() + __s18local2);
    }
    return __s18local1;
  };
  AdvancedTroopSelectionToolStrategy.prototype.deductUnits = function (__s22param0, __s22param1, __s22param2, __s22param3, __s22param4) {
    var __s22local0 = __s22param0;
    for (var __s22local1 = __dep_exact_f855840627e6e145.int(__s22param3.length - 1); __s22local1 >= 0; __s22local1--) {
      var __s22local2 = __s22param3[__s22local1];
      if (!__s22local2.isFree() && __s22local2.getWodId() == __s22param1.wodId) {
        var __s22local3 = __dep_exact_f855840627e6e145.int(Math.min(__s22local2.getAmount(), -__s22local0));
        __s22local0 += __s22local3;
        __s22param4(__s22param1, __s22local2, __s22local2.getAmount() - __s22local3);
        if (__s22local0 >= 0) {
          break;
        }
      }
    }
  };
  return AdvancedTroopSelectionToolStrategy;
}(require("gge-module:export_AdvancedTroopsSelectionStrategyBasics").AdvancedTroopsSelectionStrategyBasics);
exports.AdvancedTroopSelectionToolStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAdvancedTroopSelectionStrategy");
