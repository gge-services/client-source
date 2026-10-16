Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function ConstructionItemsHelper() {}
  Object.defineProperty(ConstructionItemsHelper, "hasConstructorBuilding", {
    get: function () {
      return !!__dep_export_Iso.Iso.data && __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.CONSTRUCTOR);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsHelper.hasConstructorForSlot = function (__s7param0) {
    var __s7local0 = 0;
    if (ConstructionItemsHelper.hasConstructorBuilding) {
      __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.CONSTRUCTOR).level);
    }
    return __s7local0 >= ConstructionItemsHelper.getMinimumConstructorLevelForSlot(__s7param0);
  };
  ConstructionItemsHelper.getMinimumConstructorLevelForSlot = function (__s10param0) {
    if (__s10param0.slotType == __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE && __s10param0.index == 1) {
      return 2;
    } else {
      return 1;
    }
  };
  ConstructionItemsHelper.handleSlotClickLocked = function (__s14param0) {
    if (ConstructionItemsHelper.hasConstructorBuilding) {
      if (!ConstructionItemsHelper.hasConstructorForSlot(__s14param0)) {
        var __s14local0 = __dep_exact_f855840627e6e145.int(__dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.CONSTRUCTOR).objectId);
        var __s14local1 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectById(__s14local0);
        if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s14local1, "BasicMoatVE") && !__dep_exact_81dacdf05bd32292.instanceOfClass(__s14local1, "PremiumMoatVE")) {
          __dep_export_Iso.Iso.renderer.camera.scrollToGridPos(__s14local1.vo.pos);
        }
        ConstructionItemsHelper.layoutManager.hideAllDialogs();
        __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s14local1);
      }
    } else {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var __s14local2 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__dep_export_ClientConstCastle.ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_LEVEL1);
      ConstructionItemsHelper.layoutManager.getPanel(__dep_export_CastleDecoShopPanel.CastleDecoShopPanel).centerAndHighlightBuildingInShop(__s14local2);
    }
  };
  ConstructionItemsHelper.getSlotNameTextId = function (__s20param0) {
    if (__s20param0 == __dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS) {
      return "dialog_ci_assign_inventory_tab_all";
    } else {
      return ConstructionItemsHelper.getBaseNameTextId(__s20param0) + "Slot";
    }
  };
  ConstructionItemsHelper.getBaseNameTextId = function (__s24param0) {
    switch (__s24param0) {
      case __dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE:
        return "ci_appearance";
      case __dep_exact_26a421b704832cff.ConstructionItemConst.PRIMARY_SLOT_TYPE:
        return "ci_primary";
      case __dep_exact_26a421b704832cff.ConstructionItemConst.SECONDARY_SLOT_TYPE:
        return "ci_secondary";
    }
    return null;
  };
  Object.defineProperty(ConstructionItemsHelper, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsHelper.getCategoryName = function (__s29param0) {
    switch (__s29param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_ci_filter01_civil");
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_ci_filter01_military");
      case __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_ci_filter01_battlement");
      default:
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_ci_filter01_all");
    }
  };
  ConstructionItemsHelper.fillMaterialInventory = function (__s32param0) {
    var __s32local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s32local1 = 0, __s32local2 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrenciesByIdRange(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_CRAFTING_MATERIAL)); __s32local1 < __s32local2.length; __s32local1++) {
      var __s32local3 = __s32local2[__s32local1];
      __s32local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s32local3.id), __s32local3.id));
    }
    return ConstructionItemsHelper.fillMaterialList(__s32param0, __s32local0);
  };
  ConstructionItemsHelper.fillMaterialCosts = function (__s36param0, __s36param1) {
    return ConstructionItemsHelper.fillMaterialList(__s36param0, __s36param1.materialsNeeded, false, 2);
  };
  ConstructionItemsHelper.fillDisassembledMaterials = function (__s38param0, __s38param1, __s38param2 = 1) {
    var __s38local0 = __s38param1.disassembleMaterials.clone();
    for (var __s38local1 = 0, __s38local2 = __s38local0.list; __s38local1 < __s38local2.length; __s38local1++) {
      var __s38local3 = __s38local2[__s38local1];
      if (__s38local3 !== undefined) {
        __s38local3.amount = Math.ceil(__s38local3.amount * __s38param2);
      }
    }
    return ConstructionItemsHelper.fillMaterialList(__s38param0, __s38local0);
  };
  ConstructionItemsHelper.fillMaterialList = function (__s43param0, __s43param1, __s43param2 = true, __s43param3 = 3) {
    var __s43local0 = new __dep_export_CastleScrollableResourceListComponent.CastleScrollableResourceListComponent(__s43param0, __s43param2 ? Library.CastleInterfaceElements.CraftingMaterial_Item_Grey : Library.CastleInterfaceElements.CraftingMaterial_Item, __s43param1, __s43param3, 6 / __s43param3);
    var __s43local1 = 29.5;
    var __s43local2 = 2.8;
    if (!__s43param2) {
      __s43local1 = 26.9;
      __s43local2 = 10;
    }
    __s43local0.iconDimension = new __s0local0(__s43local1, __s43local1);
    __s43local0.padding = __s43local2;
    __s43local0.initialize();
    return __s43local0;
  };
  ConstructionItemsHelper.isRecipeUnlocked = function (__s46param0) {
    return !!__s46param0 && (!!__s46param0.unlockedByDefault || __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID).rawValues.indexOf(__s46param0.id) > -1);
  };
  ConstructionItemsHelper.findResearchForRecipe = function (__s48param0) {
    if (!__s48param0) {
      return null;
    }
    for (var __s48local0 = 0, __s48local1 = Array.from(__dep_export_CastleModel.CastleModel.researchData.researchVOs.values()); __s48local0 < __s48local1.length; __s48local0++) {
      var __s48local2 = __s48local1[__s48local0];
      if (__s48local2 !== undefined) {
        var __s48local3 = __dep_exact_81dacdf05bd32292.castAs(__s48local2.getEffectValueByType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID), "EffectValueIdList");
        if (__s48local3 && __s48local3.hasID(__s48param0.id)) {
          return __s48local2;
        }
      }
    }
    return null;
  };
  ConstructionItemsHelper.getBestUnlockedCI = function (__s55param0) {
    var __s55local0;
    var __s55local1 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID);
    for (var __s55local2 = 0, __s55local3 = __s55param0.recipes; __s55local2 < __s55local3.length; __s55local2++) {
      var __s55local4 = __s55local3[__s55local2];
      if (__s55local4 !== undefined) {
        if (!__s55local4.unlockedByDefault && !(__s55local1.rawValues.indexOf(__s55local4.id) > -1)) {
          break;
        }
        __s55local0 = __s55local4;
      }
    }
    if (__s55local0) {
      return __s55local0.constructionItem;
    } else {
      return null;
    }
  };
  return ConstructionItemsHelper;
}();
exports.ConstructionItemsHelper = __s0local1;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ConstructionItemData = require("gge-module:export_ConstructionItemData");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleScrollableResourceListComponent = require("gge-module:export_CastleScrollableResourceListComponent");
var __dep_export_CastleDecoShopPanel = require("gge-module:export_CastleDecoShopPanel");
