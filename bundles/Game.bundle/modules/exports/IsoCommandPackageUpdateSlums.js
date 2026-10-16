Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageUpdateSlums(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isoData = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageUpdateSlums, __s1param0);
  IsoCommandPackageUpdateSlums.prototype.createCommandList = function () {
    var __s5local0 = [];
    for (var __s5local1 = 0, __s5local2 = this.isoData.objects.surroundings.list; __s5local1 < __s5local2.length; __s5local1++) {
      var __s5local3 = __s5local2[__s5local1];
      if (__s5local3 !== undefined) {
        var __s5local4 = __dep_exact_81dacdf05bd32292.castAs(__s5local3, "ASlumBuildingPartVO");
        if (__s5local4) {
          __s5local0.push(new __dep_export_IsoCommandObjectUpdateModel.IsoCommandObjectUpdateModel(__s5local3.isoData, __s5local4), new __dep_export_IsoCommandObjectUpdateView.IsoCommandObjectUpdateView(__s5local4));
        }
      }
    }
    return __s5local0;
  };
  Object.defineProperty(IsoCommandPackageUpdateSlums.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageUpdateSlums;
}(require("gge-module:export_AIsoCommandPackage").AIsoCommandPackage);
exports.IsoCommandPackageUpdateSlums = __s0local0;
var __dep_export_IsoCommandObjectUpdateModel = require("gge-module:export_IsoCommandObjectUpdateModel");
var __dep_export_IsoCommandObjectUpdateView = require("gge-module:export_IsoCommandObjectUpdateView");
