Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleMailSendWithNewsletterDialog() {
    return __s1param0.call(this, CastleMailSendWithNewsletterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMailSendWithNewsletterDialog, __s1param0);
  CastleMailSendWithNewsletterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleMailSendWithNewsletterDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_referFriend_successful_header"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mailVerticationSend_verification_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mailVerticationSend_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy4, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_mailVerticationSend_newsletterSubscribed_copy1"));
  };
  CastleMailSendWithNewsletterDialog.prototype.onClick = function (__s9param0) {
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleMailSendWithNewsletterDialog.NAME = "CastleMailSendWithNewsletter";
  return CastleMailSendWithNewsletterDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleMailSendWithNewsletterDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
