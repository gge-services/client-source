Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectRemoveByVO(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectRemoveByVO, __s1param0);
  IsoCommandPackageObjectRemoveByVO.prototype.createCommandList = function () {
    if (!this.vo) {
      return null;
    }
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectRemoveModel.IsoCommandObjectRemoveModel(this.vo.isoData, this.vo));
    if (this.vo.objectType.groupType.needsAdvancedUpdates) {
      __s5local0.push(new __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated(this.vo.isoData));
    }
    __s5local0.push(new __dep_export_IsoCommandObjectRemoveView.IsoCommandObjectRemoveView(this.vo));
    return __s5local0;
  };
  return IsoCommandPackageObjectRemoveByVO;
}(require("gge-module:export_AIsoCommandPackageObject").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectRemoveByVO = __s0local0;
var __dep_export_IsoCommandObjectRemoveModel = require("gge-module:export_IsoCommandObjectRemoveModel");
var __dep_export_IsoCommandObjectRemoveView = require("gge-module:export_IsoCommandObjectRemoveView");
var __dep_export_IsoCommandAreaDataUpdated = require("gge-module:export_IsoCommandAreaDataUpdated");
