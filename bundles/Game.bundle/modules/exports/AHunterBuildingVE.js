Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function AHunterBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AHunterBuildingVE, __s1param0);
  Object.defineProperty(AHunterBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Hunter;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  AHunterBuildingVE.prototype.getRingMenuButtons = function () {
    var __s9local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s9local0.push(new __dep_export_RingMenuButtonHunter.RingMenuButtonHunter());
    return __s9local0;
  };
  return AHunterBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.AHunterBuildingVE = __s0local0;
var __dep_export_RingMenuButtonHunter = require("gge-module:export_RingMenuButtonHunter");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
