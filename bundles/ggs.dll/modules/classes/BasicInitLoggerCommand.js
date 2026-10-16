Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function BasicInitLoggerCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInitLoggerCommand, __s1param0);
  BasicInitLoggerCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0 && __s5param0 instanceof __s0local0) {
      this.stage = __s5param0;
    }
    this.configureCoreLogChannels();
    this.configureLogger();
    if (this.env.urlVariables.forceToShowLogger || this.env.isLocal || this.env.isTest) {
      this.enableLogger = true;
    } else {
      this.enableLogger = false;
    }
  };
  BasicInitLoggerCommand.prototype.configureCoreLogChannels = function () {};
  BasicInitLoggerCommand.prototype.configureLogger = function () {};
  Object.defineProperty(BasicInitLoggerCommand.prototype, "enableLogger", {
    set: function (__s14param0) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicInitLoggerCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicInitLoggerCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicInitLoggerCommand = __s0local1;
