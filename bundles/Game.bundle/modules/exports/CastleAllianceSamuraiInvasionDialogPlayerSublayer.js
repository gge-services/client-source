Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionDialogPlayerSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_showMe);
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_samuraiInvasion_single_header"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_samuraiInvasion_single_info")).autoFitToBounds = true;
    __s3param0.btn_showMe.toolTipText = "dialog_samuraiInvasion_overview_seekSamuraiButton";
    __s3param0.btn_showMe.mouseChildren = false;
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_disabledRanking.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank")).autoFitToBounds = true;
    __s3param0.mc_disabledRanking.toolTipText = "dialog_tournament_yourRank";
    __s3param0.mc_disabledRanking.mouseChildren = false;
    __s3local0._seasonLeague = new __dep_export_SeasonLeagueEventElementComponent.SeasonLeagueEventElementComponent(__s3param0.mc_seasonLeague, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionDialogPlayerSublayer, __s1param0);
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.setScoreBarData = function (__s5param0) {
    this.scoreBarData = __s5param0;
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION));
    }
    var __s7local0 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "samuraiInvasion", this.tooltipValues, this.levelLabels);
    var __s7local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("AllianceSamuraiInvasionEvent_Score_Icon"))();
    __s7local1.toolTipText = "dialog_samuraiInvasion_samuraiPoints";
    var __s7local2 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("AllianceSamuraiInvasionEvent_Background"))();
    this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Player", __s7local1, __s7local2, CastleAllianceSamuraiInvasionDialogPlayerSublayer.openRewardsDialog, __s7local0);
    this.subLayerDisp.mc_seasonLeague.visible = false;
    this._seasonLeague.onShow();
    var __s7local3 = castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (__s7local3) {
      var __s7local4 = __s7local3.daimyoInfoVO.isEnabled ? "dialog_samuraiInvasion_single_pointsInfo_samuraiInvasionDaimyo" : "dialog_samuraiInvasion_single_pointsInfo";
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtext, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s7local4)).autoFitToBounds = true;
      this.subLayerDisp.mc_difficulty.visible = __s7local3.isDifficultyScalingActivated;
      if (this.subLayerDisp.mc_difficulty.visible) {
        __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(__s7local3.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
      }
    }
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.openRewardsDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceSamuraiInvasionRewardListDialog.CastleAllianceSamuraiInvasionRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION, __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER));
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_samuraiInvasion_single"));
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this._seasonLeague.onHide();
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.subLayerDisp.btn_showMe:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_SAMURAI_CAMP, __dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID));
    }
  };
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.onUpdatePoints = function (__s24param0 = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype, "tooltipValues", {
    get: function () {
      var __s26local0 = [];
      for (var __s26local1 = 0; __s26local1 < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[__s26local1] != 0; __s26local1++) {
        __s26local0.push(this.scoreBarData.pointThresholds[__s26local1]);
      }
      for (var __s26local2 = 0; __s26local2 < this.scoreBarData.topX.length; __s26local2++) {
        __s26local0.push(this.scoreBarData.topX[__s26local2]);
      }
      return __s26local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype, "levelLabels", {
    get: function () {
      var __s32local0 = [];
      var __s32local1 = 0;
      for (__s32local1 = 0; __s32local1 < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[__s32local1] != 0; __s32local1++) {
        __s32local0.push(this.scoreBarData.pointThresholds[__s32local1]);
      }
      for (__s32local1 = 0; __s32local1 < this.scoreBarData.topX.length; __s32local1++) {
        __s32local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.scoreBarData.topX[__s32local1]]));
      }
      __s32local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
      return __s32local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDialogPlayerSublayer.prototype.updateProgressBars = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived));
    if (this.scoreBarData.ownRank > 0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.scoreBarData.ownRank));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"));
    }
  };
  return CastleAllianceSamuraiInvasionDialogPlayerSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceSamuraiInvasionDialogPlayerSublayer = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __dep_export_SeasonLeagueEventElementComponent = require("gge-module:export_SeasonLeagueEventElementComponent");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
var __dep_export_CastleAllianceSamuraiInvasionRewardListDialog = require("gge-module:export_CastleAllianceSamuraiInvasionRewardListDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
