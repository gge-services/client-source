Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function CastleLostPasswordCommand(__s3param0 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.ALL_OK1 = 0;
    __s3local0.GENERAL_ERROR1 = 1;
    __s3local0.PLAYER_NOT_FOUND1 = 2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLostPasswordCommand, __s1param0);
  CastleLostPasswordCommand.prototype.execute = function (__s5param0 = null) {
    this.errorCode1 = __s5param0;
    switch (this.errorCode1) {
      case this.ALL_OK1:
        this.all_ok();
        break;
      case this.GENERAL_ERROR1:
        this.general_error();
        break;
      case this.PLAYER_NOT_FOUND1:
        this.player_not_found();
        break;
      default:
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_exact_9e901e8e2483a22f.ServerErrorVO(this.errorCode1, [], "lpp"));
    }
  };
  CastleLostPasswordCommand.prototype.all_ok = function () {
    __s1param0.prototype.all_ok.call(this);
    __dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.isFirstVisit &&= false;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("generic_change_password_copy_send")));
  };
  CastleLostPasswordCommand.prototype.general_error = function () {
    __s1param0.prototype.general_error.call(this);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_1")));
  };
  CastleLostPasswordCommand.prototype.player_not_found = function () {
    __s1param0.prototype.player_not_found.call(this);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("errorCode_21")));
  };
  Object.defineProperty(CastleLostPasswordCommand.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleLostPasswordCommand;
}(__dep_exact_9e901e8e2483a22f.BasicLostPasswordCommand);
exports.CastleLostPasswordCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
