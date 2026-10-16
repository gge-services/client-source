Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function BSPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BSPCommand, __s1param0);
  Object.defineProperty(BSPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_BUY_SEASON_PASS_PROMOTION;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  BSPCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_SeasonLeagueEvent.SeasonLeagueEvent(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT));
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return BSPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.BSPCommand = __s0local0;
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
