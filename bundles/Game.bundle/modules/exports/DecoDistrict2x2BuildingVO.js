Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __s0local0 = function (__s1param0) {
  function DecoDistrict2x2BuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecoDistrict2x2BuildingVO, __s1param0);
  DecoDistrict2x2BuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "districtSpace_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.districtSlots), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DISTRICTSLOTS), true);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DecoPointsCombined, "publicOrder_combined", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getDistrictDecoPoints()), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MightPointsCombined, "mightPoints_combined", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getDistrictMightPoints()), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR);
  };
  DecoDistrict2x2BuildingVO.prototype.createInfoDialogItems = function (__s7param0) {
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "districtSpace_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.districtSlots), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DISTRICTSLOTS), true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS), true);
    var __s7local0 = this.getDistrictDecoPoints();
    var __s7local1 = this.getDistrictMightPoints();
    if (__s7local0 > 0 && __dep_export_CastleModel.CastleModel.areaData && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo && !__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.isDistrictEmpty(this.districtTypeID)) {
      __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_DecoPointsCombined, "publicOrder_combined", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s7local0), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, __s7local0 > 0);
    }
    if (__s7local1 > 0 && __dep_export_CastleModel.CastleModel.areaData && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo && !__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.isDistrictEmpty(this.districtTypeID)) {
      __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MightPointsCombined, "mightPoints_combined", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s7local1), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, __s7local1 > 0);
    }
  };
  Object.defineProperty(DecoDistrict2x2BuildingVO.prototype, "buildingSlotAssetName", {
    get: function () {
      return "BuildingDistrictItem_DecoDistrict2x2";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoDistrict2x2BuildingVO.prototype, "buildingScaleFactor", {
    get: function () {
      return 0.425;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoDistrict2x2BuildingVO.prototype, "gachaEventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_DECO_GACHA;
    },
    enumerable: true,
    configurable: true
  });
  return DecoDistrict2x2BuildingVO;
}(require("gge-module:export_ADistrictBuildingVO").ADistrictBuildingVO);
exports.DecoDistrict2x2BuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
