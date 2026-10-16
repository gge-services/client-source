Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AutoFillOptions = require("gge-module:export_AutoFillOptions");
var __dep_export_AttackerFlankEffectVO = require("gge-module:export_AttackerFlankEffectVO");
var __s0local0 = function (__s1param0) {
  function StrongestDefenceCounterRatioConsideredFlankStrategy() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StrongestDefenceCounterRatioConsideredFlankStrategy, __s1param0);
  StrongestDefenceCounterRatioConsideredFlankStrategy.prototype.pickSoldierStack = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = 0;
    var __s5local1 = 0;
    var __s5local2 = 0;
    var __s5local3 = 0;
    var __s5local4 = 0;
    __s5param1 ||= new __dep_export_AttackerFlankEffectVO.AttackerFlankEffectVO();
    var __s5local5 = __s5param2 ? __s5param2.getMeleeDefenceValue(0, __s5param1.defenderRangeReduction) : 0;
    var __s5local6 = __s5param2 ? __s5param2.getRangeDefenceValue(__s5param1.defenderRangeReduction, 0) : 0;
    var __s5local7 = 1;
    var __s5local8 = 1;
    if (__s5local5 + __s5local6 > 0) {
      __s5local7 = __s5local5 / (__s5local5 + __s5local6);
      __s5local8 = __s5local6 / (__s5local5 + __s5local6);
    }
    var __s5local9 = __s5param3.getSoldiers();
    if (__s5local9 != null) {
      for (var __s5local10 = 0, __s5local11 = __s5local9; __s5local10 < __s5local11.length; __s5local10++) {
        var __s5local12 = __s5local11[__s5local10];
        if (__s5local12 !== undefined && (__s5local12.isOffensive || __s5local12.isAllround)) {
          if (__s5local12.healingCostC1 > 0 && !__s5param4.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_C1)) {
            continue;
          }
          if (__s5local12.healingCostC2 > 0 && !__s5param4.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_C2)) {
            continue;
          }
          if (__s5local12.meadSupply > 0 && !__s5param4.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_MEAD)) {
            continue;
          }
          if (__s5local12.beefSupply > 0 && !__s5param4.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_BEEF)) {
            continue;
          }
          var __s5local13 = __s5param1.getSoldierStackAttackValue(__s5local12, __s5param0.freeItems);
          if (__s5local12.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE && __s5param4.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_MELEE)) {
            if (__s5local13 > __s5local0) {
              __s5local0 = __s5local13;
              __s5local2 = __dep_exact_f855840627e6e145.int(__s5local12.wodId);
            }
          } else if (__s5local12.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE && __s5param4.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_RANGE) && __s5local13 > __s5local1) {
            __s5local1 = __s5local13;
            __s5local3 = __dep_exact_f855840627e6e145.int(__s5local12.wodId);
          }
        }
      }
    }
    if (__s5local0 + __s5local1 == 0) {
      return null;
    }
    if (__s5local0 == 0) {
      __s5local4 = __s5local3;
    } else if (__s5local1 == 0) {
      __s5local4 = __s5local2;
    } else {
      __s5local4 = __s5local0 * __s5local8 >= __s5local1 * __s5local7 ? __s5local2 : __s5local3;
    }
    return __s5param3.deductUnit(__s5local4, __s5param0.freeItems);
  };
  return StrongestDefenceCounterRatioConsideredFlankStrategy;
}(require("gge-module:export_AFillFlankStrategy").AFillFlankStrategy);
exports.StrongestDefenceCounterRatioConsideredFlankStrategy = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillFlankStrategy");
