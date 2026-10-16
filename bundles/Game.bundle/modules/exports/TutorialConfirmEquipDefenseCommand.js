Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialConfirmEquipDefenseCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialConfirmEquipDefenseCommand, __s1param0);
  TutorialConfirmEquipDefenseCommand.prototype.finishStep = function () {
    __s1param0.prototype.finishStep.call(this);
  };
  TutorialConfirmEquipDefenseCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_090_070_dialog_confirmed";
  };
  return TutorialConfirmEquipDefenseCommand;
}(require("gge-module:export_TutorialBasicQuestStarterActionCommand").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmEquipDefenseCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
