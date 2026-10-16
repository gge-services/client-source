Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_HelpshiftHelper = require("gge-module:export_HelpshiftHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_C2SChangePlayerNameInfo = require("gge-module:export_C2SChangePlayerNameInfo");
var __dep_export_C2SChangePlayerEmail = require("gge-module:export_C2SChangePlayerEmail");
var __dep_export_PlayerEmailData = require("gge-module:export_PlayerEmailData");
var __s0local0 = function (__s1param0) {
  function CastleChangePlayerEmailDialog() {
    return __s1param0.call(this, CastleChangePlayerEmailDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePlayerEmailDialog, __s1param0);
  CastleChangePlayerEmailDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_newEmail_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_new_email, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_newEmail_newEmail_desc"));
    this._txtInput_email = this.textFieldManager.registerTextField(this.dialogDisp.mc_email.input_email, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_enter")));
    this._defaultText = this._txtInput_email.text;
    this._txtInput_email.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._txtInput_email.multiline = false;
    this._txtInput_email.maxChars = __dep_export_PlayerEmailData.PlayerEmailData.EMAIL_MAX_LENGTH;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_support], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.dialogDisp.btn_support.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("support_GGS_tooltip");
  };
  CastleChangePlayerEmailDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateText();
    this.dialogDisp.mc_blacklistError.visible = false;
    this._txtInput_email.text = this._defaultText;
    this._txtInput_email.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_email.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_email.keyUp.add(this.bindFunction(this.onTyping));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onRMCStatusArrived));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangePlayerNameInfo.C2SChangePlayerNameInfo());
  };
  CastleChangePlayerEmailDialog.prototype.updateText = function () {
    var __s9local0;
    var __s9local1;
    __s9local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newEmail_currentEmail_desc");
    __s9local1 = __dep_exact_92d05af59ee2ff30.Localize.text("generic_placeHolder", [__dep_export_CastleModel.CastleModel.userData.email]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_email, new __dep_exact_92d05af59ee2ff30.TextVO(__s9local0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_email_value, new __dep_exact_92d05af59ee2ff30.TextVO(__s9local1)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newEmail_desc")));
  };
  CastleChangePlayerEmailDialog.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    if (this._enableUI || __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_ok:
          if (this.emailIsValid()) {
            this.changeEmail();
          }
          break;
        case this.dialogDisp.btn_support:
          this.onClickSupport();
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleChangePlayerEmailDialog.prototype.onClickSupport = function () {
    __dep_export_HelpshiftHelper.HelpshiftHelper.getInstance().showChatWidget();
  };
  CastleChangePlayerEmailDialog.prototype.onTextFieldFocusIn = function (__s18param0) {
    this.dialogDisp.mc_email.mc_selected.visible = true;
    this.dialogDisp.mc_blacklistError.visible = false;
    if (this._txtInput_email.text == this._defaultText) {
      this._txtInput_email.text = "";
    }
  };
  CastleChangePlayerEmailDialog.prototype.onTextFieldFocusOut = function (__s21param0) {
    this.dialogDisp.mc_email.mc_selected.visible = false;
  };
  CastleChangePlayerEmailDialog.prototype.onTyping = function () {
    var __s23local0 = [];
    for (var __s23local1 = 0; __s23local1 < arguments.length; __s23local1++) {
      __s23local0[__s23local1] = arguments[__s23local1];
    }
    this._txtInput_email.textContentVO.stringValue = this._txtInput_email.text.replace(/\n/g, "");
    this._txtInput_email.textContentVO.stringValue = this._txtInput_email.text.replace(/\t/g, "");
  };
  CastleChangePlayerEmailDialog.prototype.emailIsValid = function () {
    if (this._txtInput_email.text.charAt(0) == " " || this._txtInput_email.text.charAt(this._txtInput_email.text.length - 1) == " ") {
      this.showNameError("dialog_options_error_emailSpaces_desc");
      return false;
    } else if (this._txtInput_email.text.trim().length == 0) {
      this.showNameError("error_email_empty");
      return false;
    } else if (this._txtInput_email.text == __dep_export_CastleModel.CastleModel.userData.email) {
      this.showNameError("dialog_options_error_alreadyInUse_desc");
      return false;
    } else if (this._txtInput_email.text.match("^[0-9]*$")) {
      this.showNameError("dialog_options_error_emailOnlyNumbers_desc");
      return false;
    } else {
      return this._txtInput_email.text != this._defaultText && !!__dep_exact_9e901e8e2483a22f.TextValide.isEmailString(this._txtInput_email.text) || (this.showNameError("dialog_options_error_enterEmail_desc"), false);
    }
  };
  CastleChangePlayerEmailDialog.prototype.onRMCStatusArrived = function (__s34param0) {
    var __s34local0 = __s34param0.params[0];
    if (__s34param0.params[1]) {
      this.updateText();
      this.hide();
    } else {
      this.showNameError(__s34local0);
    }
    this._enableUI = true;
  };
  CastleChangePlayerEmailDialog.prototype.changeEmail = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangePlayerEmail.C2SChangePlayerEmail(__dep_exact_9e901e8e2483a22f.TextValide.getValideSmartFoxText(this._txtInput_email.text)));
    this._enableUI = false;
    this.hide();
  };
  CastleChangePlayerEmailDialog.prototype.showNameError = function (__s40param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_blacklistError.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s40param0)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_blacklistError.visible = true;
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.dialogDisp.mc_blacklistError, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  CastleChangePlayerEmailDialog.prototype.hideLoaded = function (__s42param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s42param0);
    this._txtInput_email.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_email.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_email.keyUp.remove(this.bindFunction(this.onTyping));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onRMCStatusArrived));
  };
  CastleChangePlayerEmailDialog.__initialize_static_members = function () {
    CastleChangePlayerEmailDialog.NAME = "CastleChangePlayerEmail";
  };
  return CastleChangePlayerEmailDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleChangePlayerEmailDialog = __s0local0;
__s0local0.__initialize_static_members();
