Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AllianceBattleGroundScoringVO() {
    this.scoringID = 0;
    this.metropolisDecay = 0;
    this.kingstowerDecay = 0;
    this.playerSteal = 0;
    this.allianceSteal = 0;
  }
  AllianceBattleGroundScoringVO.prototype.parseXML = function (__s5param0) {
    this.scoringID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("scoringID", __s5param0, "0", true));
    this.scoring = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("scoring", __s5param0, "0", true);
    this.metropolisDecay = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("metropolisDecay", __s5param0, "0"));
    this.kingstowerDecay = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("kingstowerDecay", __s5param0, "0"));
    this.playerSteal = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("playerSteal", __s5param0, "0"));
    this.allianceSteal = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceSteal", __s5param0, "0"));
  };
  AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR = "AllianceCollector";
  AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER = "AllianceTower";
  return AllianceBattleGroundScoringVO;
}();
exports.AllianceBattleGroundScoringVO = __s0local0;
