Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialConfirmMainTutorialFinishedCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialConfirmMainTutorialFinishedCommand, __s1param0);
  TutorialConfirmMainTutorialFinishedCommand.prototype.internalExecute = function () {
    __s1param0.prototype.internalExecute.call(this);
    __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.TUTORIAL_END);
  };
  TutorialConfirmMainTutorialFinishedCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "050_020_tutorial_finished";
  };
  return TutorialConfirmMainTutorialFinishedCommand;
}(require("gge-module:export_TutorialBasicQuestStarterActionCommand").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmMainTutorialFinishedCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
