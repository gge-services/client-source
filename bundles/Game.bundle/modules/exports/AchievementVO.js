Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AchievementVO(__s3param0) {
    this._achievementID = 0;
    this._achievementSeriesNumber = 0;
    this._requiredAchievementID = 0;
    this._achievementPoints = 0;
    this._unlocksDifficulty = 0;
    this._achievementFinished = false;
    this._achievementSerie = __s3param0;
  }
  AchievementVO.prototype.reset = function () {
    this._achievementFinished = false;
  };
  AchievementVO.prototype.fillFromParamXML = function (__s7param0) {
    this._achievementID = parseInt(__s7param0.achievementID || 0);
    this._achievementPoints = parseInt(__s7param0.achievementPoints || 0);
    this._requiredAchievementID = parseInt(__s7param0.requiredAchievementID || 0);
    this._achievementSeriesNumber = parseInt(__s7param0.achievementSeriesNumber || 0);
    this._unlocksDifficulty = parseInt(__s7param0.unlocksDifficulty || 0);
    this._rewards = __dep_export_CollectableManager.CollectableManager.parser.x2cRewards.createList(__s7param0);
    var __s7local0 = (__s7param0.conditions || "").split("#");
    this._conditions = [];
    for (var __s7local1 = 0; __s7local1 < __s7local0.length; ++__s7local1) {
      this._conditions[__s7local1] = new __dep_export_AchievementConditionVO.AchievementConditionVO(__s7local0[__s7local1]);
    }
    this._achievementFinished = false;
  };
  AchievementVO.prototype.setProgress = function (__s11param0) {
    var __s11local0 = true;
    for (var __s11local1 = 0; __s11local1 < __s11param0.length; ++__s11local1) {
      this._conditions[__s11local1].currentProgress = __s11param0[__s11local1] > -1 ? __s11param0[__s11local1] : this._conditions[__s11local1].amount;
      __s11local0 = __s11local0 && this._conditions[__s11local1].hasFinished;
    }
    this._achievementFinished = __s11local0;
    if (this._achievementFinished) {
      this._achievementSerie.setAndCheckNextStep(this._achievementSeriesNumber);
    }
  };
  AchievementVO.prototype.setFinished = function () {
    if (this._conditions != null) {
      for (var __s16local0 = 0, __s16local1 = this._conditions; __s16local0 < __s16local1.length; __s16local0++) {
        var __s16local2 = __s16local1[__s16local0];
        if (__s16local2 !== undefined) {
          __s16local2.currentProgress = __s16local2.amount;
        }
      }
    }
    this._achievementFinished = true;
    this._achievementSerie.setAndCheckNextStep(this._achievementSeriesNumber);
  };
  Object.defineProperty(AchievementVO.prototype, "totalMaxProgress", {
    get: function () {
      var __s22local0 = 0;
      if (this._conditions != null) {
        for (var __s22local1 = 0, __s22local2 = this._conditions; __s22local1 < __s22local2.length; __s22local1++) {
          var __s22local3 = __s22local2[__s22local1];
          if (__s22local3 !== undefined) {
            __s22local0 += __s22local3.amount;
          }
        }
      }
      return __s22local0;
    },
    enumerable: true,
    configurable: true
  });
  AchievementVO.prototype.currentProgress = function () {
    var __s28local0 = 0;
    var __s28local1 = 0;
    if (this._conditions != null) {
      for (var __s28local2 = 0, __s28local3 = this._conditions; __s28local2 < __s28local3.length; __s28local2++) {
        var __s28local4 = __s28local3[__s28local2];
        if (__s28local4 !== undefined) {
          __s28local0++;
          __s28local1 += __s28local4.percentFinished();
        }
      }
    }
    return __s28local1 / __s28local0;
  };
  AchievementVO.prototype.currentRelativeProgress = function () {
    if (this._achievementSerie.achievementSeriesID != __dep_export_CastleAchievementData.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
      return -1;
    } else {
      return this.currentRelativeAchievementPoints() / this.requiredRelativeAchievementPoints();
    }
  };
  AchievementVO.prototype.currentRelativeAchievementPoints = function () {
    return __dep_export_CastleModel.CastleModel.castleAchievementData.achievementPoints - this.previosAchievementRequiredPoints();
  };
  AchievementVO.prototype.requiredRelativeAchievementPoints = function () {
    return this._conditions[0].amount - this.previosAchievementRequiredPoints();
  };
  AchievementVO.prototype.previosAchievementRequiredPoints = function () {
    if (this._requiredAchievementID > 0) {
      return __dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementSeriesByID(__dep_export_CastleAchievementData.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID).achievements[this._requiredAchievementID]._conditions[0].amount;
    } else {
      return 0;
    }
  };
  Object.defineProperty(AchievementVO.prototype, "totalCurrentProgress", {
    get: function () {
      var __s46local0 = 0;
      if (this._conditions != null) {
        for (var __s46local1 = 0, __s46local2 = this._conditions; __s46local1 < __s46local2.length; __s46local1++) {
          var __s46local3 = __s46local2[__s46local1];
          if (__s46local3 !== undefined) {
            __s46local0 += __s46local3.currentProgress;
          }
        }
      }
      return __s46local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementID", {
    get: function () {
      return this._achievementID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementPoints", {
    get: function () {
      return this._achievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "requiredAchievementID", {
    get: function () {
      return this._requiredAchievementID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementSeriesNumber", {
    get: function () {
      return this._achievementSeriesNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "conditions", {
    get: function () {
      return this._conditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementSerieVO", {
    get: function () {
      return this._achievementSerie;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "displayDisp", {
    get: function () {
      var __s64local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this._achievementSerie.displayName, this._achievementSerie.getFilePath(), null, 0, false);
      __s64local0.recycleAsset = false;
      return __s64local0.asDisplayObject();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "hasYellowBar", {
    get: function () {
      switch (this.conditions[0].type) {
        case "tools":
          return false;
        default:
          return this.totalMaxProgress > 1 || this.achievementSerieVO.numberOfAchievementsInSeries > 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "hasDifficultyUnlock", {
    get: function () {
      return this._unlocksDifficulty > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "unlocksDifficulty", {
    get: function () {
      return this._unlocksDifficulty;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementVO.prototype, "achievementFinished", {
    get: function () {
      return this._achievementFinished;
    },
    enumerable: true,
    configurable: true
  });
  return AchievementVO;
}();
exports.AchievementVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleAchievementData = require("gge-module:export_CastleAchievementData");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AchievementConditionVO = require("gge-module:export_AchievementConditionVO");
