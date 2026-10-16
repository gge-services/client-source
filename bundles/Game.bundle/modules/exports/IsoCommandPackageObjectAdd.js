Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectAdd(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectAdd, __s1param0);
  IsoCommandPackageObjectAdd.prototype.createCommandList = function () {
    if (!this.vo) {
      return null;
    }
    var __s5local0 = [];
    __s5local0.push(new __dep_export_IsoCommandObjectAddModel.IsoCommandObjectAddModel(this.vo.isoData, this.vo));
    if (this.vo.objectType.groupType.needsAdvancedUpdates) {
      __s5local0.push(new __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated(this.vo.isoData));
    }
    __s5local0.push(new __dep_export_IsoCommandObjectAddView.IsoCommandObjectAddView(this.vo), new __dep_export_IsoCommandZSortAll.IsoCommandZSortAll());
    return __s5local0;
  };
  return IsoCommandPackageObjectAdd;
}(require("gge-module:export_AIsoCommandPackageObject").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectAdd = __s0local0;
var __dep_export_IsoCommandObjectAddModel = require("gge-module:export_IsoCommandObjectAddModel");
var __dep_export_IsoCommandObjectAddView = require("gge-module:export_IsoCommandObjectAddView");
var __dep_export_IsoCommandAreaDataUpdated = require("gge-module:export_IsoCommandAreaDataUpdated");
var __dep_export_IsoCommandZSortAll = require("gge-module:export_IsoCommandZSortAll");
