Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventDialogInstructionSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.subLayerDisp.reputation_progress_component.btn_redHighscore.toolTipText = "dialog_berimondInvasion_redRank_tooltip";
    __s3local0.subLayerDisp.reputation_progress_component.btn_blueHighscore.toolTipText = "dialog_berimondInvasion_blueRank_tooltip";
    __s3local0.reputationProgressComponent = new __dep_export_FactionReputationProgressComponent.FactionReputationProgressComponent(__s3local0.subLayerDisp.reputation_progress_component);
    __s3local0._topXScoreBarsComponent = new __dep_export_FactionInvasionEventTopXScorebars.FactionInvasionEventTopXScorebars(__s3local0.subLayerDisp.scorebars, __s3local0.eventVO);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventDialogInstructionSublayer, __s1param0);
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_open_sublayer_alliance, this.subLayerDisp.btn_open_sublayer_singleplayer, this.subLayerDisp.reputation_progress_component.btn_redHighscore, this.subLayerDisp.reputation_progress_component.btn_blueHighscore, this.subLayerDisp.mc_seasonLeague.btn_showMe], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.registerEventListenersOnShow();
    this.setTexts();
    this._topXScoreBarsComponent.show();
    this.updateNoLeagueComponent();
    this.update();
    if (!this._seasonLeague || this._seasonLeague.eventId != this.eventVO.eventId) {
      if (this._seasonLeague) {
        this._seasonLeague.destroy();
      }
      this._seasonLeague = new __dep_export_SeasonLeagueEventElementComponent.SeasonLeagueEventElementComponent(this.subLayerDisp.mc_seasonLeague, this.eventVO.eventId);
    }
    this._seasonLeague.onShow();
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.updateNoLeagueComponent = function () {
    if (__dep_export_CastleModel.CastleModel.seasonLeagueData.isSeasonLeagueActive()) {
      if (!this.eventVO.seasonLeague.isModeEnabled) {
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_noLeague, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_seasonLeague_berimondInvasionNotContributing_copy"));
      }
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_noLeague, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_seasonLeague_berimondInvasionLeagueInactive_copy"));
    }
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_dialogtitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_header"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_bubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_overview_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_alliance_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_overview_alliance_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_open_sublayer_alliance.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventInterface_showMe_text")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputation_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_berimondInvasion_overview_reputation_desc")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_open_sublayer_singleplayer.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventInterface_showMe_text")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputationHeader, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("reputation")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._topXScoreBarsComponent.hide();
    this.removeEventListenersOnHide();
    this._seasonLeague.onHide();
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.registerEventListenersOnShow = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.removeEventListenersOnHide = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.onUpdatePoints = function (__s22param0) {
    this.update();
  };
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.update = function () {
    this.reputationProgressComponent.update(this.eventVO.currentReputationFactionScale);
    this._topXScoreBarsComponent.update();
  };
  Object.defineProperty(CastleFactionInvasionEventDialogInstructionSublayer.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialogInstructionSublayer.prototype.onClick = function (__s28param0) {
    __s1param0.prototype.onClick.call(this, __s28param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s28param0.target)) {
      switch (__s28param0.target) {
        case this.subLayerDisp.reputation_progress_component.btn_redHighscore:
          this.reputationProgressComponent.showRedFactionHighscore();
          break;
        case this.subLayerDisp.reputation_progress_component.btn_blueHighscore:
          this.reputationProgressComponent.showBlueFactionHighscore();
      }
    }
  };
  return CastleFactionInvasionEventDialogInstructionSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleFactionInvasionEventDialogInstructionSublayer = __s0local0;
var __dep_export_SeasonLeagueEventElementComponent = require("gge-module:export_SeasonLeagueEventElementComponent");
var __dep_export_FactionInvasionEventTopXScorebars = require("gge-module:export_FactionInvasionEventTopXScorebars");
var __dep_export_FactionReputationProgressComponent = require("gge-module:export_FactionReputationProgressComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
