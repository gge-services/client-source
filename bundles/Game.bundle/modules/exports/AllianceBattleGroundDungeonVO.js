Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AllianceBattleGroundDungeonVO() {
    this.allianceBattleGroundDungeonID = 0;
    this.allianceBattleGroundScoringID = 0;
    this.dungeonlevel = 0;
    this.countVictory = 0;
    this.skipCost = 0;
    this.coolDown = 0;
  }
  AllianceBattleGroundDungeonVO.prototype.parseXML = function (__s5param0) {
    this.allianceBattleGroundDungeonID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceBattleGroundDungeonID", __s5param0, "0", true));
    this.allianceBattleGroundScoringID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceBattleGroundScoringID", __s5param0, "0", true));
    this.dungeonlevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("dungeonlevel", __s5param0, "0", true));
    this.countVictory = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("countVictory", __s5param0, "0", true));
    this.skipCost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("skipCost", __s5param0, "0", true));
    this.coolDown = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("coolDown", __s5param0, "0", true));
    this.wallBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallBonus", __s5param0, "0", true));
    this.gateBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateBonus", __s5param0, "0", true));
  };
  return AllianceBattleGroundDungeonVO;
}();
exports.AllianceBattleGroundDungeonVO = __s0local0;
