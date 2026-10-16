Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __s0local0 = function (__s1param0) {
  function DecoBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecoBuildingVO, __s1param0);
  DecoBuildingVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    __dep_exact_f855840627e6e145.int(__s5param0.length > 0 ? __s5param0.shift() : 0);
    this.fusionInfoVO.serverXP = __s5param0.length > 0 ? __s5param0.shift() : 0;
  };
  DecoBuildingVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_name";
  };
  DecoBuildingVO.prototype.getShortInfoString = function () {
    if (__dep_exact_92d05af59ee2ff30.Localize.hasText(this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_short_info")) {
      return this.name.toLowerCase() + "_" + this.type.toLowerCase() + "_short_info";
    } else if (this.fusionInfoVO.isFusionSource && !this.fusionInfoVO.isFusionTarget) {
      return "deco_source_short_info";
    } else if (this.morality > 0) {
      return this.name.toLowerCase() + "_moral_short_info";
    } else {
      return this.name.toLowerCase() + "_short_info";
    }
  };
  DecoBuildingVO.prototype.getVisualClassName = function () {
    if (this.type == "Swineking" && __dep_export_ClientConstUtils.ClientConstUtils.isMuslim()) {
      return this.name + "_" + this.group + "_Goatking";
    } else {
      return __s1param0.prototype.getVisualClassName.call(this);
    }
  };
  DecoBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  DecoBuildingVO.prototype.createInfoPanelItems = function (__s21param0) {
    __s21param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GridSize_Dark, "gridSize", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("filter_gridSize_custom", [this.width, this.height]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.fusionInfoVO.isFusionSource || this.fusionInfoVO.isFusionTarget) {
      __s21param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Fusion_Level, "fusionLevel", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.fusionInfoVO.getCurrentLevel()), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
    if (this.morality > 0) {
      __s21param0.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.morality), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    } else {
      __s21param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.mightValue > 0) {
      if (this.isDamaged) {
        __s21param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0), __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR, false);
      } else {
        __s21param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.mightValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false);
      }
    }
  };
  return DecoBuildingVO;
}(require("gge-module:export_ADecoBuildingVO").ADecoBuildingVO);
exports.DecoBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");
