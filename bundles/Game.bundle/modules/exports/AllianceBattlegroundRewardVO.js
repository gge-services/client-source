Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_RankingRewardVO = require("gge-module:export_RankingRewardVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AllianceBattlegroundRewardVO() {
    this.id = 0;
    this.rewardSetID = 0;
  }
  AllianceBattlegroundRewardVO.prototype.parseXML = function (__s5param0) {
    this.id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceBattleGroundRankRewardID", __s5param0, "0"));
    var __s5local0 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardID", __s5param0, "0"));
    var __s5local1 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("participationPoints", __s5param0, "0"));
    this.rewardSetID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardSetID", __s5param0, "0"));
    if (__s5local1 > 0) {
      this.rankReward = new __dep_export_RankingRewardVO.RankingRewardVO(__dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5local0.toString()), __s5local1, true);
    }
    var __s5local2 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rank", __s5param0, "0"));
    if (__s5local2 > 0) {
      this.rankReward = new __dep_export_RankingRewardVO.RankingRewardVO(__dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s5local0.toString()), __s5local2, false);
    }
  };
  AllianceBattlegroundRewardVO.prototype.getId = function () {
    return this.id;
  };
  return AllianceBattlegroundRewardVO;
}();
exports.AllianceBattlegroundRewardVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICastleXmlNode");
