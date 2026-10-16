Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function SMSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SMSCommand, __s1param0);
  Object.defineProperty(SMSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SEND_MESSAGE;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SMSCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    if (__s9param0 != __dep_exact_26a421b704832cff.ERROR.ALL_OK) {
      this.controller.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_ERROR));
    }
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.controller.dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.SENT_OK));
        this.showMessageSentDialog();
        break;
      case __dep_exact_26a421b704832cff.ERROR.PLAYER_IS_IGNORED:
        this.showMessageSentDialog();
        break;
      case __dep_exact_26a421b704832cff.ERROR.INVALID_RECEIVER_ID:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_receiverNotFound")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.USAGE_OF_BADWORDS:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = "";
        if (__s9local0.BW[0]) {
          __s9local1 = __s9local0.BW[0];
        }
        if (__s9local1 && __s9local1 != "" && __s9local1 != " ") {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_badword_textReplacement", [__s9local1])));
        } else {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_badword")));
        }
        break;
      case __dep_exact_26a421b704832cff.ERROR.TEXT_TOO_SHORT:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_textTooShort")));
        break;
      case __dep_exact_26a421b704832cff.ERROR.LEVEL_TOO_HIGH_OR_LOW:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("player_not_on_map")));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  SMSCommand.prototype.showMessageSentDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_message"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_newMessage_messageSent")));
  };
  return SMSCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SMSCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
