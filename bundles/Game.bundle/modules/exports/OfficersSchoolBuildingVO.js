Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __s0local0 = function (__s1param0) {
  function OfficersSchoolBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolBuildingVO, __s1param0);
  OfficersSchoolBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    if (this.decoPoints > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  OfficersSchoolBuildingVO.prototype.createInfoDialogItems = function (__s8param0) {
    if (this.decoPoints > 0) {
      __s8param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return OfficersSchoolBuildingVO;
}(require("gge-module:export_AProductionBuildingVO").AProductionBuildingVO);
exports.OfficersSchoolBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICos#tVO", "IInventoryVO");
