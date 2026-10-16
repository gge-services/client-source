Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialBasicQuestActionCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBasicQuestActionCommand, __s1param0);
  TutorialBasicQuestActionCommand.prototype.internalExecute = function () {
    this.filter.replace(this.getDialogClass());
    var __s5local0 = this.getTrackOnQuestConfirmID();
    if (__s5local0) {
      this.trackStep(__s5local0);
    }
    this.onQuestConfirmPre();
  };
  TutorialBasicQuestActionCommand.prototype.onQuestConfirmPre = function () {
    this.onQuestConfirm();
  };
  TutorialBasicQuestActionCommand.prototype.onQuestConfirm = function () {
    this.finishStep();
  };
  TutorialBasicQuestActionCommand.prototype.getDialogClass = function () {
    return this.constructor;
  };
  TutorialBasicQuestActionCommand.prototype.getTrackOnQuestConfirmID = function () {
    return null;
  };
  return TutorialBasicQuestActionCommand;
}(require("gge-module:export_TutorialBasicActionCommand").TutorialBasicActionCommand);
exports.TutorialBasicQuestActionCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
