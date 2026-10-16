Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function BattleLogAbilityVO(__s3param0) {
    this._waveValues = [];
    this.parseFromParamOj(__s3param0);
  }
  BattleLogAbilityVO.prototype.parseFromParamOj = function (__s5param0) {
    if (__s5param0) {
      this._abilityID = __s5param0[0];
      for (var __s5local0 = 0, __s5local1 = __s5param0[1]; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        this._waveValues.push({
          waveID: __s5local2[0],
          waveValue: __s5local2[1],
          flankName: __s5local2[2]
        });
      }
    }
  };
  BattleLogAbilityVO.prototype.getValueForWave = function (__s10param0, __s10param1) {
    var __s10local0 = 0;
    var __s10local1 = 0;
    this._waveValues.forEach(function (__s12param0) {
      if ((__s10param0 === undefined || __s10param0 == __s12param0.waveID) && (__s10param1 === undefined || __s10param1 == __s12param0.flankName)) {
        __s10local0 = __s12param0.waveValue;
        if (Math.abs(__s10local1) < Math.abs(__s10local0)) {
          __s10local1 = __s10local0;
        }
      }
    });
    if (__s10param0 === undefined) {
      return __s10local1;
    } else {
      return __s10local0;
    }
  };
  BattleLogAbilityVO.prototype.isTriggerdInWave = function (__s18param0, __s18param1) {
    return this._waveValues.some(function (__s20param0) {
      return (__s18param0 === undefined || __s18param0 == __s20param0.waveID) && (__s18param1 == "" || __s18param1 == __s20param0.flankName);
    });
  };
  Object.defineProperty(BattleLogAbilityVO.prototype, "abilityID", {
    get: function () {
      return this._abilityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogAbilityVO.prototype, "abilityXmlVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(this.abilityID);
    },
    enumerable: true,
    configurable: true
  });
  return BattleLogAbilityVO;
}();
exports.BattleLogAbilityVO = __s0local0;
