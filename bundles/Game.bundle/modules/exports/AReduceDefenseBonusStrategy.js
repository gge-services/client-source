Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_EffectConditionHelper = require("gge-module:export_EffectConditionHelper");
var __s0local0 = function () {
  function AReduceDefenseBonusStrategy() {}
  AReduceDefenseBonusStrategy.prototype.getRelevantToolBonus = function (__s5param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AReduceDefenseBonusStrategy.prototype.getRelevantDefenderBonus = function (__s7param0, __s7param1) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  AReduceDefenseBonusStrategy.prototype.getConditionedEffectBonus = function (__s9param0, __s9param1) {
    if (!__s9param0 || !__s9param0.effects) {
      return 0;
    }
    var __s9local0 = 0;
    for (var __s9local1 = 0, __s9local2 = __s9param0.effects; __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 && __s9local3.effect && __s9local3.effect.effectType && __s9local3.effect.effectType.type == __s9param1 && __dep_export_EffectConditionHelper.EffectConditionHelper.isEffectApplicable(__s9local3.effect, this._area)) {
        __s9local0 += __s9local3.strength * 0.01;
      }
    }
    return __s9local0;
  };
  AReduceDefenseBonusStrategy.prototype.pickToolByStrategy = function (__s15param0, __s15param1, __s15param2, __s15param3, __s15param4, __s15param5, __s15param6, __s15param7) {
    this._area = __s15param5;
    var __s15local0 = this.getRelevantDefenderBonus(__s15param0, __s15param1);
    if (__s15local0 <= 0) {
      return null;
    }
    var __s15local1;
    for (var __s15local2 = __s15param2.getTools(), __s15local3 = -1, __s15local4 = -1, __s15local5 = -1, __s15local6 = -1, __s15local7 = 0, __s15local8 = 0; __s15local8 < __s15local2.length; __s15local8++) {
      var __s15local9 = __dep_exact_81dacdf05bd32292.castAs(__s15local2[__s15local8], "ToolUnitVO");
      if (__s15local9 && __s15local9.attackType == __dep_export_ClientConstCastle.ClientConstCastle.ATTACK_TOOL && __dep_export_AttackHelper.AttackHelper.canUseToolForAttackOnTarget(__s15param5, __s15local9, __s15param4) && this.getRelevantToolBonus(__s15local9) > 0 && __s15local9.inventoryAmount > 0) {
        var __s15local10 = Math.ceil(__s15local0 / this.getRelevantToolBonus(__s15local9) * 100 / 100);
        var __s15local11 = __s15local9.amountPerWave > 0 ? __s15local9.amountPerWave - __s15param7.getSumOfToolsByTool(__s15local9) : __s15param6.freeItems;
        var __s15local12 = __dep_exact_f855840627e6e145.int(Math.min(__s15local9.inventoryAmount, __s15param3, __s15local11));
        if (__s15local10 <= __s15local12) {
          if (__s15local10 < __s15local4 || __s15local4 == -1) {
            __s15local3 = __dep_exact_f855840627e6e145.int(__s15local9.wodId);
            __s15local4 = __s15local10;
          }
        } else {
          var __s15local13 = this.getRelevantToolBonus(__s15local9) * __s15local12;
          if (__s15local13 > __s15local7) {
            __s15local5 = __dep_exact_f855840627e6e145.int(__s15local9.wodId);
            __s15local6 = __s15local12;
            __s15local7 = __s15local13;
          }
        }
      }
    }
    if (__s15local3 != -1) {
      __s15local1 = __s15param2.deductUnit(__s15local3, __s15local4);
    } else if (__s15local5 != -1) {
      __s15local1 = __s15param2.deductUnit(__s15local5, __s15local6);
    }
    return __s15local1;
  };
  return AReduceDefenseBonusStrategy;
}();
exports.AReduceDefenseBonusStrategy = __s0local0;
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IFillToolSlotStrategy");
