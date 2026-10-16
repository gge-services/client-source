Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_LaboratoryEvent = require("gge-module:export_LaboratoryEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleEilandPanel = require("gge-module:export_CastleEilandPanel");
var __dep_export_CastleBaseResourcePanel = require("gge-module:export_CastleBaseResourcePanel");
var __dep_export_ResourcePanelBar = require("gge-module:export_ResourcePanelBar");
var __dep_export_ResourcePanelItem = require("gge-module:export_ResourcePanelItem");
var __dep_export_ResourcePanelSublayerButton = require("gge-module:export_ResourcePanelSublayerButton");
var __s0local0 = function (__s1param0) {
  function CastleResourcePanel() {
    var __s3local0 = this;
    __s3local0._specialResourcePanelActiveByPlayer = false;
    __s3local0._specialResourcePanelActiveByState = false;
    __s3local0.lastKingdomID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.ResourcePanel()) || this).eilandPanel = new __dep_export_CastleEilandPanel.CastleEilandPanel(__s3local0.resourcePanel.mc_islandPanel, __s3local0);
    __s3local0.initSpecialResourcePanel();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourcePanel, __s1param0);
  CastleResourcePanel.prototype.initResourceItems = function () {
    this.lawAndOrderBar = new __dep_export_ResourcePanelBar.ResourcePanelBar(new Library.CastleInterfaceElements.ResourcePanelLawAndOrder());
    this.woodContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_WOOD);
    this.woodContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.WOOD;
    this.stoneContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_STONE);
    this.stoneContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.STONE;
    this.foodContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_FOOD);
    this.foodContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.FOOD;
    this.honeyContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_HONEY);
    this.honeyContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.HONEY;
    this.meadContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_MEAD);
    this.meadContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.MEAD;
    this.beefContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_BEEF);
    this.beefContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.BEEF;
    this.unitContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_UNITCOUNT);
    this.aquamarineResourceContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_AQUAMARINE);
    this.aquamarineResourceContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.AQUAMARINE;
    this.specialResourceContainerButton = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_POPULATION);
    this.populationContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_POPULATION);
    this.unitContainer.isBoosted = false;
    this.unitContainer.isStorageBarVisible = false;
    this.setPanelBar(this.lawAndOrderBar);
    this.addResource(this.woodContainer);
    this.addResource(this.stoneContainer);
    this.addResource(this.foodContainer);
    this.addResource(this.unitContainer);
  };
  CastleResourcePanel.prototype.initSpecialResourcePanel = function () {
    this.specialResourcePanel = new __dep_export_CastleSpecialResourcePanel.CastleSpecialResourcePanel(new Library.CastleInterfaceElements.ResourcePanelSpecialResourceSublayer());
    this.specialResourcePanel.disp.visible = false;
    this.resourcePanel.addChild(this.specialResourcePanel.disp);
  };
  CastleResourcePanel.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_CastleHunterData.CastleHunterData.ON_HUNTER_INFO, this.bindFunction(this.onHunterInfo));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryDataUpdate));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoostChanged));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onChangeSlumLevel));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    this.removeResource(this.woodContainer);
    this.removeResource(this.stoneContainer);
    this.removeResource(this.foodContainer);
    this.removeResource(this.meadContainer);
    this.removeResource(this.beefContainer);
    this.removeResource(this.honeyContainer);
    this.removeResource(this.unitContainer);
    this.removeResource(this.specialResourceContainerButton);
    this.setPanelBar(null);
    if (this.populationContainer) {
      this.removeResource(this.populationContainer);
      this.populationContainer.dispose();
    }
    this.woodContainer.dispose();
    this.stoneContainer.dispose();
    this.foodContainer.dispose();
    this.meadContainer.dispose();
    this.beefContainer.dispose();
    this.honeyContainer.dispose();
    this.unitContainer.dispose();
    if (this.specialResourceContainerButton) {
      this.specialResourceContainerButton.dispose();
      this.specialResourceContainerButton = null;
    }
    if (this.aquamarineResourceContainer) {
      this.aquamarineResourceContainer.dispose();
      this.aquamarineResourceContainer = null;
    }
    this.eilandPanel.removeListeners();
    this.specialResourcePanel.hide();
    __s1param0.prototype.destroy.call(this);
  };
  CastleResourcePanel.prototype.checkForSpecialResourceVisibility = function () {
    this._availableSpecialResources = __dep_export_CastleModel.CastleModel.areaData.activeStorage ? __dep_export_CastleModel.CastleModel.areaData.activeStorage.getReceivableSpecialResources() : [];
    var __s14local0 = 3;
    if (this.specialResourceContainerButton) {
      this.removeResource(this.specialResourceContainerButton);
    }
    if (this.aquamarineResourceContainer) {
      this.removeResource(this.aquamarineResourceContainer);
    }
    if (this.honeyContainer) {
      this.removeResource(this.honeyContainer);
    }
    if (this._availableSpecialResources.length > 1 || this.specialResourcePanel.isAvailable()) {
      this.specialResourceContainerButton = __dep_exact_81dacdf05bd32292.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelSublayerButton") ? this.specialResourceContainerButton : new __dep_export_ResourcePanelSublayerButton.ResourcePanelSublayerButton();
      this.specialResourceContainerButton.setResourceBars(this._availableSpecialResources);
      this.addResource(this.specialResourceContainerButton, __s14local0++);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.specialResourceContainerButton.disp);
      this.specialResourcePanel.updateResources();
      this.updateLaboratoryBoostIndicators();
    } else if (this._availableSpecialResources.length == 1) {
      var __s14local1 = __dep_exact_f855840627e6e145.int(this.getSpecialResourceItemFrameForCollectableEnum(this._availableSpecialResources[0]));
      this.specialResourceContainerButton = __dep_exact_81dacdf05bd32292.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelItem") ? this.specialResourceContainerButton : new __dep_export_ResourcePanelItem.ResourcePanelItem(__s14local1);
      this.addResource(this.specialResourceContainerButton, __s14local0++);
      var __s14local2 = this.specialResourceContainerButton;
      __s14local2.setValue(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this._availableSpecialResources[0]).amount);
      __s14local2.setStorageBar(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this._availableSpecialResources[0]).filledInPercent);
      __s14local2.isBoosted = false;
      __s14local2.resourceType = this._availableSpecialResources[0];
      __s14local2.iconFrame = __s14local1;
      this.updateLaboratoryBoostIndicators();
    } else {
      this.populationContainer.isBoosted = false;
      this.populationContainer.isStorageBarVisible = false;
      this.addResource(this.populationContainer);
    }
    if (__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      this.addResource(this.aquamarineResourceContainer, __s14local0++);
      var __s14local3 = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getSpecialItem();
      this.aquamarineResourceContainer.setValue(__s14local3.amount);
      this.aquamarineResourceContainer.setStorageBar(__s14local3.filledInPercent);
      this.aquamarineResourceContainer.isBoosted = false;
    } else {
      if (__dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
        if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
          this.addResource(this.honeyContainer, __s14local0++);
          var __s14local4 = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getItem(__dep_export_CollectableEnum.CollectableEnum.HONEY);
          this.honeyContainer.setValue(__s14local4.amount);
          this.honeyContainer.setStorageBar(__s14local4.filledInPercent);
        }
        this.addResource(this.meadContainer, __s14local0++);
        __s14local3 = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getItem(__dep_export_CollectableEnum.CollectableEnum.MEAD);
        this.meadContainer.setValue(__s14local3.amount);
        this.meadContainer.setStorageBar(__s14local3.filledInPercent);
      }
      if (__dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minBeefLegendLevel) {
        this.addResource(this.beefContainer, __s14local0++);
        __s14local3 = __dep_export_CastleModel.CastleModel.areaData.activeStorage.getItem(__dep_export_CollectableEnum.CollectableEnum.BEEF);
        this.beefContainer.setValue(__s14local3.amount);
        this.beefContainer.setStorageBar(__s14local3.filledInPercent);
      }
    }
    this.updateCache();
  };
  CastleResourcePanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.kingdomOverlayFrame = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID;
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
      this.kingdomOverlayFrame = 1;
    }
    this.onChangeResources();
    this.onChangeCastleParameters();
    this.onMilitaryDataUpdate();
    this.controller.addEventListener(__dep_export_CastleHunterData.CastleHunterData.ON_HUNTER_INFO, this.bindFunction(this.onHunterInfo));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryDataUpdate));
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoostChanged));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onShowRingMenu));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onHideRingMenu));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onIsoModeChange));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onLaboratoryChange));
    this.controller.addEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED, this.bindFunction(this.onLaboratoryChange));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    if (__dep_export_CastleModel.CastleModel.areaData.activeSlum) {
      this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onChangeSlumLevel));
    }
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.eilandPanel.initIslandPanel();
    if (this.lastKingdomID != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
      this.lastKingdomID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (this.lastKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
        this._specialResourcePanelActiveByPlayer = false;
      }
    }
    this.updateEilandAndSpecialResourcePanel();
    this.allowCaching = true;
  };
  CastleResourcePanel.prototype.onLaboratoryChange = function (__s33param0) {
    this.updateLaboratoryBoostIndicators();
    this.updateCache();
  };
  CastleResourcePanel.prototype.onDowntimeStatusUpdated = function (__s35param0) {
    this.onChangeResources(null);
    this.onHunterInfo(null);
    this.updateCache();
  };
  CastleResourcePanel.prototype.updateLaboratoryBoostIndicators = function () {
    if (this.specialResourceContainerButton.isResourceContainer) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelItem")) {
        var __s37local0 = this.specialResourceContainerButton;
        var __s37local1 = this.hasLaboratoryBoostFor(__s37local0.resourceType);
        __s37local0.setBoostIndicator(__s37local1, __s37local1);
      }
    } else {
      this.specialResourcePanel.updateBoostIndicators();
    }
  };
  CastleResourcePanel.prototype.onIsoModeChange = function (__s42param0) {
    if (__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isInNormalMode) {
      this.onHideRingMenu();
    } else {
      this.onShowRingMenu();
    }
  };
  CastleResourcePanel.prototype.onHideRingMenu = function (__s46param0 = null) {
    if (__dep_export_Iso.Iso.renderer && !__dep_export_Iso.Iso.renderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE)) {
      this._specialResourcePanelActiveByState = false;
    }
    this.updateEilandAndSpecialResourcePanel();
  };
  CastleResourcePanel.prototype.updateEilandAndSpecialResourcePanel = function () {
    __dep_exact_608de47b6498f9b0.TweenLite.killTweensOf(this.eilandPanel.panel);
    __dep_exact_608de47b6498f9b0.TweenLite.killTweensOf(this.specialResourcePanel.specialResourcePanel);
    if (this.specialResourcePanel.isAvailable() && (this._specialResourcePanelActiveByPlayer || this._specialResourcePanelActiveByState)) {
      if (this.eilandPanel.panel.visible) {
        this.fadeOutSubPanel(this.eilandPanel.panel, false);
        this.fadeInSubPanel(this.specialResourcePanel.specialResourcePanel, true);
        this.eilandPanel.removeListeners();
      } else {
        this.fadeInSubPanel(this.specialResourcePanel.specialResourcePanel, false);
      }
      this.specialResourcePanel.show();
      this.controller.dispatchEvent(new __dep_export_CastlePanelEvent.CastlePanelEvent(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_SHOW_SPECIAL_RESOURCES));
    } else if (this.eilandPanel.isAvailable()) {
      if (this.specialResourcePanel.isVisible()) {
        this.fadeOutSubPanel(this.specialResourcePanel.specialResourcePanel, false);
        this.fadeInSubPanel(this.eilandPanel.panel, true);
      } else {
        this.fadeInSubPanel(this.eilandPanel.panel, false);
      }
      this.eilandPanel.addListeners();
    } else {
      this.fadeOutSubPanel(this.specialResourcePanel.specialResourcePanel, false);
      this.fadeOutSubPanel(this.eilandPanel.panel, false);
      this.eilandPanel.removeListeners();
      this.controller.dispatchEvent(new __dep_export_CastlePanelEvent.CastlePanelEvent(__dep_export_CastlePanelEvent.CastlePanelEvent.RESOURCE_PANEL_HIDE_SPECIAL_RESOURCES));
    }
    this.updateCache();
  };
  CastleResourcePanel.prototype.onShowRingMenu = function (__s58param0 = null) {
    this._specialResourcePanelActiveByState = true;
    this.updateEilandAndSpecialResourcePanel();
  };
  CastleResourcePanel.prototype.onLevelUp = function (__s60param0) {
    this.checkForSpecialResourceVisibility();
  };
  CastleResourcePanel.prototype.onHunterInfo = function (__s62param0) {
    var __s62local0 = __dep_export_CastleModel.CastleModel.hunterData.isBoosted;
    this.woodContainer.setBoostIndicator(__s62local0, false);
    this.stoneContainer.setBoostIndicator(__s62local0, false);
    this.foodContainer.setBoostIndicator(__s62local0 && !this.foodFrozen(), true);
    this.updateCache();
  };
  CastleResourcePanel.prototype.onChangeSlumLevel = function (__s64param0) {
    this.checkForSpecialResourceVisibility();
  };
  CastleResourcePanel.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleHunterData.CastleHunterData.ON_HUNTER_INFO, this.bindFunction(this.onHunterInfo));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryDataUpdate));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoostChanged));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onChangeSlumLevel));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onIsoModeChange));
    this.removeResource(this.specialResourceContainerButton);
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onShowRingMenu));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(__dep_export_LaboratoryEvent.LaboratoryEvent.LABORATORIES_ALLIANCE_UPDATED, this.bindFunction(this.onLaboratoryChange));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onHideRingMenu));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
    this.eilandPanel.removeListeners();
    this.eilandPanel.panel.visible = false;
    this.specialResourcePanel.hide();
    __s1param0.prototype.hide.call(this);
  };
  CastleResourcePanel.prototype.onBoostChanged = function (__s68param0 = null) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea) {
      this.onChangeResources();
    }
  };
  CastleResourcePanel.prototype.onMilitaryDataUpdate = function (__s71param0 = null) {
    this.unitContainer.setValue(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getSoldierCount() + __dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getSoldierCount());
    this.updateCache();
  };
  CastleResourcePanel.prototype.onChangeResources = function (__s73param0 = null) {
    CastleResourcePanel.initResourceContainer(this.woodContainer, __dep_export_CollectableEnum.CollectableEnum.WOOD);
    CastleResourcePanel.initResourceContainer(this.stoneContainer, __dep_export_CollectableEnum.CollectableEnum.STONE);
    CastleResourcePanel.initResourceContainer(this.foodContainer, __dep_export_CollectableEnum.CollectableEnum.FOOD);
    CastleResourcePanel.initResourceContainer(this.meadContainer, __dep_export_CollectableEnum.CollectableEnum.MEAD);
    CastleResourcePanel.initResourceContainer(this.beefContainer, __dep_export_CollectableEnum.CollectableEnum.BEEF);
    CastleResourcePanel.initResourceContainer(this.honeyContainer, __dep_export_CollectableEnum.CollectableEnum.HONEY);
    this.checkForSpecialResourceVisibility();
    this.foodContainer.iconFrame = this.foodFrozen() ? __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_FOOD_FROZEN : __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_FOOD;
    this.meadContainer.iconFrame = this.foodFrozen() ? __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_MEAD_FROZEN : __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_MEAD;
    this.beefContainer.iconFrame = this.foodFrozen() ? __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_BEEF_FROZEN : __dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_BEEF;
    if (this.foodFrozen()) {
      this.foodContainer.setFrozen();
      this.meadContainer.setFrozen();
      this.beefContainer.setFrozen();
    } else {
      this.foodContainer.displayObject.bg.gotoAndStop(1);
      this.meadContainer.displayObject.bg.gotoAndStop(1);
      this.beefContainer.displayObject.bg.gotoAndStop(1);
      this.foodContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction < 0;
      this.honeyContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.honeyProduction < 0;
      this.meadContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction < 0;
      this.beefContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction < 0;
    }
  };
  CastleResourcePanel.initResourceContainer = function (__s77param0, __s77param1) {
    var __s77local0 = __dep_export_CastleModel.CastleModel.boostData.getOverseer(__s77param1);
    __s77param0.isBoosted = !!__s77local0 && __s77local0.isActive;
    var __s77local1 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s77param1);
    if (__s77local1) {
      __s77param0.setValue(__s77local1.amount);
      __s77param0.setStorageBar(__s77local1.filledInPercent);
    }
  };
  CastleResourcePanel.prototype.onChangeCastleParameters = function (__s80param0 = null) {
    var __s80local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor();
    if (__s80local0 > 1) {
      this.lawAndOrderBar.setValue(__s80local0 * 0.5);
    } else {
      this.lawAndOrderBar.setValue((__s80local0 - 0.5) * 2 * 0.5);
    }
    if (this.populationContainer) {
      this.populationContainer.setValue(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.population);
    }
    this.onChangeResources();
  };
  CastleResourcePanel.prototype.updateElementsPositions = function () {
    __s1param0.prototype.updateElementsPositions.call(this);
    if (this.specialResourceContainerButton && __dep_exact_81dacdf05bd32292.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelSublayerButton")) {
      this.specialResourcePanel.disp.x = this.specialResourceContainerButton.disp.x;
      this.specialResourcePanel.disp.y = this.specialResourceContainerButton.disp.y + this.specialResourceContainerButton.disp.height / 2 + 5;
    }
  };
  CastleResourcePanel.prototype.onMouseOver = function (__s88param0) {
    __s1param0.prototype.onMouseOver.call(this, __s88param0);
    switch (__s88param0.target) {
      case this.woodContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD, this.woodContainer.disp);
        break;
      case this.populationContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION, this.populationContainer.disp);
        break;
      case this.stoneContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE, this.stoneContainer.disp);
        break;
      case this.specialResourceContainerButton.disp:
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelItem")) {
          var __s88local0 = this.specialResourceContainerButton.resourceType;
          if (__s88local0) {
            this.showToolTip(this.getToolTipTypeForCollectableEnum(__s88local0), this.specialResourceContainerButton.disp);
          }
        } else if (!this.specialResourcePanel.isVisible()) {
          this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON, this.specialResourceContainerButton.disp);
        }
        break;
      case this.aquamarineResourceContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE, this.aquamarineResourceContainer.disp);
        break;
      case this.foodContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD, this.foodContainer.disp);
        break;
      case this.meadContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD, this.meadContainer.disp);
        break;
      case this.beefContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF, this.beefContainer.disp);
        break;
      case this.honeyContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY, this.honeyContainer.disp);
        break;
      case this.unitContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY, this.unitContainer.disp);
        break;
      case this.lawAndOrderBar.disp:
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_LAW_AND_ORDER, this.lawAndOrderBar.disp);
    }
  };
  CastleResourcePanel.prototype.onMouseOut = function (__s94param0) {
    __s1param0.prototype.onMouseOut.call(this, __s94param0);
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
  };
  CastleResourcePanel.prototype.onClick = function (__s96param0) {
    if (__s96param0.target == this.lawAndOrderBar.disp && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PUBLIC_ORDER) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [__dep_export_ClientConstCastle.ClientConstCastle.TIP_PRODUCTIVITY]);
    }
    if (__s96param0.target == this.specialResourceContainerButton.disp && __dep_exact_81dacdf05bd32292.instanceOfClass(this.specialResourceContainerButton, "ResourcePanelSublayerButton")) {
      this._specialResourcePanelActiveByPlayer = !this._specialResourcePanelActiveByState && !this._specialResourcePanelActiveByPlayer;
      this._specialResourcePanelActiveByState = false;
      this.updateEilandAndSpecialResourcePanel();
    }
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s96param0)) {
      __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
      this.onMouseOver(__s96param0);
    }
  };
  CastleResourcePanel.prototype.fadeInSubPanel = function (__s101param0, __s101param1) {
    __s101param0.alpha = __s101param0.visible ? __s101param0.alpha : 0;
    var __s101local0 = __s101param1 ? CastleResourcePanel.FADE_DELAY : 0;
    __dep_exact_608de47b6498f9b0.TweenLite.to(__s101param0, CastleResourcePanel.FADE_DELAY, {
      autoAlpha: 1,
      delay: __s101local0,
      onUpdate: this.bindFunction(this.onFadeUpdate)
    });
  };
  CastleResourcePanel.prototype.fadeOutSubPanel = function (__s103param0, __s103param1) {
    if (__s103param0.visible) {
      var __s103local0 = __s103param1 ? CastleResourcePanel.FADE_DELAY : 0;
      __dep_exact_608de47b6498f9b0.TweenLite.to(__s103param0, CastleResourcePanel.FADE_DELAY, {
        autoAlpha: 0,
        delay: __s103local0,
        onUpdate: this.bindFunction(this.onFadeUpdate)
      });
    }
  };
  CastleResourcePanel.prototype.onFadeUpdate = function () {
    this.updateCache();
  };
  CastleResourcePanel.prototype.foodFrozen = function () {
    return __dep_export_CastleModel.CastleModel.userData.foodFrozen;
  };
  CastleResourcePanel.NAME = "CastleResourcePanel";
  CastleResourcePanel.FADE_DELAY = 0.3;
  return CastleResourcePanel;
}(__dep_export_CastleBaseResourcePanel.CastleBaseResourcePanel);
exports.CastleResourcePanel = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleHunterData = require("gge-module:export_CastleHunterData");
var __dep_export_CastleSpecialResourcePanel = require("gge-module:export_CastleSpecialResourcePanel");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
