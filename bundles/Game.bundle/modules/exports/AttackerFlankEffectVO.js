Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AttackerFlankEffectVO(__s3param0 = 1, __s3param1 = 1, __s3param2 = 0, __s3param3 = 0, __s3param4 = 0, __s3param5 = 0) {
    this._attackerWallReduction = 0;
    this._attackerGateReduction = 0;
    this._attackerMoatReduction = 0;
    this._defenderRangeReduction = 0;
    this._defenderMeleeReduction = 0;
    this._attackerRangeBonus = 0;
    this._attackerMeleeBonus = 0;
    this._attackerWallReduction = __s3param2;
    this._attackerGateReduction = __s3param3;
    this._attackerMoatReduction = __s3param4;
    this._defenderRangeReduction = __s3param5;
    this._attackerMeleeBonus = __s3param0;
    this._attackerRangeBonus = __s3param1;
  }
  Object.defineProperty(AttackerFlankEffectVO.prototype, "defenderRangeReduction", {
    get: function () {
      return this._defenderRangeReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "defenderMeleeReduction", {
    get: function () {
      return this._defenderMeleeReduction;
    },
    enumerable: true,
    configurable: true
  });
  AttackerFlankEffectVO.prototype.getSoldierStackAttackValue = function (__s9param0, __s9param1) {
    var __s9local0 = 0;
    if (__s9param0.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE) {
      __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0.buffedMeleeAttack * this._attackerMeleeBonus);
    } else if (__s9param0.unitType == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE) {
      __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0.buffedRangeAttack * this._attackerRangeBonus);
    }
    return __s9local0 * Math.min(__s9param1, __s9param0.inventoryAmount);
  };
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerGateReduction", {
    get: function () {
      return this._attackerGateReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerWallReduction", {
    get: function () {
      return this._attackerWallReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerMoatReduction", {
    get: function () {
      return this._attackerMoatReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerRangeBonus", {
    get: function () {
      return this._attackerRangeBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerMeleeBonus", {
    get: function () {
      return this._attackerMeleeBonus;
    },
    enumerable: true,
    configurable: true
  });
  AttackerFlankEffectVO.prototype.updateEffectsWithNewTool = function (__s23param0, __s23param1 = null) {
    this._attackerWallReduction += __s23param0.wallBonus * __s23param0.inventoryAmount;
    this._attackerGateReduction += __s23param0.gateBonus * __s23param0.inventoryAmount;
    this._attackerMoatReduction += __s23param0.moatBonus * __s23param0.inventoryAmount;
    var __s23local0 = __s23param0.defRangeBonus;
    var __s23local1 = __s23param0.defMeleeBonus;
    if (__s23param0.effects != null) {
      for (var __s23local2 = 0, __s23local3 = __s23param0.effects; __s23local2 < __s23local3.length; __s23local2++) {
        var __s23local4 = __s23local3[__s23local2];
        if (__s23local4 && __s23local4.effect && __s23local4.effect.effectType && __dep_export_EffectConditionHelper.EffectConditionHelper.isEffectApplicable(__s23local4.effect, __s23param1)) {
          var __s23local5 = __s23local4.effect.effectType.type;
          if (__s23local5 == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_DEFENSE_MALUS) {
            __s23local0 += __s23local4.strength * 0.01;
          } else if (__s23local5 == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_DEFENSE_MALUS) {
            __s23local1 += __s23local4.strength * 0.01;
          }
        }
      }
    }
    this._defenderRangeReduction += __s23local0 * __s23param0.inventoryAmount;
    this._defenderMeleeReduction += __s23local1 * __s23param0.inventoryAmount;
  };
  return AttackerFlankEffectVO;
}();
exports.AttackerFlankEffectVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_EffectConditionHelper = require("gge-module:export_EffectConditionHelper");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
