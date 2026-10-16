Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function TutorialOpenQuestbookCommand() {
    var __s3local0 = this;
    __s3local0.timeoutId = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialOpenQuestbookCommand, __s1param0);
  TutorialOpenQuestbookCommand.prototype.internalExecute = function () {
    this.triggerQuestBookHint();
  };
  TutorialOpenQuestbookCommand.prototype.triggerQuestBookHint = function () {
    var __s7local0 = this;
    if (__dep_export_CastleModel.CastleModel.userData.level >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.TUTORIAL_END) {
      this.finishStep();
    } else if (!(this.timeoutId > -1)) {
      this.timeoutId = window.setInterval(function () {
        if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isThereADialog) {
          window.clearInterval(__s7local0.timeoutId);
          __s7local0.timeoutId = -1;
          if (__s7local0.layoutManager.isDialogVisibleByName(__dep_export_CastleChestDialog.CastleChestDialog)) {
            __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogHide(__dep_export_CastleChestDialog.CastleChestDialog, __s7local0.bindFunction(__s7local0.hintAtQuestBook));
          } else if (__s7local0.layoutManager.isDialogVisibleByName(__dep_export_CastlePrivateOfferDecorationDialog.CastlePrivateOfferDecorationDialog)) {
            __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogHide(__dep_export_CastlePrivateOfferDecorationDialog.CastlePrivateOfferDecorationDialog, __s7local0.bindFunction(__s7local0.hintAtQuestBook));
          } else {
            __s7local0.hintAtQuestBook();
          }
        }
      }, 250);
    }
  };
  TutorialOpenQuestbookCommand.prototype.hintAtQuestBook = function () {
    var __s17local0 = this;
    try {
      var __s17local1 = this.layoutManager.getPanel(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel).disp.btn_questBook;
      __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.replace(__dep_export_CastleQuestDialog.CastleQuestDialog);
      __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.add(__dep_export_CastlePrivateOfferDecorationDialog.CastlePrivateOfferDecorationDialog);
      __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.add(__dep_export_CastleChestDialog.CastleChestDialog);
      __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.add(__dep_export_CastleYesNoOrangeWarningDialog.CastleYesNoOrangeWarningDialog);
      __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.replace(__s17local1);
      __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.replace(__s17local1);
      __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.replace(__s17local1);
      __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogShow(__dep_export_CastleQuestDialog.CastleQuestDialog, this.bindFunction(this.removeQuestBookHintTimeout));
      __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogShow(__dep_export_CastleChestDialog.CastleChestDialog, function () {
        __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.replace(__dep_export_CastleChestDialog.CastleChestDialog);
        __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
        __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
        __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.clear();
        __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogHide(__dep_export_CastleChestDialog.CastleChestDialog, __s17local0.bindFunction(__s17local0.hintAtQuestBook));
      });
      __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogShow(__dep_export_CastlePrivateOfferDecorationDialog.CastlePrivateOfferDecorationDialog, function () {
        __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.replace(__dep_export_CastlePrivateOfferDecorationDialog.CastlePrivateOfferDecorationDialog);
        __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.add(__dep_export_CastleYesNoOrangeWarningDialog.CastleYesNoOrangeWarningDialog);
        __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
        __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
        __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.clear();
        __dep_export_CastleTutorialController.CastleTutorialController.getInstance().waitForDialogHide(__dep_export_CastlePrivateOfferDecorationDialog.CastlePrivateOfferDecorationDialog, __s17local0.bindFunction(__s17local0.hintAtQuestBook));
      });
    } catch (__s24local0) {
      __dep_exact_9e901e8e2483a22f.debug(__s24local0.stack);
    }
  };
  TutorialOpenQuestbookCommand.prototype.removeQuestBookHintTimeout = function () {
    if (this.timeoutId > -1) {
      window.clearInterval(this.timeoutId);
      this.timeoutId = -1;
    }
    this.finishStep();
  };
  TutorialOpenQuestbookCommand.prototype.finishStep = function () {
    __s1param0.prototype.finishStep.call(this);
    this.finishTriggerQuest();
  };
  return TutorialOpenQuestbookCommand;
}(require("gge-module:export_TutorialBasicActionCommand").TutorialBasicActionCommand);
exports.TutorialOpenQuestbookCommand = __s0local0;
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
var __dep_export_CastleYesNoOrangeWarningDialog = require("gge-module:export_CastleYesNoOrangeWarningDialog");
var __dep_export_CastleChestDialog = require("gge-module:export_CastleChestDialog");
var __dep_export_CastlePrivateOfferDecorationDialog = require("gge-module:export_CastlePrivateOfferDecorationDialog");
var __dep_export_CastleQuestDialog = require("gge-module:export_CastleQuestDialog");
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_CastleTutorialController = require("gge-module:export_CastleTutorialController");
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
