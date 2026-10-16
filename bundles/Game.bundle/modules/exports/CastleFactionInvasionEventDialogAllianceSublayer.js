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
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventDialogAllianceSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.setTexts();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventDialogAllianceSublayer, __s1param0);
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.initBasicButtons([this.subLayerDisp.btn_show_me_red, this.subLayerDisp.btn_show_me_blue, this.subLayerDisp.btn_highscore]);
    this.subLayerDisp.btn_highscore.toolTipText = "dialog_berimondInvasion_alliance_rankings_tooltip";
    var __s5local0 = CastleFactionInvasionEventDialogAllianceSublayer.eventVO.pointThresholds.concat(CastleFactionInvasionEventDialogAllianceSublayer.eventVO.topX);
    var __s5local1 = new __dep_export_RewardsDialogScoreBarProperties.RewardsDialogScoreBarProperties(CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists, "berimondInvasion_alliance", __s5local0, this.levelLabels, this.descriptions);
    var __s5local2 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("FactionInvasionEvent_Score_Icon"))();
    __s5local2.toolTipText = "factionHighscore_points";
    var __s5local3 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("FactionInvasionEvent_Background"))();
    this.scoreBar = new __dep_export_RewardsDialogScoreBarComponentExternal.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Alliance_V", __s5local2, __s5local3, CastleFactionInvasionEventDialogAllianceSublayer.openRewardsDialog, __s5local1);
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.scoreBar.destroy();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.updateProgressBar = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(CastleFactionInvasionEventDialogAllianceSublayer.eventVO.ownPoints, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.ownRank, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.pointThresholds, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.topX, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardsReceived, this.isPlayerQualifiedForAllianceRewards(), this.allianceRewardThresholdPoints()));
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.onUpdatePoints = function (__s13param0 = null) {
    if (CastleFactionInvasionEventDialogAllianceSublayer.mainEventVO) {
      this.updateProgressBar();
    }
  };
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer.prototype, "levelLabels", {
    get: function () {
      var __s16local0 = 0;
      if (!this._levelLabels) {
        this._levelLabels = [];
        var __s16local1 = CastleFactionInvasionEventDialogAllianceSublayer.eventVO;
        for (__s16local0 = 0; __s16local0 < __s16local1.pointThresholds.length && __s16local1.pointThresholds[__s16local0] != 0; __s16local0++) {
          this._levelLabels.push(__s16local1.pointThresholds[__s16local0]);
        }
        for (__s16local0 = 0; __s16local0 < __s16local1.topX.length; __s16local0++) {
          this._levelLabels.push(__dep_exact_92d05af59ee2ff30_1.Localize.text("Ranking_TopX", [__s16local1.topX[__s16local0]]));
        }
        this._levelLabels.push(__dep_exact_92d05af59ee2ff30_1.Localize.text("Ranking_Winner"));
      }
      return this._levelLabels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer.prototype, "descriptions", {
    get: function () {
      if (!this._descriptions) {
        this._descriptions = [];
        for (var __s23local0 = 0; __s23local0 < CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists.length; __s23local0++) {
          if (CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists[__s23local0].grantType == __dep_exact_26a421b704832cff_2.RewardConst.ALLIANCE) {
            this._descriptions.push("dialog_alienInvasionAlliance_Treasury_tooltip");
          } else if (CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists[__s23local0].grantType == __dep_exact_26a421b704832cff_2.RewardConst.ALLIANCE_MEMBER) {
            this._descriptions.push("dialog_alienInvasionAlliance_Members_tooltip");
          } else {
            this._descriptions.push("forAllianceFundsAndMembers");
          }
        }
      }
      return this._descriptions;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_dialog_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_alliance_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_alliance_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_red_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_findRedCamp")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_blue_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_findBlueCamp")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_red_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_alliance_camp_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_blue_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_alliance_camp_desc")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.onClick = function (__s33param0) {
    __s1param0.prototype.onClick.call(this, __s33param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      switch (__s33param0.target) {
        case this.subLayerDisp.btn_show_me_red:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff_4.DungeonConst.RED_FACTION_KING));
          break;
        case this.subLayerDisp.btn_show_me_blue:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID, -1, -1, __dep_exact_26a421b704832cff_4.DungeonConst.BLUE_FACTION_KING));
          break;
        case this.subLayerDisp.btn_highscore:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleFactionInvasionEventHighscoreDialog.CastleFactionInvasionEventHighscoreDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION, __dep_export_CastleFactionInvasionEventHighscoreDialog.CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE));
      }
    }
  };
  CastleFactionInvasionEventDialogAllianceSublayer.openRewardsDialog = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleFactionInvasionEventRewardListDialog.CastleFactionInvasionEventRewardListDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION, __dep_export_CastleFactionInvasionEventRewardListDialog.CastleFactionInvasionEventRewardListDialog.TAB_ALLIANCE));
  };
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer, "mainEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer, "eventVO", {
    get: function () {
      return this.mainEventVO.allianceEventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.isPlayerQualifiedForAllianceRewards = function () {
    var __s43local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION);
    var __s43local1 = __s43local0.singleEventVO(true);
    var __s43local2 = __s43local0.singleEventVO(false);
    return __s43local1.isPlayerQualifiedForAllianceRewards || __s43local2.isPlayerQualifiedForAllianceRewards;
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.allianceRewardThresholdPoints = function () {
    var __s45local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION_INVASION);
    var __s45local1 = __s45local0.singleEventVO(true);
    var __s45local2 = __s45local0.singleEventVO(false);
    if (__s45local1.isPlayerQualifiedForAllianceRewards) {
      if (__s45local2.isPlayerQualifiedForAllianceRewards) {
        return 0;
      } else {
        return __s45local2.allianceRewardThresholdPoints;
      }
    } else {
      return __s45local1.allianceRewardThresholdPoints;
    }
  };
  return CastleFactionInvasionEventDialogAllianceSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleFactionInvasionEventDialogAllianceSublayer = __s0local0;
var __dep_export_RewardsDialogScoreBarProperties = require("gge-module:export_RewardsDialogScoreBarProperties");
var __dep_export_RewardsDialogScoreBarComponentExternal = require("gge-module:export_RewardsDialogScoreBarComponentExternal");
var __dep_export_CastleFactionInvasionEventHighscoreDialog = require("gge-module:export_CastleFactionInvasionEventHighscoreDialog");
var __dep_export_CastleFactionInvasionEventRewardListDialog = require("gge-module:export_CastleFactionInvasionEventRewardListDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
