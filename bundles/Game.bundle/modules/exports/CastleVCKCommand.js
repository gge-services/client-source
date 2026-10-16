Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleVCKCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleVCKCommand, __s1param0);
  CastleVCKCommand.prototype.executeCommand = function (__s5param0, __s5param1) {
    this.env.buildNumberServer = __s5param1[1];
    this.env.versionInformation.buildNumberServer = __s5param1[1];
    if (__s5param0 == __dep_exact_9e901e8e2483a22f.BasicErrorConstants.ALL_OK) {
      this.handleAllOk();
    } else if (__s5param0 == __dep_exact_9e901e8e2483a22f_1.VCKCommand.VERSION_TOO_LOW) {
      this.handleVersionToLow();
      this.logError(__s5param0);
    } else if (__s5param0 == __dep_exact_9e901e8e2483a22f_1.VCKCommand.VERSION_TOO_HIGH) {
      this.handleVersionToHigh();
      this.logError(__s5param0);
    } else {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_exact_9e901e8e2483a22f.ServerErrorVO(__s5param0, __s5param1, this.cmdId));
      this.logError(__s5param0);
    }
    return false;
  };
  CastleVCKCommand.prototype.handleVersionToLow = function () {
    this.handleVersionError();
  };
  CastleVCKCommand.prototype.handleVersionToHigh = function () {
    this.handleVersionError();
  };
  CastleVCKCommand.prototype.handleVersionError = function () {
    if (__dep_export_CastleModel.CastleModel.userData.connectToSpecialServer) {
      __dep_export_CastleModel.CastleModel.userData.resetConnectToFlags();
    }
    if (this.env.isTest) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_versioncheck_error"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_versioncheck_errorcode_1"), this.bindFunction(this.openWorldSelectionDialog)));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_versioncheck_error"), __dep_exact_92d05af59ee2ff30.Localize.text("generic_versioncheck_errorcode_1")));
    }
  };
  CastleVCKCommand.prototype.openWorldSelectionDialog = function (__s20param0 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleWorldSelectionDialog.CastleWorldSelectionDialog);
  };
  Object.defineProperty(CastleVCKCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleVCKCommand;
}(__dep_exact_9e901e8e2483a22f_1.VCKCommand);
exports.CastleVCKCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleWorldSelectionDialog = require("gge-module:export_CastleWorldSelectionDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
