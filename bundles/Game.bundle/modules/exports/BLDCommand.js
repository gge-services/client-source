Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleLogDataEvent = require("gge-module:export_CastleLogDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function BLDCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BLDCommand, __s1param0);
  Object.defineProperty(BLDCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_BATTLE_LOG_DETAIL;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  BLDCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.LID);
        __dep_export_CastleModel.CastleModel.messageData.parseBattleLogDetail(__s9local0);
        var __s9local2 = __dep_export_CastleModel.CastleModel.messageData.getBattleLogById(__s9local1);
        if (__s9local2) {
          this.controller.dispatchEvent(new __dep_export_CastleLogDataEvent.CastleLogDataEvent(__dep_export_CastleLogDataEvent.CastleLogDataEvent.NEW_FULL_LOG, __s9local2));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return BLDCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.BLDCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
