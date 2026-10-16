Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_C2SGetCastleResourcesVO = require("gge-module:export_C2SGetCastleResourcesVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CraftingEvent = require("gge-module:export_CraftingEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_ACollectableItemResourceVO = require("gge-module:export_ACollectableItemResourceVO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleArrayHelper = require("gge-module:export_CastleArrayHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CraftingQueueVO = require("gge-module:export_CraftingQueueVO");
var __dep_export_CraftingSlotVO = require("gge-module:export_CraftingSlotVO");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleItemScrollList = require("gge-module:export_CastleItemScrollList");
var __dep_export_ModernComboboxComponentItem = require("gge-module:export_ModernComboboxComponentItem");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleCancelCraftingDialog = require("gge-module:export_CastleCancelCraftingDialog");
var __dep_export_CastleCancelCraftingDialogProperties = require("gge-module:export_CastleCancelCraftingDialogProperties");
var __dep_export_CastleRefineryToolsmithCraftingSlot = require("gge-module:export_CastleRefineryToolsmithCraftingSlot");
var __dep_export_CastleRefineryToolsmithRecipeScrollItem = require("gge-module:export_CastleRefineryToolsmithRecipeScrollItem");
var __dep_export_CastleRefineryToolsmithRecipeScrollItemVO = require("gge-module:export_CastleRefineryToolsmithRecipeScrollItemVO");
var __dep_export_CastleSkipCraftingDialog = require("gge-module:export_CastleSkipCraftingDialog");
var __dep_export_CastleSkipCraftingDialogProperties = require("gge-module:export_CastleSkipCraftingDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function CastleRefineryToolsmithDialog() {
    return __s1param0.call(this, CastleRefineryToolsmithDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRefineryToolsmithDialog, __s1param0);
  CastleRefineryToolsmithDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_productionTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_queue.mc_selectedProduction.mc_progress.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.dialogDisp.mc_queue.mc_selectedProduction.btn_skip.toolTipText = "dialog_crafting_instantComplete_tooltip";
    this.dialogDisp.mc_queue.mc_selectedProduction.btn_cancel.toolTipText = "dialog_crafting_cancel_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.tab_1, this.dialogDisp.tab_2, this.dialogDisp.tab_3, this.dialogDisp.tab_4, this.dialogDisp.mc_recipes.btn_up, this.dialogDisp.mc_recipes.btn_down, this.dialogDisp.mc_resourceStorage.btn_left, this.dialogDisp.mc_resourceStorage.btn_right, this.dialogDisp.mc_resourceStorage.btn_expand, this.dialogDisp.mc_fullList.btn_collapse, this.dialogDisp.mc_queue.mc_selectedProduction.btn_skip, this.dialogDisp.mc_queue.mc_selectedProduction.btn_cancel], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.mc_castleSelection.mc_selector], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._recipeList = new __dep_export_CastleItemScrollList.CastleItemScrollList(this.dialogDisp.mc_recipes);
    this._recipeList.scrollItemClass = __dep_export_CastleRefineryToolsmithRecipeScrollItem.CastleRefineryToolsmithRecipeScrollItem;
    this._recipeList.scrollStep = 2;
    this._storageList = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO(this.dialogDisp.mc_resourceStorage.btn_left, this.dialogDisp.mc_resourceStorage.btn_right).addMouseWheelElements([this.dialogDisp.mc_resourceStorage]), new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical(true, true));
    this._craftingSlots = [];
    this._craftingSlots.push(new __dep_export_CastleRefineryToolsmithCraftingSlot.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_production_0, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION, 0, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new __dep_export_CastleRefineryToolsmithCraftingSlot.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_production_1, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION, 1, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new __dep_export_CastleRefineryToolsmithCraftingSlot.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_0, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, 0, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new __dep_export_CastleRefineryToolsmithCraftingSlot.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_1, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, 1, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new __dep_export_CastleRefineryToolsmithCraftingSlot.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_2, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, 2, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new __dep_export_CastleRefineryToolsmithCraftingSlot.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_3, __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_QUEUE, 3, this.bindFunction(this.onSlotMouseDown)));
    this._castleSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.mc_castleSelection, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1));
    this._itxt_castle = this.textFieldManager.registerTextField(this.dialogDisp.mc_castleSelection.mc_selector.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  };
  CastleRefineryToolsmithDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.craftingData.checkForLearnedRecipes();
    this.dialogDisp.mc_fullList.visible = false;
    this.dialogDisp.mc_castleSelection.visible = false;
    if (__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo) {
      __dep_export_CastleModel.CastleModel.craftingData.currentCastleVO = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
      __dep_export_CastleModel.CastleModel.craftingData.getCraftingInfo();
      if (__dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(this.dialogProperties.queueID)) {
        this.onShow();
      } else {
        __dep_export_CastleModel.CastleModel.craftingData.addEventListener(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
        this._waitingForServer = true;
      }
    } else {
      this.hide();
    }
  };
  CastleRefineryToolsmithDialog.prototype.onShow = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
    this._waitingDetailedListForServer = true;
    __dep_export_CastleModel.CastleModel.craftingData.checkForLearnedRecipes();
    this.showProductionQueue(this.dialogProperties.queueID);
    this._craftingSlots.forEach(function (__s15param0) {
      return __s15param0.onShow();
    });
    this._recipeList.veList.forEach(function (__s17param0) {
      return __s17param0.addListeners();
    });
    this._storageList.onScrollSignal.add(this.bindFunction(this.onScrollStorage));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onStorageChange));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onStorageChange));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.craftingData.addEventListener(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
  };
  CastleRefineryToolsmithDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s19param0);
    if (this._storageList) {
      this._storageList.onScrollSignal.remove(this.bindFunction(this.onScrollStorage));
      this._storageList.hide();
      this.dialogDisp.mc_resourceStorage.x = 0;
    }
    this._craftingSlots.forEach(function (__s22param0) {
      return __s22param0.onHide();
    });
    this._recipeList.veList.forEach(function (__s24param0) {
      return __s24param0.removeListeners();
    });
    this.cancelDrag();
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onStorageChange));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onStorageChange));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.craftingData.removeEventListener(__dep_export_CraftingEvent.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    if (this._castleSelector) {
      this._castleSelector.onHide();
      this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    this._waitingForServer = false;
  };
  CastleRefineryToolsmithDialog.prototype.onDetailedCastleListArrived = function () {
    if (this._waitingDetailedListForServer) {
      this._waitingDetailedListForServer = false;
      this.updateStorage(true);
    }
  };
  CastleRefineryToolsmithDialog.prototype.updateCastleList = function () {
    var __s30local0 = this;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._castleSelector.disp.mc_list);
    var __s30local1;
    var __s30local2 = [];
    __dep_export_CastleModel.CastleModel.craftingData.getAvailableCastleList(this.dialogProperties.queueID).forEach(function (__s32param0) {
      var __s32local0 = new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("RefineryToolsmith_CastleSelector_Item", CastleRefineryToolsmithDialog.NAME, __s30local0.bindFunction(__s30local0.fillCastleItem), __s32param0);
      __s30local2.push(__s32local0);
      if (__s32param0.kingdomID == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID && __s32param0.objectId == __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId) {
        __s30local1 = __s32local0;
      }
    });
    this._castleSelector.updateWithNewValues(__s30local2);
    this._castleSelector.onShow();
    if (__s30local2.length > 1) {
      this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
      this._castleSelector.selectItem(__s30local1);
      this._castleSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
    }
    this.dialogDisp.mc_castleSelection.visible = __s30local2.length > 1;
    this.updateCastleName();
  };
  CastleRefineryToolsmithDialog.prototype.fillCastleItem = function (__s36param0) {
    __s36param0.disp.basicButton = null;
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s36param0.getItemMc(), 1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s36local0 = __s36param0.data;
    this.textFieldManager.registerTextField(__s36param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s36local0.areaNameString), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(__s36param0.getItemMc().mc_hover.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s36local0.areaNameString), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s36param0.getItemMc().mc_kingdom.gotoAndStop(Math.min(__s36local0.kingdomID + 1, 6));
  };
  CastleRefineryToolsmithDialog.prototype.showProductionQueue = function (__s38param0) {
    var __s38local0 = this;
    this.dialogProperties.queueID = __s38param0;
    __dep_export_CastleModel.CastleModel.craftingData.checkForLearnedRecipes();
    this.dialogDisp.tab_1.mc_selected.visible = __s38param0 == __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_REFINERY;
    this.dialogDisp.tab_2.mc_selected.visible = __s38param0 == __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_TOOLSMITH;
    this.dialogDisp.tab_3.mc_selected.visible = __s38param0 == __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD;
    this.dialogDisp.tab_4.mc_selected.visible = __s38param0 == __dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH;
    var __s38local1 = __dep_export_CastleModel.CastleModel.craftingData.getRecipeClustersByQueue(__s38param0);
    this._recipeList.clear();
    __s38local1.forEach(function (__s40param0) {
      return __s38local0._recipeList.pushContent(new __dep_export_CastleRefineryToolsmithRecipeScrollItemVO.CastleRefineryToolsmithRecipeScrollItemVO(__s38local0.getShownRecipes(__s40param0)));
    });
    this._recipeList.initList(0);
    this.dialogDisp.mc_fullList.visible = false;
    if (!this._waitingDetailedListForServer) {
      this.updateStorage(true);
    }
    this.updateSlots();
    this.selectSlot(this._craftingSlots[0].slotVO);
    this.updateCastleList();
    this.updateTabs();
    this._itxt_title.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.dialogDisp["tab_" + __s38param0].toolTipText));
  };
  CastleRefineryToolsmithDialog.prototype.updateTabs = function () {
    var __s43local0 = !!__dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_REFINERY) && __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_REFINERY).buildingState.isFunctionally;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.tab_1, __s43local0);
    this.dialogDisp.tab_1.toolTipText = __s43local0 ? "dialog_crafting_refinery_header" : "dialog_crafting_refineryNotConstructed_tooltip";
    var __s43local1 = !!__dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_TOOLSMITH) && __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_TOOLSMITH).buildingState.isFunctionally;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.tab_2, __s43local1);
    this.dialogDisp.tab_2.toolTipText = __s43local1 ? "dialog_crafting_toolsmith_header" : "dialog_crafting_toolsmithNotConstructed_tooltip";
    var __s43local2 = !!__dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD) && __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD).buildingState.isFunctionally;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.tab_3, __s43local2);
    this.dialogDisp.tab_3.toolTipText = "dialog_dragonhoard_header";
    this.dialogDisp.tab_3.visible = __s43local2 && !!__dep_export_CastleModel.CastleModel.craftingData.getRecipeClustersByQueue(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD) && __dep_export_CastleModel.CastleModel.craftingData.getRecipeClustersByQueue(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONHOARD).size > 0;
    var __s43local3 = !!__dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH) && __dep_export_CastleModel.CastleModel.craftingData.getQueueVOByID(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH).buildingState.isFunctionally;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.tab_4, __s43local3);
    this.dialogDisp.tab_4.toolTipText = "dialog_dragonbreathforge_header";
    this.dialogDisp.tab_4.visible = __s43local3 && !!__dep_export_CastleModel.CastleModel.craftingData.getRecipeClustersByQueue(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH) && __dep_export_CastleModel.CastleModel.craftingData.getRecipeClustersByQueue(__dep_export_CraftingQueueVO.CraftingQueueVO.QUEUE_DRAGONBREATH).size > 0;
  };
  CastleRefineryToolsmithDialog.prototype.getShownRecipes = function (__s45param0) {
    var __s45local0 = [];
    __s45param0.forEach(function (__s47param0) {
      var __s47local0 = __s47param0.reduce(function (__s49param0, __s49param1) {
        if (__s49param1.learned) {
          return __s49param1;
        } else {
          return __s49param0;
        }
      });
      var __s47local1 = __s47param0.reduceRight(function (__s53param0, __s53param1) {
        if (__s53param1.learned) {
          return __s53param0;
        } else {
          return __s53param1;
        }
      });
      if (__s47local0) {
        __s45local0.push(__s47local0);
      }
      if (__s47local1 && __s47local1 != __s47local0) {
        __s45local0.push(__s47local1);
      }
    });
    __s45local0.sort(this.sortByLearnedAndType);
    return __s45local0;
  };
  CastleRefineryToolsmithDialog.prototype.sortByLearnedAndType = function (__s59param0, __s59param1) {
    if (__s59param0.learned && !__s59param1.learned) {
      return -1;
    } else if (!__s59param0.learned && __s59param1.learned) {
      return 1;
    } else {
      return __s59param0.getSortOrderByType() - __s59param1.getSortOrderByType();
    }
  };
  CastleRefineryToolsmithDialog.prototype.updateStorage = function (__s64param0) {
    var __s64local0 = this;
    if (__s64param0 === undefined) {
      __s64param0 = false;
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_resourceStorage.mc_list);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_fullList.mc_items);
    this.getShownStorageItems().forEach(function (__s67param0, __s67param1) {
      var __s67local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleRefineryToolsmithStorageItem"))();
      __s67local0.x = __s67param1 * (__s67local0.width + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP);
      __s64local0.dialogDisp.mc_resourceStorage.mc_list.addChild(__s67local0);
      var __s67local1 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleRefineryToolsmithStorageItem2"))();
      __s67local1.x = __s67param1 % CastleRefineryToolsmithDialog.FULL_LIST_ITEMS_PER_ROW * (__s67local1.width + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP);
      __s67local1.y = Math.floor(__s67param1 / CastleRefineryToolsmithDialog.FULL_LIST_ITEMS_PER_ROW) * (__s67local1.height + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP);
      __s64local0.dialogDisp.mc_fullList.mc_items.addChild(__s67local1);
      __s64local0.dialogDisp.mc_fullList.bg.height = __s67local1.y + __s67local1.height + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP;
      var __s67local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_STORAGE, new __s0local0(25, 25));
      __s67local2.tooltip.useAmount = false;
      __s67local2.textfield.useKiloAbbreviationForAmount = true;
      if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s67param0.itemType) > -1) {
        __s67local2.storage.fixedStorageMaximum = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(__s64local0.currentCastleVO.objectId, __s64local0.currentCastleVO.kingdomID).getMaxStorageSpace(__s67param0.itemType);
      }
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s67local0), __s67param0, __s67local2);
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s67local1), __s67param0, __s67local2);
      if (__s67param0 instanceof __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO) {
        var __s67local3 = __dep_exact_92d05af59ee2ff30.Localize.text(__s67param0.getNameTextId());
        __s67local0.toolTipText = {
          t: "dialog_crafting_currencyInventory_tooltip",
          p: [__s67local3]
        };
        __s67local1.toolTipText = {
          t: "dialog_crafting_currencyInventory_tooltip",
          p: [__s67local3]
        };
      } else if (__s67param0 instanceof __dep_export_ACollectableItemResourceVO.ACollectableItemResourceVO) {
        __s67local3 = __dep_exact_92d05af59ee2ff30.Localize.text(__s67param0.getNameTextId());
        __s67local0.toolTipText = {
          t: "dialog_crafting_resourceInventory_tooltip",
          p: [__s67local3]
        };
        __s67local1.toolTipText = {
          t: "dialog_crafting_resourceInventory_tooltip",
          p: [__s67local3]
        };
      }
    });
    var __s64local1 = __s64param0 ? 0 : this._storageList.currentValue;
    var __s64local2 = Math.max(0, this.dialogDisp.mc_resourceStorage.mc_list.width - this.dialogDisp.mc_resourceStorage.mc_list.mask.width);
    this._storageList.init(0, __s64local2, 52, 52);
    this._storageList.show();
    this._storageList.scrollToPercent(__s64local1);
    this.dialogDisp.mc_resourceStorage.x = this.dialogDisp.mc_resourceStorage.btn_left.visible ? 0 : -37;
    this.dialogDisp.mc_resourceStorage.btn_expand.visible = __s64local2 > 0;
  };
  CastleRefineryToolsmithDialog.prototype.updateSlots = function () {
    var __s72local0 = this;
    this._craftingSlots.forEach(function (__s74param0) {
      return __s74param0.queueID = __s72local0.dialogProperties.queueID;
    });
  };
  CastleRefineryToolsmithDialog.prototype.selectSlot = function (__s76param0) {
    var __s76local0 = this;
    this._selectedSlotVO = __s76param0 && __s76param0.isFilled() ? __s76param0 : null;
    this._craftingSlots.forEach(function (__s78param0) {
      return __s78param0.setSelected(__s76local0._selectedSlotVO == __s78param0.slotVO);
    });
    this.updateProductionControls();
  };
  CastleRefineryToolsmithDialog.prototype.updateProductionControls = function () {
    this.dialogDisp.mc_queue.mc_selectedProduction.visible = !!this._selectedSlotVO;
    if (this._selectedSlotVO) {
      this.dialogDisp.mc_queue.mc_selectedProduction.mc_progress.progressBar.scaleX = this._selectedSlotVO.getRemainingProductionTimeRatio();
      this._itxt_productionTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this._selectedSlotVO.getRemainingProductionTime());
    }
  };
  CastleRefineryToolsmithDialog.prototype.onComboboxChange = function (__s83param0 = null) {
    __dep_export_CastleModel.CastleModel.craftingData.currentCastleVO = this._castleSelector.getSelectedItem().data;
    if (this.currentCastleVO.kingdomID != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID || this.currentCastleVO.objectId != __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(this.currentCastleVO.objectId, this.currentCastleVO.kingdomID));
    }
    this.showProductionQueue(this._craftingSlots[0].slotVO.queueID);
    if (__dep_export_CastleModel.CastleModel.craftingData.currentCastleVO.kingdomID != __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __dep_export_CastleModel.CastleModel.craftingData.currentCastleVO);
      this.layoutManager.dialogCastleSwitch = true;
    }
  };
  CastleRefineryToolsmithDialog.prototype.updateCastleName = function () {
    this.dialogDisp.mc_castleSelection.mc_selector.mc_kingdom.gotoAndStop(Math.min(this.currentCastleVO.kingdomID + 1, 6));
    this._itxt_castle.textContentVO.stringValue = this.currentCastleVO.areaNameString;
  };
  CastleRefineryToolsmithDialog.prototype.onSlotMouseDown = function (__s89param0) {
    this.selectSlot(__s89param0.slotVO);
    if (!__s89param0.slotVO.isProductionSlot) {
      this._draggedQueueSlot = __s89param0;
      this._draggedQueueSlotToIndex = __s89param0.slotVO.slotIndex;
      this._draggableQueueSlots = this._craftingSlots.filter(function (__s92param0) {
        return !__s92param0.slotVO.isProductionSlot && __s92param0.slotVO.isFilled();
      });
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_HAND);
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s89param0.disp, 0.1, {
        alpha: 0.6,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s89param0.disp, 0.1, {
        scaleY: 1.1,
        scaleX: 1.1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
      this.dialogDisp.stage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onDragMouseMove));
      this.dialogDisp.stage.addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onDragMouseUp));
    }
  };
  CastleRefineryToolsmithDialog.prototype.onDragMouseMove = function (__s94param0) {
    var __s94local0 = this;
    if (this._draggedQueueSlot) {
      var __s94local1 = this._draggableQueueSlots.map(function (__s97param0) {
        return __s97param0.originalX;
      }).sort(__dep_export_CastleArrayHelper.numericSort);
      var __s94local2 = __dep_exact_f855840627e6e145.int(this.dialogDisp.mc_queue.mouseX + this.dialogDisp.mc_queue.getBounds(null).x);
      __s94local2 = __dep_exact_9e901e8e2483a22f_1.MathBase.clamp(__s94local2, __s94local1[0], __s94local1[__s94local1.length - 1]);
      var __s94local3 = this._draggedQueueSlot.disp.width / (this._draggedQueueSlot.disp.scaleX * 2);
      var __s94local4 = __s94local1.findIndex(function (__s99param0) {
        return Math.abs(__s94local2 - __s99param0) < __s94local3;
      });
      this._draggedQueueSlot.disp.x = __s94local2;
      if (this._draggedQueueSlotToIndex != __s94local4 && __s94local4 != -1) {
        this._draggedQueueSlotToIndex = __s94local4;
        __dep_export_CastleArrayHelper.CastleArrayHelper.moveIndex(this._draggableQueueSlots, this._draggableQueueSlots.indexOf(this._draggedQueueSlot), __s94local4);
        this._draggableQueueSlots.filter(function (__s102param0) {
          return __s102param0 != __s94local0._draggedQueueSlot;
        }).forEach(function (__s104param0) {
          __dep_exact_608de47b6498f9b0_2.TweenMax.to(__s104param0.disp, 0.25, {
            x: __s94local1[__s94local0._draggableQueueSlots.indexOf(__s104param0)],
            ease: __dep_exact_608de47b6498f9b0_1.Sine.easeInOut
          });
        });
      }
    }
  };
  CastleRefineryToolsmithDialog.prototype.onDragMouseUp = function (__s106param0) {
    if (this._draggedQueueSlot) {
      var __s106local0 = this._draggableQueueSlots.map(function (__s109param0) {
        return __s109param0.originalX;
      }).sort(__dep_export_CastleArrayHelper.numericSort);
      this._draggedQueueSlot.disp.x = __s106local0[this._draggedQueueSlotToIndex];
      if (this._draggedQueueSlotToIndex != this._draggedQueueSlot.slotVO.slotIndex) {
        __dep_export_CastleModel.CastleModel.craftingData.moveQueueSlot(this._draggedQueueSlot.slotVO, this._draggedQueueSlotToIndex);
        this._switchToMovedSlotOnUpdate = true;
      }
    }
    this.cancelDrag();
  };
  CastleRefineryToolsmithDialog.prototype.cancelDrag = function () {
    if (this._draggedQueueSlot) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.killTweensOf(this._draggedQueueSlot.disp);
      this._draggedQueueSlot.disp.alpha = 1;
      this._draggedQueueSlot.disp.scaleX = this._draggedQueueSlot.disp.scaleY = 1;
      this._draggedQueueSlot = null;
      if (this.dialogDisp && this.dialogDisp.stage) {
        this.dialogDisp.stage.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onDragMouseUp));
        this.dialogDisp.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.onDragMouseMove));
      }
    }
  };
  CastleRefineryToolsmithDialog.prototype.onStorageChange = function (__s116param0) {
    if (!this._waitingDetailedListForServer) {
      this.updateStorage();
    }
    this._recipeList.initList(this._recipeList.currentStartIndex);
  };
  CastleRefineryToolsmithDialog.prototype.onScrollStorage = function () {
    this.dialogDisp.mc_resourceStorage.mc_list.x = CastleRefineryToolsmithDialog.STORAGE_LIST_STARTX - this._storageList.currentValue;
  };
  CastleRefineryToolsmithDialog.prototype.onSelectSlot = function (__s121param0) {
    this.selectSlot(__s121param0);
  };
  CastleRefineryToolsmithDialog.prototype.onTimerUpdate = function (__s123param0) {
    if (this._selectedSlotVO && this._selectedSlotVO.getRemainingProductionTime() < 0) {
      this.selectSlot(null);
    }
    this.updateProductionControls();
    this._craftingSlots.forEach(function (__s126param0) {
      return __s126param0.onTimerUpdate();
    });
  };
  CastleRefineryToolsmithDialog.prototype.onCraftingQueueUpdated = function (__s128param0) {
    var __s128local0 = this;
    if (this._waitingForServer) {
      this._waitingForServer = false;
      this.onShow();
    }
    this.cancelDrag();
    if (__s128param0.queueID == -1 || __s128param0.queueID == this.dialogProperties.queueID && __s128param0.kingdomID == this.currentCastleVO.kingdomID) {
      this._recipeList.initList(this._recipeList.currentStartIndex);
      this.updateSlots();
      if (this._selectedSlotVO && this._selectedSlotVO.isFilled()) {
        this.updateProductionControls();
      } else {
        this.selectSlot(this._craftingSlots[0].slotVO);
      }
    }
    if (__s128param0.queueID == -1) {
      this.updateCastleList();
    }
    if (this._switchToMovedSlotOnUpdate) {
      var __s128local1 = this._craftingSlots.find(function (__s136param0) {
        return !__s136param0.slotVO.isProductionSlot && __s136param0.slotVO.slotIndex == __s128local0._draggedQueueSlotToIndex;
      });
      this.selectSlot(__s128local1.slotVO);
      this._switchToMovedSlotOnUpdate = false;
      this._draggedQueueSlotToIndex = -1;
    }
  };
  CastleRefineryToolsmithDialog.prototype.onClick = function (__s138param0) {
    __s1param0.prototype.onClick.call(this, __s138param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s138param0.target)) {
      if (__s138param0.target.name && __s138param0.target.name.startsWith("tab_")) {
        var __s138local0 = parseInt(__s138param0.target.name.split("_")[1]);
        this.showProductionQueue(__s138local0);
      }
      switch (__s138param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          switch (this.dialogProperties.queueID) {
            case CastleRefineryToolsmithDialog.REFINERY:
              __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_crafting_refinery"));
              break;
            case CastleRefineryToolsmithDialog.TOOLSMITH:
              __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_crafting_toolsmith"));
              break;
            case CastleRefineryToolsmithDialog.DRAGONHOARD:
              __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_dragonhoard"));
              break;
            case CastleRefineryToolsmithDialog.DRAGONBREATHFORGE:
              __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_dragonbreathforge"));
          }
          break;
        case this.dialogDisp.mc_queue.mc_selectedProduction.btn_skip:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleSkipCraftingDialog.CastleSkipCraftingDialog, new __dep_export_CastleSkipCraftingDialogProperties.CastleSkipCraftingDialogProperties(this._selectedSlotVO));
          break;
        case this.dialogDisp.mc_queue.mc_selectedProduction.btn_cancel:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleCancelCraftingDialog.CastleCancelCraftingDialog, new __dep_export_CastleCancelCraftingDialogProperties.CastleCancelCraftingDialogProperties(this._selectedSlotVO));
          break;
        case this.dialogDisp.mc_fullList.btn_collapse:
          this.dialogDisp.mc_fullList.visible = false;
          break;
        case this.dialogDisp.mc_resourceStorage.btn_expand:
          this.dialogDisp.mc_fullList.visible = true;
      }
    }
  };
  CastleRefineryToolsmithDialog.prototype.getShownStorageItems = function () {
    var __s144local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.currentCastleVO.objectId, this.currentCastleVO.kingdomID);
    switch (this.dialogProperties.queueID) {
      case CastleRefineryToolsmithDialog.REFINERY:
        return [__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.WOOD, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.WOOD)), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.STONE, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.STONE)), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.IRON, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.IRON)), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GLASS, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.GLASS)), __dep_export_CastleModel.CastleModel.currencyData.c1, __dep_export_CastleModel.CastleModel.currencyData.c2, __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_LUMBER), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_LUMBER), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_STONE), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_STONE), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_STEEL), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_STEEL), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_GLASS), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_GLASS)];
      case CastleRefineryToolsmithDialog.TOOLSMITH:
        return [__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.IRON, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.IRON)), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.COAL, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.COAL)), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.OIL, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.OIL)), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GLASS, __s144local0.getResource(__dep_export_CollectableEnum.CollectableEnum.GLASS)), __dep_export_CastleModel.CastleModel.currencyData.c1, __dep_export_CastleModel.CastleModel.currencyData.c2, __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_LUMBER), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_LUMBER), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_STONE), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_REFINED_STONE), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT1), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT1), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT2), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT2), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT3), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT3), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT4), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT4), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT5), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT5), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT6), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT6), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT7), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT7), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT8), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_COMPONENT8)];
      case CastleRefineryToolsmithDialog.DRAGONHOARD:
        return [__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_MATERIAL), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_MATERIAL), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_TOKEN), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_TOKEN), __dep_export_CastleModel.CastleModel.currencyData.c1, __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_TABLET), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SCEAT_TOKEN), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SCALE_TILE), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SCALE_TILE), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_CHARM), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_CHARM)];
      case CastleRefineryToolsmithDialog.DRAGONBREATHFORGE:
        return [__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_STEEL), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_STEEL), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_GLASS), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_GLASS), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_CHARM), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_CHARM), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SPLINTERS), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SPLINTERS), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_TWIN_FLAME_AXES), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_TWIN_FLAME_AXES), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_GLASS_ARROWS), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_GLASS_ARROWS), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SCALE_ARMOR), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SCALE_ARMOR), __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SCALE_ARROWS), __dep_export_ClientConstCurrency.ClientConstCurrency.ID_DRAGON_SCALE_ARROWS)];
    }
    return [];
  };
  Object.defineProperty(CastleRefineryToolsmithDialog.prototype, "currentCastleVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.craftingData.currentCastleVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRefineryToolsmithDialog.NAME = "CastleRefineryToolsmith_May24";
  CastleRefineryToolsmithDialog.REFINERY = 1;
  CastleRefineryToolsmithDialog.TOOLSMITH = 2;
  CastleRefineryToolsmithDialog.DRAGONHOARD = 3;
  CastleRefineryToolsmithDialog.DRAGONBREATHFORGE = 4;
  CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP = 4;
  CastleRefineryToolsmithDialog.STORAGE_LIST_STARTX = -297;
  CastleRefineryToolsmithDialog.FULL_LIST_ITEMS_PER_ROW = 7;
  return CastleRefineryToolsmithDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleRefineryToolsmithDialog = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
