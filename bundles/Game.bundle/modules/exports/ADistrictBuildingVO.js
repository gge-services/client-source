Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function ADistrictBuildingVO() {
    var __s3local0 = this;
    __s3local0._districtSlots = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADistrictBuildingVO, __s1param0);
  ADistrictBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._districtSlots = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("districtSlots", __s5param0, "0"));
  };
  ADistrictBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "districtSpace_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.districtSlots), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DISTRICTSLOTS), true);
    if (this.decoPoints > 0) {
      __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  Object.defineProperty(ADistrictBuildingVO.prototype, "districtSlots", {
    get: function () {
      return this._districtSlots;
    },
    enumerable: true,
    configurable: true
  });
  ADistrictBuildingVO.prototype.canAddBuilding = function (__s12param0) {
    return !!__s12param0 && __s12param0 != this && __s12param0.districtTypeID == this.districtTypeID && !this.isDistrictFull && !this.isDisassembling();
  };
  Object.defineProperty(ADistrictBuildingVO.prototype, "isDistrictFull", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.isDistrictFull(this.districtTypeID);
    },
    enumerable: true,
    configurable: true
  });
  ADistrictBuildingVO.prototype.isDisassembling = function () {
    return this.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS || this.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED;
  };
  ADistrictBuildingVO.prototype.getDistrictDecoPoints = function () {
    if (this.x >= 0 && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo) {
      return __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getDistrictDecoPoints(this.districtTypeID) + this.decoPoints;
    } else {
      return 0;
    }
  };
  ADistrictBuildingVO.prototype.getDistrictMightPoints = function () {
    if (this.x >= 0 && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo) {
      return __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getDistrictMightPoints(this.districtTypeID) + this.mightValue;
    } else {
      return 0;
    }
  };
  Object.defineProperty(ADistrictBuildingVO.prototype, "buildingSlotAssetName", {
    get: function () {
      return "BuildingDistrictItem";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADistrictBuildingVO.prototype, "buildingScaleFactor", {
    get: function () {
      return 0.238;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADistrictBuildingVO.prototype, "gachaEventID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  return ADistrictBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.ADistrictBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
