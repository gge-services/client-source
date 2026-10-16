Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupFixedPosition() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupFixedPosition, __s1param0);
  IsoDataObjectGroupFixedPosition.prototype.initObjects = function () {
    this.checkAndCreateWishWell();
    if (this.list != null) {
      for (var __s5local0 = 0, __s5local1 = this.list; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.updateData();
        }
      }
    }
  };
  IsoDataObjectGroupFixedPosition.prototype.updateObjectByServer = function (__s11param0, __s11param1) {
    if (this.list != null) {
      for (var __s11local0 = 0, __s11local1 = this.list; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.objectId == __s11param0) {
          __dep_export_IsoHelper.IsoHelper.data.updateIsoObjectByServer(__s11local2, __s11param1);
          var __s11local3 = __s11local2;
          switch (__s11local3.buildingState) {
            case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
            case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_COMPLETED:
              this.isoData.updater.removeObjectByObjectId(__s11local3.objectId);
          }
          return __s11local2;
        }
      }
    }
    return null;
  };
  IsoDataObjectGroupFixedPosition.prototype.checkAndCreateWishWell = function () {
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.isMyHomeCastle) {
      var __s18local0;
      for (var __s18local1 = __dep_exact_f855840627e6e145.int(this.list.length - 1); __s18local1 >= 0; __s18local1--) {
        var __s18local2 = this.list[__s18local1];
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s18local2, "RubyWishingWellFixedPositionBuildingVO") && (__s18local0 = __s18local2)) {
          __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectRemoveByVO.IsoCommandPackageObjectRemoveByVO(__s18local0));
        }
      }
      if (this.canHaveWishWell()) {
        var __s18local3 = __dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__dep_export_CastleModel.CastleModel.rubyWishingWellData.getCurrentWodId(), this.isoData, true);
        __dep_export_Iso.Iso.controller.processor.executePackage(new __dep_export_IsoCommandPackageObjectAdd.IsoCommandPackageObjectAdd(__s18local3));
      }
    }
  };
  IsoDataObjectGroupFixedPosition.prototype.parseGCA = function (__s25param0) {
    var __s25local0 = __s25param0.FP;
    if (__s25local0 && (this.resetList(), __s25local0 != null)) {
      for (var __s25local1 = 0, __s25local2 = __s25local0; __s25local1 < __s25local2.length; __s25local1++) {
        var __s25local3 = __s25local2[__s25local1];
        if (__s25local3 !== undefined) {
          this.list.push(__dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByServer(__s25local3, this.isoData));
        }
      }
    }
  };
  IsoDataObjectGroupFixedPosition.prototype.canHaveWishWell = function () {
    return this.isoData.areaData.isMyHomeCastle && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff.WishingWellConst.MIN_REQUIRED_PLAYER_LEVEL && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer;
  };
  return IsoDataObjectGroupFixedPosition;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupFixedPosition = __s0local0;
var __dep_export_IsoCommandPackageObjectAdd = require("gge-module:export_IsoCommandPackageObjectAdd");
var __dep_export_IsoCommandPackageObjectRemoveByVO = require("gge-module:export_IsoCommandPackageObjectRemoveByVO");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
