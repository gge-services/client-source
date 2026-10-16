Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MediumBattleWaveVO(__s3param0, __s3param1 = null) {
    this._isPreOrPostWave = false;
    if (__s3param1) {
      this.initAsSummary(__s3param1);
    } else {
      this.initByParams(__s3param0);
    }
  }
  MediumBattleWaveVO.prototype.initAsSummary = function (__s7param0) {
    var __s7local0 = [];
    var __s7local1 = [];
    if (__s7param0 != null) {
      for (var __s7local2 = 0, __s7local3 = __s7param0; __s7local2 < __s7local3.length; __s7local2++) {
        var __s7local4 = __s7local3[__s7local2];
        if (__s7local4 !== undefined) {
          __s7local0.push(__s7local4.attacker);
          __s7local1.push(__s7local4.defender);
        }
      }
    }
    this._attacker = new __dep_export_MediumPlayerBattleWaveVO.MediumPlayerBattleWaveVO(null, __s7local0, false);
    this._defender = new __dep_export_MediumPlayerBattleWaveVO.MediumPlayerBattleWaveVO(null, __s7local1, true);
  };
  MediumBattleWaveVO.prototype.initByParams = function (__s13param0) {
    this._attacker = new __dep_export_MediumPlayerBattleWaveVO.MediumPlayerBattleWaveVO(__s13param0[MediumBattleWaveVO.ATTACKER]);
    this._defender = new __dep_export_MediumPlayerBattleWaveVO.MediumPlayerBattleWaveVO(__s13param0[MediumBattleWaveVO.DEFENDER]);
  };
  Object.defineProperty(MediumBattleWaveVO.prototype, "attacker", {
    get: function () {
      return this._attacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumBattleWaveVO.prototype, "defender", {
    get: function () {
      return this._defender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumBattleWaveVO.prototype, "gotThroughWall", {
    get: function () {
      return this._attacker.soldierAmountSurvived > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumBattleWaveVO.prototype, "isPreOrPostWave", {
    get: function () {
      return this._isPreOrPostWave;
    },
    set: function (__s23param0) {
      this._isPreOrPostWave = __s23param0;
      this._attacker.isPreOrPostWave = __s23param0;
      this._defender.isPreOrPostWave = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  MediumBattleWaveVO.__initialize_static_members = function () {
    MediumBattleWaveVO.ATTACKER = 0;
    MediumBattleWaveVO.DEFENDER = 1;
  };
  return MediumBattleWaveVO;
}();
exports.MediumBattleWaveVO = __s0local0;
var __dep_export_MediumPlayerBattleWaveVO = require("gge-module:export_MediumPlayerBattleWaveVO");
__s0local0.__initialize_static_members();
