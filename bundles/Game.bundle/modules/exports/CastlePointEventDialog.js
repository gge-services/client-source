Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePointEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePointEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePointEventDialog, __s1param0);
  CastlePointEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    var __s5local0 = [];
    __s5local0.push(this.dialogDisp.btn_close);
    __s5local0.push(this.dialogDisp.btn_help);
    __s5local0.push(this.dialogDisp.btn_highscore);
    this.initBasicButtons(__s5local0);
    this.dialogDisp.btn_highscore.toolTipText = "dialog_pointsEvent_pointRanking_tooltip";
    this.dialogDisp.iconCake.toolTipText = "dialog_pointsEvent_nobilityPoints";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank"));
    this.dialogDisp.mc_disabledRanking.mouseChildren = false;
    this.dialogDisp.mc_disabledRanking.toolTipText = "dialog_pointsEvent_pointRankingDisabled_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bubble, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_pointsEvent_eventcamp_message")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_sideTop, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_pointsEvent_eventcamp_description")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_condition, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("judgement_requirements")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_points")).autoFitToBounds = true;
    this.initConditionsTexts();
  };
  CastlePointEventDialog.prototype.initConditionsTexts = function () {
    this.conditionNameTextfields = [];
    this.conditionPointsTextfields = [];
    for (var __s7local0 = 0; __s7local0 < CastlePointEventDialog.MAX_CONDITIONS; __s7local0++) {
      var __s7local1 = this.dialogDisp["i" + __s7local0];
      var __s7local2 = this.textFieldManager.registerTextField(__s7local1.txt_condition, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
      __s7local2.autoFitToBounds = true;
      __s7local2.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.conditionNameTextfields.push(__s7local2);
      var __s7local3 = this.textFieldManager.registerTextField(__s7local1.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
      this.conditionPointsTextfields.push(__s7local3);
    }
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
  };
  CastlePointEventDialog.prototype.applyPropertiesLoaded = function (__s11param0 = null) {
    this.eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_POINT_EVENT);
  };
  CastlePointEventDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    if (this.eventVO) {
      var __s13local0 = this.eventVO.pointThresholds.concat(this.eventVO.topX);
      this.scoreBar = new __dep_export_CastleScoreBarComponent.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new __dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties(this.eventVO.rewardLists, "pointsEvent", __s13local0));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_POINT_EVENT));
      this.setTexts();
      this.setProgressBars();
      this.setRanking();
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
      this.onUpdateEventTime();
    } else {
      this.hide();
    }
  };
  CastlePointEventDialog.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      __s1param0.prototype.onClick.call(this, __s17param0);
      switch (__s17param0.target) {
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_pointsEvent"));
          break;
        case this.dialogDisp.btn_highscore:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastlePointEventHighscoreDialog.CastlePointEventHighscoreDialog, new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(__dep_exact_26a421b704832cff_1.HighscoreConst.POINT_EVENT, this.eventVO.numberOfLeagues, this.eventVO.leagueID, this.eventVO.ownRank));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastlePointEventDialog.prototype.setRanking = function () {
    if (this.eventVO.disableRanking) {
      this.dialogDisp.btn_highscore.visible = false;
      this.dialogDisp.mc_disabledRanking.visible = true;
      if (this.eventVO.ownRank > 0) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.eventVO.ownRank), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      }
    } else {
      this.dialogDisp.btn_highscore.visible = true;
      this.dialogDisp.mc_disabledRanking.visible = false;
    }
  };
  CastlePointEventDialog.prototype.setTexts = function () {
    var __s27local0;
    var __s27local1;
    for (var __s27local2 = 0; __s27local2 < CastlePointEventDialog.MAX_CONDITIONS; __s27local2++) {
      var __s27local3 = this.dialogDisp["i" + __s27local2];
      var __s27local4 = __s27local2 < this.eventVO.conditionCount;
      __s27local3.visible = __s27local4;
      if (__s27local4) {
        var __s27local5 = this.eventVO.getCondition(__s27local2);
        __s27local0 = __s27local5.name;
        this.conditionNameTextfields[__s27local2].textContentVO.textId = __s27local5.textId;
        this.conditionNameTextfields[__s27local2].textContentVO.textReplacements = __s27local5.textReplacements;
        this.conditionPointsTextfields[__s27local2].textContentVO.numberValue = __s27local5.score;
      }
    }
    this.itxt_title.textContentVO.textId = "pointsEvent_" + __s27local0 + "_title";
    __s27local1 = this.eventVO.isKingdomSpecific ? "pointsEvent_" + __s27local0 + "_" + this.eventVO.kingdomId + "_info" : "pointsEvent_" + __s27local0 + "_info";
    this.itxt_description.textContentVO.textId = __s27local1;
  };
  CastlePointEventDialog.prototype.hideLoaded = function (__s32param0 = null) {
    this.onMouseOut(null);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    __s1param0.prototype.hideLoaded.call(this, __s32param0);
  };
  CastlePointEventDialog.prototype.onUpdatePoints = function (__s35param0 = null) {
    this.setProgressBars();
  };
  CastlePointEventDialog.prototype.onUpdateEventTime = function (__s37param0 = null) {
    var __s37local0 = 0;
    var __s37local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_POINT_EVENT), "PointEventEventVO");
    if (__s37local1) {
      __s37local0 = __dep_exact_f855840627e6e145.int(__s37local1.remainingEventTimeInSeconds);
    }
    if (__s37local0 < 1) {
      this.hide();
      this.destroy();
    }
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, __s37local0, __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_hitArea_Time, __s37local0);
  };
  CastlePointEventDialog.prototype.setProgressBars = function () {
    if (this.scoreBar) {
      this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.eventVO.pointThresholds, this.eventVO.topX));
    }
    if (this.eventVO.disableRanking) {
      this.setRanking();
    }
  };
  CastlePointEventDialog.__initialize_static_members = function () {
    CastlePointEventDialog.NAME = "CastlePointEvent";
    CastlePointEventDialog.MAX_CONDITIONS = 3;
  };
  return CastlePointEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePointEventDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __dep_export_CastleScoreEventScoreBarProperties = require("gge-module:export_CastleScoreEventScoreBarProperties");
var __dep_export_CastlePointEventHighscoreDialog = require("gge-module:export_CastlePointEventHighscoreDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
