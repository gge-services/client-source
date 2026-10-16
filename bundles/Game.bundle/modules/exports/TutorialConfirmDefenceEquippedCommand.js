Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialConfirmDefenceEquippedCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialConfirmDefenceEquippedCommand, __s1param0);
  TutorialConfirmDefenceEquippedCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "tracking s_090_140_dialog_confirmed";
  };
  return TutorialConfirmDefenceEquippedCommand;
}(require("gge-module:export_TutorialBasicQuestStarterActionCommand").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmDefenceEquippedCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
