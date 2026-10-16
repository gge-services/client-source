Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleDispatchingCommand = require("gge-module:export_CastleDispatchingCommand");
var __s0local0 = function (__s1param0) {
  function RFICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RFICommand, __s1param0);
  Object.defineProperty(RFICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RESEARCH_FINISH_INSTANT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RFICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
      case __dep_exact_26a421b704832cff.ERROR.NOTHING_TO_SKIP:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    this.dispatchArrivedEvent(__s9param0, __s9param1);
    return false;
  };
  Object.defineProperty(RFICommand.prototype, "eventType", {
    get: function () {
      return __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RFI_ARRIVED;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand.prototype, "eventType").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  return RFICommand;
}(__dep_export_CastleDispatchingCommand.CastleDispatchingCommand);
exports.RFICommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
