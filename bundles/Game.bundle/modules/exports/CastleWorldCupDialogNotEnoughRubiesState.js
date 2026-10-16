Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleWorldCupDialogNotEnoughRubiesState(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldCupDialogNotEnoughRubiesState, __s1param0);
  CastleWorldCupDialogNotEnoughRubiesState.prototype.initElements = function () {
    __s1param0.prototype.initElements.call(this);
    this.dialogDisp.progressBar.visible = false;
    this.dialogDisp.progressBar.mouseChildren = false;
    this.dialogDisp.progressBar.fill.mask = this.dialogDisp.progressBar.fillMask;
  };
  CastleWorldCupDialogNotEnoughRubiesState.prototype.updateTexts = function () {
    __s1param0.prototype.updateTexts.call(this);
    this.tfBubble.textContentVO.textId = "dialog_worldCup_text1";
    this.tfBubble.textContentVO.textReplacements = [this.getTeamString(this.worldCupEventVO.teamA), this.getTeamString(this.worldCupEventVO.teamB), this.worldCupEventVO.paymentC2, this.worldCupEventVO.bonusRubies];
    this.tfBox.textContentVO.textId = "dialog_worldCup_box1";
    this.tfBox.textContentVO.textReplacements = [this.worldCupEventVO.paymentC2];
    this.dialogDisp.btnTeamA.toolTipText = "dialog_worldCup_tooltipBuy";
    this.dialogDisp.btnTeamB.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
    this.dialogDisp.btnDraw.toolTipText = this.dialogDisp.btnTeamA.toolTipText;
  };
  CastleWorldCupDialogNotEnoughRubiesState.prototype.updateElements = function () {
    __s1param0.prototype.updateElements.call(this);
    var __s9local0 = Math.min(this.worldCupEventVO.currencyC2, this.worldCupEventVO.paymentC2) / this.worldCupEventVO.paymentC2;
    this.dialogDisp.progressBar.visible = true;
    this.dialogDisp.progressBar.fillMask.scaleX = __s9local0;
    this.dialogDisp.progressBar.toolTipText = {
      t: "value_proportional_value",
      p: [Math.min(this.worldCupEventVO.currencyC2, this.worldCupEventVO.paymentC2), this.worldCupEventVO.paymentC2]
    };
    this.deactivateButton(this.dialogDisp.btnTeamA);
    this.deactivateButton(this.dialogDisp.btnTeamB);
    this.deactivateButton(this.dialogDisp.btnDraw);
  };
  CastleWorldCupDialogNotEnoughRubiesState.prototype.resetState = function () {
    __s1param0.prototype.resetState.call(this);
    this.dialogDisp.progressBar.visible = false;
  };
  return CastleWorldCupDialogNotEnoughRubiesState;
}(require("gge-module:export_ACastleWorldCupDialogState").ACastleWorldCupDialogState);
exports.CastleWorldCupDialogNotEnoughRubiesState = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleWorldCupDialogState");
