Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function DarkOkDialog() {
    return __s1param0.call(this, DarkOkDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DarkOkDialog, __s1param0);
  DarkOkDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_copy.autoFitToBounds = true;
    this.itxt_title.textContentVO.textId = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.title);
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
  };
  DarkOkDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk(this.getCallbackParams());
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionCancel != null) {
          this.standardDialogProperties.functionCancel(null);
        }
    }
  };
  DarkOkDialog.prototype.getCallbackParams = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.properties, "CastleStandardYesNoDialogProperties")) {
      return this.properties.params;
    } else {
      return null;
    }
  };
  Object.defineProperty(DarkOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DarkOkDialog.NAME = "DarkOk_ABG2";
  return DarkOkDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.DarkOkDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
