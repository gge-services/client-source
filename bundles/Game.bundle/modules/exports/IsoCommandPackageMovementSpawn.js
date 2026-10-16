Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageMovementSpawn(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._movementVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageMovementSpawn, __s1param0);
  IsoCommandPackageMovementSpawn.prototype.createCommandList = function () {
    if (!this.movementVO) {
      return null;
    }
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectAddModel.IsoCommandObjectAddModel(this.movementVO.isoData, this.movementVO), new __dep_export_IsoCommandObjectAddView.IsoCommandObjectAddView(this.movementVO), new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(this.movementVO));
    return __s5local0;
  };
  Object.defineProperty(IsoCommandPackageMovementSpawn.prototype, "movementVO", {
    get: function () {
      return this._movementVO;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageMovementSpawn;
}(require("gge-module:export_AIsoCommandPackage").AIsoCommandPackage);
exports.IsoCommandPackageMovementSpawn = __s0local0;
var __dep_export_IsoCommandObjectAddModel = require("gge-module:export_IsoCommandObjectAddModel");
var __dep_export_IsoCommandObjectAddView = require("gge-module:export_IsoCommandObjectAddView");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
