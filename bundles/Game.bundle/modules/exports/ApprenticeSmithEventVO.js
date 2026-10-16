Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_CastleApprenticeSmithEventDialog = require("gge-module:export_CastleApprenticeSmithEventDialog");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function ApprenticeSmithEventVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ApprenticeSmithEventVO, __s1param0);
  Object.defineProperty(ApprenticeSmithEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ApprenticeSmithEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ApprenticeSmithEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_apprenticeSmith";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventVO.prototype.openMerchantDialog = function (__s13param0, __s13param1) {
    this.executeOpenDialog(__s13param0, __dep_export_CastleApprenticeSmithEventDialog.CastleApprenticeSmithEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s13param1));
  };
  Object.defineProperty(ApprenticeSmithEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventVO.EVENT_BUILDING_WOD = 1531;
  return ApprenticeSmithEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.ApprenticeSmithEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
