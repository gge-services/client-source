Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClientCheatsHelper = require("gge-module:export_ClientCheatsHelper");
var __s0local0 = function (__s1param0) {
  function CheatLifetimeSpentC2Command() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CheatLifetimeSpentC2Command, __s1param0);
  CheatLifetimeSpentC2Command.prototype.execute = function (__s5param0 = null) {
    __dep_export_ClientCheatsHelper.ClientCheatsHelper.performCommand("lifetimeSpent");
  };
  return CheatLifetimeSpentC2Command;
}(require("gge-module:export_ABotCommand").ABotCommand);
exports.CheatLifetimeSpentC2Command = __s0local0;
