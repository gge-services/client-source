Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectsInit(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isoData = __s3param0;
    __s3local0._objectsType = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectsInit, __s1param0);
  IsoCommandPackageObjectsInit.prototype.createCommandList = function () {
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectsInitModel.IsoCommandObjectsInitModel(this._isoData, this._objectsType));
    if (this._objectsType.needsAdvancedUpdates) {
      __s5local0.push(new __dep_export_IsoCommandGridUpdate.IsoCommandGridUpdate(this._isoData));
    }
    __s5local0.push(new __dep_export_IsoCommandObjectsInitView.IsoCommandObjectsInitView(this._objectsType));
    return __s5local0;
  };
  return IsoCommandPackageObjectsInit;
}(require("gge-module:export_AIsoCommandPackage").AIsoCommandPackage);
exports.IsoCommandPackageObjectsInit = __s0local0;
var __dep_export_IsoCommandObjectsInitModel = require("gge-module:export_IsoCommandObjectsInitModel");
var __dep_export_IsoCommandObjectsInitView = require("gge-module:export_IsoCommandObjectsInitView");
var __dep_export_IsoCommandGridUpdate = require("gge-module:export_IsoCommandGridUpdate");
