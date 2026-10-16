Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function (__s1param0) {
  function BasicTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicTrackingCommand, __s1param0);
  Object.defineProperty(BasicTrackingCommand.prototype, "commandIsAllowed", {
    get: function () {
      return !this.env.isLocal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicTrackingCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicTrackingCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicTrackingCommand = __s0local0;
