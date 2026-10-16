Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function TempServerRankRangeVO() {
    this.minRank = 0;
    this.maxRank = 0;
    this.rankPoints = 0;
  }
  TempServerRankRangeVO.prototype.parseXML = function (__s5param0) {
    this.minRank = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minRank", __s5param0, "0"));
    this.maxRank = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxRank", __s5param0, "0"));
    this.rankPoints = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rankPoints", __s5param0, "0"));
  };
  return TempServerRankRangeVO;
}();
exports.TempServerRankRangeVO = __s0local0;
