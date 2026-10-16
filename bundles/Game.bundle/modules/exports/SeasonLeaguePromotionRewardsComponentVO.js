Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function SeasonLeaguePromotionRewardsComponentVO(__s3param0 = null, __s3param1 = null, __s3param2 = false, __s3param3 = false, __s3param4 = false) {
    this._isUnlocked = false;
    this.hasCollectedNormal = false;
    this.hasCollectedPremium = false;
    this._normalRewards = new __dep_export_CollectableList.CollectableList();
    this._premiumRewards = new __dep_export_CollectableList.CollectableList();
    if (__s3param0) {
      this._normalRewards = __s3param0;
    }
    if (__s3param1) {
      this._premiumRewards = __s3param1;
    }
    this._isUnlocked = __s3param2;
    this.hasCollectedNormal = __s3param3;
    this.hasCollectedPremium = __s3param4;
  }
  SeasonLeaguePromotionRewardsComponentVO.prototype.createCombinedRewardList = function () {
    var __s7local0 = new __dep_export_CollectableList.CollectableList();
    if (this.normalRewards) {
      __s7local0.addList(this.normalRewards);
    }
    if (this.premiumRewards) {
      __s7local0.addList(this.premiumRewards);
    }
    return __s7local0;
  };
  SeasonLeaguePromotionRewardsComponentVO.prototype.isIndexPremiumReward = function (__s11param0) {
    return __s11param0 >= this.normalRewards.length && __s11param0 < this.normalRewards.length + this.premiumRewards.length;
  };
  SeasonLeaguePromotionRewardsComponentVO.prototype.getNumberOfRewards = function () {
    return __dep_exact_f855840627e6e145.int(this.normalRewards.length + this.premiumRewards.length);
  };
  Object.defineProperty(SeasonLeaguePromotionRewardsComponentVO.prototype, "isUnlocked", {
    get: function () {
      return this._isUnlocked;
    },
    set: function (__s17param0) {
      this._isUnlocked = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionRewardsComponentVO.prototype, "normalRewards", {
    get: function () {
      return this._normalRewards;
    },
    set: function (__s21param0) {
      this._normalRewards = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionRewardsComponentVO.prototype, "premiumRewards", {
    get: function () {
      return this._premiumRewards;
    },
    set: function (__s25param0) {
      this._premiumRewards = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionRewardsComponentVO;
}();
exports.SeasonLeaguePromotionRewardsComponentVO = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
