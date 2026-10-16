Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AProductionBuildingVE = require("gge-module:export_AProductionBuildingVE");
var __s0local0 = function (__s1param0) {
  function LumbermillBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LumbermillBuildingVE, __s1param0);
  Object.defineProperty(LumbermillBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AProductionBuildingVE.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return LumbermillBuildingVE;
}(__dep_export_AProductionBuildingVE.AProductionBuildingVE);
exports.LumbermillBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
