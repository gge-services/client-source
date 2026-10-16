Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatQuestIDsCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatQuestIDsCommand, __s1param0);
  CheatQuestIDsCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("'on' or 'off' ", "on");
    if (__s5local0 == "on") {
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("showQuestIDs on");
    }
    if (__s5local0 == "off") {
      __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("showQuestIDs on");
    }
  };
  return CheatQuestIDsCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatQuestIDsCommand = __s0local0;
