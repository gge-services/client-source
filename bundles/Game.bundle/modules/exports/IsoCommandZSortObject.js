Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __s0local0 = function (__s1param0) {
  function IsoCommandZSortObject(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isoObject = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandZSortObject, __s1param0);
  IsoCommandZSortObject.prototype.execute = function () {
    var __s5local0;
    if (this.isoObject) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.isoObject, "AIsoObjectVE")) {
        __s5local0 = this.isoObject;
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.isoObject, "AIsoObjectVO")) {
        __s5local0 = this.isoRenderer.objects.provider.getObjectByVO(this.isoObject);
      }
      if (__s5local0) {
        __dep_export_IsoHelper.IsoHelper.zSort.sortObject(__s5local0, this.isoRenderer.objects.isoLayerObjects, this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS));
      }
    }
  };
  Object.defineProperty(IsoCommandZSortObject.prototype, "isoObject", {
    get: function () {
      return this._isoObject;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandZSortObject;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandZSortObject = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
