Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatWelcomeCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatWelcomeCommand, __s1param0);
  CheatWelcomeCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = prompt("Select rewardID  (RewardIDs: 1 to 9)", "1");
    __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("welcome " + __s5local0);
  };
  return CheatWelcomeCommand;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatWelcomeCommand = __s0local0;
