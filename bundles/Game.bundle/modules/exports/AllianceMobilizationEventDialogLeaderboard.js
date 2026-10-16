Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_GlobalLeaderBoardComponent = require("gge-module:export_GlobalLeaderBoardComponent");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_AllianceMobilizationEventDialogLeaderboardItem = require("gge-module:export_AllianceMobilizationEventDialogLeaderboardItem");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogLeaderboard(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._eventID = 0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogLeaderboard, __s1param0);
  AllianceMobilizationEventDialogLeaderboard.prototype.init = function () {
    this.subLayerDisp.mc_top.icon_ranking.toolTipText = "rank";
    this.subLayerDisp.mc_top.info_alliance.visible = false;
    this.subLayerDisp.mc_top.info_points.visible = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_server, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("ranking_server")));
    this.registerTotalHeader();
    this._leaderBoardComponent = new __dep_export_GlobalLeaderBoardComponent.GlobalLeaderBoardComponent(this.subLayerDisp, __dep_export_AllianceMobilizationEventDialogLeaderboardItem.AllianceMobilizationEventDialogLeaderboardItem, "dialog_highscore_alliance_search");
  };
  AllianceMobilizationEventDialogLeaderboard.prototype.registerTotalHeader = function () {
    var __s7local0 = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_totalPoints");
    var __s7local1 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_total, new __dep_exact_92d05af59ee2ff30.TextVO(__s7local0));
    if (__s7local1.numLines == 1) {
      __s7local1.textContentVO.stringValue = "\n" + __s7local0;
    }
  };
  AllianceMobilizationEventDialogLeaderboard.prototype.show = function (__s10param0) {
    __s1param0.prototype.show.call(this, __s10param0);
    if (__s10param0 && __s10param0.EID) {
      this._eventID = __s10param0.EID;
    }
    var __s10local0 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    if (__s10local0) {
      var __s10local1 = undefined;
      switch (this._eventID) {
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
          __s10local1 = __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_MOBILISATION_EVENT;
          break;
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID_MOBILISATION:
        case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID:
          __s10local1 = __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_RAID_MOBILISATION_EVENT;
      }
      this._leaderBoardComponent.init(__s10local1, null, __s10local0.leagueID, __s10param0);
      this._leaderBoardComponent.onShow();
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_division, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s10local0.getEventSpecificTextID("popup_ame_rewards_division_name_" + __s10local0.leagueID))));
  };
  AllianceMobilizationEventDialogLeaderboard.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._leaderBoardComponent) {
      this._leaderBoardComponent.onHide();
    }
  };
  return AllianceMobilizationEventDialogLeaderboard;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AllianceMobilizationEventDialogLeaderboard = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
