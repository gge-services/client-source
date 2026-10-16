Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __s0local0 = function (__s1param0) {
  function CastleDeleteAccountConfirmationDialog() {
    return __s1param0.call(this, CastleDeleteAccountConfirmationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDeleteAccountConfirmationDialog, __s1param0);
  CastleDeleteAccountConfirmationDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_exact_84d43d9c404bd4d8.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_copy.autoFitToBounds = true;
    this.itxt_title.textContentVO.textId = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.title);
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
    if (this.standardDialogProperties.copyTextReplacements) {
      this.itxt_copy.textContentVO.textReplacements = this.standardDialogProperties.copyTextReplacements;
    }
  };
  CastleDeleteAccountConfirmationDialog.prototype.onClick = function (__s8param0) {
    __s1param0.prototype.onClick.call(this, __s8param0);
    switch (__s8param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleDeleteAccountConfirmationDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDeleteAccountConfirmationDialog.NAME = "DarkOk_ABG2";
  return CastleDeleteAccountConfirmationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleDeleteAccountConfirmationDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
