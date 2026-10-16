Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __s0local0 = function (__s1param0) {
  function DwellingBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DwellingBuildingVO, __s1param0);
  DwellingBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_Population, "population", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.population));
    __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints));
    if (this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.SURVIVEBOOST)) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SurviveBoost, "hospital_info_defSurvivors", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.SURVIVEBOOST)]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.SURVIVEBOOST));
    }
  };
  DwellingBuildingVO.prototype.createInfoDialogItems = function (__s8param0) {
    __s8param0.addInfoItem(Library.CastleInterfaceElements.Icon_Population, "population", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.population), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s8param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return DwellingBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.DwellingBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
