Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLoginBonusEvent = require("gge-module:export_CastleLoginBonusEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_StartupLoginRewardVO = require("gge-module:export_StartupLoginRewardVO");
var __s0local0 = function (__s1param0) {
  function CastleStartUpBonusData(__s3param0) {
    var __s3local0 = this;
    __s3local0._nextStartupLoginBonusID = 0;
    __s3local0._canCollectBonus = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).configXML = __s3param0;
    __s3local0._startupLoginRewardVOs = [];
    var __s3local1 = __s3param0.beginner_loginrewards;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = new __dep_export_StartupLoginRewardVO.StartupLoginRewardVO();
          __s3local5.fillFromParamXML(__s3local4);
          __s3local5.setReward(__dep_export_CastleModel.CastleModel.rewardData.getListById(__s3local5.rewardID));
          __s3local0._startupLoginRewardVOs.push(__s3local5);
        }
      }
    }
    __s3local0._nextStartupLoginBonusID = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartUpBonusData, __s1param0);
  CastleStartUpBonusData.prototype.reset = function () {
    this._nextStartupLoginBonusID = -1;
    this._canCollectBonus = false;
  };
  CastleStartUpBonusData.prototype.parse_SLI = function (__s11param0) {
    if (__s11param0) {
      this._nextStartupLoginBonusID = __dep_exact_f855840627e6e145.int(__s11param0.NRR);
      this._canCollectBonus = __s11param0.CC == 1;
      this.dispatchEvent(new __dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.LOGINBONUS_UPDATE));
    }
  };
  Object.defineProperty(CastleStartUpBonusData.prototype, "nextStartupLoginBonusID", {
    get: function () {
      return this._nextStartupLoginBonusID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartUpBonusData.prototype, "hasNextStartupLoginBonus", {
    get: function () {
      return this._nextStartupLoginBonusID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartUpBonusData.prototype, "startupLoginRewardVOs", {
    get: function () {
      return this._startupLoginRewardVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartUpBonusData.prototype, "canCollectBonus", {
    get: function () {
      return this._canCollectBonus;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStartUpBonusData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleStartUpBonusData = __s0local0;
