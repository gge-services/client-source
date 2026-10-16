Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleAchievementDataEvent = require("gge-module:export_CastleAchievementDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AchievementSerieVO = require("gge-module:export_AchievementSerieVO");
var __s0local0 = function (__s1param0) {
  function CastleAchievementData(__s3param0) {
    var __s3local0 = this;
    __s3local0._achievementPoints = 0;
    __s3local0._totalPossibleAchievementPoints = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._achievementSeries = new Map();
    __s3local0._achievements = new Map();
    __s3local0._totalPossibleAchievementPoints = 0;
    __s3local0._lastThreeAchievementIDs = [0, 0, 0];
    __s3local0._achievementPoints = 0;
    var __s3local1 = __s3param0.achievements;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5;
          var __s3local6 = parseInt(__s3local4.achievementSeriesID || "");
          if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.containsKey(__s3local0._achievementSeries, __s3local6)) {
            __s3local5 = __s3local0._achievementSeries.get(__s3local6);
          } else {
            (__s3local5 = new __dep_export_AchievementSerieVO.AchievementSerieVO()).fillFromParamXML(__s3local4);
            __s3local0._achievementSeries.set(__s3local6, __s3local5);
          }
          var __s3local7 = new __dep_export_AchievementVO.AchievementVO(__s3local5);
          __s3local7.fillFromParamXML(__s3local4);
          __s3local5.addAchievementVO(__s3local7);
          __s3local0._achievements.set(__s3local7.achievementID, __s3local7);
          __s3local0._totalPossibleAchievementPoints += __s3local7.achievementPoints;
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAchievementData, __s1param0);
  CastleAchievementData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    if (this._achievementSeries != null) {
      for (var __s11local0 = 0, __s11local1 = Array.from(this._achievementSeries.values()); __s11local0 < __s11local1.length; __s11local0++) {
        __s11local1[__s11local0].reset();
      }
    }
    if (this._achievements != null) {
      for (var __s11local2 = 0, __s11local3 = Array.from(this._achievements.values()); __s11local2 < __s11local3.length; __s11local2++) {
        __s11local3[__s11local2].reset();
      }
    }
    this._lastThreeAchievementIDs = [0, 0, 0];
    this._achievementPoints = 0;
  };
  CastleAchievementData.prototype.parse_vli = function (__s19param0) {
    this._achievementPoints = __dep_exact_f855840627e6e145.int(__s19param0.AVP);
    this.parse_FA(__s19param0.FA);
    this.parse_RA(__s19param0.RA);
    this.dispatchEvent(new __dep_export_CastleAchievementDataEvent.CastleAchievementDataEvent(__dep_export_CastleAchievementDataEvent.CastleAchievementDataEvent.ACHIEVEMENT_REFRESHED));
  };
  CastleAchievementData.prototype.parse_RA = function (__s21param0) {
    if (__s21param0 != null) {
      for (var __s21local0 = 0, __s21local1 = __s21param0; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined && this._achievements.get(__s21local2.AID)) {
          this._achievements.get(__s21local2.AID).setProgress(__s21local2.P);
        }
      }
    }
  };
  CastleAchievementData.prototype.parse_FA = function (__s27param0) {
    if (__s27param0) {
      var __s27local0 = 0;
      for (__s27local0 = 0; __s27local0 < __s27param0.length; ++__s27local0) {
        this._achievements.get(__s27param0[__s27local0]).setFinished();
      }
      var __s27local1 = 0;
      for (__s27local0 = __dep_exact_f855840627e6e145.int(__s27param0.length - 1); __s27local0 >= 0 && __s27local1 < 3; --__s27local0) {
        if (this._achievements.get(__s27param0[__s27local0]).achievementSerieVO.achievementSeriesID != CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
          this._lastThreeAchievementIDs[__s27local1] = __s27param0[__s27local0];
          ++__s27local1;
        }
      }
    }
  };
  Object.defineProperty(CastleAchievementData.prototype, "lastThreeAchievementIDs", {
    get: function () {
      return this._lastThreeAchievementIDs;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementData.prototype.getAchievementSeriesByCategory = function (__s37param0) {
    var __s37local0 = [];
    if (this._achievementSeries != null) {
      for (var __s37local1 = 0, __s37local2 = Array.from(this._achievementSeries.values()); __s37local1 < __s37local2.length; __s37local1++) {
        var __s37local3 = __s37local2[__s37local1];
        if (__s37local3 !== undefined && __s37local3.category == __s37param0 && (!__s37local3.isHidden || __s37local3.isHidden && __s37local3.isSerieFinished)) {
          __s37local0.push(__s37local3);
        }
      }
    }
    __s37local0.sort(this.bindFunction(this.sortBySeriesID));
    return __s37local0;
  };
  CastleAchievementData.prototype.sortBySeriesID = function (__s43param0, __s43param1) {
    return __s43param0.achievementSeriesID - __s43param1.achievementSeriesID;
  };
  CastleAchievementData.prototype.getAchievementByID = function (__s45param0) {
    return this._achievements.get(__s45param0);
  };
  CastleAchievementData.prototype.isDifficultyUnlocked = function (__s47param0) {
    for (var __s47local0 = 0, __s47local1 = Array.from(this._achievements.values()); __s47local0 < __s47local1.length; __s47local0++) {
      var __s47local2 = __s47local1[__s47local0];
      if (__s47local2.unlocksDifficulty == __s47param0) {
        return __s47local2.achievementFinished;
      }
    }
    return true;
  };
  CastleAchievementData.prototype.getAchievementForUnlockDifficulty = function (__s52param0) {
    for (var __s52local0 = 0, __s52local1 = Array.from(this._achievements.values()); __s52local0 < __s52local1.length; __s52local0++) {
      var __s52local2 = __s52local1[__s52local0];
      if (__s52local2.unlocksDifficulty == __s52param0) {
        return __s52local2;
      }
    }
    return null;
  };
  CastleAchievementData.prototype.getAchievementSeriesByID = function (__s57param0) {
    return this._achievementSeries.get(__s57param0);
  };
  Object.defineProperty(CastleAchievementData.prototype, "totalPossibleAchievementPoints", {
    get: function () {
      return this._totalPossibleAchievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementData.prototype, "userProgressInPercent", {
    get: function () {
      return Math.round(this.achievementPoints / this._totalPossibleAchievementPoints * 100);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementData.prototype, "achievementPoints", {
    get: function () {
      return this._achievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementData.prototype.calculateMainAchievementByAP = function () {
    for (var __s65local0 = this.getAchievementSeriesByID(CastleAchievementData.MAIN_ACHIEVMENT_SERIESID), __s65local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.castleAchievementData.achievementPoints), __s65local2 = 1; __s65local2 <= __s65local0.numberOfAchievementsInSeries;) {
      if (__s65local0.achievements[__s65local2].conditions[0].amount > __s65local1) {
        return __s65local0.achievements[__s65local2];
      }
      __s65local2++;
    }
    return __s65local0.achievements[__s65local0.numberOfAchievementsInSeries];
  };
  CastleAchievementData.MAIN_ACHIEVMENT_SERIESID = 0;
  return CastleAchievementData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleAchievementData = __s0local0;
var __dep_export_AchievementVO = require("gge-module:export_AchievementVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
