Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function FortuneTellerClassVO() {
    this.c2Cost = 0;
    this.id = 0;
    this.topRewardID = 0;
  }
  FortuneTellerClassVO.prototype.parseXML = function (__s5param0) {
    this.id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("fortuneTellerClassID", __s5param0, "0"));
    this.rewardIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s5param0, ",");
    this.c2Cost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2Cost", __s5param0, "0"));
    this.topRewardID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("toprewardID", __s5param0, "0"));
  };
  return FortuneTellerClassVO;
}();
exports.FortuneTellerClassVO = __s0local0;
