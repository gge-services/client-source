Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_AProductionBuildingVE = require("gge-module:export_AProductionBuildingVE");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function MillBuildingVE() {
    var __s3local0 = this;
    __s3local0._dispBoundsInitial = new __s0local0();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MillBuildingVE, __s1param0);
  MillBuildingVE.prototype.addBuildingClip = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, this.assetFileName, this.getDispClipColor(), 6, __dep_export_CastleModel.CastleModel.gfxData.animationActive, __dep_export_IsoHelper.IsoHelper.view.getBuildingPlaceHolderClass(this.vo.width, this.vo.height), false, 1, true));
  };
  Object.defineProperty(MillBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AProductionBuildingVE.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  MillBuildingVE.prototype.getFlagStrings = function () {
    return ["flag", "flag0", "flag1", "flag2", "flag3", "flag4", "flag5"];
  };
  MillBuildingVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this._dispBoundsInitial = this._dispLayerBounds.clone();
    this.setFlagsFiltersCacheScale();
  };
  MillBuildingVE.prototype.setFlagsFiltersCacheScale = function () {
    if (this._buildingClip && this._buildingClip.clipColor && this._buildingClip.clipColor.length > 0) {
      for (var __s15local0 = 0; __s15local0 < this._buildingClip.clipColor.length; __s15local0++) {
        this._buildingClip.clipColor[__s15local0].filterCache = 2;
      }
    }
  };
  MillBuildingVE.prototype.onAnimationOptionChanged = function (__s20param0) {
    __s1param0.prototype.onAnimationOptionChanged.call(this, __s20param0);
    if (this.buildingClip) {
      if (__dep_export_IsoHelper.IsoHelper.view.areAnimationsActive) {
        this.buildingClip.play();
      } else {
        this.buildingClip.stop();
      }
    }
  };
  Object.defineProperty(MillBuildingVE.prototype, "dispLayerBounds", {
    get: function () {
      if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && !this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP).visible) {
        return Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "dispLayerBounds").get.call(this);
      } else {
        return this._dispBoundsInitial;
      }
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AProductionBuildingVE.AProductionBuildingVE.prototype, "dispLayerBounds").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  return MillBuildingVE;
}(__dep_export_AProductionBuildingVE.AProductionBuildingVE);
exports.MillBuildingVE = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
