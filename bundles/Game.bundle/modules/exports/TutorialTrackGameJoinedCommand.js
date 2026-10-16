Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialTrackGameJoinedCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialTrackGameJoinedCommand, __s1param0);
  TutorialTrackGameJoinedCommand.prototype.internalExecute = function () {
    this.trackStep(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.GAME_JOINED, false);
    this.trackStep("tutorial_started");
    __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.TUTORIAL_START);
    this.finishStep();
  };
  return TutorialTrackGameJoinedCommand;
}(require("gge-module:export_TutorialBasicActionCommand").TutorialBasicActionCommand);
exports.TutorialTrackGameJoinedCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
