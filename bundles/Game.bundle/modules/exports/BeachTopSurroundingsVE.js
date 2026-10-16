Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ABeachSurroundingsVE = require("gge-module:export_ABeachSurroundingsVE");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __s0local0 = function (__s1param0) {
  function BeachTopSurroundingsVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BeachTopSurroundingsVE, __s1param0);
  BeachTopSurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    this.disp.scaleY = -1;
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
  };
  BeachTopSurroundingsVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.STATIC_SURROUNDINGS;
  };
  return BeachTopSurroundingsVE;
}(__dep_export_ABeachSurroundingsVE.ABeachSurroundingsVE);
exports.BeachTopSurroundingsVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
