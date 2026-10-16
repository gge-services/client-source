Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function ANLCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ANLCommand, __s1param0);
  Object.defineProperty(ANLCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ALLIANCE_NEWSLETTER;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  ANLCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.controller.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_OK));
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
        this.controller.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_ERROR));
    }
    return false;
  };
  return ANLCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.ANLCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
