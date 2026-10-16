Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DefaultGlobalLeaderBoardItem = require("gge-module:export_DefaultGlobalLeaderBoardItem");
var __dep_export_GlobalLeaderBoardComponent = require("gge-module:export_GlobalLeaderBoardComponent");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_DonationRankingRewardsDialogProperties = require("gge-module:export_DonationRankingRewardsDialogProperties");
var __dep_export_GlobalLeaderboardRankingRankingRewardsDialog = require("gge-module:export_GlobalLeaderboardRankingRankingRewardsDialog");
var __s0local0 = function (__s1param0) {
  function DonationEventDialogRanking(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    var __s3local1 = (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name_default")));
    var __s3local2 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_totalPoints")));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_name")));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_server, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("ranking_server"))).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.BOTTOM;
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_list.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_highscore_noRankings"));
    __s3local2.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.BOTTOM;
    __s3local2.autoFitToBounds = true;
    __s3local0.subLayerDisp.icon_rank.toolTipText = "rankingGlobal";
    __s3local0.subLayerDisp.help_allianceName.toolTipText = "tooltip_rankingGlobal_alliance";
    __s3local0.subLayerDisp.help_points.toolTipText = "tooltip_rankingGlobal_points";
    __s3local0.subLayerDisp.help_allianceName.x = __s3local1.x + __s3local1.textWidth + __s3local0.subLayerDisp.help_allianceName.width;
    __s3local0.subLayerDisp.help_points.x = __s3local2.x + __s3local2.textWidth + __s3local0.subLayerDisp.help_points.width;
    __s3local0._leaderBoard = new __dep_export_GlobalLeaderBoardComponent.GlobalLeaderBoardComponent(__s3local0.subLayerDisp, __dep_export_DefaultGlobalLeaderBoardItem.DefaultGlobalLeaderBoardItem, "dialog_highscore_name_alliance_search");
    __s3local0._leaderBoard.init(__s3local0.highscoreID);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventDialogRanking, __s1param0);
  DonationEventDialogRanking.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this._leaderBoard.onShow();
    this._leaderBoard.openRewardDialogSignal.add(this.bindFunction(this.showRewards));
  };
  DonationEventDialogRanking.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._leaderBoard) {
      this._leaderBoard.onHide();
      this._leaderBoard.openRewardDialogSignal.removeAll();
    }
  };
  DonationEventDialogRanking.prototype.showRewards = function (__s10param0 = -1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GlobalLeaderboardRankingRankingRewardsDialog.GlobalLeaderboardRankingRankingRewardsDialog, new __dep_export_DonationRankingRewardsDialogProperties.DonationRankingRewardsDialogProperties("ranking_description_DonationEvent", this.getRankingRewards()));
  };
  DonationEventDialogRanking.prototype.getRankingRewards = function () {
    var __s12local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DONATION);
    return __dep_export_CastleModel.CastleModel.leaderboardRewardsData.getRewardListForDialogList(__s12local0.eventId, __s12local0.leaderBoardRewardSetID);
  };
  Object.defineProperty(DonationEventDialogRanking.prototype, "highscoreID", {
    get: function () {
      return __dep_exact_26a421b704832cff.HighscoreConst.DONATION_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventDialogRanking;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.DonationEventDialogRanking = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
