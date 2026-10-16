Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleGenericMerchantDialogProperties = require("gge-module:export_CastleGenericMerchantDialogProperties");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function MerchantEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MerchantEventVO, __s1param0);
  Object.defineProperty(MerchantEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return MerchantEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MerchantEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Merchant";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MerchantEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MERCHANT;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  MerchantEventVO.prototype.openMerchantDialog = function (__s17param0, __s17param1) {
    this.executeOpenDialog(__s17param0, __dep_export_CastleResourceMerchantEventDialog.CastleResourceMerchantEventDialog, new __dep_export_CastleGenericMerchantDialogProperties.CastleGenericMerchantDialogProperties(this, __s17param1));
  };
  MerchantEventVO.__initialize_static_members = function () {
    MerchantEventVO.EVENT_BUILDING_WOD = 281;
  };
  return MerchantEventVO;
}(__dep_export_BuyPackagesEventVO.BuyPackagesEventVO);
exports.MerchantEventVO = __s0local0;
var __dep_export_CastleResourceMerchantEventDialog = require("gge-module:export_CastleResourceMerchantEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
__s0local0.__initialize_static_members();
