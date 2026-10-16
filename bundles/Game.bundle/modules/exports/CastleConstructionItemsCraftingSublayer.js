Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGetConstructionCraftingInfoVO = require("gge-module:export_C2SGetConstructionCraftingInfoVO");
var __dep_export_C2SGetContructionItemsInventoryVO = require("gge-module:export_C2SGetContructionItemsInventoryVO");
var __dep_export_CastleConstructionItemsEvent = require("gge-module:export_CastleConstructionItemsEvent");
var __dep_export_CastleCraftingMaterialEvent = require("gge-module:export_CastleCraftingMaterialEvent");
var __dep_export_CastleMinuteSkipEvent = require("gge-module:export_CastleMinuteSkipEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ConstructionItemSlotVO = require("gge-module:export_ConstructionItemSlotVO");
var __dep_export_CastleConstructionItemSlotRendererVO = require("gge-module:export_CastleConstructionItemSlotRendererVO");
var __dep_export_ComboboxItemRendererConstructionItemSlotGray = require("gge-module:export_ComboboxItemRendererConstructionItemSlotGray");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_CastleItemScrollList = require("gge-module:export_CastleItemScrollList");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleConstructionItemsFilterSublayer = require("gge-module:export_CastleConstructionItemsFilterSublayer");
var __dep_export_CIBlueprintScrollItemVO = require("gge-module:export_CIBlueprintScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsCraftingSublayer(__s3param0) {
    var __s3local0;
    var __s3local1 = this;
    __s3local1._focusFirstBlueprint = true;
    __s3local1._visibleBlueprints = [];
    CONSTRUCTOR_HACK;
    (__s3local1 = __s1param0.call(this, __s3param0, __s3param0, true) || this)._filterSlot = __s3local1.comboBox(__s3param0.mc_slotTypeSelector, __dep_export_ComboboxItemRendererConstructionItemSlotGray.ComboboxItemRendererConstructionItemSlotGray, true);
    var __s3local2 = 0;
    for (var __s3local3 = 0; __s3local3 < CastleConstructionItemsCraftingSublayer.ITEM_FILTERS.length; __s3local3++) {
      __s3local2 = __dep_exact_f855840627e6e145.int(CastleConstructionItemsCraftingSublayer.ITEM_FILTERS[__s3local3]);
      (__s3local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getSlotNameTextId(__s3local2));
      __s3local0.data = new __dep_export_CastleConstructionItemSlotRendererVO.CastleConstructionItemSlotRendererVO(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__s3local2, 0));
      __s3local1._filterSlot.addItem(__s3local0);
    }
    __s3local1._filterSlot.selectItemIndex(0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.blueprintList.btn_up, __s3param0.blueprintList.btn_down, __s3param0.inventory.btn_plus, __s3param0.inventory.btn_minus]);
    __s3local1.progressComponent = new __dep_export_CastleConstructionItemsCraftingSublayerProgress.CastleConstructionItemsCraftingSublayerProgress(__s3param0.crafting);
    __s3local1.itemInfoComponent = new __dep_export_CastleConstructionItemsCraftingSublayerItemInfo.CastleConstructionItemsCraftingSublayerItemInfo(__s3param0.itemInfo, __s3local1);
    __s3local1.ingredientsComponent = new __dep_export_CastleConstructionItemsCraftingSublayerIngredients.CastleConstructionItemsCraftingSublayerIngredients(__s3param0.ingredientInfo, __s3local1);
    __s3local1.textFieldManager.registerTextField(__s3param0.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_craft_header"));
    return __s3local1;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsCraftingSublayer, __s1param0);
  CastleConstructionItemsCraftingSublayer.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onSkipSuccess));
    __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdate));
    this._filterSlot.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeSlotFilter));
    __dep_export_CastleModel.CastleModel.craftingMaterialData.addEventListener(__dep_export_CastleCraftingMaterialEvent.CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this.interactionData.SGN_UPDATE.add(this.bindFunction(this.onInteractionUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this._focusFirstBlueprint = this._focusFirstBlueprint || !!this.sublayerProperties.constructionItemRecipeVO;
    this.progressComponent.disableButton(null);
    this.itemInfoComponent.addEventListeners();
    this.ingredientsComponent.addEventListeners();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GCC_ARRIVED, this.bindFunction(this.onGCCArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetConstructionCraftingInfoVO.C2SGetConstructionCraftingInfoVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetContructionItemsInventoryVO.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsCraftingSublayer.prototype.onSkipSuccess = function (__s9param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetContructionItemsInventoryVO.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsCraftingSublayer.prototype.onConstructionItemInventoryUpdate = function (__s11param0) {
    this.ingredientsComponent.update();
  };
  CastleConstructionItemsCraftingSublayer.prototype.onMaterialInventoryUpdated = function (__s13param0) {
    if (this.craftingMaterialInventory) {
      this.craftingMaterialInventory.destroy();
    }
    this.craftingMaterialInventory = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.fillMaterialInventory(this.subLayerDisp.inventory.mc_costs);
    this.ingredientsComponent.update();
    this.progressComponent.update();
  };
  CastleConstructionItemsCraftingSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS, this.bindFunction(this.onSkipSuccess));
    __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdate));
    this.itemInfoComponent.removeEventListeners();
    this.ingredientsComponent.removeEventListeners();
    this.progressComponent.hide();
    this._filterSlot.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeSlotFilter));
    __dep_export_CastleModel.CastleModel.craftingMaterialData.removeEventListener(__dep_export_CastleCraftingMaterialEvent.CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onMaterialInventoryUpdated));
    this.interactionData.SGN_UPDATE.remove(this.bindFunction(this.onInteractionUpdate));
    if (this._scrollList) {
      this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollItemScroll));
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GCC_ARRIVED, this.bindFunction(this.onGCCArrived));
  };
  CastleConstructionItemsCraftingSublayer.prototype.onChangeSlotFilter = function (__s19param0) {
    var __s19local0 = this._filterSlot.selectedData.slotVO;
    this.interactionData.setSelectedSlot(__s19local0);
  };
  CastleConstructionItemsCraftingSublayer.prototype.showBlueprints = function () {
    var __s21local0 = 0;
    if (this._scrollList) {
      __s21local0 = __dep_exact_f855840627e6e145.int(this._scrollList.currentStartIndex);
      this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._scrollList.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollItemScroll));
      this._scrollList.clear();
    } else {
      this._scrollList = new __dep_export_CastleItemScrollList.CastleItemScrollList(this.subLayerDisp.blueprintList);
      this._scrollList.scrollItemClass = __dep_export_CIBlueprintScrollItem.CIBlueprintScrollItem;
      this._scrollList.scrollStep = 2;
    }
    var __s21local1 = null;
    var __s21local2 = null;
    if (this._visibleBlueprints != null) {
      for (var __s21local3 = 0, __s21local4 = this._visibleBlueprints; __s21local3 < __s21local4.length; __s21local3++) {
        var __s21local5 = __s21local4[__s21local3];
        if (__s21local5 !== undefined) {
          var __s21local6 = new __dep_export_CIBlueprintScrollItemVO.CIBlueprintScrollItemVO(__s21local5);
          __s21local1 = __s21local1 || __s21local6;
          if (__s21local5 == this.bluePrintShown) {
            __s21local2 = __s21local6;
          }
          this._scrollList.pushContent(__s21local6);
        }
      }
    }
    if (this._focusFirstBlueprint && this.sublayerProperties.constructionItemRecipeVO) {
      this.selectRecipe(this.sublayerProperties.constructionItemRecipeVO, true);
      this.sublayerProperties.clear();
    } else if (this._focusFirstBlueprint && __s21local1) {
      this.select(__s21local1, true);
    } else if (__s21local2) {
      this.select(__s21local2, true);
    }
    this._focusFirstBlueprint = false;
    this._scrollList.initList(Math.max(__s21local0, 0));
    this._scrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._scrollList.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollItemScroll));
  };
  CastleConstructionItemsCraftingSublayer.prototype.onScrollItemScroll = function (__s33param0) {
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
  };
  CastleConstructionItemsCraftingSublayer.prototype.onScrollItemClick = function (__s35param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s35param0.scrollItem, "CIBlueprintScrollItem")) {
      var __s35local0 = __s35param0.scrollItem.scrollItemVO;
      this.select(__s35local0);
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.selectRecipe = function (__s38param0, __s38param1 = false) {
    for (var __s38local0 = 0, __s38local1 = this._scrollList.voList; __s38local0 < __s38local1.length; __s38local0++) {
      var __s38local2 = __s38local1[__s38local0];
      if (__s38local2 !== undefined) {
        var __s38local3 = __dep_exact_f855840627e6e145.int(__s38local2.blueprintVO.recipes.indexOf(__s38param0));
        if (__s38local3 > -1) {
          this.itemInfoComponent.selectedRecipeIndex = __s38local3;
          this.select(__s38local2, __s38param1);
          return;
        }
      }
    }
    __dep_exact_9e901e8e2483a22f_2.debug("Couldn't find blueprint for recipe " + __s38param0);
  };
  CastleConstructionItemsCraftingSublayer.prototype.select = function (__s44param0, __s44param1 = false) {
    var __s44local0 = __dep_exact_f855840627e6e145.int(__s44param0.id % 2 == 1 ? __s44param0.id - 1 : __s44param0.id);
    if (this.bluePrintShown !== __s44param0.blueprintVO) {
      this.itemInfoComponent.selectedRecipeIndex = 0;
    }
    this.bluePrintShown = __s44param0.blueprintVO;
    if (__s44param1) {
      this._scrollList.initList(__s44local0);
    }
    this._scrollList.setActiveItemVO(__s44param0.id, true, false);
    this.updateItemInfo();
  };
  CastleConstructionItemsCraftingSublayer.prototype.updateItemInfo = function () {
    if (this.bluePrintShown && this.bluePrintShown.recipes && (this.recipeShown = this.bluePrintShown.recipes[this.itemInfoComponent.selectedRecipeIndex], this.recipeShown)) {
      var __s48local0 = this.recipeShown.constructionItem;
      this.itemInfoComponent.update(__s48local0);
      this.ingredientsComponent.update();
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.onInteractionUpdate = function (__s51param0) {
    this.updateBuildingFilters();
    this.updateVisibleBlueprints();
    this._focusFirstBlueprint = this._visibleBlueprints.indexOf(this.bluePrintShown) < 0;
    this.showBlueprints();
  };
  CastleConstructionItemsCraftingSublayer.prototype.updateVisibleBlueprints = function () {
    this._visibleBlueprints = [];
    var __s53local0 = __dep_exact_f855840627e6e145.int(__dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS);
    if (this.interactionData.selectedSlot) {
      __s53local0 = __dep_exact_f855840627e6e145.int(this.interactionData.selectedSlot.slotType);
    }
    for (var __s53local1 = 0, __s53local2 = Array.from(__dep_export_CastleModel.CastleModel.constructionItemBlueprintData.blueprints.values()); __s53local1 < __s53local2.length; __s53local1++) {
      var __s53local3 = __s53local2[__s53local1];
      if (__s53local3 !== undefined) {
        if ((__s53local0 == __dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS || __s53local3.constructionItem.slotType == __s53local0) && !!this.filterBuildings(__s53local3.constructionItem.applicableBuildings)) {
          this._visibleBlueprints.push(__s53local3);
        }
      }
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.onClick = function (__s60param0) {
    __s1param0.prototype.onClick.call(this, __s60param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s60param0.target)) {
      this.itemInfoComponent.onClick(__s60param0.target);
      this.ingredientsComponent.onClick(__s60param0.target);
      this.progressComponent.onClick(__s60param0.target, this.recipeShown);
    }
  };
  CastleConstructionItemsCraftingSublayer.prototype.showHelp = function () {
    __s1param0.prototype.showHelp.call(this);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_ci_craft"));
  };
  CastleConstructionItemsCraftingSublayer.prototype.onGCCArrived = function (__s65param0) {
    this.updateVisibleBlueprints();
    this.showBlueprints();
    var __s65local0 = JSON.parse(__s65param0.params[1][1]);
    var __s65local1 = __s65local0 && __s65local0.hasOwnProperty(__dep_exact_26a421b704832cff.CommKeys.CONSTRUCTION_ITEM_ID) ? parseInt(__s65local0[__dep_exact_26a421b704832cff.CommKeys.CONSTRUCTION_ITEM_ID]) : -1;
    __dep_export_CastleModel.CastleModel.constructionItemData.craftingRecipe = null;
    if (__s65local1 > -1) {
      var __s65local2 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(__s65local1);
      if (__s65local2) {
        __dep_export_CastleModel.CastleModel.constructionItemData.craftingRecipe = __dep_export_CastleModel.CastleModel.constructionItemBlueprintData.findRecipeFor(__s65local2);
      }
    }
    __dep_export_CastleModel.CastleModel.constructionItemData.craftingSeconds = __s65local0 && __s65local0.hasOwnProperty(__dep_exact_26a421b704832cff.CommKeys.REMAINING_SECONDS) ? __s65local0[__dep_exact_26a421b704832cff.CommKeys.REMAINING_SECONDS] : -1;
    this.progressComponent.update();
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayer.__initialize_static_members = function () {
    CastleConstructionItemsCraftingSublayer.ITEM_FILTERS = [__dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS, __dep_exact_26a421b704832cff_1.ConstructionItemConst.PRIMARY_SLOT_TYPE, __dep_exact_26a421b704832cff_1.ConstructionItemConst.SECONDARY_SLOT_TYPE];
  };
  return CastleConstructionItemsCraftingSublayer;
}(__dep_export_CastleConstructionItemsFilterSublayer.CastleConstructionItemsFilterSublayer);
exports.CastleConstructionItemsCraftingSublayer = __s0local0;
var __dep_export_ConstructionItemData = require("gge-module:export_ConstructionItemData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __dep_export_CastleConstructionItemsCraftingSublayerIngredients = require("gge-module:export_CastleConstructionItemsCraftingSublayerIngredients");
var __dep_export_CastleConstructionItemsCraftingSublayerItemInfo = require("gge-module:export_CastleConstructionItemsCraftingSublayerItemInfo");
var __dep_export_CastleConstructionItemsCraftingSublayerProgress = require("gge-module:export_CastleConstructionItemsCraftingSublayerProgress");
var __dep_export_CIBlueprintScrollItem = require("gge-module:export_CIBlueprintScrollItem");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
