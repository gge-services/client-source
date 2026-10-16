Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_AGachaComponent = require("gge-module:export_AGachaComponent");
var __dep_export_GachaRankingRewardsDialog = require("gge-module:export_GachaRankingRewardsDialog");
var __dep_export_GachaRankingRewardsDialogProperties = require("gge-module:export_GachaRankingRewardsDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaComponentRanking(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_rewards_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.itxt_rank = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_ownRank, new __dep_exact_92d05af59ee2ff30_1.TextVO("-"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_reward, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("divination_main_topreward"));
    __s3local0.disp.icon_ranking.toolTipText = "myRank";
    __s3local0.disp.btn_rewards_help.toolTipText = "rewards";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentRanking, __s1param0);
  GachaComponentRanking.prototype.onShow = function () {
    var __s5local0 = this.getEventVO().topX.length > 0;
    this.setVisibility(__s5local0);
    if (__s5local0) {
      __s1param0.prototype.onShow.call(this);
      this.updateTopReward();
      this.updateRank();
    }
  };
  GachaComponentRanking.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentRanking.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
  };
  GachaComponentRanking.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
  };
  GachaComponentRanking.prototype.onGachaUpdate = function (__s14param0) {
    if (__s14param0.eventVO.eventId == this.getEventVO().eventId) {
      this.updateRank();
    }
  };
  GachaComponentRanking.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    switch (__s17param0.target) {
      case this.disp.btn_rewards_help:
        this.showRankRewardDialog();
    }
  };
  GachaComponentRanking.prototype.updateTopReward = function () {
    var __s20local0 = this.getEventVO().rewardLists;
    var __s20local1 = __s20local0[__s20local0.length - 1].list[0];
    var __s20local2 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_reward);
    var __s20local3 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(60, 60));
    __s20local3.tooltip.useAmount = false;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s20local2, __s20local1, __s20local3);
  };
  GachaComponentRanking.prototype.updateRank = function () {
    this.itxt_rank.textContentVO.stringValue = this.getEventVO().ownRank <= 0 ? "-" : __dep_exact_92d05af59ee2ff30.Localize.number(this.getEventVO().ownRank, false);
  };
  GachaComponentRanking.prototype.showRankRewardDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GachaRankingRewardsDialog.GachaRankingRewardsDialog, new __dep_export_GachaRankingRewardsDialogProperties.GachaRankingRewardsDialogProperties(this.getEventVO().eventId));
  };
  GachaComponentRanking.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentRanking;
}(__dep_export_AGachaComponent.AGachaComponent);
exports.GachaComponentRanking = __s0local1;
