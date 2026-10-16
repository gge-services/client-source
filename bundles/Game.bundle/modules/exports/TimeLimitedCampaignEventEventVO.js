Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function TimeLimitedCampaignEventEventVO() {
    var __s3local0 = this;
    __s3local0._receivedReward = false;
    __s3local0._endRewardValue = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TimeLimitedCampaignEventEventVO, __s1param0);
  TimeLimitedCampaignEventEventVO.prototype.parseParamObject = function (__s5param0) {
    this._rewardList = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s5param0.RIDS);
    this._receivedReward = __s5param0.COL == 1;
    this._endRewardValue = __dep_exact_f855840627e6e145.int(__s5param0[__dep_exact_26a421b704832cff.CommKeys.END_REWARD_VALUE]);
    this._campaignQuests = [];
    var __s5local0 = __s5param0.CQS;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = __dep_export_CastleModel.CastleModel.questData.createQuest(__s5local3.QID);
          __s5local4.fillFromParams(__s5local3);
          this._campaignQuests.push(__s5local4);
        }
      }
    }
    this._campaignQuests.sort(this.bindFunction(this.sortByOrder));
    for (var __s5local5 = 0; __s5local5 < this._campaignQuests.length; __s5local5++) {
      this.campaignQuests[__s5local5].campaignSortOrder = __s5local5 + 1;
    }
  };
  TimeLimitedCampaignEventEventVO.prototype.sortByOrder = function (__s13param0, __s13param1) {
    if (__s13param0.campaignQuestTimeStamp != __s13param1.campaignQuestTimeStamp) {
      return __s13param0.campaignQuestTimeStamp - __s13param1.campaignQuestTimeStamp;
    } else {
      return __s13param0.campaignQuestID - __s13param1.campaignQuestID;
    }
  };
  TimeLimitedCampaignEventEventVO.prototype.getQuestByID = function (__s17param0) {
    if (this.campaignQuests != null) {
      for (var __s17local0 = 0, __s17local1 = this.campaignQuests; __s17local0 < __s17local1.length; __s17local0++) {
        var __s17local2 = __s17local1[__s17local0];
        if (__s17local2 !== undefined && __s17local2.questID == __s17param0) {
          return __s17local2;
        }
      }
    }
    return null;
  };
  TimeLimitedCampaignEventEventVO.prototype.parseCQS = function (__s23param0) {
    this.parseParamObject(__s23param0);
  };
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "rewards", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "receivedReward", {
    get: function () {
      return this._receivedReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "buyCost", {
    get: function () {
      var __s29local0 = 0;
      if (this._campaignQuests != null) {
        for (var __s29local1 = 0, __s29local2 = this._campaignQuests; __s29local1 < __s29local2.length; __s29local1++) {
          var __s29local3 = __s29local2[__s29local1];
          if (__s29local3 !== undefined && __s29local3.isCompleted) {
            __s29local0++;
          }
        }
      }
      return __dep_exact_26a421b704832cff_1.TimeLimitedCampaignConst.calculateEndRewardPurchaseCost(this._endRewardValue, this._campaignQuests.length, __s29local0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TimeLimitedCampaignEventEventVO.prototype, "campaignQuests", {
    get: function () {
      return this._campaignQuests;
    },
    enumerable: true,
    configurable: true
  });
  return TimeLimitedCampaignEventEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.TimeLimitedCampaignEventEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
