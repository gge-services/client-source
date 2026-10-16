Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatTextIDCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatTextIDCommand, __s1param0);
  CheatTextIDCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("Which TextID should be tested?", "errorCode_1");
    var __s5local1 = prompt("Which Texreplacements should be used? (separate with , )", "0,0");
    __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("textID " + __s5local0 + " " + __s5local1);
  };
  return CheatTextIDCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatTextIDCommand = __s0local0;
