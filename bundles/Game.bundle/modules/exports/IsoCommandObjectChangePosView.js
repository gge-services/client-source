Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectChangePosView(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._vo = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectChangePosView, __s1param0);
  IsoCommandObjectChangePosView.prototype.execute = function () {
    var __s5local0 = this.isoRenderer.objects.provider.getObjectByVO(this._vo);
    if (__s5local0) {
      __s5local0.updatePosition();
    }
  };
  return IsoCommandObjectChangePosView;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandObjectChangePosView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
