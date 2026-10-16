Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ACastleWorldCupDialogState = require("gge-module:export_ACastleWorldCupDialogState");
var __s0local0 = function (__s1param0) {
  function CastleWorldCupDialogAlreadyVotedState(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldCupDialogAlreadyVotedState, __s1param0);
  CastleWorldCupDialogAlreadyVotedState.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    this.tfBubble.textContentVO.textId = "dialog_worldCup_text3";
    this.tfBox.textContentVO.textId = "dialog_worldCup_box3";
    this.dialogDisp.btnTeamA.toolTipText = "dialog_worldCup_tooltipChangeBet";
    this.dialogDisp.btnTeamB.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
    this.dialogDisp.btnDraw.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
  };
  CastleWorldCupDialogAlreadyVotedState.prototype.updateElements = function () {
    __s1param0.prototype.updateElements.call(this);
    this.deactivateButton(this.dialogDisp.btnTeamA);
    this.deactivateButton(this.dialogDisp.btnTeamB);
    this.deactivateButton(this.dialogDisp.btnDraw);
    this.selectButton(this.worldCupEventVO.voted);
  };
  CastleWorldCupDialogAlreadyVotedState.prototype.selectButton = function (__s9param0) {
    var __s9local0;
    switch (__s9param0) {
      case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_A:
        (__s9local0 = this.dialogDisp.btnTeamA).toolTipText = {
          t: "dialog_worldCup_tooltipYourBet",
          p: [this.getTeamString(this.worldCupEventVO.teamA)]
        };
        break;
      case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_B:
        (__s9local0 = this.dialogDisp.btnTeamB).toolTipText = {
          t: "dialog_worldCup_tooltipYourBet",
          p: [this.getTeamString(this.worldCupEventVO.teamB)]
        };
        break;
      case __dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW:
        (__s9local0 = this.dialogDisp.btnDraw).toolTipText = "dialog_worldCup_tooltipYourBet_draw";
    }
    __s9local0.bg.gotoAndStop(__dep_export_ACastleWorldCupDialogState.ACastleWorldCupDialogState.BUTTON_SELECTED_STATE);
    __s9local0.actLikeButton = false;
    __s9local0.enabled = false;
    __s9local0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  return CastleWorldCupDialogAlreadyVotedState;
}(__dep_export_ACastleWorldCupDialogState.ACastleWorldCupDialogState);
exports.CastleWorldCupDialogAlreadyVotedState = __s0local0;
var __dep_export_WorldCupEventVO = require("gge-module:export_WorldCupEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleWorldCupDialogState");
