Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleGenericAllianceHighscoreDialogProperties = require("gge-module:export_CastleGenericAllianceHighscoreDialogProperties");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceCampNomadInvasionPointsEventSublayer(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3param0.txt_khanCamp_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_desc_khanCamp")).autoFitToBounds = true;
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_taunt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_desc_rageLevelProgress"));
    __s3local0.textFieldManager.registerTextField(__s3param0.btn_rewardList.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_pointsEvent_rewardsList_header")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_desc")).autoFitToBounds = true;
    var __s3local1 = __s3local0.textFieldManager.registerTextField(__s3param0.mc_nextReward.txt_rewardInfo, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_forParticipantMembers_header"));
    __s3local1.autoFitToBounds = true;
    __s3local1.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.itxt_detailDescription = __s3local0.textFieldManager.registerTextField(__s3param0.txt_descriptionDetail, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_khanCampLevel = __s3local0.textFieldManager.registerTextField(__s3param0.txt_khanCampLevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_alliRage = __s3local0.textFieldManager.registerTextField(__s3param0.mc_alliRage.txt_alliRage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_rage = __s3local0.textFieldManager.registerTextField(__s3param0.mc_rage.txt_rage, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_nextReward = __s3local0.textFieldManager.registerTextField(__s3param0.mc_nextRewardHeader.txt_nextReward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.itxt_rage.autoFitToBounds = true;
    __s3local0.alliRageProgress = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(__s3param0.mc_alliRage.progressbar);
    __s3local0.rageProgress = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(__s3param0.mc_rage.progressbar);
    __s3param0.mc_alliRage.toolTipText = "dialog_nomadInvasion_khanContest_khanCampProgress";
    __s3param0.mc_rageIcon.toolTipText = "rage";
    __s3param0.btn_joinAlliance.toolTipText = "dialog_nomadInvasion_khanContest_joinAlliance_tooltip";
    __s3param0.mc_chains.toolTipText = "dialog_nomadInvasion_khanContest_belowRewardLimit_tooltip";
    __s3param0.btn_highscore.toolTipText = "dialog_nomadInvasion_allianceScore_tooltip";
    __s3param0.mc_alliRage.mouseChildren = false;
    __s3param0.mc_rage.mouseChildren = false;
    __s3local0.centeredRewardList = new __dep_export_CastleCenteredRewardRendererListComponent.CastleCenteredRewardRendererListComponent(__s3local0.subLayerDisp.mc_nextReward.rewards, CastleAllianceCampNomadInvasionPointsEventSublayer.ITEM_DIMENSION);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_rewardList, __s3param0.btn_taunt, __s3param0.btn_showMe, __s3param0.btn_joinAlliance, __s3param0.btn_highscore]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceCampNomadInvasionPointsEventSublayer, __s1param0);
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_nomadInvasion_khanContest"));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.checkAllianceStatus();
    this.subLayerDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
    if (this.subLayerDisp.mc_difficulty.visible) {
      __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
    }
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventsRefreshed));
    this.subLayerDisp.mc_difficulty.visible = false;
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.checkAllianceStatus = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.itxt_detailDescription.textContentVO.textId = "dialog_nomadInvasion_khanContest_desc_detail";
      this.itxt_khanCampLevel.textContentVO.textId = "levelX";
      this.itxt_alliRage.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.itxt_rage.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.updateProgress();
      this.subLayerDisp.btn_showMe.toolTipText = "dialog_nomadInvasion_khanContest_jumpCamp";
      this.subLayerDisp.btn_joinAlliance.visible = false;
      this.subLayerDisp.mc_nextReward.visible = true;
      this.subLayerDisp.mc_nextRewardHeader.visible = true;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_showMe, true);
    } else {
      this.itxt_detailDescription.textContentVO.textId = "dialog_nomadInvasion_khanContest_descNoAlliance_detail";
      this.itxt_khanCampLevel.textContentVO.textId = "-";
      this.itxt_alliRage.textContentVO.textId = "-";
      this.itxt_rage.textContentVO.textId = "-";
      this.itxt_rage.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.subLayerDisp.btn_taunt.toolTipText = "dialog_nomadInvasion_khanContest_joinAlliance_tooltip";
      this.subLayerDisp.btn_showMe.toolTipText = "dialog_nomadInvasion_khanContest_joinAlliance_tooltip";
      this.subLayerDisp.btn_joinAlliance.visible = true;
      this.subLayerDisp.mc_nextReward.visible = false;
      this.subLayerDisp.mc_nextRewardHeader.visible = false;
      this.subLayerDisp.mc_chains.visible = false;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_showMe, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_taunt, false);
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventsRefreshed));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.subLayerDisp.btn_taunt:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleNomadInvasionTauntDialog.CastleNomadInvasionTauntDialog);
          break;
        case this.subLayerDisp.btn_rewardList:
          this.onRewardListClick();
          break;
        case this.subLayerDisp.btn_joinAlliance:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog);
          break;
        case this.subLayerDisp.btn_showMe:
          var __s16local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_3.WorldClassic.KINGDOM_ID);
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s16local0.kingdomID, __s16local0.absAreaPosX, __s16local0.absAreaPosY]);
          this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
          break;
        case this.subLayerDisp.btn_highscore:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionHighscoreDialog.CastleAllianceNomadInvasionHighscoreDialog, new __dep_export_CastleGenericAllianceHighscoreDialogProperties.CastleGenericAllianceHighscoreDialogProperties(__dep_exact_26a421b704832cff_2.HighscoreConst.ALLIANCE_NOMADINVASION_ALLIANCE, this.eventVO.allianceBarVO.numberOfLeagues, this.eventVO.allianceBarVO.leagueID, this.eventVO.allianceBarVO.ownRank));
      }
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onGAAarrived = function (__s20param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, __dep_exact_26a421b704832cff_3.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onRewardListClick = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionRewardListDialog.CastleAllianceNomadInvasionRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __dep_export_CastleAllianceNomadInvasionRewardListDialog.CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.setEventVO = function (__s24param0) {
    this.eventVO = __s24param0;
  };
  Object.defineProperty(CastleAllianceCampNomadInvasionPointsEventSublayer.prototype, "scoreBarData", {
    get: function () {
      return this.eventVO.khanCampBarVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onEventsRefreshed = function (__s28param0) {
    if (__s28param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      this.checkAllianceStatus();
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.updateProgress = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      var __s31local0 = this.eventVO.allianceCamp;
      if (__s31local0) {
        var __s31local1 = __s31local0.rageNeededForLevelUp;
        var __s31local2 = __s31local0.playerRageCap;
        this.itxt_khanCampLevel.textContentVO.textReplacements = [this.eventVO.khanCampLevel];
        this.itxt_rage.textContentVO.textReplacements = [this.eventVO.playerRage, __s31local2];
        this.itxt_rage.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
        if (__s31local0.isMaxLevel) {
          this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardsReceived, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_pointsEvent_scoreBar_allRewardsEarned")).autoFitToBounds = true;
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_nextKhanCampLevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_rewardCondition_maxed"));
          this.itxt_nextReward.textContentVO.textId = "dialog_nomadInvasion_khanContest_finalReward_title";
          this.itxt_alliRage.textContentVO.textId = "panel_state_levelCap";
        } else {
          this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardsReceived, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_pointsEvent_scoreBar_rewards", [this.scoreBarData.rewardsReceived, this.scoreBarData.pointThresholds.length]));
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_nextKhanCampLevel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_nomadInvasion_khanContest_rewardCondition", [Math.min(this.scoreBarData.ownPoints + 1, this.scoreBarData.pointThresholds[this.scoreBarData.pointThresholds.length - 1])]));
          this.itxt_nextReward.textContentVO.textId = "dialog_nomadInvasion_khanContest_nextReward_title";
          this.itxt_alliRage.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
          this.itxt_alliRage.textContentVO.textReplacements = [this.eventVO.allianceRage, __s31local1];
        }
        this.centeredRewardList.showRewards(this.scoreBarData.rewardLists[Math.min(this.scoreBarData.rewardsReceived, this.scoreBarData.rewardLists.length - 1)]);
        this.subLayerDisp.mc_chains.visible = !this.eventVO.canGetKhanRewards;
        this.alliRageProgress.scaleX = Math.min(1, this.eventVO.allianceRage / __s31local1);
        this.rageProgress.scaleX = Math.min(1, this.eventVO.playerRage / __s31local2);
        var __s31local3 = this.eventVO.playerRage >= __s31local2;
        if (__s31local3) {
          this.subLayerDisp.btn_taunt.toolTipText = "dialog_nomadInvasion_khanContest_attackKhanButtonTooltip";
          this.subLayerDisp.mc_rage.toolTipText = "dialog_nomadInvasion_khanContest_rageMeterTooltipFull";
        } else {
          this.subLayerDisp.btn_taunt.toolTipText = {
            t: "dialog_nomadInvasion_khanContest_attackKhanButtonGreyTooltip",
            p: [this.eventVO.playerRage, __s31local2]
          };
          this.subLayerDisp.mc_rage.toolTipText = "dialog_nomadInvasion_khanContest_rageMeterTooltip";
        }
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_taunt, __s31local3);
      }
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.__initialize_static_members = function () {
    CastleAllianceCampNomadInvasionPointsEventSublayer.ITEM_DIMENSION = new __s0local0(44, 42);
  };
  return CastleAllianceCampNomadInvasionPointsEventSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceCampNomadInvasionPointsEventSublayer = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCenteredRewardRendererListComponent = require("gge-module:export_CastleCenteredRewardRendererListComponent");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
var __dep_export_CastleAllianceNomadInvasionHighscoreDialog = require("gge-module:export_CastleAllianceNomadInvasionHighscoreDialog");
var __dep_export_CastleAllianceNomadInvasionRewardListDialog = require("gge-module:export_CastleAllianceNomadInvasionRewardListDialog");
var __dep_export_CastleNomadInvasionTauntDialog = require("gge-module:export_CastleNomadInvasionTauntDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
__s0local1.__initialize_static_members();
