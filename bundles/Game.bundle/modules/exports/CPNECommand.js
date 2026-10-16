Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function CPNECommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CPNECommand, __s1param0);
  Object.defineProperty(CPNECommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_CHANGE_PLAYER_NAME_EVENT;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  CPNECommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.dispatchForShowPopUp("dialog_options_newName_success_desc", true);
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        this.dispatchForShowPopUp("error_badword", false);
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_ALREADY_IN_USE:
        this.dispatchForShowPopUp("dialog_options_error_nameAlreadyInUse_desc", false);
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_NAME:
        this.dispatchForShowPopUp("errorCode_98", false);
        break;
      case __dep_exact_26a421b704832cff.ERROR.NAME_HAS_ONLY_NUMBERS:
        this.dispatchForShowPopUp("error_name_is_number", false);
        break;
      case __dep_exact_26a421b704832cff.ERROR.COOLING_DOWN:
        this.dispatchForShowPopUp("errorCode_95", false);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  CPNECommand.prototype.dispatchForShowPopUp = function (__s12param0, __s12param1) {
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.CPNE_ARRIVED, [__s12param0, __s12param1]));
  };
  return CPNECommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.CPNECommand = __s0local0;
