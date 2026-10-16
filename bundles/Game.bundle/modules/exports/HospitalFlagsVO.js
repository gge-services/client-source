Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function HospitalFlagsVO() {
    this.kingdomID = 0;
    this.areaID = 0;
    this.hasRubyFilter = 0;
  }
  HospitalFlagsVO.prototype.parse_HFL = function (__s5param0) {
    this.kingdomID = __s5param0.KID;
    this.areaID = __s5param0.AID;
    this.hasRubyFilter = __s5param0.HRF;
  };
  HospitalFlagsVO.prototype.isCurrentCastle = function () {
    return __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID == this.kingdomID && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId == this.areaID;
  };
  return HospitalFlagsVO;
}();
exports.HospitalFlagsVO = __s0local0;
