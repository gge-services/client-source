Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectRemoveById(__s3param0, __s3param1 = -1) {
    var __s3local0 = this;
    __s3local0._objectId = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, null) || this)._isoData = __s3param0;
    __s3local0._objectId = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectRemoveById, __s1param0);
  IsoCommandPackageObjectRemoveById.prototype.createCommandList = function () {
    this.vo = this.isoData.objects.provider.getObjectById(this.objectId);
    if (!this.vo) {
      return null;
    }
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectRemoveModel.IsoCommandObjectRemoveModel(this.isoData, this.vo));
    if (this.vo.objectType.groupType.needsAdvancedUpdates) {
      __s5local0.push(new __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated(this.isoData));
    }
    __s5local0.push(new __dep_export_IsoCommandObjectRemoveView.IsoCommandObjectRemoveView(this.vo));
    return __s5local0;
  };
  Object.defineProperty(IsoCommandPackageObjectRemoveById.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageObjectRemoveById.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageObjectRemoveById;
}(require("gge-module:export_AIsoCommandPackageObject").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectRemoveById = __s0local0;
var __dep_export_IsoCommandObjectRemoveModel = require("gge-module:export_IsoCommandObjectRemoveModel");
var __dep_export_IsoCommandObjectRemoveView = require("gge-module:export_IsoCommandObjectRemoveView");
var __dep_export_IsoCommandAreaDataUpdated = require("gge-module:export_IsoCommandAreaDataUpdated");
