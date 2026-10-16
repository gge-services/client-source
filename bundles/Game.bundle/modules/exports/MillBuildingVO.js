Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_AProductionBuildingVO = require("gge-module:export_AProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function MillBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MillBuildingVO, __s1param0);
  Object.defineProperty(MillBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AProductionBuildingVO.AProductionBuildingVO.prototype, "isBoostableBuilding").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  MillBuildingVO.prototype.createInfoPanelItems = function (__s9param0) {
    if (this.decoPoints > 0) {
      __s9param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Boost_Food, "foodbooster", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.resourceBoosts.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.FOOD)]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return MillBuildingVO;
}(__dep_export_AProductionBuildingVO.AProductionBuildingVO);
exports.MillBuildingVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
