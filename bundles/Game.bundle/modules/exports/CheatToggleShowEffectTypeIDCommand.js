Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatToggleShowEffectTypeIDCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatToggleShowEffectTypeIDCommand, __s1param0);
  CheatToggleShowEffectTypeIDCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("toggleShowEffectTypeIDs");
    if (__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("ShowEffectTypeIDs", "ON"));
    }
    if (!__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("ShowEffectTypeIDs", "OFF"));
    }
  };
  return CheatToggleShowEffectTypeIDCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatToggleShowEffectTypeIDCommand = __s0local0;
