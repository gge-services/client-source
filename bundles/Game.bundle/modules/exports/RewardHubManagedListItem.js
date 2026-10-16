Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_RewardHubManagedRewardsListItem = require("gge-module:export_RewardHubManagedRewardsListItem");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_RewardHubData = require("gge-module:export_RewardHubData");
var __s0local0 = function (__s1param0) {
  function RewardHubManagedListItem(__s3param0, __s3param1, __s3param2 = false) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Item_ManageAllRewards"))(), __s3param1, __s3param2) || this;
    __s3local0._dataVO = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubManagedListItem, __s1param0);
  RewardHubManagedListItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.icon_event.icon_event);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.icon_event.icon_sub_event);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.contentMC);
  };
  RewardHubManagedListItem.prototype.fill = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.contentMC);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_event_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._dataVO.txtTitle));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_player_rewards, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._dataVO.txtSubtitle));
    this.disp.icon_event.icon_event.addChild(this._dataVO.mcIcon);
    this.disp.icon_event.icon_sub_event.addChild(this._dataVO.mcSubIcon);
    var __s7local0;
    for (var __s7local1 = this.getRewardTiersData(), __s7local2 = 0; __s7local2 < __s7local1.length; __s7local2++) {
      (__s7local0 = new __dep_export_RewardHubManagedRewardsListItem.RewardHubManagedRewardsListItem(new Library.CastleRewardHubManageAll.Item_ManageAllRewardsTier())).disp.y += this.disp.contentMC.height;
      this.disp.contentMC.addChild(__s7local0.disp);
      __s7local0.fillItem(__s7local1[__s7local2]);
    }
    this.contentMC.visible = true;
  };
  Object.defineProperty(RewardHubManagedListItem.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubManagedListItem.prototype.getRewardTiersData = function () {
    var __s13local0;
    var __s13local1 = [];
    var __s13local2 = {
      eventRewards: new __dep_export_CollectableList.CollectableList()
    };
    var __s13local3 = 0;
    for (var __s13local4 = 0; __s13local4 < this._dataVO.rewardsTiers.length; __s13local4++) {
      __s13local0 = this._dataVO.rewardsTiers[__s13local4];
      for (var __s13local5 = 0; __s13local5 < __s13local0.rewards.length; __s13local5++) {
        if (__s13local3 == RewardHubManagedListItem.MAX_TIER_REWARDS) {
          __s13local1.push(__s13local2);
          __s13local2 = {
            eventRewards: new __dep_export_CollectableList.CollectableList()
          };
          __s13local3 = 0;
        } else {
          if (__s13local0.rewardType == __dep_export_RewardHubData.RewardHubData.REWARD_TYPE_GUARANTEED) {
            __s13local0.rewards.list[__s13local5].isGuaranteed = true;
          } else if (__s13local0.rewardType == __dep_export_RewardHubData.RewardHubData.REWARD_TYPE_EXTRA) {
            if (this._dataVO.isExtraTierUnlocked) {
              __s13local0.rewards.list[__s13local5].isPurchased = true;
              __s13local0.rewards.list[__s13local5].isLocked = false;
            } else {
              __s13local0.rewards.list[__s13local5].isLocked = true;
              __s13local0.rewards.list[__s13local5].isPurchased = false;
            }
          }
          __s13local2.eventRewards.addItem(__s13local0.rewards.list[__s13local5]);
          __s13local3++;
        }
      }
    }
    if (__s13local1.length == 0 && __s13local2.eventRewards.length > 0) {
      __s13local1.push(__s13local2);
    }
    return __s13local1;
  };
  RewardHubManagedListItem.MAX_TIER_REWARDS = 4;
  return RewardHubManagedListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.RewardHubManagedListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
