Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleLaboratoryEffectHelper() {}
  CastleLaboratoryEffectHelper.laboratoryResourceBonus = function (__s5param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.landmarksList.getLaboratoryKingdomResourceBonus(__s5param0));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.laboratoryList.getLandmarkBonus(__s5param0));
    }
  };
  return CastleLaboratoryEffectHelper;
}();
exports.CastleLaboratoryEffectHelper = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
