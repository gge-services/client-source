Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function TutorialChooseHeroCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialChooseHeroCommand, __s1param0);
  TutorialChooseHeroCommand.prototype.internalExecute = function () {
    this.filter.replace(__dep_export_CastleChooseHeroDialog.CastleChooseHeroDialog);
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastleChooseHeroDialog.CastleChooseHeroDialog, this.bindFunction(this.onDialog));
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleChooseHeroDialog.CastleChooseHeroDialog);
  };
  TutorialChooseHeroCommand.prototype.onDialog = function () {
    this.tutorialController.waitForDialogHide(__dep_export_CastleChooseHeroDialog.CastleChooseHeroDialog, this.bindFunction(this.finishStep));
  };
  return TutorialChooseHeroCommand;
}(require("gge-module:export_TutorialBasicActionCommand").TutorialBasicActionCommand);
exports.TutorialChooseHeroCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleChooseHeroDialog = require("gge-module:export_CastleChooseHeroDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
