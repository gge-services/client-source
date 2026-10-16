Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatEndOfTextPipesCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatEndOfTextPipesCommand, __s1param0);
  CheatEndOfTextPipesCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("'on' or 'off' ", "on");
    if (__s5local0 == "on") {
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("pipesOn");
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("pipes at end of texts", "ON"));
    }
    if (__s5local0 == "off") {
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("pipesOff");
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("pipes at end of texts", "OFF"));
    }
  };
  return CheatEndOfTextPipesCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatEndOfTextPipesCommand = __s0local0;
