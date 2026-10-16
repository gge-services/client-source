Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAutoTutorialBlockerDialog = require("gge-module:export_CastleAutoTutorialBlockerDialog");
var __dep_export_C2STemporaryServerTutorialSkipVO = require("gge-module:export_C2STemporaryServerTutorialSkipVO");
var __s0local0 = function (__s1param0) {
  function TutorialAskToSkipTutorialCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialAskToSkipTutorialCommand, __s1param0);
  TutorialAskToSkipTutorialCommand.prototype.internalExecute = function () {
    if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer) {
      this.doSkip();
    } else {
      this.finishStep();
    }
  };
  TutorialAskToSkipTutorialCommand.prototype.doSkip = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogsExcept([__dep_export_CastleAutoTutorialBlockerDialog.CastleAutoTutorialBlockerDialog]);
    this.layoutManager.showDialog(__dep_export_CastleAutoTutorialBlockerDialog.CastleAutoTutorialBlockerDialog);
    __dep_export_CastleModel.CastleModel.tutorialData.activateTutorial(false);
    __dep_export_CastleModel.CastleModel.tutorialData.clearBlockers();
    __dep_export_CastleModel.CastleModel.tutorialData.removeAllListeners();
    __dep_export_CastleModel.CastleModel.tutorialData.isSkippingTutorial = true;
    this.layoutManager.muteDialogs = true;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STemporaryServerTutorialSkipVO.C2STemporaryServerTutorialSkipVO());
  };
  return TutorialAskToSkipTutorialCommand;
}(require("gge-module:export_TutorialBasicActionCommand").TutorialBasicActionCommand);
exports.TutorialAskToSkipTutorialCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
