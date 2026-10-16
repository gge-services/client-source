Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __s0local0 = function (__s1param0) {
  function MercenarySurroundingsVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._name = "Mercenary";
    __s3local0._width = 4;
    __s3local0._height = 4;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset.x = 11;
    __s3local0._posOffset.y = -29;
    __s3local0._minLevel = __dep_exact_26a421b704832cff.PlayerConst.MERCENARY_EVENT_MIN_LEVEL;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MercenarySurroundingsVO, __s1param0);
  MercenarySurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.mercenaryData.readyMissionsCount);
    if (__dep_export_CastleModel.CastleModel.mercenaryData.activeMission && __dep_export_CastleModel.CastleModel.mercenaryData.currentMissionState == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("countdown_restTime", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__dep_export_CastleModel.CastleModel.mercenaryData.activeMission.remainingTime)]);
    } else if (__s5local0 > 1) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mission_ready_multi", [__s5local0]);
    } else if (__s5local0 > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mission_ready_single");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_mission_ready_time", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.mercenaryData.remainingNextPackageTime)]);
    }
  };
  return MercenarySurroundingsVO;
}(require("gge-module:export_ASurroundingBuildingVO").ASurroundingBuildingVO);
exports.MercenarySurroundingsVO = __s0local0;
var __dep_export_CastleMercenaryData = require("gge-module:export_CastleMercenaryData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRelativeGridBuildingVO");
