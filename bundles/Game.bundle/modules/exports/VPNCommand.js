Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleNameValidationEvent = require("gge-module:export_CastleNameValidationEvent");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __s0local0 = function (__s1param0) {
  function VPNCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VPNCommand, __s1param0);
  Object.defineProperty(VPNCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_VALIDATE_NEW_PLAYER_NAME;
    },
    enumerable: true,
    configurable: true
  });
  VPNCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.controller.dispatchEvent(new __dep_export_CastleNameValidationEvent.CastleNameValidationEvent(__dep_export_CastleNameValidationEvent.CastleNameValidationEvent.VPN_OK));
        return true;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_NAME:
        var __s7local0 = JSON.parse(__s7param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME, __s7local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_ALREADY_IN_USE:
        __s7local0 = JSON.parse(__s7param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, __s7local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_HAS_ONLY_NUMBERS:
        __s7local0 = JSON.parse(__s7param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, __s7local0));
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        __s7local0 = JSON.parse(__s7param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, __s7local0));
        break;
      default:
        __s7local0 = JSON.parse(__s7param1[1]);
        this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.REGISTER_ERROR, __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.INVALID_NAME, __s7local0));
    }
    return false;
  };
  return VPNCommand;
}(require("gge-module:export_CastleCommand").CastleCommand);
exports.VPNCommand = __s0local0;
