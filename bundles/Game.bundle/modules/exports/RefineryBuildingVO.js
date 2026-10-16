Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __s0local0 = function (__s1param0) {
  function RefineryBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RefineryBuildingVO, __s1param0);
  RefineryBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_WoodStorage, "woodStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_StoneStorage, "stoneStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.resourceStorage.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return RefineryBuildingVO;
}(require("gge-module:export_ACraftingBuildingVO").ACraftingBuildingVO);
exports.RefineryBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
