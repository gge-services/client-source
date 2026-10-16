Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleAllianceBattlegroundEventDialogRanking = require("gge-module:export_CastleAllianceBattlegroundEventDialogRanking");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundEventDialogRankingPlayer(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogRankingPlayer, __s1param0);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayer.prototype, "highscoreID", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isAllianceCollectorScoring) {
        return __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_PLAYER_COLLECTOR;
      } else {
        return __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_PLAYER_TOWER;
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogRanking.CastleAllianceBattlegroundEventDialogRanking.prototype, "highscoreID").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayer.prototype, "listItemClass", {
    get: function () {
      return __dep_export_CastleAllianceBattlegroundEventDialogRankingPlayerListItem.CastleAllianceBattlegroundEventDialogRankingPlayerListItem;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogRanking.CastleAllianceBattlegroundEventDialogRanking.prototype, "listItemClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRankingPlayer.prototype.show = function (__s15param0) {
    this.dialogDisp_0.btn_alliance.gotoAndStop(2);
    this.dialogDisp_0.btn_player.gotoAndStop(1);
    __s1param0.prototype.show.call(this, __s15param0);
    this.dialogDisp_0.mc_rank.toolTipText = "rank";
    this.dialogDisp_0.mc_level.toolTipText = "level";
    this.dialogDisp_0.mc_points.toolTipText = "stats_contributeAllianceInfluence";
    this.dialogDisp_0.mc_points.visible = __dep_export_ABGHelper.ABGHelper.isAllianceCollectorScoring;
    this.dialogDisp_0.mc_alliTowerPoints.toolTipText = "stats_contributeAllianceStatuette";
    this.dialogDisp_0.mc_alliTowerPoints.visible = __dep_export_ABGHelper.ABGHelper.isAllianceTowerScoring;
    this.textFieldManager.registerTextField(this.dialogDisp_0.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("generic_playerName")));
    this.textFieldManager.registerTextField(this.dialogDisp_0.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    this.textFieldManager.registerTextField(this.dialogDisp_0.btn_findme.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_findMe_button")));
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayer.prototype, "dialogDisp_0", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogRankingPlayer;
}(__dep_export_CastleAllianceBattlegroundEventDialogRanking.CastleAllianceBattlegroundEventDialogRanking);
exports.CastleAllianceBattlegroundEventDialogRankingPlayer = __s0local0;
var __dep_export_CastleAllianceBattlegroundEventDialogRankingPlayerListItem = require("gge-module:export_CastleAllianceBattlegroundEventDialogRankingPlayerListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
