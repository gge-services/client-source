Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleStartQuestDialogProperties = require("gge-module:export_CastleStartQuestDialogProperties");
var __s0local0 = function (__s1param0) {
  function AutoShowStartQuestDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoShowStartQuestDialogCommand, __s1param0);
  AutoShowStartQuestDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (!__dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().isDialogRegistered(__dep_export_CastleStartQuestDialog.CastleStartQuestDialog) && !__s5local0.registered) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartQuestDialog.CastleStartQuestDialog, new __dep_export_CastleStartQuestDialogProperties.CastleStartQuestDialogProperties(__s5local0), false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
    }
    __s5local0.registered = true;
  };
  return AutoShowStartQuestDialogCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.AutoShowStartQuestDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartQuestDialog = require("gge-module:export_CastleStartQuestDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
