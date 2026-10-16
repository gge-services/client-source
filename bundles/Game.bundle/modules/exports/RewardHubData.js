Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_RewardHubEvent = require("gge-module:export_RewardHubEvent");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_export_RewardHubDialogProperties = require("gge-module:export_RewardHubDialogProperties");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RewardHubPanelNotificationEvent = require("gge-module:export_RewardHubPanelNotificationEvent");
var __s0local0 = function (__s1param0) {
  function RewardHubData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._amountPendingRewards = 0;
    __s3local0._rewardHubVOs = [];
    __s3local0.pendingSentCount = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubData, __s1param0);
  RewardHubData.prototype.reset = function () {
    this.resetVOs();
    this.pendingSentCount = 0;
    this._amountPendingRewards = 0;
  };
  RewardHubData.prototype.resetVOs = function () {
    this._rewardHubVOs = [];
  };
  RewardHubData.prototype.countPendingSent = function () {
    if (__dep_export_CastleModel.CastleModel.localData.readOpenRewardHubAtStart() && this.pendingSentCount == 0 && (this.getAmountOfPendingRewards() > 0 || __dep_export_CastleModel.CastleModel.lootBoxData.allLootBoxAmount() > 0)) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RewardHubMainDialog.RewardHubMainDialog, new __dep_export_RewardHubDialogProperties.RewardHubDialogProperties(true));
    }
    this.pendingSentCount++;
  };
  RewardHubData.prototype.setAmountOfPendingRewards = function (__s12param0, __s12param1) {
    this._amountPendingRewards = __s12param0;
    if (__s12param1) {
      this.dispatchEvent(new __dep_export_RewardHubPanelNotificationEvent.RewardHubPanelNotificationEvent(__dep_export_RewardHubPanelNotificationEvent.RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED));
    } else {
      this.dispatchEvent(new __dep_export_RewardHubEvent.RewardHubEvent(__dep_export_RewardHubEvent.RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED));
    }
  };
  RewardHubData.prototype.getAmountOfPendingRewards = function () {
    return this._amountPendingRewards;
  };
  Object.defineProperty(RewardHubData.prototype, "rewardHubVOs", {
    get: function () {
      return this._rewardHubVOs;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubData.prototype.getRewardHubVOById = function (__s20param0) {
    if (this._rewardHubVOs) {
      for (var __s20local0 = 0; __s20local0 < this._rewardHubVOs.length; __s20local0++) {
        if (this._rewardHubVOs[__s20local0].hubRewardID == __s20param0) {
          return this._rewardHubVOs[__s20local0];
        }
      }
    }
  };
  RewardHubData.prototype.getCurrentRewardHubIds = function () {
    if (this._rewardHubVOs) {
      var __s26local0 = [];
      for (var __s26local1 = 0; __s26local1 < this._rewardHubVOs.length; __s26local1++) {
        __s26local0.push(this._rewardHubVOs[__s26local1].hubRewardID);
      }
      return __s26local0;
    }
  };
  RewardHubData.prototype.updateCurrentRewardHubIds = function (__s31param0) {
    for (var __s31local0 = 0; __s31local0 < __s31param0.length; __s31local0++) {
      for (var __s31local1 = this._rewardHubVOs.length - 1; __s31local1 >= 0; __s31local1--) {
        if (__s31param0[__s31local0] == this._rewardHubVOs[__s31local1].hubRewardID) {
          this._rewardHubVOs.splice(this._rewardHubVOs.indexOf(this._rewardHubVOs[__s31local1]), 1);
        }
      }
    }
  };
  RewardHubData.REWARD_TYPE_GUARANTEED = "REWARD_TYPE_GUARANTEED";
  RewardHubData.REWARD_TYPE_EXTRA = "REWARD_TYPE_EXTRA";
  return RewardHubData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.RewardHubData = __s0local0;
