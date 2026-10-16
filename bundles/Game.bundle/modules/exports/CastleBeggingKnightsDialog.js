Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __dep_export_CastleBeggingKnightsDialogProperties = require("gge-module:export_CastleBeggingKnightsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleBeggingKnightsDialog() {
    return __s1param0.call(this, CastleBeggingKnightsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBeggingKnightsDialog, __s1param0);
  CastleBeggingKnightsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payRessources, this.dialogDisp.btn_highscore]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_BeggingKnights_description_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_tip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_BeggingKnights_description_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_BeggingKnights_Bubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amounts, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_BeggingKnights_requirements")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_BeggingKnights_points")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_woodPoints, new __dep_exact_92d05af59ee2ff30_2.NumberVO(1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_foodPoints, new __dep_exact_92d05af59ee2ff30_2.NumberVO(1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stonePoints, new __dep_exact_92d05af59ee2ff30_2.NumberVO(1));
  };
  CastleBeggingKnightsDialog.prototype.updateDialog = function (__s7param0 = null) {
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds)));
    this.dialogDisp.mc_food.toolTipText = "food";
    this.dialogDisp.mc_wood.toolTipText = "wood";
    this.dialogDisp.mc_stone.toolTipText = "stone";
    this.updateTime();
    this.dialogDisp.btn_payRessources.toolTipText = "dialog_season_start_payRessources";
    this.dialogDisp.mc_icon.toolTipText = "dialog_BeggingKnights_nobilityPoints";
    this.dialogDisp.btn_highscore.toolTipText = "dialog_BeggingKnights_pointRanking_tooltip";
  };
  CastleBeggingKnightsDialog.prototype.showLoaded = function (__s9param0 = null) {
    this.eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    this.scoreBar = new __dep_export_CastleScoreBarComponent.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new __dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties(this.eventVO.rewardLists, "BeggingKnights", this.tooltipValues));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_BEGGING_KNIGHTS));
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.eventVO.pointThresholds, this.eventVO.topX));
    __s1param0.prototype.showLoaded.call(this);
    this.updateDialog();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_woodAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[0])));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stoneAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[1])));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_foodAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[2])));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateDialog));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleBeggingKnightsDialog.prototype, "tooltipValues", {
    get: function () {
      var __s12local0 = [];
      for (var __s12local1 = 0; __s12local1 < this.eventVO.pointThresholds.length && this.eventVO.pointThresholds[__s12local1] != 0; __s12local1++) {
        __s12local0.push(this.eventVO.pointThresholds[__s12local1]);
      }
      for (var __s12local2 = 0; __s12local2 < this.eventVO.topX.length; __s12local2++) {
        __s12local0.push(this.eventVO.topX[__s12local2]);
      }
      return __s12local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleBeggingKnightsDialog.prototype.hideLoaded = function (__s18param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateDialog));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleBeggingKnightsDialog.prototype.onRemoveEvent = function (__s20param0) {
    if (__s20param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleBeggingKnightsDialog.prototype.onUpdatePoints = function (__s23param0 = null) {
    this.setProgressBars();
  };
  CastleBeggingKnightsDialog.prototype.onClick = function (__s25param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      switch (__s25param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_payRessources:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastlePayRessourcesForBeggingKnightsEventDialog.CastlePayRessourcesForBeggingKnightsEventDialog, new __dep_export_CastleBeggingKnightsDialogProperties.CastleBeggingKnightsDialogProperties(this.eventVO));
          break;
        case this.dialogDisp.btn_highscore:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleBeggingKnightsHighscoreDialog.CastleBeggingKnightsHighscoreDialog, new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(__dep_exact_26a421b704832cff_2.HighscoreConst.BEGGING_KNIGHTS, this.eventVO.numberOfLeagues, this.eventVO.leagueID, this.eventVO.ownRank));
      }
    }
  };
  CastleBeggingKnightsDialog.prototype.setProgressBars = function () {
    if (this.scoreBar) {
      this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.eventVO.pointThresholds, this.eventVO.topX));
    }
  };
  CastleBeggingKnightsDialog.prototype.updateTime = function (__s32param0 = null) {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.eventVO.remainingEventTimeInSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.eventVO.remainingEventTimeInSeconds);
  };
  CastleBeggingKnightsDialog.NAME = "CastleBeggingKnightsExternal";
  return CastleBeggingKnightsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleBeggingKnightsDialog = __s0local0;
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __dep_export_CastleScoreEventScoreBarProperties = require("gge-module:export_CastleScoreEventScoreBarProperties");
var __dep_export_CastleBeggingKnightsHighscoreDialog = require("gge-module:export_CastleBeggingKnightsHighscoreDialog");
var __dep_export_CastlePayRessourcesForBeggingKnightsEventDialog = require("gge-module:export_CastlePayRessourcesForBeggingKnightsEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
