Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_SeasonLeagueRewardOverviewDialogProperties = require("gge-module:export_SeasonLeagueRewardOverviewDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueMainDialogEventRank(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentlyShowsRanking = false;
    __s3local0._currentDivisionSize = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogEventRank, __s1param0);
  SeasonLeagueMainDialogEventRank.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.subLayerDisp.mc_payout.btn_rewards, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.subLayerDisp.mc_joinAlliance.btn_join, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_payout.btn_rewards.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_divisionRanking_medalsoverviewButton_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_currentEvent, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("currentEvent"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_allianceInfo.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_divisionRankingAlliance_playerPointContribution_text")).autoFitToBounds = true;
    var __s5local0 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinAlliance.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_divisionRankingAlliance_joinAlliance_copy"));
    __s5local0.autoFitToBounds = true;
    __s5local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.subLayerDisp.mc_joinAlliance.btn_join.toolTipText = "findAlliance_tooltip";
    this._ranks = new __dep_export_SeasonLeagueMainDialogRanks.SeasonLeagueMainDialogRanks(this.subLayerDisp.mc_rank, __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON_EVENT, -1, true);
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.subLayerDisp.mc_promotion.mc_icon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new __s0local0(80, 80));
    this._promotionBar = new __dep_export_SeasonLeaguePromotionProgressBarComponent.SeasonLeaguePromotionProgressBarComponent(this.subLayerDisp.mc_promotion.mc_progress);
    this._rankType = new __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType(this.subLayerDisp.mc_rankTypeSelector);
    this.subLayerDisp.mc_payout.mc_time.mouseChildren = false;
  };
  SeasonLeagueMainDialogEventRank.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.add(this.bindFunction(this.onRankTypeChanged));
    this._rankType.onShow();
    this._ranks.onShow();
    this._currentDivisionSize = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize);
    this._currentlyShowsRanking = __dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive();
    this._ranks.highscore.requestDataEnabled = this._currentlyShowsRanking;
    this.updateHighscoreId();
    if (this._currentlyShowsRanking) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLH();
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this._rankType.onTypeChanged.remove(this.bindFunction(this.onRankTypeChanged));
    this._rankType.onHide();
    this._ranks.onHide();
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogEventRank.prototype.updateAllInfos = function () {
    this.updateRanking();
    this.updateInfoBox();
    this.updateBottomMenu();
    this.updateCurrentEvent();
  };
  SeasonLeagueMainDialogEventRank.prototype.updateCurrentEvent = function () {
    this.subLayerDisp.txt_currentEvent.visible = this._currentlyShowsRanking;
    this.subLayerDisp.mc_currentEventIcon.visible = this._currentlyShowsRanking;
    var __s14local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    var __s14local1 = __dep_exact_f855840627e6e145.int(__s14local0 ? __s14local0.eventId : -1);
    if (this._currentlyShowsRanking) {
      this.subLayerDisp.mc_currentEventIcon.gotoAndStop(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.getPointsIconFrame(__s14local1));
    }
    this.subLayerDisp.mc_currentEventIcon.toolTipText = __s14local0 ? __s14local0.eventBuildingNameId : "";
  };
  SeasonLeagueMainDialogEventRank.prototype.updateRanking = function () {
    this._ranks.highscore.requestDataEnabled = this._currentlyShowsRanking;
    if (this._currentlyShowsRanking) {
      this._ranks.highscore.scrollComponent.enableComponent(true);
      this._ranks.highscore.updateItems();
    } else {
      this._ranks.highscore.reset();
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance || this._rankType.getCurrentType() != __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE) {
        this._ranks.highscore.items[0].updateWithNewData(-1, this.getNoRankFakeHighscoreResponse());
      }
      this._ranks.highscore.scrollComponent.enableComponent(false);
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updateInfoBox = function () {
    this.subLayerDisp.mc_info.visible = !this._currentlyShowsRanking;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_info.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_divisionRanking_noEvent_text")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  SeasonLeagueMainDialogEventRank.prototype.updatePayoutTimer = function () {
    var __s24local0 = this.subLayerDisp.mc_payout.mc_time;
    if (this.subLayerDisp.mc_payout.visible) {
      if (this._currentlyShowsRanking) {
        __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(__s24local0.txt_text, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getNextPayoutTimeInSec());
        __s24local0.toolTipText = "dialog_seasonLeague_divisionRanking_nextMedal_tooltip";
      } else {
        this.textFieldManager.registerTextField(__s24local0.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO("-")).autoFitToBounds = true;
        __s24local0.toolTipText = "dialog_seasonLeague_divisionRanking_nextMedalNoTime_tooltip";
      }
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updatePayoutReward = function () {
    var __s29local0 = this.subLayerDisp.mc_payout;
    __s29local0.visible = true;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s29local0.mc_icon);
    var __s29local1;
    var __s29local2 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    if (__s29local2 && __s29local2.seasonLeague.participatedOnEvent) {
      this.textFieldManager.registerTextField(__s29local0.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_divisionRanking_nextMedal_text"))).autoFitToBounds = true;
      __s29local1 = this._currentlyShowsRanking ? __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonMedalRewardForRank(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerSeasonEventRank) : __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, 0);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s29local0.mc_icon).addIconMc(__s29local0.mc_icon), __s29local1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(55, 55)));
    } else {
      this.textFieldManager.registerTextField(__s29local0.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_divisionRanking_qualifyForMedal_text")).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updatePromotion = function () {
    this.subLayerDisp.mc_promotion.visible = true;
    var __s33local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
    var __s33local1 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    if (__s33local1) {
      var __s33local2 = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(__s33local1.id + 1);
      var __s33local3 = __dep_export_CastleModel.CastleModel.seasonLeagueData.hasReachedHighestPromotion() ? "dialog_seasonLeague_divisionRanking_maxRank_text" : "dialog_seasonLeague_divisionRanking_nextRank_text";
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s33local3))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s33local2 ? __s33local2.getNameTextId() : ""))).autoFitToBounds = true;
      this._promotionIcon.updateWithNewVO(__s33local2 || __s33local1);
      this._promotionBar.update(this._currentlyShowsRanking, __s33local0);
    } else {
      this.subLayerDisp.mc_promotion.visible = false;
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updateAllianceInfo = function () {
    this.subLayerDisp.mc_allianceInfo.visible = true;
  };
  SeasonLeagueMainDialogEventRank.prototype.updateJoinAlliance = function () {
    this.subLayerDisp.mc_joinAlliance.visible = true;
  };
  SeasonLeagueMainDialogEventRank.prototype.updateBottomMenu = function () {
    var __s41local0 = this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE;
    var __s41local1 = __dep_export_CastleModel.CastleModel.userData.isInAlliance;
    this.subLayerDisp.mc_allianceInfo.visible = false;
    this.subLayerDisp.mc_promotion.visible = false;
    this.subLayerDisp.mc_payout.visible = false;
    this.subLayerDisp.mc_joinAlliance.visible = false;
    if (__s41local0) {
      this.updateAllianceInfo();
      if (__s41local1) {
        this.updatePayoutReward();
        this.updatePayoutTimer();
      } else {
        this.updateJoinAlliance();
      }
    } else {
      this.updatePromotion();
      this.updatePayoutReward();
      this.updatePayoutTimer();
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.updateHighscoreId = function () {
    this._ranks.changeHighscoreId(this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_PLAYER ? __dep_exact_26a421b704832cff.HighscoreConst.KINGDOMS_LEAGUE_SEASON_EVENT : __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON_EVENT);
  };
  SeasonLeagueMainDialogEventRank.prototype.getNoRankFakeHighscoreResponse = function () {
    var __s49local0 = this._rankType.getCurrentType() == __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE;
    var __s49local1 = __dep_export_CastleModel.CastleModel.userData.isInAlliance;
    if (__s49local0) {
      if (__s49local1) {
        return [-1, -1, [__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceId, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceName, 0, 0], {
          KLMO: [[__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getAllianceMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD)], [__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_SILVER, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getAllianceMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_SILVER)], [__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_BRONZE, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getAllianceMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_BRONZE)]],
          KLRID: __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId
        }];
      } else {
        return [];
      }
    } else {
      return [-1, -1, {
        N: __dep_export_CastleModel.CastleModel.userData.userName,
        KLMO: [[__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD)], [__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_SILVER, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_SILVER)], [__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_BRONZE, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.getPlayerMedalAmount(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_BRONZE)]],
        OID: __dep_export_CastleModel.CastleModel.userData.playerID,
        KLRID: __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId
      }];
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.onClick = function (__s55param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s55param0.target)) {
      __s1param0.prototype.onClick.call(this, __s55param0);
      switch (__s55param0.target) {
        case this.subLayerDisp.mc_payout.btn_rewards:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueRewardOverviewDialog.SeasonLeagueRewardOverviewDialog, new __dep_export_SeasonLeagueRewardOverviewDialogProperties.SeasonLeagueRewardOverviewDialogProperties(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonEventRewardsAsOverviewItems(), "dialog_seasonLeague_medalsOverviewDialog_header", "dialog_seasonLeague_medalsOverviewDialog_copy", "help_seasonLeague_medalsOverviewDialog"));
          break;
        case this.subLayerDisp.mc_joinAlliance.btn_join:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
      }
    }
  };
  SeasonLeagueMainDialogEventRank.prototype.onEventsChanged = function (__s59param0) {
    var __s59local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive();
    if (this._currentlyShowsRanking != __s59local0 && !this._currentlyShowsRanking && __s59local0) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    this._currentlyShowsRanking = __s59local0;
    this._ranks.highscore.requestDataEnabled = __s59local0;
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.onTickEvent = function (__s62param0) {
    this.updatePayoutTimer();
  };
  SeasonLeagueMainDialogEventRank.prototype.onSeasonInfoUpdated = function (__s64param0) {
    var __s64local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize);
    if (this._currentDivisionSize < 0 && this._currentDivisionSize != __s64local0) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    this._currentDivisionSize = __s64local0;
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.onPlayerRankUpdated = function (__s67param0) {
    this.updateBottomMenu();
  };
  SeasonLeagueMainDialogEventRank.prototype.onRankTypeChanged = function () {
    this._ranks.highscore.reset();
    this.updateHighscoreId();
    if (this._rankType.getCurrentType() != __dep_export_SeasonLeagueMainDialogRankType.SeasonLeagueMainDialogRankType.TYPE_ALLIANCE || __dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this._ranks.highscore.requestOwnRankFromServer();
    }
    this.updateAllInfos();
  };
  SeasonLeagueMainDialogEventRank.prototype.onMyAllianceInfoUpdated = function (__s72param0) {
    this.updateAllInfos();
  };
  return SeasonLeagueMainDialogEventRank;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.SeasonLeagueMainDialogEventRank = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_SeasonLeaguePromotionProgressBarComponent = require("gge-module:export_SeasonLeaguePromotionProgressBarComponent");
var __dep_export_SeasonLeagueRewardOverviewDialog = require("gge-module:export_SeasonLeagueRewardOverviewDialog");
var __dep_export_SeasonLeagueMainDialogRanks = require("gge-module:export_SeasonLeagueMainDialogRanks");
var __dep_export_SeasonLeagueMainDialogRankType = require("gge-module:export_SeasonLeagueMainDialogRankType");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
