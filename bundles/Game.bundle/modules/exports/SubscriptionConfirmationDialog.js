Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function SubscriptionConfirmationDialog() {
    return __s1param0.call(this, SubscriptionConfirmationDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SubscriptionConfirmationDialog, __s1param0);
  SubscriptionConfirmationDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptionConfirmation_header")));
  };
  SubscriptionConfirmationDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateInfos();
  };
  SubscriptionConfirmationDialog.prototype.updateInfos = function () {
    var __s9local0 = this.dialogProperties.messageVO.getPackageType();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s9local0.nameTextId));
    this.dialogDisp.mc_teaser.gotoAndStop(this.getTeaserFrame());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.getDescriptionTextId(), [__dep_exact_92d05af59ee2ff30.Localize.text(__s9local0.nameTextId), this.dialogProperties.messageVO.allianceSubscribersAtThatTime]));
  };
  SubscriptionConfirmationDialog.prototype.getTeaserFrame = function () {
    switch (this.dialogProperties.messageVO.getPackageType()) {
      case __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PLAYER:
        return 1;
      case __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.PREMIUM:
        return 2;
      case __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE:
        return 3;
      default:
        return 1;
    }
  };
  SubscriptionConfirmationDialog.prototype.getDescriptionTextId = function () {
    switch (this.dialogProperties.messageVO.getPackageType()) {
      case __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.ALLIANCE:
        if (this.dialogProperties.messageVO.allianceSubscribersAtThatTime == 1) {
          return "dialog_subscriptionConfirmation_allianceSingular_desc";
        } else {
          return "dialog_subscriptionConfirmation_alliance_desc";
        }
      default:
        return "dialog_subscriptionConfirmation_player_desc";
    }
  };
  SubscriptionConfirmationDialog.prototype.onClick = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      __s1param0.prototype.onClick.call(this, __s19param0);
      switch (__s19param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(SubscriptionConfirmationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionConfirmationDialog.NAME = "SubscriptionConfirmation";
  return SubscriptionConfirmationDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SubscriptionConfirmationDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
