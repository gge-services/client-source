Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function ADistrictBuildingVE() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADistrictBuildingVE, __s1param0);
  ADistrictBuildingVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.interationIndicator = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(ADistrictBuildingVE.INDICATOR_CLASS_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ADistrictBuildingVE.INDICATOR_CLASS_NAME), null, 0, false);
  };
  ADistrictBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onBurningUpdated));
  };
  ADistrictBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onBurningUpdated));
  };
  ADistrictBuildingVE.prototype.onBurningUpdated = function (__s11param0) {
    this.updateStatusIcon();
  };
  ADistrictBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (__dep_export_CastleModel.CastleModel.areaData && __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.isDistrictBuring(this.districtVO.districtTypeID)) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.BUILDING_DISTRICT_BURNING);
    }
  };
  ADistrictBuildingVE.prototype.setCollisionFloor = function (__s16param0) {
    __s1param0.prototype.setCollisionFloor.call(this, __s16param0);
    if (this.interationIndicator.parent == this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.INTERACTION)) {
      this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.INTERACTION).removeChild(this.interationIndicator);
    }
    if (__dep_export_Iso.Iso.renderer.mouse.draggedTarget && __dep_export_Iso.Iso.renderer.mouse.draggedTarget != this) {
      this.updateDistrictFloorEffect(false);
      if (__s16param0) {
        this.isoRenderer.layers.getIsoLayer(__dep_export_IsoLayerEnum.IsoLayerEnum.INTERACTION).addChild(this.interationIndicator);
        this.interationIndicator.x = this.elementContainer.x;
        this.interationIndicator.y = this.elementContainer.y;
      }
    }
  };
  ADistrictBuildingVE.prototype.updateDistrictFloorEffect = function (__s21param0) {
    var __s21local0 = __dep_export_Iso.Iso.renderer.mouse.draggedTarget.interactiveVO;
    var __s21local1 = this.districtVO.canAddBuilding(__s21local0);
    if (this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.FLOOR)) {
      if (__s21param0) {
        this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.FLOOR).filters = __s21local1 ? [__dep_export_IsoConst.IsoConst.DRAG_VALID_FILTER] : [__dep_export_IsoConst.IsoConst.DRAG_INVALID_FILTER];
        this.interationIndicator.gotoAndStop(__s21local1 ? 3 : 1);
      } else {
        this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.FLOOR).filters = __s21local1 ? [__dep_export_IsoConst.IsoConst.DRAG_VALID_DISTRICT_FILTER] : null;
        this.interationIndicator.gotoAndStop(__s21local1 ? 2 : 1);
      }
    }
  };
  ADistrictBuildingVE.prototype.getRingMenuButtons = function () {
    var __s26local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s26local0.push(new __dep_export_RingMenuButtonBuildingDistrict.RingMenuButtonBuildingDistrict());
    return __s26local0;
  };
  Object.defineProperty(ADistrictBuildingVE.prototype, "districtVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BuildingDistrict;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  ADistrictBuildingVE.INDICATOR_CLASS_NAME = "FX_DistrictIndicator";
  return ADistrictBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.ADistrictBuildingVE = __s0local0;
var __dep_export_RingMenuButtonBuildingDistrict = require("gge-module:export_RingMenuButtonBuildingDistrict");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
