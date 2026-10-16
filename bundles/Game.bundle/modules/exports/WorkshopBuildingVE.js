Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AUnitProductionBuildingVE = require("gge-module:export_AUnitProductionBuildingVE");
var __s0local0 = function (__s1param0) {
  function WorkshopBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorkshopBuildingVE, __s1param0);
  WorkshopBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE);
      } else if (!this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  Object.defineProperty(WorkshopBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Workshop;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AUnitProductionBuildingVE.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  return WorkshopBuildingVE;
}(__dep_export_AUnitProductionBuildingVE.AUnitProductionBuildingVE);
exports.WorkshopBuildingVE = __s0local0;
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
