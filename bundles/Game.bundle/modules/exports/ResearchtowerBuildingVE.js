Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ResearchBuildingVE = require("gge-module:export_ResearchBuildingVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ResearchtowerBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResearchtowerBuildingVE, __s1param0);
  ResearchtowerBuildingVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.statusIcons.setNewOffset(new __s0local0(-50, -60));
  };
  Object.defineProperty(ResearchtowerBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Research;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ResearchBuildingVE.ResearchBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return ResearchtowerBuildingVE;
}(__dep_export_ResearchBuildingVE.ResearchBuildingVE);
exports.ResearchtowerBuildingVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
