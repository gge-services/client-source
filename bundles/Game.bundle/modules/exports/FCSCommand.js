Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleFacebookEvent = require("gge-module:export_CastleFacebookEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function FCSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FCSCommand, __s1param0);
  Object.defineProperty(FCSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_MAP_FACEBOOK;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  FCSCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.parse_FCS(__s9local0);
        this.controller.dispatchEvent(new __dep_export_CastleFacebookEvent.CastleFacebookEvent(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED));
        break;
      case __dep_exact_26a421b704832cff.ERROR.FACEBOOK_MAPPING_NOT_ESTABLISHED:
        this.facebookAccMappedToDifferentPlayer();
        break;
      case __dep_exact_26a421b704832cff.ERROR.FACEBOOK_WRONG_USER_ID:
        this.resetFacebookPlayerData();
        this.couldNotMapPlayer();
        break;
      default:
        __dep_export_CastleModel.CastleModel.userData.resetFacebookData();
        this.controller.dispatchEvent(new __dep_export_CastleFacebookEvent.CastleFacebookEvent(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR));
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  FCSCommand.prototype.resetFacebookPlayerData = function (__s12param0 = null) {
    __dep_export_CastleModel.CastleModel.userData.resetFacebookData();
    this.controller.dispatchEvent(new __dep_export_CastleFacebookEvent.CastleFacebookEvent(__dep_export_CastleFacebookEvent.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR));
  };
  FCSCommand.prototype.facebookAccMappedToDifferentPlayer = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_fbAlreadyUsed_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_fbAlreadyUsed_desc"), this.bindFunction(this.onSwitchToFacebookAccount), this.bindFunction(this.resetFacebookPlayerData)), true, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  FCSCommand.prototype.onSwitchToFacebookAccount = function (__s16param0 = null) {
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_CACHED_FACEBOOK_ACCOUNT);
  };
  FCSCommand.prototype.couldNotMapPlayer = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_fbAlreadyUsed_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_facebookPlayerAccountAlreadyLinked_desc")), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_LOW, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  return FCSCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.FCSCommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
