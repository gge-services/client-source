Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_LongTermPointEventHighScoreDialogProperties = require("gge-module:export_LongTermPointEventHighScoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenLongTermPointEventHighScoreDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenLongTermPointEventHighScoreDialogCommand, __s1param0);
  OpenLongTermPointEventHighScoreDialogCommand.prototype.addAssets = function (__s5param0) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    this.loadSeasonAssets(__s5local0.skin);
  };
  OpenLongTermPointEventHighScoreDialogCommand.prototype.openDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_LongTermPointEventHighScoreDialog.LongTermPointEventHighScoreDialog, new __dep_export_LongTermPointEventHighScoreDialogProperties.LongTermPointEventHighScoreDialogProperties());
  };
  OpenLongTermPointEventHighScoreDialogCommand.prototype.loadSeasonAssets = function (__s9param0) {
    var __s9local0 = "LongTermPeHighScoreDialog" + __s9param0.assetName + "Skin";
    this.loadAsset(__s9local0, __s9local0);
  };
  return OpenLongTermPointEventHighScoreDialogCommand;
}(require("gge-module:export_OpenDialogWithAdditionalExternalAssetsCommand").OpenDialogWithAdditionalExternalAssetsCommand);
exports.OpenLongTermPointEventHighScoreDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LongTermPointEventHighScoreDialog = require("gge-module:export_LongTermPointEventHighScoreDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
