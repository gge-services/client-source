Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function RewardHubManagedRewardsListItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(__s3local0.disp, false, false);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubManagedRewardsListItem, __s1param0);
  RewardHubManagedRewardsListItem.prototype.init = function () {
    __s1param0.prototype.init.call(this);
  };
  RewardHubManagedRewardsListItem.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this._rewards.onShow();
  };
  RewardHubManagedRewardsListItem.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rewards.onHide();
  };
  RewardHubManagedRewardsListItem.prototype.fillItem = function (__s11param0) {
    var __s11local0;
    var __s11local1;
    var __s11local2 = __s11param0.eventRewards;
    this._rewards.updateWithNewData(__s11local2);
    for (var __s11local3 = 0; __s11local3 < this._rewards.numberOfItems; __s11local3++) {
      __s11local0 = this._rewards.disp.getChildByName("mc_item" + __s11local3);
      __s11local1 = this._rewards.collectableRenderList[__s11local3].itemVO;
      __s11local0.visible = !!__s11local1;
      if (__s11local0 && __s11local1) {
        __s11local0.icon_lock.visible = false;
        __s11local0.mc_locked.visible = false;
        __s11local0.mc_overlay.visible = false;
        __s11local0.mc_unlocked.visible = false;
        __s11local0.mc_overlay.mouseEnabled = false;
        __s11local0.icon_lock.visible = !!__s11local1.isLocked && !__s11local1.isGuaranteed;
        __s11local0.mc_locked.visible = !!__s11local1.isLocked && !__s11local1.isGuaranteed;
        __s11local0.mc_overlay.visible = !!__s11local1.isLocked && !__s11local1.isGuaranteed;
        __s11local0.mc_unlocked.visible = !!__s11local1.isPurchased && !__s11local1.isGuaranteed;
      }
    }
  };
  return RewardHubManagedRewardsListItem;
}(require("gge-module:exact_9e901e8e2483a22f").FlashUIComponent);
exports.RewardHubManagedRewardsListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
