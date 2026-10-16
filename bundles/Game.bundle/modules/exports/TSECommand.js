Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function TSECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TSECommand, __s1param0);
  Object.defineProperty(TSECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_IS_TEMPORARY_SERVER;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  TSECommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        this.env.isOnTemporaryServer = __s9local0.GST == __dep_exact_26a421b704832cff_1.GlobalServerConst.TEMP_SERVER;
        this.env.isSpecialServerConnectStarted = false;
        this.env.isOnAllianceBattleGroundServer = __s9local0.GST == __dep_exact_26a421b704832cff_1.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
        this.env.isCrossplay = __s9local0[__dep_exact_26a421b704832cff.CommKeys.IS_CROSSPLAY_SERVER] == 1;
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return TSECommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.TSECommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
