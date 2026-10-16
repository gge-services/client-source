Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePresetComboboxItemRendererEvent = require("gge-module:export_CastlePresetComboboxItemRendererEvent");
var __dep_export_ComboboxItemRendererPreset = require("gge-module:export_ComboboxItemRendererPreset");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = function (__s1param0) {
  function FightPresetPicker(__s3param0) {
    var __s3local0 = this;
    __s3local0.onPresetActivated = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.onPresetSaved = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.onPresetUnlockRequested = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.onPresetOptions = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.onDataChangeHandled = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._previousUnlockedIndex = -1;
    __s3local0.gotData = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._model = __dep_export_CastleModel.CastleModel.fightPresetData;
    __s3local0._model.onChange.add(__s3local0.bindFunction(__s3local0.handleDataChange));
    if (__s3param0.stage) {
      __s3local0.onAddedToStage(null);
    }
    __s3local0._model.loadDataFromServer();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FightPresetPicker, __s1param0);
  FightPresetPicker.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.buttonSave, this.buttonSingleWave, this.buttonMultiWave], this.buttonClass());
    this.buttonSave.mouseChildren = false;
    this.buttonMultiWave.mouseChildren = false;
    this.buttonSave.toolTipText = "dialog_troopPreset_updatePreset_tt";
    this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetToAllWaves_tt";
    if (this.buttonSingleWave) {
      this.buttonSingleWave.mouseChildren = false;
      this.buttonSingleWave.toolTipText = "dialog_troopPreset_applyPresetToWave_tt";
    }
    this.presetCombobox = this.getNewCombobox();
    this.presetCombobox.setTextfieldAutoFit(true);
    this.presetCombobox.disp.tooltipText = "dialog_troopPreset_selectPreset_tt";
    this.presetCombobox.disp.addEventListener(__dep_exact_9e901e8e2483a22f_2.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.handleComboboxChange));
    this.presetCombobox.disp.addEventListener(__dep_export_CastlePresetComboboxItemRendererEvent.CastlePresetComboboxItemRendererEvent.OPTIONS, this.bindFunction(this.handlePresetOptionsButton));
  };
  FightPresetPicker.prototype.selectIndex = function (__s9param0) {
    var __s9local0 = this.presetCombobox.itemData[__s9param0];
    if (__s9local0 && __s9local0.data.unlocked) {
      this.presetCombobox.selectItemIndex(__s9param0);
    }
  };
  FightPresetPicker.prototype.isInit = function () {
    return !!this.presetCombobox.itemData && this.presetCombobox.itemData.length > 0 && this.gotData;
  };
  FightPresetPicker.prototype.getNewCombobox = function () {
    return new __dep_export_ComboboxComponent.ComboboxComponent(this.disp.mc_presetComboBox, "", __dep_export_ComboboxComponent.ComboboxComponent.OPEN_UP, 17, 15, -1, FightPresetPicker.MAX_SHOWABLE_ITEMS, new __dep_export_ComboboxItemRendererPreset.ComboboxItemRendererPreset(), 0, true, false, 0, "", 0);
  };
  FightPresetPicker.prototype.buttonClass = function () {
    return __dep_export_ClickFeedbackButton.ClickFeedbackButton;
  };
  FightPresetPicker.prototype.handlePresetOptionsButton = function (__s18param0) {
    this.onPresetOptions.dispatch(__s18param0.presetVO);
    this.presetCombobox.selectItemIndex(__s18param0.presetVO.index);
  };
  Object.defineProperty(FightPresetPicker.prototype, "buttonSave", {
    get: function () {
      return this.disp.btn_save;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetPicker.prototype, "buttonSingleWave", {
    get: function () {
      return this.disp.btn_single_wave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightPresetPicker.prototype, "buttonMultiWave", {
    get: function () {
      return this.disp.btn_multi_wave;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetPicker.prototype.onClick = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.buttonSingleWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, false);
          }
          break;
        case this.buttonMultiWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, true);
          }
          break;
        case this.buttonSave:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_troopPreset_overwritePreset_copy"), this.bindFunction(this.onSaveButton)));
      }
    }
  };
  FightPresetPicker.prototype.onSaveButton = function (__s32param0 = null) {
    if (this.selectedPreset && this.selectedPreset.unlocked) {
      this.onPresetSaved.dispatch(this.selectedPreset);
    }
  };
  Object.defineProperty(FightPresetPicker.prototype, "selectedPreset", {
    get: function () {
      return this.presetCombobox.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  FightPresetPicker.prototype.handleDataChange = function () {
    var __s37local0;
    var __s37local1;
    var __s37local2 = 0;
    __s37local2 = this.presetCombobox.selectedId == -1 && this._model.presets.length > 0 ? 0 : this.presetCombobox.selectedId;
    this.presetCombobox.clearItems();
    for (var __s37local3 = 0; __s37local3 < this._model.presets.length; __s37local3++) {
      __s37local1 = this._model.presets[__s37local3];
      (__s37local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s37local1.label;
      __s37local0.data = __s37local1;
      this.presetCombobox.addItem(__s37local0);
    }
    if (__s37local2 < 0 || !this.presetCombobox.itemData[__s37local2].data.unlocked) {
      __s37local2 = 0;
    }
    this.presetCombobox.selectItemIndex(__s37local2);
    this.update();
    this.onDataChangeHandled.dispatch();
    this.gotData = true;
  };
  FightPresetPicker.prototype.buttonUpdate = function () {
    this.update();
  };
  FightPresetPicker.prototype.update = function () {
    __s1param0.prototype.update.call(this);
    var __s44local0 = !!this.selectedPreset && this.selectedPreset.unlocked;
    var __s44local1 = __s44local0 && this.selectedPreset.hasContent;
    var __s44local2 = __s44local1 && this._model.multiWaveUnlocked;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.buttonSave, __s44local0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.buttonSingleWave, __s44local1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.buttonMultiWave, __s44local2);
    if (__s44local2) {
      this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetToAllWaves_tt";
    } else if (this.selectedPreset.hasContent) {
      this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetNameChanges_locked_tt";
    } else {
      this.buttonMultiWave.toolTipText = "dialog_troopPreset_applyPresetToAllWaves_noPreset_tt";
    }
  };
  FightPresetPicker.prototype.handleComboboxChange = function (__s49param0) {
    this.update();
    if (!this.selectedPreset.locked) {
      this._previousUnlockedIndex = this.presetCombobox.selectedId;
    }
    if (this.selectedPreset && this.selectedPreset.locked) {
      if (this.selectedPreset.index == this._model.unlockedPresetsCount) {
        this.onPresetUnlockRequested.dispatch(this.selectedPreset);
      } else {
        this.presetCombobox.selectItemIndex(this._model.unlockedPresetsCount);
      }
    }
    this.onSelectionChanged.dispatch();
  };
  FightPresetPicker.prototype.selectPreviousUnlockedItem = function () {
    this.presetCombobox.selectItemIndex(this._previousUnlockedIndex);
  };
  FightPresetPicker.prototype.onRemovedFromStage = function (__s57param0) {};
  FightPresetPicker.MAX_SHOWABLE_ITEMS = 20;
  return FightPresetPicker;
}(__dep_exact_9e901e8e2483a22f.FlashUIComponent);
exports.FightPresetPicker = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
