Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleNameValidationEvent = require("gge-module:export_CastleNameValidationEvent");
var __dep_export_CastleRegisterErrorEvent = require("gge-module:export_CastleRegisterErrorEvent");
var __s0local0 = function (__s1param0) {
  function VLNCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VLNCommand, __s1param0);
  Object.defineProperty(VLNCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_VALIDATE_LOGIN_NAME;
    },
    enumerable: true,
    configurable: true
  });
  VLNCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 != __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      this.controller.dispatchEvent(new __dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent(__dep_export_CastleRegisterErrorEvent.CastleRegisterErrorEvent.LLI_ERROR, "LLI", __s7param0));
      return false;
    } else {
      this.controller.dispatchEvent(new __dep_export_CastleNameValidationEvent.CastleNameValidationEvent(__dep_export_CastleNameValidationEvent.CastleNameValidationEvent.VLN_OK));
      return true;
    }
  };
  return VLNCommand;
}(require("gge-module:export_CastleCommand").CastleCommand);
exports.VLNCommand = __s0local0;
