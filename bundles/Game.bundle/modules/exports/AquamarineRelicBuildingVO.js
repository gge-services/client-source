Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function AquamarineRelicBuildingVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._aquamarineHideout = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AquamarineRelicBuildingVO, __s1param0);
  AquamarineRelicBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._aquamarineHideout = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("aquamarineHideout", __s5param0);
  };
  AquamarineRelicBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AquamarineHideout, "saveStorage", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.aquamarineHideout), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_islandAlliancePoints, "aquamarin_points_alliance_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.islandAlliancePoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(AquamarineRelicBuildingVO.prototype, "aquamarineHideout", {
    get: function () {
      return this._aquamarineHideout;
    },
    enumerable: true,
    configurable: true
  });
  return AquamarineRelicBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.AquamarineRelicBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
