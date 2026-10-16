Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function PEPCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PEPCommand, __s1param0);
  Object.defineProperty(PEPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_POINT_EVENT_POINTS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  PEPCommand.prototype.exec = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local2 = JSON.parse(__s9local1[1]);
        var __s9local3 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s9local2.EID);
        if (__s9local3) {
          __s9local3.setRankAndPoints(__s9local2.OR, __s9local2.OP, __s9local2.PT);
        }
        if (__s9local2.BLPP != undefined) {
          var __s9local4 = __dep_exact_81dacdf05bd32292.castAs(__s9local3, "AllianceRaidbossEventEventVO");
          if (__s9local4) {
            __s9local4.currentBossLevelPoints = __s9local2.BLPP;
          }
        }
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  };
  return PEPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.PEPCommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
