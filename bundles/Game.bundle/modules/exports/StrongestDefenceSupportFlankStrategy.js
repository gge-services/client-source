Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function StrongestDefenceSupportFlankStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StrongestDefenceSupportFlankStrategy, __s1param0);
  StrongestDefenceSupportFlankStrategy.prototype.pickSoldierStack = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0 = 0;
    var __s5local1 = 0;
    var __s5local2 = __s5param3.getSoldiers();
    if (__s5local2 != null) {
      for (var __s5local3 = 0, __s5local4 = __s5local2; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined && (__s5local5.fightType == __dep_export_BasicUnitVO.BasicUnitVO.FIGHTTYPE_DEF || __s5local5.isHybrid)) {
          var __s5local6 = (__s5local5.meleeDefence + __s5local5.rangeDefence) * __s5local5.inventoryAmount;
          if (__s5local6 > __s5local0) {
            __s5local0 = __s5local6;
            __s5local1 = __dep_exact_f855840627e6e145.int(__s5local5.wodId);
          }
        }
      }
    }
    if (__s5local0 == 0) {
      return null;
    } else {
      return __s5param3.deductUnit(__s5local1, __s5param0.freeItems);
    }
  };
  return StrongestDefenceSupportFlankStrategy;
}(require("gge-module:export_AFillFlankStrategy").AFillFlankStrategy);
exports.StrongestDefenceSupportFlankStrategy = __s0local0;
var __dep_export_BasicUnitVO = require("gge-module:export_BasicUnitVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillFlankStrategy");
