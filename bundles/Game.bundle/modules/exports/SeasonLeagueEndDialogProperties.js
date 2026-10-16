Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueEndDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._eventId = 0;
    __s3local0._points = 0;
    __s3local0._rank = 0;
    __s3local0._isSeasonPassEnabled = false;
    __s3local0._isEventPassEnabled = false;
    __s3local0._isPromotionPassEnabled = false;
    __s3local0._rewardSetId = 0;
    __s3local0._allianceRank = 0;
    __s3local0.instanceID = -1;
    __s3local0.seasonID = -1;
    __s3local0.rewardHubVO = null;
    __s3local0.rewardHubVO = __s3param0.rewardHubVO ? __s3param0.rewardHubVO : null;
    __s3local0._eventId = __dep_exact_f855840627e6e145.int(__s3param0.hasOwnProperty("EID") ? __s3param0.EID : -1);
    __s3local0._promotionVO = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(__s3param0.KLRID);
    __s3local0._points = __dep_exact_f855840627e6e145.int(__s3param0.KLCP);
    __s3local0._rank = __dep_exact_f855840627e6e145.int(__s3param0.R);
    __s3local0._isSeasonPassEnabled = __s3param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_PASS_ENABLED] == 1;
    __s3local0._isEventPassEnabled = __s3param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_EVENT_PASS_ENABLED] == 1;
    __s3local0._isPromotionPassEnabled = __s3param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_PROMOTION_PASS_ENABLED] == 1;
    __s3local0._rewardSetId = __dep_exact_f855840627e6e145.int(__s3param0.RSID);
    __s3local0._leaguetypeID = __dep_exact_f855840627e6e145.int(__s3param0.KLLID);
    __s3local0.instanceID = __dep_exact_f855840627e6e145.int(__s3param0[__dep_exact_26a421b704832cff.CommKeys.INSTANCE_ID]);
    __s3local0.seasonID = __dep_exact_f855840627e6e145.int(__s3param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_ID]);
    __s3local0._seasonMedals = new __dep_export_CollectableList.CollectableList();
    if (__s3param0.hasOwnProperty("KLM")) {
      for (var __s3local1 = 0, __s3local2 = __s3param0.KLM; __s3local1 < __s3local2.length; __s3local1++) {
        var __s3local3 = __s3local2[__s3local1];
        if (__s3local3 !== undefined) {
          __s3local0._seasonMedals.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, __s3local3[1], __s3local3[0]));
        }
      }
    }
    __s3local0._allianceRank = __dep_exact_f855840627e6e145.int(__s3param0.hasOwnProperty("KLAR") ? __s3param0.KLAR : -1);
    __s3local0._allianceMedals = null;
    if (__s3param0.hasOwnProperty("KLAM")) {
      __s3local0._allianceMedals = new __dep_export_CollectableList.CollectableList();
      for (var __s3local4 = 0, __s3local5 = __s3param0.KLAM; __s3local4 < __s3local5.length; __s3local4++) {
        __s3local3 = __s3local5[__s3local4];
        __s3local0._allianceMedals.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, __s3local3[1], __s3local3[0]));
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEndDialogProperties, __s1param0);
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isPromotionPassEnabled", {
    get: function () {
      return this._isPromotionPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isEventPassEnabled", {
    get: function () {
      return this._isEventPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isSeasonEventEndDialog", {
    get: function () {
      return this._eventId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueEndDialogProperties.prototype.getEventName = function () {
    if (this.isSeasonEventEndDialog) {
      return __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.getEventName(this.eventId);
    } else {
      return "seasonLeague";
    }
  };
  SeasonLeagueEndDialogProperties.prototype.getPromotionRewardsVO = function () {
    var __s24local0 = new __dep_export_SeasonLeaguePromotionRewardsComponentVO.SeasonLeaguePromotionRewardsComponentVO();
    if (this.rewardHubVO) {
      __s24local0.normalRewards.addList(this.rewardHubVO.rewardTiers[0].rewards);
      __s24local0.premiumRewards.addList(this.rewardHubVO.rewardTiers[1].rewards);
      __s24local0.hasCollectedNormal = false;
      __s24local0.hasCollectedPremium = false;
      __s24local0.isUnlocked = this.rewardHubVO.isExtraTierUnlocked;
    } else {
      if (this.isSeasonEventEndDialog) {
        __s24local0.normalRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(this.rewardSetId, this.eventId, this.promotionVO.id, false);
        __s24local0.premiumRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEventRewards(this.rewardSetId, this.eventId, this.promotionVO.id, true);
      } else if (this.rank > 0 && this._seasonMedals.getAmountOrDefaultByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD)) > 0) {
        __s24local0.normalRewards = __dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEndRewardForRank(this.rewardSetId, this.rank, this._leaguetypeID).rewardIds);
      }
      __s24local0.hasCollectedNormal = false;
      __s24local0.hasCollectedPremium = false;
      __s24local0.isUnlocked = this.isSeasonPassEnabled || this.isPromotionPassEnabled;
    }
    return __s24local0;
  };
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "isSeasonPassEnabled", {
    get: function () {
      return this._isSeasonPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "seasonMedals", {
    get: function () {
      return this._seasonMedals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "promotionVO", {
    get: function () {
      return this._promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogProperties.prototype, "allianceMedals", {
    get: function () {
      return this._allianceMedals;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SeasonLeagueEndDialogProperties = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_SeasonLeaguePromotionRewardsComponentVO = require("gge-module:export_SeasonLeaguePromotionRewardsComponentVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
