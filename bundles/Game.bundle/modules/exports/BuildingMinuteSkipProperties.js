Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SIsoFastCompleteObjectVO = require("gge-module:export_C2SIsoFastCompleteObjectVO");
var __dep_export_C2SMinuteSkipBuildingVO = require("gge-module:export_C2SMinuteSkipBuildingVO");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function BuildingMinuteSkipProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.buildingObjectId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).buildingObjectId = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuildingMinuteSkipProperties, __s1param0);
  Object.defineProperty(BuildingMinuteSkipProperties.prototype, "basicBuilding", {
    get: function () {
      return __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(this.buildingObjectId);
    },
    enumerable: true,
    configurable: true
  });
  BuildingMinuteSkipProperties.prototype.getMinuteSkipCommand = function (__s7param0) {
    return new __dep_export_C2SMinuteSkipBuildingVO.C2SMinuteSkipBuildingVO(__s7param0, this.basicBuilding.vo.objectId);
  };
  BuildingMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new __dep_export_C2SIsoFastCompleteObjectVO.C2SIsoFastCompleteObjectVO(this.basicBuilding.vo.objectId, this.isFreeSkipActive() ? 1 : 0);
  };
  BuildingMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.basicBuilding && this.basicBuilding.buildingVO && (this.basicBuilding.buildingVO.buildingState.isInProgress || this.basicBuilding.buildingVO.buildingState.isStopped);
  };
  BuildingMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return this.getSkipCost() == 0;
  };
  BuildingMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return __dep_export_CastleModel.CastleModel.skipDiscountData.hasBoostedSkipDiscount();
  };
  BuildingMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount());
  };
  BuildingMinuteSkipProperties.prototype.getNameText = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.showBuildingVO.getNameString());
  };
  BuildingMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("building_level", [this.showBuildingVO.level]);
  };
  BuildingMinuteSkipProperties.prototype.getIconFrame = function () {
    switch (this.basicBuilding.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_DEMOLISH);
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_REPAIR);
      default:
        return __dep_exact_f855840627e6e145.int(__dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.ICONFRAME_BUILDING);
    }
  };
  BuildingMinuteSkipProperties.prototype.getIconToolTipText = function () {
    switch (this.basicBuilding.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        return "destroy";
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        return "repair";
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        return "upgrade";
      default:
        return "build";
    }
  };
  BuildingMinuteSkipProperties.prototype.displayPicture = function (__s29param0) {
    return __dep_export_WodPicHelper.WodPicHelper.addWodPic(this.showBuildingVO, __s29param0, __dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.PICTURE_WIDTH, __dep_export_CastleMinuteSkipDialog.CastleMinuteSkipDialog.PICTURE_HEIGHT);
  };
  BuildingMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.basicBuilding.buildingVO.currentBuildingStateTime;
  };
  BuildingMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.basicBuilding.buildingVO.getTimeLeftForBuilding();
  };
  BuildingMinuteSkipProperties.prototype.getSkipCost = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getSkipCosts(this.basicBuilding, __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
  };
  Object.defineProperty(BuildingMinuteSkipProperties.prototype, "showBuildingVO", {
    get: function () {
      return __dep_export_CastleSkipBuildingDialog.CastleSkipBuildingDialog.getBuildingVOToShow(this.basicBuilding);
    },
    enumerable: true,
    configurable: true
  });
  BuildingMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscountTime();
  };
  return BuildingMinuteSkipProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.BuildingMinuteSkipProperties = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleSkipBuildingDialog = require("gge-module:export_CastleSkipBuildingDialog");
var __dep_export_CastleMinuteSkipDialog = require("gge-module:export_CastleMinuteSkipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMinuteSkipProperties");
