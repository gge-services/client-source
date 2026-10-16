Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialFinishedBuildWorkshopCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialFinishedBuildWorkshopCommand, __s1param0);
  TutorialFinishedBuildWorkshopCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_080_010_quest_finished_confirmed";
  };
  return TutorialFinishedBuildWorkshopCommand;
}(require("gge-module:export_TutorialBasicQuestFinisherActionCommand").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedBuildWorkshopCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
