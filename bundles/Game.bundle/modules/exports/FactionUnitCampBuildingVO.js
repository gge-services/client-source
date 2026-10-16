Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function FactionUnitCampBuildingVO() {
    var __s3local0 = this;
    __s3local0._auxiliaryCapacity = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionUnitCampBuildingVO, __s1param0);
  FactionUnitCampBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._auxiliaryCapacity = __dep_exact_f855840627e6e145.int(__s5param0.auxiliaryCapacity || "");
  };
  Object.defineProperty(FactionUnitCampBuildingVO.prototype, "auxiliaryCount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCount(FactionUnitCampBuildingVO.onlyAuxiliaries) + __dep_export_CastleModel.CastleModel.militaryData.unitInCourse.getUnitCount(FactionUnitCampBuildingVO.onlyAuxiliaries);
    },
    enumerable: true,
    configurable: true
  });
  FactionUnitCampBuildingVO.onlyAuxiliaries = function (__s9param0) {
    return __s9param0.isAuxiliary;
  };
  FactionUnitCampBuildingVO.prototype.createInfoPanelItems = function (__s11param0) {
    __s11param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_tentCapacity_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.auxiliaryCapacity), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  FactionUnitCampBuildingVO.prototype.createInfoDialogItems = function (__s13param0) {
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_tentCapacity_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.auxiliaryCapacity), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(FactionUnitCampBuildingVO.prototype, "auxiliaryCapacity", {
    get: function () {
      return this._auxiliaryCapacity;
    },
    enumerable: true,
    configurable: true
  });
  return FactionUnitCampBuildingVO;
}(require("gge-module:export_UnittentBuildingVO").UnittentBuildingVO);
exports.FactionUnitCampBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
