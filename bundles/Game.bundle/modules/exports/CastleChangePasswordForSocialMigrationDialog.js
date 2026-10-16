Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_e9ed30ab7bbf7f50 = require("gge-module:exact_e9ed30ab7bbf7f50");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_SsoUserMoveTrackingEvent = require("gge-module:export_SsoUserMoveTrackingEvent");
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_UserSocialLoginMigrationHelper = require("gge-module:export_UserSocialLoginMigrationHelper");
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleChangePasswordForSocialMigrationDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleChangePasswordForSocialMigrationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleChangePasswordForSocialMigrationDialog, __s1param0);
  CastleChangePasswordForSocialMigrationDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
    __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.clear();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("nk_saveYourAccount_title")));
    var __s5local0 = new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO();
    __s5local0.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("nk_saveYourAccount_copy", [__dep_export_CastleModel.CastleModel.userData.userName, __dep_exact_92d05af59ee2ff30.Localize.datetime(__dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getDateOfChange(), __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), __dep_exact_92d05af59ee2ff30.Localize.datetime(__dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getDateOfChange(), __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), __dep_export_UserSocialLoginMigrationHelper.UserSocialLoginMigrationHelper.getNameByInstanceID(this.env.networkId)]));
    var __s5local1 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE2, __dep_exact_9e901e8e2483a22f_1.GGSTextDecoration.UNDERLINE);
    var __s5local2 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE2, __dep_exact_9e901e8e2483a22f_1.GGSTextDecoration.UNDERLINE);
    var __s5local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE2, __dep_exact_9e901e8e2483a22f_1.GGSTextDecoration.UNDERLINE);
    __s5local0.linkFormats = new __dep_exact_92d05af59ee2ff30_1.HTMLLinkFormatsVO(__s5local1, __s5local2, __s5local3);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, __s5local0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_pass1, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("nk_saveYourAccount_choosePW"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_pass2, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("nk_saveYourAccount_confirmPW"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("nk_saveYourAccount_loginName"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_showPass, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("nk_saveYourAccount_showPW_btn"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("nk_saveYourAccount_setPW_btn"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_4.TextVO(__dep_export_CastleModel.CastleModel.userData.userName));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.checkBoxCompPassVisible = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.dialogDisp.cbx_showPass, true);
    this.dialogDisp.cbx_showPass.mouseChildren = false;
    this.pass1 = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(this.dialogDisp.mc_pass1, null, "");
    this.pass2 = new __dep_export_SelectInputFieldComponent.SelectInputFieldComponent(this.dialogDisp.mc_pass2, null, "");
    this.pass1.searchField.keyUp.add(this.bindFunction(this.onKeyUp));
    this.pass2.searchField.keyUp.add(this.bindFunction(this.onKeyUp));
    this.checkBoxCompPassVisible.selected();
    this.changePasswordVisibility();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, [__dep_export_SsoUserMoveTrackingEvent.SsoUserMoveTrackingEvent.POPUP_SHOWN]);
    this.dialogDisp.btn_close.visible = !this.env.loginIsKeyBased || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 86 || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId == 87;
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.onKeyUp = function (__s7param0) {
    __s1param0.prototype.onKeyUp.call(this, __s7param0);
    var __s7local0 = this.pass1.text;
    var __s7local1 = this.pass2.text;
    if (__s7param0.target == this.dialogDisp.mc_pass1.txt_value || __s7param0.target == this.dialogDisp.mc_pass2.txt_value) {
      if (__s7local0 != "" && __s7local1 != "" && __s7local0 == __s7local1) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
        this.dialogDisp.btn_ok.toolTipText = null;
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
        this.dialogDisp.btn_ok.toolTipText = "error_password_no_match";
      }
    }
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.changePassword = function () {
    if (this.pass1.text.length < __dep_exact_e9ed30ab7bbf7f50.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this.showError("error_password_too_short");
    } else if (__dep_exact_9e901e8e2483a22f_2.TextValide.isSmartFoxValide(this.pass1.text)) {
      this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, this.bindFunction(this.onSPSLMSArrived));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSetPasswordForSocialLoginMigrationVO.C2SSetPasswordForSocialLoginMigrationVO(this.pass1.text));
    } else {
      this.showError("error_password_invalid");
    }
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.showError = function (__s17param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleDarkOkDialog.CastleDarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("generic_alert_warning", __s17param0));
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.onSPSLMSArrived = function (__s19param0) {
    if (__s19param0.params[0] == __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleChangePasswordForSocialMigrationConfirmedDialog.CastleChangePasswordForSocialMigrationConfirmedDialog);
      this.hide();
    }
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, this.bindFunction(this.onSPSLMSArrived));
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.hideLoaded = function (__s22param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
    this.pass1.searchField.keyUp.remove(this.bindFunction(this.onKeyUp));
    this.pass2.searchField.keyUp.remove(this.bindFunction(this.onKeyUp));
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      switch (__s24param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.changePassword();
          break;
        case this.dialogDisp.cbx_showPass:
          this.changePasswordVisibility();
      }
    }
  };
  CastleChangePasswordForSocialMigrationDialog.prototype.changePasswordVisibility = function () {
    this.checkBoxCompPassVisible.toggleSelected();
    this.pass1.searchField.displayAsPassword = !this.checkBoxCompPassVisible.isSelected;
    this.pass2.searchField.displayAsPassword = !this.checkBoxCompPassVisible.isSelected;
  };
  CastleChangePasswordForSocialMigrationDialog.__initialize_static_members = function () {
    CastleChangePasswordForSocialMigrationDialog.NAME = "CastleChangePasswordForSocialMigration";
  };
  return CastleChangePasswordForSocialMigrationDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleChangePasswordForSocialMigrationDialog = __s0local0;
var __dep_export_C2SSetPasswordForSocialLoginMigrationVO = require("gge-module:export_C2SSetPasswordForSocialLoginMigrationVO");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleChangePasswordForSocialMigrationConfirmedDialog = require("gge-module:export_CastleChangePasswordForSocialMigrationConfirmedDialog");
var __dep_export_SelectInputFieldComponent = require("gge-module:export_SelectInputFieldComponent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleDarkOkDialog = require("gge-module:export_CastleDarkOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
