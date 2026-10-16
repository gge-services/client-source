Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatShowResearchGridCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatShowResearchGridCommand, __s1param0);
  CheatShowResearchGridCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("showResearchGrid");
  };
  return CheatShowResearchGridCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatShowResearchGridCommand = __s0local0;
