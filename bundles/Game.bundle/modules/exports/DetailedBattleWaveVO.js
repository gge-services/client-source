Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DetailedBattleWaveVO(__s3param0, __s3param1 = null, __s3param2 = false) {
    this.isPreOrPostWave = false;
    this.isSummaryWave = false;
    this.isSummaryWave = __s3param2;
    if (__s3param1) {
      this.initAsSummary(__s3param1);
    } else {
      this.initByParams(__s3param0);
    }
  }
  DetailedBattleWaveVO.prototype.initAsSummary = function (__s7param0) {
    var __s7local0 = [];
    var __s7local1 = [];
    if (__s7param0 != null) {
      for (var __s7local2 = 0, __s7local3 = __s7param0; __s7local2 < __s7local3.length; __s7local2++) {
        var __s7local4 = __s7local3[__s7local2];
        if (__s7local4 !== undefined) {
          if (__s7local4.attacker) {
            __s7local4.attacker.isPreOrPostWave = __s7local4.isPreOrPostWave && this.isSummaryWave;
          }
          if (__s7local4.defender) {
            __s7local4.defender.isPreOrPostWave = __s7local4.isPreOrPostWave && this.isSummaryWave;
          }
          __s7local0.push(__s7local4.attacker);
          __s7local1.push(__s7local4.defender);
        }
      }
    }
    this._attacker = new __dep_export_DetailedPlayerBattleWaveVO.DetailedPlayerBattleWaveVO(null, __s7local0, false);
    this._defender = new __dep_export_DetailedPlayerBattleWaveVO.DetailedPlayerBattleWaveVO(null, __s7local1, true);
  };
  DetailedBattleWaveVO.prototype.initByParams = function (__s15param0) {
    this._attacker = new __dep_export_DetailedPlayerBattleWaveVO.DetailedPlayerBattleWaveVO(__s15param0[DetailedBattleWaveVO.ATTACKER]);
    this._defender = new __dep_export_DetailedPlayerBattleWaveVO.DetailedPlayerBattleWaveVO(__s15param0[DetailedBattleWaveVO.DEFENDER]);
  };
  Object.defineProperty(DetailedBattleWaveVO.prototype, "attacker", {
    get: function () {
      return this._attacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedBattleWaveVO.prototype, "defender", {
    get: function () {
      return this._defender;
    },
    enumerable: true,
    configurable: true
  });
  DetailedBattleWaveVO.__initialize_static_members = function () {
    DetailedBattleWaveVO.ATTACKER = 0;
    DetailedBattleWaveVO.DEFENDER = 1;
  };
  return DetailedBattleWaveVO;
}();
exports.DetailedBattleWaveVO = __s0local0;
var __dep_export_DetailedPlayerBattleWaveVO = require("gge-module:export_DetailedPlayerBattleWaveVO");
__s0local0.__initialize_static_members();
