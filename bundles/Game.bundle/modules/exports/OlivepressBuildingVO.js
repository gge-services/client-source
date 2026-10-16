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
  function OlivepressBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OlivepressBuildingVO, __s1param0);
  Object.defineProperty(OlivepressBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom", {
    get: function () {
      return __dep_export_KingdomEnum.KingdomEnum.DESSERT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OlivepressBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.OIL;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  OlivepressBuildingVO.prototype.createInfoPanelItems = function (__s13param0) {
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil, "basicProduktion", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f_1.MathBase.round(this.getBaseProductionValue(), 1)));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Oliveoil, "utilization", new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    __s13param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("oliveoil")]
    }, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f_1.MathBase.round(this.getFinalProductionValue(), 1)));
  };
  OlivepressBuildingVO.prototype.createInfoDialogItems = function (__s15param0) {
    __s15param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil, "oilproduction", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return OlivepressBuildingVO;
}(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO);
exports.OlivepressBuildingVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
