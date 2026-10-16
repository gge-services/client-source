Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ScoreEventGlobalLeaderBoardDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ScoreEventGlobalLeaderBoardDialog, __s1param0);
  ScoreEventGlobalLeaderBoardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name_default")));
    var __s5local1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_totalPoints")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_name")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_server, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("ranking_server"))).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.BOTTOM;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_noRankings"));
    this.dialogDisp.icon_rank.toolTipText = "rankingGlobal";
    this.dialogDisp.help_allianceName.toolTipText = "tooltip_rankingGlobal_alliance";
    this.dialogDisp.help_points.visible = false;
    this.dialogDisp.help_allianceName.x = __s5local0.x + __s5local0.textWidth + this.dialogDisp.help_allianceName.width;
    this.dialogDisp.help_points.x = __s5local1.x + __s5local1.textWidth + this.dialogDisp.help_points.width;
  };
  ScoreEventGlobalLeaderBoardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updatePoints();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.updatePoints));
  };
  ScoreEventGlobalLeaderBoardDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.updatePoints));
  };
  ScoreEventGlobalLeaderBoardDialog.prototype.updatePoints = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_ownPoints, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.eventVO.ownPoints, {
      compactThreshold: 1000000
    }));
  };
  Object.defineProperty(ScoreEventGlobalLeaderBoardDialog.prototype, "leagueTypeID", {
    get: function () {
      return this.eventVO.leagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScoreEventGlobalLeaderBoardDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  ScoreEventGlobalLeaderBoardDialog.prototype.getGlobalLeaderBoardRewards = function (__s17param0 = -1) {
    return this.eventVO.getGlobalLeaderBoardRewards(__s17param0);
  };
  return ScoreEventGlobalLeaderBoardDialog;
}(require("gge-module:export_AGlobalLeaderBoardDialog").AGlobalLeaderBoardDialog);
exports.ScoreEventGlobalLeaderBoardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
