Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function BuyPackagesEventVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.eventOverviewConfig.showRemainingEventDuration = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuyPackagesEventVO, __s1param0);
  BuyPackagesEventVO.prototype.parseEventXmlNode = function (__s5param0) {
    this._xmlPackages = [];
    this.addEventPackages(String(__s5param0.packageIDs || "").split("+"), this._xmlPackages);
    this.mergeNewEventPackages();
    this.sortEventPackages();
  };
  BuyPackagesEventVO.prototype.parseParamObject = function (__s7param0) {
    if (__s7param0.PIDS) {
      this._additionalPackages = [];
      this.addEventPackages(String(__s7param0.PIDS).split(","), this._additionalPackages);
      this.mergeNewEventPackages();
      this.sortEventPackages();
    }
  };
  BuyPackagesEventVO.prototype.mergeNewEventPackages = function () {
    if (this._additionalPackages) {
      this._eventPackages = this._xmlPackages.concat(this._additionalPackages);
    } else {
      this._eventPackages = this._xmlPackages;
    }
  };
  BuyPackagesEventVO.prototype.addEventPackages = function (__s14param0, __s14param1) {
    for (var __s14local0 = 0; __s14local0 < __s14param0.length; __s14local0++) {
      var __s14local1 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(parseInt(__s14param0[__s14local0]));
      if (__s14local1) {
        __s14param1.push(__s14local1);
      }
    }
  };
  BuyPackagesEventVO.prototype.openDialog = function (__s19param0 = true) {
    this.openMerchantDialog(__s19param0, -1);
  };
  BuyPackagesEventVO.prototype.openMerchantDialog = function (__s21param0, __s21param1) {};
  BuyPackagesEventVO.prototype.sortEventPackages = function () {
    this.eventPackages.sort(this.bindFunction(this.sortOrder));
  };
  BuyPackagesEventVO.prototype.containsEventPackage = function (__s25param0) {
    for (var __s25local0 = 0; __s25local0 < this.eventPackages.length; ++__s25local0) {
      if (this.eventPackages[__s25local0].packageID == __s25param0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventPackages", {
    get: function () {
      return this._eventPackages;
    },
    enumerable: true,
    configurable: true
  });
  BuyPackagesEventVO.prototype.getVisiblePackages = function (__s32param0, __s32param1, __s32param2) {
    var __s32local0 = [];
    if (this.eventPackages != null) {
      for (var __s32local1 = 0, __s32local2 = this.eventPackages; __s32local1 < __s32local2.length; __s32local1++) {
        var __s32local3 = __s32local2[__s32local1];
        if (__s32local3 !== undefined) {
          __s32local3.topPackage = false;
          if (__s32local3.isVisible(__s32param0, __s32param1, __s32param2)) {
            __s32local0.push(__s32local3);
          }
        }
      }
    }
    __s32local0.sort(this.bindFunction(this.sortOrder));
    return __s32local0;
  };
  BuyPackagesEventVO.prototype.sortOrder = function (__s39param0, __s39param1) {
    return __s39param0.sortOrder - __s39param1.sortOrder;
  };
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "";
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this;
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventPackagesVO").set.call(this, __s51param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "limitedOffer";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "primesaleSaveRubiesTextID", {
    get: function () {
      return "dialog_privateOffer_whaleChest_rubySave";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "buyType", {
    get: function () {
      return __dep_exact_26a421b704832cff.PackageConst.BUY_TYPE_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  return BuyPackagesEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.BuyPackagesEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
