Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AdvancedProgressBar = require("gge-module:export_AdvancedProgressBar");
var __dep_export_HorizontalCallbackProgressBehaviour = require("gge-module:export_HorizontalCallbackProgressBehaviour");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __s0local0 = function () {
  function FactionReputationProgressComponent(__s3param0) {
    this._lastShownProgress = 0.5;
    this._disp = __s3param0;
    this._blueRankTextVO = new __dep_exact_92d05af59ee2ff30_3.TextVO("");
    this._redRankTextVO = new __dep_exact_92d05af59ee2ff30_3.TextVO("");
    this._localizedTextRankRed = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_berimondInvasion_redRank");
    this._localizedTextRankBlue = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_berimondInvasion_blueRank");
    this._txtScoreRed = this.textFieldManager.registerTextField(__s3param0.txt_pointsRed, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this._txtScoreRed.autoFitToBounds = true;
    this._txtScoreBlue = this.textFieldManager.registerTextField(__s3param0.txt_pointsBlue, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this._txtScoreBlue.autoFitToBounds = true;
    this._txtRankRed = this.textFieldManager.registerTextField(__s3param0.txt_RankRed, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, []));
    this._txtRankBlue = this.textFieldManager.registerTextField(__s3param0.txt_RankBlue, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, []));
    this._txtRankRed.autoFitToBounds = true;
    this._txtRankBlue.autoFitToBounds = true;
    __s3param0.mc_blueFaction.toolTipText = "dialog_berimondInvasion_reputation_blue";
    __s3param0.mc_redFaction.toolTipText = "dialog_berimondInvasion_reputation_red";
    this._repuationProgressbar = new __dep_export_AdvancedProgressBar.AdvancedProgressBar(__s3param0.mc_reputationBar.mc_progressbar, new __dep_export_HorizontalCallbackProgressBehaviour.HorizontalCallbackProgressBehaviour(this.bindFunction(this.onReputationProgressAnimationUpdate), null));
  }
  FactionReputationProgressComponent.prototype.update = function (__s5param0) {
    if (!this._repuationProgressbar.isTweening) {
      this.updateReputationProgressbar(__s5param0);
    }
    this.updateText();
  };
  FactionReputationProgressComponent.prototype.updateText = function () {
    var __s8local0 = __dep_exact_f855840627e6e145.int(this.eventVO.singleEventVO(false).ownRank);
    var __s8local1 = __dep_exact_f855840627e6e145.int(this.eventVO.singleEventVO(true).ownRank);
    this._redRankTextVO.stringValue = __s8local0 > -1 ? __dep_exact_92d05af59ee2ff30.Localize.integer(__s8local0) : "-";
    this._blueRankTextVO.stringValue = __s8local1 > -1 ? __dep_exact_92d05af59ee2ff30.Localize.integer(__s8local1) : "-";
    this._txtRankRed.textContentVO.textReplacements = [this._localizedTextRankRed, this._redRankTextVO];
    this._txtRankBlue.textContentVO.textReplacements = [this._localizedTextRankBlue, this._blueRankTextVO];
    this._txtScoreRed.textContentVO.numberValue = this.eventVO.singleEventVO(false).ownPoints;
    this._txtScoreBlue.textContentVO.numberValue = this.eventVO.singleEventVO(true).ownPoints;
  };
  Object.defineProperty(FactionReputationProgressComponent.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  FactionReputationProgressComponent.prototype.updateReputationProgressbar = function (__s12param0) {
    this._repuationProgressbar.fromTo(this._lastShownProgress, __s12param0);
    this._lastShownProgress = __s12param0;
  };
  FactionReputationProgressComponent.prototype.onReputationProgressAnimationUpdate = function (__s14param0, __s14param1) {
    var __s14local0 = __s14param0.target;
    this._disp.mc_reputationBar.mc_factionSeperator.x = this._disp.mc_reputationBar.mc_progressbar.x + this._repuationProgressbar.getOriginBarWidth * __s14local0.scaleX;
  };
  Object.defineProperty(FactionReputationProgressComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  FactionReputationProgressComponent.prototype.showRedFactionHighscore = function () {
    FactionReputationProgressComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleFactionInvasionEventHighscoreDialog.CastleFactionInvasionEventHighscoreDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, __dep_export_CastleFactionInvasionEventHighscoreDialog.CastleFactionInvasionEventHighscoreDialog.TAB_RED));
  };
  FactionReputationProgressComponent.prototype.showBlueFactionHighscore = function () {
    FactionReputationProgressComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleFactionInvasionEventHighscoreDialog.CastleFactionInvasionEventHighscoreDialog, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, __dep_export_CastleFactionInvasionEventHighscoreDialog.CastleFactionInvasionEventHighscoreDialog.TAB_BLUE));
  };
  Object.defineProperty(FactionReputationProgressComponent, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return FactionReputationProgressComponent;
}();
exports.FactionReputationProgressComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFactionInvasionEventHighscoreDialog = require("gge-module:export_CastleFactionInvasionEventHighscoreDialog");
