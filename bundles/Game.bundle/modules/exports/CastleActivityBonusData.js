Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleLoginBonusEvent = require("gge-module:export_CastleLoginBonusEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ActivityRewardVO = require("gge-module:export_ActivityRewardVO");
var __s0local0 = function (__s1param0) {
  function CastleActivityBonusData(__s3param0) {
    var __s3local0 = this;
    __s3local0.nextActivityBonusTimeStamp = 0;
    __s3local0._rewardID = 0;
    __s3local0.readyToCollect = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseXML(__s3param0);
    __s3local0._rewardID = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleActivityBonusData, __s1param0);
  CastleActivityBonusData.prototype.parseXML = function (__s5param0) {
    this._activityRewardVOs = [];
    var __s5local0 = __s5param0.activityrewards;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_ActivityRewardVO.ActivityRewardVO();
          __s5local4.fillFromParamXML(__s5local3);
          __s5local4.setReward(__dep_export_CastleModel.CastleModel.rewardData.getListById(__s5local4.rewardID));
          this._activityRewardVOs.push(__s5local4);
        }
      }
    }
  };
  CastleActivityBonusData.prototype.parse_UAC = function (__s11param0) {
    this._rewardID = __dep_exact_f855840627e6e145.int(__s11param0.CID);
    this.nextActivityBonusTimeStamp = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s11param0.TTU * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.readyToCollect = false;
    this.dispatchEvent(new __dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED));
  };
  CastleActivityBonusData.prototype.executeUpdate = function (__s13param0) {
    if (!this.readyToCollect && this.isActive && this.remainingTimeTillNextActivityBonus <= 0) {
      this.readyToCollect = true;
      this.dispatchEvent(new __dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED));
    }
  };
  CastleActivityBonusData.prototype.getNextActivityRewardVO = function () {
    for (var __s16local0 = 0; __s16local0 < this._activityRewardVOs.length; __s16local0++) {
      var __s16local1 = this._activityRewardVOs[__s16local0];
      if (this._rewardID == __s16local1.activityRewardID) {
        return __s16local1;
      }
    }
    return null;
  };
  Object.defineProperty(CastleActivityBonusData.prototype, "isActive", {
    get: function () {
      return this._rewardID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleActivityBonusData.prototype, "isReadyToCollect", {
    get: function () {
      return this.readyToCollect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleActivityBonusData.prototype, "remainingTimeTillNextActivityBonus", {
    get: function () {
      return Math.max((this.nextActivityBonusTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleActivityBonusData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleActivityBonusData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
