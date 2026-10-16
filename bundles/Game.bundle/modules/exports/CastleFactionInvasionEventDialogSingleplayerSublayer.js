Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventDialogSingleplayerSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.reputation_progress_component.btn_redHighscore, __s3local0.subLayerDisp.reputation_progress_component.btn_blueHighscore, __s3local0.subLayerDisp.mc_redReputationRewardContainer.btn_showRewards, __s3local0.subLayerDisp.mc_blueReputationRewardContainer.btn_showRewards, __s3local0.subLayerDisp.mc_redReputationRewardContainer.btn_gotoCamp, __s3local0.subLayerDisp.mc_blueReputationRewardContainer.btn_gotoCamp]);
    __s3local0.registerTextfields();
    __s3local0.subLayerDisp.reputation_progress_component.btn_redHighscore.toolTipText = "dialog_berimondInvasion_redRank_tooltip";
    __s3local0.subLayerDisp.reputation_progress_component.btn_blueHighscore.toolTipText = "dialog_berimondInvasion_blueRank_tooltip";
    __s3local0.subLayerDisp.mc_blueReputationRewardContainer.btn_gotoCamp.toolTipText = "dialog_berimondInvasion_findRedCamp";
    __s3local0.subLayerDisp.mc_redReputationRewardContainer.btn_gotoCamp.toolTipText = "dialog_berimondInvasion_findBlueCamp";
    var __s3local1 = __s3local0.eventVO.singleEventVO(false);
    var __s3local2 = __s3local0.eventVO.singleEventVO(true);
    __s3local0.reputationProgressComponent = new __dep_export_FactionReputationProgressComponent.FactionReputationProgressComponent(__s3local0.subLayerDisp.reputation_progress_component);
    __s3local0.redFactionReputationRewardContainer = new __dep_export_CastleFactionReputationRewardComponent.CastleFactionReputationRewardComponent(__s3local0.subLayerDisp.mc_redReputationRewardContainer, __s3local1.rewardLists, __s3local1.pointThresholds, __dep_export_CastleFactionInvasionEventRewardListDialog.CastleFactionInvasionEventRewardListDialog.TAB_RED);
    __s3local0.blueFactionReputationRewardContainer = new __dep_export_CastleFactionReputationRewardComponent.CastleFactionReputationRewardComponent(__s3local0.subLayerDisp.mc_blueReputationRewardContainer, __s3local2.rewardLists, __s3local2.pointThresholds, __dep_export_CastleFactionInvasionEventRewardListDialog.CastleFactionInvasionEventRewardListDialog.TAB_BLUE);
    __s3local0.topXfactionScoreBarsComponent = new __dep_export_FactionInvasionEventTopXScorebars.FactionInvasionEventTopXScorebars(__s3local0.subLayerDisp.scorebars, __s3local0.eventVO);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventDialogSingleplayerSublayer, __s1param0);
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.registerTextfields = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_singleplayerDesc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_sp_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputationInfo, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_sp_reputation_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputationHeader, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reputation")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_dialogtitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_sp_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_blueReputationRewardContainer.mc_nextReward.txt_nextReward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_sp_nextBlueReward")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_redReputationRewardContainer.mc_nextReward.txt_nextReward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_berimondInvasion_sp_nextRedReward")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.subLayerDisp.reputation_progress_component.btn_redHighscore:
          this.reputationProgressComponent.showRedFactionHighscore();
          break;
        case this.subLayerDisp.reputation_progress_component.btn_blueHighscore:
          this.reputationProgressComponent.showBlueFactionHighscore();
          break;
        case this.subLayerDisp.mc_redReputationRewardContainer.btn_showRewards:
          this.redFactionReputationRewardContainer.showAllRewards();
          break;
        case this.subLayerDisp.mc_blueReputationRewardContainer.btn_showRewards:
          this.blueFactionReputationRewardContainer.showAllRewards();
          break;
        case this.subLayerDisp.mc_redReputationRewardContainer.btn_gotoCamp:
          this.redFactionReputationRewardContainer.gotoCamp(__dep_exact_26a421b704832cff.DungeonConst.BLUE_FACTION_KING);
          break;
        case this.subLayerDisp.mc_blueReputationRewardContainer.btn_gotoCamp:
          this.redFactionReputationRewardContainer.gotoCamp(__dep_exact_26a421b704832cff.DungeonConst.RED_FACTION_KING);
      }
    }
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.show = function (__s11param0) {
    __s1param0.prototype.show.call(this, __s11param0);
    this.registerEventListenersOnShow();
    this.topXfactionScoreBarsComponent.show();
    this.updateComponents();
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.topXfactionScoreBarsComponent.hide();
    this.removeEventListenersOnHide();
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.registerEventListenersOnShow = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.onUpdatePoints = function (__s17param0) {
    this.updateComponents();
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.updateComponents = function () {
    this.topXfactionScoreBarsComponent.update();
    this.reputationProgressComponent.update(this.eventVO.currentReputationFactionScale);
    this.redFactionReputationRewardContainer.update(this.eventVO.redPoints, this.eventVO.maxPointsRed);
    this.blueFactionReputationRewardContainer.update(this.eventVO.bluePoints, this.eventVO.maxPointsBlue);
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.removeEventListenersOnHide = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleFactionInvasionEventDialogSingleplayerSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionInvasionEventDialogSingleplayerSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleFactionInvasionEventDialogSingleplayerSublayer = __s0local0;
var __dep_export_CastleFactionInvasionEventRewardListDialog = require("gge-module:export_CastleFactionInvasionEventRewardListDialog");
var __dep_export_CastleFactionReputationRewardComponent = require("gge-module:export_CastleFactionReputationRewardComponent");
var __dep_export_FactionInvasionEventTopXScorebars = require("gge-module:export_FactionInvasionEventTopXScorebars");
var __dep_export_FactionReputationProgressComponent = require("gge-module:export_FactionReputationProgressComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
