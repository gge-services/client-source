Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __s0local0 = function (__s1param0) {
  function AccountDeletionActiveSubscribtionDialog() {
    return __s1param0.call(this, AccountDeletionActiveSubscribtionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AccountDeletionActiveSubscribtionDialog, __s1param0);
  AccountDeletionActiveSubscribtionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
  };
  AccountDeletionActiveSubscribtionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_deleteAccount_initiated_popup_title")));
    this.dialogDisp.btn_close.visible = false;
    var __s7local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_deleteAccount_subscriptionActive_desc");
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isPackageActive(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PLAYER)) {
      __s7local0 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PLAYER.nameTextId);
    }
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isPackageActive(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PREMIUM)) {
      __s7local0 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PREMIUM.nameTextId);
    }
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isPackageActive(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE)) {
      __s7local0 += "\n" + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE.nameTextId);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__s7local0));
  };
  AccountDeletionActiveSubscribtionDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  AccountDeletionActiveSubscribtionDialog.__initialize_static_members = function () {
    AccountDeletionActiveSubscribtionDialog.NAME = "AccountDeletionActiveSubscribtion";
  };
  return AccountDeletionActiveSubscribtionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AccountDeletionActiveSubscribtionDialog = __s0local0;
__s0local0.__initialize_static_members();
