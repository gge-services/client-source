Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AccountDeletionActiveSubscribtionDialog = require("gge-module:export_AccountDeletionActiveSubscribtionDialog");
var __dep_export_AOptionsDialogCollapsibleItem = require("gge-module:export_AOptionsDialogCollapsibleItem");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDeleteAccountDialog = require("gge-module:export_CastleDeleteAccountDialog");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDeleteAccountMicroservice = require("gge-module:export_CastleDeleteAccountMicroservice");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __s0local0 = function (__s1param0) {
  function OptionsDialogDeleteAccountItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleOptions_DeleteAccountItem"))(), __s3param0) || this;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.txt_default, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_deleteAccount_title"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0._headerMC.mc_open.txt_selected, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_deleteAccount_title"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.contentMC.mcDeleteAccount, 1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogDeleteAccountItem, __s1param0);
  OptionsDialogDeleteAccountItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.updateTexts();
    __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.onDeleteAccountSignal.add(this.bindFunction(this.updateTexts));
    __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.onAbortDeleteSignal.add(this.bindFunction(this.updateTexts));
  };
  OptionsDialogDeleteAccountItem.prototype.updateTexts = function () {
    var __s7local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_deleteAccount_desc");
    var __s7local1 = "dialog_options_deleteAccount_button";
    if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      __s7local1 = "dialog_options_cancelDeletion_button";
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
      __s7local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_deleteAccount_initiated_desc", [__dep_export_CastleModel.CastleModel.deleteAccountData.getDateForDelete()]);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.contentMC.txt_description, __s7local0, new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s7local2 = new __dep_exact_92d05af59ee2ff30.HTMLTextCustomVO();
    __s7local2.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s7local1));
    var __s7local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s7local4 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    var __s7local5 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(__dep_export_ClientConstColor.ClientConstColor.DEFAULT_SUBSCRIPTION, __dep_exact_9e901e8e2483a22f.GGSTextDecoration.UNDERLINE);
    __s7local2.linkFormats = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatsVO(__s7local3, __s7local4, __s7local5);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.contentMC.mcDeleteAccount.txt_copy, __s7local2, new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
  };
  OptionsDialogDeleteAccountItem.prototype.onTimeUpdate = function (__s10param0 = null) {
    if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      this.updateRemainingTime();
    } else {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    }
  };
  OptionsDialogDeleteAccountItem.prototype.updateRemainingTime = function () {
    var __s14local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_options_deleteAccount_initiated_desc", [__dep_export_CastleModel.CastleModel.deleteAccountData.getDateForDelete()]);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.contentMC.txt_description, __s14local0, new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
  };
  OptionsDialogDeleteAccountItem.prototype.onDeleteClick = function () {
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isAnyPackageActive()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AccountDeletionActiveSubscribtionDialog.AccountDeletionActiveSubscribtionDialog);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDeleteAccountDialog.CastleDeleteAccountDialog);
    }
  };
  OptionsDialogDeleteAccountItem.prototype.onClick = function (__s20param0) {
    __s1param0.prototype.onClick.call(this, __s20param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      switch (__s20param0.target) {
        case this.contentMC.mcDeleteAccount:
          this.onDeleteClick();
      }
    }
  };
  OptionsDialogDeleteAccountItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.onDeleteAccountSignal.remove(this.bindFunction(this.updateTexts));
    __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.onAbortDeleteSignal.remove(this.bindFunction(this.updateTexts));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
  };
  return OptionsDialogDeleteAccountItem;
}(__dep_export_AOptionsDialogCollapsibleItem.AOptionsDialogCollapsibleItem);
exports.OptionsDialogDeleteAccountItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
