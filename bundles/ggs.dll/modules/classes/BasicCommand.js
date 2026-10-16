Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function () {
  function BasicCommand() {}
  BasicCommand.prototype.executeCommand = function (__s5param0, __s5param1) {
    return true;
  };
  Object.defineProperty(BasicCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCommand.prototype, "cmdId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return BasicCommand;
}();
exports.BasicCommand = __s0local0;
