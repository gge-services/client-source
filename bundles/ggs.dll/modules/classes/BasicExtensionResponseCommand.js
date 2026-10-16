Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_exact_c95e4ededfdf159c = require("gge-module:exact_c95e4ededfdf159c");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.CORE_LOGGER);
var __s0local1 = function (__s1param0) {
  function BasicExtensionResponseCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicExtensionResponseCommand, __s1param0);
  BasicExtensionResponseCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = Number(__s5local0.params[0]);
    __s0local0.debug("BasicExtensionResponseCommand: " + __s5local0.cmdId + " params: " + __s5local0.params);
    if (__dep_exact_c95e4ededfdf159c.DictionaryUtil.containsKey(__dep_class_BasicController.BasicController.commandDict, __s5local0.cmdId)) {
      __dep_class_BasicController.BasicController.commandDict.get(__s5local0.cmdId).executeCommand(__s5local1, __s5local0.params);
      __dep_class_BasicController.BasicController.getInstance().serverMessageArrived(__s5local0.cmdId);
    } else {
      __s0local0.warn("UNKNOWN SERVER COMMAND: " + __s5local0.cmdId);
    }
  };
  return BasicExtensionResponseCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicExtensionResponseCommand = __s0local1;
