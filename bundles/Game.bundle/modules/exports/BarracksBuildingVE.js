Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_AUnitProductionBuildingVE = require("gge-module:export_AUnitProductionBuildingVE");
var __s0local0 = function (__s1param0) {
  function BarracksBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BarracksBuildingVE, __s1param0);
  BarracksBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE_FESTIVAL : __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE);
      } else if (!this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE_FESTIVAL : __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  BarracksBuildingVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    if (this.buildingVO.level > 3) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.BARRACK_FIRE, 12, 0.25);
    }
  };
  Object.defineProperty(BarracksBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Recruit;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVE.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return BarracksBuildingVE;
}(__dep_export_AUnitProductionBuildingVE.AUnitProductionBuildingVE);
exports.BarracksBuildingVE = __s0local0;
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
