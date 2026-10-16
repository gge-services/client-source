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
  function DMSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DMSCommand, __s1param0);
  Object.defineProperty(DMSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_DELETE_MESSAGE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  DMSCommand.prototype.exec = function (__s9param0) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0[0]);
    var __s9local1 = __s9param0[1];
    switch (__s9local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local2;
        var __s9local3 = JSON.parse(__s9local1[1]);
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9local3.MID, "Array")) {
          for (var __s9local4 = 0, __s9local5 = __s9local3.MID; __s9local4 < __s9local5.length; __s9local4++) {
            var __s9local6 = __s9local5[__s9local4];
            if (__s9local6 !== undefined) {
              __s9local2 = __dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s9local6);
              __dep_export_CastleModel.CastleModel.messageData.deleteMessageFromClientList(__s9local2);
            }
          }
        } else {
          __s9local2 = __dep_export_CastleModel.CastleModel.messageData.getMessageVOById(__s9local3.MID);
          __dep_export_CastleModel.CastleModel.messageData.deleteMessageFromClientList(__s9local2);
        }
        break;
      default:
        this.showErrorDialog(__s9local0, __s9local1);
    }
  };
  return DMSCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.DMSCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
