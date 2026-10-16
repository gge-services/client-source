Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DetailedPlayerBattleWaveVO(__s3param0, __s3param1 = null, __s3param2 = false) {
    this.isPreOrPostWave = false;
    if (__s3param1) {
      this.initAsSummary(__s3param1, __s3param2);
    } else {
      this.initByParams(__s3param0);
    }
  }
  DetailedPlayerBattleWaveVO.prototype.initAsSummary = function (__s7param0, __s7param1) {
    var __s7local0 = [];
    var __s7local1 = [];
    var __s7local2 = [];
    var __s7local3 = [];
    if (__s7param0 != null) {
      for (var __s7local4 = 0, __s7local5 = __s7param0; __s7local4 < __s7local5.length; __s7local4++) {
        var __s7local6 = __s7local5[__s7local4];
        if (__s7local6 !== undefined) {
          if (__s7local6.flankLeft) {
            __s7local6.flankLeft.isPreOrPostWave = __s7local6.isPreOrPostWave;
            __s7local0.push(__s7local6.flankLeft);
          }
          if (__s7local6.flankMiddle) {
            __s7local6.flankMiddle.isPreOrPostWave = __s7local6.isPreOrPostWave;
            __s7local1.push(__s7local6.flankMiddle);
          }
          if (__s7local6.flankRight) {
            __s7local6.flankRight.isPreOrPostWave = __s7local6.isPreOrPostWave;
            __s7local2.push(__s7local6.flankRight);
          }
          if (__s7local6.courtyard) {
            __s7local6.courtyard.isPreOrPostWave = __s7local6.isPreOrPostWave;
            __s7local3.push(__s7local6.courtyard);
          }
        }
      }
    }
    this._flankLeft = new __dep_export_FlankVO.FlankVO(null, __s7local0, __s7param1);
    this._flankMiddle = new __dep_export_FlankVO.FlankVO(null, __s7local1, __s7param1);
    this._flankRight = new __dep_export_FlankVO.FlankVO(null, __s7local2, __s7param1);
    this._courtyard = new __dep_export_FlankVO.FlankVO(null, __s7local3, __s7param1);
  };
  DetailedPlayerBattleWaveVO.prototype.initByParams = function (__s17param0) {
    if (__s17param0 && __s17param0.length > DetailedPlayerBattleWaveVO.FLANKS_START_AT) {
      this._flankLeft = new __dep_export_FlankVO.FlankVO(__s17param0[DetailedPlayerBattleWaveVO.FLANKS_START_AT + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT]);
      this._flankMiddle = new __dep_export_FlankVO.FlankVO(__s17param0[DetailedPlayerBattleWaveVO.FLANKS_START_AT + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE]);
      this._flankRight = new __dep_export_FlankVO.FlankVO(__s17param0[DetailedPlayerBattleWaveVO.FLANKS_START_AT + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT]);
      this._courtyard = new __dep_export_FlankVO.FlankVO(__s17param0[DetailedPlayerBattleWaveVO.FLANKS_START_AT + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD]);
    }
  };
  DetailedPlayerBattleWaveVO.prototype.getFlank = function (__s20param0) {
    switch (__s20param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
        return this.flankLeft;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
        return this.flankMiddle;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
        return this.flankRight;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_YARD:
        return this.courtyard;
    }
    return null;
  };
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "flankMiddle", {
    get: function () {
      return this._flankMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "flankRight", {
    get: function () {
      return this._flankRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "flankLeft", {
    get: function () {
      return this._flankLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "courtyard", {
    get: function () {
      return this._courtyard;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedPlayerBattleWaveVO.prototype, "hasOnlyAuxiliaries", {
    get: function () {
      return !!this._flankLeft.hasOnlyAuxiliariesOrNothing && !!this._flankMiddle.hasOnlyAuxiliariesOrNothing && !!this._flankRight.hasOnlyAuxiliariesOrNothing && (this._flankLeft.soldiers.length > 0 || this._flankMiddle.soldiers.length > 0 || this._flankMiddle.soldiers.length > 0 || this._courtyard.soldiers.length > 0);
    },
    enumerable: true,
    configurable: true
  });
  DetailedPlayerBattleWaveVO.__initialize_static_members = function () {
    DetailedPlayerBattleWaveVO.FLANKS_START_AT = 1;
  };
  return DetailedPlayerBattleWaveVO;
}();
exports.DetailedPlayerBattleWaveVO = __s0local0;
var __dep_export_FlankVO = require("gge-module:export_FlankVO");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
__s0local0.__initialize_static_members();
