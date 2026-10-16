Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ApprenticeSmithEventDialogShop() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.starterPackage = null;
    __s3local0._eventID = __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR;
    __s3local0._fallbackEventVO = null;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ApprenticeSmithEventDialogShop, __s1param0);
  ApprenticeSmithEventDialogShop.prototype.getEventPackages = function () {
    var __s5local0 = this.getEventVO();
    if (__s5local0) {
      return __s5local0.getEventPackagesByCurrencyType(this._currencyType);
    } else {
      return [];
    }
  };
  ApprenticeSmithEventDialogShop.prototype.getEventVO = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    if (!__s9local0 && this._fallbackEventVO && this._fallbackEventVO.isActive) {
      return this._fallbackEventVO;
    } else {
      return __s9local0;
    }
  };
  ApprenticeSmithEventDialogShop.prototype.setEventID = function (__s13param0, __s13param1 = null) {
    this._eventID = __s13param0;
    this._fallbackEventVO = __s13param1;
  };
  Object.defineProperty(ApprenticeSmithEventDialogShop.prototype, "packageList", {
    get: function () {
      return this._listComponent;
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventDialogShop.prototype.setStarterPackage = function (__s17param0) {
    this.starterPackage = __s17param0;
  };
  ApprenticeSmithEventDialogShop.prototype.onPackageInfoArrived = function (__s19param0) {
    __s1param0.prototype.onPackageInfoArrived.call(this, __s19param0);
    if (this.starterPackage) {
      this.packageList.scrollToPackage(this.starterPackage);
      this.starterPackage = null;
    }
  };
  return ApprenticeSmithEventDialogShop;
}(require("gge-module:export_AModernFilterablePackageShopDialogSublayer").AModernFilterablePackageShopDialogSublayer);
exports.ApprenticeSmithEventDialogShop = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
