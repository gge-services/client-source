Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_FactionInvasionDialogProperties = require("gge-module:export_FactionInvasionDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenFactionInvasionEventMainDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenFactionInvasionEventMainDialogCommand, __s1param0);
  OpenFactionInvasionEventMainDialogCommand.prototype.addAssets = function (__s5param0) {
    this.loadAsset("GallantryTitlesSublayer", "GallantryTitlesSublayer");
  };
  OpenFactionInvasionEventMainDialogCommand.prototype.openDialog = function () {
    var __s7local0 = this.getSublayerMc();
    this.open(__s7local0);
  };
  OpenFactionInvasionEventMainDialogCommand.prototype.open = function (__s9param0) {
    var __s9local0 = new __dep_export_FactionInvasionDialogProperties.FactionInvasionDialogProperties();
    __s9local0.titlesSublayer = __s9param0;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleFactionInvasionEventDialog.CastleFactionInvasionEventDialog, __s9local0);
  };
  OpenFactionInvasionEventMainDialogCommand.prototype.getSublayerMc = function () {
    return new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("GallantryTitlesSublayer"))();
  };
  return OpenFactionInvasionEventMainDialogCommand;
}(require("gge-module:export_OpenDialogWithAdditionalExternalAssetsCommand").OpenDialogWithAdditionalExternalAssetsCommand);
exports.OpenFactionInvasionEventMainDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFactionInvasionEventDialog = require("gge-module:export_CastleFactionInvasionEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
