Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_SeasonLeagueRewardOverviewDialogProperties = require("gge-module:export_SeasonLeagueRewardOverviewDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueMainDialogSeasonRank(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogSeasonRank, __s1param0);
  SeasonLeagueMainDialogSeasonRank.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.subLayerDisp.btn_rewards, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.subLayerDisp.mc_joinAlliance.btn_join, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_rewards.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_medals.txt_medalsTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_seasonRanking_currentMedals_copy"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_allianceInfo.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_seasonRankingAlliance_rankedByMedal_copy")).autoFitToBounds = true;
    var __s5local0 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinAlliance.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_divisionRankingAlliance_joinAlliance_copy"));
    __s5local0.autoFitToBounds = true;
    __s5local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.subLayerDisp.mc_joinAlliance.btn_join.toolTipText = "findAlliance_tooltip";
    this.subLayerDisp.mc_infoArea.toolTipText = "dialog_seasonLeague_seasonRanking_seasonRewards_tooltip";
    this._ranks = new __dep_export_SeasonLeagueMainDialogRanks.SeasonLeagueMainDialogRanks(this.subLayerDisp.mc_rank, __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON, -1, false);
    this._rewards = new __dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent(this.subLayerDisp.mc_rewards);
    this._rankType = new __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType(this.subLayerDisp.mc_rankTypeSelector);
  };
  SeasonLeagueMainDialogSeasonRank.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._ranks.highscore.onDataReceived.add(this.bindFunction(this.onHighscoreReceived));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.add(this.bindFunction(this.onRankTypeChanged));
    this._ranks.onShow();
    this._rewards.onShow();
    this._rankType.onShow();
    this.updateAllInfos();
    this._ranks.changeHighscoreId(this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON : __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON);
    this._ranks.highscore.requestOwnRankFromServer();
    __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLH();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.hide = function () {
    this._ranks.highscore.onDataReceived.remove(this.bindFunction(this.onHighscoreReceived));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.remove(this.bindFunction(this.onRankTypeChanged));
    this._ranks.onHide();
    this._rewards.onHide();
    this._rankType.onHide();
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateAllInfos = function () {
    this.updateInfoBox();
    this.updateRewardInfo();
    this.updateLeftRewardSection();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateLeftRewardSection = function () {
    this.subLayerDisp.mc_allianceInfo.visible = this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE;
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateInfoBox = function () {
    var __s15local0 = this._ranks.highscore.getRawDataList();
    this.subLayerDisp.mc_info.visible = __s15local0 && __s15local0.length <= 0;
    var __s15local1 = "";
    __s15local1 = this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? "dialog_seasonLeague_seasonRanking_nobodyQualified_copy" : "dialog_seasonLeague_seasonRankingAlliance_notQualified_copy";
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_info.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s15local1));
  };
  SeasonLeagueMainDialogSeasonRank.prototype.updateRewardInfo = function () {
    var __s17local0 = this.subLayerDisp.mc_medals;
    var __s17local1 = this.subLayerDisp.mc_rewards;
    var __s17local2 = this._rankType.getCurrentType();
    this.subLayerDisp.mc_joinAlliance.visible = __s17local2 == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE && !__dep_export_CastleModel.CastleModel.userData.isInAlliance;
    if (this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE) {
      if (!this.subLayerDisp.mc_joinAlliance.visible) {
        __s17local1.visible = false;
        __s17local0.visible = true;
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s17local0, "mc_item"), __dep_export_CastleModel.CastleModel.seasonLeagueData.server.allianceMedals, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(55, 55)));
      }
    } else {
      this.subLayerDisp.mc_joinAlliance.visible = false;
      var __s17local3 = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD) > 0;
      __s17local1.visible = __s17local3;
      __s17local0.visible = !__s17local3;
      if (__s17local3) {
        var __s17local4 = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEndRewardForRank(__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerSeasonRank, __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID);
        this._rewards.updateWithNewData(__dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__s17local4.rewardIds));
      } else {
        __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(__s17local0, "mc_item"), __dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerMedals, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, new __s0local0(55, 55)));
      }
      var __s17local5 = __s17local3 ? "dialog_seasonLeague_seasonRanking_seasonReward_hasQualified_copy" : "dialog_seasonLeague_seasonRanking_seasonReward_notQualified_copy";
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardsTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s17local5))).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onClick = function (__s24param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      __s1param0.prototype.onClick.call(this, __s24param0);
      switch (__s24param0.target) {
        case this.subLayerDisp.btn_rewards:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueRewardOverviewDialog.SeasonLeagueRewardOverviewDialog, new __dep_export_SeasonLeagueRewardOverviewDialogProperties.SeasonLeagueRewardOverviewDialogProperties(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEndRewardsAsOverviewItems(__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId, __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID), "dialog_seasonLeague_seasonRewardDialog_header", "dialog_seasonLeague_seasonRewardDialog_copy", "help_seasonLeague_seasonRewardDialog"));
          break;
        case this.subLayerDisp.mc_joinAlliance.btn_join:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
      }
    }
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onHighscoreReceived = function () {
    this.updateInfoBox();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onPlayerRankUpdated = function (__s30param0) {
    this.updateRewardInfo();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onSeasonInfoUpdated = function (__s32param0) {
    this.updateRewardInfo();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onEventsChanged = function (__s34param0) {
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogSeasonRank.prototype.onRankTypeChanged = function () {
    this.updateAllInfos();
    this._ranks.changeHighscoreId(this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON : __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON);
    this._ranks.highscore.reset();
    this._ranks.highscore.requestOwnRankFromServer();
  };
  return SeasonLeagueMainDialogSeasonRank;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.SeasonLeagueMainDialogSeasonRank = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __dep_export_SeasonLeagueRewardOverviewDialog = require("gge-module:export_SeasonLeagueRewardOverviewDialog");
var __dep_export_SeasonLeagueMainDialogRanks = require("gge-module:export_SeasonLeagueMainDialogRanks");
var __dep_export_SeasonLeagueMainDialogRankType = require("gge-module:export_SeasonLeagueMainDialogRankType");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
