Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTutorialEvent = require("gge-module:export_CastleTutorialEvent");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialStartFromQuestBookActionCommand() {
    var __s3local0 = this;
    __s3local0._questGiverID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialStartFromQuestBookActionCommand, __s1param0);
  TutorialStartFromQuestBookActionCommand.prototype.internalExecute = function () {
    this.filter.replace(__dep_export_CastleQuestDialog.CastleQuestDialog);
    if (this.layoutManager.tutorialPanel) {
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnQuests_copy", this._questGiverID, __dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape() ? __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT : __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_TOP_RIGHT);
    }
    this.showArrowOnQuestBookButton();
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleQuestDialog.CastleQuestDialog, this.bindFunction(this.showQuestArrowInQuestBook));
  };
  TutorialStartFromQuestBookActionCommand.prototype.showArrowOnQuestBookButton = function () {
    var __s8local0 = this.layoutManager.getPanel(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel);
    this.arrows.replace(__s8local0.disp.btn_questBook);
    this.blocker.replace(__s8local0.disp.btn_questBook);
  };
  TutorialStartFromQuestBookActionCommand.prototype.showQuestArrowInQuestBook = function () {
    this.trackStep(this.getQuestBookOpenedTrackingID());
    this.layoutManager.tutorialPanel.showWithText("tut_selectQuest_copy", this._questGiverID, __dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape() ? __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_BOTTOM_RIGHT : __dep_export_CastleTutorialPanel.CastleTutorialPanel.POS_TOP_RIGHT);
    var __s10local0 = this.layoutManager.getDialog(__dep_export_CastleQuestDialog.CastleQuestDialog);
    this.arrows.replace(__s10local0.tutorialRecommendedQuest.disp.headerMC, false, true, 1, new __s0local0(0, 35));
    this.blocker.replace(__s10local0.tutorialRecommendedQuest.disp.headerMC);
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleTutorialEvent.CastleTutorialEvent.QUEST_INFO_SHOWN, this.bindFunction(this.onShowQuestInfo));
  };
  TutorialStartFromQuestBookActionCommand.prototype.onShowQuestInfo = function (__s12param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleTutorialEvent.CastleTutorialEvent.QUEST_INFO_SHOWN, this.bindFunction(this.onShowQuestInfo));
    this.trackStep(this.getQuestInfoOpenedTrackingID());
    this.layoutManager.tutorialPanel.hide();
    this.handleUntilPlayerClickedOnShowMe();
  };
  TutorialStartFromQuestBookActionCommand.prototype.handleUntilPlayerClickedOnShowMe = function () {
    var __s14local0 = this.getDialogDisp(__dep_export_CastleQuestDialog.CastleQuestDialog);
    this.arrows.replace(__s14local0.mc_questInfo.condition0.btn_showMe, true, true, 1, new __s0local0(15, -8));
    this.blocker.replace(__s14local0.mc_questInfo.condition0.btn_showMe);
  };
  TutorialStartFromQuestBookActionCommand.prototype.getQuestInfoOpenedTrackingID = function () {
    return "please override the getQuestInfoOpenedTrackingID method";
  };
  TutorialStartFromQuestBookActionCommand.prototype.getQuestBookOpenedTrackingID = function () {
    return "please override the getQuestBookOpenedTrackingID method";
  };
  return TutorialStartFromQuestBookActionCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialStartFromQuestBookActionCommand = __s0local1;
var __dep_export_CastleQuestDialog = require("gge-module:export_CastleQuestDialog");
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_export_CastleTutorialPanel = require("gge-module:export_CastleTutorialPanel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
