Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleAttackArmyVO() {}
  CastleAttackArmyVO.prototype.prefillInit = function (__s5param0) {
    this._waves = [];
    this._waves.push(__s5param0);
  };
  CastleAttackArmyVO.prototype.init = function (__s7param0, __s7param1, __s7param2, __s7param3) {
    this._waves = [];
    var __s7local0 = 0;
    if (__dep_export_CastleModel.CastleModel.userData.isLegend && __s7param0 >= __dep_exact_26a421b704832cff_2.PlayerConst.LEVEL_CAP && (__s7param3.ownerInfo && !__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(__s7param3.ownerInfo.playerID) || __dep_exact_81dacdf05bd32292.instanceOfClass(__s7param3, "AAlienInvasionMapobjectVO"))) {
      __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.ADDITIONAL_WAVE));
    }
    for (var __s7local1 = 0; __s7local1 < __dep_exact_26a421b704832cff.CombatConst.getMaxWaveCountWithBonus(__dep_export_CastleModel.CastleModel.userData.userLevel, __s7param1, __s7local0); __s7local1++) {
      this.addAdditionalWave(__s7param0, __s7param1, __s7param3);
    }
  };
  CastleAttackArmyVO.prototype.addAdditionalWave = function (__s12param0, __s12param1, __s12param2) {
    if (__s12param2.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL) {
      this._waves.push(new __dep_export_CastleAttackWaveVO.CastleAttackWaveVO(__s12param0, __dep_export_CastleModel.CastleModel.landmark.capitalLandmark.minDefenseLevel, __s12param2));
    } else if (__s12param2.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL) {
      this._waves.push(new __dep_export_CastleAttackWaveVO.CastleAttackWaveVO(__s12param0, __dep_export_CastleModel.CastleModel.landmark.metroLandmark.minDefenseLevel, __s12param2));
    } else if (__s12param2.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGS_TOWER) {
      this._waves.push(new __dep_export_CastleAttackWaveVO.CastleAttackWaveVO(__s12param0, __dep_exact_26a421b704832cff_1.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, __s12param2));
    } else if (__s12param2.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT) {
      this._waves.push(new __dep_export_CastleAttackWaveVO.CastleAttackWaveVO(__s12param0, __dep_exact_26a421b704832cff_1.OutpostConst.MONUMENT_DEFAULT_LEVEL, __s12param2));
    } else if (__s12param2.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_LABORATORY) {
      this._waves.push(new __dep_export_CastleAttackWaveVO.CastleAttackWaveVO(__s12param0, __dep_exact_26a421b704832cff_1.OutpostConst.LABORATORY_DEFAULT_LEVEL, __s12param2));
    } else {
      this._waves.push(new __dep_export_CastleAttackWaveVO.CastleAttackWaveVO(__s12param0, 0, __s12param2));
    }
  };
  CastleAttackArmyVO.prototype.getUnitVectorFromCompleteWave = function (__s20param0) {
    return this._waves[__s20param0].getAllUnitsAsVector();
  };
  CastleAttackArmyVO.prototype.deductLastWave = function () {
    this._waves.pop();
  };
  CastleAttackArmyVO.prototype.getSumOfItems = function () {
    var __s24local0 = 0;
    if (this._waves != null) {
      for (var __s24local1 = 0, __s24local2 = this._waves; __s24local1 < __s24local2.length; __s24local1++) {
        var __s24local3 = __s24local2[__s24local1];
        if (__s24local3 !== undefined) {
          __s24local0 += __s24local3.getSumOfItems();
        }
      }
    }
    return __s24local0;
  };
  CastleAttackArmyVO.prototype.getSumOfTools = function () {
    var __s30local0 = 0;
    if (this._waves != null) {
      for (var __s30local1 = 0, __s30local2 = this._waves; __s30local1 < __s30local2.length; __s30local1++) {
        var __s30local3 = __s30local2[__s30local1];
        if (__s30local3 !== undefined) {
          __s30local0 += __s30local3.getSumOfTools();
        }
      }
    }
    return __s30local0;
  };
  CastleAttackArmyVO.prototype.getSumOfUnits = function () {
    var __s36local0 = 0;
    if (this._waves != null) {
      for (var __s36local1 = 0, __s36local2 = this._waves; __s36local1 < __s36local2.length; __s36local1++) {
        var __s36local3 = __s36local2[__s36local1];
        if (__s36local3 !== undefined) {
          __s36local0 += __s36local3.getSumOfUnits();
        }
      }
    }
    return __s36local0;
  };
  CastleAttackArmyVO.prototype.getWaveByID = function (__s42param0) {
    return this._waves[__s42param0];
  };
  CastleAttackArmyVO.prototype.getWaveCount = function () {
    return __dep_exact_f855840627e6e145.int(this._waves.length);
  };
  CastleAttackArmyVO.prototype.getLowestTravelSpeed = function (__s46param0 = false, __s46param1 = null) {
    var __s46local0 = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    if (this._waves != null) {
      for (var __s46local1 = 0, __s46local2 = this._waves; __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined) {
          __s46local0 = __dep_exact_f855840627e6e145.int(Math.min(__s46local0, __s46local3.getLowestTravelSpeed(__s46param0, __s46param1)));
        }
      }
    }
    if (__s46local0 == Number.MAX_VALUE) {
      return 0;
    } else {
      return __s46local0;
    }
  };
  CastleAttackArmyVO.prototype.isAnyWaveComplete = function () {
    if (this._waves != null) {
      for (var __s54local0 = 0, __s54local1 = this._waves; __s54local0 < __s54local1.length; __s54local0++) {
        var __s54local2 = __s54local1[__s54local0];
        if (__s54local2 !== undefined && __s54local2.isWaveComplete()) {
          return true;
        }
      }
    }
    return false;
  };
  CastleAttackArmyVO.prototype.isAnyWaveSoldiersButNoTools = function () {
    if (this._waves != null) {
      for (var __s60local0 = 0, __s60local1 = this._waves; __s60local0 < __s60local1.length; __s60local0++) {
        var __s60local2 = __s60local1[__s60local0];
        if (__s60local2 !== undefined && (__s60local2.itemsMiddleWall_units.sumOfItems == 0 && __s60local2.itemsMiddleWall_tools.sumOfItems > 0 || __s60local2.itemsRightWall_units.sumOfItems == 0 && __s60local2.itemsRightWall_tools.sumOfItems > 0 || __s60local2.itemsLeftWall_units.sumOfItems == 0 && __s60local2.itemsLeftWall_tools.sumOfItems > 0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleAttackArmyVO.prototype.getArmyData = function () {
    var __s66local0 = [];
    if (this._waves != null) {
      for (var __s66local1 = 0, __s66local2 = this._waves; __s66local1 < __s66local2.length; __s66local1++) {
        var __s66local3 = __s66local2[__s66local1];
        if (__s66local3 !== undefined && __s66local3.isWaveComplete()) {
          __s66local0.push(__s66local3.getWaveInfoObject());
        }
      }
    }
    return __s66local0;
  };
  Object.defineProperty(CastleAttackArmyVO.prototype, "waves", {
    get: function () {
      return this._waves;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackArmyVO;
}();
exports.CastleAttackArmyVO = __s0local0;
var __dep_export_CastleAttackWaveVO = require("gge-module:export_CastleAttackWaveVO");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
