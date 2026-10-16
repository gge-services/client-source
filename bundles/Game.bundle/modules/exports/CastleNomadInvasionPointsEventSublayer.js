Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function (__s1param0) {
  function CastleNomadInvasionPointsEventSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_nomadInvasion_overview_title"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_desc1, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_nomadInvasion_overview_desc"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_desc2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo"));
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_nomadInvasion_desc"));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_showMe);
    __s3local0.textFieldManager.registerTextField(__s3param0.mc_disabledRanking.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank")).autoFitToBounds = true;
    __s3param0.mc_disabledRanking.toolTipText = "dialog_tournament_yourRank";
    __s3param0.mc_disabledRanking.mouseChildren = false;
    __s3param0.btn_showMe.mouseChildren = false;
    __s3param0.btn_showMe.toolTipText = "dialog_nomadInvasion_overview_seekNomadsButton";
    __s3local0._seasonLeague = new __dep_export_SeasonLeagueEventElementComponent.SeasonLeagueEventElementComponent(__s3param0.mc_seasonLeague, __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNomadInvasionPointsEventSublayer, __s1param0);
  CastleNomadInvasionPointsEventSublayer.prototype.setScoreBarData = function (__s5param0) {
    this.scoreBarData = __s5param0;
  };
  CastleNomadInvasionPointsEventSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (this.eventVO && this.eventVO.khanCampBarVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff_2.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo_khan"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_nomadInvasion_overview_pointsEventInfo"));
    }
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE));
    }
    var __s7local0 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(this.scoreBarData.rewardLists, "nomadInvasion", this.tooltipValues, this.levelLabels);
    var __s7local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("NomadInvasionEvent_Score_Icon"))();
    __s7local1.toolTipText = "dialog_nomadInvasion_nomadPoints";
    var __s7local2 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("NomadInvasionEvent_Background"))();
    this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Player", __s7local1, __s7local2, CastleNomadInvasionPointsEventSublayer.openRewardsDialog, __s7local0);
    this.subLayerDisp.mc_seasonLeague.visible = false;
    this._seasonLeague.onShow();
    if (this.eventVO) {
      this.subLayerDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
      if (this.subLayerDisp.mc_difficulty.visible) {
        __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
      }
    }
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleNomadInvasionPointsEventSublayer.openRewardsDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceNomadInvasionRewardListDialog.CastleAllianceNomadInvasionRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER));
  };
  CastleNomadInvasionPointsEventSublayer.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_nomadinvasion"));
  };
  CastleNomadInvasionPointsEventSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
      __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    }
    if (this._seasonLeague) {
      this._seasonLeague.onHide();
    }
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    switch (__s24param0.target) {
      case this.subLayerDisp.btn_showMe:
        var __s24local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_3.WorldClassic.KINGDOM_ID);
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s24local0.kingdomID, __s24local0.absAreaPosX, __s24local0.absAreaPosY]);
        this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    }
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onGAAarrived = function (__s27param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_4.WorldConst.AREA_TYPE_NOMAD_CAMP, __dep_exact_26a421b704832cff_3.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID));
  };
  CastleNomadInvasionPointsEventSublayer.prototype.onUpdatePoints = function (__s29param0 = null) {
    this.updateProgressBars();
  };
  Object.defineProperty(CastleNomadInvasionPointsEventSublayer.prototype, "tooltipValues", {
    get: function () {
      var __s31local0 = [];
      for (var __s31local1 = 0; __s31local1 < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[__s31local1] != 0; __s31local1++) {
        __s31local0.push(this.scoreBarData.pointThresholds[__s31local1]);
      }
      for (var __s31local2 = 0; __s31local2 < this.scoreBarData.topX.length; __s31local2++) {
        __s31local0.push(this.scoreBarData.topX[__s31local2]);
      }
      return __s31local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionPointsEventSublayer.prototype, "levelLabels", {
    get: function () {
      var __s37local0 = [];
      var __s37local1 = 0;
      for (__s37local1 = 0; __s37local1 < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[__s37local1] != 0; __s37local1++) {
        __s37local0.push(this.scoreBarData.pointThresholds[__s37local1]);
      }
      for (__s37local1 = 0; __s37local1 < this.scoreBarData.topX.length; __s37local1++) {
        __s37local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.scoreBarData.topX[__s37local1]]));
      }
      __s37local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
      return __s37local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionPointsEventSublayer.prototype.updateProgressBars = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX, this.scoreBarData.rewardsReceived));
    if (this.scoreBarData.ownRank > 0) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.scoreBarData.ownRank));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"));
    }
  };
  Object.defineProperty(CastleNomadInvasionPointsEventSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  return CastleNomadInvasionPointsEventSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleNomadInvasionPointsEventSublayer = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __dep_export_SeasonLeagueEventElementComponent = require("gge-module:export_SeasonLeagueEventElementComponent");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
var __dep_export_CastleAllianceNomadInvasionRewardListDialog = require("gge-module:export_CastleAllianceNomadInvasionRewardListDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
