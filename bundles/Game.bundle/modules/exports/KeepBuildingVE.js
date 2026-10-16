Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_ABasicBuildingVE = require("gge-module:export_ABasicBuildingVE");
var __s0local0 = function (__s1param0) {
  function KeepBuildingVE() {
    var __s3local0 = this;
    __s3local0._isHovered = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KeepBuildingVE, __s1param0);
  KeepBuildingVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.elementContainer.mouseChildren = true;
  };
  KeepBuildingVE.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.taxData.onTaxChanged.add(this.bindFunction(this.onTaxChanged));
  };
  KeepBuildingVE.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleModel.CastleModel.taxData.onTaxChanged.remove(this.bindFunction(this.onTaxChanged));
  };
  KeepBuildingVE.prototype.onTaxChanged = function (__s11param0) {
    this.updateStatusIcon();
  };
  KeepBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (!!this.keepBuildingVO.buildingState.isFunctionally && !this.keepBuildingVO.buildingState.isInProgress && !this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && !this.statusIcons.isUpgradeIconActive) {
      if (this.keepBuildingVO.canCollectTax) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.TAX_COLLECTABLE);
      } else if (this._isHovered && this.keepBuildingVO.taxInfoVO.isCollecting) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PROGRESS_BAR_TAX);
      }
    }
  };
  Object.defineProperty(KeepBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Keep;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ABasicBuildingVE.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  KeepBuildingVE.prototype.getDispClipColor = function () {
    var __s22local0 = __s1param0.prototype.getDispClipColor.call(this);
    var __s22local1 = [];
    __s22local1.push(__dep_export_IsoHelper.IsoHelper.view.getIsoColorsByKingdomId(this.vo.isoData.areaData.areaInfo.kingdomID).buildingGroundColor);
    __s22local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("buildingground", __s22local1));
    return __s22local0;
  };
  KeepBuildingVE.prototype.getRingMenuButtons = function () {
    var __s24local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s24local0.push(new __dep_export_RingMenuButtonTax.RingMenuButtonTax());
    return __s24local0;
  };
  KeepBuildingVE.prototype.getInteractionDisps = function () {
    return [this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP), this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.ADDITIONAL_CLIPS), this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.STATUS_ICONS), this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.BUILDING_GROUND)];
  };
  KeepBuildingVE.prototype.onMouseClick = function () {
    if (this.keepBuildingVO.taxInfoVO.isTaxReadyForCollection && this.vo.isoData.areaData.isMyArea && !this.vo.isoData.areaData.isUnderConquerProcess) {
      __dep_export_Iso.Iso.controller.server.collectTax();
    }
  };
  KeepBuildingVE.prototype.onHoverTarget = function () {
    this._isHovered = true;
    if (!this.keepBuildingVO.canCollectTax && !this.buildingVO.buildingState.isInProgress && !this.buildingVO.buildingState.isUnderConstruction && !!this.keepBuildingVO.taxInfoVO.isCollecting && !this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && !this.statusIcons.isUpgradeIconActive) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PROGRESS_BAR_TAX);
    }
  };
  KeepBuildingVE.prototype.onUnHoverTarget = function () {
    this._isHovered = false;
    this.updateStatusIcon();
  };
  Object.defineProperty(KeepBuildingVE.prototype, "keepBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return KeepBuildingVE;
}(__dep_export_ABasicBuildingVE.ABasicBuildingVE);
exports.KeepBuildingVE = __s0local0;
var __dep_export_RingMenuButtonTax = require("gge-module:export_RingMenuButtonTax");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
