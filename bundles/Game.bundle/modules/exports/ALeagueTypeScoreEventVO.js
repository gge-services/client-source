Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function ALeagueTypeScoreEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._hardModePointsThreshold = 0;
    __s3local0._hardModePointsThresholdIndex = 0;
    __s3local0._rewardSetId = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ALeagueTypeScoreEventVO, __s1param0);
  ALeagueTypeScoreEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    this._rewardSetId = __dep_exact_f855840627e6e145.int(__s5param0.RSID);
  };
  ALeagueTypeScoreEventVO.prototype.parseAdditionalXmlFromRoot = function (__s7param0) {
    __s1param0.prototype.parseAdditionalXmlFromRoot.call(this, __s7param0);
    var __s7local0 = __s7param0.leaguetypeevents;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = parseInt(__s7local3.eventID || "");
          var __s7local5 = parseInt(__s7local3.leaguetypeID || "");
          var __s7local6 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("subType", __s7local3, "0"));
          var __s7local7 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardSetID", __s7local3, "0"));
          var __s7local8 = this._rewardSetId <= 0 || __s7local7 == this._rewardSetId;
          if (__s7local4 == this._eventId && this.subTypeID == __s7local6 && __s7local5 == this._leagueID && __s7local8) {
            this.parseLeagueTypeEventElement(__s7local3);
            this.parseDifficultyScaling(__s7local3);
            return;
          }
        }
      }
    }
    throw new Error("Did not find matching leagueTypeEventEntry for eventId '" + this._eventId + "', leagueId '" + this._leagueID + "',subType '" + this.subTypeID + "' and rewardSetId '" + this._rewardSetId + "'.");
  };
  ALeagueTypeScoreEventVO.prototype.parseDifficultyScaling = function (__s14param0) {
    var __s14local0 = (__s14param0.difficultyScalingRewardIDs || "").toString();
    this._scaledRewardListsRaw = __dep_export_CollectableManager.CollectableManager.parser.createListsFromRewardIdsString(__s14local0, true, __dep_export_CollectableParser.CollectableParser.DEFAULT_REWARD_DELIMITER, __dep_export_CollectableParser.CollectableParser.DEFAULT_REWARD_SUBDELIMITER);
    this._difficultyIDForMaxPoints = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s14param0.difficultyIDforMaxPoints || "", ",");
    this._difficultyMaxPoints = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s14param0.difficultyMaxPoints || "", ",");
    this._scaledPointThreshholdsRaw = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s14param0.difficultyScalingNeededPointsForRewards || "", ",");
  };
  ALeagueTypeScoreEventVO.prototype.parseLeagueTypeEventElement = function (__s16param0) {
    this._hardModePointsThresholdIndex = -1;
    this._hardModePointsThreshold = parseInt(__s16param0.hardModeStart || "");
    this._topX = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s16param0.topXValue || "", ",");
    var __s16local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s16param0.neededPointsForRewards || "", ",");
    var __s16local1 = __dep_exact_f855840627e6e145.int(__s16local0.length);
    this._pointThreshholds = [];
    this._pointThreshholdsHardMode = [];
    this._pointThreshholdsRaw = [];
    for (var __s16local2 = 0; __s16local2 < __s16local1; __s16local2++) {
      var __s16local3 = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s16local0[__s16local2]));
      if (this._hardModePointsThreshold > 0 && __s16local3 > this._hardModePointsThreshold) {
        if (this._hardModePointsThresholdIndex == -1) {
          this._hardModePointsThresholdIndex = __s16local2;
        }
        if (__s16local2 == 0) {
          this._pointThreshholdsHardMode.push(__s16local3);
        } else {
          this._pointThreshholdsHardMode.push(__s16local3 * this._pointScale);
        }
      } else if (__s16local2 == 0) {
        this._pointThreshholds.push(__s16local3);
      } else {
        this._pointThreshholds.push(__s16local3 * this._pointScale);
      }
      if (__s16local2 == 0) {
        this._pointThreshholdsRaw.push(__s16local3);
      } else {
        this._pointThreshholdsRaw.push(__s16local3 * this._pointScale);
      }
    }
    var __s16local4 = (__s16param0.rewardIDs || "").toString();
    this._rewardListsRaw = __dep_export_CollectableManager.CollectableManager.parser.createListsFromRewardIdsString(__s16local4, true, __dep_export_CollectableParser.CollectableParser.DEFAULT_REWARD_DELIMITER, __dep_export_CollectableParser.CollectableParser.DEFAULT_REWARD_SUBDELIMITER);
    var __s16local5 = this._rewardListsRaw.length;
    var __s16local6 = __dep_exact_f855840627e6e145.int(__s16local5 - __s16local1);
    if (__s16local6 == 0 && this._hardModePointsThresholdIndex == -1) {
      this._rewardLists = this._rewardListsRaw.slice();
    } else {
      this._rewardListsHardMode = this._rewardListsRaw.slice(this._hardModePointsThresholdIndex);
      this._rewardLists = this._rewardListsRaw.slice(0, this._hardModePointsThresholdIndex);
      this._rewardLists = this._rewardLists.concat(this._rewardListsHardMode.slice(this._rewardListsHardMode.length - __s16local6));
    }
    this._allianceRewardThresholdPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceRewardThresholdPoints", __s16param0, "0"));
  };
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "isDifficultyScalingActivated", {
    get: function () {
      return this._difficultyIDChoosen > 0 && this._difficultyIDForMaxPoints.indexOf(this._difficultyIDChoosen) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "pointThresholdsRaw", {
    get: function () {
      if (this.isDifficultyScalingActivated || this._difficultyScalingEnabled && this.isAllianceRewardScore) {
        return this._scaledPointThreshholdsRaw;
      } else {
        return this._pointThreshholds;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "hardModePointsThreshold", {
    get: function () {
      return this._hardModePointsThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "isHardMode", {
    get: function () {
      return !this.isDifficultyScalingActivated && this.hardModePointsThreshold > 0 && this.ownPoints >= this.hardModePointsThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "pointThreshholdsHardMode", {
    get: function () {
      return this._pointThreshholdsHardMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardListsHardMode", {
    get: function () {
      return this._rewardListsHardMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardListsRaw", {
    get: function () {
      return this._rewardListsRaw;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "pointThreshholdsRaw", {
    get: function () {
      return this._pointThreshholdsRaw;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardsReceivedHardMode", {
    get: function () {
      var __s48local0 = 0;
      for (__s48local0 = 0; __s48local0 < this.pointThreshholdsHardMode.length && !(this.pointThreshholdsHardMode[__s48local0] > this.ownPoints); ++__s48local0);
      return __s48local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardsReceivedRaw", {
    get: function () {
      var __s51local0 = 0;
      for (__s51local0 = 0; __s51local0 < this.pointThreshholdsRaw.length && !(this.pointThreshholdsRaw[__s51local0] > this.ownPoints); ++__s51local0);
      return __s51local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "isPlayerQualifiedForAllianceRewards", {
    get: function () {
      return this._ownPoints >= this._allianceRewardThresholdPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALeagueTypeScoreEventVO.prototype, "allianceRewardThresholdPoints", {
    get: function () {
      return this._allianceRewardThresholdPoints;
    },
    enumerable: true,
    configurable: true
  });
  return ALeagueTypeScoreEventVO;
}(require("gge-module:export_AScoreEventVO").AScoreEventVO);
exports.ALeagueTypeScoreEventVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableParser = require("gge-module:export_CollectableParser");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
