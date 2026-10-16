Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SIICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SIICommand, __s1param0);
  Object.defineProperty(SIICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_STORM_ISLANDS_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SIICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.currentIslandRank = __s9local0.IR;
        __dep_export_CastleModel.CastleModel.userData.aquaPoints = __s9local0.AP;
        if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
          __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.parse_SII(__s9local0);
        }
        this.controller.dispatchEvent(new __dep_export_CastleEilandEvent.CastleEilandEvent(__dep_export_CastleEilandEvent.CastleEilandEvent.STORM_ISLANDS_INFO_RECEIVED));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return SIICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SIICommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
