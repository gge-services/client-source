Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function LongtermPointEventGlobalLeaderBoardDialog() {
    return __s1param0.call(this, LongtermPointEventGlobalLeaderBoardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongtermPointEventGlobalLeaderBoardDialog, __s1param0);
  LongtermPointEventGlobalLeaderBoardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_longPointsEvent_pointRanking_tooltip"));
    this.dialogDisp.icon_ownPoints.toolTipText = "dialog_longPointsEvent_seasonalPoints";
  };
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore_longPointsEvent";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "rewardDialogTextID", {
    get: function () {
      return "ranking_description_LTPE";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "listType", {
    get: function () {
      return __dep_exact_26a421b704832cff.HighscoreConst.LONG_TERM_POINT_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  LongtermPointEventGlobalLeaderBoardDialog.NAME = "LongTermPointEventLeaderboard";
  return LongtermPointEventGlobalLeaderBoardDialog;
}(require("gge-module:export_ScoreEventGlobalLeaderBoardDialog").ScoreEventGlobalLeaderBoardDialog);
exports.LongtermPointEventGlobalLeaderBoardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
