Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function StorehouseBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StorehouseBuildingVE, __s1param0);
  Object.defineProperty(StorehouseBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Storage;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  StorehouseBuildingVE.prototype.getRingMenuButtons = function () {
    var __s9local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s9local0.push(new __dep_export_RingMenuButtonOverview.RingMenuButtonOverview());
    return __s9local0;
  };
  return StorehouseBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.StorehouseBuildingVE = __s0local0;
var __dep_export_RingMenuButtonOverview = require("gge-module:export_RingMenuButtonOverview");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
