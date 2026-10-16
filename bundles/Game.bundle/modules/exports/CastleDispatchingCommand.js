Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __s0local0 = function (__s1param0) {
  function CastleDispatchingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDispatchingCommand, __s1param0);
  CastleDispatchingCommand.prototype.executeCommand = function (__s5param0, __s5param1) {
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s5param0, __s5param1);
    }
    this.dispatchArrivedEvent(__s5param0, __s5param1);
    return false;
  };
  CastleDispatchingCommand.prototype.dispatchArrivedEvent = function (__s8param0, __s8param1) {
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(this.eventType, [__s8param0, __s8param1]));
  };
  Object.defineProperty(CastleDispatchingCommand.prototype, "eventType", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return CastleDispatchingCommand;
}(require("gge-module:export_CastleCommand").CastleCommand);
exports.CastleDispatchingCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
