Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function ArmorerEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ArmorerEventVO, __s1param0);
  Object.defineProperty(ArmorerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ArmorerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmorerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Armorer";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ArmorerEventVO.prototype.openMerchantDialog = function (__s13param0, __s13param1) {
    this.executeOpenDialog(__s13param0, __dep_export_CastleArmorerEventDialog.CastleArmorerEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s13param1));
  };
  Object.defineProperty(ArmorerEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  ArmorerEventVO.__initialize_static_members = function () {
    ArmorerEventVO.EVENT_BUILDING_WOD = 220;
  };
  return ArmorerEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.ArmorerEventVO = __s0local0;
var __dep_export_CastleArmorerEventDialog = require("gge-module:export_CastleArmorerEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
__s0local0.__initialize_static_members();
