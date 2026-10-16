Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectUpdateModel(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._vo = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectUpdateModel, __s1param0);
  IsoCommandObjectUpdateModel.prototype.execute = function () {
    if (this._vo) {
      this._vo.updateData();
      this.isoData.grid.updateBuildingPos(this._vo);
    }
  };
  return IsoCommandObjectUpdateModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectUpdateModel = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
