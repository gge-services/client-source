Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function OfficersSchoolUnitPairVO() {
    this.id = 0;
    this.wodIDs = [];
    this.unlockBuildingWodID = 0;
  }
  OfficersSchoolUnitPairVO.prototype.parseXml = function (__s5param0) {
    this.id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    for (var __s5local0 = 0, __s5local1 = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("wodID", __s5param0).split("+"); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      this.wodIDs.push(parseInt(__s5local2));
    }
    this.unlockBuildingWodID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("unlockBuildingWodID", __s5param0, -1));
  };
  return OfficersSchoolUnitPairVO;
}();
exports.OfficersSchoolUnitPairVO = __s0local0;
