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
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleGenericAllianceHighscoreDialogProperties = require("gge-module:export_CastleGenericAllianceHighscoreDialogProperties");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionDialogAllianceSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_samuraiInvasion_alliance_header"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_samuraiInvasion_alliance_info")).autoFitToBounds = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_highscore, __s3param0.btn_showMe]);
    __s3param0.btn_showMe.toolTipText = "dialog_samuraiInvasion_overview_seekSamuraiButton";
    __s3param0.btn_showMe.mouseChildren = false;
    __s3local0.subLayerDisp.btn_highscore.toolTipText = "dialog_samuraiInvasion_allianceScore_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionDialogAllianceSublayer, __s1param0);
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.setScoreBarData = function (__s5param0) {
    this.scoreBarData = __s5param0;
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_SAMURAI_INVASION));
    }
    var __s7local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("AllianceSamuraiInvasionEvent_Score_Icon"))();
    __s7local0.toolTipText = "dialog_samuraiInvasion_alliance_points";
    var __s7local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("AllianceSamuraiInvasionEvent_Background"))();
    var __s7local2 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "samuraiInvasionAlliance", this.tooltipValues, this.levelLabels, this.descriptions);
    this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Alliance_V", __s7local0, __s7local1, CastleAllianceSamuraiInvasionDialogAllianceSublayer.openRewardsDialog, __s7local2);
    var __s7local3 = __dep_exact_81dacdf05bd32292_2.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_SAMURAI_INVASION), "SamuraiInvasionEventVO");
    if (__s7local3) {
      var __s7local4 = __s7local3.daimyoInfoVO.isEnabled ? "dialog_samuraiInvasion_alliance_pointsInfo_samuraiInvasionDaimyo" : "dialog_samuraiInvasion_alliance_pointsInfo";
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtext, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local4)).autoFitToBounds = true;
      this.subLayerDisp.mc_difficulty.visible = __s7local3.isDifficultyScalingActivated;
      if (this.subLayerDisp.mc_difficulty.visible) {
        __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(__s7local3.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
      }
    }
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.openRewardsDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceSamuraiInvasionRewardListDialog.CastleAllianceSamuraiInvasionRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_SAMURAI_INVASION, __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_samuraiInvasionAlliance"));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.subLayerDisp.btn_showMe:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SAMURAI_CAMP, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff_5.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID));
        break;
      case this.subLayerDisp.btn_highscore:
        __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceSamuraiInvasionHighscoreDialog.CastleAllianceSamuraiInvasionHighscoreDialog, new __dep_export_CastleGenericAllianceHighscoreDialogProperties.CastleGenericAllianceHighscoreDialogProperties(__dep_exact_26a421b704832cff_3.HighscoreConst.SAMURAI_ALLIANCE, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.numberOfLeagues, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.leagueID, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.ownRank));
    }
  };
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.onUpdatePoints = function (__s24param0 = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      return CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype.updateProgressBars = function () {
    if (CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO) {
      this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived, CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.isPlayerQualifiedForAllianceRewards(), CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceRewardThresholdPoints()));
    }
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "tooltipValues", {
    get: function () {
      return this.sublayerLeagueTypeEventVO.pointThresholds.concat(this.sublayerLeagueTypeEventVO.topX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "levelLabels", {
    get: function () {
      var __s33local0 = [];
      var __s33local1 = 0;
      for (__s33local1 = 0; __s33local1 < this.sublayerLeagueTypeEventVO.pointThresholds.length; __s33local1++) {
        __s33local0.push(this.sublayerLeagueTypeEventVO.pointThresholds[__s33local1]);
      }
      for (__s33local1 = 0; __s33local1 < this.sublayerLeagueTypeEventVO.topX.length; __s33local1++) {
        __s33local0.push(__dep_exact_92d05af59ee2ff30_1.Localize.text("Ranking_TopX", [this.sublayerLeagueTypeEventVO.topX[__s33local1]]));
      }
      __s33local0.push(__dep_exact_92d05af59ee2ff30_1.Localize.text("Ranking_Winner"));
      return __s33local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer.prototype, "descriptions", {
    get: function () {
      var __s39local0 = [];
      for (var __s39local1 = 0; __s39local1 < CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.rewardLists.length; __s39local1++) {
        if (CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.rewardLists[__s39local1].grantType == __dep_exact_26a421b704832cff_2.RewardConst.ALLIANCE) {
          __s39local0.push("dialog_alienInvasionAlliance_Treasury_tooltip");
        } else if (CastleAllianceSamuraiInvasionDialogAllianceSublayer.eventVO.allianceBarVO.rewardLists[__s39local1].grantType == __dep_exact_26a421b704832cff_2.RewardConst.ALLIANCE_MEMBER) {
          __s39local0.push("dialog_alienInvasionAlliance_Members_tooltip");
        } else {
          __s39local0.push("forAllianceFundsAndMembers");
        }
      }
      return __s39local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialogAllianceSublayer, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_4.EventConst.EVENTTYPE_SAMURAI_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceSamuraiInvasionDialogAllianceSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceSamuraiInvasionDialogAllianceSublayer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_CastleAllianceSamuraiInvasionHighscoreDialog = require("gge-module:export_CastleAllianceSamuraiInvasionHighscoreDialog");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
var __dep_export_CastleAllianceSamuraiInvasionRewardListDialog = require("gge-module:export_CastleAllianceSamuraiInvasionRewardListDialog");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
