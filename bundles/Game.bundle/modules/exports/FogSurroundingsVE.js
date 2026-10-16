Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = function (__s1param0) {
  function FogSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FogSurroundingsVE, __s1param0);
  FogSurroundingsVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
  };
  FogSurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.dispComponent.dispContainer.scaleX = __dep_export_Iso.Iso.renderer.camera.scrollBounds.width / 2 * 1.1;
    this.elementContainer.mouseEnabled = false;
  };
  FogSurroundingsVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.FOG;
  };
  Object.defineProperty(FogSurroundingsVE.prototype, "hasBuildingPlaceHolder", {
    get: function () {
      return false;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "hasBuildingPlaceHolder").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  return FogSurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.FogSurroundingsVE = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
