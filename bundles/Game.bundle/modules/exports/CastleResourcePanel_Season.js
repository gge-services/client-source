Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBaseResourcePanel = require("gge-module:export_CastleBaseResourcePanel");
var __dep_export_ResourcePanelBar = require("gge-module:export_ResourcePanelBar");
var __dep_export_ResourcePanelItem = require("gge-module:export_ResourcePanelItem");
var __s0local0 = function (__s1param0) {
  function CastleResourcePanel_Season() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.ResourcePanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleResourcePanel_Season, __s1param0);
  CastleResourcePanel_Season.prototype.initResourceItems = function () {
    this._moralBar = new __dep_export_ResourcePanelBar.ResourcePanelBar(new Library.CastleInterfaceElements.ResourcePanelMoral());
    this._woodContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_WOOD);
    this._stoneContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_STONE);
    this._foodContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_FOOD);
    this._meadContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_MEAD);
    this._meadContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.MEAD;
    this._beefContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_BEEF);
    this._beefContainer.resourceType = __dep_export_CollectableEnum.CollectableEnum.BEEF;
    this._unitContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_UNITCOUNT);
    this._auxUnitsContainer = new __dep_export_ResourcePanelItem.ResourcePanelItem(__dep_export_ResourcePanelItem.ResourcePanelItem.ICON_FRAME_AUXCOUNT);
    this._unitContainer.isBoosted = false;
    this._unitContainer.isStorageBarVisible = false;
    this._auxUnitsContainer.isBoosted = false;
    this._auxUnitsContainer.isStorageBarVisible = false;
    this._woodContainer.isBoosted = false;
    this._stoneContainer.isBoosted = false;
    this._foodContainer.isBoosted = false;
    this._meadContainer.isBoosted = false;
    this._beefContainer.isBoosted = false;
    this.setPanelBar(this._moralBar);
    this.addResource(this._woodContainer);
    this.addResource(this._stoneContainer);
    this.addResource(this._foodContainer);
    this.addResource(this._unitContainer);
  };
  CastleResourcePanel_Season.prototype.destroy = function () {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onSomethingChanged));
    this.removeResource(this._woodContainer);
    this.removeResource(this._stoneContainer);
    this.removeResource(this._foodContainer);
    this.removeResource(this._meadContainer);
    this.removeResource(this._beefContainer);
    this.removeResource(this._unitContainer);
    this.removeResource(this._auxUnitsContainer);
    this.setPanelBar(null);
    this._woodContainer.dispose();
    this._stoneContainer.dispose();
    this._foodContainer.dispose();
    this._meadContainer.dispose();
    this._beefContainer.dispose();
    this._unitContainer.dispose();
    this._auxUnitsContainer.dispose();
    __s1param0.prototype.destroy.call(this);
  };
  CastleResourcePanel_Season.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onSomethingChanged));
    this.onSomethingChanged();
    this.checkForAuxResourcePanel();
    this.checkForMeadAndBeefResourcePanel();
    this.allowCaching = true;
  };
  CastleResourcePanel_Season.prototype.checkForAuxResourcePanel = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp) {
      this.addResource(this._auxUnitsContainer);
    } else {
      this.removeResource(this._auxUnitsContainer);
    }
  };
  CastleResourcePanel_Season.prototype.checkForMeadAndBeefResourcePanel = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
    var __s15local1 = 3;
    if (__s15local0 && __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
      this.addResource(this._meadContainer, __s15local1++);
    } else {
      this.removeResource(this._meadContainer);
    }
    if (__s15local0 && __dep_export_CastleModel.CastleModel.userData.userLegendLevel >= __dep_export_CastleModel.CastleModel.areaData.activeStorage.minBeefLegendLevel) {
      this.addResource(this._beefContainer, __s15local1);
    } else {
      this.removeResource(this._beefContainer);
    }
  };
  CastleResourcePanel_Season.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onSomethingChanged));
    __s1param0.prototype.hide.call(this);
  };
  CastleResourcePanel_Season.prototype.onSomethingChanged = function (__s23param0 = null) {
    CastleResourcePanel_Season.initResourceContainer(this._woodContainer, __dep_export_CollectableEnum.CollectableEnum.WOOD);
    CastleResourcePanel_Season.initResourceContainer(this._foodContainer, __dep_export_CollectableEnum.CollectableEnum.FOOD);
    CastleResourcePanel_Season.initResourceContainer(this._stoneContainer, __dep_export_CollectableEnum.CollectableEnum.STONE);
    this._foodContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction < 0;
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      CastleResourcePanel_Season.initResourceContainer(this._meadContainer, __dep_export_CollectableEnum.CollectableEnum.MEAD);
      CastleResourcePanel_Season.initResourceContainer(this._beefContainer, __dep_export_CollectableEnum.CollectableEnum.BEEF);
      this._meadContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction < 0;
      this._beefContainer.isValueRed = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction < 0;
    }
    var __s23local0 = 0;
    var __s23local1 = 0;
    if (__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType == __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO) {
        __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory.getSoldierCount());
      }
    } else {
      __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCount(CastleResourcePanel_Season.onlyNonAuxiliarySoldiers));
      __s23local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCount(CastleResourcePanel_Season.onlyAuxiliaries));
    }
    var __s23local2 = __dep_export_CastleModel.CastleModel.areaData.activeMorality;
    if (__s23local2) {
      this._unitContainer.setValue(Math.max(0, __s23local0));
      this._unitContainer.isValueRed = __s23local0 >= __s23local2.maxUnitStorage;
      this._unitContainer.setStorageBar(Math.min(__s23local0 / Math.min(__s23local2.maxUnitStorage, 1), 1));
      var __s23local3 = __s23local2.maxUnitStorage;
      if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp) {
        __s23local3 = __s23local2.maxAuxiliariesStorage;
      }
      this._auxUnitsContainer.setValue(__s23local1);
      this._auxUnitsContainer.isValueRed = __s23local1 >= __s23local3;
      this._auxUnitsContainer.setStorageBar(Math.min(__s23local1 / Math.min(__s23local2.maxUnitStorage, 1), 1));
      this._moralBar.setValue(this.getCalculateMoralityFactor);
      this.updateCache();
    }
  };
  CastleResourcePanel_Season.initResourceContainer = function (__s31param0, __s31param1) {
    __s31param0.setValue(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s31param1).amount);
    __s31param0.setStorageBar(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s31param1).filledInPercent);
  };
  CastleResourcePanel_Season.onlyAuxiliaries = function (__s33param0) {
    return __s33param0.unitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS && __s33param0.isAuxiliary;
  };
  CastleResourcePanel_Season.onlyNonAuxiliarySoldiers = function (__s35param0) {
    return __s35param0.unitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS && !__s35param0.isAuxiliary;
  };
  Object.defineProperty(CastleResourcePanel_Season.prototype, "getCalculateMoralityFactor", {
    get: function () {
      return this.morality * 0.5;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcePanel_Season.prototype, "morality", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        return __dep_exact_26a421b704832cff_1.FactionConst.getMoraleModifier(__dep_export_CastleModel.CastleModel.areaData.activeMorality.morality);
      } else {
        return __dep_exact_26a421b704832cff.CombatConst.getMoralBonus(__dep_export_CastleModel.CastleModel.areaData.activeMorality.morality);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResourcePanel_Season.prototype.onMouseOver = function (__s43param0) {
    switch (__s43param0.target) {
      case this._woodContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD, this._woodContainer.disp);
        break;
      case this._stoneContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE, this._stoneContainer.disp);
        break;
      case this._foodContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD, this._foodContainer.disp);
        break;
      case this._meadContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_MEAD, this._meadContainer.disp);
        break;
      case this._beefContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_BEEF, this._beefContainer.disp);
        break;
      case this._unitContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MILITARY, this._unitContainer.disp);
        break;
      case this._auxUnitsContainer.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_AUXILIARIES, this._auxUnitsContainer.disp);
        break;
      case this._moralBar.disp:
        this.showToolTip(__dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.TOOL_TIP_TYPE_SEASON_MORALE, this._moralBar.disp);
    }
  };
  CastleResourcePanel_Season.prototype.onMouseOut = function (__s46param0) {
    __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
  };
  CastleResourcePanel_Season.prototype.onClick = function (__s48param0) {
    __s1param0.prototype.onClick.call(this, __s48param0);
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s48param0)) {
      __dep_export_ResourcePanelToolTipManager.ResourcePanelToolTipManager.hideAllToolTips();
      this.onMouseOver(__s48param0);
    }
  };
  CastleResourcePanel_Season.__initialize_static_members = function () {
    CastleResourcePanel_Season.NAME = "CastleResourcePanel_Season";
  };
  return CastleResourcePanel_Season;
}(__dep_export_CastleBaseResourcePanel.CastleBaseResourcePanel);
exports.CastleResourcePanel_Season = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ResourcePanelToolTipManager = require("gge-module:export_ResourcePanelToolTipManager");
__s0local0.__initialize_static_members();
