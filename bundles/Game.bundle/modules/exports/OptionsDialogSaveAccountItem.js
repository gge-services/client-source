Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2SSetCredentials = require("gge-module:export_C2SSetCredentials");
var __dep_export_CastleMailVerificationAnswerEvent = require("gge-module:export_CastleMailVerificationAnswerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_LinkComponent = require("gge-module:export_LinkComponent");
var __dep_export_CastleDarkOkDialog = require("gge-module:export_CastleDarkOkDialog");
var __dep_export_AOptionsDialogCollapsibleItem = require("gge-module:export_AOptionsDialogCollapsibleItem");
var __dep_export_C2SGetNewsletterSubscriptionStatusVO = require("gge-module:export_C2SGetNewsletterSubscriptionStatusVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function OptionsDialogSaveAccountItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleOptions_SaveAccountItem_WithNewsletter"))(), __s3param0) || this;
    __s3local0._inputBehaviours = [];
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.contentMC.mc_facebook.btn_ok, __s3local0.contentMC.mc_default.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.contentMC.mc_facebook.cbx_showPW], __dep_exact_84d43d9c404bd4d8.CheckBoxButton);
    __s3local0._checkBoxCompPassVisible = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0.contentMC.mc_facebook.cbx_showPW);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_default.txt_mailTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount_enterEmail_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_default.txt_mailTitle_verify, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount_confirmEmail_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_default.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_saveAccount_button")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.txt_mailTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount_enterEmail_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.txt_mailTitle_verify, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount_confirmEmail_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.txt_passwordTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_saveAccount_enterPassword_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.txt_showPW, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_options_changePassword_showPassword_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_saveAccount_button")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.mc_linkText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_saveAccount_desc"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_emailDefault = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_default.mc_input1.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_enter")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_emailDefault.maxChars = __dep_export_ClientConstUtils.ClientConstUtils.MAX_EMAIL_CHARS;
    __s3local0.itxt_emailConfirmDefault = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_default.mc_input2.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_enter")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_emailConfirmDefault.maxChars = __dep_export_ClientConstUtils.ClientConstUtils.MAX_EMAIL_CHARS;
    __s3local0.itxt_emailFacebook = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.mc_input1.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_enter")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_emailConfirmFacebook = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.mc_input2.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("generic_enter")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_passwordFacebook = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.contentMC.mc_facebook.mc_input_password.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_passwordFacebook.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    __s3local0._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.contentMC.mc_default.mc_input1, __s3local0.itxt_emailDefault));
    __s3local0._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.contentMC.mc_default.mc_input2, __s3local0.itxt_emailConfirmDefault));
    __s3local0._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.contentMC.mc_facebook.mc_input1, __s3local0.itxt_emailFacebook));
    __s3local0._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.contentMC.mc_facebook.mc_input2, __s3local0.itxt_emailConfirmFacebook));
    __s3local0._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s3local0.contentMC.mc_facebook.mc_input_password, __s3local0.itxt_passwordFacebook));
    __s3local0.contentMC.mc_default.mc_blacklistError.visible = false;
    __s3local0.contentMC.mc_default.mc_mailConfirmError.visible = false;
    __s3local0.contentMC.mc_facebook.mc_blacklistError.visible = false;
    __s3local0.contentMC.mc_facebook.mc_mailConfirmError.visible = false;
    __s3local0.contentMC.mc_facebook.mc_newPasswordError.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogSaveAccountItem, __s1param0);
  OptionsDialogSaveAccountItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._checkBoxCompPassVisible.selected();
    this.changePasswordVisibility();
    this._inputBehaviours.forEach(function (__s7param0) {
      return __s7param0.onShow();
    });
  };
  OptionsDialogSaveAccountItem.prototype.updateItem = function () {
    __s1param0.prototype.updateItem.call(this);
    this.disp.visible = !__dep_export_CastleModel.CastleModel.userData.hasSentMailVerification && __dep_export_CastleModel.CastleModel.userData.email == "" && !__dep_export_CastleModel.CastleModel.userData.hasValidatedEmail && !__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.loginIsKeyBased && !__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.isOnSpecialServer && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.contentMC.mc_facebook.visible = this.isPasswordTemporary && __dep_export_CastleModel.CastleModel.playerEmailData.newEmail == "";
    this.contentMC.mc_default.visible = !this.isPasswordTemporary && !__dep_export_CastleModel.CastleModel.playerEmailData.newEmail;
    if (__dep_export_CastleModel.CastleModel.userData.facebookEmail) {
      this.itxt_emailDefault.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.userData.facebookEmail;
      this.itxt_emailConfirmDefault.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.userData.facebookEmail;
      this.itxt_emailFacebook.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.userData.facebookEmail;
      this.itxt_emailConfirmFacebook.textContentVO.stringValue = __dep_export_CastleModel.CastleModel.userData.facebookEmail;
    }
    this.activeLayer.cbx_newsletter.mouseChildren = false;
    this.updateNewsletter();
    this.updateMask();
  };
  OptionsDialogSaveAccountItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._inputBehaviours.forEach(function (__s14param0) {
      return __s14param0.onHide();
    });
  };
  OptionsDialogSaveAccountItem.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      switch (__s16param0.target) {
        case this.contentMC.mc_facebook.cbx_showPW:
          this.changePasswordVisibility();
          break;
        case this.activeLayer.btn_ok:
          this.onValidate();
          break;
        case this._checkboxMC:
          this._checkboxNewsletter.toggleSelected();
      }
    }
  };
  OptionsDialogSaveAccountItem.prototype.changePasswordVisibility = function () {
    this._checkBoxCompPassVisible.toggleSelected();
    this.itxt_passwordFacebook.displayAsPassword = !this._checkBoxCompPassVisible.isSelected;
  };
  OptionsDialogSaveAccountItem.prototype.onValidate = function () {
    var __s22local0 = this;
    this.contentMC.mc_default.mc_blacklistError.visible = false;
    this.contentMC.mc_default.mc_mailConfirmError.visible = false;
    this.contentMC.mc_facebook.mc_blacklistError.visible = false;
    this.contentMC.mc_facebook.mc_mailConfirmError.visible = false;
    this.contentMC.mc_facebook.mc_newPasswordError.visible = false;
    var __s22local1 = this._inputBehaviours.find(function (__s24param0) {
      return __s24param0.disp.parent == __s22local0.activeLayer && __s24param0.disp.name == "mc_input1";
    });
    var __s22local2 = __s22local1 ? __s22local1.text : "";
    var __s22local3 = this._inputBehaviours.find(function (__s26param0) {
      return __s26param0.disp.parent == __s22local0.activeLayer && __s26param0.disp.name == "mc_input2";
    });
    var __s22local4 = __s22local3 ? __s22local3.text : "";
    var __s22local5 = this._inputBehaviours.find(function (__s28param0) {
      return __s28param0.disp.parent == __s22local0.activeLayer && __s28param0.disp.name == "mc_input_password";
    });
    var __s22local6 = __s22local5 ? __s22local5.text : "";
    if (__s22local2.length == 0 || __s22local2 == "") {
      this.showError("error_mail_empty", this.activeLayer.mc_blacklistError);
    }
    if (__dep_exact_9e901e8e2483a22f_6.TextValide.isEmailString(__s22local2)) {
      if (__dep_exact_9e901e8e2483a22f_6.TextValide.isSmartFoxValide(__s22local2)) {
        if (__s22local2 == __s22local4) {
          if (this.contentMC.mc_facebook.visible) {
            if (__s22local6.length < __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
              this.showError("error_password_too_short", this.activeLayer.mc_newPasswordError);
              return;
            }
            if (!__dep_exact_9e901e8e2483a22f_6.TextValide.isSmartFoxValide(__s22local6)) {
              this.showError("error_password_invalid", this.activeLayer.mc_newPasswordError);
              return;
            }
          }
          __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
          var __s22local7 = {
            MAIL: __s22local2,
            NEWSLETTER: this._checkboxNewsletter.isSelected
          };
          __dep_exact_9e901e8e2483a22f_5.BasicModel.smartfoxClient.sendMessage(__dep_exact_9e901e8e2483a22f_4.BasicSmartfoxConstants.C2S_VERIFY_PLAYER_MAIL_EVENT, [JSON.stringify(__s22local7)]);
          this.emailSent = __s22local2;
          this.passwordSent = __s22local6;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleDarkOkDialog.CastleDarkOkDialog, new __dep_exact_9e901e8e2483a22f_3.BasicStandardOkDialogProperties("dialog_mailVerticationWaiting_header", "dialog_mailVerticationWaiting_copy1"));
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.activeLayer.btn_ok, false);
        } else {
          this.showError("dialog_mailVertication_email_verify_error", this.activeLayer.mc_mailConfirmError);
        }
      } else {
        this.showError("generic_register_email_copy", this.activeLayer.mc_blacklistError);
      }
    } else {
      this.showError("generic_register_emailwrong_copy", this.activeLayer.mc_blacklistError);
    }
  };
  OptionsDialogSaveAccountItem.prototype.onResponse = function (__s40param0) {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
    switch (__s40param0.status) {
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.ALL_OK:
        __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.MAIL_VERIFICATION_SENT));
        __dep_export_CastleModel.CastleModel.userData.email = this.emailSent;
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetCredentials.C2SSetCredentials("", __dep_exact_9e901e8e2483a22f_6.TextValide.getValideSmartFoxJSONTextMessage(this.emailSent), this.passwordSent));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetNewsletterSubscriptionStatusVO.C2SGetNewsletterSubscriptionStatusVO());
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.GPI_UPDATE));
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.GENERAL_ERROR:
        this.showError("GENERAL_ERROR_1", this.activeLayer.mc_blacklistError);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_BLOCKED:
        this.showError("errorCode_173", this.activeLayer.mc_blacklistError);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED:
        this.showError("EMAIL_DOMAIN_BLOCKED_8", this.activeLayer.mc_blacklistError);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE:
        this.showError("errorCode_23", this.activeLayer.mc_blacklistError);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED:
        this.showError("dialog_mailVertication_email_cooldown", this.activeLayer.mc_blacklistError);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_INVALID:
        this.showError("generic_register_emailwrong_copy", this.activeLayer.mc_blacklistError);
        break;
      case __dep_export_CastleMailVerificationAnswerEvent.CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG:
        this.showError("generic_register_emaillong_copy", this.activeLayer.mc_blacklistError);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.activeLayer.btn_ok, true);
    this.updateSignal.dispatch();
  };
  OptionsDialogSaveAccountItem.prototype.showError = function (__s43param0, __s43param1) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s43param1.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s43param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __s43param1.visible = true;
    __s43param1.scaleX = 0;
    __s43param1.scaleY = 0;
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s43param1, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleDarkOkDialog.CastleDarkOkDialog);
  };
  Object.defineProperty(OptionsDialogSaveAccountItem.prototype, "activeLayer", {
    get: function () {
      if (this.isPasswordTemporary) {
        return this.contentMC.mc_facebook;
      } else {
        return this.contentMC.mc_default;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogSaveAccountItem.prototype, "isPasswordTemporary", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.isPasswordTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogSaveAccountItem.prototype, "contentHeight", {
    get: function () {
      return (this.contentMC.mc_facebook.visible ? this.contentMC.mc_facebook : this.contentMC.mc_default).height;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialogSaveAccountItem.prototype.updateNewsletter = function () {
    this._checkboxMC = this.activeLayer.cbx_newsletter;
    this._checkboxNewsletter = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.activeLayer.cbx_newsletter, true);
    this._checkboxNewsletter.selected();
    this.linkComponent = new __dep_export_LinkComponent.LinkComponent(this.activeLayer.mc_link, "", "");
    this.updateLinkComponent();
    this.updateRewardsComponent();
  };
  OptionsDialogSaveAccountItem.prototype.updateLinkComponent = function () {
    var __s55local0 = "";
    if (__dep_exact_9e901e8e2483a22f_1.EnvironmentProvider.instance.current.data.languageCode == "ar") {
      __s55local0 = __dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.urlPolicy;
    }
    this.linkComponent.colorData = [__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION];
    this.linkComponent.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.TOP;
    this.linkComponent.update(__s55local0, "dialog_options_newsletter_desc2");
  };
  OptionsDialogSaveAccountItem.prototype.updateRewardsComponent = function () {
    var __s58local0 = new __dep_export_CollectableList.CollectableList();
    __dep_export_CastleModel.CastleModel.newsletterData.newsletterVOs.forEach(function (__s60param0) {
      __s58local0.addList(__dep_export_CastleModel.CastleModel.rewardData.getListById(__s60param0.rewardID));
    });
    var __s58local1 = new __dep_export_CollectableRenderClips.CollectableRenderClips(this.activeLayer.mc_reward.mc_item).addInfoBtn(this.activeLayer.mc_reward.btn_info);
    var __s58local2 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local0(136, 132));
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s58local1, __s58local0.getItemByIndex(0), __s58local2);
  };
  return OptionsDialogSaveAccountItem;
}(__dep_export_AOptionsDialogCollapsibleItem.AOptionsDialogCollapsibleItem);
exports.OptionsDialogSaveAccountItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
