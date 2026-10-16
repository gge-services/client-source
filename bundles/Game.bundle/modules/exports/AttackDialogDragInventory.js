Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8_1 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_SimpleLayoutStrategyVerticalGrid = require("gge-module:export_SimpleLayoutStrategyVerticalGrid");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogDragInventoryItem = require("gge-module:export_AttackDialogDragInventoryItem");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function () {
  function AttackDialogDragInventory() {
    this._items = [];
    this._itemPool = [];
    this.isInit = false;
  }
  AttackDialogDragInventory.prototype.init = function (__s5param0) {
    this._mc = __s5param0;
    this._layoutGrid = new __dep_export_SimpleLayoutStrategyVerticalGrid.SimpleLayoutStrategyVerticalGrid();
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._mc.mc_slider.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._mc.btn_radio_attackUnits, this._mc.btn_radio_defenseUnits, this._mc.btn_radio_tools, this._mc.btn_radio_boosterTools], __dep_exact_84d43d9c404bd4d8_1.TwoStateButton);
    this._mc.btn_radio_attackUnits.mc_disabled.visible = false;
    this._mc.btn_radio_defenseUnits.mc_disabled.visible = false;
    this._mc.btn_radio_tools.mc_disabled.visible = false;
    this._mc.btn_radio_boosterTools.mc_disabled.visible = false;
    this._buttonGroup = new __dep_exact_84d43d9c404bd4d8.BasicButtonGroup([__dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._mc.btn_radio_attackUnits), __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._mc.btn_radio_defenseUnits), __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._mc.btn_radio_tools), __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._mc.btn_radio_boosterTools)], false);
    if (!this.isInit) {
      this._scrollY = this._mc.mc_list.y;
      var __s5local0 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this._mc.mc_slider).addSliderBackground(this._mc.mc_slider.bg).addMouseWheelElements([this._mc]);
      var __s5local1 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, this._mc.mc_list.mask.height, true);
      this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s5local0, __s5local1);
    }
    this._mc.icon_attackUnits.toolTipText = "attackunit";
    this._mc.icon_defenseUnits.toolTipText = "defenceunit";
    this._mc.icon_tools.toolTipText = "attackTools";
    this._mc.icon_boosterTools.toolTipText = "boosterTools";
    this.filterInventory(AttackDialogDragInventory.FILTER_ATTACK_UNITS);
    this._mc.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.attackController.updateAllWaveInfo.add(this.bindFunction(this.onUpdateWaves));
    this.attackController.onAutoFillALLSelectionChanged.add(this.bindFunction(this.onSelectedWavesChanged));
    this.isInit = true;
  };
  AttackDialogDragInventory.prototype.filterInventory = function (__s8param0) {
    this._currentFilter = __s8param0;
    this._buttonGroup.selectButton(__dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._mc[__s8param0]));
    this.updateInventory(true);
  };
  AttackDialogDragInventory.prototype.enableFilter = function (__s10param0, __s10param1) {
    this._mc[__s10param0].mc_disabled.visible = !__s10param1;
    __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this._mc[__s10param0]).enableButton = __s10param1;
    this._mc[__s10param0].useFilters([], false);
  };
  AttackDialogDragInventory.prototype.updateInventory = function (__s12param0) {
    var __s12local0 = this;
    if (__s12param0 === undefined) {
      __s12param0 = false;
    }
    if (this._mc.visible) {
      var __s12local1 = __dep_export_AttackDialogHelper.AttackDialogHelper.getFilterArray_Complete(this.getCategoryFromFilter(this._currentFilter));
      __s12local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitAttackPower);
      this.clearItems();
      __s12local1.forEach(function (__s16param0) {
        var __s16local0 = __s12local0.getItemFromPool();
        __s16local0.init(__s16param0);
        __s12local0._items.push(__s16local0);
        __s12local0._mc.mc_list.addChild(__s16local0.disp);
      });
      this._layoutGrid.apply(this._items, new __s0local1(0, 0, this._mc.mc_list.mask.width, 0));
      var __s12local2 = this._scrollComponent.currentValue;
      var __s12local3 = Math.max(0, this._mc.mc_list.height + __dep_export_AttackDialogDragInventoryItem.AttackDialogDragInventoryItem.MARGIN.top * 2 - this._mc.mc_list.mask.height);
      this._scrollComponent.init(0, __s12local3, 75, 75);
      this._scrollComponent.scrollToValue(__s12param0 ? 0 : __s12local2);
      this._scrollComponent.show();
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
      this._mc.txt_empty.visible = __s12local1.length == 0;
      if (__s12local1.length == 0) {
        this._mc.txt_empty.visible = true;
        var __s12local4 = this._currentFilter == AttackDialogDragInventory.FILTER_ATTACK_UNITS || this._currentFilter == AttackDialogDragInventory.FILTER_ATTACK_UNITS ? "dialog_attack_rework2022_noUnits_desc" : "dialog_attack_rework2022_noTools_desc";
        __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._mc.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s12local4)).autoFitToBounds = true;
      } else {
        this._mc.txt_empty.visible = false;
      }
    }
  };
  AttackDialogDragInventory.prototype.clearItems = function () {
    var __s20local0 = this;
    if (this._mc) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._mc.mc_list);
    }
    this._items.forEach(function (__s23param0) {
      __s23param0.destroy();
      __s20local0._itemPool.push(__s23param0);
    });
    this._items = [];
  };
  AttackDialogDragInventory.prototype.getItemFromPool = function () {
    if (this._itemPool.length > 0) {
      return this._itemPool.pop();
    }
    var __s25local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AttackDialogDragInventory_Item"))();
    return new __dep_export_AttackDialogDragInventoryItem.AttackDialogDragInventoryItem(__s25local0);
  };
  AttackDialogDragInventory.prototype.getCategoryFromFilter = function (__s28param0) {
    switch (__s28param0) {
      case AttackDialogDragInventory.FILTER_ATTACK_UNITS:
        return __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT;
      case AttackDialogDragInventory.FILTER_DEFENSE_UNITS:
        return __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF;
      case AttackDialogDragInventory.FILTER_TOOLS:
        return __dep_export_AttackDialogHelper.AttackDialogHelper.CUSTOM_CATEGORY_ATTACK_TOOLS;
      case AttackDialogDragInventory.FILTER_BOOSTER_TOOLS:
        return __dep_export_AttackDialogHelper.AttackDialogHelper.CUSTOM_CATEGORY_BOOSTER_TOOLS;
    }
  };
  AttackDialogDragInventory.prototype.onScroll = function () {
    this._mc.mc_list.y = this._scrollY - this._scrollComponent.currentValue;
  };
  AttackDialogDragInventory.prototype.onClick = function (__s33param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s33param0.target)) {
      switch (__s33param0.target) {
        case this._mc.btn_radio_attackUnits:
        case this._mc.btn_radio_defenseUnits:
        case this._mc.btn_radio_tools:
        case this._mc.btn_radio_boosterTools:
          this.filterInventory(__s33param0.target.name);
      }
    }
  };
  AttackDialogDragInventory.prototype.onUpdateWaves = function () {
    this.updateInventory();
  };
  AttackDialogDragInventory.prototype.onSelectedWavesChanged = function () {
    if (this.attackController.isWaveDetailView) {
      var __s39local0 = this.attackController.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME);
      var __s39local1 = this.attackController.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME);
      this.enableFilter(AttackDialogDragInventory.FILTER_ATTACK_UNITS, !__s39local0);
      this.enableFilter(AttackDialogDragInventory.FILTER_DEFENSE_UNITS, !__s39local0);
      this.enableFilter(AttackDialogDragInventory.FILTER_TOOLS, !__s39local1);
      this.enableFilter(AttackDialogDragInventory.FILTER_BOOSTER_TOOLS, !__s39local0 && !__s39local1);
      if (__s39local0 && this._currentFilter != AttackDialogDragInventory.FILTER_TOOLS) {
        this.filterInventory(AttackDialogDragInventory.FILTER_TOOLS);
      } else if (!__s39local1 || this._currentFilter != AttackDialogDragInventory.FILTER_TOOLS && this._currentFilter != AttackDialogDragInventory.FILTER_BOOSTER_TOOLS) {
        this.updateInventory();
      } else {
        this.filterInventory(AttackDialogDragInventory.FILTER_ATTACK_UNITS);
      }
    }
  };
  AttackDialogDragInventory.prototype.destroy = function () {
    if (this._mc) {
      this._mc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
    this.attackController.updateAllWaveInfo.remove(this.bindFunction(this.onUpdateWaves));
    this.attackController.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.onSelectedWavesChanged));
    this.clearItems();
    if (this._scrollComponent) {
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
  };
  Object.defineProperty(AttackDialogDragInventory.prototype, "attackController", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDragInventory.FILTER_ATTACK_UNITS = "btn_radio_attackUnits";
  AttackDialogDragInventory.FILTER_DEFENSE_UNITS = "btn_radio_defenseUnits";
  AttackDialogDragInventory.FILTER_TOOLS = "btn_radio_tools";
  AttackDialogDragInventory.FILTER_BOOSTER_TOOLS = "btn_radio_boosterTools";
  return AttackDialogDragInventory;
}();
exports.AttackDialogDragInventory = __s0local2;
