Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SVoteWorldCupVO = require("gge-module:export_C2SVoteWorldCupVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTimedYesNoDialogProperties = require("gge-module:export_CastleTimedYesNoDialogProperties");
var __dep_export_ACastleWorldCupDialogState = require("gge-module:export_ACastleWorldCupDialogState");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleWorldCupDialogNotVotedState(__s3param0) {
    var __s3local0 = this;
    __s3local0.votedValue = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldCupDialogNotVotedState, __s1param0);
  CastleWorldCupDialogNotVotedState.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    this.tfBubble.textContentVO.textId = "dialog_worldCup_text2";
    this.tfBubble.textContentVO.textReplacements = [this.worldCupEventVO.bonusRubies];
    this.tfBox.textContentVO.textId = "dialog_worldCup_box2";
    this.dialogDisp.btnTeamA.toolTipText = {
      t: "dialog_worldCup_tooltipBet",
      p: [this.getTeamString(this.worldCupEventVO.teamA)]
    };
    this.dialogDisp.btnTeamB.toolTipText = {
      t: "dialog_worldCup_tooltipBet",
      p: [this.getTeamString(this.worldCupEventVO.teamB)]
    };
    this.dialogDisp.btnDraw.toolTipText = "dialog_worldCup_tooltipBet_draw";
  };
  CastleWorldCupDialogNotVotedState.prototype.updateElements = function () {
    __s1param0.prototype.updateElements.call(this);
    this.activateButton(this.dialogDisp.btnTeamA);
    this.activateButton(this.dialogDisp.btnTeamB);
    this.activateButton(this.dialogDisp.btnDraw);
  };
  CastleWorldCupDialogNotVotedState.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btnTeamA:
          this.openYesNoDialog(__dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_A);
          break;
        case this.dialogDisp.btnTeamB:
          this.openYesNoDialog(__dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_B);
          break;
        case this.dialogDisp.btnDraw:
          this.openYesNoDialog(__dep_export_WorldCupEventVO.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW);
      }
    }
  };
  CastleWorldCupDialogNotVotedState.prototype.activateButton = function (__s13param0) {
    __s1param0.prototype.activateButton.call(this, __s13param0);
    __s13param0.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this._onButtonMouseOver));
    __s13param0.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this._onButtonMouseOut));
  };
  CastleWorldCupDialogNotVotedState.prototype.deactivateButton = function (__s15param0) {
    __s1param0.prototype.deactivateButton.call(this, __s15param0);
    __s15param0.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this._onButtonMouseOver));
    __s15param0.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this._onButtonMouseOut));
  };
  CastleWorldCupDialogNotVotedState.prototype._onButtonMouseOver = function (__s17param0) {
    __s17param0.target.scaleX = __s17param0.target.scaleY = __dep_export_ACastleWorldCupDialogState.ACastleWorldCupDialogState.MOUSE_OVER_SCALE;
  };
  CastleWorldCupDialogNotVotedState.prototype._onButtonMouseOut = function (__s19param0) {
    __s19param0.target.scaleX = __s19param0.target.scaleY = __dep_export_ACastleWorldCupDialogState.ACastleWorldCupDialogState.DEFAULT_SCALE;
  };
  CastleWorldCupDialogNotVotedState.prototype.resetState = function () {
    __s1param0.prototype.resetState.call(this);
    this.deactivateButton(this.dialogDisp.btnTeamA);
    this.deactivateButton(this.dialogDisp.btnTeamB);
    this.deactivateButton(this.dialogDisp.btnDraw);
  };
  CastleWorldCupDialogNotVotedState.prototype.openYesNoDialog = function (__s23param0) {
    this.votedValue = __s23param0;
    CastleWorldCupDialogNotVotedState.dialogHandler.registerDefaultDialogs(__dep_export_CastleTimedYesNoDialog.CastleTimedYesNoDialog, new __dep_export_CastleTimedYesNoDialogProperties.CastleTimedYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_worldCup_confirm_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_worldCup_confirm"), "", this.worldCupEventVO.remainingEventTimeInSeconds, false, this.bindFunction(this.sendVote)));
  };
  CastleWorldCupDialogNotVotedState.prototype.sendVote = function (__s25param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SVoteWorldCupVO.C2SVoteWorldCupVO(this.votedValue));
  };
  Object.defineProperty(CastleWorldCupDialogNotVotedState, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleWorldCupDialogNotVotedState;
}(__dep_export_ACastleWorldCupDialogState.ACastleWorldCupDialogState);
exports.CastleWorldCupDialogNotVotedState = __s0local1;
var __dep_export_WorldCupEventVO = require("gge-module:export_WorldCupEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTimedYesNoDialog = require("gge-module:export_CastleTimedYesNoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICastleWorldCupDialogState");
