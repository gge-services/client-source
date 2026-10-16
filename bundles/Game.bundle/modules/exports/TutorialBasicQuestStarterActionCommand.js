Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialBasicQuestStarterActionCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialBasicQuestStarterActionCommand, __s1param0);
  TutorialBasicQuestStarterActionCommand.prototype.getDialogClass = function () {
    return __dep_export_CastleStartQuestDialog.CastleStartQuestDialog;
  };
  return TutorialBasicQuestStarterActionCommand;
}(require("gge-module:export_TutorialBasicQuestActionCommand").TutorialBasicQuestActionCommand);
exports.TutorialBasicQuestStarterActionCommand = __s0local0;
var __dep_export_CastleStartQuestDialog = require("gge-module:export_CastleStartQuestDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
