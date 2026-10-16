Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function OakOfWisdomBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OakOfWisdomBuildingVE, __s1param0);
  OakOfWisdomBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  OakOfWisdomBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(OakOfWisdomBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return __dep_export_OakOfWisdomBuildingVO.OakOfWisdomBuildingVO.xpBoosterIconClass;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  OakOfWisdomBuildingVE.prototype.onLevelUp = function (__s13param0) {
    if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
      this.updateDisp();
    }
  };
  return OakOfWisdomBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.OakOfWisdomBuildingVE = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_OakOfWisdomBuildingVO = require("gge-module:export_OakOfWisdomBuildingVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
