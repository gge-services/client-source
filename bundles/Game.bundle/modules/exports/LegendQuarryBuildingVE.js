Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_QuarryBuildingVE = require("gge-module:export_QuarryBuildingVE");
var __s0local0 = function (__s1param0) {
  function LegendQuarryBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LegendQuarryBuildingVE, __s1param0);
  Object.defineProperty(LegendQuarryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Stone;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_QuarryBuildingVE.QuarryBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return LegendQuarryBuildingVE;
}(__dep_export_QuarryBuildingVE.QuarryBuildingVE);
exports.LegendQuarryBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
