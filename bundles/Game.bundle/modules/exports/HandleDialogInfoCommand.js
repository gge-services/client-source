Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function HandleDialogInfoCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HandleDialogInfoCommand, __s1param0);
  HandleDialogInfoCommand.prototype.execute = function (__s5param0 = null) {
    __s1param0.prototype.execute.call(this);
    if (__s5param0) {
      if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0, "DialogInfoVO")) {
        throw new Error("Argument must be a DialogInfoVO!");
      }
      var __s5local0 = __s5param0;
      if (__s5local0.dialogClass) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s5local0.dialogClass, __s5local0.properties);
      } else if (__s5local0.command) {
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__s5local0.command, __s5local0.parameter);
      }
    }
  };
  return HandleDialogInfoCommand;
}(__dep_exact_9e901e8e2483a22f.BasicClientCommand);
exports.HandleDialogInfoCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
