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
  function CastleAllianceBattlegroundEventDialogRankingAlliance(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundEventDialogRankingAlliance, __s1param0);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingAlliance.prototype, "highscoreID", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isAllianceCollectorScoring) {
        return __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_ALLIANCE_COLLECTOR;
      } else {
        return __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_BATTLE_GROUND_ALLIANCE_TOWER;
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogRanking.CastleAllianceBattlegroundEventDialogRanking.prototype, "highscoreID").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingAlliance.prototype, "listItemClass", {
    get: function () {
      return __dep_export_CastleAllianceBattlegroundEventDialogRankingAllianceListItem.CastleAllianceBattlegroundEventDialogRankingAllianceListItem;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceBattlegroundEventDialogRanking.CastleAllianceBattlegroundEventDialogRanking.prototype, "listItemClass").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRankingAlliance.prototype.show = function (__s15param0) {
    this.dialogDisp_0.btn_alliance.gotoAndStop(1);
    this.dialogDisp_0.btn_player.gotoAndStop(2);
    __s1param0.prototype.show.call(this, __s15param0);
    this.dialogDisp_0.mc_rank.toolTipText = "rank";
    this.dialogDisp_0.mc_member.toolTipText = "dialog_alliance_member";
    this.dialogDisp_0.icon_discovery_points_ML.toolTipText = "currency_name_AllianceInfluence";
    this.dialogDisp_0.icon_discovery_points_ML.visible = __dep_export_ABGHelper.ABGHelper.isAllianceCollectorScoring;
    this.dialogDisp_0.mc_alliTowerPoints.toolTipText = "currency_name_AllianceStatuette";
    this.dialogDisp_0.mc_alliTowerPoints.visible = __dep_export_ABGHelper.ABGHelper.isAllianceTowerScoring;
    this.textFieldManager.registerTextField(this.dialogDisp_0.txt_alliance_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    this.textFieldManager.registerTextField(this.dialogDisp_0.btn_findme.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myRank")));
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingAlliance.prototype, "dialogDisp_0", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogRankingAlliance;
}(__dep_export_CastleAllianceBattlegroundEventDialogRanking.CastleAllianceBattlegroundEventDialogRanking);
exports.CastleAllianceBattlegroundEventDialogRankingAlliance = __s0local0;
var __dep_export_CastleAllianceBattlegroundEventDialogRankingAllianceListItem = require("gge-module:export_CastleAllianceBattlegroundEventDialogRankingAllianceListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
