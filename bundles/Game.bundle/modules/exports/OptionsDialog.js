Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SGetNewsletterSubscriptionStatusVO = require("gge-module:export_C2SGetNewsletterSubscriptionStatusVO");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimplePopoverComponent = require("gge-module:export_SimplePopoverComponent");
var __dep_export_SimplePopoverConfig = require("gge-module:export_SimplePopoverConfig");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_OptionsDialogAccountDetails = require("gge-module:export_OptionsDialogAccountDetails");
var __dep_export_OptionsDialogOptions = require("gge-module:export_OptionsDialogOptions");
var __dep_export_OptionsDialogSublayerAccordion = require("gge-module:export_OptionsDialogSublayerAccordion");
var __dep_export_OptionsDialogSublayerAccordionProperties = require("gge-module:export_OptionsDialogSublayerAccordionProperties");
var __s0local0 = function (__s1param0) {
  function OptionsDialog() {
    return __s1param0.call(this, OptionsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialog, __s1param0);
  OptionsDialog.prototype.initLoaded = function (__s5param0) {
    var __s5local0 = this;
    if (__s5param0 === undefined) {
      __s5param0 = null;
    }
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_options, this.dialogDisp.btn_accountDetails], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    var __s5local1 = new __dep_export_OptionsDialogSublayerAccordion.OptionsDialogSublayerAccordion(this.dialogDisp.tab_accordion);
    this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayerSwitcher.autoUpdateTabs = false;
    this.sublayerSwitcher.add(OptionsDialog.TAB_OPTIONS, this.dialogDisp.btn_options, __s5local1);
    this.sublayerSwitcher.add(OptionsDialog.TAB_ACCOUNT_DETAILS, this.dialogDisp.btn_accountDetails, __s5local1);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_options.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_options.mc_selected.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accountDetails.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_accountManagement_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_accountDetails.mc_selected.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_accountManagement_title")));
    var __s5local2 = new __dep_export_SimplePopoverConfig.SimplePopoverConfig("StatusPopover");
    this._popoverComponent = new __dep_export_SimplePopoverComponent.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(__s5local2);
    this._popoverComponent.doWhenLoaded(function () {
      var __s8local0 = __s5local0._popoverComponent.getAssetDisp();
      __s8local0.mc_icon.gotoAndStop(3);
      __s5local0.textFieldManager.registerTextField(__s8local0.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_changePassword_done"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    });
  };
  OptionsDialog.prototype.showLoaded = function (__s10param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s10param0);
    this.sublayerSwitcher.switchTo(this.dialogProperties.tabID);
    this.sublayerSwitcher.show();
    this.sublayerSwitcher.addOnSwitchedListener(this.bindFunction(this.onSwitched));
    this.onSwitched();
    this._popoverComponent.onShow();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetNewsletterSubscriptionStatusVO.C2SGetNewsletterSubscriptionStatusVO());
  };
  OptionsDialog.prototype.hideLoaded = function (__s12param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
    this.sublayerSwitcher.hide();
    this.sublayerSwitcher.removeOnSwitchedListener(this.bindFunction(this.onSwitched));
    this._popoverComponent.onHide();
  };
  OptionsDialog.prototype.getSublayerProperties = function (__s14param0) {
    switch (__s14param0) {
      case OptionsDialog.TAB_OPTIONS:
        return new __dep_export_OptionsDialogSublayerAccordionProperties.OptionsDialogSublayerAccordionProperties(__s14param0, new __dep_export_OptionsDialogOptions.OptionsDialogOptions());
      default:
        return new __dep_export_OptionsDialogSublayerAccordionProperties.OptionsDialogSublayerAccordionProperties(__s14param0, new __dep_export_OptionsDialogAccountDetails.OptionsDialogAccountDetails(this.dialogProperties.shownewsletter));
    }
  };
  OptionsDialog.prototype.onSwitched = function () {
    var __s17local0 = this.sublayerSwitcher.activeTab == OptionsDialog.TAB_OPTIONS ? "dialog_options_title" : "dialog_options_accountManagement_title";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s17local0)));
    this.dialogDisp.btn_options.mc_selected.visible = this.sublayerSwitcher.activeTab == OptionsDialog.TAB_OPTIONS;
    this.dialogDisp.btn_accountDetails.mc_selected.visible = this.sublayerSwitcher.activeTab == OptionsDialog.TAB_ACCOUNT_DETAILS;
  };
  OptionsDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      switch (__s19param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(OptionsDialog.prototype, "popoverComponent", {
    get: function () {
      return this._popoverComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialog.NAME = "CastleOptionsExternal_AUG2026";
  OptionsDialog.TAB_OPTIONS = 0;
  OptionsDialog.TAB_ACCOUNT_DETAILS = 1;
  return OptionsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.OptionsDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
