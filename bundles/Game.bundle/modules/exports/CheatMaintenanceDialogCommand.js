Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleNewsHubOverlay = require("gge-module:export_CastleNewsHubOverlay");
var __s0local0 = function (__s1param0) {
  function CheatMaintenanceDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatMaintenanceDialogCommand, __s1param0);
  CheatMaintenanceDialogCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleNewsHubOverlay.CastleNewsHubOverlay.openMaintenance();
  };
  return CheatMaintenanceDialogCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatMaintenanceDialogCommand = __s0local0;
