Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function IsoStatusIconProgressBarBuilding() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoStatusIconProgressBarBuilding, __s1param0);
  IsoStatusIconProgressBarBuilding.prototype.getDispFrame = function () {
    var __s5local0 = 1;
    switch (this.buildingVE.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        __s5local0 = 1;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        __s5local0 = 2;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        __s5local0 = 3;
        break;
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        __s5local0 = 4;
    }
    return __s5local0;
  };
  IsoStatusIconProgressBarBuilding.prototype.getBarText = function () {
    return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(this.buildingVE.buildingVO.getTimeLeftForBuilding());
  };
  IsoStatusIconProgressBarBuilding.prototype.getBarFillFactor = function () {
    return this.buildingVE.buildingVO.getPercentCompletedForBuilding();
  };
  Object.defineProperty(IsoStatusIconProgressBarBuilding.prototype, "buildingVE", {
    get: function () {
      return this.ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconProgressBarBuilding;
}(require("gge-module:export_AIsoStatusIconProgressBar").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarBuilding = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
