Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleEquipableListComponent = require("gge-module:export_CastleEquipableListComponent");
var __dep_export_CraftingGemClickHandler = require("gge-module:export_CraftingGemClickHandler");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CraftingEquipmentClickHandler = require("gge-module:export_CraftingEquipmentClickHandler");
var __dep_export_EquipmentFilterView = require("gge-module:export_EquipmentFilterView");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_GemFilterView = require("gge-module:export_GemFilterView");
var __dep_export_CastleCraftingDialogEquipment = require("gge-module:export_CastleCraftingDialogEquipment");
var __dep_export_CastleCraftingDialogGem = require("gge-module:export_CastleCraftingDialogGem");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_EquipmentFilterPanel = require("gge-module:export_EquipmentFilterPanel");
var __dep_export_GemFilterPanel = require("gge-module:export_GemFilterPanel");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local2 = function (__s1param0) {
  function CastleCraftingSublayer(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._lastFilter = -1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCraftingSublayer, __s1param0);
  CastleCraftingSublayer.prototype.init = function () {
    this.initBasicButtons([this.dialogDisp.mc_equipmentList.tab0, this.dialogDisp.mc_equipmentList.tab1, this.dialogDisp.mc_equipmentList.tab2, this.dialogDisp.mc_equipmentList.tab3, this.dialogDisp.mc_equipmentList.btn_up, this.dialogDisp.mc_equipmentList.btn_down, this.dialogDisp.btn_autofill]);
    this.gemTabSwitchedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_filter], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    this.initSublayer();
    this.initFilters();
    this.initInventory();
    this.initTexts();
  };
  CastleCraftingSublayer.prototype.initFilters = function () {
    this.eqFilterPanel = new __dep_export_EquipmentFilterPanel.EquipmentFilterPanel(this.dialogDisp.filter_eq, this.dialogDisp.mc_empty);
    this.eqFilterPanel.toggleShowHideSetsOption(false, true);
    this.eqFilterPanel.hide();
    this.gemFilterPanel = new __dep_export_GemFilterPanel.GemFilterPanel(this.dialogDisp.filter_gem, this.dialogDisp.mc_empty);
    this.gemFilterPanel.toggleShowHideSetsOption(false, true);
    this.gemFilterPanel.hide();
    this.dialogDisp.btn_filter.mc_arrow.gotoAndStop(2);
    this.dialogDisp.btn_filter.toolTipText = "filterPanel_expand";
  };
  CastleCraftingSublayer.prototype.onInventoryUpdate = function (__s9param0 = null) {
    this.equipableList.update();
    this.equipableList.redraw();
    this.equipableList.currentClickHandler.setStorageWarning();
    this.equipableList.forEachItemVE(this.bindFunction(this.showInventorySmallFavoriteIcons));
  };
  CastleCraftingSublayer.prototype.showInventorySmallFavoriteIcons = function (__s11param0) {
    var __s11local0 = [];
    for (var __s11local1 = 1; __s11local1 < arguments.length; __s11local1++) {
      __s11local0[__s11local1 - 1] = arguments[__s11local1];
    }
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s11param0, "GemScrollItem")) {
      __s11param0.showSmallFavoriteIcon();
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s11param0, "EquipmentScrollItem")) {
      __s11param0.showSmallFavoriteIcon();
    }
  };
  CastleCraftingSublayer.prototype.show = function (__s17param0) {
    __s1param0.prototype.show.call(this, __s17param0);
    if (this._currentCategory) {
      this.changeCategory(this._currentCategory);
      this.showSublayer(this._currentSublayer, []);
    }
    this.eqFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.add(this.bindFunction(this.onInventoryUpdate));
    this.equipableList.update();
    this.equipableList.show();
    this.equipableList.currentFilterIndex = this._lastFilter != -1 ? this._lastFilter : CastleCraftingSublayer.FILTER_ALL;
    for (var __s17local0 = 0; __s17local0 < 6; __s17local0++) {
      this.dialogDisp.sl_equipmentCrafting["slot" + __s17local0].addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_equipmentCrafting["slot" + __s17local0].addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
      this.dialogDisp.sl_gemCrafting["slot" + __s17local0].addEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_gemCrafting["slot" + __s17local0].addEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
  };
  CastleCraftingSublayer.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_equipmentCrafting_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_autofill.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_autofill")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this._itxt_storage = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.mc_storageSpace.txt_storage, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this._itxt_storage.autoFitToBounds = true;
    this._itxt_storage.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_equipmentList.mc_storageSpace.mouseChildren = false;
  };
  CastleCraftingSublayer.prototype.initInventory = function () {
    this.equipClickHandler = new __dep_export_CraftingEquipmentClickHandler.CraftingEquipmentClickHandler(this, this._subLayer.get(CastleCraftingSublayer.SUBLAYER_EQUIPMENT));
    this.gemClickHandler = new __dep_export_CraftingGemClickHandler.CraftingGemClickHandler(this, this._subLayer.get(CastleCraftingSublayer.SUBLAYER_GEM));
    var __s24local0 = [new __dep_export_EquipmentFilterView.EquipmentFilterView("dialog_equipmentCrafting_allItems", this.getFilterByExcludedSlotType([__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO]), this.equipClickHandler, this.eqFilterPanel), new __dep_export_EquipmentFilterView.EquipmentFilterView("dialog_equipmentCrafting_generalItems", this.getFilterByWearerTypeAndExlcludedSlotTypes(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER, [__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO]), this.equipClickHandler, this.eqFilterPanel), new __dep_export_EquipmentFilterView.EquipmentFilterView("dialog_equipmentCrafting_baronItems", this.getFilterByWearerTypeAndExlcludedSlotTypes(__dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_BARON, [__dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO]), this.equipClickHandler, this.eqFilterPanel), new __dep_export_GemFilterView.GemFilterView(this.bindFunction(this.filterNone), this.gemClickHandler, this.gemFilterPanel)];
    this.equipableList = new __dep_export_CastleEquipableListComponent.CastleEquipableListComponent(this.dialogDisp.mc_equipmentList, __s24local0);
    this.equipableList.tabChangedCallback = this.bindFunction(this.onTabChanged);
  };
  CastleCraftingSublayer.prototype.initSublayer = function () {
    this._subLayer = new Map();
    this._subLayer.set(CastleCraftingSublayer.SUBLAYER_EQUIPMENT, new __dep_export_CastleCraftingDialogEquipment.CastleCraftingDialogEquipment(this.dialogDisp.sl_equipmentCrafting));
    this._subLayer.set(CastleCraftingSublayer.SUBLAYER_GEM, new __dep_export_CastleCraftingDialogGem.CastleCraftingDialogGem(this.dialogDisp.sl_gemCrafting));
  };
  CastleCraftingSublayer.prototype.onSlotTouchedDown = function (__s28param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s28param0) && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleDialogClick(__s28param0);
    }
  };
  CastleCraftingSublayer.prototype.onSlotTouchedUP = function (__s31param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s31param0) && this.equipableList && this.equipableList.currentClickHandler) {
      this.equipableList.currentClickHandler.handleInventoryEntryTouchDragEnd(new __dep_exact_9e901e8e2483a22f.ScrollItemEvent(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.TOUCH_DRAG_END, null, __s31param0.target, __s31param0));
    }
  };
  CastleCraftingSublayer.prototype.onTabChanged = function (__s34param0) {
    switch (__s34param0) {
      case CastleCraftingSublayer.FILTER_ALL:
      case CastleCraftingSublayer.FILTER_GENERAL:
      case CastleCraftingSublayer.FILTER_BARON:
        if (this._currentCategory == null || this._currentCategory == CastleCraftingSublayer.SUBLAYER_GEM) {
          this.changeCategory(CastleCraftingSublayer.SUBLAYER_EQUIPMENT);
          this.showSublayer(this._subLayer.get(CastleCraftingSublayer.SUBLAYER_EQUIPMENT), []);
        }
        break;
      case CastleCraftingSublayer.FILTER_GEM:
        if (this.gemClickHandler) {
          this.gemClickHandler.updateSlotLocks();
        }
        if (this._currentCategory == CastleCraftingSublayer.SUBLAYER_EQUIPMENT) {
          this.changeCategory(CastleCraftingSublayer.SUBLAYER_GEM);
          this.showSublayer(this._subLayer.get(CastleCraftingSublayer.SUBLAYER_GEM), []);
        }
    }
  };
  CastleCraftingSublayer.prototype.changeCategory = function (__s40param0) {
    this._currentCategory = __s40param0;
    if (this._currentSublayer) {
      this._currentSublayer.hide();
    }
  };
  CastleCraftingSublayer.prototype.showSublayer = function (__s43param0, __s43param1) {
    __s43param0.show(__s43param1);
    this._currentSublayer = __s43param0;
  };
  CastleCraftingSublayer.prototype.getFilterByWearerTypeAndExlcludedSlotTypes = function (__s45param0, __s45param1) {
    return function (__s47param0) {
      var __s47local0 = [];
      for (var __s47local1 = 1; __s47local1 < arguments.length; __s47local1++) {
        __s47local0[__s47local1 - 1] = arguments[__s47local1];
      }
      return __s47param0.lordType == __s45param0 && __s45param1.indexOf(__s47param0.slotType) == -1;
    };
  };
  CastleCraftingSublayer.prototype.filterNone = function () {
    var __s51local0 = [];
    for (var __s51local1 = 0; __s51local1 < arguments.length; __s51local1++) {
      __s51local0[__s51local1] = arguments[__s51local1];
    }
    return true;
  };
  CastleCraftingSublayer.prototype.getFilterByExcludedSlotType = function (__s55param0) {
    return function (__s57param0) {
      var __s57local0 = [];
      for (var __s57local1 = 1; __s57local1 < arguments.length; __s57local1++) {
        __s57local0[__s57local1 - 1] = arguments[__s57local1];
      }
      return __s55param0.indexOf(__s57param0.slotType) == -1;
    };
  };
  CastleCraftingSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.equipClickHandler.cancelDragMovement();
    this.gemClickHandler.cancelDragMovement();
    this.equipableList.hide();
    for (var __s61local0 = 0; __s61local0 < 6; __s61local0++) {
      this.dialogDisp.sl_equipmentCrafting["slot" + __s61local0].removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_equipmentCrafting["slot" + __s61local0].removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
      this.dialogDisp.sl_gemCrafting["slot" + __s61local0].removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onSlotTouchedDown));
      this.dialogDisp.sl_gemCrafting["slot" + __s61local0].removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onSlotTouchedUP));
    }
    this.eqFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
    this.gemFilterPanel.changed.remove(this.bindFunction(this.onInventoryUpdate));
  };
  CastleCraftingSublayer.prototype.onClick = function (__s65param0) {
    __s1param0.prototype.onClick.call(this, __s65param0);
    var __s65local0 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.getTouchEvent(__s65param0);
    if (__s65local0 && __s65local0.isLongPressed) {
      this.equipableList.currentClickHandler.handleDialogMouseOver(__s65param0);
    } else {
      this.eqFilterPanel.onClick(__s65param0);
      this.gemFilterPanel.onClick(__s65param0);
      if (__s65param0.target == this.dialogDisp.btn_filter) {
        if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.equipableList.currentFilter, "GemFilterView")) {
          this.gemFilterPanel.show();
          this.gemTabSwitchedSignal.dispatch();
        } else {
          this.eqFilterPanel.show();
        }
      }
      this.equipableList.currentClickHandler.handleDialogClick(__s65param0);
    }
  };
  CastleCraftingSublayer.prototype.onMouseOver = function (__s72param0) {
    __s1param0.prototype.onMouseOver.call(this, __s72param0);
    this.equipableList.currentClickHandler.handleDialogMouseOver(__s72param0);
  };
  CastleCraftingSublayer.prototype.onMouseOut = function (__s74param0) {
    __s1param0.prototype.onMouseOut.call(this, __s74param0);
  };
  CastleCraftingSublayer.prototype.onCursorOver = function (__s76param0) {
    if (__s76param0.target instanceof __s0local0 && __s76param0.target.basicButton != null) {
      if (__s76param0.target.basicButton.enabled) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (__s76param0.target.actLikeButton || __s76param0.target.parent && __s76param0.target.parent.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleCraftingSublayer.prototype.lockDialog = function () {
    var __s81local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
    __s81local0.desaturate();
    this.dialogDisp.useFilters([__s81local0.filter]);
  };
  CastleCraftingSublayer.prototype.unLockDialog = function () {
    this.dialogDisp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  Object.defineProperty(CastleCraftingSublayer.prototype, "lastFilter", {
    set: function (__s85param0) {
      this._lastFilter = __s85param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingSublayer.prototype, "itxt_storage", {
    get: function () {
      return this._itxt_storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingSublayer.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingSublayer.__initialize_static_members = function () {
    CastleCraftingSublayer.NAME = "CastleCrafting";
    CastleCraftingSublayer.SUBLAYER_EQUIPMENT = "equipmentcrafting";
    CastleCraftingSublayer.SUBLAYER_GEM = "gemcrafting";
    CastleCraftingSublayer.FILTER_ALL = 0;
    CastleCraftingSublayer.FILTER_GENERAL = 1;
    CastleCraftingSublayer.FILTER_BARON = 2;
    CastleCraftingSublayer.FILTER_GEM = 3;
  };
  return CastleCraftingSublayer;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleCraftingSublayer = __s0local2;
__s0local2.__initialize_static_members();
