Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function LWTACommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LWTACommand, __s1param0);
  Object.defineProperty(LWTACommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.C2S_LAUNCH_WOLFKING_TAUNT_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  LWTACommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(__s7param0, __s7param1);
    }
    return false;
  };
  return LWTACommand;
}(require("gge-module:export_CastleCommand").CastleCommand);
exports.LWTACommand = __s0local0;
