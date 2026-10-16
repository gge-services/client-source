Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RingMenuButtonGacha = require("gge-module:export_RingMenuButtonGacha");
var __dep_export_RingMenuButtonGeneralsHub = require("gge-module:export_RingMenuButtonGeneralsHub");
var __dep_export_RingMenuButtonGeneralsOverview = require("gge-module:export_RingMenuButtonGeneralsOverview");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoObjectLayerEnum = require("gge-module:export_IsoObjectLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_AInteractiveIsoObjectVE = require("gge-module:export_AInteractiveIsoObjectVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ABasicBuildingVE() {
    var __s3local0 = this;
    __s3local0._scaffoldRenderer = new __dep_export_IsoScaffoldRenderer.IsoScaffoldRenderer();
    __s3local0._buildingGroundManager = new __dep_export_IsoBuildingGroundManager.IsoBuildingGroundManager();
    __s3local0._isCollisionFloorVisible = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABasicBuildingVE, __s1param0);
  ABasicBuildingVE.prototype.init = function (__s5param0) {
    __s1param0.prototype.init.call(this, __s5param0);
    this.scaffoldRenderer.init(this.dispComponent.dispContainer, this.vo);
    this.buildingGroundManager.init(this);
  };
  ABasicBuildingVE.prototype.updateInteractionVisibility = function () {
    if (this.elementContainer) {
      __s1param0.prototype.updateInteractionVisibility.call(this);
      var __s7local0 = this.buildingVO.isBuildingGroundViewAvailable && this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
      this.isoRenderer.mouse.hoveredTarget;
      var __s7local1 = this.isoRenderer.mouse.focusedTarget == this;
      var __s7local2 = this.isoRenderer.mouse.selectedTarget == this;
      var __s7local3 = this.isoRenderer.mouse.draggedTarget == this;
      var __s7local4 = __s7local1 || __s7local2 && __s7local0 ? __dep_export_IsoConst.IsoConst.BUILDING_FOCUS_ALPHA : 1;
      this.buildingGroundManager.setVisibility(__s7local0 && !__s7local3);
      this.buildingGroundManager.setIconVisibility(!__s7local2);
      this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP).visible = !__s7local0 || __s7local2 || __s7local3;
      this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.DISP).alpha = __s7local4;
      this.additionalClips.setVisibility(!__s7local0 || __s7local3 || __s7local2);
      this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.ADDITIONAL_CLIPS).alpha = __s7local4;
      this.statusIcons.setVisibility(!__s7local0 && !__s7local2 && !__s7local3);
      this.updateDispBounds();
      this.statusIcons.updatePosition();
    }
  };
  ABasicBuildingVE.prototype.createDisp = function () {
    switch (this.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
        this.addConstructionSiteClip();
    }
    switch (this.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.WAIT_FOR_SERVER:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.INITIAL:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        break;
      default:
        this.addBuildingClip();
    }
    this.addScaffoldClip();
  };
  ABasicBuildingVE.prototype.updateDisp = function () {
    __s1param0.prototype.updateDisp.call(this);
    this.buildingGroundManager.updateDisp();
    this.updateInteractionVisibility();
  };
  ABasicBuildingVE.prototype.destroyDisp = function () {
    this._buildingClip = null;
    this.scaffoldRenderer.destroy();
    this.setCollisionFloor(false);
    __s1param0.prototype.destroyDisp.call(this);
  };
  ABasicBuildingVE.prototype.addBuildingClip = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, this.assetFileName, this.getDispClipColor(), 0, false, __dep_export_IsoHelper.IsoHelper.view.getBuildingPlaceHolderClass(this.vo.width, this.vo.height)));
  };
  ABasicBuildingVE.prototype.addConstructionSiteClip = function () {
    var __s20local0 = "Constructionsite_" + this.vo.width + "_" + this.vo.height;
    this.dispComponent.addClip(this.loadExternalClip(__s20local0, __s20local0));
  };
  ABasicBuildingVE.prototype.addScaffoldClip = function () {
    switch (this.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        this.scaffoldRenderer.render();
    }
  };
  ABasicBuildingVE.prototype.updateRotation = function () {
    __s1param0.prototype.updateRotation.call(this);
    this.buildingGroundManager.updateDisp();
  };
  ABasicBuildingVE.prototype.setCollisionFloorVisibility = function (__s27param0) {
    if (this.isCollisionFloorVisible != __s27param0) {
      this.setCollisionFloor(__s27param0);
    }
  };
  ABasicBuildingVE.prototype.setCollisionFloor = function (__s30param0) {
    var __s30local0 = this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.FLOOR);
    __s30local0.removeChildren();
    __s30local0.useFilters([]);
    this._isCollisionFloorVisible = __s30param0;
    if (this.isCollisionFloorVisible) {
      __s30local0.addChild(__dep_export_IsoHelper.IsoHelper.view.createFloorDisp(new __s0local0(this.vo.rotatedWidth, this.vo.rotatedHeight), 0, 0.2));
    }
  };
  ABasicBuildingVE.prototype.updateDragCollisionFloorEffect = function (__s33param0) {
    var __s33local0 = this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.FLOOR);
    if (__s33local0) {
      __s33local0.useFilters(__s33param0 ? [__dep_export_IsoConst.IsoConst.DRAG_VALID_FILTER] : [__dep_export_IsoConst.IsoConst.DRAG_INVALID_FILTER], true);
    }
  };
  ABasicBuildingVE.prototype.renewCollisionFloor = function () {
    this.setCollisionFloor(this.isCollisionFloorVisible);
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "damageScale", {
    get: function () {
      var __s38local0 = 1 + this.buildingVO.damageFactor;
      switch (Math.min(this.buildingVO.width, this.buildingVO.height)) {
        case 4:
          __s38local0 *= 0.75;
          break;
        case 3:
          __s38local0 *= 0.5;
          break;
        case 2:
          __s38local0 *= 0.25;
      }
      return __s38local0;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.FLAG, 12, 1, true);
    if (this.buildingVO.damageFactor > 0) {
      if (this.buildingVO.damageType == __dep_exact_26a421b704832cff_1.ConstructionConst.DAMAGE_TYPE_FIRE) {
        this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.DAMAGE, 12, this.damageScale / 2);
      } else {
        this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.PLAGUE, 24, this.damageScale);
      }
    } else {
      this.additionalClips.removeClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.DAMAGE);
      this.additionalClips.removeClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.PLAGUE);
    }
  };
  ABasicBuildingVE.prototype.createStatusIcons = function () {
    if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.UPGRADE_VIEW) && (!this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) || this.showUpgradeableIconInBuildingGroundView()) && this.buildingVO.upgradeAvailable) {
      this.statusIcons.setVisibility(true);
      if (__dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(this.buildingVO, true)) {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UPGRADE_PRIME_SALE);
      } else {
        this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UPGRADE);
      }
    } else if (this.buildingVO.buildingState.isWaitingForServerRequest) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.WAIT);
    } else if (this.buildingVO.buildingState.isInProgress) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PROGRESS_BAR_BUILDING);
    }
    if (this.buildingVO.canShowConstructionHelpIcon()) {
      this.statusIcons.addIcon(__dep_export_IsoStatusIconEnum.IsoStatusIconEnum.CONSTRUCTION_HELP);
    }
  };
  ABasicBuildingVE.prototype.showUpgradeableIconInBuildingGroundView = function () {
    return false;
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.getRingMenuButtons = function () {
    var __s59local0 = [];
    __s59local0.push(new __dep_export_RingMenuButtonInstantBuild.RingMenuButtonInstantBuild());
    __s59local0.push(new __dep_export_RingMenuButtonUpgradeBuilding.RingMenuButtonUpgradeBuilding());
    __s59local0.push(new __dep_export_RingMenuButtonSell.RingMenuButtonSell());
    __s59local0.push(new __dep_export_RingMenuButtonDisassemble.RingMenuButtonDisassemble());
    __s59local0.push(new __dep_export_RingMenuButtonRotate.RingMenuButtonRotate());
    __s59local0.push(new __dep_export_RingMenuButtonRepair.RingMenuButtonRepair());
    __s59local0.push(new __dep_export_RingMenuButtonInfo.RingMenuButtonInfo());
    __s59local0.push(new __dep_export_RingMenuButtonRepairHelpRequest.RingMenuButtonRepairHelpRequest());
    __s59local0.push(new __dep_export_RingMenuButtonConstructionHelpRequest.RingMenuButtonConstructionHelpRequest());
    __s59local0.push(new __dep_export_RingMenuButtonVillage.RingMenuButtonVillage());
    __s59local0.push(new __dep_export_RingMenuButtonDefence.RingMenuButtonDefence());
    __s59local0.push(new __dep_export_RingMenuButtonMove.RingMenuButtonMove());
    __s59local0.push(new __dep_export_RingMenuButtonMinuteSkip.RingMenuButtonMinuteSkip());
    __s59local0.push(new __dep_export_RingMenuButtonEquip.RingMenuButtonEquip());
    __s59local0.push(new __dep_export_RingMenuButtonBuildingDistrictAdd.RingMenuButtonBuildingDistrictAdd());
    __s59local0.push(new __dep_export_RingMenuButtonGeneralsHub.RingMenuButtonGeneralsHub());
    __s59local0.push(new __dep_export_RingMenuButtonGeneralsOverview.RingMenuButtonGeneralsOverview());
    __s59local0.push(new __dep_export_RingMenuButtonGacha.RingMenuButtonGacha());
    if (!__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer) {
      __s59local0.push(new __dep_export_RingMenuButtonStore.RingMenuButtonStore());
    }
    return __s59local0;
  };
  ABasicBuildingVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS;
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "uiDisp", {
    get: function () {
      if (this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && this.buildingVO.isBuildingGroundViewAvailable && !this.hasRingMenu) {
        return this.layers.getLayer(__dep_export_IsoObjectLayerEnum.IsoObjectLayerEnum.BUILDING_GROUND);
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "uiDisp").get.call(this);
      }
    },
    set: function (__s68param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE.prototype, "uiDisp").set.call(this, __s68param0);
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.onAllDispClipsLoaded = function () {
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
    this.invalidateGlowCache();
    if (this._buildingClip && !this._buildingClip.running) {
      this.disp.cacheAsBitmap = true;
    }
  };
  ABasicBuildingVE.prototype.onRenderStrategyChanged = function (__s73param0) {
    this.updateInteractionVisibility();
    this.updateStatusIcon();
    if (__dep_export_Iso.Iso.renderer.strategies.hasModeChanged(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.UPGRADE_VIEW)) {
      this.buildingGroundManager.updateIcon();
    }
  };
  ABasicBuildingVE.prototype.onAllianceHelpUpdated = function (__s76param0) {
    if (__s76param0.requestVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s76param0.requestVO.optionalParams, "AllianceHelpRequestConstructionParamsVO")) {
      var __s76local0 = __s76param0.requestVO.optionalParams;
      if (__s76local0.objectID == this.vo.objectId && __s76local0.areaID == this.isoRenderer.isoData.areaData.areaId && __s76local0.kingdomID == this.isoRenderer.isoData.areaData.areaInfo.kingdomID) {
        this.updateStatusIcon();
      }
    }
  };
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "scaffoldRenderer", {
    get: function () {
      return this._scaffoldRenderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingGroundManager", {
    get: function () {
      return this._buildingGroundManager;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "buildingClip", {
    get: function () {
      return this._buildingClip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVE.prototype, "isCollisionFloorVisible", {
    get: function () {
      return this._isCollisionFloorVisible;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVE.prototype.onSpecialEventUpdated = function (__s90param0) {
    if (__s90param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  return ABasicBuildingVE;
}(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE);
exports.ABasicBuildingVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_RingMenuButtonConstructionHelpRequest = require("gge-module:export_RingMenuButtonConstructionHelpRequest");
var __dep_export_RingMenuButtonDefence = require("gge-module:export_RingMenuButtonDefence");
var __dep_export_RingMenuButtonDisassemble = require("gge-module:export_RingMenuButtonDisassemble");
var __dep_export_RingMenuButtonEquip = require("gge-module:export_RingMenuButtonEquip");
var __dep_export_RingMenuButtonInfo = require("gge-module:export_RingMenuButtonInfo");
var __dep_export_RingMenuButtonInstantBuild = require("gge-module:export_RingMenuButtonInstantBuild");
var __dep_export_RingMenuButtonMinuteSkip = require("gge-module:export_RingMenuButtonMinuteSkip");
var __dep_export_RingMenuButtonMove = require("gge-module:export_RingMenuButtonMove");
var __dep_export_RingMenuButtonRepair = require("gge-module:export_RingMenuButtonRepair");
var __dep_export_RingMenuButtonRepairHelpRequest = require("gge-module:export_RingMenuButtonRepairHelpRequest");
var __dep_export_RingMenuButtonRotate = require("gge-module:export_RingMenuButtonRotate");
var __dep_export_RingMenuButtonSell = require("gge-module:export_RingMenuButtonSell");
var __dep_export_RingMenuButtonStore = require("gge-module:export_RingMenuButtonStore");
var __dep_export_RingMenuButtonUpgradeBuilding = require("gge-module:export_RingMenuButtonUpgradeBuilding");
var __dep_export_RingMenuButtonVillage = require("gge-module:export_RingMenuButtonVillage");
var __dep_export_IsoConst = require("gge-module:export_IsoConst");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");
var __dep_export_IsoBuildingGroundManager = require("gge-module:export_IsoBuildingGroundManager");
var __dep_export_IsoScaffoldRenderer = require("gge-module:export_IsoScaffoldRenderer");
var __dep_export_RingMenuButtonBuildingDistrictAdd = require("gge-module:export_RingMenuButtonBuildingDistrictAdd");
