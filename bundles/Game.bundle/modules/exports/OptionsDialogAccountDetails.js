Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SResendEmail = require("gge-module:export_C2SResendEmail");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_AOptionsDialogContentCreator = require("gge-module:export_AOptionsDialogContentCreator");
var __dep_export_CastleChangePlayerEmailCancelDialog = require("gge-module:export_CastleChangePlayerEmailCancelDialog");
var __dep_export_OptionsDialogAccountInfoItem = require("gge-module:export_OptionsDialogAccountInfoItem");
var __dep_export_OptionsDialogAccountInfoItemEmail = require("gge-module:export_OptionsDialogAccountInfoItemEmail");
var __dep_export_OptionsDialogChangePasswordItem = require("gge-module:export_OptionsDialogChangePasswordItem");
var __dep_export_OptionsDialogDeleteAccountItem = require("gge-module:export_OptionsDialogDeleteAccountItem");
var __dep_export_OptionsDialogFacebookItem = require("gge-module:export_OptionsDialogFacebookItem");
var __dep_export_OptionsDialogNewsletterItem = require("gge-module:export_OptionsDialogNewsletterItem");
var __dep_export_OptionsDialogSaveAccountItem = require("gge-module:export_OptionsDialogSaveAccountItem");
var __dep_export_CastleChangePlayerNameDialog = require("gge-module:export_CastleChangePlayerNameDialog");
var __dep_export_CastleChangePlayerNameDialogProperties = require("gge-module:export_CastleChangePlayerNameDialogProperties");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleChangePlayerEmailDialog = require("gge-module:export_CastleChangePlayerEmailDialog");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleWebShopAccountIDMicroservice = require("gge-module:export_CastleWebShopAccountIDMicroservice");
var __dep_export_OptionsDialogAccountIdInfoItem = require("gge-module:export_OptionsDialogAccountIdInfoItem");
var __s0local0 = function (__s1param0) {
  function OptionsDialogAccountDetails(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._items = [];
    __s3local0._showNewsletter = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogAccountDetails, __s1param0);
  OptionsDialogAccountDetails.prototype.createItems = function () {
    var __s5local0 = this;
    this._nameInfoItem = new __dep_export_OptionsDialogAccountInfoItem.OptionsDialogAccountInfoItem(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountManagement_playerName_title"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onEditName));
    var __s5local1 = __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    this._nameInfoItem.showActionButton(!__s5local1.isOnTemporaryServer && !__s5local1.isOnAllianceBattleGroundServer);
    this._accountIdInfoItem = new __dep_export_OptionsDialogAccountIdInfoItem.OptionsDialogAccountIdInfoItem(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountManagement_accountID_title"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onCopyInfo), __dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Verified);
    this._accountIdInfoItem.showActionButton(__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Verified, 3);
    this._accountIdInfoItem.setActionButtonToolTipText("dialog_options_accountDetails_copy_tooltip");
    __dep_export_CastleWebShopAccountIDMicroservice.CastleWebShopAccountIDMicroservice.Instance.onAccountIdRetrievedSignal.removeAll();
    if (__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Verified) {
      __dep_export_CastleWebShopAccountIDMicroservice.CastleWebShopAccountIDMicroservice.Instance.onAccountIdRetrievedSignal.add(this.bindFunction(this.onAccountIdRetrieved));
      __dep_export_CastleWebShopAccountIDMicroservice.CastleWebShopAccountIDMicroservice.Instance.getAccountID();
    } else {
      this._accountIdInfoItem.setText(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountManagement_accountID_missingEmail_desc"));
    }
    this._serverInfoItem = new __dep_export_OptionsDialogAccountInfoItem.OptionsDialogAccountInfoItem(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountManagement_playerName_desc"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO);
    this._languageInfoItem = new __dep_export_OptionsDialogAccountInfoItem.OptionsDialogAccountInfoItem(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountManagement_language_desc"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onEditLanguage));
    this._languageInfoItem.showActionButton(false);
    this._emailInfoItem = new __dep_export_OptionsDialogAccountInfoItemEmail.OptionsDialogAccountInfoItemEmail(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountDetails_email_desc"), OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO, this.bindFunction(this.onEditEmail), this.bindFunction(this.onSendAgainEmail), this.bindFunction(this.onGotoEmail));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.GPI_UPDATE, this.bindFunction(this.onEmailStatusArrived));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RMC_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onEmailStatusArrived));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.GPI_UPDATE, this.bindFunction(this.onEmailStatusArrived));
    var __s5local2 = new __dep_export_OptionsDialogSaveAccountItem.OptionsDialogSaveAccountItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var __s5local3 = new __dep_export_OptionsDialogNewsletterItem.OptionsDialogNewsletterItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var __s5local4 = new __dep_export_OptionsDialogChangePasswordItem.OptionsDialogChangePasswordItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var __s5local5 = new __dep_export_OptionsDialogFacebookItem.OptionsDialogFacebookItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    var __s5local6 = new __dep_export_OptionsDialogDeleteAccountItem.OptionsDialogDeleteAccountItem(OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY);
    this._items = [];
    this._items.push(this._nameInfoItem);
    this._items.push(this._accountIdInfoItem);
    this._items.push(this._serverInfoItem);
    this._items.push(this._languageInfoItem);
    this._items.push(this._emailInfoItem);
    this._items.push(__s5local2);
    this._items.push(__s5local3);
    this._items.push(__s5local4);
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      this._items.push(__s5local5);
    }
    if (!__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer) {
      this._items.push(__s5local6);
    }
    this._items.forEach(function (__s11param0) {
      return __s11param0.updateSignal.add(__s5local0.bindFunction(__s5local0.onStateChange));
    });
    this.updateItems();
    if (this._showNewsletter) {
      [__s5local2, __s5local3].forEach(function (__s14param0) {
        return __s14param0.preExpand();
      });
    }
    return this._items;
  };
  OptionsDialogAccountDetails.prototype.updateItems = function () {
    this.updateAccountInfo();
    this._items.forEach(function (__s18param0) {
      return __s18param0.updateItem();
    });
    this.accordionComponent.onItemChangeComplete();
  };
  OptionsDialogAccountDetails.prototype.updateAccountInfo = function () {
    this._nameInfoItem.setText(__dep_export_CastleModel.CastleModel.userData.userName);
    if (__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Verified) {
      this._accountIdInfoItem.setText(__dep_export_CastleModel.CastleModel.webShopAccountIdData.accountID || "");
    } else {
      this._accountIdInfoItem.setText(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_accountManagement_accountID_missingEmail_desc"));
    }
    this._serverInfoItem.setText(__dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId));
    this._languageInfoItem.setText(__dep_exact_92d05af59ee2ff30.Localize.text("language_native_" + __dep_exact_9e901e8e2483a22f_1.EnvironmentProvider.instance.current.data.languageCode));
    this._emailInfoItem.setText(this.getEmailText());
    if (this.showEditMailButton()) {
      this._emailInfoItem.showExclamation1(this.eMailChangeInProgress());
      this._emailInfoItem.showActionButton(true, 1, this.eMailChangeInProgress() ? "dialog_options_accountDetails_changeEmail_stopChange_tooltip" : "dialog_options_accountDetails_changeEmail_tooltip");
      this._emailInfoItem.showButtonGoto(false);
    } else {
      this._emailInfoItem.showActionButton(false);
      this._emailInfoItem.showButtonGoto(__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Unregistered, 1, "dialog_options_accountDetails_enterEmail_tooltip");
    }
    var __s20local0 = __dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Unverified;
    this._emailInfoItem.showButton2(__s20local0, 2, "dialog_options_accountDetails_sendAgain_tooltip");
    this._emailInfoItem.enableButtons(!__dep_export_CastleModel.CastleModel.playerEmailData.api_unavailable_in_process);
  };
  OptionsDialogAccountDetails.prototype.onStateChange = function () {
    this.updateItems();
  };
  OptionsDialogAccountDetails.prototype.onEditName = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangePlayerNameDialog.CastleChangePlayerNameDialog, new __dep_export_CastleChangePlayerNameDialogProperties.CastleChangePlayerNameDialogProperties(__dep_export_CastleModel.CastleModel.changePlayerNameData.getCurrentC2Cost));
  };
  OptionsDialogAccountDetails.prototype.onCopyInfo = function () {
    __dep_exact_81dacdf05bd32292.Clipboard.generalClipboard.clear();
    __dep_exact_81dacdf05bd32292.Clipboard.generalClipboard.setData(__dep_exact_81dacdf05bd32292.ClipboardFormats.TEXT_FORMAT, __dep_export_CastleModel.CastleModel.webShopAccountIdData.accountID || "", false);
  };
  OptionsDialogAccountDetails.prototype.onAccountIdRetrieved = function () {
    this._accountIdInfoItem.setText(__dep_export_CastleModel.CastleModel.webShopAccountIdData.accountID || "");
  };
  OptionsDialogAccountDetails.prototype.onEditLanguage = function () {};
  OptionsDialogAccountDetails.prototype.onEditEmail = function () {
    if (this.eMailChangeInProgress()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangePlayerEmailCancelDialog.CastleChangePlayerEmailCancelDialog);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChangePlayerEmailDialog.CastleChangePlayerEmailDialog);
    }
  };
  OptionsDialogAccountDetails.prototype.onEmailStatusArrived = function (__s40param0) {
    this.updateAccountInfo();
  };
  OptionsDialogAccountDetails.prototype.showEditMailButton = function () {
    return !__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Unregistered;
  };
  OptionsDialogAccountDetails.prototype.eMailChangeInProgress = function () {
    return __dep_export_CastleModel.CastleModel.playerEmailData.isMailState_MailChangePending;
  };
  OptionsDialogAccountDetails.prototype.getEmailText = function () {
    if (__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_MailChangePending) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newEmail_changePending_desc", [__dep_export_CastleModel.CastleModel.playerEmailData.newEmail]);
    } else if (__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Unverified) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_newEmail_verificationPending_desc", [__dep_export_CastleModel.CastleModel.userData.email]);
    } else {
      return __dep_export_CastleModel.CastleModel.userData.email || "-";
    }
  };
  OptionsDialogAccountDetails.prototype.onSendAgainEmail = function () {
    __dep_exact_9e901e8e2483a22f_2.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SResendEmail.C2SResendEmail(__dep_export_CastleModel.CastleModel.playerEmailData.isMailState_Unverified ? __dep_exact_26a421b704832cff.PlayerConst.RESEND_MAIL_ACCOUNT_VERIFICATION : 1));
  };
  OptionsDialogAccountDetails.prototype.onGotoEmail = function () {
    var __s53local0 = this._items.find(function (__s55param0) {
      return __s55param0 instanceof __dep_export_OptionsDialogSaveAccountItem.OptionsDialogSaveAccountItem;
    });
    if (__s53local0 && __s53local0.isVisible) {
      __s53local0.expand(true, true, true);
      this.accordionComponent.scrollToValue(__s53local0.disp.y);
    }
  };
  OptionsDialogAccountDetails.__initialize_static_members = function () {
    OptionsDialogAccountDetails.ITEM_PROPERTIES_ACCOUNT_INFO = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 2, 0, 0));
    OptionsDialogAccountDetails.ITEM_PROPERTIES_CATEGORY = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(8, 0, 0, 0));
  };
  return OptionsDialogAccountDetails;
}(__dep_export_AOptionsDialogContentCreator.AOptionsDialogContentCreator);
exports.OptionsDialogAccountDetails = __s0local0;
__s0local0.__initialize_static_members();
