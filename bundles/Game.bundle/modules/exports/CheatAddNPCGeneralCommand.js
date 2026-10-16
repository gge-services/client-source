Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatAddNPCGeneralCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatAddNPCGeneralCommand, __s1param0);
  CheatAddNPCGeneralCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("Which GeneralID should be added?", "115");
    if (prompt("Should the general be shown as preview (y/n)", "n") == "y") {
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("addNPCGeneralPreview " + __s5local0);
    } else {
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("addNPCGeneral " + __s5local0);
    }
  };
  return CheatAddNPCGeneralCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatAddNPCGeneralCommand = __s0local0;
