Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectsTriggerUpdateModel(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._objectsType = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectsTriggerUpdateModel, __s1param0);
  IsoCommandObjectsTriggerUpdateModel.prototype.execute = function () {
    var __s5local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    for (var __s5local1 = 0, __s5local2 = this.isoData.objects.provider.getObjectsByListType(this._objectsType); __s5local1 < __s5local2.length; __s5local1++) {
      __s5local2[__s5local1].update(__s5local0);
    }
  };
  return IsoCommandObjectsTriggerUpdateModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectsTriggerUpdateModel = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
