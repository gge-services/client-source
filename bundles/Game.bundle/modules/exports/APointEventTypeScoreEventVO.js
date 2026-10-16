Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_AScoreEventVO = require("gge-module:export_AScoreEventVO");
var __dep_export_ScoreConditionVO = require("gge-module:export_ScoreConditionVO");
var __s0local0 = function (__s1param0) {
  function APointEventTypeScoreEventVO(__s3param0 = 0) {
    var __s3local0 = this;
    __s3local0._pointEventTypeID = -1;
    __s3local0._disableRanking = false;
    __s3local0._kingdomId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._rewardLists = [];
    __s3local0.scoreConditions = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APointEventTypeScoreEventVO, __s1param0);
  APointEventTypeScoreEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    if (__s5param0.PET) {
      this._pointEventTypeID = __dep_exact_f855840627e6e145.int(__s5param0.PET);
    }
    this.addRewardsToList(__s5param0.R);
  };
  APointEventTypeScoreEventVO.prototype.addRewardsToList = function (__s8param0) {
    if (__s8param0) {
      for (var __s8local0 = 0; __s8local0 < __s8param0.length; __s8local0++) {
        this._rewardLists.push(__dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s8param0[__s8local0]));
      }
    }
  };
  APointEventTypeScoreEventVO.prototype.parseAdditionalXmlFromRoot = function (__s13param0) {
    var __s13local0;
    var __s13local1 = 0;
    __s1param0.prototype.parseAdditionalXmlFromRoot.call(this, __s13param0);
    var __s13local2 = __s13param0.pointeventtypes;
    if (__s13local2 != null) {
      for (var __s13local3 = 0, __s13local4 = __s13local2; __s13local3 < __s13local4.length; __s13local3++) {
        var __s13local5 = __s13local4[__s13local3];
        if (__s13local5 !== undefined) {
          if (parseInt(__s13local5.pointEventTypeID || "") == this._pointEventTypeID) {
            __s13local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s13local5.pointEventQuestIDs || "", ",");
          }
        }
      }
    }
    if (!__s13local0 || __s13local0.length == 0) {
      throw new Error("Did not find matching pointeventtype XML node for event ID " + this._eventId + " and point event type ID " + this._pointEventTypeID + ".");
    }
    if (__s13local0 != null) {
      for (var __s13local6 = 0, __s13local7 = __s13local0; __s13local6 < __s13local7.length; __s13local6++) {
        var __s13local8 = __s13local7[__s13local6];
        if (__s13local8 !== undefined) {
          var __s13local9 = __s13param0.pointeventquests;
          if (__s13local9 != null) {
            for (var __s13local10 = 0, __s13local11 = __s13local9; __s13local10 < __s13local11.length; __s13local10++) {
              var __s13local12 = __s13local11[__s13local10];
              if (__s13local12 !== undefined) {
                if (parseInt(__s13local12.pointEventQuestID || "") == __s13local8) {
                  var __s13local13 = parseInt(__s13local12.leaguetypeID || "");
                  __s13local1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("subType", __s13local12, "0"));
                  if (__s13local13 == this._leagueID && this.subTypeID == __s13local1) {
                    this.parsePointEventQuest(__s13local12);
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
    throw new Error("Did not find matching pointeventquest XML node for event ID " + this._eventId + ", league ID " + this._leagueID + ", subtype " + __s13local1 + " and any of " + __s13local0.toString() + " quest IDs.");
  };
  APointEventTypeScoreEventVO.prototype.getCondition = function (__s31param0) {
    return this.scoreConditions[__s31param0];
  };
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "conditionCount", {
    get: function () {
      return this.scoreConditions.length;
    },
    enumerable: true,
    configurable: true
  });
  APointEventTypeScoreEventVO.prototype.parsePointEventQuest = function (__s35param0) {
    this._kingdomId = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kID", __s35param0, "-1"));
    for (var __s35local0 = (__s35param0.conditions || "").split("#"), __s35local1 = [], __s35local2 = 0; __s35local2 < __s35local0.length; __s35local2++) {
      __s35local1[__s35local2] = __s35local0[__s35local2].toString().split("+");
    }
    var __s35local3 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("pointsPerTier", __s35param0, "");
    var __s35local4 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s35local3, ",");
    if (__s35local4.length != __s35local1.length) {
      throw new Error("The length of pointsPerTier and conditions in pointeventquest XML node with id " + (__s35param0.pointEventQuestID || "") + ":  must be the same!");
    }
    this.scoreConditions.length = 0;
    for (var __s35local5 = 0; __s35local5 < __s35local1.length; ++__s35local5) {
      this.scoreConditions.push(new __dep_export_ScoreConditionVO.ScoreConditionVO(__s35local4[__s35local5], __s35local1[__s35local5], this._kingdomId));
    }
    this._topX = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("topXValue", __s35param0, ""), ",");
    this._pointThreshholds = [];
    this._pointThreshholds.push(__dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("neededPointsForReward1", __s35param0, null)));
    this._pointThreshholds.push(__dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("neededPointsForReward2", __s35param0, null)) * this._pointScale);
    this._pointThreshholds.push(__dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("neededPointsForReward3", __s35param0, null)) * this._pointScale);
    this._disableRanking = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hasInvisibleRanking", __s35param0, "0")) != 0;
  };
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "disableRanking", {
    get: function () {
      return this._disableRanking;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APointEventTypeScoreEventVO.prototype, "isKingdomSpecific", {
    get: function () {
      return this._kingdomId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  return APointEventTypeScoreEventVO;
}(__dep_export_AScoreEventVO.AScoreEventVO);
exports.APointEventTypeScoreEventVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
