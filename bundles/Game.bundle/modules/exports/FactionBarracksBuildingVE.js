Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_UnitPackageListEvent = require("gge-module:export_UnitPackageListEvent");
var __dep_export_AFactionBuildingVE = require("gge-module:export_AFactionBuildingVE");
var __s0local0 = function (__s1param0) {
  function FactionBarracksBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionBarracksBuildingVE, __s1param0);
  FactionBarracksBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_UnitPackageListEvent.UnitPackageListEvent.PACKAGE_UPDATE, this.bindFunction(this.onPackageUpdate));
  };
  FactionBarracksBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_UnitPackageListEvent.UnitPackageListEvent.PACKAGE_UPDATE, this.bindFunction(this.onPackageUpdate));
    __s1param0.prototype.removeEventListener.call(this);
  };
  FactionBarracksBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE_FESTIVAL : __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE);
      } else if (!this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE_FESTIVAL : __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  FactionBarracksBuildingVE.prototype.getRingMenuButtons = function () {
    var __s14local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s14local0.push(new __dep_export_RingMenuButtonFactionBarracks.RingMenuButtonFactionBarracks());
    return __s14local0;
  };
  Object.defineProperty(FactionBarracksBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Recruit;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFactionBuildingVE.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionBarracksBuildingVE.prototype.onPackageUpdate = function (__s20param0) {
    this.updateStatusIcon();
  };
  Object.defineProperty(FactionBarracksBuildingVE.prototype, "unitProductionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return FactionBarracksBuildingVE;
}(__dep_export_AFactionBuildingVE.AFactionBuildingVE);
exports.FactionBarracksBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_RingMenuButtonFactionBarracks = require("gge-module:export_RingMenuButtonFactionBarracks");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
