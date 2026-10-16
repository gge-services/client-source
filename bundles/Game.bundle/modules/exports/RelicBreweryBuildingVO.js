Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function RelicBreweryBuildingVO() {
    var __s3local0 = this;
    __s3local0.honeyRatio = 0;
    __s3local0.foodRatio = 0;
    __s3local0.meadProduction = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicBreweryBuildingVO, __s1param0);
  RelicBreweryBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this.honeyRatio = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("honeyRatio", __s5param0));
    this.foodRatio = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("foodRatio", __s5param0));
    this.meadProduction = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("meadProduction", __s5param0));
  };
  RelicBreweryBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s1param0.prototype.createInfoPanelItems.call(this, __s7param0);
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Mead_Rate, "RelicBrewery_meadProductionRate", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_CastleModel.CastleModel.breweryData.percentForMead]));
    __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_Mead, "RelicBrewery_meadPerHour", new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadBaseProduction), {
      compactThreshold: 1000000
    }));
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MeadStorage, "meadStorage_capacityBonus_tt", new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  RelicBreweryBuildingVO.prototype.createInfoDialogItems = function (__s9param0) {
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FoodToMead, "dialog_buildingInfo_foodMeadConversion", new __dep_exact_92d05af59ee2ff30.TextVO(this.foodRatio.toString() + " : 1"), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HoneyToMead, "dialog_buildingInfo_honeyMeadConversion", new __dep_exact_92d05af59ee2ff30.TextVO(this.honeyRatio.toString() + " : 1"), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MeadStorage, "meadStorage_capacityBonus_tt", new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might_starOnly_noShadow, "playerMight", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.mightValue));
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(RelicBreweryBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.MEAD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBreweryBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBreweryBuildingVO.prototype, "isOverseerBoosted", {
    get: function () {
      var __s15local0 = __dep_export_CastleModel.CastleModel.boostData.getOverseer(this.resourceType);
      return !!__s15local0 && __s15local0.isActive;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBreweryBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.RelicBreweryBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
