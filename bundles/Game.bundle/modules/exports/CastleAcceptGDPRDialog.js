Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SConfirmTermsAndConditionVO = require("gge-module:export_C2SConfirmTermsAndConditionVO");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GDPRLinkComponent = require("gge-module:export_GDPRLinkComponent");
var __s0local0 = function (__s1param0) {
  function CastleAcceptGDPRDialog() {
    return __s1param0.call(this, CastleAcceptGDPRDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAcceptGDPRDialog, __s1param0);
  CastleAcceptGDPRDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_GDPR_confirmationDialog_button"));
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.linkComponent = new __dep_export_GDPRLinkComponent.GDPRLinkComponent(this.dialogDisp.mc_copy, "dialog_GDPR_confirmationDialog_copy1", "");
    this.linkComponent.update();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_GDPR_confirmationDialog_header")))).autoFitToBounds = true;
    if (__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial()) {
      __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.add(this.dialogDisp.btn_ok);
    }
  };
  CastleAcceptGDPRDialog.prototype.hideLoaded = function (__s8param0 = null) {
    this.linkComponent.dispose();
    __s1param0.prototype.hideLoaded.call(this, __s8param0);
  };
  CastleAcceptGDPRDialog.prototype.acceptGDPR = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SConfirmTermsAndConditionVO.C2SConfirmTermsAndConditionVO());
    this.hide();
  };
  CastleAcceptGDPRDialog.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.dialogDisp.btn_ok:
        this.acceptGDPR();
    }
  };
  CastleAcceptGDPRDialog.NAME = "CastleAcceptGDPR";
  return CastleAcceptGDPRDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAcceptGDPRDialog = __s0local0;
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
