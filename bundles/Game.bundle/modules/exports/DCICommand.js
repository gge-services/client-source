Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleDispatchingCommand = require("gge-module:export_CastleDispatchingCommand");
var __s0local0 = function (__s1param0) {
  function DCICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DCICommand, __s1param0);
  Object.defineProperty(DCICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_DISASSEMBLE_CONSTRUCTION_ITEM;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DCICommand.prototype, "eventType", {
    get: function () {
      return __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.DCI_ARRIVED;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "eventType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return DCICommand;
}(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand);
exports.DCICommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
