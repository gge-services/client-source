Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function OptionsDialogAccountInfoItemEmail(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null, __s3param4 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleOptions_AccountDetailItemEmail"))()) || this;
    __s3local0._onButton2 = __s3param3;
    __s3local0._onGoto = __s3param4;
    __s3local0._headerMC.btn_button2.visible = !!__s3local0._onButton2;
    __s3local0._headerMC.mc_ex1.visible = __dep_export_CastleModel.CastleModel.playerEmailData.isMailState_MailChangePending;
    __s3local0._headerMC.mc_ex1.toolTipText = "dialog_options_accountDetails_changeEmail_inProgress_tooltip";
    __s3local0._headerMC.btn_goto.visible = !!__s3local0._onGoto;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0._headerMC.btn_button2, __s3local0._headerMC.btn_goto], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogAccountInfoItemEmail, __s1param0);
  OptionsDialogAccountInfoItemEmail.prototype.showExclamation1 = function (__s5param0) {
    this._headerMC.mc_ex1.visible = __s5param0;
  };
  OptionsDialogAccountInfoItemEmail.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this._headerMC.btn_button2:
          if (this._onButton2) {
            this._onButton2();
          }
          break;
        case this._headerMC.btn_goto:
          if (this._onGoto) {
            this._onGoto();
          }
      }
    }
  };
  OptionsDialogAccountInfoItemEmail.prototype.enableButtons = function (__s13param0) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._headerMC.btn_goto, __s13param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._headerMC.btn_button2, __s13param0);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._headerMC.btn_action, __s13param0);
    if (!__s13param0) {
      this._headerMC.btn_goto.toolTipText = this._headerMC.btn_button2.toolTipText = this._headerMC.btn_action.toolTipText = "dialog_options_accountDetails_changeEmail_inProgress_tooltip";
    }
  };
  OptionsDialogAccountInfoItemEmail.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._onButton2 = null;
    this._onGoto = null;
  };
  OptionsDialogAccountInfoItemEmail.prototype.showButton2 = function (__s18param0, __s18param1 = 1, __s18param2 = null) {
    this.showButton(this._headerMC.btn_button2, __s18param0, __s18param1, __s18param2);
  };
  OptionsDialogAccountInfoItemEmail.prototype.showButtonGoto = function (__s20param0, __s20param1 = 1, __s20param2 = null) {
    this.showButton(this._headerMC.btn_goto, __s20param0, __s20param1, __s20param2);
  };
  return OptionsDialogAccountInfoItemEmail;
}(require("gge-module:export_OptionsDialogAccountInfoItem").OptionsDialogAccountInfoItem);
exports.OptionsDialogAccountInfoItemEmail = __s0local0;
