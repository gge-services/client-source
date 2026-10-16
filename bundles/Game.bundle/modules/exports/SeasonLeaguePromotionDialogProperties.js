Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SeasonLeaguePromotionDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isSeasonPassEnabled = false;
    __s3local0.isPromoPassEnabled = false;
    __s3local0._rewardSetId = 0;
    __s3local0.seasonID = -1;
    __s3local0.rewardHubVO = null;
    __s3local0._promotionVO = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(__s3param0.KLRID);
    __s3local0._isSeasonPassEnabled = __s3param0.KLP == 1;
    __s3local0.isPromoPassEnabled = __dep_exact_f855840627e6e145.int(__s3param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_PROMOTION_PASS_ENABLED]) == 1;
    __s3local0._rewardSetId = __dep_exact_f855840627e6e145.int(__s3param0.RSID);
    __s3local0._leaguetypeID = __dep_exact_f855840627e6e145.int(__s3param0.KLLID);
    __s3local0.seasonID = __dep_exact_f855840627e6e145.int(__s3param0[__dep_exact_26a421b704832cff.CommKeys.SEASON_ID]);
    __s3local0.rewardHubVO = __s3param0.rewardHubVO ? __s3param0.rewardHubVO : null;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePromotionDialogProperties, __s1param0);
  SeasonLeaguePromotionDialogProperties.prototype.getPromotionRewardsVO = function () {
    var __s5local0 = new __dep_export_SeasonLeaguePromotionRewardsComponentVO.SeasonLeaguePromotionRewardsComponentVO();
    if (this.rewardHubVO) {
      __s5local0.normalRewards.addList(this.rewardHubVO.rewardTiers[0].rewards);
      __s5local0.premiumRewards.addList(this.rewardHubVO.rewardTiers[1].rewards);
      __s5local0.hasCollectedNormal = false;
      __s5local0.hasCollectedPremium = false;
      __s5local0.isUnlocked = this.rewardHubVO.isExtraTierUnlocked;
    } else {
      __s5local0.normalRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotionRewards(this.rewardSetId, this.promotionVO.id, false, this._leaguetypeID);
      __s5local0.premiumRewards = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotionRewards(this.rewardSetId, this.promotionVO.id, true, this._leaguetypeID);
      __s5local0.hasCollectedNormal = false;
      __s5local0.hasCollectedPremium = false;
      __s5local0.isUnlocked = this.isSeasonPassEnabled || this.isPromoPassEnabled;
    }
    return __s5local0;
  };
  Object.defineProperty(SeasonLeaguePromotionDialogProperties.prototype, "promotionVO", {
    get: function () {
      return this._promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialogProperties.prototype, "isSeasonPassEnabled", {
    get: function () {
      return this._isSeasonPassEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionDialogProperties.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SeasonLeaguePromotionDialogProperties = __s0local0;
var __dep_export_SeasonLeaguePromotionRewardsComponentVO = require("gge-module:export_SeasonLeaguePromotionRewardsComponentVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
