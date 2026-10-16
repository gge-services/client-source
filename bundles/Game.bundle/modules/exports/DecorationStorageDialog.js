Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_ADistrictBuildingVO = require("gge-module:export_ADistrictBuildingVO");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function DecorationStorageDialog() {
    var __s3local0 = this;
    __s3local0._ascendingDecoOrder = false;
    __s3local0._isEventKingdomStorage = false;
    __s3local0._itemVOs = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, DecorationStorageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationStorageDialog, __s1param0);
  DecorationStorageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_deco, this.dialogDisp.btn_grid.mc_selector, this.dialogDisp.btn_type.mc_selector], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.filter_building, this.dialogDisp.filter_deco], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.mc_capacity.btn_addCapacity], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_deco, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.dialogDisp.mc_capacity.btn_addCapacity.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_searchInfo.txt_info, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buildingsStorehouse_empty_tip")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_capacity.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("capacity_1")).autoFitToBounds = true;
    var __s5local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyList, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_buildingsStorehouse_empty_desc"));
    __s5local0.autoFitToBounds = true;
    __s5local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.btn_grid.mc_selector.toolTipText = "filter_gridSize_tooltip";
    this.dialogDisp.btn_type.mc_selector.toolTipText = "filter_decoType_tooltip";
    this.dialogDisp.mc_capacity.mc_full.toolTipText = "dialog_buildingsStorehouse_capacityFull_tooltip";
    this.dialogDisp.mc_capacity.mc_icon.toolTipText = "dialog_uniqueDecosSpace_tooltip";
    this.dialogDisp.filter_building.toolTipText = "panel_deco_storage";
    this.dialogDisp.filter_deco.toolTipText = "DecorationStorehouse_name";
    this._gridSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.btn_grid, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1.025));
    this._typeSelector = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.btn_type, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1.025));
    this._searchField = new __dep_export_SearchFieldComponent.SearchFieldComponent(this.dialogDisp.mc_search);
    var __s5local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_DecorationStorageDialogListItem.DecorationStorageDialogListItem, "DecorationStorage_ListItem", DecorationStorageDialog.NAME);
    __s5local1.itemPaddingY = 3;
    __s5local1.useSmoothScroll = true;
    this._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_mask), __s5local1);
    this._currentCategory = DecorationStorageDialog.CATEGORY_DECO;
    this.dialogDisp.filter_building.mc_selected.visible = false;
    this.dialogDisp.filter_deco.mc_selected.visible = true;
  };
  DecorationStorageDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._gridSelector.onShow();
    this._typeSelector.onShow();
    this._scrollList.onShow();
    this._searchField.onShow();
    this.controller.addEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onStorageMarksUpdated));
    this._searchField.onSearchValueChanged.add(this.bindFunction(this.onSearchValueChanged));
    this._gridSelector.onSelectionChanged.add(this.bindFunction(this.onGridSelection));
    this._typeSelector.onSelectionChanged.add(this.bindFunction(this.onTypeSelection));
    this.updateTitle();
    this.updateTypeCombobox();
    this.initListItems();
    this.updateItems();
    this.updateDecoOrderButton();
    this._searchField.updateVisuals();
    this.updateSearchInfo();
    this.updateCapacity();
    this.updateTabs();
  };
  DecorationStorageDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this.controller.removeEventListener(__dep_export_IsoEvent.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, this.bindFunction(this.onStorageDecoDragStarted));
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onStorageUpdated));
    this.controller.removeEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_NEW_INDICATOR_UPDATED, this.bindFunction(this.onStorageMarksUpdated));
    if (this._searchField) {
      this._searchField.onSearchValueChanged.remove(this.bindFunction(this.onSearchValueChanged));
      this._searchField.onHide();
    }
    if (this._gridSelector) {
      this._gridSelector.onSelectionChanged.remove(this.bindFunction(this.onGridSelection));
      this._gridSelector.onHide();
    }
    if (this._typeSelector) {
      this._typeSelector.onSelectionChanged.remove(this.bindFunction(this.onTypeSelection));
      this._typeSelector.onHide();
    }
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SEND_MARKED_BUILINGS_IN_STORAGE);
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  DecorationStorageDialog.prototype.changeDecoOrder = function (__s15param0) {
    this._ascendingDecoOrder = __s15param0;
    this.updateDecoOrderButton();
    this.updateItems();
  };
  DecorationStorageDialog.prototype.changeCategory = function (__s17param0) {
    if (__s17param0 != this._currentCategory) {
      this._currentCategory = __s17param0;
      this.dialogDisp.filter_building.mc_selected.visible = __s17param0 == DecorationStorageDialog.CATEGORY_BUILDING;
      this.dialogDisp.filter_deco.mc_selected.visible = __s17param0 == DecorationStorageDialog.CATEGORY_DECO;
      this.updateTitle();
      this.updateTypeCombobox();
      this.updateDecoOrderButton();
      this.updateCapacity();
      this.updateItems();
    }
  };
  DecorationStorageDialog.prototype.updateDecoOrderButton = function () {
    this.dialogDisp.btn_deco.mc_icon_PO.gotoAndStop(__dep_exact_f855840627e6e145.int(this._isEventKingdomStorage ? 2 : 1));
    this.dialogDisp.btn_deco.mc_icon_PO.visible = this._currentCategory == DecorationStorageDialog.CATEGORY_DECO;
    this.dialogDisp.btn_deco.mc_icon_level.visible = this._currentCategory == DecorationStorageDialog.CATEGORY_BUILDING;
    this.dialogDisp.btn_deco.mc_arrow.gotoAndStop(__dep_exact_f855840627e6e145.int(this._ascendingDecoOrder ? 1 : 2));
    this.dialogDisp.btn_deco.mc_background.gotoAndStop(__dep_exact_f855840627e6e145.int(this._ascendingDecoOrder ? 1 : 2));
    var __s20local0 = "";
    __s20local0 = this._currentCategory == DecorationStorageDialog.CATEGORY_BUILDING ? this._ascendingDecoOrder ? "sorting_buildingLevel_ascending_tooltip" : "sorting_buildingLevel_descending_tooltip" : this._isEventKingdomStorage ? this._ascendingDecoOrder ? "sorting_morale_ascending_tooltip" : "sorting_morale_descending_tooltip" : this._ascendingDecoOrder ? "sorting_publicOrder_ascending_tooltip" : "sorting_publicOrder_descending_tooltip";
    this.dialogDisp.btn_deco.toolTipText = __s20local0;
  };
  DecorationStorageDialog.prototype.initListItems = function () {
    this._isEventKingdomStorage = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage();
    this._itemVOs = [];
    var __s22local0 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getAllDecosAsBuildings();
    if (__s22local0 != null) {
      for (var __s22local1 = 0, __s22local2 = __s22local0; __s22local1 < __s22local2.length; __s22local1++) {
        var __s22local3 = __s22local2[__s22local1];
        if (__s22local3 !== undefined) {
          this._itemVOs.push(new __dep_export_DecorationStorageDialogListItemVO.DecorationStorageDialogListItemVO(__s22local3));
        }
      }
    }
    this.updateGridCombobox(true);
  };
  DecorationStorageDialog.prototype.updateTitle = function () {
    switch (this._currentCategory) {
      case DecorationStorageDialog.CATEGORY_BUILDING:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("panel_deco_storage"))).autoFitToBounds = true;
        break;
      case DecorationStorageDialog.CATEGORY_DECO:
      default:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("DecorationStorehouse_name"))).autoFitToBounds = true;
    }
  };
  DecorationStorageDialog.prototype.updateItems = function () {
    var __s31local0 = [];
    if (this._itemVOs != null) {
      for (var __s31local1 = 0, __s31local2 = this._itemVOs; __s31local1 < __s31local2.length; __s31local1++) {
        var __s31local3 = __s31local2[__s31local1];
        if (__s31local3 !== undefined && this.doesItemMatchCategory(__s31local3) && this.doesItemMatchSearchCriteria(__s31local3) && this.doesItemMatchGridCriteria(__s31local3) && this.doesItemMatchTypeCriteria(__s31local3)) {
          __s31local0.push(__s31local3);
        }
      }
    }
    __s31local0.sort(this.bindFunction(this.sortItems));
    this.dialogDisp.txt_emptyList.visible = __s31local0.length <= 0;
    this._scrollList.updateWithNewData(__s31local0);
    this.updateSearchInfo();
  };
  DecorationStorageDialog.prototype.updateSearchInfo = function () {
    this.dialogDisp.mc_searchInfo.visible = this._scrollList.dataList.length <= 0 && this._searchField.currentSearchValue != "";
  };
  DecorationStorageDialog.prototype.updateCapacity = function () {
    var __s39local0 = this._currentCategory == DecorationStorageDialog.CATEGORY_DECO && !__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage();
    this.dialogDisp.mc_capacity.visible = __s39local0;
    if (__s39local0) {
      var __s39local1 = __dep_export_CastleModel.CastleModel.decoStorage.getMainStorage();
      var __s39local2 = __s39local1.getCurrentCapacity();
      var __s39local3 = __s39local1.getMaxCapacity();
      this.textFieldManager.registerTextField(this.dialogDisp.mc_capacity.txt_amount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s39local2, __s39local3])).autoFitToBounds = true;
      this.dialogDisp.mc_capacity.txt_amount.textColor = __s39local2 >= __s39local3 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_RED : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
      this.dialogDisp.mc_capacity.mc_full.visible = __s39local2 >= __s39local3;
    }
  };
  DecorationStorageDialog.prototype.updateTabs = function () {
    var __s42local0 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount(false, true);
    var __s42local1 = __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getCappedNewAmount(true, false);
    this.dialogDisp.filter_building.mc_amount.visible = __s42local0 > 0;
    this.dialogDisp.filter_deco.mc_amount.visible = __s42local1 > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.filter_building.mc_amount.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s42local0));
    this.textFieldManager.registerTextField(this.dialogDisp.filter_deco.mc_amount.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s42local1));
  };
  DecorationStorageDialog.prototype.getHelpTextId = function () {
    if (this._isEventKingdomStorage) {
      return "buildingsStorehouse_event_help";
    } else {
      return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("buildingsStorehouse_regular_help");
    }
  };
  DecorationStorageDialog.prototype.doesItemMatchCategory = function (__s48param0) {
    var __s48local0 = __s48param0.buildingVO instanceof __dep_export_ADecoBuildingVO.ADecoBuildingVO;
    switch (this._currentCategory) {
      case DecorationStorageDialog.CATEGORY_BUILDING:
        return !__s48local0;
      case DecorationStorageDialog.CATEGORY_DECO:
        return __s48local0;
      default:
        return false;
    }
  };
  DecorationStorageDialog.prototype.doesItemMatchSearchCriteria = function (__s51param0) {
    return this._searchField.currentSearchValue == "" || __s51param0.searchName.indexOf(this._searchField.currentSearchValue) >= 0;
  };
  DecorationStorageDialog.prototype.doesItemMatchGridCriteria = function (__s53param0) {
    var __s53local0 = this._gridSelector.getSelectedItem().data;
    return __s53local0.x < 0 || __s53param0.buildingVO.dimension.x == __s53local0.x && __s53param0.buildingVO.dimension.y == __s53local0.y;
  };
  DecorationStorageDialog.prototype.doesItemMatchTypeCriteria = function (__s55param0) {
    var __s55local0 = this._typeSelector.getSelectedItem().data;
    var __s55local1 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s55param0.buildingVO, "ADecoBuildingVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s55param0.buildingVO, "CustomDecoBuildingVO") ? __s55param0.buildingVO.fusionInfoVO : null;
    switch (__s55local0) {
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET:
        return !!__s55local1 && __s55local1.isFusionSource && __s55local1.isFusionTarget;
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE:
        return !!__s55local1 && __s55local1.isFusionSource && !__s55local1.isFusionTarget;
      case DecorationStorageDialog.TYPE_SELECTION_TARGET:
        return !!__s55local1 && !__s55local1.isFusionSource && __s55local1.isFusionTarget;
      case DecorationStorageDialog.TYPE_SELECTION_UNIQUE:
        return __s55param0.buildingVO.isUnique();
      case DecorationStorageDialog.TYPE_SELECTION_EFFECT:
        return __s55param0.buildingVO.allBuildingEffects && __s55param0.buildingVO.allBuildingEffects.length > 0;
      case DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING:
        return __s55param0.buildingVO instanceof __dep_export_ADistrictBuildingVO.ADistrictBuildingVO;
      case DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING:
        return __s55param0.buildingVO.isRelicBuilding;
      case DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING:
        return __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isInLocalStorage(__s55param0.buildingVO);
      case DecorationStorageDialog.TYPE_SELECTION_OTHER:
        return !(__s55param0.buildingVO instanceof __dep_export_ADistrictBuildingVO.ADistrictBuildingVO) && !__s55param0.buildingVO.isRelicBuilding;
      default:
        return true;
    }
  };
  DecorationStorageDialog.prototype.sortItems = function (__s58param0, __s58param1) {
    return __dep_export_ClientConstSort.ClientConstSort.sortBySerialOrder([this.bindFunction(this.subSortItemsByBuildingType), this.bindFunction(this.subSortItemsByOrderValue), this.bindFunction(this.subSortItemsByFusionXp), this.bindFunction(this.subSortItemsByName)], __s58param0, __s58param1);
  };
  DecorationStorageDialog.prototype.subSortItemsByBuildingType = function (__s60param0, __s60param1) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param0.buildingVO, "ADecoBuildingVO") && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param1.buildingVO, "ADecoBuildingVO")) {
      return -1;
    } else if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param0.buildingVO, "ADecoBuildingVO") && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param1.buildingVO, "ADecoBuildingVO")) {
      return 1;
    } else {
      return 0;
    }
  };
  DecorationStorageDialog.prototype.subSortItemsByOrderValue = function (__s65param0, __s65param1) {
    var __s65local0 = __s65param0.getOrderValue();
    var __s65local1 = __s65param1.getOrderValue();
    if (this._ascendingDecoOrder) {
      return __s65local0 - __s65local1;
    } else {
      return __s65local1 - __s65local0;
    }
  };
  DecorationStorageDialog.prototype.subSortItemsByFusionXp = function (__s69param0, __s69param1) {
    var __s69local0 = __s69param0.getFusionXP();
    var __s69local1 = __s69param1.getFusionXP();
    if (this._ascendingDecoOrder) {
      return __s69local0 - __s69local1;
    } else {
      return __s69local1 - __s69local0;
    }
  };
  DecorationStorageDialog.prototype.subSortItemsByName = function (__s73param0, __s73param1) {
    var __s73local0 = __s73param0.searchName;
    var __s73local1 = __s73param1.searchName;
    return __s73local0.localeCompare(__s73local1) * (this._ascendingDecoOrder ? 1 : -1);
  };
  DecorationStorageDialog.prototype.sortGridDimensions = function (__s75param0, __s75param1) {
    if (__s75param0.x == __s75param1.x) {
      return __s75param0.y - __s75param1.y;
    } else {
      return __s75param0.x - __s75param1.x;
    }
  };
  DecorationStorageDialog.prototype.onClick = function (__s79param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s79param0.target)) {
      __s1param0.prototype.onClick.call(this, __s79param0);
      this._gridSelector.onOutOfBoundsClickCheck(__s79param0.target);
      this._typeSelector.onOutOfBoundsClickCheck(__s79param0.target);
      switch (__s79param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_deco:
          this.changeDecoOrder(!this._ascendingDecoOrder);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_3.Localize.text(this.getHelpTextId()));
          break;
        case this.dialogDisp.filter_building:
          this.changeCategory(DecorationStorageDialog.CATEGORY_BUILDING);
          break;
        case this.dialogDisp.filter_deco:
          this.changeCategory(DecorationStorageDialog.CATEGORY_DECO);
      }
    }
  };
  DecorationStorageDialog.prototype.onStorageDecoDragStarted = function (__s83param0) {
    this.hide();
  };
  DecorationStorageDialog.prototype.onStorageMarksUpdated = function (__s85param0) {
    for (var __s85local0 = 0, __s85local1 = this._scrollList.items; __s85local0 < __s85local1.length; __s85local0++) {
      var __s85local2 = __s85local1[__s85local0];
      if (__s85local2 !== undefined) {
        __s85local2.updateNewIndicator();
      }
    }
    this.updateTabs();
  };
  DecorationStorageDialog.prototype.onStorageUpdated = function (__s90param0) {
    var __s90local0 = __dep_exact_f855840627e6e145.int(this._scrollList.scrollComponent.currentValue);
    this.initListItems();
    this.updateItems();
    this.updateCapacity();
    this.updateTabs();
    this._scrollList.options.useSmoothScroll = false;
    this._scrollList.scrollComponent.scrollToValue(__s90local0);
    this._scrollList.options.useSmoothScroll = true;
  };
  DecorationStorageDialog.prototype.onSearchValueChanged = function () {
    this.updateItems();
    this.updateSearchInfo();
  };
  DecorationStorageDialog.prototype.updateGridCombobox = function (__s94param0 = false) {
    var __s94local0 = this._gridSelector.getSelectedItem();
    var __s94local1 = __s94local0 ? __s94local0.data : null;
    this._gridSelector.updateWithNewValues(this.createGridSelectorItems());
    if (__s94param0 && __s94local1) {
      this._gridSelector.selectItem(this._gridSelector.getItemByCompareFunc(function compareFunc(__s97param0) {
        var __s97local0 = __s97param0.data;
        return __s97local0.x == __s94local1.x && __s97local0.y == __s94local1.y;
      }));
    } else {
      this._gridSelector.selectIndex(0);
    }
  };
  DecorationStorageDialog.prototype.createGridSelectorItems = function () {
    var __s100local0 = [];
    __s100local0.push(new __s0local0(-1, -1));
    if (this._itemVOs != null) {
      for (var __s100local1 = 0, __s100local2 = this._itemVOs; __s100local1 < __s100local2.length; __s100local1++) {
        var __s100local3 = __s100local2[__s100local1];
        if (__s100local3 !== undefined) {
          var __s100local4 = __s100local3.buildingVO.dimension;
          var __s100local5 = false;
          for (var __s100local6 = 0; __s100local6 < __s100local0.length; ++__s100local6) {
            var __s100local7 = __s100local0[__s100local6];
            if (__s100local4.x == __s100local7.x && __s100local4.y == __s100local7.y) {
              __s100local5 = true;
              break;
            }
          }
          if (!__s100local5) {
            __s100local0.push(new __s0local0(__s100local4.x, __s100local4.y));
          }
        }
      }
    }
    __s100local0.sort(this.bindFunction(this.sortGridDimensions));
    var __s100local8 = [];
    for (var __s100local9 = 0, __s100local10 = __s100local0; __s100local9 < __s100local10.length; __s100local9++) {
      __s100local4 = __s100local10[__s100local9];
      __s100local8.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_GRID_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillGridItemContent), __s100local4));
    }
    return __s100local8;
  };
  DecorationStorageDialog.prototype.fillGridItemContent = function (__s112param0) {
    this.textFieldManager.registerTextField(__s112param0.getItemMc().txt_text, this.createGridItemTextVO(__s112param0)).autoFitToBounds = true;
  };
  DecorationStorageDialog.prototype.onGridSelection = function () {
    var __s114local0 = this._gridSelector.getSelectedItem();
    this.textFieldManager.registerTextField(this._gridSelector.getSelectorMc().txt_text, this.createGridItemTextVO(__s114local0)).autoFitToBounds = true;
    this.updateItems();
  };
  DecorationStorageDialog.prototype.createGridItemTextVO = function (__s116param0) {
    var __s116local0 = __s116param0.data;
    return new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s116local0.x < 0 ? "filter_gridSize_all" : "filter_gridSize_custom", [__s116local0.x, __s116local0.y]);
  };
  DecorationStorageDialog.prototype.updateTypeCombobox = function () {
    var __s118local0 = [];
    switch (this._currentCategory) {
      case DecorationStorageDialog.CATEGORY_BUILDING:
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_ALL));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_OTHER));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING));
        break;
      case DecorationStorageDialog.CATEGORY_DECO:
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_ALL));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_SOURCE));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_TARGET));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_EFFECT));
        __s118local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM, DecorationStorageDialog.NAME, this.bindFunction(this.fillTypeItemContent), DecorationStorageDialog.TYPE_SELECTION_UNIQUE));
    }
    this._typeSelector.updateWithNewValues(__s118local0);
    this._typeSelector.selectIndex(0);
    this._typeSelector.disp.visible = !__dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().isEventKingdomStorage();
  };
  DecorationStorageDialog.prototype.fillTypeItemContent = function (__s121param0) {
    this.textFieldManager.registerTextField(__s121param0.getItemMc().txt_text, this.createTypeItemTextVO(__s121param0)).autoFitToBounds = true;
  };
  DecorationStorageDialog.prototype.onTypeSelection = function () {
    var __s123local0 = this._typeSelector.getSelectedItem();
    this.textFieldManager.registerTextField(this._typeSelector.getSelectorMc().txt_text, this.createTypeItemTextVO(__s123local0)).autoFitToBounds = true;
    this.updateItems();
  };
  DecorationStorageDialog.prototype.createTypeItemTextVO = function (__s125param0) {
    var __s125local0 = "";
    switch (__s125param0.data) {
      case DecorationStorageDialog.TYPE_SELECTION_ALL:
        __s125local0 = "filter_decoType_all";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET:
        __s125local0 = "filter_decoType_targetsAndSources";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_SOURCE:
        __s125local0 = "filter_decoType_onlySources";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_TARGET:
        __s125local0 = "filter_decoType_onlyTargets";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_EFFECT:
        __s125local0 = "filter_decoType_effect";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_UNIQUE:
        __s125local0 = "uniqueDeco";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING:
        __s125local0 = "panel_deco_districts";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING:
        __s125local0 = "filter_decoType_onlyRelics";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_EFFECT_BUILDING:
        __s125local0 = "filter_decoType_onlyWithEffects";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING:
        __s125local0 = "filter_decoType_onlyLocals";
        break;
      case DecorationStorageDialog.TYPE_SELECTION_OTHER:
        __s125local0 = "filter_decoType_onlyOthers";
    }
    return new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s125local0);
  };
  DecorationStorageDialog.NAME = "DecorationStorage4";
  DecorationStorageDialog.ASSET_CLIP_NAME_GRID_ITEM = "DecorationStorage_GridItem";
  DecorationStorageDialog.ASSET_CLIP_NAME_TYPE_ITEM = "DecorationStorage_TypeItem";
  DecorationStorageDialog.TYPE_SELECTION_ALL = "tsAll";
  DecorationStorageDialog.TYPE_SELECTION_SOURCE_AND_TARGET = "tsSourceAndTarget";
  DecorationStorageDialog.TYPE_SELECTION_SOURCE = "tsSource";
  DecorationStorageDialog.TYPE_SELECTION_TARGET = "tsTarget";
  DecorationStorageDialog.TYPE_SELECTION_OTHER = "tsOther";
  DecorationStorageDialog.TYPE_SELECTION_UNIQUE = "tsUnique";
  DecorationStorageDialog.TYPE_SELECTION_EFFECT = "tsEffect";
  DecorationStorageDialog.TYPE_SELECTION_DISTRICT_BUILDING = "tsDistrict";
  DecorationStorageDialog.TYPE_SELECTION_RELIC_BUILDING = "tsRelic";
  DecorationStorageDialog.TYPE_SELECTION_EFFECT_BUILDING = "tsEffectBuilding";
  DecorationStorageDialog.TYPE_SELECTION_LOCAL_BUILDING = "tsLocal";
  DecorationStorageDialog.CATEGORY_BUILDING = "building";
  DecorationStorageDialog.CATEGORY_DECO = "deco";
  return DecorationStorageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationStorageDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_ModernComboboxComponentItem = require("gge-module:export_ModernComboboxComponentItem");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_SearchFieldComponent = require("gge-module:export_SearchFieldComponent");
var __dep_export_DecorationStorageDialogListItem = require("gge-module:export_DecorationStorageDialogListItem");
var __dep_export_DecorationStorageDialogListItemVO = require("gge-module:export_DecorationStorageDialogListItemVO");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
