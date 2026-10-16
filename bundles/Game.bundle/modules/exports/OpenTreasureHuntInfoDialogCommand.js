Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTreasureFoundTreasureDialogProperties = require("gge-module:export_CastleTreasureFoundTreasureDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenTreasureHuntInfoDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenTreasureHuntInfoDialogCommand, __s1param0);
  OpenTreasureHuntInfoDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    switch (__s5local0.progressType) {
      case __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_FOUND_MAP_PIECE:
        if (__s5local0.hasAllPieces) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTreasureCompleteDialog.CastleTreasureCompleteDialog);
        }
        break;
      case __dep_exact_26a421b704832cff.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE:
        if (__s5local0.rewardList && __s5local0.rewardList.containsType(__dep_export_CollectableEnum.CollectableEnum.BUILDING)) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTreasureFoundTreasureDialog.CastleTreasureFoundTreasureDialog, new __dep_export_CastleTreasureFoundTreasureDialogProperties.CastleTreasureFoundTreasureDialogProperties(__s5local0.rewardList));
        }
    }
  };
  return OpenTreasureHuntInfoDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenTreasureHuntInfoDialogCommand = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTreasureCompleteDialog = require("gge-module:export_CastleTreasureCompleteDialog");
var __dep_export_CastleTreasureFoundTreasureDialog = require("gge-module:export_CastleTreasureFoundTreasureDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
