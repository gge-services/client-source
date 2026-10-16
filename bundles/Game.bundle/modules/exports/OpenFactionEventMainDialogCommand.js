Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_FactionEventMainDialogProperties = require("gge-module:export_FactionEventMainDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenFactionEventMainDialogCommand() {
    var __s3local0 = this;
    __s3local0._subLayerID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenFactionEventMainDialogCommand, __s1param0);
  OpenFactionEventMainDialogCommand.prototype.addAssets = function (__s5param0) {
    __s1param0.prototype.addAssets.call(this, __s5param0);
    this._subLayerID = __dep_exact_f855840627e6e145.int(__s5param0 ? __dep_exact_f855840627e6e145.int(__s5param0) : -1);
  };
  OpenFactionEventMainDialogCommand.prototype.open = function (__s7param0) {
    var __s7local0 = new __dep_export_FactionEventMainDialogProperties.FactionEventMainDialogProperties(this._subLayerID);
    __s7local0.titlesSublayer = __s7param0;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_FactionEventMainDialog.FactionEventMainDialog, __s7local0);
  };
  return OpenFactionEventMainDialogCommand;
}(require("gge-module:export_OpenFactionInvasionEventMainDialogCommand").OpenFactionInvasionEventMainDialogCommand);
exports.OpenFactionEventMainDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_FactionEventMainDialog = require("gge-module:export_FactionEventMainDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
