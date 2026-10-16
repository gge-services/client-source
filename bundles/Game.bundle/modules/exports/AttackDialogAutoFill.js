Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_StrongestDefenceCounterWaveStrategy = require("gge-module:export_StrongestDefenceCounterWaveStrategy");
var __dep_export_FightScreenHelper = require("gge-module:export_FightScreenHelper");
var __dep_export_AutoFillOptions = require("gge-module:export_AutoFillOptions");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ToggleSwitchButton = require("gge-module:export_ToggleSwitchButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_AttackDialogAdvisor = require("gge-module:export_AttackDialogAdvisor");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogDragInventory = require("gge-module:export_AttackDialogDragInventory");
var __dep_export_AttackDialogHelper = require("gge-module:export_AttackDialogHelper");
var __dep_export_AttackDialogPresets = require("gge-module:export_AttackDialogPresets");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItem");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogAutoFill() {
    this.presets = new __dep_export_AttackDialogPresets.AttackDialogPresets();
    this.isInit = false;
    this._dragInventory = new __dep_export_AttackDialogDragInventory.AttackDialogDragInventory();
  }
  AttackDialogAutoFill.prototype.init = function (__s5param0, __s5param1) {
    this.mcOpen = __s5param0;
    this.mcClosed = __s5param1;
    this.mcClosed.visible = false;
    this.presets.init(this.mcOpen.mc_autoFillAndPreset);
    this._dragInventory.init(this.mcOpen.mc_inventory);
    this._advisorComponent ||= new __dep_export_AttackDialogAdvisor.AttackDialogAdvisor(this.mcOpen.mc_advisor);
    this.showTab(AttackDialogAutoFill.TAB_AUTOFILL_PRESETS);
    this.controller.onShowAutoFillOptions.add(this.bindFunction(this.show));
    this.controller.onHideAutoFillOptions.add(this.bindFunction(this.hide));
    this.controller.onAutoFillAllWaves.add(this.bindFunction(this.autoFillAllWaves));
    this.controller.updateAutoFillSelections.add(this.bindFunction(this.updateSavedSelected));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.updateButtonStates));
    if (!this.isInit) {
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.txt_saveFilter, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_presetsAndAutofill_saveForNextAttack_desc"));
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_autofill_fillWaves_button")));
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_attack_autofill_clearWaves_button")));
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.txt_filter_units, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_filterUnits_header"));
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.mcOpen.mc_autoFillAndPreset.txt_filter_tools, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_filterTools_header"));
      this.mcClosed.btn_open.toolTipText = "dialog_attack_rework2022_button_presetsAndAutofill_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, this.mcOpen.btn_close, this.mcClosed.btn_open, this.mcOpen.btn_autofill_presets, this.mcOpen.btn_inventory, this.mcOpen.btn_advisor], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
      this.mcOpen.mc_autoFillAndPreset.visible = true;
      this.mcOpen.mc_inventory.visible = false;
      this._saveToggle = new __dep_export_ToggleSwitchButton.ToggleSwitchButton(this.mcOpen.mc_autoFillAndPreset.btn_save_nextTime);
      this.cbx_tool_basic = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_basic, true);
      this.cbx_tool_premium = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_premium, true);
      this.cbx_tool_elite = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_elite, true);
      this.cbx_tool_event = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_event, true);
      this.cbx_tool_combo = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tool_combo, true);
      this.cbx_unit_melee = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_melee, true);
      this.cbx_unit_range = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_range, true);
      this.cbx_unit_c1 = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_c1, true);
      this.cbx_unit_c2 = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_c2, true);
      this.cbx_unit_mead = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_mead, true);
      this.cbx_unit_beef = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_beef, true);
      this.cbx_units_all = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_units_all, true);
      this.cbx_tools_all = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.mcOpen.mc_autoFillAndPreset.cbx_tools_all, true);
      this.mcOpen.mc_autoFillAndPreset.mc_basic.toolTipText = "toolType_basic";
      this.mcOpen.mc_autoFillAndPreset.mc_premium.toolTipText = "toolType_premium";
      this.mcOpen.mc_autoFillAndPreset.mc_elite.toolTipText = "toolType_elite";
      this.mcOpen.mc_autoFillAndPreset.mc_event.toolTipText = "toolType_event";
      this.mcOpen.mc_autoFillAndPreset.mc_combo.toolTipText = "toolType_combo";
      this.mcOpen.mc_autoFillAndPreset.mc_melee.toolTipText = "unitType_melee";
      this.mcOpen.mc_autoFillAndPreset.mc_range.toolTipText = "unitType_ranged";
      this.mcOpen.mc_autoFillAndPreset.mc_c1.toolTipText = "unitType_cash";
      this.mcOpen.mc_autoFillAndPreset.mc_c2.toolTipText = "unitType_gold";
      this.mcOpen.mc_autoFillAndPreset.mc_mead.toolTipText = "unitType_mead";
      this.mcOpen.mc_autoFillAndPreset.mc_beef.toolTipText = "unitType_beef";
      this.mcOpen.btn_autofill_presets.toolTipText = "dialog_attack_rework2022_presetsAndAutofill_header";
      this.mcOpen.btn_inventory.toolTipText = "dialog_attack_unitsToolList_tooltip";
      this.isInit = true;
    }
    this.options = new __dep_export_AutoFillOptions.AutoFillOptions();
    this.controller.setAutoFillOptions(this.options);
    this.cbx_tool_basic.selected();
    this.cbx_tool_premium.selected();
    this.cbx_tool_elite.selected();
    this.cbx_tool_event.selected();
    this.cbx_tool_combo.selected();
    this.cbx_unit_melee.selected();
    this.cbx_unit_range.selected();
    this.cbx_unit_c1.selected();
    this.cbx_unit_c2.selected();
    this.cbx_unit_mead.selected();
    this.cbx_unit_beef.selected();
    this.updateButtonStates();
    this.updateAdvisorTab();
    this.mcOpen.parent.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.controller.onLordChanged.add(this.bindFunction(this.onLordChanged));
  };
  AttackDialogAutoFill.prototype.show = function () {
    this.mcOpen.visible = true;
    this.mcClosed.visible = false;
    this.presets.onConditionChange();
  };
  AttackDialogAutoFill.prototype.onClick = function (__s10param0) {
    var __s10local0 = this;
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s10param0.target)) {
      switch (__s10param0.target) {
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_basic:
          this.cbx_tool_basic.toggleSelected();
          this.options.setToolFilter(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_BASIC, this.cbx_tool_basic.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_premium:
          this.cbx_tool_premium.toggleSelected();
          this.options.setToolFilter(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_PREMIUM, this.cbx_tool_premium.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_elite:
          this.cbx_tool_elite.toggleSelected();
          this.options.setToolFilter(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_ELITE, this.cbx_tool_elite.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_event:
          this.cbx_tool_event.toggleSelected();
          this.options.setToolFilter(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_EVENT, this.cbx_tool_event.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tool_combo:
          this.cbx_tool_combo.toggleSelected();
          this.options.setToolFilter(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_COMBO, this.cbx_tool_combo.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_melee:
          this.cbx_unit_melee.toggleSelected();
          this.options.setUnitFilter(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_MELEE, this.cbx_unit_melee.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_range:
          this.cbx_unit_range.toggleSelected();
          this.options.setUnitFilter(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_RANGE, this.cbx_unit_range.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_c1:
          this.cbx_unit_c1.toggleSelected();
          this.options.setUnitFilter(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_C1, this.cbx_unit_c1.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_c2:
          this.cbx_unit_c2.toggleSelected();
          this.options.setUnitFilter(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_C2, this.cbx_unit_c2.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_mead:
          this.cbx_unit_mead.toggleSelected();
          this.options.setUnitFilter(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_MEAD, this.cbx_unit_mead.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_beef:
          this.cbx_unit_beef.toggleSelected();
          this.options.setUnitFilter(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_BEEF, this.cbx_unit_beef.isSelected);
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_units_all:
          var __s10local1 = this.options.getActiveUnitFilter().length < __dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_TYPES.length;
          this.options.unitFilter.forEach(function (__s14param0, __s14param1) {
            return __s10local0.options.unitFilter.set(__s14param1, __s10local1);
          });
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.cbx_tools_all:
          var __s10local2 = this.options.getActiveToolFilter().length < __dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_TYPES.length;
          this.options.toolFilter.forEach(function (__s16param0, __s16param1) {
            return __s10local0.options.toolFilter.set(__s16param1, __s10local2);
          });
          this.updateSavedSelected();
          this.updateShowAutoFillOptionsExclamationMark();
          break;
        case this.mcOpen.mc_autoFillAndPreset.btn_fill_waves:
          this.autoFillSelectedWaves();
          __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_AUTOFILL_ALL);
          break;
        case this.mcOpen.mc_autoFillAndPreset.btn_clear_waves:
          this.onAutoFillClearClicked();
          break;
        case this.mcOpen.btn_close:
          this.controller.onHideAutoFillOptions.dispatch();
          break;
        case this.mcClosed.btn_open:
          this.controller.onShowAutoFillOptions.dispatch();
          break;
        case this.mcOpen.mc_autoFillAndPreset.btn_save_nextTime:
          this.updateSavedItems();
          break;
        case this.mcOpen.btn_autofill_presets:
          this.showTab(AttackDialogAutoFill.TAB_AUTOFILL_PRESETS);
          break;
        case this.mcOpen.btn_inventory:
          this.showTab(AttackDialogAutoFill.TAB_INVENTORY);
          break;
        case this.mcOpen.btn_advisor:
          this.showTab(AttackDialogAutoFill.TAB_ADVISOR_ATTACK);
      }
    }
  };
  AttackDialogAutoFill.prototype.showTab = function (__s18param0) {
    this.mcOpen.mc_autoFillAndPreset.visible = __s18param0 == AttackDialogAutoFill.TAB_AUTOFILL_PRESETS;
    this.mcOpen.btn_autofill_presets.mc_selected.visible = __s18param0 == AttackDialogAutoFill.TAB_AUTOFILL_PRESETS;
    this.mcOpen.mc_inventory.visible = __s18param0 == AttackDialogAutoFill.TAB_INVENTORY;
    this.mcOpen.btn_inventory.mc_selected.visible = __s18param0 == AttackDialogAutoFill.TAB_INVENTORY;
    this.mcOpen.mc_advisor.visible = __s18param0 == AttackDialogAutoFill.TAB_ADVISOR_ATTACK;
    this.mcOpen.btn_advisor.mc_selected.visible = __s18param0 == AttackDialogAutoFill.TAB_ADVISOR_ATTACK;
    if (__s18param0 == AttackDialogAutoFill.TAB_INVENTORY) {
      this._dragInventory.updateInventory();
    }
    if (__s18param0 == AttackDialogAutoFill.TAB_ADVISOR_ATTACK) {
      this._advisorComponent.onShow();
    } else {
      this._advisorComponent.onHide();
    }
  };
  AttackDialogAutoFill.prototype.updateSavedItems = function () {
    this.controller.saveAttackFilterOptions(!this._saveToggle.value);
  };
  AttackDialogAutoFill.prototype.updateShowAutoFillOptionsExclamationMark = function () {
    this.mcClosed.mc_warn.visible = this.showAutoFillOptionsExclamationMark();
    this.updateSavedItems();
  };
  AttackDialogAutoFill.prototype.updateSavedSelected = function () {
    this._saveToggle.setValue(this.controller.isAutoFillSaveSelected, false);
    if (this.options.isToolFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_BASIC)) {
      this.cbx_tool_basic.selected();
    } else {
      this.cbx_tool_basic.deselected();
    }
    if (this.options.isToolFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_PREMIUM)) {
      this.cbx_tool_premium.selected();
    } else {
      this.cbx_tool_premium.deselected();
    }
    if (this.options.isToolFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_ELITE)) {
      this.cbx_tool_elite.selected();
    } else {
      this.cbx_tool_elite.deselected();
    }
    if (this.options.isToolFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_EVENT)) {
      this.cbx_tool_event.selected();
    } else {
      this.cbx_tool_event.deselected();
    }
    if (this.options.isToolFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.TOOL_FILTER_COMBO)) {
      this.cbx_tool_combo.selected();
    } else {
      this.cbx_tool_combo.deselected();
    }
    if (this.options.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_MELEE)) {
      this.cbx_unit_melee.selected();
    } else {
      this.cbx_unit_melee.deselected();
    }
    if (this.options.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_RANGE)) {
      this.cbx_unit_range.selected();
    } else {
      this.cbx_unit_range.deselected();
    }
    if (this.options.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_C1)) {
      this.cbx_unit_c1.selected();
    } else {
      this.cbx_unit_c1.deselected();
    }
    if (this.options.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_C2)) {
      this.cbx_unit_c2.selected();
    } else {
      this.cbx_unit_c2.deselected();
    }
    if (this.options.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_MEAD)) {
      this.cbx_unit_mead.selected();
    } else {
      this.cbx_unit_mead.deselected();
    }
    if (this.options.isUnitFilterActive(__dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_BEEF)) {
      this.cbx_unit_beef.selected();
    } else {
      this.cbx_unit_beef.deselected();
    }
    var __s27local0 = this.options.getActiveUnitFilter().length;
    var __s27local1 = __dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_TYPES.length;
    if (__s27local0 == 0) {
      this.cbx_units_all.disp.gotoAndStop(1);
    } else if (__s27local0 == __s27local1) {
      this.cbx_units_all.disp.gotoAndStop(2);
    } else {
      this.cbx_units_all.disp.gotoAndStop(3);
    }
    var __s27local2 = this.options.getActiveToolFilter().length;
    var __s27local3 = __dep_export_AutoFillOptions.AutoFillOptions.UNIT_FILTER_TYPES.length;
    if (__s27local2 == 0) {
      this.cbx_tools_all.disp.gotoAndStop(1);
    } else if (__s27local2 == __s27local3) {
      this.cbx_tools_all.disp.gotoAndStop(2);
    } else {
      this.cbx_tools_all.disp.gotoAndStop(3);
    }
  };
  AttackDialogAutoFill.prototype.showAutoFillOptionsExclamationMark = function () {
    return !this.cbx_unit_melee.isSelected || !this.cbx_unit_range.isSelected || !this.cbx_unit_c1.isSelected || !this.cbx_unit_c2.isSelected || !this.cbx_unit_mead.isSelected || !this.cbx_unit_beef.isSelected || !this.cbx_tool_basic.isSelected || !this.cbx_tool_premium.isSelected || !this.cbx_tool_elite.isSelected || !this.cbx_tool_event.isSelected || !this.cbx_tool_combo.isSelected;
  };
  AttackDialogAutoFill.prototype.hide = function () {
    this.mcOpen.visible = false;
    this.mcClosed.visible = true;
  };
  AttackDialogAutoFill.prototype.destroy = function () {
    this.controller.onShowAutoFillOptions.remove(this.bindFunction(this.show));
    this.controller.onHideAutoFillOptions.remove(this.bindFunction(this.hide));
    this.controller.onAutoFillAllWaves.remove(this.bindFunction(this.autoFillAllWaves));
    this.controller.updateAutoFillSelections.remove(this.bindFunction(this.updateSavedSelected));
    if (this.mcOpen && this.mcOpen.parent) {
      this.mcOpen.parent.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.updateButtonStates));
    if (this.presets) {
      this.presets.destroy();
    }
    if (this._dragInventory) {
      this._dragInventory.destroy();
    }
    if (this._advisorComponent) {
      this._advisorComponent.destroy();
    }
    this.controller.onLordChanged.remove(this.bindFunction(this.onLordChanged));
  };
  AttackDialogAutoFill.prototype.autoFillSelectedWaves = function () {
    this.updateOptions();
    for (var __s67local0 = 0; __s67local0 < this.attackInfoVO.army.waves.length; __s67local0++) {
      if (this.controller.getIsWaveSelectedForAutoFill(__s67local0)) {
        this.autoFillWave(this.attackInfoVO.army.waves[__s67local0]);
      }
    }
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      this.autoFillYardWave();
    }
    this.updateWaves();
  };
  AttackDialogAutoFill.prototype.autoFillAllWaves = function () {
    this.autoFillSelectedWaves();
  };
  AttackDialogAutoFill.prototype.autoFillYardWave = function () {
    if (this.attackInfoVO.yardWaveContainer) {
      new __dep_export_StrongestDefenceCounterWaveStrategy.StrongestDefenceCounterWaveStrategy().fillYardContainer(this.attackInfoVO, this.options, this.attackInfoVO.yardWaveContainer, __dep_export_FightScreenHelper.FightScreenHelper.getDefenderEffectVO(this.attackInfoVO));
    }
  };
  AttackDialogAutoFill.prototype.autoFillWave = function (__s78param0) {
    new __dep_export_StrongestDefenceCounterWaveStrategy.StrongestDefenceCounterWaveStrategy().fillWave(this.attackInfoVO, this.options, __s78param0, __dep_export_FightScreenHelper.FightScreenHelper.getAttackerEffectVO(__s78param0, this.selectedLord, __dep_export_AttackDialogHelper.AttackDialogHelper.isLegendaryFight, this.attackInfoVO), __dep_export_FightScreenHelper.FightScreenHelper.getDefenderEffectVO(this.attackInfoVO));
  };
  AttackDialogAutoFill.prototype.onAutoFillClearClicked = function () {
    this.updateOptions();
    for (var __s80local0 = 0; __s80local0 < this.attackInfoVO.army.waves.length; __s80local0++) {
      if (this.controller.getIsWaveSelectedForAutoFill(__s80local0)) {
        if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT)) {
          this.clearContainer(this.attackInfoVO.army.waves[__s80local0].itemsLeftWall_tools);
          this.clearContainer(this.attackInfoVO.army.waves[__s80local0].itemsLeftWall_units);
        }
        if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT)) {
          this.clearContainer(this.attackInfoVO.army.waves[__s80local0].itemsRightWall_units);
          this.clearContainer(this.attackInfoVO.army.waves[__s80local0].itemsRightWall_tools);
        }
        if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE)) {
          this.clearContainer(this.attackInfoVO.army.waves[__s80local0].itemsMiddleWall_tools);
          this.clearContainer(this.attackInfoVO.army.waves[__s80local0].itemsMiddleWall_units);
        }
      }
    }
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItem.AttackDialogWaveHandlerFinalYardWaveInfoItem.CONST_WAVE_NAME)) {
      this.clearContainer(this.attackInfoVO.yardWaveContainer);
    }
    if (this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME)) {
      this.clearContainer(this.attackInfoVO.supportItemContainer);
    }
    this.updateWaves();
  };
  AttackDialogAutoFill.prototype.clearContainer = function (__s90param0) {
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s90param0);
  };
  AttackDialogAutoFill.prototype.updateOptions = function () {
    this.options.fillLeftFlank = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_LEFT);
    this.options.fillRightFlank = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_RIGHT);
    this.options.fillMiddleFlank = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogController.AttackDialogController.AUTOFILL_SELECTION_POSITION_MIDDLE);
  };
  AttackDialogAutoFill.prototype.updateWaves = function () {
    this.controller.updateAllWaveInfo.dispatch();
  };
  AttackDialogAutoFill.prototype.updateButtonStates = function () {
    var __s96local0 = this.controller.getNumberOfNormalWavesSelected() > 0;
    var __s96local1 = this.controller.isAnyFlankSelected();
    var __s96local2 = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME);
    var __s96local3 = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME);
    if (__s96local0 || __s96local2 || __s96local3) {
      if (__s96local1) {
        if (!__s96local2 || __s96local3 || __s96local0) {
          this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = null;
          this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = null;
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, true);
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, true);
        } else {
          this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = "dialog_attack_autofill__cannotApply_supportTools_tt";
          this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = null;
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, false);
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, true);
        }
      } else {
        this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = __s96local3 ? null : "dialog_attack_rework2022_selectBattleSectionRequired_tt";
        this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = __s96local2 || __s96local3 ? null : "dialog_attack_rework2022_selectBattleSectionRequired_tt";
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, __s96local3);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, __s96local2 || __s96local3);
      }
    } else {
      this.mcOpen.mc_autoFillAndPreset.btn_fill_waves.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
      this.mcOpen.mc_autoFillAndPreset.btn_clear_waves.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_fill_waves, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mcOpen.mc_autoFillAndPreset.btn_clear_waves, false);
    }
  };
  Object.defineProperty(AttackDialogAutoFill.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogAutoFill.prototype, "selectedLord", {
    get: function () {
      return this.controller.selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogAutoFill.prototype, "saveToggle", {
    get: function () {
      return this._saveToggle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogAutoFill.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogAutoFill.__initialize_static_members = function () {};
  AttackDialogAutoFill.prototype.onLordChanged = function () {
    this.updateAdvisorTab();
    if (this._advisorComponent && this._advisorComponent.isShown && !this.controller.isAttackAdvisorAvailable()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("title_advisor_warning_commander", "info_advisor_warning_commander"));
      this.showTab(AttackDialogAutoFill.TAB_AUTOFILL_PRESETS);
    }
  };
  AttackDialogAutoFill.prototype.updateAdvisorTab = function () {
    var __s117local0 = this.controller.isAttackAdvisorAvailable();
    this.mcOpen.btn_advisor.visible = __s117local0;
    this.mcOpen.btn_advisor.mc_icon.gotoAndStop(__s117local0 ? this.controller.attackAdvisorType : 1);
    this.mcOpen.btn_advisor.toolTipText = "title_advisor_" + __dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getTextIDSuffix(this.controller.attackAdvisorType);
  };
  AttackDialogAutoFill.TAB_AUTOFILL_PRESETS = 0;
  AttackDialogAutoFill.TAB_INVENTORY = 1;
  AttackDialogAutoFill.TAB_ADVISOR_ATTACK = 2;
  return AttackDialogAutoFill;
}();
exports.AttackDialogAutoFill = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
