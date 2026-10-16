Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleScoreEventScoreBarProperties(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = null, __s3param5 = CastleScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS, __s3param6 = CastleScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS) {
    this._numberOfRankRewards = 0;
    this._numberOfThresholdRewards = 0;
    this._rewardList = __s3param0;
    this._classTextID = __s3param1;
    this._toolTipValues = __s3param2;
    this._labels = __s3param3 || [];
    this._descriptions = __s3param4 || [];
    this._numberOfRankRewards = __s3param6;
    this._numberOfThresholdRewards = __s3param5;
  }
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "maxItemsPerReward", {
    get: function () {
      return CastleScoreEventScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "numThresholdRewards", {
    get: function () {
      return this._numberOfThresholdRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "numRankRewards", {
    get: function () {
      return this._numberOfRankRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "orientation", {
    get: function () {
      return __dep_export_CastleScoreBarComponent.CastleScoreBarComponent.ORIENTATION_HORIZONTAL;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreEventScoreBarProperties.prototype.getOwnPointsText = function (__s13param0) {
    return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13param0);
  };
  CastleScoreEventScoreBarProperties.prototype.getReward = function (__s15param0) {
    return this._rewardList[__s15param0];
  };
  CastleScoreEventScoreBarProperties.prototype.getToolTip = function (__s17param0, __s17param1) {
    var __s17local0;
    switch (this.getRewardTypeByIndex(__s17param0)) {
      case CastleScoreEventScoreBarProperties.TYPE_THRESHOLD:
        __s17local0 = "dialog_" + this._classTextID + "_nobilityPoints_tooltip";
        break;
      case CastleScoreEventScoreBarProperties.TYPE_TOPX:
        __s17local0 = __s17param1 ? "dialog_" + this._classTextID + "_gotTopxReward_tooltip" : "dialog_" + this._classTextID + "_topxRewardCondition_tooltip";
        break;
      case CastleScoreEventScoreBarProperties.TYPE_WINNER:
        __s17local0 = __s17param1 ? "dialog_" + this._classTextID + "_gotRoyalReward_tooltip" : "dialog_" + this._classTextID + "_royalRewardCondition_tooltip";
    }
    if (__s17local0 == "dialog_longPointsEvent_nobilityPoints_tooltip") {
      __s17local0 = "dialog_dailyQuests_costs";
    }
    return {
      t: __s17local0,
      p: [__dep_exact_f855840627e6e145.int(this._toolTipValues[__s17param0] ? this._toolTipValues[__s17param0] : 1)]
    };
  };
  CastleScoreEventScoreBarProperties.prototype.getLabel = function (__s21param0) {
    if (isNaN(this._labels[__s21param0])) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._labels[__s21param0]);
    } else {
      return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._labels[__s21param0]);
    }
  };
  CastleScoreEventScoreBarProperties.prototype.getDescription = function (__s25param0) {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._descriptions[__s25param0]);
  };
  CastleScoreEventScoreBarProperties.prototype.hasLabels = function () {
    return this._labels.length > 0;
  };
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "numLabels", {
    get: function () {
      if (this._labels) {
        return this._labels.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreEventScoreBarProperties.prototype.hasDecriptions = function () {
    return this._descriptions.length > 0;
  };
  CastleScoreEventScoreBarProperties.prototype.setLabels = function (__s35param0) {
    this._labels = __s35param0 || [];
  };
  CastleScoreEventScoreBarProperties.prototype.getRewardTypeByIndex = function (__s37param0) {
    if (__s37param0 < this.numThresholdRewards) {
      return CastleScoreEventScoreBarProperties.TYPE_THRESHOLD;
    } else if (__s37param0 == this.numThresholdRewards + this.numRankRewards - 1) {
      return CastleScoreEventScoreBarProperties.TYPE_WINNER;
    } else {
      return CastleScoreEventScoreBarProperties.TYPE_TOPX;
    }
  };
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "rewardIconDimension", {
    get: function () {
      return CastleScoreEventScoreBarProperties.REWARD_ICON_DIMENSIONS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreEventScoreBarProperties.prototype, "collectableRenderOption", {
    get: function () {
      return __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreEventScoreBarProperties.prototype.preRenderFunc = function (__s46param0) {};
  CastleScoreEventScoreBarProperties.prototype.thresholdProgress = function (__s48param0, __s48param1, __s48param2) {
    var __s48local0 = __s48param1[__s48param0];
    var __s48local1 = __s48param0 > 0 ? __s48param1[__s48param0 - 1] : 0;
    return Math.min(1, Math.max(__s48param2 - __s48local1, 0) / (__s48local0 - __s48local1));
  };
  CastleScoreEventScoreBarProperties.__initialize_static_members = function () {
    CastleScoreEventScoreBarProperties.REWARD_ICON_DIMENSIONS = new __s0local0(40, 40);
    CastleScoreEventScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE = 2;
    CastleScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS = 3;
    CastleScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS = 2;
    CastleScoreEventScoreBarProperties.TYPE_THRESHOLD = 0;
    CastleScoreEventScoreBarProperties.TYPE_TOPX = 1;
    CastleScoreEventScoreBarProperties.TYPE_WINNER = 2;
  };
  return CastleScoreEventScoreBarProperties;
}();
exports.CastleScoreEventScoreBarProperties = __s0local1;
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IScorebarProperties");
__s0local1.__initialize_static_members();
