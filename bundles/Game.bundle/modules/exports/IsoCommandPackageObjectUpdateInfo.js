Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function IsoCommandPackageObjectUpdateInfo(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, null) || this;
    __s3local0._isoData = __s3param0;
    __s3local0._serverObject = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandPackageObjectUpdateInfo, __s1param0);
  IsoCommandPackageObjectUpdateInfo.prototype.createCommandList = function () {
    var __s5local0 = [];
    var __s5local1 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(this.createCopyFromServerObject(), this.isoData);
    if (__s5local1 && __s5local1.objectId >= 0) {
      if (this.doesObjectHasToBeCreated(__s5local1.objectId)) {
        this.vo = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(this.getRealServerObject(), this.isoData);
        __s5local0.push(new __dep_export_IsoCommandObjectAddModel.IsoCommandObjectAddModel(this.vo.isoData, this.vo, true), new __dep_export_IsoCommandObjectUpdateConstructionItems.IsoCommandObjectUpdateConstructionItems(this.vo.isoData, this.vo));
        if (this.vo.objectType.groupType.needsAdvancedUpdates) {
          __s5local0.push(new __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated(this.vo.isoData));
        }
        __s5local0.push(new __dep_export_IsoCommandObjectAddView.IsoCommandObjectAddView(this.vo), new __dep_export_IsoCommandZSortAll.IsoCommandZSortAll());
      } else {
        __s5local0.push(new __dep_export_IsoCommandObjectUpdateInfoModel.IsoCommandObjectUpdateInfoModel(__s5local1.isoData, __s5local1.objectId, this.getRealServerObject()), new __dep_export_IsoCommandObjectUpdateConstructionItems.IsoCommandObjectUpdateConstructionItems(__s5local1.isoData, __s5local1));
        if (__s5local1.objectType.groupType.needsAdvancedUpdates) {
          __s5local0.push(new __dep_export_IsoCommandAreaDataUpdated.IsoCommandAreaDataUpdated(__s5local1.isoData));
        }
        __s5local0.push(new __dep_export_IsoCommandObjectUpdateByIdView.IsoCommandObjectUpdateByIdView(__s5local1.objectId, this.wasFastCompleted), new __dep_export_IsoCommandZSortAll.IsoCommandZSortAll());
      }
    } else {
      __dep_exact_9e901e8e2483a22f.debug("--- The given serverObject is invalid.");
    }
    return __s5local0;
  };
  IsoCommandPackageObjectUpdateInfo.prototype.doesObjectHasToBeCreated = function (__s13param0) {
    for (var __s13local0 = 0, __s13local1 = Array.from(this.isoData.objects.groups.values()); __s13local0 < __s13local1.length; __s13local0++) {
      var __s13local2 = __s13local1[__s13local0];
      if (__s13local2 !== undefined && __s13local2.containsObjectById(__s13param0)) {
        return false;
      }
    }
    return true;
  };
  IsoCommandPackageObjectUpdateInfo.prototype.createCopyFromServerObject = function () {
    var __s18local0 = [];
    for (var __s18local1 = this.getRealServerObject(), __s18local2 = 0; __s18local2 < __s18local1.length; ++__s18local2) {
      __s18local0[__s18local2] = __s18local1[__s18local2];
    }
    return __s18local0;
  };
  IsoCommandPackageObjectUpdateInfo.prototype.getRealServerObject = function () {
    if (this.serverObject.O) {
      return this.serverObject.O;
    } else {
      return this.serverObject;
    }
  };
  Object.defineProperty(IsoCommandPackageObjectUpdateInfo.prototype, "wasFastCompleted", {
    get: function () {
      return !!this.serverObject && this.serverObject.F == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageObjectUpdateInfo.prototype, "serverObject", {
    get: function () {
      return this._serverObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageObjectUpdateInfo.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageObjectUpdateInfo;
}(require("gge-module:export_AIsoCommandPackageObject").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectUpdateInfo = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_IsoCommandObjectAddModel = require("gge-module:export_IsoCommandObjectAddModel");
var __dep_export_IsoCommandObjectAddView = require("gge-module:export_IsoCommandObjectAddView");
var __dep_export_IsoCommandObjectUpdateByIdView = require("gge-module:export_IsoCommandObjectUpdateByIdView");
var __dep_export_IsoCommandObjectUpdateConstructionItems = require("gge-module:export_IsoCommandObjectUpdateConstructionItems");
var __dep_export_IsoCommandObjectUpdateInfoModel = require("gge-module:export_IsoCommandObjectUpdateInfoModel");
var __dep_export_IsoCommandAreaDataUpdated = require("gge-module:export_IsoCommandAreaDataUpdated");
var __dep_export_IsoCommandZSortAll = require("gge-module:export_IsoCommandZSortAll");
