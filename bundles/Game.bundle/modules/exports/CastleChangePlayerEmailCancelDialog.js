Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SCancelEmailChangeProgress = require("gge-module:export_C2SCancelEmailChangeProgress");
var __dep_export_HelpshiftHelper = require("gge-module:export_HelpshiftHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleChangePlayerEmailCancelDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleChangePlayerEmailCancelDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePlayerEmailCancelDialog, __s1param0);
  CastleChangePlayerEmailCancelDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_support]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newEmail_changeInProgress_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newEmail_changeInProgress_previousEmail_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_cancel.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("cancelChange"))));
    this.dialogDisp.btn_support.toolTipText = "contactGoodGameSupport_tooltip";
  };
  CastleChangePlayerEmailCancelDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_mail, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleModel.CastleModel.userData.email));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_new_mail, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_CastleModel.CastleModel.playerEmailData.newEmail));
    if (__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_MailChangePending_ToOldMail) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newEmail_changeInProgress_oldMailStep_desc", [__dep_export_CastleModel.CastleModel.playerEmailData.getDateForAutoEmailChange()]));
    }
    if (__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_MailChangePending_ToNewMail) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newEmail_changeInProgress_newMailStep_desc", [__dep_export_CastleModel.CastleModel.playerEmailData.getDateForAutoEmailChange()]));
    }
  };
  CastleChangePlayerEmailCancelDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_cancel:
          __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCancelEmailChangeProgress.C2SCancelEmailChangeProgress());
          this.hide();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_support:
          __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().showChatWidget();
      }
    }
  };
  CastleChangePlayerEmailCancelDialog.__initialize_static_members = function () {
    CastleChangePlayerEmailCancelDialog.NAME = "CastleChangePlayerEmailCancel";
  };
  return CastleChangePlayerEmailCancelDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleChangePlayerEmailCancelDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
