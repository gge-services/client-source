Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SeasonLeaguePromotionRewardsComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePromotionRewardsComponent, __s1param0);
  SeasonLeaguePromotionRewardsComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.btn_locked, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.disp.btn_locked.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_tooltip";
    this._rewardsComponent = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.disp, true, true, 4);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewardsComponent.onShow();
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onHide = function () {
    this._rewardsComponent.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._rewardsComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SeasonLeaguePromotionRewardsComponent.prototype.removeEventListener = function () {
    this._rewardsComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.updateWithNewData = function (__s15param0, __s15param1, __s15param2) {
    this._vo = __s15param0;
    this.promoID = __s15param1;
    this.seasonID = __s15param2;
    this._rewardsComponent.updateWithNewData(__s15param0.createCombinedRewardList());
    __dep_export_MicroServiceRequestPreloader.MicroServiceRequestPreloader.hidePreloader();
    this.update();
  };
  SeasonLeaguePromotionRewardsComponent.prototype.update = function () {
    if (this.vo) {
      var __s17local0 = this._rewardsComponent.getCurrentItemScrollIndex();
      var __s17local1 = __dep_exact_f855840627e6e145.int(this.vo.isUnlocked ? 2 : 1);
      for (var __s17local2 = 0; __s17local2 < this._rewardsComponent.numberOfItems; ++__s17local2) {
        var __s17local3 = this._rewardsComponent.collectableRenderList[__s17local2].itemVO;
        var __s17local4 = this.getItemMc(__s17local2);
        var __s17local5 = __s17local0 + __s17local2;
        var __s17local6 = this.vo.isIndexPremiumReward(__s17local5);
        __s17local4.mc_background.visible = __s17local3 && __s17local6;
        __s17local4.mc_left.visible = __s17local3 && __s17local6 && this.vo.isIndexPremiumReward(__s17local5 - 1);
        __s17local4.mc_right.visible = __s17local3 && __s17local6 && this.vo.isIndexPremiumReward(__s17local5 + 1);
        __s17local4.mc_overlay.visible = __s17local3 && __s17local6 && !this.vo.isUnlocked;
        __s17local4.mc_background.gotoAndStop(__s17local1);
        __s17local4.mc_left.gotoAndStop(__s17local1);
        __s17local4.mc_right.gotoAndStop(__s17local1);
        if (__s17local4.mc_check) {
          __s17local4.mc_check.visible = __s17local3 && this.vo.hasCollectedPremium && (!__s17local6 || __s17local6 && this.vo.isUnlocked);
        }
      }
      this.disp.btn_locked.visible = !this.vo.isUnlocked;
      if (!this.vo.isUnlocked) {
        var __s17local7 = this.getLowestShownPremiumRewardIndex();
        var __s17local8 = this.getHighestShownPremiumRewardIndex();
        var __s17local9 = __s17local7 >= 0 && __s17local8 >= 0;
        this.disp.btn_locked.visible = __s17local9;
        if (__s17local9) {
          var __s17local10 = this.getItemMc(__s17local7).x;
          var __s17local11 = this.getItemMc(__s17local8).x;
          this.disp.btn_locked.x = __s17local11 - (__s17local11 - __s17local10) * 0.5;
        }
      }
    }
  };
  SeasonLeaguePromotionRewardsComponent.prototype.getLowestShownPremiumRewardIndex = function () {
    var __s25local0 = -1;
    var __s25local1 = this._rewardsComponent.getCurrentItemScrollIndex();
    for (var __s25local2 = this._rewardsComponent.numberOfItems; __s25local2 >= 0; --__s25local2) {
      if (this.vo.isIndexPremiumReward(__s25local1 + __s25local2)) {
        __s25local0 = __s25local2;
      }
    }
    return __s25local0;
  };
  SeasonLeaguePromotionRewardsComponent.prototype.getHighestShownPremiumRewardIndex = function () {
    var __s30local0 = -1;
    var __s30local1 = this._rewardsComponent.getCurrentItemScrollIndex();
    for (var __s30local2 = 0; __s30local2 < this._rewardsComponent.numberOfItems; ++__s30local2) {
      if (this.vo.isIndexPremiumReward(__s30local1 + __s30local2)) {
        __s30local0 = __s30local2;
      }
    }
    return __s30local0;
  };
  SeasonLeaguePromotionRewardsComponent.prototype.getItemMc = function (__s35param0) {
    return this.disp.getChildByName("mc_item" + __s35param0);
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onClick = function (__s37param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      __s1param0.prototype.onClick.call(this, __s37param0);
      switch (__s37param0.target) {
        case this.disp.btn_locked:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeaguePromotionPassVO.CollectableItemSeasonLeaguePromotionPassVO(), __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassPromotionPrice, 0, this.promoID, -1, -1, this.seasonID));
      }
    }
  };
  SeasonLeaguePromotionRewardsComponent.prototype.onScroll = function () {
    this.update();
  };
  Object.defineProperty(SeasonLeaguePromotionRewardsComponent.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionRewardsComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeaguePromotionRewardsComponent = __s0local0;
var __dep_export_SeasonLeagueBuyPassConfirmDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmDialog");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_CollectableItemSeasonLeaguePromotionPassVO = require("gge-module:export_CollectableItemSeasonLeaguePromotionPassVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MicroServiceRequestPreloader = require("gge-module:export_MicroServiceRequestPreloader");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
