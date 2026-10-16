Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_RewardTierVO = require("gge-module:export_RewardTierVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RewardHubData = require("gge-module:export_RewardHubData");
var __s0local0 = function () {
  function RewardHubVO() {
    this._counters = [];
    this._mainEventID = 0;
    this._subEventID = 0;
    this._promotionID = 0;
    this._isGlobalRanking = false;
  }
  RewardHubVO.prototype.parseData = function (__s5param0) {
    var __s5local0 = [];
    __s5local0.push(this.parseRewardTier(__dep_export_RewardHubData.RewardHubData.REWARD_TYPE_GUARANTEED, __s5param0.basicTier));
    __s5local0.push(this.parseRewardTier(__dep_export_RewardHubData.RewardHubData.REWARD_TYPE_EXTRA, __s5param0.extraTier));
    this._hubRewardID = __s5param0.hubRewardID;
    this._extraTierUnlockCostC2 = __s5param0.extraTierUnlockCostC2;
    this._rewardTiers = __s5local0;
    this._popUpId = __s5param0.visualComponent.preUpgradePopup[__dep_exact_26a421b704832cff.CommKeys.POPUP_ID];
    this._popUpData = __s5param0.visualComponent.preUpgradePopup[__dep_exact_26a421b704832cff.CommKeys.POPUP_VALUE];
    this._popUpData.rewardHubVO = this;
    this._counters = __s5param0.visualComponent.counters;
    this._isGlobalRanking = __s5param0.visualComponent.isGlobalRanking == 1;
    this._extraTierUnlockedByParent = Boolean(__s5param0.extraTierUnlockedByParent);
    this._extraTierUnlocked = Boolean(__s5param0.extraTierUnlocked);
    this._promotionID = parseInt(__s5param0.visualComponent.promotionID);
    this._mainEventID = this._promotionID ? __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE : parseInt(__s5param0.visualComponent.eventID);
    this._subEventID = __s5param0.visualComponent.subEventID ? parseInt(__s5param0.visualComponent.subEventID) : 0;
  };
  RewardHubVO.prototype.parseRewardTier = function (__s7param0, __s7param1) {
    var __s7local0 = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray(__s7param1.rewardIds);
    return new __dep_export_RewardTierVO.RewardTierVO(__s7param0, Boolean(__s7param1.collected), __s7local0, __s7param1.rewardIds);
  };
  Object.defineProperty(RewardHubVO.prototype, "hubRewardID", {
    get: function () {
      return this._hubRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "extraTierUnlockCostC2", {
    get: function () {
      return this._extraTierUnlockCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "isExtraTierUnlocked", {
    get: function () {
      return this._extraTierUnlocked || this._extraTierUnlockedByParent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "extraTierUnlockedByParent", {
    set: function (__s15param0) {
      this._extraTierUnlockedByParent = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "extraTierUnlocked", {
    set: function (__s17param0) {
      this._extraTierUnlocked = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "rewardTiers", {
    get: function () {
      return this._rewardTiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "popUpId", {
    get: function () {
      return this._popUpId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "popUpData", {
    get: function () {
      this._popUpData.rewardHubVO = this;
      return this._popUpData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "counters", {
    get: function () {
      return this._counters;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "mainEventID", {
    get: function () {
      return this._mainEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "subEventID", {
    get: function () {
      return this._subEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "promotionID", {
    get: function () {
      return this._promotionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubVO.prototype, "isGlobalRanking", {
    get: function () {
      return this._isGlobalRanking;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubVO;
}();
exports.RewardHubVO = __s0local0;
