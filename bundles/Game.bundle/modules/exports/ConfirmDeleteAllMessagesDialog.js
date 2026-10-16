Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ConfirmDeleteAllMessagesDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, ConfirmDeleteAllMessagesDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConfirmDeleteAllMessagesDialog, __s1param0);
  ConfirmDeleteAllMessagesDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_no], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  ConfirmDeleteAllMessagesDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_inbox_deleteMessageAll_popup_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(this.dialogProperties.copy));
  };
  ConfirmDeleteAllMessagesDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  ConfirmDeleteAllMessagesDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        this.dialogProperties.functionYes();
        this.hide();
    }
  };
  Object.defineProperty(ConfirmDeleteAllMessagesDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ConfirmDeleteAllMessagesDialog.NAME = "ConfirmDeleteAllMessages";
  return ConfirmDeleteAllMessagesDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ConfirmDeleteAllMessagesDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
