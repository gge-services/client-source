Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_FightPresetPicker = require("gge-module:export_FightPresetPicker");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_ComboboxItemRendererAttackDialogPreset = require("gge-module:export_ComboboxItemRendererAttackDialogPreset");
var __s0local0 = function (__s1param0) {
  function AttackDialogPresetPicker(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogPresetPicker, __s1param0);
  AttackDialogPresetPicker.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.buttonEdit], this.buttonClass());
    this.buttonEdit.mouseChildren = false;
    this.buttonEdit.toolTipText = "dialog_troopPreset_rename_header";
  };
  AttackDialogPresetPicker.prototype.getNewCombobox = function () {
    return new __dep_export_ComboboxComponent.ComboboxComponent(this.disp.mc_presetComboBox, "", __dep_export_ComboboxComponent.ComboboxComponent.OPEN_UP, 32, 32, -1, 15, new __dep_export_ComboboxItemRendererAttackDialogPreset.ComboboxItemRendererAttackDialogPreset(), 0, true, false, 0, "", -2, false, -33, -20, 8, 10);
  };
  AttackDialogPresetPicker.prototype.buttonClass = function () {
    return __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover;
  };
  Object.defineProperty(AttackDialogPresetPicker.prototype, "buttonEdit", {
    get: function () {
      return this.disp.btn_edit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPresetPicker.prototype, "buttonFirstWave", {
    get: function () {
      return this.disp.btn_first_wave;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogPresetPicker.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.buttonFirstWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, AttackDialogPresetPicker.PRESET_FILL_FIRST_WAVE);
            __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_PRESET_1ST_WAVE);
          }
          break;
        case this.buttonMultiWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, AttackDialogPresetPicker.PRESET_FILL_SELECTED_WAVES);
            __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_PRESET_SELECTED);
          }
          break;
        case this.buttonSingleWave:
          if (this.selectedPreset && this.selectedPreset.unlocked) {
            this.onPresetActivated.dispatch(this.selectedPreset, AttackDialogPresetPicker.PRESET_FILL_NEXT_WAVE);
            __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().trackDetailCounter(__dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.TRACK_PRESET_NEXT_WAVE);
          }
          break;
        case this.buttonSave:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_troopPreset_overwritePreset_copy"), this.bindFunction(this.onSaveButton)));
      }
    }
  };
  AttackDialogPresetPicker.prototype.update = function () {};
  AttackDialogPresetPicker.PRESET_FILL_FIRST_WAVE = "first";
  AttackDialogPresetPicker.PRESET_FILL_NEXT_WAVE = "next";
  AttackDialogPresetPicker.PRESET_FILL_SELECTED_WAVES = "selected";
  return AttackDialogPresetPicker;
}(__dep_export_FightPresetPicker.FightPresetPicker);
exports.AttackDialogPresetPicker = __s0local0;
