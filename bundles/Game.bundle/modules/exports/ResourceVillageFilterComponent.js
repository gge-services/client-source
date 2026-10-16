Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstKingdom = require("gge-module:export_ClientConstKingdom");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ComboboxItemRendererCastleListVillages = require("gge-module:export_ComboboxItemRendererCastleListVillages");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ResourceVillageFilterComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentKingdomID = 0;
    __s3local0._currentVillageType = 0;
    __s3local0._villageTypeChangeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._kingdomChangeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).kingdomCrestComponent = __s3param0.mc_kingdomCrest;
    __s3local0.kingdomSelectorComponent = new __dep_export_CastleSelectorComponent.CastleSelectorComponent(__s3param0.mc_castleSelector, 7, "", 1, 20, 25, __dep_export_ComboboxItemRendererCastleListVillages.ComboboxItemRendererCastleListVillages, 5);
    __s3local0.itxt_villageCount = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_villageCount.txt_villageCount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    __s3local0.itxt_tokensCount = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.mc_tokensCount.txt_tokensCount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    __s3local0._villageTypeTabs = [];
    __s3param0.mc_tokensCount.toolTipText = "currency_name_ResourceVillageToken";
    __s3param0.mc_villageCount.mouseChildren = false;
    __s3param0.mc_tokensCount.mouseChildren = false;
    __s3param0.mc_kingdomCrest.mouseChildren = false;
    for (var __s3local1 = 0; __s3local1 < ResourceVillageFilterComponent.VILLAGE_TYPES.length; __s3local1++) {
      var __s3local2 = __s3param0[ResourceVillageFilterComponent.TAB_NAME + __s3local1];
      if (__s3local2) {
        __s3local0._villageTypeTabs.push(__s3local2);
        __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local2);
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceVillageFilterComponent, __s1param0);
  ResourceVillageFilterComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    var __s8local0 = [];
    for (var __s8local1 = 0, __s8local2 = Array.from(__dep_export_CastleModel.CastleModel.kingdomData.kingdomVOs.values()); __s8local1 < __s8local2.length; __s8local1++) {
      var __s8local3 = __s8local2[__s8local1];
      if (__s8local3 !== undefined) {
        if (!__s8local3.hasAccessToPrivateResourceVillages()) {
          __s8local0.push(__s8local3.kID);
        }
      }
    }
    var __s8local4 = this.getComboboxEnableData();
    this.kingdomSelectorComponent.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __dep_export_CastleModel.CastleModel.userData.castleList, __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(this._currentKingdomID), __s8local0, -1, __s8local4[0], __s8local4[1], [__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CASTLE, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGDOM_CASTLE]);
    this.kingdomSelectorComponent.show();
    this.setCurrentKingdom(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    this.setVillageType(this._availableVillageTypes[0]);
    this.updateVillageTokens();
    this.updateKingdomCrest();
    this.kingdomSelectorComponent.changeSelectedCastle(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo);
    this.kingdomSelectorComponent.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f_3.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyUpdate));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onVillageListUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
  };
  ResourceVillageFilterComponent.prototype.getComboboxEnableData = function () {
    var __s14local0 = __dep_export_CastleModel.CastleModel.userData.castleList.list;
    var __s14local1 = [];
    var __s14local2 = [];
    if (__s14local0 != null) {
      for (var __s14local3 = 0, __s14local4 = __s14local0; __s14local3 < __s14local4.length; __s14local3++) {
        var __s14local5 = __s14local4[__s14local3];
        if (__s14local5 !== undefined) {
          if (__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s14local5.kingdomID).hasContor) {
            __s14local1.push(true);
            __s14local2.push(null);
          } else {
            __s14local1.push(false);
            __s14local2.push("dialog_privateResourceVillages_noWarehouse_info");
          }
        }
      }
    }
    return [__s14local1, __s14local2];
  };
  ResourceVillageFilterComponent.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.kingdomSelectorComponent.hide();
    this.kingdomSelectorComponent.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f_3.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onVillageListUpdate));
  };
  ResourceVillageFilterComponent.prototype.onVillageListUpdate = function (__s24param0) {
    this.updateVillageCount();
  };
  ResourceVillageFilterComponent.prototype.onSelectCastle = function (__s26param0) {
    var __s26local0 = this.kingdomSelectorComponent.castleList.selectedData;
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s26local0);
    __dep_export_CastleComponent.CastleComponent.layoutManager.dialogCastleSwitch = true;
  };
  ResourceVillageFilterComponent.prototype.onCastleChanged = function (__s28param0) {
    this.kingdomSelectorComponent.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f_3.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this.kingdomSelectorComponent.changeSelectedCastle(this.kingdomSelectorComponent.getCastleByKingdom(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID));
    this.kingdomSelectorComponent.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f_3.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    var __s28local0 = __dep_exact_f855840627e6e145.int(this.kingdomSelectorComponent.castleList.selectedData.kingdomID);
    this.setCurrentKingdom(__s28local0);
    this.updateVillageCount();
  };
  ResourceVillageFilterComponent.prototype.onSpecialCurrencyUpdate = function (__s30param0) {
    this.updateVillageTokens();
    this._villageTypeChangeSignal.dispatch();
  };
  ResourceVillageFilterComponent.prototype.updateTabs = function () {
    for (var __s32local0 = 0; __s32local0 < this._villageTypeTabs.length; __s32local0++) {
      var __s32local1 = this._villageTypeTabs[__s32local0];
      if (__s32local0 < this._availableVillageTypes.length) {
        __s32local1.visible = true;
        __s32local1.toolTipText = ResourceVillageFilterComponent.TAB_TOOLTIPS[ResourceVillageFilterComponent.VILLAGE_TYPES.indexOf(this._availableVillageTypes[__s32local0])];
        __s32local1.mc_icon.gotoAndStop(ResourceVillageFilterComponent.VILLAGE_TYPES.indexOf(this._availableVillageTypes[__s32local0]) + 1);
        __s32local1.gotoAndStop(this._currentVillageType == this._availableVillageTypes[__s32local0] ? 2 : 1);
        __s32local1.mc_icon.x = this._currentVillageType == this._availableVillageTypes[__s32local0] ? ResourceVillageFilterComponent.TAB_SELECTED_ICON_X : 0;
      } else {
        __s32local1.visible = false;
      }
    }
    if (this._availableVillageTypes.indexOf(this._currentVillageType) == -1) {
      this.setVillageType(this._availableVillageTypes[0]);
    }
  };
  ResourceVillageFilterComponent.prototype.updateVillageCount = function () {
    var __s39local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.villageList.getCountByRessourceType(this._currentKingdomID, this.currentTypeName));
    this.disp.mc_villageCount.toolTipText = "dialog_privateResourceVillages_villageCounter_" + __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(this._currentVillageType).toLowerCase() + "_tt";
    var __s39local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._currentKingdomID).getVillageCapByType(this._currentVillageType));
    this.itxt_villageCount.textContentVO.textReplacements = [__s39local0, __s39local1];
    if (this.disp.mc_villageCount.mc_villageHolder) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_villageCount.mc_villageHolder);
      __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.renderVillage(this._currentVillageType, this.disp.mc_villageCount.mc_villageHolder, 44.45, 33.65);
    }
  };
  ResourceVillageFilterComponent.prototype.updateVillageTokens = function () {
    this.itxt_tokensCount.textContentVO.numberValue = __dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RESOURCE_VILLAGE_TOKEN)));
  };
  ResourceVillageFilterComponent.prototype.updateKingdomCrest = function () {
    this.kingdomCrestComponent.gotoAndStop(this._currentKingdomID + 1);
    this.kingdomCrestComponent.toolTipText = this.getKingdomCrestTooltip(this._currentKingdomID);
  };
  ResourceVillageFilterComponent.prototype.getKingdomCrestTooltip = function (__s46param0) {
    switch (__s46param0) {
      case __dep_exact_26a421b704832cff_1.WorldIce.KINGDOM_ID:
        return "kingdomName_Icecream";
      case __dep_exact_26a421b704832cff_5.WorldDessert.KINGDOM_ID:
        return "kingdomName_Dessert";
      case __dep_exact_26a421b704832cff_3.WorldVolcano.KINGDOM_ID:
        return "kingdomName_Volcano";
      case __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID:
        return "kingdomName_Eiland";
      case __dep_exact_26a421b704832cff_4.FactionConst.KINGDOM_ID:
        return "kingdomName_Faction";
    }
    return "kingdomName_Classic";
  };
  ResourceVillageFilterComponent.prototype.setVillageType = function (__s49param0) {
    this._currentVillageType = __s49param0;
    this.updateTabs();
    this.updateVillageCount();
    this._villageTypeChangeSignal.dispatch();
  };
  ResourceVillageFilterComponent.prototype.setCurrentKingdom = function (__s51param0) {
    this._currentKingdomID = __s51param0;
    this._availableVillageTypes = this.getAvailableVillageTypesByKingdomID(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    this.updateTabs();
    this.updateVillageCount();
    this.updateKingdomCrest();
    this._kingdomChangeSignal.dispatch();
  };
  ResourceVillageFilterComponent.prototype.onClick = function (__s53param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s53param0.target)) {
      var __s53local0 = __dep_exact_f855840627e6e145.int(this._villageTypeTabs.indexOf(__s53param0.target));
      if (__s53local0 > -1) {
        this.setVillageType(this._availableVillageTypes[__s53local0]);
      }
    }
  };
  ResourceVillageFilterComponent.prototype.getAvailableVillageTypesByKingdomID = function (__s57param0) {
    var __s57local0 = [];
    if (ResourceVillageFilterComponent.VILLAGE_TYPES != null) {
      for (var __s57local1 = 0, __s57local2 = ResourceVillageFilterComponent.VILLAGE_TYPES; __s57local1 < __s57local2.length; __s57local1++) {
        var __s57local3 = __s57local2[__s57local1];
        if (__s57local3 !== undefined && __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s57param0).isVillageTypeAvailable(__s57local3)) {
          __s57local0.push(__s57local3);
        }
      }
    }
    return __s57local0;
  };
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "currentTypeName", {
    get: function () {
      return __dep_export_ClientConstKingdom.ClientConstKingdom.getVillageTypeName(this._currentVillageType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "currentKingdomID", {
    get: function () {
      return this._currentKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "currentVillageType", {
    get: function () {
      return this._currentVillageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "villageTypeChangeSignal", {
    get: function () {
      return this._villageTypeChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "kingdomChangeSignal", {
    get: function () {
      return this._kingdomChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  ResourceVillageFilterComponent.VILLAGE_TYPES = [__dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_WOOD, __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_STONE, __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_FOOD, __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_COAL, __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_OIL, __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_GLASS, __dep_exact_26a421b704832cff_2.WorldConst.VILLAGE_TYPE_IRON];
  ResourceVillageFilterComponent.TAB_TOOLTIPS = ["dialog_privateResourceVillages_tab_wood_tt", "dialog_privateResourceVillages_tab_stone_tt", "dialog_privateResourceVillages_tab_food_tt", "dialog_privateResourceVillages_tab_coal_tt", "dialog_privateResourceVillages_tab_oil_tt", "dialog_privateResourceVillages_tab_glass_tt", "dialog_privateResourceVillages_tab_iron_tt"];
  ResourceVillageFilterComponent.TAB_NAME = "tab_";
  ResourceVillageFilterComponent.TAB_SELECTED_ICON_X = 5;
  return ResourceVillageFilterComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ResourceVillageFilterComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_CastlePrivateResourceVillageRenderHelper = require("gge-module:export_CastlePrivateResourceVillageRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
