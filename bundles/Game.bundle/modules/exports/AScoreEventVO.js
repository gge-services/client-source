Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AScoreEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._subTypeID = 0;
    __s3local0._numberOfLeagues = 0;
    __s3local0._ownRank = -1;
    __s3local0._ownPoints = 0;
    __s3local0._maxPoints = 0;
    __s3local0._leagueID = 1;
    __s3local0._pointScale = 1;
    __s3local0._pointThreshholds = [];
    __s3local0._topX = [];
    __s3local0._rewardLists = [];
    __s3local0._difficultyIDChoosen = -1;
    __s3local0._difficultyScalingEnabled = false;
    __s3local0.isAllianceRewardScore = false;
    __s3local0._leaderBoardRewardSetID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._subTypeID = __s3param0;
    __s3local0.eventOverviewConfig.eventOverviewDetails = __dep_export_EventOverviewDetailEnum.EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AScoreEventVO, __s1param0);
  AScoreEventVO.prototype.parseAdditionalXmlFromRoot = function (__s5param0) {
    this.generateLeagueLevelsList(__s5param0);
  };
  AScoreEventVO.prototype.parseBasicsFromParamObject = function (__s7param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s7param0);
    if (__s7param0[__dep_exact_26a421b704832cff.CommKeys.EVENT_DIFFICULTY_ID] != undefined) {
      this._difficultyIDChoosen = __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.EVENT_DIFFICULTY_ID]);
    }
    this._difficultyScalingEnabled = __s7param0[__dep_exact_26a421b704832cff.CommKeys.EVENT_AUTO_SCALING_ENABLED] != undefined && __dep_exact_f855840627e6e145.int(__s7param0[__dep_exact_26a421b704832cff.CommKeys.EVENT_AUTO_SCALING_ENABLED]) == 1;
    if (!this._difficultyScalingEnabled) {
      this._difficultyIDChoosen = 0;
    }
    if (__s7param0.LID) {
      this._leagueID = __dep_exact_f855840627e6e145.int(__s7param0.LID);
    }
    if (__s7param0.OR) {
      this._ownRank = __dep_exact_f855840627e6e145.int(__s7param0.OR);
    }
    if (__s7param0.ST) {
      this._subTypeID = __dep_exact_f855840627e6e145.int(__s7param0.ST);
    }
    if (__s7param0.OP) {
      this._ownPoints = __dep_exact_f855840627e6e145.int(__s7param0.OP);
      if (this.seasonLeague) {
        this.seasonLeague.participatedOnEvent = this._ownPoints > 0;
      }
    }
    if (__s7param0.SC) {
      this._pointScale = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s7param0.SC));
    }
    if (__s7param0.LRSI) {
      this._leaderBoardRewardSetID = __s7param0.LRSI;
    }
  };
  AScoreEventVO.prototype.leagueLevels = function (__s18param0) {
    if (this._leagueLevels.get(__s18param0) && this._leagueLevels.get(__s18param0).length == 2) {
      return this._leagueLevels.get(__s18param0);
    } else {
      return ["-", "-"];
    }
  };
  AScoreEventVO.prototype.needToOpenDifficultyDialog = function () {
    return this._difficultyIDChoosen == -1;
  };
  AScoreEventVO.prototype.countVictories = function (__s24param0) {
    return this._countVictories.get(__s24param0);
  };
  AScoreEventVO.prototype.generateLeagueLevelsList = function (__s26param0) {
    this._leagueLevels = new Map();
    this._countVictories = new Map();
    this._numberOfLeagues = 0;
    var __s26local0 = __s26param0.leaguetypes;
    if (__s26local0 != null) {
      for (var __s26local1 = 0, __s26local2 = __s26local0; __s26local1 < __s26local2.length; __s26local1++) {
        var __s26local3 = __s26local2[__s26local1];
        if (__s26local3 !== undefined) {
          var __s26local4 = parseInt(__s26local3.leaguetypeID || "");
          var __s26local5 = parseInt(__s26local3.eventID || "");
          var __s26local6 = parseInt(__s26local3.minLevel || "");
          var __s26local7 = parseInt(__s26local3.maxLevel || "");
          var __s26local8 = parseInt(__s26local3.countVictoryMin || "");
          var __s26local9 = parseInt(__s26local3.countVictoryMax || "");
          var __s26local10 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("subType", __s26local3, "0"));
          if (this.eventId == __s26local5 && __s26local10 == this._subTypeID) {
            this._leagueLevels.set(__s26local4, [__s26local6, __s26local7]);
            this._countVictories.set(__s26local4, [__s26local8, __s26local9]);
            this._numberOfLeagues++;
          }
        }
      }
    }
  };
  Object.defineProperty(AScoreEventVO.prototype, "difficultyIDChoosen", {
    get: function () {
      return this._difficultyIDChoosen;
    },
    set: function (__s35param0) {
      this._difficultyIDChoosen = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "difficultyScalingEnabled", {
    set: function (__s37param0) {
      this._difficultyScalingEnabled = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "maxPointsForThisDifficulty", {
    get: function () {
      return this._difficultyMaxPoints[this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "isDifficultyScalingActivated", {
    get: function () {
      return this._difficultyIDChoosen > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "pointThresholdsRaw", {
    get: function () {
      return this._pointThreshholds;
    },
    enumerable: true,
    configurable: true
  });
  AScoreEventVO.prototype.getHighest4RewardsForDifficulty = function (__s45param0) {
    var __s45local0 = new __dep_export_CollectableList.CollectableList();
    var __s45local1 = this._pointThreshholds.length - 1;
    var __s45local2 = __s45param0 > 0 && this._difficultyIDForMaxPoints.indexOf(__s45param0) >= 0;
    if (__s45local2) {
      var __s45local3 = this._difficultyMaxPoints[this._difficultyIDForMaxPoints.indexOf(__s45param0)];
      for (__s45local1 = 0; __s45local1 <= this._scaledPointThreshholdsRaw.length && !(__s45local1 + 1 >= this._scaledPointThreshholdsRaw.length) && !(this._scaledPointThreshholdsRaw[__s45local1 + 1] > __s45local3); __s45local1++);
    }
    for (; __s45local0.length < 4; __s45local1--) {
      __s45local0.addList((__s45local2 ? this._scaledRewardListsRaw : this._rewardLists)[__s45local1]);
    }
    return __s45local0;
  };
  AScoreEventVO.prototype.getRewardsAndPointsArrayForDifficultyDescending = function (__s51param0) {
    var __s51local0 = [];
    var __s51local1 = __s51param0 > 0 && this._difficultyIDForMaxPoints.indexOf(__s51param0) >= 0 || this.isAllianceRewardScore;
    var __s51local2 = __s51local1 ? this._scaledRewardListsRaw : this._rewardLists;
    var __s51local3 = __s51local1 ? this._scaledPointThreshholdsRaw : this._pointThreshholds;
    var __s51local4 = __s51local3[__s51local3.length - 1];
    if (__s51local1) {
      var __s51local5 = 0;
      __s51local5 = this.isAllianceRewardScore ? this._difficultyIDForMaxPoints.length - 1 : this._difficultyIDForMaxPoints.indexOf(__s51param0);
      __s51local4 = this._difficultyMaxPoints[__s51local5];
    }
    var __s51local6 = __s51local2.length - 1;
    for (__s51local5 = 0; __s51local6 >= 0; __s51local6--, __s51local5++) {
      if (__s51local6 >= __s51local3.length || __s51local3[__s51local6] <= __s51local4) {
        var __s51local7;
        var __s51local8 = 0;
        switch (__s51local6) {
          case __s51local2.length - 1:
            __s51local7 = 1;
            break;
          case __s51local2.length - 2:
            __s51local7 = this._topX[1];
            break;
          case __s51local2.length - 3:
            __s51local7 = this._topX[0];
            break;
          default:
            __s51local8 = this._scaledPointThreshholdsRaw[__s51local6];
        }
        __s51local0.push([__s51local7, __s51local8, __s51local2[__s51local6], __s51local5]);
      }
    }
    return __s51local0;
  };
  AScoreEventVO.prototype.getRewardGroupsAndPointsArrayForDifficultyDescending = function () {
    var __s58local0 = [];
    var __s58local1 = this._difficultyIDForMaxPoints.length - 1;
    var __s58local2 = this._scaledRewardListsRaw.length - 4;
    do {
      var __s58local3;
      __s58local3 = __s58local1 > 0 && this._difficultyMaxPoints[__s58local1] <= this._difficultyMaxPoints[__s58local1 - 1] ? [this._difficultyIDForMaxPoints[__s58local1], this._difficultyIDForMaxPoints[__s58local1 - 1]] : [this._difficultyIDForMaxPoints[__s58local1]];
      var __s58local4 = this._difficultyMaxPoints[__s58local1 - __s58local3.length];
      var __s58local5 = [];
      while (__s58local2 >= 0) {
        var __s58local6 = this._scaledPointThreshholdsRaw[__s58local2];
        if (__s58local6 <= __s58local4) {
          break;
        }
        __s58local5.push([__s58local6, this._scaledRewardListsRaw[__s58local2]]);
        __s58local2--;
      }
      __s58local0.push([__s58local3, __s58local5]);
      __s58local1 -= __s58local3.length;
    } while (__s58local1 > -1);
    return __s58local0;
  };
  AScoreEventVO.prototype.getRewardsForChoosenDifficultyAscending = function () {
    var __s65local0 = [];
    var __s65local1 = this._difficultyIDChoosen > 0 && this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen) >= 0 || this.isAllianceRewardScore;
    var __s65local2 = __s65local1 ? this._scaledRewardListsRaw : this._rewardLists;
    var __s65local3 = __s65local1 ? this._scaledPointThreshholdsRaw : this._pointThreshholds;
    var __s65local4 = __s65local3[__s65local3.length - 1];
    if (!this.isAllianceRewardScore) {
      var __s65local5 = 0;
      __s65local5 = this.isAllianceRewardScore ? this._difficultyIDForMaxPoints.length - 1 : this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen);
      __s65local4 = this._difficultyMaxPoints[__s65local5];
    }
    for (var __s65local6 = 0; __s65local6 < __s65local2.length; __s65local6++) {
      if (__s65local6 >= __s65local3.length || __s65local3[__s65local6] <= __s65local4) {
        __s65local0.push(__s65local2[__s65local6]);
      }
    }
    return __s65local0;
  };
  AScoreEventVO.prototype.getThreshholdsForChoosenDifficultyAscending = function () {
    if (!this._difficultyIDForMaxPoints) {
      return this._pointThreshholds;
    }
    var __s71local0 = [];
    var __s71local1 = this._difficultyIDChoosen > 0 && this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen) >= 0 || this.isAllianceRewardScore;
    var __s71local2 = __s71local1 ? this._scaledPointThreshholdsRaw : this._pointThreshholds;
    var __s71local3 = __s71local2[__s71local2.length - 1];
    if (!__s71local1) {
      return __s71local2;
    }
    var __s71local4 = 0;
    __s71local4 = this.isAllianceRewardScore ? this._difficultyIDForMaxPoints.length - 1 : this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen);
    __s71local3 = this._difficultyMaxPoints[__s71local4];
    for (var __s71local5 = 0; __s71local5 < __s71local2.length; __s71local5++) {
      if (__s71local2[__s71local5] <= __s71local3) {
        __s71local0.push(__s71local2[__s71local5]);
      }
    }
    return __s71local0;
  };
  AScoreEventVO.prototype.setRankAndPoints = function (__s78param0, __s78param1, __s78param2) {
    if (__s78param0) {
      this._ownRank = __s78param0[0];
    }
    if (__s78param1) {
      this._ownPoints = __s78param1[0];
    }
    if (__s78param2) {
      this._maxPoints = __s78param2[0];
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleScoreEventEvent.CastleScoreEventEvent(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS));
  };
  Object.defineProperty(AScoreEventVO.prototype, "leagueID", {
    get: function () {
      return this._leagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "pointThresholds", {
    get: function () {
      if (this.isDifficultyScalingActivated || this._difficultyScalingEnabled && this.isAllianceRewardScore) {
        return this.getThreshholdsForChoosenDifficultyAscending();
      } else {
        return this._pointThreshholds;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "ownPoints", {
    get: function () {
      if (this._ownPoints) {
        return this._ownPoints;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "numberOfLeagues", {
    get: function () {
      return this._numberOfLeagues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  AScoreEventVO.prototype.setDynamicTopX = function (__s99param0) {
    this._topX = __s99param0;
  };
  Object.defineProperty(AScoreEventVO.prototype, "subTypeID", {
    get: function () {
      return this._subTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "rewardLists", {
    get: function () {
      if (this.isDifficultyScalingActivated || this._difficultyScalingEnabled && this.isAllianceRewardScore) {
        return this.getRewardsForChoosenDifficultyAscending();
      } else {
        return this._rewardLists;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "rewardsReceived", {
    get: function () {
      var __s107local0 = 0;
      for (__s107local0 = 0; __s107local0 < this.pointThresholds.length && !(this.pointThresholds[__s107local0] > this.maxPoints); ++__s107local0);
      return __s107local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScoreEventVO.prototype, "maxPoints", {
    get: function () {
      return Math.max(this._maxPoints, this._ownPoints);
    },
    enumerable: true,
    configurable: true
  });
  AScoreEventVO.prototype.getGlobalLeaderBoardRewards = function (__s112param0 = -1) {
    return __dep_export_CastleModel.CastleModel.leaderboardRewardsData.getRewardListForDialogList(this.eventId, this._leaderBoardRewardSetID, __s112param0);
  };
  Object.defineProperty(AScoreEventVO.prototype, "leaderBoardRewardSetID", {
    get: function () {
      return this._leaderBoardRewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  return AScoreEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.AScoreEventVO = __s0local0;
var __dep_export_EventOverviewDetailEnum = require("gge-module:export_EventOverviewDetailEnum");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
