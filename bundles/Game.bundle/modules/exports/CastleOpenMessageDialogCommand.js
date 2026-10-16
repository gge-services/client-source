Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMessageDataEvent = require("gge-module:export_CastleMessageDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SMarkMessageReadVO = require("gge-module:export_C2SMarkMessageReadVO");
var __s0local0 = function (__s1param0) {
  function CastleOpenMessageDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOpenMessageDialogCommand, __s1param0);
  CastleOpenMessageDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.HANDLE_DIALOG_INFO, __s5local0.dialogInfo);
    if (!__s5local0.read) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMarkMessageReadVO.C2SMarkMessageReadVO(__s5local0.messageID));
    }
    __s5local0.read = true;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleMessageDataEvent.CastleMessageDataEvent(__dep_export_CastleMessageDataEvent.CastleMessageDataEvent.UPDATE_MESSAGELIST));
  };
  return CastleOpenMessageDialogCommand;
}(__dep_exact_9e901e8e2483a22f.BasicClientCommand);
exports.CastleOpenMessageDialogCommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
