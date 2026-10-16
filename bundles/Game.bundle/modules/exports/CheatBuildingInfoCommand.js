Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatBuildingInfoCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatBuildingInfoCommand, __s1param0);
  CheatBuildingInfoCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("Which WodID should be shown?", CheatBuildingInfoCommand.wodID);
    if (parseInt(__s5local0) > 0 && __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(parseInt(__s5local0))) {
      CheatBuildingInfoCommand.wodID = __s5local0;
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("buildingInfo " + CheatBuildingInfoCommand.wodID);
    }
  };
  CheatBuildingInfoCommand.wodID = "2871";
  return CheatBuildingInfoCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatBuildingInfoCommand = __s0local0;
