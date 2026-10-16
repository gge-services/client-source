Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastlePackageEvent = require("gge-module:export_CastlePackageEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_EventPackageCategoryFilterRelationVO = require("gge-module:export_EventPackageCategoryFilterRelationVO");
var __s0local0 = function (__s1param0) {
  function CastleEventPackageData() {
    var __s3local0 = this;
    __s3local0._packagePrice = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEventPackageData, __s1param0);
  CastleEventPackageData.prototype.parseXml = function (__s5param0) {
    this._filterRelations = new Map();
    var __s5local0 = __s5param0.packageCategoryFilterRelations;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          var __s5local4 = new __dep_export_EventPackageCategoryFilterRelationVO.EventPackageCategoryFilterRelationVO();
          __s5local4.fillFromParamXML(__s5local3);
          this._filterRelations.set(__s5local4.relationID, __s5local4);
        }
      }
    }
    this._packageVos = new Map();
    var __s5local5 = __s5param0.packages;
    var __s5local6 = [];
    if (__s5local5 != null) {
      for (var __s5local7 = 0, __s5local8 = __s5local5; __s5local7 < __s5local8.length; __s5local7++) {
        var __s5local9;
        var __s5local10 = __s5local8[__s5local7];
        if (__s5local10 !== undefined) {
          (__s5local9 = new __dep_export_EventPackageVO.EventPackageVO()).fillFromParamXML(__s5local10);
          this._packageVos.set(__s5local9.packageID, __s5local9);
          if (__s5local9.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BUNDLE) {
            __s5local6.push([__s5local9, __s5local10]);
          }
        }
      }
    }
    if (__s5local6 != null) {
      for (var __s5local11 = 0, __s5local12 = __s5local6; __s5local11 < __s5local12.length; __s5local11++) {
        var __s5local13 = __s5local12[__s5local11];
        if (__s5local13 !== undefined) {
          __s5local13[0].parseRewards(__s5local13[1]);
        }
      }
    }
  };
  CastleEventPackageData.prototype.getEventPackageByID = function (__s20param0) {
    if (this._packageVos.get(__s20param0)) {
      return this._packageVos.get(__s20param0);
    } else {
      return null;
    }
  };
  CastleEventPackageData.prototype.getPackagePrice = function (__s24param0) {
    this._packagePrice = __dep_exact_f855840627e6e145.int(__s24param0.PKPC);
    this.dispatchEvent(new __dep_export_CastlePackageEvent.CastlePackageEvent(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEPRICE_GOT));
  };
  Object.defineProperty(CastleEventPackageData.prototype, "packagePrice", {
    get: function () {
      return this._packagePrice;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventPackageData.prototype.parseGBC = function (__s28param0) {
    if (this._packageVos != null) {
      for (var __s28local0 = 0, __s28local1 = Array.from(this._packageVos.values()); __s28local0 < __s28local1.length; __s28local0++) {
        __s28local4 = __s28local1[__s28local0];
        if (__s28local4 !== undefined) {
          __s28local4.boughtCount = 0;
        }
      }
    }
    if (__s28param0 != null) {
      for (var __s28local2 = 0, __s28local3 = __s28param0; __s28local2 < __s28local3.length; __s28local2++) {
        var __s28local4;
        var __s28local5 = __s28local4 = __s28local3[__s28local2];
        if (__s28local5 !== undefined) {
          this.parseBoughtCount(__s28local5);
        }
      }
    }
  };
  CastleEventPackageData.prototype.parseBoughtCount = function (__s38param0) {
    var __s38local0 = __dep_exact_f855840627e6e145.int(__s38param0.PID);
    var __s38local1 = this._packageVos.get(__s38local0);
    if (__s38local1 && __s38local1.isStockLimited) {
      var __s38local2 = __dep_exact_f855840627e6e145.int(__s38param0.AMT);
      __s38local1.boughtCount = __s38local2;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastlePackageEvent.CastlePackageEvent(__dep_export_CastlePackageEvent.CastlePackageEvent.PACKAGEINFO_UPDATED));
    }
  };
  CastleEventPackageData.prototype.getFilterRelationByID = function (__s41param0) {
    if (this._filterRelations.get(__s41param0)) {
      return this._filterRelations.get(__s41param0);
    } else {
      return null;
    }
  };
  return CastleEventPackageData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleEventPackageData = __s0local0;
var __dep_export_EventPackageVO = require("gge-module:export_EventPackageVO");
