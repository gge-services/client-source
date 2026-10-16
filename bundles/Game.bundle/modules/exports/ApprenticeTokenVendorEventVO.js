Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ApprenticeSmithEventDialog = require("gge-module:export_ApprenticeSmithEventDialog");
var __dep_export_ApprenticeSmithEventDialogProperties = require("gge-module:export_ApprenticeSmithEventDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function ApprenticeTokenVendorEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ApprenticeTokenVendorEventVO, __s1param0);
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ApprenticeTokenVendorEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_apprenticeSmith";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeTokenVendorEventVO.prototype.openMerchantDialog = function (__s13param0, __s13param1) {
    this.executeOpenDialog(__s13param0, __dep_export_ApprenticeSmithEventDialog.ApprenticeSmithEventDialog, new __dep_export_ApprenticeSmithEventDialogProperties.ApprenticeSmithEventDialogProperties(this, __s13param1));
  };
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeTokenVendorEventVO.prototype.getEventPackagesByCurrencyType = function (__s19param0) {
    var __s19local0 = this.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE);
    var __s19local1 = [];
    if (__s19local0 != null) {
      for (var __s19local2 = 0, __s19local3 = __s19local0; __s19local2 < __s19local3.length; __s19local2++) {
        var __s19local4 = __s19local3[__s19local2];
        if (__s19local4 !== undefined && __s19local4.getXmlCosts().containsTypeVO(__s19param0)) {
          __s19local1.push(__s19local4);
        }
      }
    }
    return __s19local1;
  };
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "isVisible", {
    get: function () {
      return this.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType).length > 0;
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeTokenVendorEventVO.EVENT_BUILDING_WOD = 1531;
  return ApprenticeTokenVendorEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.ApprenticeTokenVendorEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
