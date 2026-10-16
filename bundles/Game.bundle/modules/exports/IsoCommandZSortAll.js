Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __s0local0 = function (__s1param0) {
  function IsoCommandZSortAll() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandZSortAll, __s1param0);
  IsoCommandZSortAll.prototype.execute = function () {
    __dep_export_IsoHelper.IsoHelper.zSort.sortObjects(this.isoRenderer.objects.isoLayerObjects, this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS));
  };
  return IsoCommandZSortAll;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandZSortAll = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
