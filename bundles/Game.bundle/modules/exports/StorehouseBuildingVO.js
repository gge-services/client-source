Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StorehouseBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StorehouseBuildingVO, __s1param0);
  StorehouseBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AquamarineStorage, "storage_capacity_aquamarine", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.AQUAMARINE)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.decoPoints > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS));
    }
  };
  return StorehouseBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.StorehouseBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
