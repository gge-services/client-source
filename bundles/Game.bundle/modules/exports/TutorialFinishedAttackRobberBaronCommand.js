Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialFinishedAttackRobberBaronCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialFinishedAttackRobberBaronCommand, __s1param0);
  TutorialFinishedAttackRobberBaronCommand.prototype.onQuestConfirm = function () {
    this.clearBlockers();
    if (__dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().isDialogRegistered(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog)) {
      this.tutorialController.waitForExternalDialogShow(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog, this.bindFunction(this.onLevelDialogOpened));
    } else if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isDialogVisibleByName(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog)) {
      this.onLevelDialogOpened();
    } else {
      this.finishStep();
    }
  };
  TutorialFinishedAttackRobberBaronCommand.prototype.onLevelDialogOpened = function () {
    this.tutorialController.waitForExternalDialogHide(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog, this.bindFunction(this.onLevelUpConfirmed));
  };
  TutorialFinishedAttackRobberBaronCommand.prototype.onLevelUpConfirmed = function () {
    this.trackStep("s_080_150_levelUp_5_confirmed");
    this.finishStep();
  };
  TutorialFinishedAttackRobberBaronCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_080_140_quest_finished_confirmed";
  };
  return TutorialFinishedAttackRobberBaronCommand;
}(require("gge-module:export_TutorialBasicQuestFinisherActionCommand").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedAttackRobberBaronCommand = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleLevelUpDialog = require("gge-module:export_CastleLevelUpDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
