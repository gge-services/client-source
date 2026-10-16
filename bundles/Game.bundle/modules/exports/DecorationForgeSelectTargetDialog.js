Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DecoStorageEvent = require("gge-module:export_DecoStorageEvent");
var __dep_export_instanceOf_IWorldmapObjectVO = require("gge-module:export_instanceOf_IWorldmapObjectVO");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DecorationForgeSelectResultVO = require("gge-module:export_DecorationForgeSelectResultVO");
var __dep_export_DecorationForgeSelectTargetDialogListItemVO = require("gge-module:export_DecorationForgeSelectTargetDialogListItemVO");
var __dep_export_DecorationForgeSelectTargetDialogOrderButton = require("gge-module:export_DecorationForgeSelectTargetDialogOrderButton");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function DecorationForgeSelectTargetDialog() {
    var __s3local0 = this;
    __s3local0.SERIAL_SORT_PUBLIC_ORDER = [__s3local0.bindFunction(__s3local0.subSortByDecoPoints), __s3local0.bindFunction(__s3local0.subSortByXP), __s3local0.bindFunction(__s3local0.subSortByKingdom), __s3local0.bindFunction(__s3local0.subSortByName)];
    __s3local0.SERIAL_SORT_XP = [__s3local0.subSortByDeltaXP, __s3local0.bindFunction(__s3local0.subSortByDecoPoints), __s3local0.bindFunction(__s3local0.subSortByKingdom), __s3local0.bindFunction(__s3local0.subSortByName)];
    __s3local0._orderButtons = [];
    __s3local0._descendingOrder = false;
    __s3local0._itemVOs = [];
    __s3local0._itemVEs = [];
    __s3local0._relevantVOs = [];
    __s3local0._currentRelevantVOIndex = 0;
    __s3local0._currentItemContainerPosY = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, DecorationForgeSelectTargetDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeSelectTargetDialog, __s1param0);
  DecorationForgeSelectTargetDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._orderButtons = [this.dialogDisp.btn_publicOrder, this.dialogDisp.btn_xp];
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButtons(this._orderButtons, __dep_export_DecorationForgeSelectTargetDialogOrderButton.DecorationForgeSelectTargetDialogOrderButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoForge_selectTarget_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_selectTarget_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_searchInfo.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_selectTarget_empty_hint")).autoFitToBounds = true;
    var __s5local0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyList, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_decoForge_selectTarget_empty_desc"));
    __s5local0.autoFitToBounds = true;
    __s5local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._locationCombobox = new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.btn_location, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(-2, 1.02));
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_list.mc_slider).addMouseWheelElements([this.dialogDisp.mc_list]).addVisualElements([this.dialogDisp.mc_list.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
    this._searchField = new __dep_export_SearchFieldComponent.SearchFieldComponent(this.dialogDisp.mc_search);
  };
  DecorationForgeSelectTargetDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._locationCombobox.onShow();
    this._searchField.onShow();
    this._scrollComponent.show();
    this.initLocationCombobox();
    this.initItemVEs();
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_TEMP_DECOS_UPDATED, this.bindFunction(this.onTempDecosUpdated));
    this._locationCombobox.onSelectionChanged.add(this.bindFunction(this.onLocationSelectionChanged));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.dialogDisp.stage.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this._searchField.onSearchValueChanged.add(this.bindFunction(this.onSearchValueChanged));
    if (this._itemVEs != null) {
      for (var __s7local0 = 0, __s7local1 = this._itemVEs; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this.resetAndPreselectValues();
  };
  DecorationForgeSelectTargetDialog.prototype.hide = function () {
    if (this.dialogDisp.stage) {
      this.dialogDisp.stage.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    }
    this.controller.addEventListener(__dep_export_DecoStorageEvent.DecoStorageEvent.ON_TEMP_DECOS_UPDATED, this.bindFunction(this.onTempDecosUpdated));
    this._locationCombobox.onSelectionChanged.remove(this.bindFunction(this.onLocationSelectionChanged));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._searchField.onSearchValueChanged.remove(this.bindFunction(this.onSearchValueChanged));
    if (this._itemVEs != null) {
      for (var __s13local0 = 0, __s13local1 = this._itemVEs; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    this._searchField.onHide();
    this._locationCombobox.onHide();
    __s1param0.prototype.hide.call(this);
  };
  DecorationForgeSelectTargetDialog.prototype.resetAndPreselectValues = function () {
    this._searchField.clearSearchField();
    this._descendingOrder = true;
    this._currentOrderButton = this.dialogDisp.btn_publicOrder;
    this.updateOrderButtons();
    this._locationCombobox.selectIndex(0);
    if (this.dialogProperties.buttons.buttonTarget.currentSelectionVO) {
      var __s20local0 = __dep_exact_f855840627e6e145.int(this.getIndexOfSelectResultInRelevantVoList(this.dialogProperties.buttons.buttonTarget.currentSelectionVO));
      if (__s20local0 >= 0) {
        this._scrollComponent.scrollToValue(DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT * __s20local0 - DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT * 2, false);
        this.updateListScrollPosition(false);
      } else {
        this.preselectDefault();
      }
    } else {
      this.preselectDefault();
    }
  };
  DecorationForgeSelectTargetDialog.prototype.preselectDefault = function () {
    this.selectLocationOfActiveArea();
  };
  DecorationForgeSelectTargetDialog.prototype.selectLocationOfActiveArea = function () {
    var __s28local0;
    var __s28local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
    for (var __s28local2 = 0, __s28local3 = this._locationCombobox.items; __s28local2 < __s28local3.length; __s28local2++) {
      var __s28local4 = __s28local3[__s28local2];
      if (__s28local4 !== undefined && __dep_export_instanceOf_IWorldmapObjectVO.instanceOf_IWorldmapObjectVO(__s28local4.data)) {
        var __s28local5 = __s28local4.data;
        if (__s28local5.objectId == __s28local1.areaId && __s28local5.kingdomID == __s28local1.areaInfo.kingdomID) {
          __s28local0 = __s28local4;
          break;
        }
      }
    }
    if (__s28local0) {
      this._locationCombobox.selectItem(__s28local0);
    }
  };
  DecorationForgeSelectTargetDialog.prototype.interpretOrderButton = function (__s35param0) {
    this._descendingOrder = __s35param0 != this._currentOrderButton || !this._descendingOrder;
    this._currentOrderButton = __s35param0;
    this.updateOrderButtons();
    this.updateRelevantVOs();
    this.updateItemVEs(true);
  };
  DecorationForgeSelectTargetDialog.prototype.updateOrderButtons = function () {
    if (this._orderButtons != null) {
      for (var __s37local0 = 0, __s37local1 = this._orderButtons; __s37local0 < __s37local1.length; __s37local0++) {
        var __s37local2 = __s37local1[__s37local0];
        if (__s37local2 !== undefined) {
          var __s37local3 = this.getOrderButton(__s37local2);
          __s37local3.setActive(false);
          __s37local3.setArrow(false);
        }
      }
    }
    (__s37local3 = this.getOrderButton(this._currentOrderButton)).setActive(true);
    __s37local3.setArrow(!this._descendingOrder);
    (__s37local3 = this.getOrderButton(this.dialogDisp.btn_publicOrder)).disp.toolTipText = __s37local3.isArrowUp ? "sorting_publicOrder_ascending_tooltip" : "sorting_publicOrder_descending_tooltip";
    (__s37local3 = this.getOrderButton(this.dialogDisp.btn_xp)).disp.toolTipText = __s37local3.isArrowUp ? "sorting_fusionXP_ascending_tooltip" : "sorting_fusionXP_descending_tooltip";
  };
  DecorationForgeSelectTargetDialog.prototype.initLocationCombobox = function () {
    var __s43local0 = [];
    __s43local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL));
    __s43local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED));
    __s43local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD));
    var __s43local1 = __dep_export_CastleModel.CastleModel.userData.castleList.listForActionPanel;
    if (__s43local1 != null) {
      for (var __s43local2 = 0, __s43local3 = __s43local1; __s43local2 < __s43local3.length; __s43local2++) {
        var __s43local4 = __s43local3[__s43local2];
        if (__s43local4 !== undefined) {
          __s43local0.push(new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem(DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME, DecorationForgeSelectTargetDialog.NAME, this.bindFunction(this.fillLocationItemContent), __s43local4));
        }
      }
    }
    this._locationCombobox.updateWithNewValues(__s43local0);
  };
  DecorationForgeSelectTargetDialog.prototype.initItemVEs = function () {
    var __s49local0 = this.getItemContainerMc();
    if (this._itemVEs) {
      if (this._itemVEs != null) {
        for (var __s49local1 = 0, __s49local2 = this._itemVEs; __s49local1 < __s49local2.length; __s49local1++) {
          var __s49local3 = __s49local2[__s49local1];
          if (__s49local3 !== undefined) {
            __s49local3.destroy();
          }
        }
      }
      this._itemVEs = null;
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s49local0);
    var __s49local4 = Math.ceil(DecorationForgeSelectTargetDialog.LIST_ITEM_MASK_HEIGHT / DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT) + 1;
    this._itemVEs = [];
    for (var __s49local5 = 0; __s49local5 < __s49local4; ++__s49local5) {
      __s49local3 = new __dep_export_DecorationForgeSelectTargetDialogListItemVE.DecorationForgeSelectTargetDialogListItemVE();
      __s49local0.addChild(__s49local3.disp);
      __s49local3.onClickFunc = this.bindFunction(this.onListItemClicked);
      this._itemVEs.push(__s49local3);
    }
  };
  DecorationForgeSelectTargetDialog.prototype.initItemVOs = function () {
    var __s58local0 = this.dialogProperties.buttons.buttonTarget;
    function addNewDecoToList(__s60param0, __s60param1, __s60param2, __s60param3, __s60param4 = 1) {
      if (__s60param1 && __s60param1.fusionInfoVO.isFusionTarget) {
        var __s60local0 = new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO(-1, __s60param4);
        __s60local0.buildingVO = __s60param1;
        var __s60local1 = new __dep_export_DecorationForgeSelectResultVO.DecorationForgeSelectResultVO(__s60local0, __s60param2, __s60param3);
        __s60local1.btn = __s58local0;
        var __s60local2 = new __dep_export_DecorationForgeSelectTargetDialogListItemVO.DecorationForgeSelectTargetDialogListItemVO(__s60local1);
        __s60local2.isSelected = __s60local1.equals(__s58local0.currentSelectionVO);
        __s60param0.push(__s60local2);
      }
    }
    this._itemVOs = [];
    var __s58local1;
    var __s58local2 = this._locationCombobox.getSelectedItem();
    if (__s58local2.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL || __s58local2.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED) {
      var __s58local3 = __dep_export_CastleModel.CastleModel.decoStorage.getMainStorage();
      for (var __s58local4 = 0, __s58local5 = Array.from(__s58local3.regularDecos.values()); __s58local4 < __s58local5.length; __s58local4++) {
        var __s58local6 = __s58local5[__s58local4];
        addNewDecoToList(this._itemVOs, __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_IsoHelper.IsoHelper.data.createIsoObjectVOByXml(__s58local6.wodId), "ADecoBuildingVO"), -1, -1, __s58local6.amount);
      }
      for (var __s58local7 = 0, __s58local8 = __s58local3.getUniqueDecosAsBuildings(); __s58local7 < __s58local8.length; __s58local7++) {
        __s58local1 = __s58local8[__s58local7];
        addNewDecoToList(this._itemVOs, __s58local1, -1, -1);
      }
      for (var __s58local9 = 0, __s58local10 = __s58local3.getCustomDecosAsBuildings(); __s58local9 < __s58local10.length; __s58local9++) {
        __s58local1 = __s58local10[__s58local9];
        addNewDecoToList(this._itemVOs, __s58local1, -1, -1);
      }
    }
    if (__s58local2.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL || __s58local2.data == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD) {
      for (var __s58local11 = 0, __s58local12 = Array.from(__dep_export_CastleModel.CastleModel.decoStorage.tempDecos.values()); __s58local11 < __s58local12.length; __s58local11++) {
        var __s58local13 = __s58local12[__s58local11];
        if (__s58local13 !== undefined) {
          for (var __s58local14 = 0, __s58local15 = __s58local13.buildings; __s58local14 < __s58local15.length; __s58local14++) {
            __s58local1 = __s58local15[__s58local14];
            addNewDecoToList(this._itemVOs, __s58local1, __s58local13.kingdomId, __s58local13.areaId);
          }
        }
      }
    }
    if (__dep_export_instanceOf_IWorldmapObjectVO.instanceOf_IWorldmapObjectVO(__s58local2.data)) {
      var __s58local16 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
      var __s58local17 = __s58local2.data;
      if (__s58local16.areaId == __s58local17.objectId && __s58local16.areaInfo.kingdomID == __s58local17.kingdomID) {
        for (var __s58local18 = 0, __s58local19 = __s58local16.isoData.objects.provider.getObjectsByClass(__dep_export_ADecoBuildingVO.ADecoBuildingVO, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS); __s58local18 < __s58local19.length; __s58local18++) {
          var __s58local20 = __s58local19[__s58local18];
          if (__s58local20.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED) {
            addNewDecoToList(this._itemVOs, __s58local20, __s58local16.areaInfo.kingdomID, __s58local16.areaId);
          }
        }
      } else {
        var __s58local21 = __dep_export_CastleModel.CastleModel.decoStorage.getTempDecos(__s58local17.objectId, __s58local17.kingdomID);
        if (__s58local21) {
          for (var __s58local22 = 0, __s58local23 = __s58local21.buildings; __s58local22 < __s58local23.length; __s58local22++) {
            __s58local1 = __s58local23[__s58local22];
            addNewDecoToList(this._itemVOs, __s58local1, __s58local17.kingdomID, __s58local17.objectId);
          }
        }
      }
    }
    this.updateNoDecoFound();
  };
  DecorationForgeSelectTargetDialog.prototype.updateRelevantVOs = function () {
    this._relevantVOs = [];
    if (this._itemVOs != null) {
      for (var __s85local0 = 0, __s85local1 = this._itemVOs; __s85local0 < __s85local1.length; __s85local0++) {
        var __s85local2 = __s85local1[__s85local0];
        if (__s85local2 !== undefined && this.doesItemMatchSearchCriteria(__s85local2)) {
          this._relevantVOs.push(__s85local2);
        }
      }
    }
    switch (this._currentOrderButton) {
      case this.dialogDisp.btn_publicOrder:
        this._relevantVOs.sort(this.bindFunction(this.sortByPublicOrder));
        break;
      case this.dialogDisp.btn_xp:
        this._relevantVOs.sort(this.bindFunction(this.sortByXp));
    }
    this.updateScrollComponent();
    this.updateSearchInfo();
  };
  DecorationForgeSelectTargetDialog.prototype.updateScrollComponent = function () {
    var __s92local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.max(this._relevantVOs.length * DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT - DecorationForgeSelectTargetDialog.LIST_ITEM_MASK_HEIGHT, 0));
    this._scrollComponent.strategy.visibleValue = __s92local0;
    this._scrollComponent.init(0, __s92local0, DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DELTA, DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DELTA);
    this._scrollComponent.scrollToValue(0, false);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(__s92local0 > 0);
  };
  DecorationForgeSelectTargetDialog.prototype.updateListScrollPosition = function (__s94param0 = true) {
    var __s94local0 = this.getItemContainerMc();
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(__s94local0);
    var __s94local1 = -this._scrollComponent.currentValue;
    if (__s94param0) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(__s94local0, DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DURATION, {
        y: __s94local1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      }).eventCallback("onUpdate", this.bindFunction(this.onTweenUpdate));
    } else {
      __s94local0.y = __s94local1;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.updateItemVEs = function (__s98param0 = false) {
    var __s98local0 = this.getRelevantVOIndexByScrollPos();
    var __s98local1 = this._currentRelevantVOIndex != __s98local0;
    this._currentRelevantVOIndex = __s98local0;
    var __s98local2 = this.getItemContainerMc().y;
    var __s98local3 = this._currentItemContainerPosY != __s98local2;
    this._currentItemContainerPosY = __s98local2;
    if (__s98local1 || __s98local3 || __s98param0) {
      var __s98local4 = DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT / 2 - __s98local2 - -__s98local2 % DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT;
      for (var __s98local5 = 0; __s98local5 < this._itemVEs.length; ++__s98local5) {
        var __s98local6 = this._itemVEs[__s98local5];
        if (__s98local3 || __s98param0) {
          __s98local6.disp.y = __s98local4;
          __s98local4 += DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT;
        }
        if (__s98local1 || __s98param0) {
          var __s98local7 = this._currentRelevantVOIndex + __s98local5;
          var __s98local8 = __s98local7 >= this._relevantVOs.length ? null : this._relevantVOs[__s98local7];
          __s98local6.updateWithNewVO(__s98local8);
        }
      }
    }
  };
  DecorationForgeSelectTargetDialog.prototype.updateSearchInfo = function () {
    this.dialogDisp.mc_searchInfo.visible = this._relevantVOs.length <= 0 && (this._searchField.currentSearchValue != "" || this._locationCombobox.getSelectedItem().data != DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL);
  };
  DecorationForgeSelectTargetDialog.prototype.updateNoDecoFound = function () {
    this.dialogDisp.txt_emptyList.visible = this._itemVOs.length <= 0;
  };
  DecorationForgeSelectTargetDialog.prototype.fillLocationItemContent = function (__s109param0) {
    this.textFieldManager.registerTextField(__s109param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getLocationItemText(__s109param0.data))).autoFitToBounds = true;
  };
  DecorationForgeSelectTargetDialog.prototype.getOrderButton = function (__s111param0) {
    return __s111param0.basicButton;
  };
  DecorationForgeSelectTargetDialog.prototype.getLocationItemText = function (__s113param0) {
    if (__s113param0 == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("filter_decoLocation_all");
    } else if (__s113param0 == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("filter_decoLocation_stored");
    } else if (__s113param0 == DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("filter_decoLocation_build");
    } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s113param0, "InteractiveMapobjectVO")) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("filter_decoLocation_buildIn", [__s113param0.areaNameString]);
    } else {
      return "[INVALID]";
    }
  };
  DecorationForgeSelectTargetDialog.prototype.doesItemMatchSearchCriteria = function (__s120param0) {
    return this._searchField.currentSearchValue == "" || __s120param0.searchName.indexOf(this._searchField.currentSearchValue) >= 0;
  };
  DecorationForgeSelectTargetDialog.prototype.getRelevantVOIndexByScrollPos = function () {
    return __dep_exact_f855840627e6e145.int(-this.getItemContainerMc().y / DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT);
  };
  DecorationForgeSelectTargetDialog.prototype.getItemContainerMc = function () {
    return this.dialogDisp.mc_list.mc_container.mc_items;
  };
  DecorationForgeSelectTargetDialog.prototype.getIndexOfSelectResultInRelevantVoList = function (__s126param0) {
    for (var __s126local0 = 0; __s126local0 < this._relevantVOs.length; ++__s126local0) {
      if (this._relevantVOs[__s126local0].selectVO.equals(__s126param0)) {
        return __s126local0;
      }
    }
    return -1;
  };
  DecorationForgeSelectTargetDialog.prototype.sortByPublicOrder = function (__s131param0, __s131param1) {
    return __dep_export_ClientConstSort.ClientConstSort.sortBySerialOrder(this.SERIAL_SORT_PUBLIC_ORDER, __s131param0, __s131param1);
  };
  DecorationForgeSelectTargetDialog.prototype.sortByXp = function (__s133param0, __s133param1) {
    return __dep_export_ClientConstSort.ClientConstSort.sortBySerialOrder(this.SERIAL_SORT_XP, __s133param0, __s133param1);
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByName = function (__s135param0, __s135param1) {
    var __s135local0 = __s135param0.searchName;
    var __s135local1 = __s135param1.searchName;
    return __s135local0.localeCompare(__s135local1) * (this._descendingOrder ? 1 : -1);
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByKingdom = function (__s137param0, __s137param1) {
    var __s137local0 = __dep_exact_f855840627e6e145.int(__s137param0.selectVO.kingdomId);
    var __s137local1 = __dep_exact_f855840627e6e145.int(__s137param1.selectVO.kingdomId);
    if (this._descendingOrder) {
      return __s137local0 - __s137local1;
    } else {
      return __s137local1 - __s137local0;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByXP = function (__s141param0, __s141param1) {
    var __s141local0 = __dep_exact_f855840627e6e145.int(__s141param0.buildingVO.buildingVO.fusionInfoVO.getCurrentTotalXp());
    var __s141local1 = __dep_exact_f855840627e6e145.int(__s141param1.buildingVO.buildingVO.fusionInfoVO.getCurrentTotalXp());
    if (this._descendingOrder) {
      return __s141local1 - __s141local0;
    } else {
      return __s141local0 - __s141local1;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByDeltaXP = function (__s145param0, __s145param1) {
    var __s145local0 = __s145param0.buildingVO.buildingVO.fusionInfoVO.getDeltaXpPercentFactor();
    var __s145local1 = __s145param1.buildingVO.buildingVO.fusionInfoVO.getDeltaXpPercentFactor();
    if (this._descendingOrder) {
      return __s145local1 - __s145local0;
    } else {
      return __s145local0 - __s145local1;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.subSortByDecoPoints = function (__s149param0, __s149param1) {
    var __s149local0 = __dep_exact_f855840627e6e145.int(__s149param0.buildingVO.buildingVO.decoPoints);
    var __s149local1 = __dep_exact_f855840627e6e145.int(__s149param1.buildingVO.buildingVO.decoPoints);
    if (this._descendingOrder) {
      return __s149local1 - __s149local0;
    } else {
      return __s149local0 - __s149local1;
    }
  };
  DecorationForgeSelectTargetDialog.prototype.onClick = function (__s153param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s153param0.target)) {
      __s1param0.prototype.onClick.call(this, __s153param0);
      this._locationCombobox.onOutOfBoundsClickCheck(__s153param0.target);
      switch (__s153param0.target) {
        case this.dialogDisp.btn_close:
          this.dialogProperties.onAbortFunc(null);
          this.hide();
          break;
        case this.dialogDisp.btn_publicOrder:
          this.interpretOrderButton(this.dialogDisp.btn_publicOrder);
          break;
        case this.dialogDisp.btn_xp:
          this.interpretOrderButton(this.dialogDisp.btn_xp);
      }
    }
  };
  DecorationForgeSelectTargetDialog.prototype.onSearchValueChanged = function () {
    this.updateRelevantVOs();
    this.updateItemVEs(true);
  };
  DecorationForgeSelectTargetDialog.prototype.onTempDecosUpdated = function (__s159param0) {};
  DecorationForgeSelectTargetDialog.prototype.onLocationSelectionChanged = function () {
    var __s161local0 = this._locationCombobox.getSelectedItem();
    this.textFieldManager.registerTextField(this._locationCombobox.getSelectorMc().txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getLocationItemText(__s161local0.data))).autoFitToBounds = true;
    this.initItemVOs();
    this.updateRelevantVOs();
    this.updateItemVEs(true);
  };
  DecorationForgeSelectTargetDialog.prototype.onScroll = function () {
    this.updateListScrollPosition();
  };
  DecorationForgeSelectTargetDialog.prototype.onEnterFrame = function (__s165param0) {
    this.updateItemVEs();
  };
  DecorationForgeSelectTargetDialog.prototype.onTweenUpdate = function () {
    this.updateItemVEs();
  };
  DecorationForgeSelectTargetDialog.prototype.onListItemClicked = function (__s169param0) {
    this.dialogProperties.onSuccessFunc(__s169param0.vo.selectVO);
    this.hide();
  };
  Object.defineProperty(DecorationForgeSelectTargetDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectTargetDialog.__initialize_static_members = function () {
    DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT = DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT + DecorationForgeSelectTargetDialog.LIST_ITEM_PADDING_Y;
    DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DELTA = __dep_exact_f855840627e6e145.int(DecorationForgeSelectTargetDialog.LIST_ITEM_TOTAL_HEIGHT);
  };
  DecorationForgeSelectTargetDialog.NAME = "DecorationForgeSelectTarget";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ASSET_CLIP_NAME = "DecorationForgeSelectTarget_LocationItem";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_ALL = "all";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_STORED = "stored";
  DecorationForgeSelectTargetDialog.LOCATION_ITEM_ENTRY_ID_BUILD = "build";
  DecorationForgeSelectTargetDialog.LIST_ITEM_MASK_HEIGHT = 394;
  DecorationForgeSelectTargetDialog.LIST_ITEM_HEIGHT = 80;
  DecorationForgeSelectTargetDialog.LIST_ITEM_PADDING_Y = 5;
  DecorationForgeSelectTargetDialog.LIST_ITEM_SCROLL_DURATION = 0.3;
  return DecorationForgeSelectTargetDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DecorationForgeSelectTargetDialog = __s0local1;
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ADecoBuildingVO = require("gge-module:export_ADecoBuildingVO");
var __dep_export_ModernComboboxComponentItem = require("gge-module:export_ModernComboboxComponentItem");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SearchFieldComponent = require("gge-module:export_SearchFieldComponent");
var __dep_export_DecorationForgeSelectTargetDialogListItemVE = require("gge-module:export_DecorationForgeSelectTargetDialogListItemVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
