Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MediumPlayerBattleWaveVO(__s3param0, __s3param1 = null, __s3param2 = false) {
    this._isPreOrPostWave = false;
    if (__s3param1) {
      this.initAsSummary(__s3param1, __s3param2);
    } else {
      this.initByParams(__s3param0);
    }
  }
  MediumPlayerBattleWaveVO.prototype.initAsSummary = function (__s7param0, __s7param1) {
    var __s7local0 = [];
    var __s7local1 = [];
    var __s7local2 = [];
    if (__s7param0 != null) {
      for (var __s7local3 = 0, __s7local4 = __s7param0; __s7local3 < __s7local4.length; __s7local3++) {
        var __s7local5 = __s7local4[__s7local3];
        if (__s7local5 !== undefined) {
          if (__s7local5.flankLeft) {
            __s7local0.push(__s7local5.flankLeft);
          }
          if (__s7local5.flankMiddle) {
            __s7local1.push(__s7local5.flankMiddle);
          }
          if (__s7local5.flankRight) {
            __s7local2.push(__s7local5.flankRight);
          }
        }
      }
    }
    this._flankLeft = new __dep_export_FlankInfoVO.FlankInfoVO(null, __s7local0, __s7param1);
    this._flankMiddle = new __dep_export_FlankInfoVO.FlankInfoVO(null, __s7local1, __s7param1);
    this._flankRight = new __dep_export_FlankInfoVO.FlankInfoVO(null, __s7local2, __s7param1);
  };
  MediumPlayerBattleWaveVO.prototype.initByParams = function (__s16param0) {
    if (__s16param0.length > MediumPlayerBattleWaveVO.FLANKS_START_AT) {
      var __s16local0 = typeof __s16param0[0] == "number" ? MediumPlayerBattleWaveVO.FLANKS_START_AT : 0;
      this._flankLeft = new __dep_export_FlankInfoVO.FlankInfoVO(__s16param0[__s16local0 + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT]);
      this._flankMiddle = new __dep_export_FlankInfoVO.FlankInfoVO(__s16param0[__s16local0 + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE]);
      this._flankRight = new __dep_export_FlankInfoVO.FlankInfoVO(__s16param0[__s16local0 + __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT]);
    }
  };
  MediumPlayerBattleWaveVO.prototype.getFlank = function (__s19param0) {
    switch (__s19param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_LEFT:
        return this.flankLeft;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_MIDDLE:
        return this.flankMiddle;
      case __dep_export_ClientConstCastle.ClientConstCastle.FLANK_RIGHT:
        return this.flankRight;
    }
    return null;
  };
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "flankMiddle", {
    get: function () {
      return this._flankMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "flankRight", {
    get: function () {
      return this._flankRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "flankLeft", {
    get: function () {
      return this._flankLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "soldierAmountSurvived", {
    get: function () {
      return (this.flankLeft ? this.flankLeft.soldierAmountSurvived : 0) + (this.flankMiddle ? this.flankMiddle.soldierAmountSurvived : 0) + (this.flankRight ? this.flankRight.soldierAmountSurvived : 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MediumPlayerBattleWaveVO.prototype, "isPreOrPostWave", {
    get: function () {
      return this._isPreOrPostWave;
    },
    set: function (__s32param0) {
      this._isPreOrPostWave = __s32param0;
      if (this._flankLeft) {
        this._flankLeft.isPreOrPostWave = __s32param0;
      }
      if (this._flankMiddle) {
        this._flankMiddle.isPreOrPostWave = __s32param0;
      }
      if (this._flankRight) {
        this._flankRight.isPreOrPostWave = __s32param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  MediumPlayerBattleWaveVO.__initialize_static_members = function () {
    MediumPlayerBattleWaveVO.FLANKS_START_AT = 1;
  };
  return MediumPlayerBattleWaveVO;
}();
exports.MediumPlayerBattleWaveVO = __s0local0;
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_FlankInfoVO = require("gge-module:export_FlankInfoVO");
__s0local0.__initialize_static_members();
