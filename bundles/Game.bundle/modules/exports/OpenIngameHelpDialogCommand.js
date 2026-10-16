Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function OpenIngameHelpDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenIngameHelpDialogCommand, __s1param0);
  OpenIngameHelpDialogCommand.prototype.execute = function (__s5param0 = null) {
    if (!__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tutorialPanel.isVisible()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleIngameHelpDialog.CastleIngameHelpDialog);
    }
  };
  return OpenIngameHelpDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenIngameHelpDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleIngameHelpDialog = require("gge-module:export_CastleIngameHelpDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
