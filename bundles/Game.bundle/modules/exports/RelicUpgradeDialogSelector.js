Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_C2SGetEquipmentInventory = require("gge-module:export_C2SGetEquipmentInventory");
var __dep_export_C2SGetGemInventory = require("gge-module:export_C2SGetGemInventory");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleGemEvent = require("gge-module:export_CastleGemEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function RelicUpgradeDialogSelector(__s3param0) {
    var __s3local0 = this;
    __s3local0._allItems = [];
    __s3local0._shownItems = [];
    __s3local0._onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._receivedEquipableResponses = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialogSelector, __s1param0);
  RelicUpgradeDialogSelector.prototype.init = function () {
    this._searchField = new __dep_export_SearchFieldComponent.SearchFieldComponent(this.disp.mc_search);
    this._filters = [];
    for (var __s5local0 = 0; __s5local0 < RelicUpgradeDialogSelector.NUMBER_OF_FILTERS; ++__s5local0) {
      this._filters.push(new __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox(this.disp.getChildByName("mc_filter" + __s5local0), __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.ORDER[__s5local0]));
    }
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  RelicUpgradeDialogSelector.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._searchField.onShow();
    this._scrollComponent.show();
    if (this._filters != null) {
      for (var __s9local0 = 0, __s9local1 = this._filters; __s9local0 < __s9local1.length; __s9local0++) {
        __s9local4 = __s9local1[__s9local0];
        if (__s9local4 !== undefined) {
          __s9local4.onShow();
        }
      }
    }
    if (this._shownItems != null) {
      for (var __s9local2 = 0, __s9local3 = this._shownItems; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4;
        var __s9local5 = __s9local4 = __s9local3[__s9local2];
        if (__s9local5 !== undefined) {
          __s9local5.onShow();
          __s9local5.onSelected.add(this.bindFunction(this.onItemSelected));
        }
      }
    }
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onEquipmentInventoryUpdated));
    __dep_export_CastleModel.CastleModel.gemData.addEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onGemInventoryUpdated));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.add(this.bindFunction(this.onFavList));
    this.clearAllItems();
    this.resetShownItems();
    this._searchField.clearSearchField();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGemInventory.C2SGetGemInventory());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetEquipmentInventory.C2SGetEquipmentInventory());
  };
  RelicUpgradeDialogSelector.prototype.onHide = function () {
    this._searchField.onHide();
    this._scrollComponent.hide();
    if (this._filters != null) {
      for (var __s19local0 = 0, __s19local1 = this._filters; __s19local0 < __s19local1.length; __s19local0++) {
        __s19local4 = __s19local1[__s19local0];
        if (__s19local4 !== undefined) {
          __s19local4.onHide();
        }
      }
    }
    if (this._shownItems != null) {
      for (var __s19local2 = 0, __s19local3 = this._shownItems; __s19local2 < __s19local3.length; __s19local2++) {
        var __s19local4;
        var __s19local5 = __s19local4 = __s19local3[__s19local2];
        if (__s19local5 !== undefined) {
          __s19local5.onHide();
          __s19local5.onSelected.remove(this.bindFunction(this.onItemSelected));
        }
      }
    }
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onEquipmentInventoryUpdated));
    __dep_export_CastleModel.CastleModel.gemData.removeEventListener(__dep_export_CastleGemEvent.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onGemInventoryUpdated));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __dep_export_CastleEquipmentFavoritesMicroservice.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.remove(this.bindFunction(this.onFavList));
    __s1param0.prototype.onHide.call(this);
  };
  RelicUpgradeDialogSelector.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.onShow.add(this.bindFunction(this.onEqShow));
    this._searchField.onSearchValueChanged.add(this.bindFunction(this.onSearchValueChanged));
    if (this._filters != null) {
      for (var __s29local0 = 0, __s29local1 = this._filters; __s29local0 < __s29local1.length; __s29local0++) {
        var __s29local2 = __s29local1[__s29local0];
        if (__s29local2 !== undefined) {
          __s29local2.onStateChanged.add(this.bindFunction(this.onFilterStateChanged));
        }
      }
    }
  };
  RelicUpgradeDialogSelector.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.onShow.remove(this.bindFunction(this.onEqShow));
    this._searchField.onSearchValueChanged.remove(this.bindFunction(this.onSearchValueChanged));
    if (this._filters != null) {
      for (var __s35local0 = 0, __s35local1 = this._filters; __s35local0 < __s35local1.length; __s35local0++) {
        var __s35local2 = __s35local1[__s35local0];
        if (__s35local2 !== undefined) {
          __s35local2.onStateChanged.remove(this.bindFunction(this.onFilterStateChanged));
        }
      }
    }
  };
  RelicUpgradeDialogSelector.prototype.onEqShow = function () {
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.removeInputFocus();
  };
  RelicUpgradeDialogSelector.prototype.checkAndUpdateItems = function () {
    this._receivedEquipableResponses++;
    if (this._receivedEquipableResponses >= 2) {
      this._receivedEquipableResponses = 0;
      this.updateAllItemsList();
      this.updateShownItems();
    }
  };
  RelicUpgradeDialogSelector.prototype.clearAllItems = function () {
    if (this._allItems != null) {
      for (var __s46local0 = 0, __s46local1 = this._allItems; __s46local0 < __s46local1.length; __s46local0++) {
        var __s46local2 = __s46local1[__s46local0];
        if (__s46local2 !== undefined) {
          __s46local2.destroy();
        }
      }
    }
    this._allItems = [];
    this._relicsAssignedToLord = new Map();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_items.mc_transform);
  };
  RelicUpgradeDialogSelector.prototype.updateAllItemsList = function () {
    this.clearAllItems();
    this._allItems = [];
    this._relicsAssignedToLord = new Map();
    this._allItems = this.parseEquipmentListToItems(this.getAllRelevantRelicsFromLordList(__dep_export_CastleModel.CastleModel.lordData.commanders), __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS);
    this._allItems = this._allItems.concat(this.parseEquipmentListToItems(this.getAllRelevantRelicsFromLordList(__dep_export_CastleModel.CastleModel.lordData.barons), __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS));
    var __s52local0 = this.getAllRelevantRelicsFromEquipList(__dep_export_CastleModel.CastleModel.equipData.playerInventory);
    __s52local0 = __s52local0.concat(this.getAllRelevantRelicsFromEquipList(__dep_export_CastleModel.CastleModel.gemData.relicGemsInventory));
    this._allItems = this._allItems.concat(this.parseEquipmentListToItems(__s52local0, __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY));
    this._allItems.sort(RelicUpgradeDialogSelector.sortInventoryEquipment);
    if (this._allItems != null) {
      for (var __s52local1 = 0, __s52local2 = this._allItems; __s52local1 < __s52local2.length; __s52local1++) {
        var __s52local3 = __s52local2[__s52local1];
        if (__s52local3 !== undefined) {
          this.disp.mc_items.mc_transform.addChild(__s52local3.disp);
        }
      }
    }
  };
  RelicUpgradeDialogSelector.prototype.resetShownItems = function () {
    if (this._allItems != null) {
      for (var __s58local0 = 0, __s58local1 = this._allItems; __s58local0 < __s58local1.length; __s58local0++) {
        var __s58local2 = __s58local1[__s58local0];
        if (__s58local2 !== undefined) {
          __s58local2.disp.x = RelicUpgradeDialogSelector.ITEM_DIMENSION.x * 0.5;
          __s58local2.disp.y = RelicUpgradeDialogSelector.ITEM_DIMENSION.y * 0.5;
          __s58local2.disp.visible = false;
        }
      }
    }
    this._shownItems = [];
    this._selectedItem = null;
    this._onSelectionChanged.dispatch();
  };
  RelicUpgradeDialogSelector.prototype.updateShownItems = function () {
    this.resetShownItems();
    if (this._allItems != null) {
      for (var __s64local0 = 0, __s64local1 = this._allItems; __s64local0 < __s64local1.length; __s64local0++) {
        var __s64local2 = __s64local1[__s64local0];
        if (__s64local2 !== undefined && this.fulfillsFilterCriteria(__s64local2)) {
          this.addShownItem(__s64local2);
        }
      }
    }
    this.updateScrollValues();
    this.updateInfoField();
  };
  RelicUpgradeDialogSelector.prototype.addShownItem = function (__s70param0) {
    __s70param0.onShow();
    __s70param0.onSelected.add(this.bindFunction(this.onItemSelected));
    __s70param0.disp.visible = true;
    __s70param0.update();
    this._shownItems.push(__s70param0);
    var __s70local0 = __dep_exact_f855840627e6e145.int(this._shownItems.length - 1);
    var __s70local1 = __s70local0 % 4;
    var __s70local2 = __dep_exact_f855840627e6e145.int(__s70local0 / 4);
    __s70param0.disp.x = RelicUpgradeDialogSelector.ITEM_DIMENSION.x * __s70local1 + __s70local1 * RelicUpgradeDialogSelector.ITEM_DISTANCE.x + RelicUpgradeDialogSelector.ITEM_DIMENSION.x * 0.5;
    __s70param0.disp.y = RelicUpgradeDialogSelector.ITEM_DIMENSION.y * __s70local2 + __s70local2 * RelicUpgradeDialogSelector.ITEM_DISTANCE.y + RelicUpgradeDialogSelector.ITEM_DIMENSION.y * 0.5;
  };
  RelicUpgradeDialogSelector.prototype.updateItemInfo = function (__s72param0, __s72param1) {
    if (this._shownItems != null) {
      for (var __s72local0 = 0, __s72local1 = this._shownItems; __s72local0 < __s72local1.length; __s72local0++) {
        var __s72local2 = __s72local1[__s72local0];
        if (__s72local2 !== undefined && __s72param0.type == __s72local2.relicVO.type && __s72param0.getId() == __s72local2.relicVO.getId()) {
          if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s72local2.relicVO.vo, "RelicGemVO")) {
            __s72local2.relicVO.vo.parseServerObject(__s72param1);
          } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s72local2.relicVO.vo, "RelicEquipmentVO")) {
            __s72local2.relicVO.vo.parseEquipFromArray(__s72param1);
          }
          __s72local2.update();
        }
      }
    }
    this._onSelectionChanged.dispatch();
  };
  RelicUpgradeDialogSelector.prototype.updateInfoField = function () {
    var __s80local0 = "";
    if (this._allItems.length <= 0) {
      __s80local0 = "dialog_relicEnchanter_relicInventory_empty";
    } else if (this._shownItems.length <= 0) {
      __s80local0 = "equipmentFilter_empty";
    }
    if (__s80local0 != "") {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s80local0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    this.disp.txt_info.visible = __s80local0 != "";
  };
  RelicUpgradeDialogSelector.prototype.updateScrollValues = function () {
    var __s85local0 = Math.max(0, this.disp.mc_items.mc_transform.height - this.disp.mc_mask.height);
    var __s85local1 = RelicUpgradeDialogSelector.ITEM_DIMENSION.y + RelicUpgradeDialogSelector.ITEM_DISTANCE.y;
    this._scrollComponent.init(0, __s85local0, __s85local1, __s85local1);
    this._scrollComponent.setVisibility(__s85local0 > 0);
    this._scrollComponent.scrollToPercent(0);
  };
  RelicUpgradeDialogSelector.prototype.fulfillsFilterCriteria = function (__s87param0) {
    var __s87local0 = this._searchField.currentSearchValue.toLowerCase();
    if (this.isFilterChecked(__s87param0.filterType)) {
      if (__s87param0.relicVO.vo.nameString.toLowerCase().indexOf(__s87local0) > -1) {
        return true;
      }
      if (__s87param0.relicVO.vo.extraText.toLowerCase().indexOf(__s87local0) > -1) {
        return true;
      }
      if (__s87param0.relicVO.vo.typeDescriptionText.toLowerCase().indexOf(__s87local0) > -1) {
        return true;
      }
      if (__s87param0.relicVO.vo.bonusDescriptionText.toLowerCase().indexOf(__s87local0) > -1) {
        return true;
      }
      if (__s87param0.relicVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        var __s87local1 = __s87param0.relicVO.vo;
        if (__s87local1 && __s87local1.gemVO) {
          if (__s87local1.gemVO.nameString.toLowerCase().indexOf(__s87local0) > -1) {
            return true;
          }
          if (__s87local1.gemVO.extraText.toLowerCase().indexOf(__s87local0) > -1) {
            return true;
          }
          if (__s87local1.gemVO.typeDescriptionText.toLowerCase().indexOf(__s87local0) > -1) {
            return true;
          }
          if (__s87local1.gemVO.bonusDescriptionText.toLowerCase().indexOf(__s87local0) > -1) {
            return true;
          }
        }
      }
    }
    return false;
  };
  RelicUpgradeDialogSelector.prototype.isFilterChecked = function (__s100param0) {
    if (this._filters != null) {
      for (var __s100local0 = 0, __s100local1 = this._filters; __s100local0 < __s100local1.length; __s100local0++) {
        var __s100local2 = __s100local1[__s100local0];
        if (__s100local2 !== undefined && __s100local2.filterType == __s100param0) {
          return __s100local2.currentState == __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED;
        }
      }
    }
    return false;
  };
  RelicUpgradeDialogSelector.prototype.parseEquipmentListToItems = function (__s106param0, __s106param1) {
    var __s106local0 = [];
    if (__s106param0 != null) {
      for (var __s106local1 = 0, __s106local2 = __s106param0; __s106local1 < __s106local2.length; __s106local1++) {
        var __s106local3 = __s106local2[__s106local1];
        if (__s106local3 !== undefined) {
          var __s106local4 = new __dep_export_CollectableItemRelicVO.CollectableItemRelicVO();
          __s106local4.vo = __s106local3;
          var __s106local5 = this._relicsAssignedToLord.get(__s106local3.id);
          var __s106local6 = new __dep_export_RelicUpgradeDialogSelectorItem.RelicUpgradeDialogSelectorItem(__s106local4, __s106local5);
          __s106local6.filterType = __s106param1;
          __s106local0.push(__s106local6);
        }
      }
    }
    return __s106local0;
  };
  RelicUpgradeDialogSelector.prototype.getAllRelevantRelicsFromLordList = function (__s112param0) {
    var __s112local0 = [];
    if (__s112param0 != null) {
      for (var __s112local1 = 0, __s112local2 = __s112param0; __s112local1 < __s112local2.length; __s112local1++) {
        var __s112local3 = __s112local2[__s112local1];
        if (__s112local3 !== undefined && RelicUpgradeDialogSelector.ITEM_LORD_EQUIPMENT_SLOT_ORDER != null) {
          for (var __s112local4 = 0, __s112local5 = RelicUpgradeDialogSelector.ITEM_LORD_EQUIPMENT_SLOT_ORDER; __s112local4 < __s112local5.length; __s112local4++) {
            var __s112local6 = __s112local5[__s112local4];
            if (__s112local6 !== undefined) {
              var __s112local7 = __s112local3.equipmentSlots[__s112local6];
              if (__s112local7 && __s112local7.equipmentVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s112local7.equipmentVO, "RelicEquipmentVO")) {
                __s112local0.push(__s112local7.equipmentVO);
                this._relicsAssignedToLord.set(__s112local7.equipmentVO.id, __s112local3 ? __s112local3.id : -1);
              }
            }
          }
        }
      }
    }
    return __s112local0;
  };
  RelicUpgradeDialogSelector.prototype.getAllRelevantRelicsFromEquipList = function (__s122param0) {
    var __s122local0 = [];
    if (__s122param0 != null) {
      for (var __s122local1 = 0, __s122local2 = __s122param0; __s122local1 < __s122local2.length; __s122local1++) {
        var __s122local3 = __s122local2[__s122local1];
        if (__s122local3 !== undefined && __s122local3 && (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s122local3, "RelicEquipmentVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s122local3, "RelicGemVO"))) {
          __s122local0.push(__s122local3);
        }
      }
    }
    return __s122local0;
  };
  RelicUpgradeDialogSelector.prototype.getSelectedItem = function () {
    return this._selectedItem;
  };
  RelicUpgradeDialogSelector.sortInventoryEquipment = function (__s130param0, __s130param1) {
    var __s130local0 = 0;
    if ((__s130local0 = __dep_exact_f855840627e6e145.int(__dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.ORDER.indexOf(__s130param0.filterType) - __dep_export_RelicUpgradeDialogSelectorCheckbox.RelicUpgradeDialogSelectorCheckbox.ORDER.indexOf(__s130param1.filterType))) == 0 && (__s130local0 = __dep_exact_f855840627e6e145.int(__s130param1.relicVO.vo.lordTypeId - __s130param0.relicVO.vo.lordTypeId)) == 0 && (__s130local0 = __dep_exact_f855840627e6e145.int(__s130param0.relicVO.vo.nameString.localeCompare(__s130param1.relicVO.vo.nameString))) == 0 && (__s130local0 = __dep_exact_f855840627e6e145.int(RelicUpgradeDialogSelector.getEnchantmentLevelFromEquip(__s130param1.relicVO.vo) - RelicUpgradeDialogSelector.getEnchantmentLevelFromEquip(__s130param0.relicVO.vo))) == 0) {
      return RelicUpgradeDialogSelector.getRelicInfoFromEquip(__s130param1.relicVO.vo).mightValue - RelicUpgradeDialogSelector.getRelicInfoFromEquip(__s130param0.relicVO.vo).mightValue;
    } else {
      return __s130local0;
    }
  };
  RelicUpgradeDialogSelector.getEnchantmentLevelFromEquip = function (__s134param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s134param0, "BasicEquipmentVO")) {
      return __dep_exact_f855840627e6e145.int(__s134param0.enchantmentLevel);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s134param0, "RelicGemVO")) {
      return __dep_exact_f855840627e6e145.int(__s134param0.enchantmentLevel);
    } else {
      return 0;
    }
  };
  RelicUpgradeDialogSelector.getRelicInfoFromEquip = function (__s139param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s139param0, "RelicEquipmentVO")) {
      return __s139param0.relicInfoVO;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s139param0, "RelicGemVO")) {
      return __s139param0.relicInfoVO;
    } else {
      return null;
    }
  };
  RelicUpgradeDialogSelector.prototype.onSearchValueChanged = function () {
    this.updateShownItems();
  };
  RelicUpgradeDialogSelector.prototype.onFilterStateChanged = function () {
    this.updateShownItems();
  };
  RelicUpgradeDialogSelector.prototype.onGemInventoryUpdated = function (__s148param0) {
    this.checkAndUpdateItems();
  };
  RelicUpgradeDialogSelector.prototype.onEquipmentInventoryUpdated = function (__s150param0) {
    this.checkAndUpdateItems();
  };
  RelicUpgradeDialogSelector.prototype.onFavList = function () {
    this.updateShownItems();
  };
  RelicUpgradeDialogSelector.prototype.onScroll = function () {
    this.disp.mc_items.mc_transform.y = -this._scrollComponent.currentValue;
  };
  RelicUpgradeDialogSelector.prototype.onItemSelected = function (__s156param0 = null) {
    var __s156local0 = !!__s156param0 && __s156param0.isSelected();
    if (this._shownItems != null) {
      for (var __s156local1 = 0, __s156local2 = this._shownItems; __s156local1 < __s156local2.length; __s156local1++) {
        var __s156local3 = __s156local2[__s156local1];
        if (__s156local3 !== undefined) {
          __s156local3.setSelection(false);
        }
      }
    }
    if (__s156param0 && !__s156local0) {
      __s156param0.setSelection(true);
    }
    this._selectedItem = __s156local0 ? null : __s156param0;
    this._onSelectionChanged.dispatch();
  };
  Object.defineProperty(RelicUpgradeDialogSelector.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogSelector.__initialize_static_members = function () {
    RelicUpgradeDialogSelector.ITEM_DISTANCE = new __s0local0(6, 6);
    RelicUpgradeDialogSelector.ITEM_DIMENSION = new __s0local0(86, 86);
  };
  RelicUpgradeDialogSelector.NUMBER_OF_FILTERS = 3;
  RelicUpgradeDialogSelector.ITEM_LORD_EQUIPMENT_SLOT_ORDER = [__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HELMET, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_WEAPON, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARMOR, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_ARTIFACT, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN];
  return RelicUpgradeDialogSelector;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.RelicUpgradeDialogSelector = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_SearchFieldComponent = require("gge-module:export_SearchFieldComponent");
var __dep_export_RelicUpgradeDialogSelectorCheckbox = require("gge-module:export_RelicUpgradeDialogSelectorCheckbox");
var __dep_export_RelicUpgradeDialogSelectorItem = require("gge-module:export_RelicUpgradeDialogSelectorItem");
__s0local1.__initialize_static_members();
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleEquipmentFavoritesMicroservice = require("gge-module:export_CastleEquipmentFavoritesMicroservice");
