Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialBasicQuestFinisherActionCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBasicQuestFinisherActionCommand, __s1param0);
  TutorialBasicQuestFinisherActionCommand.prototype.onQuestConfirmPre = function () {
    this.tutorialController.waitForDialogHide(this.getDialogClass(), this.bindFunction(this.onQuestConfirm));
  };
  TutorialBasicQuestFinisherActionCommand.prototype.getDialogClass = function () {
    return __dep_export_CastleQuestCompletedDialog.CastleQuestCompletedDialog;
  };
  return TutorialBasicQuestFinisherActionCommand;
}(require("gge-module:export_TutorialBasicQuestActionCommand").TutorialBasicQuestActionCommand);
exports.TutorialBasicQuestFinisherActionCommand = __s0local0;
var __dep_export_CastleQuestCompletedDialog = require("gge-module:export_CastleQuestCompletedDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
