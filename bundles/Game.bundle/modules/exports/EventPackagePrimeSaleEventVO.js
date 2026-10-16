Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleEventPackagePrimeSaleDialogProperties = require("gge-module:export_CastleEventPackagePrimeSaleDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __s0local0 = function (__s1param0) {
  function EventPackagePrimeSaleEventVO() {
    var __s3local0 = this;
    __s3local0._discount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventPackagePrimeSaleEventVO, __s1param0);
  EventPackagePrimeSaleEventVO.prototype.parseParamObject = function (__s5param0) {
    this._packageIDs = __s5param0.PID;
    this._discount = __dep_exact_f855840627e6e145.int(__s5param0.DIS);
  };
  EventPackagePrimeSaleEventVO.prototype.openDialog = function (__s7param0 = true) {
    if (this.canShowDialog) {
      var __s7local0 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastleEventPackagePrimeSaleDialog.CastleEventPackagePrimeSaleDialog, new __dep_export_CastleEventPackagePrimeSaleDialogProperties.CastleEventPackagePrimeSaleDialogProperties(this), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s7local0.dialogClass, __s7local0.properties, __s7local0.blockDialogs, __s7local0.priority, 0, __s7local0.type);
    }
  };
  EventPackagePrimeSaleEventVO.prototype.canShowDialog = function () {
    if (__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      return false;
    }
    var __s10local0 = false;
    if (this._packageIDs != null) {
      for (var __s10local1 = 0, __s10local2 = this._packageIDs; __s10local1 < __s10local2.length; __s10local1++) {
        var __s10local3 = __s10local2[__s10local1];
        if (__s10local3 !== undefined) {
          if (__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s10local3).isVisible(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel)) {
            __s10local0 = true;
            break;
          }
        }
      }
    }
    return __s10local0 && (this.canFindMerchant() || this.hasVIPPackageVOs());
  };
  Object.defineProperty(EventPackagePrimeSaleEventVO.prototype, "showAblePackageIDs", {
    get: function () {
      var __s18local0 = [];
      for (var __s18local1 = 0; __s18local1 < this._packageIDs.length; __s18local1++) {
        if (__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._packageIDs[__s18local1]).isVisible(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel)) {
          __s18local0.push(this._packageIDs[__s18local1]);
        }
      }
      return __s18local0;
    },
    enumerable: true,
    configurable: true
  });
  EventPackagePrimeSaleEventVO.prototype.canFindMerchant = function () {
    var __s23local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventBySoldPackage(this.packageIDs[0]);
    return !!__s23local0 && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(__s23local0.eventId) && !(__dep_export_CastleModel.CastleModel.userData.userLevel < __s23local0.minLevel);
  };
  EventPackagePrimeSaleEventVO.prototype.hasVIPPackageVOs = function () {
    if (this.packageIDs != null) {
      for (var __s25local0 = 0, __s25local1 = this.packageIDs; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          var __s25local3 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s25local2);
          if (__s25local3 && __s25local3.packageType == __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP) {
            return true;
          }
        }
      }
    }
    return false;
  };
  Object.defineProperty(EventPackagePrimeSaleEventVO.prototype, "packageIDs", {
    get: function () {
      return this._packageIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackagePrimeSaleEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  EventPackagePrimeSaleEventVO.getPackageDiscountC2 = function (__s36param0) {
    var __s36local0;
    if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s36param0).basicPriceC2) == 0) {
      return 0;
    } else if ((__s36local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES)) && __s36local0.packageIDs.indexOf(__s36param0) > -1) {
      return __s36local0.discount;
    } else {
      return 0;
    }
  };
  EventPackagePrimeSaleEventVO.hasDiscountedPackages = function (__s41param0) {
    var __s41local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES);
    var __s41local1 = false;
    if (__s41local0) {
      for (var __s41local2 = 0, __s41local3 = __s41local0.packageIDs; __s41local2 < __s41local3.length; __s41local2++) {
        var __s41local4 = __s41local3[__s41local2];
        if (__s41local4 !== undefined) {
          if (__dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__s41local4).isVisible(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo ? __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType : 0) && __s41param0.containsEventPackage(__s41local4)) {
            __s41local1 = true;
          }
        }
      }
    }
    return __s41local1;
  };
  return EventPackagePrimeSaleEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.EventPackagePrimeSaleEventVO = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEventPackagePrimeSaleDialog = require("gge-module:export_CastleEventPackagePrimeSaleDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
