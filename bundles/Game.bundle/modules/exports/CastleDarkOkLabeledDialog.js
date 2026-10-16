Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDarkOkDialog = require("gge-module:export_CastleDarkOkDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = function (__s1param0) {
  function CastleDarkOkLabeledDialog() {
    return __s1param0.call(this, CastleDarkOkLabeledDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDarkOkLabeledDialog, __s1param0);
  CastleDarkOkLabeledDialog.prototype.showLoaded = function (__s5param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.standardDialogProperties.buttonLabel_ok));
  };
  CastleDarkOkLabeledDialog.NAME = "CastleDarkOkLabled";
  return CastleDarkOkLabeledDialog;
}(__dep_export_CastleDarkOkDialog.CastleDarkOkDialog);
exports.CastleDarkOkLabeledDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
