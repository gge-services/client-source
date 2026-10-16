Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetContructionItemsInventoryVO = require("gge-module:export_C2SGetContructionItemsInventoryVO");
var __dep_export_C2SShowPackageListVO = require("gge-module:export_C2SShowPackageListVO");
var __dep_export_CastleConstructionItemsEvent = require("gge-module:export_CastleConstructionItemsEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ConstructionItemSlotVO = require("gge-module:export_ConstructionItemSlotVO");
var __dep_export_ConstructionItemVO = require("gge-module:export_ConstructionItemVO");
var __dep_export_ComboboxItemRendererCastleListCI = require("gge-module:export_ComboboxItemRendererCastleListCI");
var __dep_export_ComboboxItemRendererConstructionItemEffectAmount = require("gge-module:export_ComboboxItemRendererConstructionItemEffectAmount");
var __dep_export_ComboboxItemRendererConstructionItemRarity = require("gge-module:export_ComboboxItemRendererConstructionItemRarity");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_ConstructionItemsActionProperties = require("gge-module:export_ConstructionItemsActionProperties");
var __dep_export_CastleConstructionItemsFilterSublayer = require("gge-module:export_CastleConstructionItemsFilterSublayer");
var __dep_export_CIBuildingScrollItemVO = require("gge-module:export_CIBuildingScrollItemVO");
var __dep_export_ConstructionItemScrollItemVO = require("gge-module:export_ConstructionItemScrollItemVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __s0local3 = /^slot/;
var __s0local4 = function (__s1param0) {
  function CastleConstructionItemsAssignSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param0.mc_buildingList) || this;
    __s3local0.showDetailedList = true;
    __s3local0._preventMEC = false;
    __s3local0._boostInProgress = false;
    __s3local0._currentSortOption = CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING;
    __s3local0.initTextFields();
    __s3local0.initBuildingSlots();
    __s3local0.initBuildingStats();
    __s3local0.hideInfoPanels();
    __s3local0.initInventoryFilters();
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CIBuildingListItem.CIBuildingListItem, "ModernCIBuildListItem_Small", __dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.NAME);
    __s3local1.itemPaddingY = 2;
    __s3local0._buildingListDetail = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_buildingList.buildList_detail), __s3local1);
    var __s3local2 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CIBuildingListItem.CIBuildingListItem, "ModernCIBuildListItem_Big", __dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.NAME);
    __s3local2.itemPaddingY = 2;
    __s3local0._buildingListOverview = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_buildingList.buildList_overview), __s3local2);
    var __s3local3 = __s3local0.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.height * __s3local0.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.scaleY;
    var __s3local4 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.subLayerDisp.panel_buildingInfo.mc_effectList.mc_slider).addMouseWheelElements([__s3local0.subLayerDisp.panel_buildingInfo.mc_effectList]);
    var __s3local5 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, __s3local3);
    __s3local0._buildingEffectsScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s3local4, __s3local5, true);
    __s3local0._inventoryList = new __dep_exact_9e901e8e2483a22f_5.ItemScrollList(__s3local0.subLayerDisp.inventoryComponent, __s3local0.subLayerDisp.inventoryComponent);
    __s3local0._inventoryList.scrollItemClass = __dep_export_ConstructionItemScrollItem.ConstructionItemScrollItem;
    __s3local0._inventoryList.scrollStep = __s3local0._inventoryList.itemsVisibleAtOnce;
    __s3local0._castleSelector = new __dep_export_CastleSelectorComponent.CastleSelectorComponent(__s3local0.subLayerDisp.mc_buildingList.mc_castleSelector, 10, "", 1, 17, 22, __dep_export_ComboboxItemRendererCastleListCI.ComboboxItemRendererCastleListCI, 4);
    __s3local0._boostCIRenderOptions = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local2(55, 55));
    __s3local0.subLayerDisp.mc_boost.visible = false;
    __s3local0.subLayerDisp.inventoryComponent.tab0.tabIcon.gotoAndStop(1);
    __s3local0.subLayerDisp.inventoryComponent.tab1.tabIcon.gotoAndStop(3);
    __s3local0.subLayerDisp.inventoryComponent.tab2.tabIcon.gotoAndStop(2);
    __s3local0.subLayerDisp.inventoryComponent.tab3.tabIcon.gotoAndStop(4);
    __s3local0.subLayerDisp.inventoryComponent.tab0.toolTipText = "dialog_ci_assign_inventory_tab_all";
    __s3local0.subLayerDisp.inventoryComponent.tab1.toolTipText = "dialog_ci_assign_inventory_tab_primary";
    __s3local0.subLayerDisp.inventoryComponent.tab2.toolTipText = "dialog_ci_assign_inventory_tab_appearance";
    __s3local0.subLayerDisp.inventoryComponent.tab3.toolTipText = "dialog_ci_assign_inventory_tab_secondary";
    __s3local0.subLayerDisp.mc_storageCapacity.toolTipText = "dialog_ci_assign_inventory_storage_tooltip";
    __s3local0.subLayerDisp.mc_storageCapacity.mouseChildren = false;
    __s3local0.subLayerDisp.mc_buildingList.mc_buildingIcon.toolTipText = "dialog_ci_assign_list_buildings_tooltip";
    __s3local0.subLayerDisp.mc_buildingList.mc_itemsIcon.toolTipText = "dialog_ci_assign_list_items_tooltip";
    __s3local0.subLayerDisp.mc_buildingList.btn_listView.toolTipText = "dialog_ci_assign_list_listView_tooltip";
    __s3local0.subLayerDisp.mc_boost.mc_boost1.toolTipText = "currency_name_RareBoosterConsumable";
    __s3local0.subLayerDisp.mc_boost.mc_boost2.toolTipText = "currency_name_EpicBoosterConsumable";
    __s3local0.subLayerDisp.mc_boost.mc_boost3.toolTipText = "currency_name_LegendaryBoosterConsumable";
    __s3local0.subLayerDisp.mc_disassemble.toolTipText = "dialog_ci_assign_info_disassemble";
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([__s3local0.subLayerDisp.inventoryComponent.tab0, __s3local0.subLayerDisp.inventoryComponent.tab1, __s3local0.subLayerDisp.inventoryComponent.tab2, __s3local0.subLayerDisp.inventoryComponent.tab3]);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3local0.subLayerDisp.mc_buildingList.mc_buildingIcon, __s3local0.subLayerDisp.mc_buildingList.mc_itemsIcon, __s3local0.subLayerDisp.panel_itemInfo.mc_upgrade.btn_upgrade, __s3local0.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft, __s3local0.subLayerDisp.mc_buildingList.btn_listView, __s3local0.subLayerDisp.inventoryComponent.btn_up, __s3local0.subLayerDisp.inventoryComponent.btn_down, __s3local0.subLayerDisp.mc_buildingList.mc_expiredOnly]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.panel_itemInfo.btn_deselect, __s3local0.subLayerDisp.panel_buildingInfo.btn_deselect, __s3local0.subLayerDisp.mc_boost.btn_deselect, __s3local0.subLayerDisp.mc_boost.btn_boost1, __s3local0.subLayerDisp.mc_boost.btn_boost2, __s3local0.subLayerDisp.mc_boost.btn_boost3], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    if (__s3local0.subLayerDisp.mc_boost.anim_boost) {
      __s3local0.subLayerDisp.mc_boost.anim_boost.mouseEnabled = false;
      __s3local0.subLayerDisp.mc_boost.anim_boost.gotoAndStop(1);
      __s3local0.subLayerDisp.mc_boost.anim_arrows.gotoAndStop(1);
      __s3local0.subLayerDisp.mc_boost.addChild(__s3local0.subLayerDisp.mc_boost.anim_boost);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsAssignSublayer, __s1param0);
  CastleConstructionItemsAssignSublayer.prototype.initBuildingSlots = function () {
    this.slots = [];
    for (var __s6local0 = 0; __s6local0 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++__s6local0) {
      for (var __s6local1 = 0; __s6local1 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS[__s6local0]; ++__s6local1) {
        var __s6local2 = new __dep_export_ConstructionItemSlotBig.ConstructionItemSlotBig(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__s6local0, __s6local1), this.interactionData, this.bindFunction(this.onClickConstructionItemSlot), this.bindFunction(this.onClickConstructionItemSlotExtract), this.subLayerDisp.panel_buildingInfo["slot_" + __s6local0 + "_" + __s6local1]);
        this.slots.push(__s6local2);
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.initBuildingStats = function () {
    var __s12local0 = new Map();
    __s12local0.set(1, CastleConstructionItemsAssignSublayer.ONE_ICON_POSITION);
    __s12local0.set(2, CastleConstructionItemsAssignSublayer.TWO_ICONS_POSITIONS);
    __s12local0.set(3, CastleConstructionItemsAssignSublayer.THREE_ICONS_POSITIONS);
    __s12local0.set(4, CastleConstructionItemsAssignSublayer.FOUR_ICONS_POSITIONS);
    __s12local0.set(5, CastleConstructionItemsAssignSublayer.FIVE_ICONS_POSITIONS);
    __s12local0.set(6, CastleConstructionItemsAssignSublayer.SIX_ICONS_POSITIONS);
    __s12local0.set(CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_START_POSITION + 2, CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED);
    this._buildingStats = new __dep_export_CastleBuildingStats.CastleBuildingStats(this.subLayerDisp.panel_buildingInfo, __s12local0, CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_START_POSITION);
  };
  CastleConstructionItemsAssignSublayer.prototype.initTextFields = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_header"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_instructions01_header"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_instructions01_info"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.text_buildingTip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_instructions02")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_defaultInfo.txt_inventoryTip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_instructions03")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_effectsTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_effects"));
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_buildingTip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_itemHelp")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.mc_upgrade.txt_upgrade, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_info_craft")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.mc_timer.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("remainingTime"));
    this.textFieldManager.registerTextField(this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_inventory_craft"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_tempCi_boostOverlay_header"));
    this.itxt_itemInfoName = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_itemInfoLevel = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ci_level"));
    this.itxt_itemInfoRarity = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_rarity, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_itemInfoType = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_type, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_itemInfoEffects = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.txt_effects, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_itemInfoTimer = this.textFieldManager.registerTextField(this.subLayerDisp.panel_itemInfo.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_buildingInfoName = this.textFieldManager.registerTextField(this.subLayerDisp.panel_buildingInfo.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_buildingInfoLevel = this.textFieldManager.registerTextField(this.subLayerDisp.panel_buildingInfo.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("building_level"));
    this.itxt_emptyInventory = this.textFieldManager.registerTextField(this.subLayerDisp.inventoryComponent.txt_empty, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ci_assign_inventory_empty_none"));
    this.itxt_storageInfo = this.textFieldManager.registerTextField(this.subLayerDisp.mc_storageCapacity.txt_storageCapacity, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.itxt_tempTimerCurrent = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.mc_timerCurrent.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_tempTimerNew = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.mc_timerNew.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO("-   "));
    this.itxt_booster1 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_boost1, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_booster2 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_boost2, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_booster3 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_boost.txt_boost3, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_emptyInventory.mouseEnabled = false;
    this.itxt_emptyInventory.verticalAlign = __dep_exact_9e901e8e2483a22f_3.GGSVerticalAlign.MIDDLE;
    this.itxt_itemInfoType.autoFitToBounds = true;
    this.subLayerDisp.mc_boost.mc_timerCurrent.mouseChildren = false;
    this.subLayerDisp.mc_boost.mc_timerNew.mouseChildren = false;
    this.subLayerDisp.mc_boost.mc_timerCurrent.toolTipText = "dialog_ci_tempCi_remainingItemTime_tooltip";
    this.subLayerDisp.mc_boost.mc_timerNew.toolTipText = "dialog_ci_tempCi_boostedTotalItemTime_tooltip";
  };
  CastleConstructionItemsAssignSublayer.prototype.initInventoryFilters = function () {
    var __s16local0;
    this._filterConstructionItemEffectAmount = this.comboBox(this.subLayerDisp.inventoryComponent.mc_filterEffectAmount, __dep_export_ComboboxItemRendererConstructionItemEffectAmount.ComboboxItemRendererConstructionItemEffectAmount, false);
    this._filterConstructionItemRarity = this.comboBox(this.subLayerDisp.inventoryComponent.mc_filterRarity, __dep_export_ComboboxItemRendererConstructionItemRarity.ComboboxItemRendererConstructionItemRarity, false);
    for (var __s16local1 = 0; __s16local1 <= __dep_export_ConstructionItemData.ConstructionItemData.MAX_EFFECTS_PER_CI; __s16local1++) {
      (__s16local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s16local1 == 0 ? "dialog_ci_filter_effects_all" : "dialog_ci_filter_effects_" + __s16local1);
      __s16local0.data = __s16local1;
      this._filterConstructionItemEffectAmount.addItem(__s16local0);
    }
    for (var __s16local2 = -1; __s16local2 <= __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY; __s16local2++) {
      (__s16local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s16local2 == -1 ? "dialog_ci_filter_rarities_all" : __dep_export_ConstructionItemVO.ConstructionItemVO.rarityText(__s16local2));
      __s16local0.data = __s16local2;
      this._filterConstructionItemRarity.addItem(__s16local0);
    }
    this._filterConstructionItemEffectAmount.selectItemIndex(0);
    this._filterConstructionItemRarity.selectItemIndex(0);
  };
  CastleConstructionItemsAssignSublayer.prototype.onChangeConstructionItemEffectAmountFilter = function (__s22param0 = null) {
    this.interactionData.setFilterConstructionItemEffectAmount(this._filterConstructionItemEffectAmount.selectedData);
  };
  CastleConstructionItemsAssignSublayer.prototype.onChangeConstructionItemRatityFilter = function (__s24param0 = null) {
    this.interactionData.setFilterConstructionItemRarity(this._filterConstructionItemRarity.selectedData);
  };
  CastleConstructionItemsAssignSublayer.prototype.onClick = function (__s26param0) {
    __s26param0.target = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s26param0.target);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.subLayerDisp.inventoryComponent.tab0:
        case this.subLayerDisp.inventoryComponent.tab1:
        case this.subLayerDisp.inventoryComponent.tab2:
        case this.subLayerDisp.inventoryComponent.tab3:
          this.onClickTab(parseInt(__s26param0.target.name.replace("tab", "")));
          break;
        case this.subLayerDisp.inventoryComponent.background:
          this.onInventoryItemClick(null);
          break;
        case this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog);
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING));
          break;
        case this.subLayerDisp.mc_buildingList.mc_buildingIcon:
          this._currentSortOption = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING ? CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_ASCENDING : CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING;
          this.updateBuildingList(false);
          break;
        case this.subLayerDisp.mc_buildingList.mc_itemsIcon:
          this._currentSortOption = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING ? CastleConstructionItemsAssignSublayer.SORTOPTION_CI_ASCENDING : CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING;
          this.updateBuildingList(false);
          break;
        case this.subLayerDisp.panel_itemInfo.mc_upgrade.btn_upgrade:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog);
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING, null, null, this.interactionData.draggedItemUpgradeRecipe));
          break;
        case this.subLayerDisp.mc_disassemble:
          this.onDisassembleClick();
          break;
        case this.subLayerDisp.mc_buildingList.btn_listView:
          this.toggleListType();
          break;
        case this.subLayerDisp.panel_itemInfo.btn_deselect:
          this.stopDrag();
          break;
        case this.subLayerDisp.panel_buildingInfo.btn_deselect:
          this.stopDrag();
          this.interactionData.setSelectedBuilding(null);
          break;
        case this.subLayerDisp.mc_boost.btn_deselect:
          this.hideBoosterOverlay();
          break;
        case this.subLayerDisp.mc_boost.btn_boost1:
          this.boostConstructionItem(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE);
          break;
        case this.subLayerDisp.mc_boost.btn_boost2:
          this.boostConstructionItem(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE);
          break;
        case this.subLayerDisp.mc_boost.btn_boost3:
          this.boostConstructionItem(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE);
          break;
        case this.subLayerDisp.mc_buildingList.mc_expiredOnly:
          this.interactionData.setFilterExpiredOnly(!this.interactionData.filterExpiredOnly);
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.toggleListType = function () {
    this.currentBuildingList.setVisibility(false);
    this.currentBuildingList.onHide();
    this.showDetailedList = !this.showDetailedList;
    this.currentBuildingList.setVisibility(true);
    this.currentBuildingList.onShow();
    this.subLayerDisp.mc_buildingList.btn_listView.toolTipText = this.showDetailedList ? "dialog_ci_assign_list_listView_tooltip" : "dialog_ci_assign_list_detailView_tooltip";
    this.subLayerDisp.mc_buildingList.btn_listView.gotoAndStop(this.showDetailedList ? 1 : 2);
    this.updateBuildingList(true);
  };
  CastleConstructionItemsAssignSublayer.prototype.onDisassembleClick = function () {
    var __s32local0 = this;
    if (this.interactionData.draggedItem) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsDisassembleDialog.CastleConstructionItemsDisassembleDialog, new __dep_export_ConstructionItemsActionProperties.ConstructionItemsActionProperties(this.interactionData.draggedItem.constructionItemVO, null, null, function () {
        __s32local0.updateInventory(__s32local0._inventoryList.currentStartIndex);
      }));
      this.interactionData.setDraggedItem(null);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickTab = function (__s37param0) {
    if (!this.interactionData.draggedItem) {
      this.interactionData.setCurrentItemFilter(this.interactionData.ITEM_FILTERS[__s37param0]);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickItemSlotInBuilding = function (__s40param0) {
    if (this.interactionData.selectedSlot && this.interactionData.selectedSlot.equals(__s40param0.slotVO) || __s40param0.buildingVO != this.interactionData.selectedBuilding) {
      this.interactionData.setSelectedBuilding(__s40param0.buildingVO, false);
    }
    this.handleSlotClick(__s40param0);
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickBuilding = function (__s43param0) {
    this.interactionData.setSelectedBuilding(__s43param0);
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryItemTouchDrageStart = function (__s45param0) {
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
    if (__s45param0) {
      var __s45local0 = __s45param0.scrollItem;
      var __s45local1 = __s45local0.disp.mc_icon.getChildAt(0);
      __s45local0.disp.mc_icon.removeChildAt(0);
      this.interactionData.setDraggedItem(__s45local0.constructionItemScrollItemVO.collectableItem);
      this.layoutManager.nativeCursor.startDrag(__s45local1, 0, 0, __dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
    } else {
      this.stopDrag();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryItemTouchDrageEnd = function (__s49param0) {
    if (__s49param0 && __s49param0.originEvent) {
      var __s49local0 = __s49param0.originEvent.target.stage.getObjectUnderPoint(__s49param0.originEvent.rawX, __s49param0.originEvent.rawY, 0);
      switch (__s49local0.parent) {
        case this.subLayerDisp.inventoryComponent.background:
          this.onInventoryItemClick(null);
          return;
        case this.subLayerDisp.mc_disassemble:
          this.onDisassembleClick();
          return;
      }
      var __s49local1 = __s49local0.parent && __s49local0.parent.parent;
      if (__s49local1 && (__s49local1.parent === this.subLayerDisp.mc_buildingList.buildList_detail || __s49local1.parent === this.subLayerDisp.panel_buildingInfo) && __s49local1.name && __s0local3.test(__s49local1.name)) {
        __s49local1.dispatchEvent(__s0local1.CLICK, __s49local1.mc_item);
        this.stopDrag();
        return;
      }
    }
    this.stopDrag();
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryItemClick = function (__s54param0) {
    if (__s54param0) {
      var __s54local0 = __s54param0.scrollItem;
      var __s54local1 = __s54local0.disp.mc_icon.getChildAt(0);
      __s54local0.disp.mc_icon.removeChildAt(0);
      this.interactionData.setDraggedItem(__s54local0.constructionItemScrollItemVO.collectableItem);
      if (!__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isTouchEvent(__s54param0.originEvent)) {
        this.layoutManager.nativeCursor.startDrag(__s54local1, 25, 35, __dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
      }
    } else {
      this.stopDrag();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickConstructionItemSlotExtract = function (__s59param0) {
    if (__s59param0.itemVO) {
      if (__s59param0.itemVO.isTemporary) {
        this.subLayerDisp.mc_boost.visible = true;
        this.subLayerDisp.mc_disassemble.visible = false;
        this.subLayerDisp.bg_disassemble.visible = false;
        this.updateBoostOverlay();
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsExtractDialog.CastleConstructionItemsExtractDialog, new __dep_export_ConstructionItemsActionProperties.ConstructionItemsActionProperties(__s59param0.itemVO, this.interactionData.selectedSlot, this.interactionData.selectedBuilding, null));
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onClickConstructionItemSlot = function (__s64param0) {
    this.handleSlotClick(__s64param0);
  };
  CastleConstructionItemsAssignSublayer.prototype.handleSlotClick = function (__s66param0) {
    if (__s66param0.isLocked()) {
      __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.handleSlotClickLocked(__s66param0.slotVO);
    } else if (this.interactionData.draggedItem) {
      if (this.interactionData.selectedBuilding.getConstructionItem(__s66param0.slotVO)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsOverwriteDialog.CastleConstructionItemsOverwriteDialog, new __dep_export_ConstructionItemsActionProperties.ConstructionItemsActionProperties(this.interactionData.draggedItem.constructionItemVO, __s66param0.slotVO, this.interactionData.selectedBuilding, null));
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConstructionItemsEmbedDialog.CastleConstructionItemsEmbedDialog, new __dep_export_ConstructionItemsActionProperties.ConstructionItemsActionProperties(this.interactionData.draggedItem.constructionItemVO, __s66param0.slotVO, this.interactionData.selectedBuilding, null));
      }
      this.stopDrag();
    } else {
      this.interactionData.setSelectedSlot(__s66param0.slotVO);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.stopDrag = function () {
    if (this.interactionData.draggedItem) {
      this.interactionData.setDraggedItem(null);
      this.layoutManager.nativeCursor.stopAllDrag();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onInteractionUpdate = function (__s76param0) {
    this.updateDialog();
  };
  CastleConstructionItemsAssignSublayer.prototype.updateDialog = function () {
    this.updateInfoPanel();
    this.updateBuildingFilters();
    this.updateInventory(this._inventoryList.currentStartIndex);
    this.updateBuildingList(false);
    this.updateBoostOverlay();
  };
  CastleConstructionItemsAssignSublayer.prototype.updateInfoPanel = function () {
    if (this.interactionData.selectedBuilding) {
      this.showBuildingInfo();
    } else if (this.interactionData.draggedItem) {
      this.showItemInfo();
    } else {
      this.showDefaultInfo();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBuildingList = function (__s85param0) {
    this.subLayerDisp.mc_buildingList.mc_buildingIcon.mc_arrow.visible = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_ASCENDING || this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING;
    this.subLayerDisp.mc_buildingList.mc_buildingIcon.mc_arrow.gotoAndStop(this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING ? 1 : 2);
    this.subLayerDisp.mc_buildingList.mc_itemsIcon.mc_arrow.visible = this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_ASCENDING || this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING;
    this.subLayerDisp.mc_buildingList.mc_itemsIcon.mc_arrow.gotoAndStop(this._currentSortOption == CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING ? 1 : 2);
    this.subLayerDisp.mc_buildingList.mc_expiredOnly.visible = !!this.interactionData.expiredAreaVO && this.interactionData.expiredAreaVO.expiredCIs.length > 0;
    if (this.interactionData.filterExpiredOnly && !this.subLayerDisp.mc_buildingList.mc_expiredOnly.visible) {
      this.interactionData.setFilterExpiredOnly(false, false);
    }
    if (this.interactionData.filterExpiredOnly) {
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.toolTipText = "dialog_ci_assign_tempCiExpired_filterShowAll_tooltip";
    } else {
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.useFilters(null);
      this.subLayerDisp.mc_buildingList.mc_expiredOnly.toolTipText = "dialog_ci_assign_tempCiExpired_filterShowTemp_tooltip";
    }
    var __s85local0 = [];
    var __s85local1 = __dep_export_Iso.Iso.data.objects.provider.getObjectsByListTypes([__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.DEFENCE]);
    if ((__s85local1 = (__s85local1 = __s85local1.filter(this.bindFunction(this.filterBuildings_0))).sort(this.bindFunction(this.sortBuildings))) != null) {
      for (var __s85local2 = 0, __s85local3 = __s85local1; __s85local2 < __s85local3.length; __s85local2++) {
        var __s85local4 = __s85local3[__s85local2];
        if (__s85local4 !== undefined) {
          __s85local0.push(new __dep_export_CIBuildingScrollItemVO.CIBuildingScrollItemVO(__s85local4, this.interactionData, this.bindFunction(this.onClickItemSlotInBuilding), this.bindFunction(this.onClickBuilding)));
        }
      }
    }
    this.currentBuildingList.updateWithNewData(__s85local0, __s85param0);
  };
  CastleConstructionItemsAssignSublayer.prototype.filterBuildings_0 = function (__s94param0) {
    var __s94local0 = [];
    for (var __s94local1 = 1; __s94local1 < arguments.length; __s94local1++) {
      __s94local0[__s94local1 - 1] = arguments[__s94local1];
    }
    return !!__s94param0 && (this.interactionData.draggedItem ? __s94param0.constructionItemGroupIds.indexOf(this.interactionData.draggedItem.constructionItemVO.groupId) > -1 : this.filterBuilding(__s94param0));
  };
  CastleConstructionItemsAssignSublayer.prototype.updateInventory = function (__s98param0) {
    for (var __s98local0 = 0; __s98local0 <= this.interactionData.ITEM_FILTERS.length; __s98local0++) {
      if (__dep_export_ButtonHelper.ButtonHelper.isButtonSelected(this.subLayerDisp.inventoryComponent["tab" + __s98local0]) && this.interactionData.ITEM_FILTERS[__s98local0] != this.interactionData.currentItemFilter) {
        __s98param0 = 0;
      }
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.subLayerDisp.inventoryComponent["tab" + __s98local0], this.interactionData.ITEM_FILTERS[__s98local0] == this.interactionData.currentItemFilter);
    }
    this._inventoryList.clear();
    var __s98local1 = __dep_export_CastleModel.CastleModel.constructionItemData.getPlayerInventoryBySlotTypeAndBuilding(this.interactionData.currentItemFilter, this.interactionData.selectedBuilding || this.interactionData.filterBuildingType, this.interactionData.filterBuildingGroundType, this.interactionData.filterConstructionItemEffectAmount, this.interactionData.filterConstructionItemRarity);
    __s98local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortConstructionItems);
    for (var __s98local2 = 0, __s98local3 = __s98local1.list; __s98local2 < __s98local3.length; __s98local2++) {
      var __s98local4 = __s98local3[__s98local2];
      if (__s98local4 !== undefined && this.interactionData.draggedItem != __s98local4) {
        this._inventoryList.pushContent(new __dep_export_ConstructionItemScrollItemVO.ConstructionItemScrollItemVO(__s98local4));
      }
    }
    var __s98local5 = (Math.ceil(this._inventoryList.voList.length / this._inventoryList.veList.length) - 1) * this._inventoryList.veList.length;
    if (__s98param0 > __s98local5) {
      __s98param0 = __s98local5;
    }
    this._inventoryList.initList(__s98param0, true);
    if (__s98local1.length == 0) {
      this.itxt_emptyInventory.visible = true;
      this.itxt_emptyInventory.textContentVO.textId = this.interactionData.selectedBuilding || this.interactionData.filterBuildingGroundType || this.interactionData.filterBuildingType ? "dialog_ci_assign_inventory_empty_building" : this.interactionData.currentItemFilter == __dep_export_ConstructionItemData.ConstructionItemData.ALL_SLOTS && this.interactionData.filterConstructionItemEffectAmount == 0 && this.interactionData.filterConstructionItemRarity == -1 ? "dialog_ci_assign_inventory_empty_none" : "dialog_ci_assign_inventory_empty_tab";
      this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft.visible = true;
    } else {
      this.itxt_emptyInventory.visible = false;
      this.itxt_emptyInventory.textContentVO.textId = "";
      this.subLayerDisp.inventoryComponent.btn_emptyInventoryCraft.visible = false;
    }
    this.setStorageText();
  };
  CastleConstructionItemsAssignSublayer.prototype.setStorageText = function () {
    var __s109local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.constructionItemData.getPlayerInventoryBySlotTypeAndBuilding().list.reduce(function (__s111param0, __s111param1) {
      return __s111param0 + __s111param1.amount;
    }, 0));
    this.itxt_storageInfo.textContentVO.textReplacements = [__s109local0, __dep_exact_26a421b704832cff.ConstructionItemConst.INVENTORY_SOFTCAP];
    this.itxt_storageInfo.color = __s109local0 >= CastleConstructionItemsAssignSublayer.STORAGE_WARNING ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED : 4469542;
  };
  CastleConstructionItemsAssignSublayer.prototype.showDefaultInfo = function () {
    this.showInfoPanel(this.subLayerDisp.panel_defaultInfo);
  };
  CastleConstructionItemsAssignSublayer.prototype.showItemInfo = function () {
    this.showInfoPanel(this.subLayerDisp.panel_itemInfo);
    var __s115local0 = this.interactionData.draggedItem.constructionItemVO;
    this.itxt_itemInfoName.textContentVO.textId = __s115local0.nameTextId;
    this.itxt_itemInfoLevel.textContentVO.textId = __s115local0.isTemporary ? "temporary" : "ci_level";
    this.itxt_itemInfoLevel.textContentVO.textReplacements = [__s115local0.level];
    this.itxt_itemInfoRarity.textContentVO.textId = __s115local0.rarityTextId;
    this.itxt_itemInfoType.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__s115local0.slotNameTextId) + "\n" + __s115local0.applicableBuildingsString;
    this.itxt_itemInfoEffects.textContentVO.stringValue = __s115local0.effectText;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.subLayerDisp.panel_itemInfo), this.interactionData.draggedItem, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local2(50, 50)));
    this.subLayerDisp.panel_itemInfo.mc_upgrade.visible = this.interactionData.draggedItemUpgradeRecipe;
    this.subLayerDisp.panel_itemInfo.mc_timer.visible = __s115local0.isTemporary;
    if (__s115local0.isTemporary) {
      this.itxt_itemInfoTimer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s115local0.getRemainingTime());
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.showBuildingInfo = function () {
    var __s118local0 = this;
    this.showInfoPanel(this.subLayerDisp.panel_buildingInfo);
    if (this.interactionData.selectedBuilding) {
      var __s118local1 = this._previewConstructionItem ? this._previewBuilding : this.interactionData.selectedBuilding;
      this.itxt_buildingInfoName.textContentVO.textId = this.interactionData.selectedBuilding.getNameString();
      this.itxt_buildingInfoLevel.textContentVO.textReplacements = [this.interactionData.selectedBuilding.level];
      this._buildingStats.showBuildingInfo(__s118local1, this.interactionData.selectedBuilding.multiInfoPanelVO);
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(this.interactionData.selectedBuilding, this.subLayerDisp.panel_buildingInfo.mc_building, 100, 100, "", true);
      __dep_exact_9e901e8e2483a22f_7.MovieClipHelper.clearMovieClip(this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items);
      var __s118local2 = 0;
      __s118local1.constructionItems.forEach(function (__s121param0) {
        if (__s121param0) {
          if (__s118local2 != 0) {
            var __s121local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ConstructionItemEffectList_Divider"))();
            __s121local0.y = __s118local2 + 2;
            __s118local2 = __s121local0.y + __s121local0.height;
            __s118local0.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.addChild(__s121local0);
          }
          var __s121local1 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ConstructionItemEffectList_Effect"))();
          __s121local1.y = __s118local2 + 2;
          __s121local1.txt_name.multiline = true;
          var __s121local2 = __s118local0.textFieldManager.registerTextField(__s121local1.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s121param0.nameTextId), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
          var __s121local3 = __s118local0.textFieldManager.registerTextField(__s121local1.txt_effects, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s121param0.effectText), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
          __s121local3.color = __s121param0 == __s118local0._previewConstructionItem ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
          __s121local2.height = __s121local2.textHeight;
          __s121local3.height = __s121local3.textHeight;
          __s121local3.y = __s121local2.height;
          __s118local2 = __s121local1.y + __s121local1.height;
          __s118local0.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.addChild(__s121local1);
          if (__s121param0.isAppearanceItem && __s121param0.isTemporary) {
            var __s121local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ConstructionItemEffectList_Timer"))();
            __s121local4.y = __s118local2 + 2;
            __s118local0.textFieldManager.registerTextField(__s121local4.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("remainingTime"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
            __s118local0.itxt_tempTimerBuilding = __s118local0.textFieldManager.registerTextField(__s121local4.txt_timer, new __dep_exact_92d05af59ee2ff30_3.TextVO(""), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
            __s118local0.itxt_tempTimerBuilding.color = __s121param0 == __s118local0._previewConstructionItem ? __dep_export_ClientConstColor.ClientConstColor.GENERIC_GREEN : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
            __s118local2 = __s121local4.y + __s121local4.height;
            __s118local0.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.addChild(__s121local4);
          }
        }
      });
      this.updateBuildingCITimer();
      var __s118local3 = this._buildingEffectsScrollComponent.currentValue;
      var __s118local4 = Math.max(0, __s118local2 - this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.height * this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.mask.scaleY);
      this._buildingEffectsScrollComponent.init(0, __s118local4, 30, 30);
      this._buildingEffectsScrollComponent.scrollToValue(__s118local3);
      this._buildingEffectsScrollComponent.show();
      this._buildingEffectsScrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollEffectListBuilding));
      this._buildingEffectsScrollComponent.setVisibility(__s118local4 > 0);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onScrollEffectListBuilding = function () {
    this.subLayerDisp.panel_buildingInfo.mc_effectList.mc_items.y = -this._buildingEffectsScrollComponent.currentValue;
  };
  CastleConstructionItemsAssignSublayer.prototype.showInfoPanel = function (__s128param0) {
    if (!__s128param0.visible) {
      this.hideInfoPanels();
      __s128param0.visible = true;
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.hideInfoPanels = function () {
    this.subLayerDisp.panel_defaultInfo.visible = false;
    this.subLayerDisp.panel_itemInfo.visible = false;
    this.subLayerDisp.panel_buildingInfo.visible = false;
    if (this._buildingEffectsScrollComponent) {
      this._buildingEffectsScrollComponent.scrollToValue(0);
      this._buildingEffectsScrollComponent.hide();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.show = function (__s134param0) {
    __s1param0.prototype.show.call(this, __s134param0);
    if (this.sublayerProperties.buildingSelection) {
      this.interactionData.setSelectedBuilding(null, false);
      this.interactionData.setSelectedBuilding(this.sublayerProperties.buildingSelection, false);
    } else if (this.interactionData.selectedBuilding) {
      this.validateSelectedBuilding();
    }
    if (this.sublayerProperties.itemSlot) {
      this.interactionData.setSelectedSlot(this.sublayerProperties.itemSlot, false);
    }
    this._inventoryList.addEventListener(__dep_exact_9e901e8e2483a22f_6.ScrollItemEvent.CLICK, this.bindFunction(this.onInventoryItemClick));
    this._inventoryList.addEventListener(__dep_exact_9e901e8e2483a22f_6.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onInventoryItemTouchDrageStart));
    this._inventoryList.addEventListener(__dep_exact_9e901e8e2483a22f_6.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onInventoryItemTouchDrageEnd));
    this.interactionData.SGN_UPDATE.add(this.bindFunction(this.onInteractionUpdate));
    __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __dep_export_CastleModel.CastleModel.constructionItemData.addEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.AEC_RECEIVED, this.bindFunction(this.onExpiredCIsReceived));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_UPDATED, this.bindFunction(this.onBuildingUpdated));
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onBuildingRemoved));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onCastleUpdate));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    this._buildingListDetail.scrollComponent.onScrollSignal.add(this.bindFunction(this.hideTooltip));
    this._buildingListOverview.scrollComponent.onScrollSignal.add(this.bindFunction(this.hideTooltip));
    this.controller.addEventListener(__dep_export_CastleConstructionItemsSwitchEvent.CastleConstructionItemsSwitchEvent.SWITCH_CASTLE, this.bindFunction(this.onExpiredCIDialogCastleSwitch));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(__dep_exact_26a421b704832cff_2.UnitProductionConst.UNIT_LIST));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(__dep_exact_26a421b704832cff_2.UnitProductionConst.TOOLS_LIST));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetAllExpiredConstructionItemsVO.C2SGetAllExpiredConstructionItemsVO());
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __dep_export_CastleModel.CastleModel.userData.castleList, __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) : __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle(), [__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID, __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID]);
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    if (this.slots != null) {
      for (var __s134local0 = 0, __s134local1 = this.slots; __s134local0 < __s134local1.length; __s134local0++) {
        var __s134local2 = __s134local1[__s134local0];
        if (__s134local2 !== undefined) {
          __s134local2.show();
        }
      }
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetContructionItemsInventoryVO.C2SGetContructionItemsInventoryVO());
    this.resetInventoryFilters();
    this.currentBuildingList.onShow();
    this.interactionData.triggerUpdate();
    this.sublayerProperties.clear();
    this.hideBoosterOverlay();
  };
  CastleConstructionItemsAssignSublayer.prototype.onUnitUpdated = function (__s143param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(__dep_exact_26a421b704832cff_2.UnitProductionConst.UNIT_LIST));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SShowPackageListVO.C2SShowPackageListVO(__dep_exact_26a421b704832cff_2.UnitProductionConst.TOOLS_LIST));
  };
  CastleConstructionItemsAssignSublayer.prototype.validateSelectedBuilding = function () {
    var __s145local0 = false;
    var __s145local1 = __dep_export_CastleModel.CastleModel.areaData.activeIsoData.objects.getCompleteObjectsList();
    if (__s145local1 != null) {
      for (var __s145local2 = 0, __s145local3 = __s145local1; __s145local2 < __s145local3.length; __s145local2++) {
        var __s145local4 = __s145local3[__s145local2];
        if (__s145local4 !== undefined && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s145local4, "ABasicBuildingVO") && __s145local4 == this.interactionData.selectedBuilding) {
          __s145local0 = true;
          break;
        }
      }
    }
    if (!__s145local0) {
      this.interactionData.setSelectedBuilding(null);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.hideTooltip = function () {
    __dep_export_ConstructionItemTooltipHelper.ConstructionItemTooltipHelper.hideToolTip();
  };
  CastleConstructionItemsAssignSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._inventoryList.removeEventListener(__dep_exact_9e901e8e2483a22f_6.ScrollItemEvent.CLICK, this.bindFunction(this.onInventoryItemClick));
    this._inventoryList.removeEventListener(__dep_exact_9e901e8e2483a22f_6.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onInventoryItemTouchDrageStart));
    this._inventoryList.removeEventListener(__dep_exact_9e901e8e2483a22f_6.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onInventoryItemTouchDrageEnd));
    this._castleSelector.castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this.interactionData.SGN_UPDATE.remove(this.bindFunction(this.onInteractionUpdate));
    __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __dep_export_CastleModel.CastleModel.constructionItemData.removeEventListener(__dep_export_CastleConstructionItemsEvent.CastleConstructionItemsEvent.AEC_RECEIVED, this.bindFunction(this.onExpiredCIsReceived));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_UPDATED, this.bindFunction(this.onBuildingUpdated));
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_OBJECT_REMOVED, this.bindFunction(this.onBuildingRemoved));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_CONSTRUCTION_ITEMS_UPDATED, this.bindFunction(this.onCastleUpdate));
    this._buildingListDetail.scrollComponent.onScrollSignal.remove(this.bindFunction(this.hideTooltip));
    this._buildingListOverview.scrollComponent.onScrollSignal.remove(this.bindFunction(this.hideTooltip));
    this.controller.removeEventListener(__dep_export_CastleConstructionItemsSwitchEvent.CastleConstructionItemsSwitchEvent.SWITCH_CASTLE, this.bindFunction(this.onExpiredCIDialogCastleSwitch));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.UBC_ARRIVED, this.bindFunction(this.onUBCArrived));
    this.stopDrag();
    if (this.slots != null) {
      for (var __s154local0 = 0, __s154local1 = this.slots; __s154local0 < __s154local1.length; __s154local0++) {
        var __s154local2 = __s154local1[__s154local0];
        if (__s154local2 !== undefined) {
          __s154local2.hide();
        }
      }
    }
    if (!this._preventMEC) {
      if (this.interactionData.expiredAreaVO) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarkExpiredConstructionItemVO.C2SMarkExpiredConstructionItemVO(this.interactionData.expiredAreaVO.castleWMO.objectId));
      }
    }
    this._preventMEC = false;
    this.hideBoosterOverlay();
    this.currentBuildingList.onHide();
  };
  CastleConstructionItemsAssignSublayer.prototype.onBuildingUpdated = function (__s162param0) {
    if (this.interactionData.selectedBuilding && this.interactionData.selectedBuilding.objectId == __s162param0.params[0].objectId) {
      this.interactionData.triggerUpdate();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onBuildingRemoved = function (__s165param0) {
    if (this.interactionData.selectedBuilding && this.interactionData.selectedBuilding.objectId == __s165param0.params[0].objectId) {
      this.interactionData.setSelectedBuilding(null, false);
    }
    this.interactionData.triggerUpdate();
  };
  CastleConstructionItemsAssignSublayer.prototype.onCastleUpdate = function (__s168param0) {
    this.interactionData.triggerUpdate();
  };
  CastleConstructionItemsAssignSublayer.prototype.onInventoryUpdated = function (__s170param0) {
    this.updateInventory(this._inventoryList.currentStartIndex);
  };
  CastleConstructionItemsAssignSublayer.prototype.onSelectCastle = function (__s172param0) {
    var __s172local0 = this._castleSelector.castleList.selectedData;
    this.switchCastle(__s172local0);
  };
  CastleConstructionItemsAssignSublayer.prototype.onCastleChanged = function (__s174param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
    this.updateBuildingList(true);
  };
  CastleConstructionItemsAssignSublayer.prototype.onExpiredCIDialogCastleSwitch = function (__s176param0) {
    if (!__s176param0.worldmapObjectVO.equalsOtherWMO(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID)) {
      this._preventMEC = true;
      this.switchCastle(__s176param0.worldmapObjectVO);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.switchCastle = function (__s179param0) {
    this.interactionData.setSelectedBuilding(null);
    this.interactionData.setSelectedSlot(null);
    if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s179param0.spaceID)) {
      this._castleSelector.castleList.selectItemIndex(this._castleSelector.castleList.previousSelectedItem);
    } else {
      if (!this._preventMEC) {
        if (this.interactionData.expiredAreaVO) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarkExpiredConstructionItemVO.C2SMarkExpiredConstructionItemVO(this.interactionData.expiredAreaVO.castleWMO.objectId));
        }
      }
      this._preventMEC = false;
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s179param0);
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
      this.layoutManager.dialogCastleSwitch = true;
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onExpiredCIsReceived = function (__s185param0) {
    this.updateBuildingList(false);
    if (__dep_export_CastleModel.CastleModel.constructionItemData.hasNewExpiredItems()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ConstructionItemExpiredDialog.ConstructionItemExpiredDialog);
      __dep_export_CastleModel.CastleModel.constructionItemData.saveLastExpirationTimestampSeen();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onCurrenciesUpdated = function (__s188param0) {
    this.updateBoosterTextfield(this.itxt_booster1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE);
    this.updateBoosterTextfield(this.itxt_booster2, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE);
    this.updateBoosterTextfield(this.itxt_booster3, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE);
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoosterTextfield = function (__s190param0, __s190param1) {
    var __s190local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s190param1);
    __s190param0.textContentVO.numberValue = __s190local0;
    __s190param0.color = __s190local0 > 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoosterButton = function (__s192param0, __s192param1, __s192param2, __s192param3) {
    if (!__s192param0.tooltip) {
      var __s192local0 = new __s0local0();
      __s192local0.y = -5;
      __s192param0.addChild(__s192local0);
      __s192param0.tooltip = __s192local0;
    }
    var __s192local1 = __dep_export_CastleModel.CastleModel.currencyData.getCurrencyById(__s192param2);
    var __s192local2 = __s192local1 && __s192local1.amount > 0;
    var __s192local3 = __s192param1 && __s192param1.rarity < __s192param3;
    __s192param0.toolTipText = __s192local3 ? __s192local2 ? "apply" : "dialog_ci_assign_tempCi_boostOverlay_noBooster_tooltip" : "dialog_ci_assign_tempCi_boostOverlay_noApplyBooster_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s192param0, __s192local2 && __s192local3);
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoostOverlay = function () {
    if (this.subLayerDisp.mc_boost.visible && !this._boostInProgress) {
      if (this.interactionData.selectedSlot && this.interactionData.selectedBuilding) {
        __dep_exact_9e901e8e2483a22f_7.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_boost.ci_new);
        var __s195local0 = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
        this.updateBoosterButton(this.subLayerDisp.mc_boost.btn_boost1, __s195local0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE, __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_RARE);
        this.updateBoosterButton(this.subLayerDisp.mc_boost.btn_boost2, __s195local0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE, __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_EPIC);
        this.updateBoosterButton(this.subLayerDisp.mc_boost.btn_boost3, __s195local0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE, __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY);
        this.displayCIAsCollectable(this.subLayerDisp.mc_boost.ci_current, __s195local0);
        this.updateBoostCITimer();
        this.onCurrenciesUpdated(null);
        this.createPreviewBuilding();
      } else {
        this.hideBoosterOverlay();
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.displayCIAsCollectable = function (__s200param0, __s200param1) {
    var __s200local0 = new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO();
    __s200local0.constructionItemVO = __s200param1;
    __dep_exact_9e901e8e2483a22f_7.MovieClipHelper.clearMovieClip(__s200param0);
    if (__s200param1) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(__s200param0).addIconMc(__s200param0), __s200local0, this._boostCIRenderOptions);
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBoostCITimer = function () {
    if (this.subLayerDisp.mc_boost.visible && this.interactionData.selectedSlot && this.interactionData.selectedBuilding) {
      var __s203local0 = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
      if (__s203local0) {
        this.itxt_tempTimerCurrent.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s203local0.getRemainingTime());
        if (__s203local0.getRemainingTime() <= 0) {
          this.hideBoosterOverlay();
        }
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.hideBoosterOverlay = function () {
    this._boostInProgress = false;
    this.subLayerDisp.mc_disassemble.visible = true;
    this.subLayerDisp.bg_disassemble.visible = true;
    this.subLayerDisp.mc_boost.visible = false;
    this.subLayerDisp.mc_boost.anim_arrows.gotoAndStop(1);
    this.subLayerDisp.mc_boost.anim_boost.gotoAndStop(1);
    this.subLayerDisp.mc_boost.ci_new.alpha = 1;
    this._previewBuilding = null;
    this._previewConstructionItem = null;
  };
  CastleConstructionItemsAssignSublayer.prototype.updateBuildingCITimer = function () {
    if (this.interactionData.selectedBuilding && this.itxt_tempTimerBuilding) {
      var __s210local0 = this._previewConstructionItem ? this._previewConstructionItem : this.interactionData.selectedBuilding.appearanceItem;
      if (__s210local0 && __s210local0.isTemporary && this.itxt_tempTimerBuilding.textContentVO) {
        this.itxt_tempTimerBuilding.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s210local0.getRemainingTime());
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onTimerUpdate = function () {
    this.updateBuildingCITimer();
    this.updateBoostCITimer();
  };
  CastleConstructionItemsAssignSublayer.prototype.onMouseOver = function (__s216param0) {
    __s1param0.prototype.onMouseOver.call(this, __s216param0);
    switch (__s216param0.target) {
      case this.subLayerDisp.mc_boost.btn_boost1:
        if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s216param0.target)) {
          this.startBoosterPreview(__dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_RARE);
        }
        break;
      case this.subLayerDisp.mc_boost.btn_boost2:
        if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s216param0.target)) {
          this.startBoosterPreview(__dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_EPIC);
        }
        break;
      case this.subLayerDisp.mc_boost.btn_boost3:
        if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s216param0.target)) {
          this.startBoosterPreview(__dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY);
        }
        break;
      default:
        this.endBoosterPreview();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.startBoosterPreview = function (__s222param0) {
    if (this.interactionData && this.interactionData.selectedBuilding && this.interactionData.selectedSlot != null) {
      var __s222local0 = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
      if (__s222local0 && __s222local0.groupId) {
        var __s222local1;
        for (var __s222local2 = 0, __s222local3 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemGroup(__s222local0.groupId); __s222local2 < __s222local3.length; __s222local2++) {
          var __s222local4 = __s222local3[__s222local2];
          if (__s222local4.rarity == __s222param0) {
            __s222local1 = __s222local4;
          }
        }
        if (__s222local1) {
          this.displayCIAsCollectable(this.subLayerDisp.mc_boost.ci_new, __s222local1);
          this._previewConstructionItem = __s222local1;
          this._previewBuilding.appearanceItem = this._previewConstructionItem;
          this.subLayerDisp.mc_boost.anim_arrows.play();
          this.itxt_tempTimerNew.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s222local1.getRemainingTime());
          this.showBuildingInfo();
        }
      }
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.createPreviewBuilding = function () {
    this._previewBuilding = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(this.interactionData.selectedBuilding.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_BUILDING);
    this._previewBuilding.cloneFrom(this.interactionData.selectedBuilding);
  };
  CastleConstructionItemsAssignSublayer.prototype.endBoosterPreview = function () {
    if (this._previewConstructionItem && !this._boostInProgress) {
      this._previewConstructionItem = null;
      __dep_exact_9e901e8e2483a22f_7.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_boost.ci_new);
      this.itxt_tempTimerNew.textContentVO.stringValue = "-   ";
      this.subLayerDisp.mc_boost.anim_arrows.gotoAndStop(1);
      this.showBuildingInfo();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.boostConstructionItem = function (__s235param0) {
    var __s235local0 = this.interactionData.selectedBuilding.getConstructionItem(this.interactionData.selectedSlot);
    if (__s235local0 && this.interactionData.selectedSlot && this.interactionData.selectedBuilding) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUseBoosterConsumableOnConstructionItemVO.C2SUseBoosterConsumableOnConstructionItemVO(this.interactionData.selectedBuilding.objectId, __s235param0, this.interactionData.selectedSlot.index, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __s235local0.id));
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_boost.btn_boost1, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_boost.btn_boost2, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.mc_boost.btn_boost3, false);
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.UBC_ARRIVED, this.bindFunction(this.onUBCArrived));
      this._boostInProgress = true;
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onUBCArrived = function (__s238param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.UBC_ARRIVED, this.bindFunction(this.onUBCArrived));
    if (__s238param0 && __s238param0.params[0] != __dep_exact_26a421b704832cff_4.ERROR.ALL_OK) {
      this.endBoosterPreview();
      this.updateBoostOverlay();
    } else {
      this.subLayerDisp.mc_boost.anim_boost.play();
      this.displayCIAsCollectable(this.subLayerDisp.mc_boost.ci_current, this._previewConstructionItem);
      if (this._previewConstructionItem) {
        this.itxt_tempTimerCurrent.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this._previewConstructionItem.getRemainingTime());
      } else {
        this.itxt_tempTimerCurrent.textContentVO.stringValue = "-   ";
      }
      this.itxt_tempTimerNew.textContentVO.stringValue = "-   ";
      __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.subLayerDisp.mc_boost.ci_new, 1.8, {
        alpha: 1
      }, {
        alpha: 0,
        onComplete: this.bindFunction(this.onBoostComplete)
      });
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.onBoostComplete = function () {
    if (this._previewConstructionItem && this._previewConstructionItem.rarity == __dep_exact_26a421b704832cff.ConstructionItemConst.RARENESS_LEGENDARY) {
      this.endBoosterPreview();
      this.hideBoosterOverlay();
    } else {
      this._boostInProgress = false;
      this.subLayerDisp.mc_boost.anim_boost.gotoAndStop(1);
      this.subLayerDisp.mc_boost.ci_new.alpha = 1;
      this.endBoosterPreview();
      this._previewConstructionItem = null;
      this.updateBoostOverlay();
    }
  };
  CastleConstructionItemsAssignSublayer.prototype.showHelp = function () {
    this.stopDrag();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_ci_assign"));
  };
  CastleConstructionItemsAssignSublayer.prototype.resetInventoryFilters = function () {
    this._filterConstructionItemEffectAmount.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemEffectAmountFilter));
    this._filterConstructionItemRarity.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemRatityFilter));
    this._filterConstructionItemEffectAmount.selectItemIndex(0);
    this._filterConstructionItemRarity.selectItemIndex(0);
    this._filterConstructionItemEffectAmount.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemEffectAmountFilter));
    this._filterConstructionItemRarity.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeConstructionItemRatityFilter));
    this.onChangeConstructionItemEffectAmountFilter();
    this.onChangeConstructionItemRatityFilter();
  };
  Object.defineProperty(CastleConstructionItemsAssignSublayer.prototype, "currentBuildingList", {
    get: function () {
      if (this.showDetailedList) {
        return this._buildingListDetail;
      } else {
        return this._buildingListOverview;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsAssignSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsAssignSublayer.prototype.sortBuildings = function (__s258param0, __s258param1) {
    for (var __s258local0 = 0; __s258local0 < this._currentSortOption.length; __s258local0++) {
      var __s258local1 = __dep_exact_f855840627e6e145.int(this._currentSortOption[__s258local0][1](__s258param0, __s258param1));
      if (__s258local1 != 0) {
        return __dep_exact_f855840627e6e145.int(this._currentSortOption[__s258local0][0] * __s258local1);
      }
    }
    return 0;
  };
  CastleConstructionItemsAssignSublayer.sortByName = function (__s263param0, __s263param1) {
    var __s263local0 = __dep_exact_f855840627e6e145.int(__dep_exact_92d05af59ee2ff30.Localize.text(__s263param0.getNameString()).localeCompare(__dep_exact_92d05af59ee2ff30.Localize.text(__s263param1.getNameString())));
    if (__s263local0 != 0) {
      return __s263local0;
    } else {
      return 0;
    }
  };
  CastleConstructionItemsAssignSublayer.sortByBuildingLevel = function (__s267param0, __s267param1) {
    return __dep_exact_f855840627e6e145.int(__s267param1.level - __s267param0.level);
  };
  CastleConstructionItemsAssignSublayer.sortByBuildingCIs = function (__s269param0, __s269param1) {
    if (__s269param0.numEquippedConstructionItems != __s269param1.numEquippedConstructionItems) {
      return __s269param1.numEquippedConstructionItems - __s269param0.numEquippedConstructionItems;
    }
    if (__s269param0.averageConstructionItemRarity != __s269param1.averageConstructionItemRarity) {
      if (__s269param0.averageConstructionItemRarity > __s269param1.averageConstructionItemRarity) {
        return -1;
      }
      if (__s269param0.averageConstructionItemRarity < __s269param1.averageConstructionItemRarity) {
        return 1;
      }
    }
    return 0;
  };
  CastleConstructionItemsAssignSublayer.__initialize_static_members = function () {
    CastleConstructionItemsAssignSublayer.STORAGE_WARNING = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionItemConst.INVENTORY_SOFTCAP - 20);
    CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_DESCENDING = [[1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel], [1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs]];
    CastleConstructionItemsAssignSublayer.SORTOPTION_NAME_ASCENDING = [[-1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel], [1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs]];
    CastleConstructionItemsAssignSublayer.SORTOPTION_CI_DESCENDING = [[1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs], [1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel]];
    CastleConstructionItemsAssignSublayer.SORTOPTION_CI_ASCENDING = [[-1, CastleConstructionItemsAssignSublayer.sortByBuildingCIs], [1, CastleConstructionItemsAssignSublayer.sortByName], [1, CastleConstructionItemsAssignSublayer.sortByBuildingLevel]];
  };
  CastleConstructionItemsAssignSublayer.ONE_ICON_POSITION = [-116, 62];
  CastleConstructionItemsAssignSublayer.TWO_ICONS_POSITIONS = [-153, 62, -79, 62];
  CastleConstructionItemsAssignSublayer.THREE_ICONS_POSITIONS = [-153, 62, -79, 62, -116, 90];
  CastleConstructionItemsAssignSublayer.FOUR_ICONS_POSITIONS = [-153, 62, -79, 62, -153, 90, -79, 90];
  CastleConstructionItemsAssignSublayer.FIVE_ICONS_POSITIONS = [-153, 62, -79, 62, -153, 90, -79, 90, -116, 117];
  CastleConstructionItemsAssignSublayer.SIX_ICONS_POSITIONS = [-153, 62, -79, 62, -153, 90, -79, 90, -153, 117, -79, 117];
  CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED = [-116, 62, -116, 90];
  CastleConstructionItemsAssignSublayer.SPECIAL_LAYOUT_START_POSITION = 7;
  return CastleConstructionItemsAssignSublayer;
}(__dep_export_CastleConstructionItemsFilterSublayer.CastleConstructionItemsFilterSublayer);
exports.CastleConstructionItemsAssignSublayer = __s0local4;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ConstructionItemData = require("gge-module:export_ConstructionItemData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuildingStats = require("gge-module:export_CastleBuildingStats");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_ConstructionItemTooltipHelper = require("gge-module:export_ConstructionItemTooltipHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleConstructionItemsDisassembleDialog = require("gge-module:export_CastleConstructionItemsDisassembleDialog");
var __dep_export_CastleConstructionItemsEmbedDialog = require("gge-module:export_CastleConstructionItemsEmbedDialog");
var __dep_export_CastleConstructionItemsExtractDialog = require("gge-module:export_CastleConstructionItemsExtractDialog");
var __dep_export_CastleConstructionItemsOverwriteDialog = require("gge-module:export_CastleConstructionItemsOverwriteDialog");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemScrollItem = require("gge-module:export_ConstructionItemScrollItem");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_ConstructionItemSlotBig = require("gge-module:export_ConstructionItemSlotBig");
var __dep_export_C2SMarkExpiredConstructionItemVO = require("gge-module:export_C2SMarkExpiredConstructionItemVO");
var __dep_export_CastleConstructionItemsSwitchEvent = require("gge-module:export_CastleConstructionItemsSwitchEvent");
var __dep_export_C2SGetAllExpiredConstructionItemsVO = require("gge-module:export_C2SGetAllExpiredConstructionItemsVO");
var __dep_export_ConstructionItemExpiredDialog = require("gge-module:export_ConstructionItemExpiredDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_C2SUseBoosterConsumableOnConstructionItemVO = require("gge-module:export_C2SUseBoosterConsumableOnConstructionItemVO");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_CIBuildingListItem = require("gge-module:export_CIBuildingListItem");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local4, "ICollectableRendererList", "ISublayer");
__s0local4.__initialize_static_members();
