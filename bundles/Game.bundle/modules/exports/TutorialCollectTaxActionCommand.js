Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialCollectTaxActionCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialCollectTaxActionCommand, __s1param0);
  TutorialCollectTaxActionCommand.prototype.actionConditionValid = function () {
    return __dep_export_CastleModel.CastleModel.userData.level < 2;
  };
  TutorialCollectTaxActionCommand.prototype.internalExecute = function () {
    this.filter.allowNoDialogs();
    if (this.layoutManager.isInMyCastle) {
      this.showArrowOnTaxCollectButton();
    } else {
      this.tutorialController.waitForLayoutStateChangeFinished(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO, this.bindFunction(this.waitUntilPlayerSwitchToMainCastle));
    }
  };
  TutorialCollectTaxActionCommand.prototype.waitUntilPlayerSwitchToMainCastle = function () {
    this.showArrowOnTaxCollectButton();
  };
  TutorialCollectTaxActionCommand.prototype.showArrowOnTaxCollectButton = function () {
    var __s13local0 = this.getPanelDisp(__dep_export_CastleActionPanel.CastleActionPanel).mc_tax.comp_taxComponent.btn_tax;
    this.arrows.replace(__s13local0, true, false, 1, new __s0local0(15, 5));
    this.blocker.replace(__s13local0);
    this.filter.add(__dep_export_CastleCollectTaxStartDialog.CastleCollectTaxStartDialog);
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.TAX_ITEMS_FILLED, this.bindFunction(this.onShowCollectTaxStartDialog));
    this.layoutManager.tutorialPanel.showWithText("tut_tax_openTaxDialog_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
  };
  TutorialCollectTaxActionCommand.prototype.onShowCollectTaxStartDialog = function (__s15param0 = null) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleDialogEvent.CastleDialogEvent.TAX_ITEMS_FILLED, this.bindFunction(this.onShowCollectTaxStartDialog));
    this.trackStep("040_020_taxmenu_opened");
    this.layoutManager.tutorialPanel.showWithText("tut_tax_selectTaxType_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    var __s15local0 = this.getDialogDisp(__dep_export_CastleCollectTaxStartDialog.CastleCollectTaxStartDialog);
    this.arrows.replace(__s15local0.mc_taxList.item0.btn_collect, false, true);
    this.blocker.replace(__s15local0.mc_taxList.item0.btn_collect);
    this.filter.add(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog);
    this.layoutManager.getDialog(__dep_export_CastleCollectTaxStartDialog.CastleCollectTaxStartDialog).blockScrollList(true);
    for (var __s15local1 = 1; __s15local1 < 4; __s15local1++) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15local0.mc_taxList["item" + __s15local1].btn_collect, false);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15local0.mc_taxList.btn_down, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15local0.mc_taxList.btn_up, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15local0.btn_close, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15local0.mc_taxList.btn_slider, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s15local0.btn_bribe, false);
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = true;
    this.filter.add(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog);
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog, this.bindFunction(this.onStartTaxCollection));
  };
  TutorialCollectTaxActionCommand.prototype.onStartTaxCollection = function () {
    this.trackStep("040_030_time_selected");
    this.layoutManager.tutorialPanel.showWithText("tut_tax_waitForTax_copy", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER, __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT);
    this.showBlockerAndArrowsForTaxProgressDialog();
    this.tutorialController.waitForExternalDialogHide(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog, this.bindFunction(this.onTaxProgressDialogClosed));
  };
  TutorialCollectTaxActionCommand.prototype.showBlockerAndArrowsForTaxProgressDialog = function () {
    var __s21local0 = this.getDialogDisp(__dep_export_CastleCollectTaxProgressDialog.CastleCollectTaxProgressDialog);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s21local0.btn_collect, false);
    this.arrows.replace(__s21local0.btn_close, false, true);
    this.blocker.replace(__s21local0.btn_close);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s21local0.btn_help, false);
  };
  TutorialCollectTaxActionCommand.prototype.onTaxProgressDialogClosed = function () {
    this.trackStep("040_040_taxmenu_closed");
    this.filter.replace(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog);
    this.arrows.clear();
    this.blocker.clear();
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog, this.bindFunction(this.onLevelDialogOpened));
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().blockDialogs = false;
  };
  TutorialCollectTaxActionCommand.prototype.onLevelDialogOpened = function () {
    this.tutorialController.waitForExternalDialogHide(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog, this.bindFunction(this.finishStep));
  };
  TutorialCollectTaxActionCommand.prototype.finishStep = function () {
    this.trackStep("050_010_levelUp_2_confirmed");
    __s1param0.prototype.finishStep.call(this);
  };
  return TutorialCollectTaxActionCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialCollectTaxActionCommand = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleLevelUpDialog = require("gge-module:export_CastleLevelUpDialog");
var __dep_export_CastleCollectTaxProgressDialog = require("gge-module:export_CastleCollectTaxProgressDialog");
var __dep_export_CastleCollectTaxStartDialog = require("gge-module:export_CastleCollectTaxStartDialog");
var __dep_export_CastleTutorialPanel = require("gge-module:export_CastleTutorialPanel");
var __dep_export_CastleActionPanel = require("gge-module:export_CastleActionPanel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
