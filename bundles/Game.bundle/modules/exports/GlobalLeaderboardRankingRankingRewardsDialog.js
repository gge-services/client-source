Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GachaRankingRewardsDialogListItem = require("gge-module:export_GachaRankingRewardsDialogListItem");
var __dep_export_RewardHubDialogProperties = require("gge-module:export_RewardHubDialogProperties");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __s0local0 = function (__s1param0) {
  function GlobalLeaderboardRankingRankingRewardsDialog() {
    return __s1param0.call(this, GlobalLeaderboardRankingRankingRewardsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalLeaderboardRankingRankingRewardsDialog, __s1param0);
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_rewardHub], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_rewards_header")));
    var __s7local0 = this.dialogProperties.copy;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, __s7local0 ? new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local0) : new __dep_exact_92d05af59ee2ff30.TextVO(""));
    var __s7local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_GachaRankingRewardsDialogListItem.GachaRankingRewardsDialogListItem, "DonationRankingRewards_Item", GlobalLeaderboardRankingRankingRewardsDialog.NAME);
    __s7local1.itemPaddingY = 0;
    __s7local1.useSmoothScroll = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider).addMaskMc(this.dialogDisp.mc_list.maskMc), __s7local1);
    this._list.onShow();
    this.updateAllInfos(true);
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    __s1param0.prototype.hide.call(this);
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.updateAllInfos = function (__s12param0 = false) {
    var __s12local0 = this.dialogProperties.rankingRewards;
    this._list.updateWithNewData(__s12local0, __s12param0);
    this._list.onShow();
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.onClick = function (__s14param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s14param0.target)) {
      __s1param0.prototype.onClick.call(this, __s14param0);
      switch (__s14param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_rewardHub:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RewardHubMainDialog.RewardHubMainDialog, new __dep_export_RewardHubDialogProperties.RewardHubDialogProperties(false));
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text(" "), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mainDonationEvent_helpPopup"));
      }
    }
  };
  Object.defineProperty(GlobalLeaderboardRankingRankingRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GlobalLeaderboardRankingRankingRewardsDialog.NAME = "DonationRankingRewards";
  return GlobalLeaderboardRankingRankingRewardsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GlobalLeaderboardRankingRankingRewardsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
