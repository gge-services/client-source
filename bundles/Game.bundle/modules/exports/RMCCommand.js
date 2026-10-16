Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function RMCCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RMCCommand, __s1param0);
  Object.defineProperty(RMCCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_REQUEST_MAIL_CHANGE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RMCCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.playerEmailData.newEmail = __s9local0.PMA;
        this.dispatchForShowPopUp("dialog_options_newName_success_desc", true);
        break;
      case __dep_exact_26a421b704832cff.ERROR.EMAIL_ALREADY_IN_USE:
        this.dispatchForShowPopUp("error_mail_exists", false);
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_EMAIL:
        this.dispatchForShowPopUp("dialog_options_error_enterEmail_desc", false);
        break;
      case __dep_exact_26a421b704832cff.ERROR.MAILDOMAIN_BLOCKED:
        this.dispatchForShowPopUp("EMAIL_DOMAIN_BLOCKED_8", false);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  RMCCommand.prototype.dispatchForShowPopUp = function (__s12param0, __s12param1) {
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.RMC_ARRIVED, [__s12param0, __s12param1]));
  };
  return RMCCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.RMCCommand = __s0local0;
