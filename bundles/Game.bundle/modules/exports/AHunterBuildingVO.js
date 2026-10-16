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
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AHunterBuildingVO() {
    var __s3local0 = this;
    __s3local0._hunterRatio = 0;
    __s3local0._hunterMax = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AHunterBuildingVO, __s1param0);
  AHunterBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._hunterRatio = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("hunterRatio", __s5param0));
    this._hunterMax = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("hunterMax", __s5param0));
  };
  AHunterBuildingVO.prototype.getVisualClassName = function () {
    return "Hunter_" + this.group + "_" + this.type;
  };
  Object.defineProperty(AHunterBuildingVO.prototype, "hunterRatioFactor", {
    get: function () {
      return this._hunterRatio / __dep_export_CastleHunterData.CastleHunterData.RATIO_FACTOR;
    },
    enumerable: true,
    configurable: true
  });
  AHunterBuildingVO.prototype.createInfoPanelItems = function (__s11param0) {
    __s11param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "hunter_productivity_food", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [100 + __dep_export_CastleModel.CastleModel.hunterData.foodBoost]));
    __s11param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWoodStone, "hunter_productivity_WoodStone", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [100 + __dep_export_CastleModel.CastleModel.hunterData.woodStoneReduction]));
  };
  AHunterBuildingVO.prototype.createInfoDialogItems = function (__s13param0) {
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_food_stonewood_production, "dialog_hunter_productivityExchangeRate", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_hunter_ExchangeRate", [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.hunterRatioFactor, false, 1), "1"]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(AHunterBuildingVO.prototype, "hunterRatio", {
    get: function () {
      return this._hunterRatio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AHunterBuildingVO.prototype, "hunterMax", {
    get: function () {
      return this._hunterMax;
    },
    enumerable: true,
    configurable: true
  });
  return AHunterBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.AHunterBuildingVO = __s0local0;
var __dep_export_CastleHunterData = require("gge-module:export_CastleHunterData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
