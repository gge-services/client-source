Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleArtifactEventDialogProperties = require("gge-module:export_CastleArtifactEventDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenSpecialEventProgressCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenSpecialEventProgressCommand, __s1param0);
  OpenSpecialEventProgressCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_81dacdf05bd32292.castAs(__s5param0[0], "ArtifactEventVO");
    if (__s5local0) {
      if (__s5local0.hasAllParts) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleArtifactFoundTreasureDialog.CastleArtifactFoundTreasureDialog, new __dep_export_CastleArtifactEventDialogProperties.CastleArtifactEventDialogProperties(__s5local0), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
      } else {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleArtifactFoundPieceDialog.CastleArtifactFoundPieceDialog, new __dep_export_CastleArtifactEventDialogProperties.CastleArtifactEventDialogProperties(__s5local0), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
      }
    }
  };
  return OpenSpecialEventProgressCommand;
}(__dep_exact_9e901e8e2483a22f_1.SimpleCommand);
exports.OpenSpecialEventProgressCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleArtifactFoundPieceDialog = require("gge-module:export_CastleArtifactFoundPieceDialog");
var __dep_export_CastleArtifactFoundTreasureDialog = require("gge-module:export_CastleArtifactFoundTreasureDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
