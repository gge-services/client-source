Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatUnitInfoCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatUnitInfoCommand, __s1param0);
  CheatUnitInfoCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("Which Unit WodID should be shown?", CheatUnitInfoCommand.wodID);
    if (parseInt(__s5local0) > 0 && __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(parseInt(__s5local0))) {
      CheatUnitInfoCommand.wodID = __s5local0;
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("unitInfo " + CheatUnitInfoCommand.wodID);
    }
  };
  CheatUnitInfoCommand.wodID = "714";
  return CheatUnitInfoCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatUnitInfoCommand = __s0local0;
