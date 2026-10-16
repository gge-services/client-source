Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function LandmarkVO() {
    this.landmarkID = 0;
    this.emptyMinConquerLevel = 0;
    this.minDefenseLevel = 0;
    this.defaultLevel = 0;
    this.isDefault = false;
    this.preBuiltCastleID = 0;
  }
  LandmarkVO.prototype.parseXML = function (__s5param0) {
    this.landmarkID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("landmarkID", __s5param0, "0"));
    this.emptyMinConquerLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("emptyMinConquerLevel", __s5param0, "0"));
    this.minDefenseLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("minDefenseLevel", __s5param0, "0"));
    this.defaultLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("defaultLevel", __s5param0, "0"));
    this.isDefault = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("isDefault", __s5param0, "0")) == 1;
    this.preBuiltCastleID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("preBuiltCastleID", __s5param0, "0"));
  };
  return LandmarkVO;
}();
exports.LandmarkVO = __s0local0;
