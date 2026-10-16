Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DefenderFlankEffectVO(__s3param0 = 0, __s3param1 = 0, __s3param2 = 1, __s3param3 = 0, __s3param4 = 0, __s3param5 = 1, __s3param6 = 1, __s3param7 = 1, __s3param8 = 1) {
    this._meleeDefenceUnitsMeleeStrength = 0;
    this._meleeDefenceUnitsRangeStrength = 0;
    this._rangeDefenceUnitsMeleeStrength = 0;
    this._rangeDefenceUnitsRangeStrength = 0;
    this._defenderRangeBonus = 0;
    this._defenderMeleeBonus = 0;
    this._defenderWallBonus = 0;
    this._defenderGateBonus = 0;
    this._defenderMoatBonus = 0;
    this._meleeDefenceUnitsMeleeStrength = __s3param0;
    this._meleeDefenceUnitsRangeStrength = __s3param1;
    this._rangeDefenceUnitsMeleeStrength = __s3param3;
    this._rangeDefenceUnitsRangeStrength = __s3param4;
    this._defenderMeleeBonus = __s3param2;
    this._defenderRangeBonus = __s3param5;
    this._defenderWallBonus = __s3param6;
    this._defenderGateBonus = __s3param7;
    this._defenderMoatBonus = __s3param8;
  }
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderWallBonus", {
    get: function () {
      return this._defenderWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderGateBonus", {
    get: function () {
      return this._defenderGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderMoatBonus", {
    get: function () {
      return this._defenderMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderRangeBonus", {
    get: function () {
      return this._defenderRangeBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderMeleeBonus", {
    get: function () {
      return this._defenderMeleeBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "hasRangeDefenders", {
    get: function () {
      return this._rangeDefenceUnitsMeleeStrength != 0 || this._rangeDefenceUnitsRangeStrength != 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "hasMeleeDefenders", {
    get: function () {
      return this._meleeDefenceUnitsMeleeStrength != 0 || this._meleeDefenceUnitsRangeStrength != 0;
    },
    enumerable: true,
    configurable: true
  });
  DefenderFlankEffectVO.prototype.getMeleeDefenceValue = function (__s19param0 = 0, __s19param1 = 0) {
    return this._meleeDefenceUnitsMeleeStrength * (this._defenderMeleeBonus - __s19param0) + this._rangeDefenceUnitsMeleeStrength * (this._defenderRangeBonus - __s19param1);
  };
  DefenderFlankEffectVO.prototype.getRangeDefenceValue = function (__s21param0 = 0, __s21param1 = 0) {
    return this._rangeDefenceUnitsRangeStrength * (this._defenderRangeBonus - __s21param0) + this._meleeDefenceUnitsRangeStrength * (this._defenderMeleeBonus - __s21param1);
  };
  return DefenderFlankEffectVO;
}();
exports.DefenderFlankEffectVO = __s0local0;
