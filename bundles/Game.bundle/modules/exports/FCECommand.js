Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDispatchingCommand = require("gge-module:export_CastleDispatchingCommand");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function FCECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FCECommand, __s1param0);
  Object.defineProperty(FCECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_FEAST_COST_REDUCTION;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FCECommand.prototype, "eventType", {
    get: function () {
      return __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FCE_ARRIVED;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "eventType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return FCECommand;
}(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand);
exports.FCECommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
