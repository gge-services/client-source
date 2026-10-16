Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectsTriggerUpdate(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isoData = __s3param0;
    __s3local0._objectsType = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectsTriggerUpdate, __s1param0);
  IsoCommandPackageObjectsTriggerUpdate.prototype.createCommandList = function () {
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectsTriggerUpdateModel.IsoCommandObjectsTriggerUpdateModel(this._isoData, this._objectsType), new __dep_export_IsoCommandObjectsTriggerUpdateView.IsoCommandObjectsTriggerUpdateView(this._objectsType));
    return __s5local0;
  };
  return IsoCommandPackageObjectsTriggerUpdate;
}(require("gge-module:export_AIsoCommandPackage").AIsoCommandPackage);
exports.IsoCommandPackageObjectsTriggerUpdate = __s0local0;
var __dep_export_IsoCommandObjectsTriggerUpdateModel = require("gge-module:export_IsoCommandObjectsTriggerUpdateModel");
var __dep_export_IsoCommandObjectsTriggerUpdateView = require("gge-module:export_IsoCommandObjectsTriggerUpdateView");
