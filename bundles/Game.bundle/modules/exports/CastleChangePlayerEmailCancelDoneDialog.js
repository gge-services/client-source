Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleChangePlayerEmailCancelDoneDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleChangePlayerEmailCancelDoneDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePlayerEmailCancelDoneDialog, __s1param0);
  CastleChangePlayerEmailCancelDoneDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newEmail_changeCancelConfirmed_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newEmail_changeCancelConfirmed_desc"));
  };
  CastleChangePlayerEmailCancelDoneDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  CastleChangePlayerEmailCancelDoneDialog.__initialize_static_members = function () {
    CastleChangePlayerEmailCancelDoneDialog.NAME = "CastleChangePlayerEmailCancelConfirmDone";
  };
  return CastleChangePlayerEmailCancelDoneDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleChangePlayerEmailCancelDoneDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "CastleChangePlayerEmailCancelConfirmDone");
__s0local0.__initialize_static_members();
