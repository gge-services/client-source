Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_CastleBookmarkPasserProperties = require("gge-module:export_CastleBookmarkPasserProperties");
var __s0local0 = function (__s1param0) {
  function OpenAttackOrderCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenAttackOrderCommand, __s1param0);
  OpenAttackOrderCommand.prototype.execute = function (__s5param0 = null) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_NO_EXIST, this.bindFunction(this.onMessageError));
    __dep_export_CastleModel.CastleModel.messageData.getBodyForTextMessage(__s5param0.mid);
  };
  OpenAttackOrderCommand.prototype.onMessageError = function (__s7param0) {
    this.removeEventListeners();
  };
  OpenAttackOrderCommand.prototype.onMessageBodyAvailable = function (__s9param0) {
    this.removeEventListeners();
    var __s9local0 = __dep_export_CastleModel.CastleModel.bookmarkData.parseBookmarkObject(__s9param0.params[1]);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAttackOrderReceivedDialog.CastleAttackOrderReceivedDialog, new __dep_export_CastleBookmarkPasserProperties.CastleBookmarkPasserProperties(__s9local0));
  };
  OpenAttackOrderCommand.prototype.removeEventListeners = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.MESSAGE_NO_EXIST, this.bindFunction(this.onMessageError));
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  return OpenAttackOrderCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenAttackOrderCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAttackOrderReceivedDialog = require("gge-module:export_CastleAttackOrderReceivedDialog");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
