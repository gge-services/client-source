Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function RSMCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RSMCommand, __s1param0);
  Object.defineProperty(RSMCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_RESEND_MAIL;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  RSMCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        if (JSON.parse(__s9param1[1])[__dep_exact_26a421b704832cff.CommKeys.RESEND_MAIL_ACTION_TYPE] == __dep_exact_26a421b704832cff.PlayerConst.RESEND_MAIL_ACCOUNT_VERIFICATION) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("attention", "dialog_options_newEmail_verificationSentAgain_desc"));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return RSMCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.RSMCommand = __s0local0;
