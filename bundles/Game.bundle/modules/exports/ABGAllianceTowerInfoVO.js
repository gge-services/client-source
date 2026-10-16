Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function ABGAllianceTowerInfoVO() {
    this.allianceTowerID = 0;
    this.countVictory = 0;
    this.level = 0;
    this.lordID = 0;
    this.unitCapacity = 0;
    this.defeatedPVPBasePoints = 0;
    this.allianceTowerLevelMultiplier = 0;
    this.addStatuette = 0;
  }
  ABGAllianceTowerInfoVO.prototype.parseXML = function (__s5param0) {
    this.allianceTowerID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceTowerID", __s5param0, "0"));
    this.countVictory = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("countVictory", __s5param0, "0"));
    this.level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "0"));
    this.lordID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("lordID", __s5param0, "0"));
    this.unitCapacity = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("unitCapacity", __s5param0, "0"));
    this.defeatedPVPBasePoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defeatedPVPBasePoints", __s5param0, "0"));
    this.allianceTowerLevelMultiplier = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("allianceTowerLevelMultiplier", __s5param0, "0"));
    this.addStatuette = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("addStatuette", __s5param0, "0"));
  };
  return ABGAllianceTowerInfoVO;
}();
exports.ABGAllianceTowerInfoVO = __s0local0;
