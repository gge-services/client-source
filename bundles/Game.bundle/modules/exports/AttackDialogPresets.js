Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleConfirmCostsDialog = require("gge-module:export_CastleConfirmCostsDialog");
var __dep_export_CastleConfirmCostsDialogProperties = require("gge-module:export_CastleConfirmCostsDialogProperties");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_RenameFightPresetDialog = require("gge-module:export_RenameFightPresetDialog");
var __dep_export_RenameFightPresetDialogProperties = require("gge-module:export_RenameFightPresetDialogProperties");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogWaveInfoHelper = require("gge-module:export_AttackDialogWaveInfoHelper");
var __dep_export_AttackDialogPresetPicker = require("gge-module:export_AttackDialogPresetPicker");
var __dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut");
var __dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut = require("gge-module:export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogPresets() {}
  AttackDialogPresets.prototype.init = function (__s5param0) {
    this.mc = __s5param0;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.mc.btn_multi_wave.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_troopPreset_applyPreset_button")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.mc.btn_save, this.mc.btn_first_wave, this.mc.btn_single_wave, this.mc.btn_multi_wave, this.mc.btn_edit], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_save, false);
    this.initPresetPicker();
    this.mc.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.controller.onAutoFillALLSelectionChanged.add(this.bindFunction(this.onConditionChange));
    this._presetPicker.onSelectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this.controller.onLordChanged.add(this.bindFunction(this.onConditionChange));
    this.controller.updateAllWaveInfo.add(this.bindFunction(this.onConditionChange));
    this.onSelectionChanged();
    this.onConditionChange();
  };
  AttackDialogPresets.prototype.onSelectionChanged = function () {
    var __s7local0 = this._presetPicker.selectedPreset;
    this.mc.btn_edit.visible = !!__s7local0 && __s7local0.unlocked;
    if (this.controller.isAutoFillSaveSelected && this.controller.controllerReady && this._presetPicker.isInit()) {
      this.controller.saveAttackFilterOptions(false);
    }
    this.onConditionChange();
  };
  AttackDialogPresets.prototype.onConditionChange = function () {
    if (__dep_export_CastleModel.CastleModel.fightPresetData.multiWaveUnlocked) {
      this.mc.btn_edit.toolTipText = "dialog_troopPreset_changePresetName_tt";
    } else {
      this.mc.btn_edit.toolTipText = "dialog_troopPreset_changePresetName_noSlotPurchased_tt";
    }
    var __s10local0 = this.controller.getNumberOfNormalWavesSelected();
    var __s10local1 = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.AttackDialogWaveHandlerSupportToolWaveInfoItemFoldOut.CONST_WAVE_NAME);
    var __s10local2 = this.controller.getIsWaveSelectedForAutoFill(__dep_export_AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.AttackDialogWaveHandlerFinalYardWaveInfoItemFoldOut.CONST_WAVE_NAME);
    this.mc.btn_first_wave.toolTipText = "dialog_troopPreset_applyPresetToFirstWave_tt";
    this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_applyPresetToNextWave_tt";
    this.mc.btn_multi_wave.toolTipText = __s10local0 > 1 ? "dialog_troopPreset_applyPresetToSelectedWaves_tt" : "dialog_troopPreset_applyPresetToSelectedWave_tt";
    this.mc.btn_save.toolTipText = "dialog_troopPreset_savePreset_button";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_first_wave, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_single_wave, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_multi_wave, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_save, true);
    if (__s10local0 == 0) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_single_wave, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_multi_wave, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_save, false);
      if (__s10local1) {
        this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
        this.mc.btn_multi_wave.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
      } else if (__s10local2) {
        this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
        this.mc.btn_multi_wave.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
      } else {
        this.mc.btn_single_wave.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
        this.mc.btn_multi_wave.toolTipText = "dialog_attack_rework2022_selectWaveRequired_tt";
        this.mc.btn_save.toolTipText = "dialog_troopPreset_updatePreset_noWaveSelected_tt";
      }
    } else if (__s10local0 > 1) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_single_wave, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_save, false);
      this.mc.btn_single_wave.toolTipText = "dialog_troopPreset_applyPresetToNextWave_selectSingleWave_tt";
      this.mc.btn_save.toolTipText = "dialog_troopPreset_savePreset_selectSingleWave_tt";
    } else if (__s10local0 == 1 && (__s10local1 || __s10local2)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_save, false);
      if (__s10local1) {
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_supportTools_tt";
      } else if (__s10local2) {
        this.mc.btn_save.toolTipText = "dialog_troopPreset_cannotApply_finalWave_tt";
      }
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.mc.btn_save)) {
      for (var __s10local3 = 0; __s10local3 < this.controller.attackVO.army.waves.length; __s10local3++) {
        if (this.controller.getIsWaveSelectedForAutoFill(__s10local3)) {
          if (this.controller.attackVO.army.waves[__s10local3].getSumOfItems() == 0) {
            __dep_export_ButtonHelper.ButtonHelper.enableButton(this.mc.btn_save, false);
            this.mc.btn_save.toolTipText = "dialog_troopPreset_emptyWaveUnitsTools_tt";
          }
          break;
        }
      }
    }
  };
  AttackDialogPresets.prototype.onClick = function (__s27param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target)) {
      switch (__s27param0.target) {
        case this.mc.btn_edit:
          this.onEdit();
      }
    }
  };
  AttackDialogPresets.prototype.onEdit = function () {
    var __s31local0 = this._presetPicker.selectedPreset;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RenameFightPresetDialog.RenameFightPresetDialog, new __dep_export_RenameFightPresetDialogProperties.RenameFightPresetDialogProperties(__s31local0));
  };
  AttackDialogPresets.prototype.initPresetPicker = function () {
    if (!this._presetPicker) {
      this._presetPicker = new __dep_export_AttackDialogPresetPicker.AttackDialogPresetPicker(this.mc);
      this._presetPicker.onPresetActivated.add(this.bindFunction(this.fillWaveFromPreset));
      this._presetPicker.onPresetSaved.add(this.bindFunction(this.handleSavePresetRequested));
      this._presetPicker.onPresetUnlockRequested.add(this.bindFunction(this.handleUnlockPresetRequested));
      this._presetPicker.onPresetOptions.add(this.bindFunction(this.handlePresetOptions));
      this.controller.setPresetPicker(this._presetPicker);
    }
    this._presetPicker.selectIndex(0);
  };
  AttackDialogPresets.prototype.handlePresetOptions = function (__s36param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RenameFightPresetDialog.RenameFightPresetDialog, new __dep_export_RenameFightPresetDialogProperties.RenameFightPresetDialogProperties(__s36param0));
  };
  AttackDialogPresets.prototype.handleSavePresetRequested = function (__s38param0) {
    if (__s38param0.unlocked) {
      this.fillPresetFromWave(__s38param0);
      __dep_export_CastleModel.CastleModel.fightPresetData.savePresetArmy(__s38param0);
    }
  };
  AttackDialogPresets.prototype.handleUnlockPresetRequested = function (__s41param0) {
    var __s41local0 = this;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConfirmCostsDialog.CastleConfirmCostsDialog, new __dep_export_CastleConfirmCostsDialogProperties.CastleConfirmCostsDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_troopPreset_unlock_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_troopPreset_unlock_desc"), __s41param0.unlockPrice, null, function () {
      __s41local0.unlockPreset(__s41param0);
    }, function () {
      __s41local0._presetPicker.selectPreviousUnlockedItem();
    }, function () {
      __s41local0._presetPicker.selectPreviousUnlockedItem();
    }));
  };
  AttackDialogPresets.prototype.unlockPreset = function (__s49param0) {
    __dep_export_CastleModel.CastleModel.fightPresetData.unlockPreset(__s49param0);
  };
  AttackDialogPresets.prototype.fillPresetFromWave = function (__s51param0) {
    __s51param0.setContentFromWave(this.controller.attackVO.army.waves[this.getFirstSelectedWaveIndex()], this.attackInfoVO.toolsSupportWodIds);
  };
  AttackDialogPresets.prototype.fillWaveFromPreset = function (__s53param0, __s53param1) {
    var __s53local0 = "";
    var __s53local1 = "";
    if (__s53param1 == __dep_export_AttackDialogPresetPicker.AttackDialogPresetPicker.PRESET_FILL_SELECTED_WAVES) {
      for (var __s53local2 = 0; __s53local2 < this.attackInfoVO.army.waves.length; __s53local2++) {
        if (this.controller.getIsWaveSelectedForAutoFill(__s53local2)) {
          __s53local1 = this.applyPresetToWave(this.attackInfoVO.army.waves[__s53local2], __s53param0);
          __s53local0 = __s53local0 != "" ? __s53local0 : __s53local1;
        }
      }
    } else if (__s53param1 == __dep_export_AttackDialogPresetPicker.AttackDialogPresetPicker.PRESET_FILL_NEXT_WAVE) {
      for (__s53local2 = 0; __s53local2 < this.attackInfoVO.army.waves.length; __s53local2++) {
        if (this.controller.getIsWaveSelectedForAutoFill(__s53local2)) {
          this.controller.changeSelectionForAutoFill(__s53local2, false);
          var __s53local3 = __s53local2 + 1 < this.attackInfoVO.army.waves.length ? __s53local2 + 1 : 0;
          this.controller.changeSelectionForAutoFill(__s53local3, true);
          __s53local1 = this.applyPresetToWave(this.attackInfoVO.army.waves[__s53local3], __s53param0);
          __s53local0 = __s53local0 != "" ? __s53local0 : __s53local1;
          break;
        }
      }
    } else {
      __s53local1 = this.applyPresetToWave(this.attackInfoVO.army.waves[0], __s53param0);
      __s53local0 = __s53local0 != "" ? __s53local0 : __s53local1;
    }
    if (__s53local0 != "") {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("attention", __s53local0));
    }
    var __s53local4 = [];
    for (var __s53local5 = 0; __s53local5 < __s53param0.getSupportTools().length; __s53local5++) {
      var __s53local6 = __s53param0.getSupportTools()[__s53local5];
      if (__s53local6 == -1 || this.attackInfoVO.unitInventory.getUnit(__s53local6)) {
        __s53local4.push(__s53local6);
        if (__s53local6 != -1 && this.attackInfoVO.toolsSupportWodIds.indexOf(__s53local6) < 0) {
          this.attackInfoVO.unitInventory.getUnit(__s53local6).inventoryAmount -= 1;
        }
      } else {
        __s53local4.push(-1);
      }
    }
    this.updateWaves();
  };
  AttackDialogPresets.prototype.applyPresetToWave = function (__s70param0, __s70param1) {
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s70param0.itemsLeftWall_tools);
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s70param0.itemsLeftWall_units);
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s70param0.itemsMiddleWall_tools);
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s70param0.itemsMiddleWall_units);
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s70param0.itemsRightWall_tools);
    __dep_export_AttackDialogWaveInfoHelper.AttackDialogWaveInfoHelper.clearContainer(__s70param0.itemsRightWall_units);
    var __s70local0 = 0;
    var __s70local1 = false;
    var __s70local2 = this.attackInfoVO.unitInventory;
    var __s70local3 = "";
    for (var __s70local4 = 0; __s70local4 < __s70param0.flanks.length; __s70local4++) {
      for (var __s70local5 = __s70param0.flanks[__s70local4], __s70local6 = 0, __s70local7 = 0; __s70local7 < __s70local5.items.length; __s70local7++) {
        var __s70local8 = __s70local5.items[__s70local7 - __s70local6];
        if (__s70local8.isUnlocked()) {
          if (__s70local8.unitVO) {
            __s70local2.addUnit(__s70local8.unitVO.wodId, __s70local8.unitVO.inventoryAmount);
            __s70local8.unitVO = null;
          }
          var __s70local9 = __s70param1.getUnitWodId(__s70local4, __s70local7);
          if (__s70local9 != -1) {
            var __s70local10 = __s70param1.getUnitCount(__s70local4, __s70local7);
            var __s70local11 = __dep_exact_f855840627e6e145.int(Math.min(__s70local5.freeItems, __s70local10));
            var __s70local12 = __dep_exact_f855840627e6e145.int(__dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO, "CastleTreasureHuntFightscreenVO") ? this.attackInfoVO.treasureMapVO.mapID : this.attackInfoVO.targetArea.kingdomID);
            var __s70local13 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s70local9);
            if (__s70local1 = !__dep_exact_81dacdf05bd32292.instanceOfClass(__s70local13, "ToolUnitVO") || __dep_export_AttackHelper.AttackHelper.canUseToolForAttackOnTarget(this.attackInfoVO.targetArea, __s70local13, __s70local12)) {
              __s70local8.unitVO = __s70local2.deductUnit(__s70local9, __s70local11);
              __s70local0 = __s70local8.getAmount();
              __s70local8.outline = __s70local0 == __s70local10 ? __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE) : __s70local0 == 0 ? __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_RED) : __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_ORANGE);
            } else {
              __s70local8.outline = __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_RED);
              __s70local0 = 0;
            }
          }
          if (__s70local0 == 0) {
            __s70local6++;
            __s70local3 = this.getInvalidPresetWarningText(__s70local13, __s70local12, __s70local1);
          }
        }
      }
    }
    return __s70local3;
  };
  AttackDialogPresets.prototype.getInvalidPresetWarningText = function (__s82param0, __s82param1, __s82param2) {
    var __s82local0 = "";
    if (__s82param0) {
      if (!__s82param2) {
        __s82local0 = "dialog_attackPresets_feedback_normalAttack_specialUnits";
      }
    }
    return __s82local0;
  };
  AttackDialogPresets.prototype.destroy = function () {
    if (this.mc) {
      this.mc.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    }
    this.controller.onAutoFillALLSelectionChanged.remove(this.bindFunction(this.onConditionChange));
    if (this._presetPicker) {
      this._presetPicker.onSelectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    }
    this.controller.onLordChanged.remove(this.bindFunction(this.onConditionChange));
    this.controller.updateAllWaveInfo.remove(this.bindFunction(this.onConditionChange));
  };
  AttackDialogPresets.prototype.updateWaves = function () {
    this.controller.updateAllWaveInfo.dispatch();
  };
  Object.defineProperty(AttackDialogPresets.prototype, "attackInfoVO", {
    get: function () {
      return this.controller.attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPresets.prototype, "selectedLord", {
    get: function () {
      return this.controller.selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPresets.prototype, "controller", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogPresets.prototype.getFirstSelectedWaveIndex = function () {
    for (var __s98local0 = 0; __s98local0 < this.controller.attackVO.army.waves.length; __s98local0++) {
      if (this.controller.getIsWaveSelectedForAutoFill(__s98local0)) {
        return __s98local0;
      }
    }
    return -1;
  };
  AttackDialogPresets.__initialize_static_members = function () {};
  return AttackDialogPresets;
}();
exports.AttackDialogPresets = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
