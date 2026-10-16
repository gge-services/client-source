Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDeleteAccountDialog = require("gge-module:export_CastleDeleteAccountDialog");
var __s0local0 = function (__s1param0) {
  function PSDCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PSDCommand, __s1param0);
  Object.defineProperty(PSDCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_PLAYER_SCHEDULED_DELETION;
    },
    enumerable: true,
    configurable: true
  });
  PSDCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    switch (__s7param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s7local0 = JSON.parse(__s7param1[1]);
        __dep_export_CastleModel.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = Number(__s7local0.D);
        if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDeleteAccountDialog.CastleDeleteAccountDialog);
        }
        break;
      default:
        this.showErrorDialog(__s7param0, __s7param1);
    }
    return false;
  };
  return PSDCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.PSDCommand = __s0local0;
