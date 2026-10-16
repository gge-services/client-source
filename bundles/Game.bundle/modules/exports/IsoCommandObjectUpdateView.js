Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectUpdateView(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._vo = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectUpdateView, __s1param0);
  IsoCommandObjectUpdateView.prototype.execute = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._vo, "CastlewallDefenceVO")) {
      this.viewObjects.defenceObjects.updateWalls();
      this.viewObjects.defenceObjects.updateTowers();
    } else {
      var __s5local0 = this.isoRenderer.objects.provider.getObjectByVO(this._vo);
      if (__s5local0) {
        __s5local0.updateDisp();
      }
    }
  };
  return IsoCommandObjectUpdateView;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandObjectUpdateView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
