Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function ADefenceBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADefenceBuildingVE, __s1param0);
  ADefenceBuildingVE.prototype.updateDisp = function () {
    __s1param0.prototype.updateDisp.call(this);
    this.elementContainer.mouseEnabled = !this.isTransparent;
    this.updateDefenceDecor();
  };
  ADefenceBuildingVE.prototype.addScaffoldClip = function () {
    if (!this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW)) {
      __s1param0.prototype.addScaffoldClip.call(this);
    }
  };
  ADefenceBuildingVE.prototype.createAdditionalClips = function () {
    if (!this.isTransparent) {
      __s1param0.prototype.createAdditionalClips.call(this);
    }
  };
  ADefenceBuildingVE.prototype.updateDefenceDecor = function () {
    if (this.buildingClip && this.buildingClip.currentshownDisplayObject && !this.isoRenderer.isoData.areaData.isSeasonCamp) {
      var __s13local0 = __dep_exact_81dacdf05bd32292_1.castAs(this.buildingClip.currentshownDisplayObject.getChildByName("art"), "MovieClip");
      if (__s13local0) {
        __s13local0.gotoAndStop(this.isoRenderer.isoData.areaData.areaInfo.kingdomID + 1);
      }
    }
  };
  ADefenceBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    this.statusIcons.setVisibility(!this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW));
  };
  ADefenceBuildingVE.prototype.showUpgradeableIconInBuildingGroundView = function () {
    return true;
  };
  Object.defineProperty(ADefenceBuildingVE.prototype, "isTransparent", {
    get: function () {
      return this.renderStrategy.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  ADefenceBuildingVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.updateDefenceDecor();
  };
  ADefenceBuildingVE.prototype.getIsoEventSkinSkinSuffix = function (__s25param0 = -1) {
    if (__dep_exact_f855840627e6e145.int(__s25param0 != -1 ? __s25param0 : this.vo.level) == 1 && __dep_export_IsoHelper.IsoHelper.view.canUseIsoEventSkin() && __dep_export_IsoHelper.IsoHelper.view.doesAssetFileExist("Castlewall_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix())) {
      return "_" + __dep_export_IsoHelper.IsoHelper.view.getIsoEventSkinSuffix();
    } else {
      return "";
    }
  };
  Object.defineProperty(ADefenceBuildingVE.prototype, "buildingGroundIconClass", {
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  return ADefenceBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.ADefenceBuildingVE = __s0local0;
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
