Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AUnitProductionBuildingVE = require("gge-module:export_AUnitProductionBuildingVE");
var __s0local0 = function (__s1param0) {
  function DworkshopBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DworkshopBuildingVE, __s1param0);
  DworkshopBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE);
      } else if (this.buildingVO && this.buildingVO.buildingState && !this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  Object.defineProperty(DworkshopBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_DWorkshop;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVE.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return DworkshopBuildingVE;
}(__dep_export_AUnitProductionBuildingVE.AUnitProductionBuildingVE);
exports.DworkshopBuildingVE = __s0local0;
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
