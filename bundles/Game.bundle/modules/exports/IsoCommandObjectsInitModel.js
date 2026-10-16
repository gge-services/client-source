Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectsInitModel(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._objectsType = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectsInitModel, __s1param0);
  IsoCommandObjectsInitModel.prototype.execute = function () {
    var __s5local0 = this.isoData.objects.getGroupByType(this._objectsType);
    if (__s5local0) {
      __s5local0.initObjects();
      this.isoData.objects.invalidateCompleteObjectsList();
    }
  };
  return IsoCommandObjectsInitModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectsInitModel = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
