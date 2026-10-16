Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __dep_export_OptionsDialogProperties = require("gge-module:export_OptionsDialogProperties");
var __s0local0 = function (__s1param0) {
  function StatusIconMailGiftComponent() {
    return __s1param0.call(this, "Btn_email_Hub", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_MAIL_GIFT) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconMailGiftComponent, __s1param0);
  StatusIconMailGiftComponent.prototype.setVisibilityLoaded = function () {
    if (this.mailReminderActive) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconMailGiftComponent.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.setTooltip("dialog_mailGiftReminder_title");
  };
  StatusIconMailGiftComponent.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_OptionsDialog.OptionsDialog, new __dep_export_OptionsDialogProperties.OptionsDialogProperties(__dep_export_OptionsDialog.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
  };
  StatusIconMailGiftComponent.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.VALIDATED_EMAIL, this.bindFunction(this.onValidatedEmail));
    this.controller.addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onValidatedEmail));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.MAIL_VERIFICATION_SENT, this.bindFunction(this.hideMailButton));
  };
  StatusIconMailGiftComponent.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.VALIDATED_EMAIL, this.bindFunction(this.onValidatedEmail));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.MAIL_VERIFICATION_SENT, this.bindFunction(this.hideMailButton));
    this.controller.removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onValidatedEmail));
  };
  Object.defineProperty(StatusIconMailGiftComponent.prototype, "mailReminderActive", {
    get: function () {
      return !__dep_export_CastleModel.CastleModel.userData.hasSentMailVerification && !__dep_export_CastleModel.CastleModel.userData.hasValidatedEmail && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_WELCOME_GIFT && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconMailGiftComponent.prototype.onValidatedEmail = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconMailGiftComponent.prototype.hideMailButton = function (__s21param0) {
    __dep_export_CastleModel.CastleModel.userData.hasSentMailVerification = true;
    this.setVisibility();
  };
  return StatusIconMailGiftComponent;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconMailGiftComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
