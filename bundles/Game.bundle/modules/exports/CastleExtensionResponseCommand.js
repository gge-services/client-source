Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleExtensionResponseCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExtensionResponseCommand, __s1param0);
  CastleExtensionResponseCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0;
    var __s5local1 = __s5param0;
    var __s5local2 = __dep_exact_f855840627e6e145.int(__s5local1.params[0]);
    if (__dep_exact_9e901e8e2483a22f_2.DictionaryUtil.containsKey(__dep_exact_9e901e8e2483a22f_1.BasicController.commandDict, __s5local1.cmdId)) {
      __s5local0 = __dep_exact_9e901e8e2483a22f_1.BasicController.commandDict.get(__s5local1.cmdId);
      __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.lastUsedCommandName = __s5local1.cmdId;
      __s5local0.executeCommand(__s5local2, __s5local1.params);
      __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().serverMessageArrived(__s5local1.cmdId);
    } else {
      console.warn("UNKNOWN COMMAND " + __s5local1.cmdId);
    }
  };
  return CastleExtensionResponseCommand;
}(__dep_exact_9e901e8e2483a22f_3.SimpleCommand);
exports.CastleExtensionResponseCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
