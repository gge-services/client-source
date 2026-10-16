Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEilandTitleErrorProperties = require("gge-module:export_CastleEilandTitleErrorProperties");
var __dep_export_C2SUserAchievedRanksVO = require("gge-module:export_C2SUserAchievedRanksVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function APTCommand() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APTCommand, __s1param0);
  Object.defineProperty(APTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ASSIGN_TITLE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  APTCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        if (__s9param1.length > 1) {
          var __s9local0 = JSON.parse(__s9param1[1]);
          if (!__s9local0.PN) {
            __dep_export_CastleModel.CastleModel.titleData.parseAPT(__s9local0);
          }
        }
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUserAchievedRanksVO.C2SUserAchievedRanksVO());
        break;
      case __dep_exact_26a421b704832cff.ERROR.LEVEL_TOO_HIGH_OR_LOW:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandTitleErrorDialog.CastleEilandTitleErrorDialog, new __dep_export_CastleEilandTitleErrorProperties.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_level"));
        break;
      case __dep_exact_26a421b704832cff.ERROR.NOT_IN_SAME_ALLIANCE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandTitleErrorDialog.CastleEilandTitleErrorDialog, new __dep_export_CastleEilandTitleErrorProperties.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_alliance"));
        break;
      case __dep_exact_26a421b704832cff.ERROR.PLAYER_NOT_FOUND:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandTitleErrorDialog.CastleEilandTitleErrorDialog, new __dep_export_CastleEilandTitleErrorProperties.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_name"));
        break;
      case __dep_exact_26a421b704832cff.ERROR.CANNOT_ASSIGN_TO_SELF:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandTitleErrorDialog.CastleEilandTitleErrorDialog, new __dep_export_CastleEilandTitleErrorProperties.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_self"));
        break;
      case __dep_exact_26a421b704832cff.ERROR.ALREADY_HAS_TITLE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandTitleErrorDialog.CastleEilandTitleErrorDialog, new __dep_export_CastleEilandTitleErrorProperties.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_same"));
        break;
      case __dep_exact_26a421b704832cff.ERROR.IS_NOT_KING:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEilandTitleErrorDialog.CastleEilandTitleErrorDialog, new __dep_export_CastleEilandTitleErrorProperties.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", ""));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return APTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.APTCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEilandTitleErrorDialog = require("gge-module:export_CastleEilandTitleErrorDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
