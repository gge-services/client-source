Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2SSetCredentials = require("gge-module:export_C2SSetCredentials");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleMailVerificationAnswerEvent = require("gge-module:export_CastleMailVerificationAnswerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleSaveAccountDialog() {
    var __s3local0 = this;
    __s3local0._isSaveAccount = false;
    __s3local0.accBlacklistErrorPosition = new __s0local0(124, -24);
    __s3local0.accPasswordErrorPosition = new __s0local0(124, 47);
    __s3local0.passwordErrorPosition = new __s0local0(124, -24);
    __s3local0._inputBehaviours = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSaveAccountDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSaveAccountDialog, __s1param0);
  CastleSaveAccountDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._txtInput_email = this.textFieldManager.registerTextField(this.dialogDisp.mc_account.input_mail, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._txtInput_saveAccountPassword = this.textFieldManager.registerTextField(this.dialogDisp.mc_account.input_password, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._txtInput_setPassword = this.textFieldManager.registerTextField(this.dialogDisp.mc_password.input_password, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._txtInput_email.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._txtInput_email.maxChars = __dep_export_ClientConstUtils.ClientConstUtils.MAX_EMAIL_CHARS;
    this._txtInput_saveAccountPassword.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._txtInput_saveAccountPassword.displayAsPassword = true;
    this._txtInput_saveAccountPassword.multiline = false;
    this._txtInput_saveAccountPassword.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    this._txtInput_setPassword.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    this._txtInput_setPassword.displayAsPassword = true;
    this._txtInput_setPassword.multiline = false;
    this._txtInput_setPassword.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    this._inputBehaviours = [];
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_account.input_mail_bg, this._txtInput_email));
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_account.input_password_bg, this._txtInput_saveAccountPassword));
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_password.input_password_bg, this._txtInput_setPassword));
  };
  CastleSaveAccountDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this._isSaveAccount = this.dialogProperties.dialogType == CastleSaveAccountDialog.TYPE_SAVE_ACCOUNT;
    var __s7local0;
    var __s7local1 = this._isSaveAccount ? "dialog_options_saveAccount" : "dialog_options_setPassword";
    switch (this.dialogProperties.dialogStyle) {
      case CastleSaveAccountDialog.STYLE_FORUM:
        __s7local0 = this._isSaveAccount ? "dialog_saveAccount_desc_forum" : "dialog_setPassword_desc_forum";
        break;
      case CastleSaveAccountDialog.STYLE_MANDATORY:
        __s7local1 = "attention";
        __s7local0 = this._isSaveAccount ? "dialog_saveAccount_mandatory_desc" : "dialog_setPassword_mandatory_desc";
        break;
      default:
        __s7local0 = this._isSaveAccount ? "dialog_saveAccount_desc" : "dialog_setPassword_desc";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local0)).autoFitToBounds = true;
    this._txtSaveAccountPasswordCaption = this.textFieldManager.registerTextField(this.dialogDisp.mc_account.txt_password, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_setPassword_password", [__dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH]));
    this._txtSaveAccountPasswordCaption.autoFitToBounds = true;
    this._txtSaveAccountPasswordCaption.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_password.txt_password, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_setPassword_password", [__dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_account.txt_mail, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_referFriend_sendEmail_friendMail")).autoFitToBounds = true;
  };
  CastleSaveAccountDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    this._txtInput_email.clearText();
    this._txtInput_saveAccountPassword.clearText();
    this._txtInput_setPassword.clearText();
    var __s10local0 = "";
    if (__dep_export_CastleModel.CastleModel.userData.hasEmail) {
      __s10local0 = __dep_export_CastleModel.CastleModel.userData.email;
    } else if (__dep_export_CastleModel.CastleModel.userData.isConnectedToFacebook) {
      __s10local0 = __dep_export_CastleModel.CastleModel.userData.facebookEmail;
    }
    this._txtInput_email.text = __s10local0;
    var __s10local1 = this.dialogProperties.dialogStyle != CastleSaveAccountDialog.STYLE_MANDATORY || this.dialogProperties.showCancelButton;
    this.dialogDisp.mc_password.visible = !this._isSaveAccount;
    this.dialogDisp.mc_account.visible = this._isSaveAccount;
    this.dialogDisp.btn_close.visible = __s10local1;
    this.dialogDisp.btn_cancel.visible = __s10local1;
    this.resetError();
    this._inputBehaviours.forEach(function (__s14param0) {
      return __s14param0.onShow();
    });
  };
  CastleSaveAccountDialog.prototype.hideLoaded = function (__s16param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s16param0);
    this._inputBehaviours.forEach(function (__s18param0) {
      return __s18param0.onHide();
    });
  };
  CastleSaveAccountDialog.prototype.resetError = function () {
    this.dialogDisp.mc_account.mc_blacklistError.visible = false;
    this.dialogDisp.mc_account.mc_passwordError.visible = false;
    this.dialogDisp.mc_password.mc_passwordError.visible = false;
  };
  CastleSaveAccountDialog.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      switch (__s22param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onValidate();
      }
    }
  };
  CastleSaveAccountDialog.prototype.onValidate = function () {
    this.resetError();
    this.saveAccountCredentials();
  };
  CastleSaveAccountDialog.prototype.showError = function (__s28param0, __s28param1, __s28param2) {
    this.textFieldManager.registerTextField(__s28param1.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s28param0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __s28param1.x = __s28param2.x;
    __s28param1.y = __s28param2.y;
    __s28param1.visible = true;
    __s28param1.scaleX = 0;
    __s28param1.scaleY = 0;
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s28param1, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  Object.defineProperty(CastleSaveAccountDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSaveAccountDialog.prototype.fieldAreValid = function () {
    var __s32local0;
    var __s32local1;
    var __s32local2 = true;
    var __s32local3 = true;
    if (this._isSaveAccount) {
      __s32local0 = __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_email.text);
      __s32local1 = __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_saveAccountPassword.text);
      __s32local2 = this.emailIsValid(__s32local0);
      __s32local3 = this.passwordIsValid(__s32local1, this.dialogDisp.mc_account.mc_passwordError, this.accPasswordErrorPosition);
    } else {
      __s32local2 = true;
      __s32local1 = __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_setPassword.text);
      __s32local3 = this.passwordIsValid(__s32local1, this.dialogDisp.mc_password.mc_passwordError, this.passwordErrorPosition);
    }
    return __s32local2 && __s32local3;
  };
  CastleSaveAccountDialog.prototype.sendDataToServer = function () {
    var __s36local0 = "";
    var __s36local1 = "";
    if (this._isSaveAccount) {
      __s36local0 = __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_email.text);
      __s36local1 = __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_saveAccountPassword.text);
    } else {
      __s36local1 = __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_setPassword.text);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetCredentials.C2SSetCredentials("", __s36local0, __s36local1));
  };
  CastleSaveAccountDialog.prototype.saveAccountCredentials = function () {
    if (this.fieldAreValid()) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      if (!this._isSaveAccount) {
        this.showLoading();
        this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
        this.sendDataToServer();
        return;
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
      var __s40local0 = {
        MAIL: __dep_exact_9e901e8e2483a22f_2.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_email.text),
        NEWSLETTER: __dep_export_CastleModel.CastleModel.playerEmailData.hasNewsletterSubscription
      };
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendMessage(__dep_exact_9e901e8e2483a22f.BasicSmartfoxConstants.C2S_VERIFY_PLAYER_MAIL_EVENT, [JSON.stringify(__s40local0)]);
    }
  };
  CastleSaveAccountDialog.prototype.onResponse = function (__s44param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
    switch (__s44param0.status) {
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.ALL_OK:
        this.showLoading();
        this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
        this.sendDataToServer();
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.GENERAL_ERROR:
        this.showError("GENERAL_ERROR_1", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_BLOCKED:
        this.showError("errorCode_173", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED:
        this.showError("EMAIL_DOMAIN_BLOCKED_8", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE:
        this.showError("errorCode_23", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED:
        this.showError("dialog_mailVertication_email_cooldown", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_INVALID:
        this.showError("generic_register_emailwrong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG:
        this.showError("generic_register_emaillong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
  };
  CastleSaveAccountDialog.prototype.onSDCArrived = function (__s47param0) {
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSDCArrived));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    var __s47local0 = __dep_exact_f855840627e6e145.int(__s47param0.params[0]);
    this.hideLoading();
    switch (__s47local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.hide();
        __dep_export_CastleModel.CastleModel.userData.email = this._txtInput_email.text;
        if (this.dialogProperties.okCallbackFunction != null) {
          this.dialogProperties.okCallbackFunction();
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_saveAccount_success_title"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_saveAccount_success_desc")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.EMAIL_ALREADY_IN_USE:
        this.showError("errorCode_23", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_EMAIL:
        this.showError("generic_register_emailwrong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
        break;
      case __dep_exact_26a421b704832cff.ERROR.WRONG_MODE:
        this.showError("GENERAL_ERROR_1", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
    }
  };
  CastleSaveAccountDialog.prototype.showLoading = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  CastleSaveAccountDialog.prototype.emailIsValid = function (__s53param0) {
    if (__s53param0.length == 0 || __s53param0 == "") {
      this.showError("error_mail_empty", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
      return false;
    } else if (__dep_exact_9e901e8e2483a22f_2.TextValide.isEmailString(__s53param0)) {
      return !!__dep_exact_9e901e8e2483a22f_2.TextValide.isSmartFoxValide(__s53param0) || (this.showError("generic_register_email_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition), false);
    } else {
      this.showError("generic_register_emailwrong_copy", this.dialogDisp.mc_account.mc_blacklistError, this.accBlacklistErrorPosition);
      return false;
    }
  };
  CastleSaveAccountDialog.prototype.passwordIsValid = function (__s58param0, __s58param1, __s58param2) {
    if (!__s58param0 || __s58param0.length < __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this.showError(new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("error_password_too_short", [__dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH]).compose(), __s58param1, __s58param2);
      return false;
    } else {
      return !!__dep_exact_9e901e8e2483a22f_2.TextValide.isSmartFoxValide(__s58param0) || (this.showError("error_password_empty", __s58param1, __s58param2), false);
    }
  };
  CastleSaveAccountDialog.prototype.hideLoading = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  CastleSaveAccountDialog.NAME = "CastleSaveAccountExternal_M";
  CastleSaveAccountDialog.STYLE_NORMAL = "normal";
  CastleSaveAccountDialog.STYLE_MANDATORY = "mandatory";
  CastleSaveAccountDialog.STYLE_FORUM = "forum";
  CastleSaveAccountDialog.TYPE_SAVE_ACCOUNT = "setAccount";
  CastleSaveAccountDialog.TYPE_SAVE_PASSWORD = "setPassword";
  return CastleSaveAccountDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSaveAccountDialog = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
