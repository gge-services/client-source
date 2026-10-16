Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function OpenEventDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenEventDialogCommand, __s1param0);
  OpenEventDialogCommand.prototype.execute = function (__s5param0) {
    var __s5local0;
    if (__s5param0 === undefined) {
      __s5param0 = null;
    }
    var __s5local1 = true;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0, "Array")) {
      if (__s5param0.length >= 1) {
        __s5local0 = __s5param0[0];
      }
      if (__s5param0.length >= 2) {
        __s5local1 = __s5param0[1];
      }
    } else {
      __s5local0 = __s5param0;
    }
    if (__s5local0) {
      __s5local0.openDialog(__s5local1);
    }
  };
  return OpenEventDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenEventDialogCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
