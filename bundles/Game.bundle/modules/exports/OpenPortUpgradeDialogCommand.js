Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleSeasonBaseRepairDialogProperties = require("gge-module:export_CastleSeasonBaseRepairDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenPortUpgradeDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenPortUpgradeDialogCommand, __s1param0);
  OpenPortUpgradeDialogCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSeasonUpgradePortDialog.CastleSeasonUpgradePortDialog, new __dep_export_CastleSeasonBaseRepairDialogProperties.CastleSeasonBaseRepairDialogProperties(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getNextLockedPortNode(), "dialog_upgradeShip"));
  };
  return OpenPortUpgradeDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenPortUpgradeDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSeasonUpgradePortDialog = require("gge-module:export_CastleSeasonUpgradePortDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
