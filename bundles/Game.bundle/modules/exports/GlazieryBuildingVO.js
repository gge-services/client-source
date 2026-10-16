Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_AResourceProductionBuildingVO = require("gge-module:export_AResourceProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function GlazieryBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlazieryBuildingVO, __s1param0);
  Object.defineProperty(GlazieryBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom", {
    get: function () {
      return __dep_export_KingdomEnum.KingdomEnum.VOLCANO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlazieryBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.GLASS;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  GlazieryBuildingVO.prototype.createInfoPanelItems = function (__s13param0) {
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass, "basicProduktion", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f_1.MathBase.round(this.getBaseProductionValue(), 1)));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Glass, "utilization", new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    __s13param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("glass")]
    }, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f_1.MathBase.round(this.getFinalProductionValue(), 1)));
  };
  GlazieryBuildingVO.prototype.createInfoDialogItems = function (__s15param0) {
    __s15param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass, "glasproduction", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return GlazieryBuildingVO;
}(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO);
exports.GlazieryBuildingVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
