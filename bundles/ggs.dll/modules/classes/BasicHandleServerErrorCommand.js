Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("BasicHandleServerErrorCommand");
var __s0local1 = function (__s1param0) {
  function BasicHandleServerErrorCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicHandleServerErrorCommand, __s1param0);
  BasicHandleServerErrorCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    this.handleGameSpecificServerError(__s5local0);
  };
  BasicHandleServerErrorCommand.prototype.handleGameSpecificServerError = function (__s7param0) {
    __s0local0.warn("this method is empty since the as file is also empty");
  };
  return BasicHandleServerErrorCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicHandleServerErrorCommand = __s0local1;
