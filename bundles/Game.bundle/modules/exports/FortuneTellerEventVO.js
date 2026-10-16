Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function FortuneTellerEventVO() {
    var __s3local0 = this;
    __s3local0.tryCount = 0;
    __s3local0.dailyResetTimestamp = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FortuneTellerEventVO, __s1param0);
  FortuneTellerEventVO.prototype.parseParamObject = function (__s5param0) {
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
    this.tryCount = __dep_exact_f855840627e6e145.int(__s5param0.FTDC);
    this.dailyResetTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0.STR * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
  };
  FortuneTellerEventVO.prototype.secondsTillDailyReset = function () {
    return (this.dailyResetTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
  };
  Object.defineProperty(FortuneTellerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FortuneTellerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FortuneTellerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_FortuneTeller";
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventVO.prototype.openDialog = function (__s17param0 = true) {
    this.executeOpenDialog(__s17param0, __dep_export_FortuneTellerEventDialog.FortuneTellerEventDialog);
  };
  FortuneTellerEventVO.EVENT_BUILDING_WOD = 1921;
  return FortuneTellerEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.FortuneTellerEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
var __dep_export_FortuneTellerEventDialog = require("gge-module:export_FortuneTellerEventDialog");
