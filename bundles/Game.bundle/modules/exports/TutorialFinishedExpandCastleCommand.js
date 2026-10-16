Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialFinishedExpandCastleCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialFinishedExpandCastleCommand, __s1param0);
  TutorialFinishedExpandCastleCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "030_080_quest_finished_confirmed";
  };
  return TutorialFinishedExpandCastleCommand;
}(require("gge-module:export_TutorialBasicQuestFinisherActionCommand").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedExpandCastleCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
