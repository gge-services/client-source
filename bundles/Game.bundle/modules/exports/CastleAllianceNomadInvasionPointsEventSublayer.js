Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleGenericAllianceHighscoreDialogProperties = require("gge-module:export_CastleGenericAllianceHighscoreDialogProperties");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceNomadInvasionPointsEventSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasionAlliance_allianceTab_title"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_desc1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasionAlliance_allianceTab_desc"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_desc"));
    __s3local0.initBasicButtons([__s3param0.btn_showMe, __s3param0.btn_highscore]);
    __s3param0.btn_showMe.mouseChildren = false;
    __s3param0.btn_showMe.toolTipText = "dialog_nomadInvasion_overview_seekNomadsButton";
    __s3param0.btn_highscore.toolTipText = "dialog_nomadInvasion_allianceScore_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceNomadInvasionPointsEventSublayer, __s1param0);
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.setScoreBarData = function (__s5param0) {
    this.scoreBarData = __s5param0;
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (this.eventVO && this.eventVO.khanCampBarVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff_3.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo_khan"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo"));
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff_5.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE));
    var __s7local0 = this.scoreBarData.pointThresholds.concat(this.scoreBarData.topX);
    var __s7local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("NomadInvasionEvent_Score_Icon"))();
    __s7local1.toolTipText = "dialog_nomadInvasion_nomadPoints";
    var __s7local2 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("NomadInvasionEvent_Background"))();
    var __s7local3 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "nomadInvasionAlliance", __s7local0, this.levelLabels, this.descriptions);
    this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Alliance_V", __s7local1, __s7local2, CastleAllianceNomadInvasionPointsEventSublayer.openRewardsDialog, __s7local3);
    if (this.eventVO) {
      this.subLayerDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
      if (this.subLayerDisp.mc_difficulty.visible) {
        __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
      }
    }
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.openRewardsDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionRewardListDialog.CastleAllianceNomadInvasionRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_5.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_nomadinvasionAlliance"));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    switch (__s22param0.target) {
      case this.subLayerDisp.btn_showMe:
        var __s22local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s22local0.kingdomID, __s22local0.absAreaPosX, __s22local0.absAreaPosY]);
        this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
        break;
      case this.subLayerDisp.btn_highscore:
        __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionHighscoreDialog.CastleAllianceNomadInvasionHighscoreDialog, new __dep_export_CastleGenericAllianceHighscoreDialogProperties.CastleGenericAllianceHighscoreDialogProperties(__dep_exact_26a421b704832cff_4.HighscoreConst.ALLIANCE_NOMADINVASION_ALLIANCE, this.eventVO.allianceBarVO.numberOfLeagues, this.eventVO.allianceBarVO.leagueID, this.eventVO.allianceBarVO.ownRank));
    }
  };
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onGAAarrived = function (__s25param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NOMAD_CAMP, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff_6.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID));
  };
  Object.defineProperty(CastleAllianceNomadInvasionPointsEventSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_5.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.onUpdatePoints = function (__s29param0 = null) {
    if (this.eventVO) {
      this.updateProgressBars();
    }
  };
  Object.defineProperty(CastleAllianceNomadInvasionPointsEventSublayer.prototype, "levelLabels", {
    get: function () {
      var __s32local0 = [];
      var __s32local1 = 0;
      for (__s32local1 = 0; __s32local1 < this.scoreBarData.pointThresholds.length; __s32local1++) {
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
  Object.defineProperty(CastleAllianceNomadInvasionPointsEventSublayer.prototype, "descriptions", {
    get: function () {
      var __s38local0 = [];
      for (var __s38local1 = 0; __s38local1 < this.scoreBarData.rewardLists.length; __s38local1++) {
        if (this.scoreBarData.rewardLists[__s38local1].grantType == __dep_exact_26a421b704832cff_2.RewardConst.ALLIANCE) {
          __s38local0.push("dialog_alienInvasionAlliance_Treasury_tooltip");
        } else if (this.scoreBarData.rewardLists[__s38local1].grantType == __dep_exact_26a421b704832cff_2.RewardConst.ALLIANCE_MEMBER) {
          __s38local0.push("dialog_alienInvasionAlliance_Members_tooltip");
        } else {
          __s38local0.push("forAllianceFundsAndMembers");
        }
      }
      return __s38local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionPointsEventSublayer.prototype.updateProgressBars = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived, this.eventVO.isPlayerQualifiedForAllianceRewards(), this.eventVO.allianceRewardThresholdPoints()));
  };
  return CastleAllianceNomadInvasionPointsEventSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceNomadInvasionPointsEventSublayer = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_CastleAllianceNomadInvasionHighscoreDialog = require("gge-module:export_CastleAllianceNomadInvasionHighscoreDialog");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
var __dep_export_CastleAllianceNomadInvasionRewardListDialog = require("gge-module:export_CastleAllianceNomadInvasionRewardListDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
