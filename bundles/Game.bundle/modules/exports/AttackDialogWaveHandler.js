Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleFameHelper = require("gge-module:export_CastleFameHelper");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleLegendEffectTextComposer = require("gge-module:export_CastleLegendEffectTextComposer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __dep_export_AttackDialogDetailViewScrollItem = require("gge-module:export_AttackDialogDetailViewScrollItem");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoDetail = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoDetail");
var __dep_export_AttackDialogWaveHandlerSupportToolDetail = require("gge-module:export_AttackDialogWaveHandlerSupportToolDetail");
var __dep_export_AttackDialogWaveHandlerWaveInfoDetail = require("gge-module:export_AttackDialogWaveHandlerWaveInfoDetail");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut");
var __dep_export_AttackDialogWaveHandlerWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerWaveInfoItemFoldOut");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Rectangle;
var __s0local2 = function () {
  function AttackDialogWaveHandler() {
    this.NUM_AMOUNT_OF_UNITS_SLOTS_IN_PICKER = 8;
    this.additionalLordWaveCount = 0;
    this.defaultWaveCount = 0;
    this.isInit = false;
    this.waveItemPool = [];
    this._detailScrollItems = [];
  }
  AttackDialogWaveHandler.prototype.init = function (__s5param0, __s5param1) {
    this.waveOverview = __s5param0;
    this.attackCosts = __s5param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.waveOverview.btn_option1, this.waveOverview.btn_foldOutAll_selected, this.waveOverview.btn_foldOutAll, this.waveOverview.btn_detailView, this.waveOverview.btn_listView], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.waveOverview.mc_detailView.mc_waveList.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    this.waveOverview.btn_foldOutAll_selected.visible = false;
    this.waveOverview.btn_foldOutAll_selected.toolTipText = "dialog_attack_rework2022_waves_hideAll_tooltip";
    this.waveOverview.btn_foldOutAll.toolTipText = "dialog_attack_rework2022_waves_showAll_tooltip";
    this.waveOverview.btn_detailView.toolTipText = "dialog_attack_rework2022_waveDetails_show_tooltip";
    this.waveOverview.btn_listView.toolTipText = "dialog_attack_rework2022_wavesList_show_tooltip";
    this.attackCosts.mc_loot.toolTipText = "lootplace";
    this.attackCosts.mc_time.toolTipText = "panel_fight_Traveltime";
    if (!this.isInit) {
      this.cbx_all = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.waveOverview.cbx_all, true);
      this.cbx_left = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.waveOverview.cbx_left, true);
      this.cbx_middle = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.waveOverview.cbx_middle, true);
      this.cbx_right = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.waveOverview.cbx_right, true);
      this.waveOverview.cbx_all.toolTipText = "dialog_troopPreset_allWaves_tt";
      this.waveOverview.cbx_left.toolTipText = "dialog_defence_leftFlank";
      this.waveOverview.mc_left.toolTipText = "dialog_defence_leftFlank";
      this.waveOverview.cbx_middle.toolTipText = "dialog_defence_middleFlank";
      this.waveOverview.mc_middle.toolTipText = "dialog_defence_middleFlank";
      this.waveOverview.cbx_right.toolTipText = "dialog_defence_rightFlank";
      this.waveOverview.mc_right.toolTipText = "dialog_defence_rightFlank";
      this._detailSupportWaveInfo = new __dep_export_AttackDialogWaveHandlerSupportToolDetail.AttackDialogWaveHandlerSupportToolDetail(this.waveOverview.mc_detailView.mc_support);
      this._detailWaveInfo = new __dep_export_AttackDialogWaveHandlerWaveInfoDetail.AttackDialogWaveHandlerWaveInfoDetail(this.waveOverview.mc_detailView.mc_wave);
      this._detailFinalWaveInfo = new __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoDetail.AttackDialogWaveHandlerFinalYardWaveInfoDetail(this.waveOverview.mc_detailView.mc_final);
      this.isInit = true;
    }
    this.cbx_all.selected();
    this.cbx_left.selected();
    this.cbx_middle.selected();
    this.cbx_right.selected();
    this.waveOverview.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.attackCosts.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.attackCosts.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      this.cbx_middle.deselected();
      this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE, this.cbx_middle.isSelected);
      this.cbx_right.deselected();
      this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT, this.cbx_right.isSelected);
    }
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.updateAllWaves));
    this.controller.onLordChanged.add(this.bindFunction(this.updateAllWaves));
    this.controller.onSelectedWaveInfoSlotContainerChanged.add(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.onUpdateSavedAutofill));
    this.controller.onDetailViewSelectionChanged.add(this.bindFunction(this.onDetailViewChanged));
    this.initScrollList();
    this.initDetailScrollList();
    this.updateAllWaves();
    this.updateListVisibility();
    this.updateBonusIcons();
  };
  AttackDialogWaveHandler.prototype.onUpdateSavedAutofill = function () {
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_ALL)) {
      this.cbx_all.selected();
    } else {
      this.cbx_all.deselected();
    }
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT)) {
      this.cbx_left.selected();
    } else {
      this.cbx_left.deselected();
    }
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE)) {
      this.cbx_middle.selected();
    } else {
      this.cbx_middle.deselected();
    }
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT)) {
      this.cbx_right.selected();
    } else {
      this.cbx_right.deselected();
    }
  };
  AttackDialogWaveHandler.prototype.updateAllWaves = function (__s19param0 = null) {
    this.controller.updateAreEffects();
    this.initWaves();
    this.fillWaveInfo();
    this.fillAttackCosts();
  };
  AttackDialogWaveHandler.prototype.initScrollList = function () {
    var __s21local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s21local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s21local0.disableButtons = true;
    __s21local0.scrollStepPixels = 40;
    if (!this.waveInfoList) {
      this.waveInfoList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.waveOverview.mc_list, __s21local0, this.waveOverview.mc_list.mc_items.mask);
      this.waveInfoList.scrollComponent.scrollVO.addSliderLine(this.waveOverview.mc_list.mc_slider.mc_sliderLine);
    }
    this.waveInfoList.scrollToTop();
    this.waveInfoList.onSliderChangeSignal.add(this.bindFunction(this.updateFoldOutButtons));
  };
  AttackDialogWaveHandler.prototype.initDetailScrollList = function () {
    if (!this._detailScrollComponent) {
      var __s24local0 = this.waveOverview.mc_detailView.mc_waveList;
      var __s24local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s24local0).addSliderBackground(__s24local0.bg).addMouseWheelElements([__s24local0]);
      var __s24local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, __s24local0.mc_items.mask.height, true);
      this._detailScrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s24local1, __s24local2);
      this._detailScrollV = __s24local0.mc_items.y;
    }
    this._detailScrollComponent.onScrollSignal.add(this.bindFunction(this.onDetailScroll));
  };
  AttackDialogWaveHandler.prototype.fillWaveInfo = function () {
    if (this.controller.isWaveDetailView) {
      this.clearDetailItems();
      var __s27local0 = this.waveOverview.mc_detailView.mc_waveList.mc_items;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s27local0);
      if (__dep_export_AttackDialogHelper.AttackDialogHelper.canUseSupportTools()) {
        var __s27local1 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AttackDialog_DetailViewItem_SupportWave"))();
        __s27local0.addChild(__s27local1);
        this._detailScrollItems.push(new __dep_export_AttackDialogDetailViewScrollItem.AttackDialogDetailViewScrollItem(__s27local1, __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME));
      }
      for (var __s27local2 = 0; __s27local2 < this.attackInfoVO.army.getWaveCount(); __s27local2++) {
        var __s27local3 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AttackDialog_DetailViewItem_NormalWave"))();
        __s27local0.addChild(__s27local3);
        this._detailScrollItems.push(new __dep_export_AttackDialogDetailViewScrollItem.AttackDialogDetailViewScrollItem(__s27local3, __s27local2));
      }
      var __s27local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AttackDialog_DetailViewItem_FinalWave"))();
      __s27local0.addChild(__s27local4);
      this._detailScrollItems.push(new __dep_export_AttackDialogDetailViewScrollItem.AttackDialogDetailViewScrollItem(__s27local4, __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME));
      new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical().apply(this._detailScrollItems, new __s0local1());
      var __s27local5 = this._detailScrollComponent.currentValue || 0;
      var __s27local6 = Math.max(0, __s27local0.height - __s27local0.mask.height);
      this._detailScrollComponent.init(0, __s27local6, 38, 38);
      this._detailScrollComponent.show();
      this._detailScrollComponent.scrollToValue(__s27local5);
      this.updateDetailViewSelectedState();
      this.onDetailViewChanged();
    } else {
      var __s27local7 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0), true, 0, 0, false);
      this.recycleWaveList();
      if (__dep_export_AttackDialogHelper.AttackDialogHelper.canUseSupportTools()) {
        this.waveInfoList.addItem(this.getSupportWaveItem(this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME), __s27local7));
      }
      for (__s27local2 = 0; __s27local2 < this.attackInfoVO.army.getWaveCount(); __s27local2++) {
        this.waveInfoList.addItem(this.getWaveInfoItem(this.attackInfoVO.army.waves[__s27local2], __s27local2, this.controller.getIsWaveSelectedForAutoFill(__s27local2), __s27local7));
      }
      this.waveInfoList.addItem(this.getFinalWaveItem(this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME), __s27local7));
      this.waveInfoList.show();
      this.waveInfoList.scrollComponent.scrollToValue(Math.min(this.waveInfoList.scrollComponent.maxValue, this.waveInfoList.scrollComponent.currentValue));
    }
  };
  AttackDialogWaveHandler.prototype.recycleWaveList = function () {
    var __s37local0 = this;
    this.supportWaveItem = this.waveInfoList.items.find(function (__s39param0) {
      return __s39param0 instanceof __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut;
    });
    this.finalWaveItem = this.waveInfoList.items.find(function (__s41param0) {
      return __s41param0 instanceof __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut;
    });
    var __s37local1 = this.waveItemPool;
    this.waveItemPool = [];
    this.waveInfoList.items.filter(function (__s43param0) {
      return __s43param0 instanceof __dep_export_AttackDialogWaveHandlerWaveInfoItemFoldOut.AttackDialogWaveHandlerWaveInfoItemFoldOut;
    }).forEach(function (__s45param0) {
      return __s37local0.waveItemPool.push(__s45param0);
    });
    this.waveItemPool = this.waveItemPool.concat(__s37local1);
    this.waveInfoList.hide();
  };
  AttackDialogWaveHandler.prototype.getSupportWaveItem = function (__s47param0, __s47param1) {
    var __s47local0;
    if (this.supportWaveItem) {
      (__s47local0 = this.supportWaveItem).init(__s47param0);
    } else {
      __s47local0 = new __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut(__s47param0, __s47param1);
    }
    return __s47local0;
  };
  AttackDialogWaveHandler.prototype.getWaveInfoItem = function (__s51param0, __s51param1, __s51param2, __s51param3) {
    var __s51local0;
    if (this.waveItemPool.length > 0) {
      (__s51local0 = this.waveItemPool.shift()).init(__s51param0, __s51param1, __s51param2);
    } else {
      __s51local0 = new __dep_export_AttackDialogWaveHandlerWaveInfoItemFoldOut.AttackDialogWaveHandlerWaveInfoItemFoldOut(this.attackInfoVO.army.waves[__s51param1], __s51param1, this.controller.getIsWaveSelectedForAutoFill(__s51param1), __s51param3);
    }
    return __s51local0;
  };
  AttackDialogWaveHandler.prototype.getFinalWaveItem = function (__s55param0, __s55param1) {
    var __s55local0;
    if (this.finalWaveItem) {
      (__s55local0 = this.finalWaveItem).init(__s55param0);
    } else {
      __s55local0 = new __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut(__s55param0, __s55param1);
    }
    return __s55local0;
  };
  AttackDialogWaveHandler.prototype.initWaves = function () {
    if (this.defaultWaveCount == 0) {
      this.defaultWaveCount = this.attackInfoVO.army.getWaveCount();
    }
    var __s59local0 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo.playerID, true);
    var __s59local1 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getTotalEffectValue(this.selectedLord.getUniqueBoni(false, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ADDITIONAL_WAVE, this.attackInfoVO.targetArea.areaType, __s59local0, true));
    var __s59local2 = __dep_exact_f855840627e6e145.int(__s59local1 ? __s59local1.strength : 0);
    __s59local2 += this.attackInfoVO.supportItemContainer ? this.attackInfoVO.supportItemContainer.getTotalBonusByToolEffect(__dep_export_ToolEffectType.ToolEffectType.ADDITIONAL_WAVE) : 0;
    if (this.additionalLordWaveCount < __s59local2) {
      while (this.additionalLordWaveCount < __s59local2) {
        this.attackInfoVO.addAdditionalWave();
        this.additionalLordWaveCount++;
        true;
      }
    }
    if (this.additionalLordWaveCount > __s59local2) {
      while (this.additionalLordWaveCount > __s59local2) {
        this.attackInfoVO.deductLastWave();
        this.additionalLordWaveCount--;
        true;
      }
    }
    for (var __s59local3 = 0; __s59local3 < this.attackInfoVO.army.getWaveCount(); __s59local3++) {
      this.updateMaxUnitCount(this.attackInfoVO.army.getWaveByID(__s59local3));
    }
    this.attackInfoVO.yardWaveContainer.maxItems = __dep_exact_26a421b704832cff.CombatConst.getMaxUnitsInReinforcementWave(__dep_export_CastleModel.CastleModel.userData.level, this.attackInfoVO.targetArea.isUnderConquerControl ? this.attackInfoVO.targetArea.minimumOwnerLevel : this.attackInfoVO.targetOwnerLevel, __dep_export_CastleEffectsHelper.CastleEffectsHelper.getUnitsOnTheYardWaveBonusForAreaType(this.selectedLord, this.attackInfoVO.targetArea, __s59local0), __dep_export_CastleEffectsHelper.CastleEffectsHelper.getUnitsOnTheYardWaveBoostForAreaType(this.selectedLord, this.attackInfoVO.targetArea, __s59local0));
    if (this.attackInfoVO.yardWaveContainer.maxItems < this.attackInfoVO.yardWaveContainer.sumOfItems) {
      this.attackInfoVO.yardWaveContainer.items.forEach(function (__s71param0) {
        if (__s71param0.unitVO) {
          __s71param0.outline = 1;
        }
      });
    }
  };
  AttackDialogWaveHandler.prototype.updateMaxUnitCount = function (__s74param0) {
    var __s74local0 = this.controller.selectedLord;
    if (__s74local0) {
      var __s74local1 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo.playerID, true);
      __s74param0.itemsLeftWall_units.maxItems = __dep_exact_26a421b704832cff.CombatConst.getAmountSoldiers(0, this.attackInfoVO.targetOwnerLevel, __dep_export_CastleEffectsHelper.CastleEffectsHelper.getUnitsOnTheFlankBonusForAreaType(__s74local0, this.attackInfoVO.targetArea, __dep_export_AttackDialogHelper.AttackDialogHelper.isLegendaryFight, __s74local1), 0);
      __s74param0.itemsMiddleWall_units.maxItems = __dep_exact_26a421b704832cff.CombatConst.getAmountSoldiers(1, this.attackInfoVO.targetOwnerLevel, 0, __dep_export_CastleEffectsHelper.CastleEffectsHelper.getUnitsOnTheFrontBonusForAreaType(__s74local0, this.attackInfoVO.targetArea, __dep_export_AttackDialogHelper.AttackDialogHelper.isLegendaryFight, __s74local1));
      __s74param0.itemsRightWall_units.maxItems = __dep_exact_26a421b704832cff.CombatConst.getAmountSoldiers(2, this.attackInfoVO.targetOwnerLevel, __dep_export_CastleEffectsHelper.CastleEffectsHelper.getUnitsOnTheFlankBonusForAreaType(__s74local0, this.attackInfoVO.targetArea, __dep_export_AttackDialogHelper.AttackDialogHelper.isLegendaryFight, __s74local1), 0);
    }
    __s74param0.itemsLeftWall_units.items.forEach(function (__s77param0) {
      __s77param0.outline = __s74param0.itemsLeftWall_units.exceedsLimit() && __s77param0.unitVO ? 1 : 0;
    });
    __s74param0.itemsRightWall_units.items.forEach(function (__s79param0) {
      __s79param0.outline = __s74param0.itemsRightWall_units.exceedsLimit() && __s79param0.unitVO ? 1 : 0;
    });
    __s74param0.itemsMiddleWall_units.items.forEach(function (__s81param0) {
      __s81param0.outline = __s74param0.itemsMiddleWall_units.exceedsLimit() && __s81param0.unitVO ? 1 : 0;
    });
  };
  AttackDialogWaveHandler.prototype.onSlotSelectionChanged = function () {
    this.fillAttackCosts();
    var __s83local0 = this.controller.selectedWaveInfoSlotContainer;
    if (!!__s83local0 && __s83local0.items[0].slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_TOOL_SUPPORT_OFFENSE) {
      __s83local0.maxItems = __s83local0.items.length;
    }
  };
  AttackDialogWaveHandler.prototype.fillAttackCosts = function () {
    var __s86local0 = this.attackInfoVO.getTravelCost(this.selectedLord);
    var __s86local1 = __s86local0 <= __dep_export_CastleModel.CastleModel.currencyData.c1Amount ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.attackCosts.mc_c1.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s86local0)).color = __s86local1;
    this.attackCosts.mc_c1.mouseChildren = false;
    var __s86local2 = __dep_export_CastleModel.CastleModel.userData.attackCounter.attackCount >= __dep_export_CastleModel.CastleModel.userData.attackCounter.attackCountThreshold;
    this.attackCosts.mc_c1.toolTipText = __s86local2 ? {
      t: "info_attack_threshold",
      ox: 0
    } : {
      t: "travelingcosts",
      ox: -55
    };
    this.attackCosts.mc_c1.mc_warning.visible = this.attackCosts.mc_c1.mc_bg.visible = __s86local2;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.attackCosts.txt_loot, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_AttackDialogHelper.AttackDialogHelper.getTotalLoot()));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.attackCosts.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(this.attackInfoVO.getTravelTime(this.attackInfoVO.targetArea, this.selectedLord))));
  };
  AttackDialogWaveHandler.prototype.updateBonusIcons = function () {
    if (this.attackInfoVO.spyInfo && this.attackInfoVO.spyInfo.defenderSkills && this.attackInfoVO.spyInfo.defenderSkills.length > 0) {
      this.waveOverview.mc_bonus_right.visible = true;
      this.waveOverview.mc_bonus_right.mouseChildren = false;
      this.waveOverview.mc_bonus_right.toolTipText = __dep_export_CastleLegendEffectTextComposer.CastleLegendEffectTextComposer.getLegendBonusText(this.attackInfoVO.spyInfo.defenderSkills).trim();
    } else {
      this.waveOverview.mc_bonus_right.visible = false;
    }
    var __s88local0;
    var __s88local1 = this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL || this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL;
    __dep_exact_f855840627e6e145.int(this.attackInfoVO.targetArea.mapID > 0 ? this.attackInfoVO.targetArea.mapID : this.attackInfoVO.targetArea.kingdomID);
    var __s88local2 = this.attackInfoVO.kingstowerBonus;
    var __s88local3 = __s88local2 > 0 && __s88local1;
    var __s88local4 = this.attackInfoVO.monumentBonus > 0 && __dep_export_CastleFameHelper.CastleFameHelper.canEarnFame(this.attackInfoVO.targetArea, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK);
    var __s88local5 = "";
    if (__s88local3) {
      __s88local5 += __dep_exact_92d05af59ee2ff30.Localize.text("kingstower_fightscreen_value_tooltip", [__s88local2]);
      __s88local5 += "\n";
    }
    if (__s88local4) {
      __s88local0 = __dep_export_CastleModel.CastleModel.userData.isInAlliance ? __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.landmarksList.getMonumentBonus()) : __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.monumentList.getLandmarkBonus());
      __s88local5 += __dep_exact_92d05af59ee2ff30.Localize.text("monument_fightscreen_value_tooltip", [__s88local0]);
      __s88local5 += "\n";
    }
    this.waveOverview.mc_bonus_left.toolTipText = __s88local5.trim();
    this.waveOverview.mc_bonus_left.visible = __s88local5.length > 0;
    this.waveOverview.mc_bonus_left.mouseChildren = false;
  };
  Object.defineProperty(AttackDialogWaveHandler.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandler.prototype, "selectedLord", {
    get: function () {
      return this.controller.selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogWaveHandler.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogWaveHandler.prototype.onClick = function (__s100param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s100param0.target)) {
      switch (__s100param0.target) {
        case this.waveOverview.cbx_all:
          this.cbx_all.toggleSelected();
          this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_ALL, this.cbx_all.isSelected);
          break;
        case this.waveOverview.cbx_left:
          this.cbx_left.toggleSelected();
          this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT, this.cbx_left.isSelected);
          break;
        case this.waveOverview.cbx_middle:
          this.cbx_middle.toggleSelected();
          this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE, this.cbx_middle.isSelected);
          break;
        case this.waveOverview.cbx_right:
          this.cbx_right.toggleSelected();
          this.controller.changeSelectionForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT, this.cbx_right.isSelected);
          break;
        case this.waveOverview.btn_foldOutAll_selected:
          var __s100local0 = this.waveInfoList.properties.scrollDuration;
          this.waveInfoList.properties.scrollDuration = 0;
          this.waveInfoList.items.forEach(function (__s104param0) {
            __s104param0.expand(false, false);
          });
          this.waveInfoList.properties.scrollDuration = __s100local0;
          this.controller.trackExpandWaves(false);
          break;
        case this.waveOverview.btn_foldOutAll:
          var __s100local1 = this.waveInfoList.properties.scrollDuration;
          this.waveInfoList.properties.scrollDuration = 0;
          this.waveInfoList.items.forEach(function (__s106param0) {
            __s106param0.expand(true, false);
          });
          this.waveInfoList.properties.scrollDuration = __s100local1;
          this.controller.trackExpandWaves(true);
          break;
        case this.waveOverview.btn_detailView:
          this.controller.isWaveDetailView = false;
          this.updateListView();
          break;
        case this.waveOverview.btn_listView:
          this.controller.isWaveDetailView = true;
          this.updateListView();
      }
      this.updateSelectAllCBX();
    }
  };
  AttackDialogWaveHandler.prototype.onMouseOver = function (__s108param0) {
    switch (__s108param0.target) {
      case this.attackCosts.mc_c1:
        if (__dep_export_CastleModel.CastleModel.userData.attackCounter.attackCount >= __dep_export_CastleModel.CastleModel.userData.attackCounter.attackCountThreshold) {
          this.attackCosts.mc_c1.gotoAndStop(2);
        }
    }
  };
  AttackDialogWaveHandler.prototype.onMouseOut = function (__s112param0) {
    switch (__s112param0.target) {
      case this.attackCosts.mc_c1:
        this.attackCosts.mc_c1.gotoAndStop(1);
    }
  };
  AttackDialogWaveHandler.prototype.updateListView = function () {
    this.updateListVisibility();
    this.updateFoldOutButtons();
    this.fillWaveInfo();
  };
  AttackDialogWaveHandler.prototype.updateListVisibility = function () {
    this.waveOverview.mc_list.visible = !this.controller.isWaveDetailView;
    this.waveOverview.btn_listView.visible = !this.controller.isWaveDetailView;
    this.waveOverview.mc_detailView.visible = this.controller.isWaveDetailView;
    this.waveOverview.btn_detailView.visible = this.controller.isWaveDetailView;
    this.cbx_all.disp.visible = !this.controller.isWaveDetailView;
    if (this.controller.isWaveDetailView) {
      this.waveInfoList.hide();
    } else {
      this.clearDetailItems();
      this._detailSupportWaveInfo.setVisibility(false);
      this._detailWaveInfo.setVisibility(false, -1);
      this._detailFinalWaveInfo.setVisibility(false);
    }
  };
  AttackDialogWaveHandler.prototype.updateFoldOutButtons = function () {
    var __s121local0 = true;
    this.waveInfoList.items.forEach(function (__s123param0) {
      __s121local0 = __s121local0 && __s123param0.isExpanded;
    });
    this.waveOverview.btn_foldOutAll_selected.visible = __s121local0 && !this.controller.isWaveDetailView;
    this.waveOverview.btn_foldOutAll.visible = !__s121local0 && !this.controller.isWaveDetailView;
  };
  AttackDialogWaveHandler.prototype.updateSelectAllCBX = function () {
    var __s125local0 = 0;
    var __s125local1 = 0;
    for (var __s125local2 = 0; __s125local2 < this.attackInfoVO.army.waves.length; __s125local2++) {
      __s125local0++;
      if (this.controller.getIsWaveSelectedForAutoFill(__s125local2)) {
        __s125local1++;
      }
    }
    if (this.attackInfoVO.yardWaveContainer) {
      __s125local0++;
      if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
        __s125local1++;
      }
    }
    if (this.cbx_all.isSelected) {
      this.cbx_all.disp.gotoAndStop(__s125local0 == __s125local1 ? 2 : 3);
    }
  };
  AttackDialogWaveHandler.prototype.onDetailScroll = function () {
    this.waveOverview.mc_detailView.mc_waveList.mc_items.y = this._detailScrollV - this._detailScrollComponent.currentValue;
  };
  AttackDialogWaveHandler.prototype.clearDetailItems = function () {
    this._detailScrollItems.forEach(function (__s137param0) {
      return __s137param0.destroy();
    });
    this._detailScrollItems = [];
  };
  AttackDialogWaveHandler.prototype.updateDetailViewSelectedState = function () {
    var __s139local0 = this;
    this._detailScrollItems.forEach(function (__s141param0) {
      return __s141param0.disp.mc_selected.visible = __s141param0.waveKey == __s139local0.controller.selectedDetailView;
    });
  };
  AttackDialogWaveHandler.prototype.onDetailViewChanged = function () {
    this.updateDetailViewSelectedState();
    var __s143local0 = this.controller.selectedDetailView == __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME;
    var __s143local1 = this.controller.selectedDetailView == __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME;
    var __s143local2 = typeof this.controller.selectedDetailView == "number";
    var __s143local3 = __s143local2 ? this.controller.selectedDetailView : -1;
    this._detailSupportWaveInfo.setVisibility(__s143local0);
    this._detailWaveInfo.setVisibility(__s143local2, __s143local3);
    this._detailFinalWaveInfo.setVisibility(__s143local1);
  };
  AttackDialogWaveHandler.prototype.destroy = function () {
    if (this.waveInfoList) {
      this.recycleWaveList();
      this.waveInfoList.onSliderChangeSignal.remove(this.bindFunction(this.updateFoldOutButtons));
    }
    if (this._detailScrollComponent) {
      this._detailScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDetailScroll));
      this._detailScrollComponent.hide();
    }
    this.clearDetailItems();
    if (this.waveOverview) {
      this.waveOverview.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
    if (this.attackCosts) {
      this.attackCosts.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.attackCosts.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
    this.defaultWaveCount = 0;
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.updateAllWaves));
    this.controller.onLordChanged.remove(this.bindFunction(this.updateAllWaves));
    this.controller.onSelectedWaveInfoSlotContainerChanged.remove(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.onSlotSelectionChanged));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.onUpdateSavedAutofill));
    this.controller.onDetailViewSelectionChanged.remove(this.bindFunction(this.onDetailViewChanged));
    this.additionalLordWaveCount = 0;
  };
  AttackDialogWaveHandler.__initialize_static_members = function () {};
  return AttackDialogWaveHandler;
}();
exports.AttackDialogWaveHandler = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
