Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_VCKCommandOkEvent = require("gge-module:export_VCKCommandOkEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function VCKLegacyCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VCKLegacyCommand, __s1param0);
  Object.defineProperty(VCKLegacyCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_VERSION_CHECK;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  VCKLegacyCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    this.env.buildNumberServer = __s9param1[1];
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.layoutManager.showServerAndClientVersion();
        this.controller.dispatchEvent(new __dep_export_VCKCommandOkEvent.VCKCommandOkEvent(__dep_export_VCKCommandOkEvent.VCKCommandOkEvent.VCK_OK));
        if (this.env.accessKey != "" || this.env.pln != "" && this.env.sig != "" && !this.env.isFacebook) {
          __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGIN);
          __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
        } else {
          if (this.layoutManager.currentState == __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_STARTSCREEN) {
            return true;
          }
          if (__dep_export_CastleModel.CastleModel.smartfoxClient.userForcedDisconnect || __dep_export_CastleModel.CastleModel.localData.readLoginDataUsername() == null || __dep_export_CastleModel.CastleModel.localData.readLoginDataUsername() == "" || __dep_export_CastleModel.CastleModel.localData.readLoginDataLoginToken() == null || __dep_export_CastleModel.CastleModel.localData.readLoginDataLoginToken() == "") {
            this.layoutManager.state = __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_STARTSCREEN;
          } else {
            __dep_export_CastleModel.CastleModel.userData.userName = __dep_export_CastleModel.CastleModel.localData.readLoginDataUsername();
            __dep_export_CastleModel.CastleModel.userData.loginToken = __dep_export_CastleModel.CastleModel.localData.readLoginDataLoginToken();
            __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_LOGIN);
            __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
          }
        }
        return true;
      case __dep_exact_26a421b704832cff.ERROR.GENERAL_ERROR:
      case __dep_exact_26a421b704832cff.ERROR.INVALID_PARAMETER_VALUE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_versioncheck_error"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_versioncheck_errorcode_1")));
        this.logError(__s9param0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
        this.logError(__s9param0);
    }
    return false;
  };
  VCKLegacyCommand.prototype.logError = function (__s17param0) {
    __dep_exact_9e901e8e2483a22f_4.ExternalLog.logger.log(new __dep_exact_9e901e8e2483a22f_5.VersionErrorLOFactory(__dep_exact_9e901e8e2483a22f_5.VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR, this.env.buildNumberServer));
  };
  return VCKLegacyCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.VCKLegacyCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
