Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleTitleSelectDialog = require("gge-module:export_CastleTitleSelectDialog");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsEventEndListItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsEventEndListItem, __s1param0);
  CastleStormIslandsEventEndListItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_contest_rewards.mc_rewards, false, false);
    this._playerRewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.getItemMc().mc_contest_info.mc_rewards, false, false);
  };
  CastleStormIslandsEventEndListItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._rewards.onShow();
    this._playerRewards.onShow();
  };
  CastleStormIslandsEventEndListItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._rewards.onHide();
    this._playerRewards.onHide();
  };
  CastleStormIslandsEventEndListItem.prototype.fill = function () {
    var __s11local0 = this.getItemMc();
    __s11local0.mc_contest_info.visible = false;
    __s11local0.mc_contest_rewards.visible = false;
    __s11local0.mc_contest_titles.visible = false;
    if (this.data.isAlliance) {
      if (this.data.isInternalAlliance) {
        this.fillPlayerInternalAllianceRanking(__s11local0, true);
      } else {
        this.fillPlayerAllianceRanking(__s11local0);
      }
    } else if (this.data.isAlliance || this.data.hasTitle) {
      if (this.data.hasTitle) {
        this.fillTitle(__s11local0);
      }
    } else {
      this.fillPlayerInternalAllianceRanking(__s11local0, false);
    }
  };
  CastleStormIslandsEventEndListItem.prototype.fillPlayerAllianceRanking = function (__s19param0) {
    __s19param0.mc_contest_rewards.visible = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s19param0.mc_contest_rewards.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_end_cargoPointsContestRanking")));
    __s19param0.mc_contest_rewards.mc_alli_rank.toolTipText = "rank";
    __s19param0.mc_contest_rewards.mc_points.toolTipText = "points_noValue";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s19param0.mc_contest_rewards.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data.rank == -1 ? 0 : this.data.rank));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s19param0.mc_contest_rewards.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data.points == -1 ? 0 : this.data.points));
    if (this.data.rewards && this.data.rewards.length > 0) {
      __s19param0.mc_contest_rewards.txt_copy.visible = false;
      this._rewards.updateWithNewData(this.data.rewards);
    } else {
      __s19param0.mc_contest_rewards.mc_rewards.visible = false;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s19param0.mc_contest_rewards.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_island_end_cargoPointsContestRanking_noRewards_desc"));
    }
  };
  CastleStormIslandsEventEndListItem.prototype.fillTitle = function (__s23param0) {
    __s23param0.mc_contest_titles.visible = true;
    __s23param0.mc_contest_titles.icon_storm_lord.visible = this.data.title.isKing;
    __s23param0.mc_contest_titles.icon_title.visible = !this.data.title.isKing;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s23param0.mc_contest_titles.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_end_stormTitleAwarded")));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s23param0.mc_contest_titles.txt_playerTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.data.title.textID));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s23param0.mc_contest_titles.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_island_end_stormTitle_desc"));
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s23param0.mc_contest_titles.btn_titles, -1, __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    var __s23local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_island_end_stormTitle_effectsList_tooltip");
    __s23local0 += "\n" + this.data.title.descriptionTextVO.textId;
    __s23param0.mc_contest_titles.btn_help.toolTipText = __s23local0;
    __s23param0.mc_contest_titles.btn_titles.toolTipText = "dialog_titles_selectTitle";
  };
  CastleStormIslandsEventEndListItem.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    var __s25local0 = this.getItemMc();
    switch (__s25param0.target) {
      case __s25local0.mc_contest_titles.btn_titles:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTitleSelectDialog.CastleTitleSelectDialog);
    }
  };
  CastleStormIslandsEventEndListItem.prototype.fillPlayerInternalAllianceRanking = function (__s28param0, __s28param1) {
    __s28param0.mc_contest_info.visible = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.mc_contest_info.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s28param1 ? "dialog_island_end_internalAllianceRanking" : "dialog_island_end_notAllianceMember")));
    __s28param0.mc_contest_info.mc_single_rank.toolTipText = "rank";
    __s28param0.mc_contest_info.mc_points.toolTipText = "points_noValue";
    if (this.data.rank >= 0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.mc_contest_info.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data.rank));
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.mc_contest_info.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("-"));
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.mc_contest_info.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.data.points == -1 ? 0 : this.data.points));
    if (this.data.rewards && this.data.rewards.length > 0) {
      __s28param0.mc_contest_info.txt_copy.visible = false;
      this._playerRewards.updateWithNewData(this.data.rewards);
    } else {
      __s28param0.mc_contest_info.mc_rewards.visible = false;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s28param0.mc_contest_info.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s28param1 ? "dialog_island_end_internalAllianceRanking_desc" : "dialog_island_end_cargoPointsContestRanking_playerNoRewards_desc"));
    }
  };
  return CastleStormIslandsEventEndListItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleStormIslandsEventEndListItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
