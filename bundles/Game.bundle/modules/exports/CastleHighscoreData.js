Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_HighscoreBonusVO = require("gge-module:export_HighscoreBonusVO");
var __s0local0 = function (__s1param0) {
  function CastleHighscoreData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._rankLastWeek = 0;
    __s3local0._rankActual = 0;
    __s3local0._nextRewardTime = 0;
    __s3local0._leaguageId = -1;
    __s3local0._highscoreBoni = [];
    var __s3local1 = __s3param0.highscoreboni;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          __s3local0._highscoreBoni.push(new __dep_export_HighscoreBonusVO.HighscoreBonusVO(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("leaguetypeID", __s3local4, "-1")), __s3local4.lowestRank !== "undefinded" ? __dep_exact_f855840627e6e145.int(__s3local4.lowestRank) : Number.MAX_VALUE, parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("highestRank", __s3local4, "0", true)), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c1Reward", __s3local4, "0")), __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("unitReward", __s3local4, ""), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("toolReward", __s3local4, "0")), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minAmount", __s3local4, "0")), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("toolOffset", __s3local4, "0")), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("toolMinAmount", __s3local4, "0"))));
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHighscoreData, __s1param0);
  CastleHighscoreData.prototype.parseGWH = function (__s9param0) {
    this._rankLastWeek = parseInt(__s9param0.LWR);
    this._rankActual = parseInt(__s9param0.CWR);
    this._nextRewardTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + parseInt(__s9param0.RT) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._leaguageId = parseInt(__s9param0.LID);
    this.dispatchEvent(new __dep_export_CastleHighscoreEvent.CastleHighscoreEvent(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED));
  };
  CastleHighscoreData.prototype.parseRWB = function (__s11param0) {
    if (__s11param0.gcu) {
      __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s11param0.gcu);
    }
    if (__s11param0.gui) {
      __dep_export_CastleModel.CastleModel.militaryData.parse_GUI(__s11param0.gui);
    }
    this.dispatchEvent(new __dep_export_CastleHighscoreEvent.CastleHighscoreEvent(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.REWARD_REDEEMED, [true]));
  };
  CastleHighscoreData.prototype.getHighscoreBonusVOForRank = function (__s15param0, __s15param1) {
    if (this._highscoreBoni != null) {
      for (var __s15local0 = 0, __s15local1 = this._highscoreBoni; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined && __s15local2.leagueId == __s15param0 && __s15param1 >= __s15local2.highestRank && __s15param1 <= (__s15local2.lowestRank > 0 ? __s15local2.lowestRank : Number.MAX_VALUE)) {
          return __s15local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleHighscoreData.prototype, "isReadyToCollect", {
    get: function () {
      return this._rankLastWeek > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "rankLastWeek", {
    get: function () {
      return this._rankLastWeek;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "rankActual", {
    get: function () {
      return this._rankActual;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "nextRewardRemainingTime", {
    get: function () {
      return Math.max(0, (this._nextRewardTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHighscoreData.prototype, "leaguageId", {
    get: function () {
      return this._leaguageId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHighscoreData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleHighscoreData = __s0local0;
