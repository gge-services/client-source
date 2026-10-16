Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectChangePos(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._newPos = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectChangePos, __s1param0);
  IsoCommandPackageObjectChangePos.prototype.createCommandList = function () {
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectChangePosModel.IsoCommandObjectChangePosModel(this.vo.isoData, this.vo, this.newPos), new __dep_export_IsoCommandObjectChangePosView.IsoCommandObjectChangePosView(this.vo), new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(this.vo));
    return __s5local0;
  };
  Object.defineProperty(IsoCommandPackageObjectChangePos.prototype, "newPos", {
    get: function () {
      return this._newPos;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageObjectChangePos;
}(require("gge-module:export_AIsoCommandPackageObject").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectChangePos = __s0local0;
var __dep_export_IsoCommandObjectChangePosModel = require("gge-module:export_IsoCommandObjectChangePosModel");
var __dep_export_IsoCommandObjectChangePosView = require("gge-module:export_IsoCommandObjectChangePosView");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
