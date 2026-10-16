Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectRemoveModel(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._vo = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectRemoveModel, __s1param0);
  IsoCommandObjectRemoveModel.prototype.execute = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(this._vo.objectId);
    var __s5local1 = this.isoData.objects.getGroupByType(this._vo.objectType.groupType);
    if (__s5local1 && __s5local1.containsObject(this._vo)) {
      __s5local1.removeObject(this._vo);
      this.isoData.objects.completeTempObjectList.splice(this.isoData.objects.completeTempObjectList.indexOf(this._vo), 1);
      this.removeFromGrid(__s5local1.groupType);
      __dep_export_CastleModel.CastleModel.userData.removeGlobalConstructionItemEffect(__s5local0);
      __dep_export_CastleModel.CastleModel.userData.removeGlobalConstructionItemBonus(__s5local0);
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_REMOVED, [__s5local0]));
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_CHANGED, [null]));
    }
  };
  IsoCommandObjectRemoveModel.prototype.removeFromGrid = function (__s8param0) {
    switch (__s8param0) {
      case __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS:
        this.isoData.grid.removeBuildingById(this._vo.objectId);
    }
  };
  return IsoCommandObjectRemoveModel;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectRemoveModel = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
