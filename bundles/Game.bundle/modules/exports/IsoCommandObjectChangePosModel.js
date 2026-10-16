Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectChangePosModel(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._vo = __s3param1;
    __s3local0._newPos = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectChangePosModel, __s1param0);
  IsoCommandObjectChangePosModel.prototype.execute = function () {
    if (this._vo) {
      this._vo.x = this._newPos.x;
      this._vo.y = this._newPos.y;
      this._vo.updateData();
      this.isoData.grid.updateBuildingPos(this._vo);
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_POS_CHANGED, [this._vo]));
    }
  };
  return IsoCommandObjectChangePosModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectChangePosModel = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
