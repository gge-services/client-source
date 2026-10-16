Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicRenameDialog = require("gge-module:export_BasicRenameDialog");
var __s0local0 = function (__s1param0) {
  function RenameFightPresetDialog() {
    var __s3local0 = this;
    __s3local0.PRESET_MAX_CHARS = 15;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, RenameFightPresetDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RenameFightPresetDialog, __s1param0);
  RenameFightPresetDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.initStaticText(this.dialogDisp.txt_title, "dialog_troopPreset_rename_header").verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.initStaticText(this.dialogDisp.txt_copy, "dialog_troopPreset_rename_desc");
    this.initStaticText(this.dialogDisp.txt_insertTitle, "dialog_troopPreset_rename_text1").autoFitToBounds = true;
    this.dialogDisp.btn_ok.toolTipText = "dialog_troopPreset_applyPresetNameChanges_tt";
    this.dialogDisp.btn_back.toolTipText = "dialog_troopPreset_cancel_tt";
    this.dialogDisp.btn_close.toolTipText = "dialog_troopPreset_closePresetOptions_tt";
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  Object.defineProperty(RenameFightPresetDialog.prototype, "textMaxChars", {
    get: function () {
      return this.PRESET_MAX_CHARS;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "textMaxChars").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RenameFightPresetDialog.prototype, "defaultName", {
    get: function () {
      return this.preset.name;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicRenameDialog.BasicRenameDialog.prototype, "defaultName").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  RenameFightPresetDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
  };
  RenameFightPresetDialog.prototype.validate = function () {
    if (__s1param0.prototype.validate.call(this)) {
      if (__dep_exact_9e901e8e2483a22f.TextValide.isSmartFoxValide(this.itxt_insert.text)) {
        return true;
      }
      this.alert("generic_alert_watchout", "generic_register_namenotvalid");
    }
    return false;
  };
  RenameFightPresetDialog.prototype.sendCommand = function () {
    this.dialogProperties.presetVO.name = this.itxt_insert.text;
    __dep_export_CastleModel.CastleModel.fightPresetData.savePresetName(this.dialogProperties.presetVO);
    this.hide();
  };
  Object.defineProperty(RenameFightPresetDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RenameFightPresetDialog.prototype, "preset", {
    get: function () {
      return this.dialogProperties.presetVO;
    },
    enumerable: true,
    configurable: true
  });
  RenameFightPresetDialog.__initialize_static_members = function () {
    RenameFightPresetDialog.NAME = "RenameFightPreset";
  };
  return RenameFightPresetDialog;
}(__dep_export_BasicRenameDialog.BasicRenameDialog);
exports.RenameFightPresetDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
