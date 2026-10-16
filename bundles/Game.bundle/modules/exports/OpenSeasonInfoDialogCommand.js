Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSeasonEventWinDialogProperties = require("gge-module:export_CastleSeasonEventWinDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenSeasonInfoDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenSeasonInfoDialogCommand, __s1param0);
  OpenSeasonInfoDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0[0];
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0[1]);
    var __s5local2 = __s5param0[2];
    switch (__s5local0.progressType) {
      case __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_FOUND_MAP_PIECE:
        break;
      case __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSeasonEventWinDialog.CastleSeasonEventWinDialog, new __dep_export_CastleSeasonEventWinDialogProperties.CastleSeasonEventWinDialogProperties(__s5local1, __s5local2), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  return OpenSeasonInfoDialogCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.OpenSeasonInfoDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSeasonEventWinDialog = require("gge-module:export_CastleSeasonEventWinDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
