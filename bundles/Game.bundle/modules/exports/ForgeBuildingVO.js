Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function ForgeBuildingVO() {
    var __s3local0 = this;
    __s3local0._toolProductionSpeedBoost = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ForgeBuildingVO, __s1param0);
  ForgeBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._toolProductionSpeedBoost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("offensiveToolsSpeedBoost", __s5param0));
  };
  ForgeBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.toolProductionSpeedBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ForgeBuildingVO.prototype.createInfoDialogItems = function (__s9param0) {
    __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ToolProductionBoost, "toolbooster", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.toolProductionSpeedBoost]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s9param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(ForgeBuildingVO.prototype, "toolProductionSpeedBoost", {
    get: function () {
      return this._toolProductionSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  return ForgeBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.ForgeBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
