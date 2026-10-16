Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_5 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SChangePasswordVO = require("gge-module:export_C2SChangePasswordVO");
var __dep_export_C2SSetCredentials = require("gge-module:export_C2SSetCredentials");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleLostPasswordDialog = require("gge-module:export_CastleLostPasswordDialog");
var __dep_export_CastleLostPasswordDialogProperties = require("gge-module:export_CastleLostPasswordDialogProperties");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_AOptionsDialogCollapsibleItem = require("gge-module:export_AOptionsDialogCollapsibleItem");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __s0local0 = function (__s1param0) {
  function OptionsDialogChangePasswordItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName("CastleOptions_ResetPasswordItem"))(), __s3param0) || this;
    __s3local0._inputBehaviours = [];
    __s3local0.initDefaultLayer();
    __s3local0.initSetLayer();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogChangePasswordItem, __s1param0);
  OptionsDialogChangePasswordItem.prototype.initDefaultLayer = function () {
    var __s5local0 = this.contentMC.mc_default;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s5local0.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s5local0.mc_forgotPW, 1);
    this.checkBoxCompPassVisible_default = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(__s5local0.cbx_showPW, true);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_pass_old, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_changePassword_old"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s5local0.mc_forgotPW.txt_copy.wordWrap = true;
    __s5local0.mc_forgotPW.txt_copy.defaultTextFormat.align = __dep_exact_9e901e8e2483a22f_3.GGSTextAlign.LEFT;
    var __s5local1 = new __dep_exact_92d05af59ee2ff30_3.HTMLTextCustomVO();
    __s5local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_changePassword_lost"));
    var __s5local2 = new __dep_exact_92d05af59ee2ff30_2.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    var __s5local3 = new __dep_exact_92d05af59ee2ff30_2.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    var __s5local4 = new __dep_exact_92d05af59ee2ff30_2.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    __s5local1.linkFormats = new __dep_exact_92d05af59ee2ff30_1.HTMLLinkFormatsVO(__s5local2, __s5local3, __s5local4);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.mc_forgotPW.txt_copy, __s5local1, new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_pass_new, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_changePassword_new"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_showPW, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_changePassword_show"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.itxt_pass_old = this.initPasswordInput(__s5local0.mc_old, 1);
    this.itxt_pass_new_default = this.initPasswordInput(__s5local0.mc_new, 2);
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s5local0.mc_old, this.itxt_pass_old));
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s5local0.mc_new, this.itxt_pass_new_default));
    this.checkBoxCompPassVisible_default.selected();
    this.applyPasswordVisibility(this.checkBoxCompPassVisible_default, [this.itxt_pass_old, this.itxt_pass_new_default]);
    __s5local0.mc_oldPasswordError.visible = false;
    __s5local0.mc_newPasswordError.visible = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_5.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_changePassword_confirm_button")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s5local0.btn_ok, false);
  };
  OptionsDialogChangePasswordItem.prototype.initSetLayer = function () {
    var __s7local0 = this.contentMC.mc_onlyNewPW;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s7local0.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.checkBoxCompPassVisible_set = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(__s7local0.cbx_showPW, true);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s7local0.txt_pass_new, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_setPassword_password", [__dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s7local0.txt_showPW, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO("dialog_changePassword_show"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.itxt_pass_new_set = this.initPasswordInput(__s7local0.mc_new, 1);
    this._inputBehaviours.push(new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(__s7local0.mc_new, this.itxt_pass_new_set));
    this.checkBoxCompPassVisible_set.selected();
    this.applyPasswordVisibility(this.checkBoxCompPassVisible_set, [this.itxt_pass_new_set]);
    __s7local0.mc_newPasswordError.visible = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s7local0.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_5.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("generic_btn_okay")), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7local0.btn_ok, false);
  };
  OptionsDialogChangePasswordItem.prototype.initPasswordInput = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9param0.txt_value, new __dep_exact_92d05af59ee2ff30_5.TextVO(""), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s9local0.maxChars = __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    __s9local0.type = __dep_exact_81dacdf05bd32292.TextFieldType.INPUT;
    __s9local0.displayAsPassword = false;
    __s9local0.displayAsPassword = true;
    __s9local0.clearText();
    __s9local0.tabIndex = __s9param1;
    __s9local0.textContentVO.stringValue = "";
    return __s9local0;
  };
  OptionsDialogChangePasswordItem.prototype.changePasswordVisibility = function () {
    var __s11local0 = this.isSetMode ? this.checkBoxCompPassVisible_set : this.checkBoxCompPassVisible_default;
    var __s11local1 = this.isSetMode ? [this.itxt_pass_new_set] : [this.itxt_pass_old, this.itxt_pass_new_default];
    __s11local0.toggleSelected();
    this.applyPasswordVisibility(__s11local0, __s11local1);
  };
  OptionsDialogChangePasswordItem.prototype.applyPasswordVisibility = function (__s13param0, __s13param1) {
    __s13param1.forEach(function (__s15param0) {
      return __s15param0.displayAsPassword = !__s13param0.isSelected;
    });
  };
  OptionsDialogChangePasswordItem.prototype.changePassword = function () {
    var __s17local0 = this.isSetMode;
    var __s17local1 = this.activeLayer;
    var __s17local2 = this.itxt_pass_new.text;
    if (__s17local1.mc_oldPasswordError) {
      __s17local1.mc_oldPasswordError.visible = false;
    }
    __s17local1.mc_newPasswordError.visible = false;
    if (!__s17local0) {
      if (this.itxt_pass_old.text.length < __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
        this.showError("error_password_too_short", __s17local1.mc_oldPasswordError);
        return;
      }
      if (!__dep_exact_9e901e8e2483a22f_1.TextValide.isSmartFoxValide(this.itxt_pass_old.text)) {
        this.showError("error_password_invalid", __s17local1.mc_oldPasswordError);
        return;
      }
    }
    if (__s17local2.length < __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this.showError("error_password_too_short", __s17local1.mc_newPasswordError);
    } else if (__dep_exact_9e901e8e2483a22f_1.TextValide.isSmartFoxValide(__s17local2)) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s17local1.btn_ok, false);
      this._pendingLayer = __s17local1;
      if (__s17local0) {
        __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSetPasswordArrived));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetCredentials.C2SSetCredentials("", "", __s17local2));
      } else {
        __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SCP_ARRIVED, this.bindFunction(this.onSDXArrived));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SChangePasswordVO.C2SChangePasswordVO(this.itxt_pass_old.text, __s17local2));
      }
    } else {
      this.showError("error_password_invalid", __s17local1.mc_newPasswordError);
    }
  };
  OptionsDialogChangePasswordItem.prototype.onSDXArrived = function (__s28param0) {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SCP_ARRIVED, this.bindFunction(this.onSDXArrived));
    var __s28local0 = this.answeringLayer(this.contentMC.mc_default);
    if (__s28param0.params && __s28param0.params.length > 0) {
      if (__s28param0.params[0] == 0) {
        this.showError("error_password_wrong", __s28local0.mc_oldPasswordError);
      } else {
        this.showSuccessPopover();
      }
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s28local0.btn_ok, true);
  };
  OptionsDialogChangePasswordItem.prototype.onSetPasswordArrived = function (__s33param0) {
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SDC_ARRIVED, this.bindFunction(this.onSetPasswordArrived));
    var __s33local0 = this.answeringLayer(this.contentMC.mc_onlyNewPW);
    var __s33local1 = __s33param0.params && __s33param0.params.length > 0 ? Number(__s33param0.params[0]) : -1;
    switch (__s33local1) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.itxt_pass_new_set.clearText();
        this.itxt_pass_new_set.textContentVO.stringValue = "";
        this.showSuccessPopover();
        this.updateSignal.dispatch();
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_OBJECT_STATE:
        this.updateSignal.dispatch();
        break;
      default:
        this.showError("GENERAL_ERROR_1", __s33local0.mc_newPasswordError);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s33local0.btn_ok, __s33local1 != __dep_exact_26a421b704832cff.ERROR.ALL_OK);
  };
  OptionsDialogChangePasswordItem.prototype.answeringLayer = function (__s36param0) {
    var __s36local0 = this._pendingLayer ? this._pendingLayer : __s36param0;
    this._pendingLayer = null;
    return __s36local0;
  };
  OptionsDialogChangePasswordItem.prototype.showSuccessPopover = function () {
    var __s38local0 = __dep_export_CastleComponent.CastleComponent.layoutManager.getDialog(__dep_export_OptionsDialog.OptionsDialog);
    if (__s38local0) {
      __s38local0.popoverComponent.startSequence();
    }
  };
  OptionsDialogChangePasswordItem.prototype.showError = function (__s41param0, __s41param1) {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s41param1.txt_text, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(__s41param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    __s41param1.visible = true;
    __s41param1.scaleX = 0;
    __s41param1.scaleY = 0;
    __dep_exact_608de47b6498f9b0_1.TweenLite.to(__s41param1, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: __dep_exact_608de47b6498f9b0.Bounce.easeOut
    });
  };
  OptionsDialogChangePasswordItem.prototype.showLoading = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  OptionsDialogChangePasswordItem.prototype.updateItem = function () {
    __s1param0.prototype.updateItem.call(this);
    this.disp.visible = !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer;
    var __s45local0 = this.isSetMode;
    this.contentMC.mc_onlyNewPW.visible = __s45local0;
    this.contentMC.mc_default.visible = !__s45local0;
    var __s45local1 = __s45local0 ? "dialog_options_setPassword" : "dialog_options_changePassword_title";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(__s45local1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30_4.LocalizedTextVO(__s45local1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.updateMask();
  };
  OptionsDialogChangePasswordItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._inputBehaviours.forEach(function (__s49param0) {
      return __s49param0.onShow();
    });
  };
  OptionsDialogChangePasswordItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this._inputBehaviours.forEach(function (__s53param0) {
      return __s53param0.onHide();
    });
  };
  OptionsDialogChangePasswordItem.prototype.onClick = function (__s55param0) {
    __s1param0.prototype.onClick.call(this, __s55param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s55param0.target)) {
      var __s55local0 = this.activeLayer;
      switch (__s55param0.target) {
        case __s55local0.btn_ok:
          this.changePassword();
          break;
        case __s55local0.cbx_showPW:
          this.changePasswordVisibility();
          break;
        case this.contentMC.mc_default.mc_forgotPW:
          this.openLostPasswordDialog();
      }
    }
  };
  OptionsDialogChangePasswordItem.prototype.openLostPasswordDialog = function () {
    var __s59local0 = __dep_export_CastleModel.CastleModel.userData.hasValidatedEmail && __dep_export_CastleModel.CastleModel.userData.hasEmail ? __dep_export_CastleModel.CastleModel.userData.email : "";
    var __s59local1 = __s59local0 != "" ? "generic_login_lostpassword_copy" : "dialog_options_forgotPassword_noEmail_desc";
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleLostPasswordDialog.CastleLostPasswordDialog, new __dep_export_CastleLostPasswordDialogProperties.CastleLostPasswordDialogProperties(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_forgotPassword_title"), __dep_exact_92d05af59ee2ff30.Localize.text(__s59local1), null, null, __dep_exact_92d05af59ee2ff30.Localize.text("generic_btn_okay"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_btn_cancel"), __s59local0));
  };
  OptionsDialogChangePasswordItem.prototype.onKeyUp = function (__s61param0) {
    __s1param0.prototype.onKeyUp.call(this, __s61param0);
    var __s61local0 = this.itxt_pass_new.text.trim() != "";
    if (!this.isSetMode) {
      __s61local0 = __s61local0 && this.itxt_pass_old.text.trim() != "";
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.activeLayer.btn_ok, __s61local0);
  };
  Object.defineProperty(OptionsDialogChangePasswordItem.prototype, "isSetMode", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.isPasswordTemporary && __dep_export_CastleModel.CastleModel.userData.hasEmail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogChangePasswordItem.prototype, "activeLayer", {
    get: function () {
      if (this.isSetMode) {
        return this.contentMC.mc_onlyNewPW;
      } else {
        return this.contentMC.mc_default;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogChangePasswordItem.prototype, "itxt_pass_new", {
    get: function () {
      if (this.isSetMode) {
        return this.itxt_pass_new_set;
      } else {
        return this.itxt_pass_new_default;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogChangePasswordItem.prototype, "contentHeight", {
    get: function () {
      return (this.contentMC.mc_onlyNewPW.visible ? this.contentMC.mc_onlyNewPW : this.contentMC.mc_default).height;
    },
    enumerable: true,
    configurable: true
  });
  return OptionsDialogChangePasswordItem;
}(__dep_export_AOptionsDialogCollapsibleItem.AOptionsDialogCollapsibleItem);
exports.OptionsDialogChangePasswordItem = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
