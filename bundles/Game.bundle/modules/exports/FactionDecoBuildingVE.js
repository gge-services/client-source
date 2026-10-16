Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AFactionBuildingVE = require("gge-module:export_AFactionBuildingVE");
var __s0local0 = function (__s1param0) {
  function FactionDecoBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionDecoBuildingVE, __s1param0);
  Object.defineProperty(FactionDecoBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AFactionBuildingVE.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return FactionDecoBuildingVE;
}(__dep_export_AFactionBuildingVE.AFactionBuildingVE);
exports.FactionDecoBuildingVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
