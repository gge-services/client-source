Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleMinuteSkipEvent = require("gge-module:export_CastleMinuteSkipEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function SCICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SCICommand, __s1param0);
  Object.defineProperty(SCICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_MINUTE_SKIP_CRAFTING;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SCICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_exact_9e901e8e2483a22f.debug("===== minute skip answer!");
        __dep_exact_9e901e8e2483a22f.debug(__s9param1 ? __s9param1.join(", ") : "null");
        this.controller.dispatchEvent(new __dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.controller.dispatchEvent(new __dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent(__dep_export_CastleMinuteSkipEvent.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return SCICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SCICommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
