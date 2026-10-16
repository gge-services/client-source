Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AccountDeletionTrackingEvent = require("gge-module:export_AccountDeletionTrackingEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleDeleteAccountMicroservice = require("gge-module:export_CastleDeleteAccountMicroservice");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleDeleteAccountDialog() {
    return __s1param0.call(this, CastleDeleteAccountDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDeleteAccountDialog, __s1param0);
  CastleDeleteAccountDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_right, this.dialogDisp.btn_left], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._ibtnLeft = this.textFieldManager.registerTextField(this.dialogDisp.btn_left.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._ibtnRight = this.textFieldManager.registerTextField(this.dialogDisp.btn_right.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._ibtnLeft.autoFitToBounds = true;
    this._ibtnRight.autoFitToBounds = true;
  };
  CastleDeleteAccountDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [__dep_export_AccountDeletionTrackingEvent.AccountDeletionTrackingEvent.ACCOUNT_DELETION_POPUP]);
    } else {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [__dep_export_AccountDeletionTrackingEvent.AccountDeletionTrackingEvent.DELETION_INITIALIZATION]);
    }
    this.updateElements();
  };
  CastleDeleteAccountDialog.prototype.updateElements = function () {
    var __s11local0;
    var __s11local1;
    var __s11local2;
    var __s11local3;
    var __s11local4;
    if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
      __s11local0 = "dialog_deleteAccount_initiated_popup_title";
      __s11local1 = "dialog_deleteAccount_initiated_popup_description";
      __s11local2 = "abort";
      __s11local3 = "close";
      this._mainActionButton = this.dialogDisp.btn_right;
      __s11local4 = 3;
    } else {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
      __s11local0 = "dialog_deleteAccount_confirmation_popup_title";
      __s11local1 = "dialog_deleteAccount_confirmation_popup_description";
      __s11local2 = "abort";
      __s11local3 = "delete";
      this._mainActionButton = this.dialogDisp.btn_left;
      __s11local4 = 5;
    }
    this.updateButtonLabels(__s11local3, __s11local2);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._mainActionButton, false);
    __dep_exact_608de47b6498f9b0.TweenLite.delayedCall(__s11local4, this.bindFunction(this.enableDeleteButton));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s11local0)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s11local1));
  };
  CastleDeleteAccountDialog.prototype.updateButtonLabels = function (__s15param0, __s15param1) {
    this._ibtnLeft.text = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s15param0);
    this._ibtnRight.text = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s15param1);
  };
  CastleDeleteAccountDialog.prototype.enableDeleteButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._mainActionButton, true);
  };
  CastleDeleteAccountDialog.prototype.updateRemainingTime = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_deleteAccount_initiated_popup_description", [__dep_export_CastleModel.CastleModel.deleteAccountData.getDateForDelete()]));
  };
  CastleDeleteAccountDialog.prototype.onTimeUpdate = function (__s21param0 = null) {
    if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      this.updateRemainingTime();
    } else {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    }
  };
  CastleDeleteAccountDialog.prototype.onClick = function (__s25param0) {
    __s1param0.prototype.onClick.call(this, __s25param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      if (__s25param0.target == this._mainActionButton) {
        if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [__dep_export_AccountDeletionTrackingEvent.AccountDeletionTrackingEvent.ACCOUNT_DELETION_CANCEL]);
          this.abortDeletion();
        } else {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [__dep_export_AccountDeletionTrackingEvent.AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CONFIRM]);
          this.deleteAccount();
        }
      } else {
        if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [__dep_export_AccountDeletionTrackingEvent.AccountDeletionTrackingEvent.ACCOUNT_DELETION_OK]);
        } else {
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION, [__dep_export_AccountDeletionTrackingEvent.AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CANCEL]);
        }
        this.hide();
      }
    }
  };
  CastleDeleteAccountDialog.prototype.deleteAccount = function () {
    if (!__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.deleteAccount();
      this.showLoadingPanel();
    }
    this.hide();
  };
  CastleDeleteAccountDialog.prototype.abortDeletion = function () {
    if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      __dep_export_CastleDeleteAccountMicroservice.CastleDeleteAccountMicroservice.Instance.abortDeletion();
      this.showLoadingPanel();
    }
    this.hide();
  };
  CastleDeleteAccountDialog.prototype.showLoadingPanel = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  CastleDeleteAccountDialog.prototype.hideLoaded = function (__s42param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s42param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
  };
  CastleDeleteAccountDialog.__initialize_static_members = function () {
    CastleDeleteAccountDialog.NAME = "CastleDeleteAccount";
  };
  return CastleDeleteAccountDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleDeleteAccountDialog = __s0local0;
__s0local0.__initialize_static_members();
